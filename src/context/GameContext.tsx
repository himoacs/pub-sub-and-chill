import React, { createContext, useContext, useReducer, useCallback, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GameState, GameAction, Player, PowerUp, Question, GameStats, LeaderboardEntry } from '../types';
import { getQuestionsForLevel, LEVELS } from '../data/questions';
import { checkAchievements } from '../data/achievements';
import { calculateScore, canAdvanceToNextLevel } from '../services/scoring';
import { audioService } from '../services/audio';
import { 
  savePlayerLocally, 
  getLocalPlayer,
} from '../services/storage';
import { submitScore, isTopScore } from '../services/leaderboard';

// Initial power-ups
const INITIAL_POWER_UPS: PowerUp[] = [
  {
    id: 'timeFreeze',
    name: 'Time Freeze',
    description: 'Pause timer for 10 seconds',
    icon: '⏱️',
    available: 1,
    used: 0,
  },
  {
    id: 'fiftyFifty',
    name: '50/50',
    description: 'Remove 2 wrong answers',
    icon: '✂️',
    available: 1,
    used: 0,
  },
  {
    id: 'skip',
    name: 'Skip',
    description: 'Skip question without penalty',
    icon: '⏭️',
    available: 1,
    used: 0,
  },
];

// Initial game state
const initialState: GameState = {
  player: null,
  status: 'idle',
  currentLevel: 1,
  currentQuestionIndex: 0,
  questions: [],
  score: 0,
  levelScore: 0,
  timeRemaining: 60,
  isTimerPaused: false,
  currentStreak: 0,
  longestStreak: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  fastestAnswer: Infinity,
  powerUps: INITIAL_POWER_UPS,
  eliminatedOptions: [],
  usedQuestionIds: [],
  newAchievements: [],
  isMuted: false,
  musicEnabled: false,
  leaderboardStatus: 'idle',
};

// Game reducer
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_PLAYER':
      return { ...state, player: action.payload };

    case 'START_GAME': {
      const questions = getQuestionsForLevel(1, []);
      const questionIds = questions.map(q => q.id);
      return {
        ...state,
        status: 'playing',
        currentLevel: 1,
        currentQuestionIndex: 0,
        questions,
        score: 0,
        levelScore: 0,
        timeRemaining: LEVELS[0].timeLimit,
        isTimerPaused: false,
        currentStreak: 0,
        longestStreak: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        fastestAnswer: Infinity,
        powerUps: INITIAL_POWER_UPS.map(p => ({ ...p, used: 0 })),
        eliminatedOptions: [],
        usedQuestionIds: questionIds,
        newAchievements: [],
      };
    }

    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };

    case 'ANSWER_QUESTION': {
      const { answerIndex, timeSpent } = action.payload;
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = currentQuestion.correctAnswer === answerIndex;
      
      const scoreResult = calculateScore(
        state.currentLevel,
        state.currentStreak,
        timeSpent,
        isCorrect
      );

      const newFastestAnswer = isCorrect ? Math.min(state.fastestAnswer, timeSpent) : state.fastestAnswer;
      const newLongestStreak = Math.max(state.longestStreak, scoreResult.newStreak);

      return {
        ...state,
        score: state.score + scoreResult.totalPoints,
        levelScore: state.levelScore + scoreResult.totalPoints,
        currentStreak: scoreResult.newStreak,
        longestStreak: newLongestStreak,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        wrongAnswers: isCorrect ? state.wrongAnswers : state.wrongAnswers + 1,
        fastestAnswer: newFastestAnswer,
      };
    }

    case 'SKIP_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      
      // Check if we've skipped past all questions in this level
      if (nextIndex >= state.questions.length) {
        // If time is still remaining, reload more questions to continue playing
        if (state.timeRemaining > 0) {
          const moreQuestions = getQuestionsForLevel(state.currentLevel, state.usedQuestionIds);
          // If no more unique questions available
          if (moreQuestions.length === 0) {
            // Check if can advance
            if (canAdvanceToNextLevel(state.currentLevel, state.levelScore)) {
              return { ...state, status: 'levelComplete', eliminatedOptions: [] };
            } else {
              return { ...state, status: 'gameOver', eliminatedOptions: [] };
            }
          }
          const newQuestionIds = moreQuestions.map(q => q.id);
          return {
            ...state,
            questions: moreQuestions,
            currentQuestionIndex: 0,
            eliminatedOptions: [],
            usedQuestionIds: [...state.usedQuestionIds, ...newQuestionIds],
          };
        }
        // Time ran out - check if can advance
        if (canAdvanceToNextLevel(state.currentLevel, state.levelScore)) {
          return { ...state, status: 'levelComplete', eliminatedOptions: [] };
        } else {
          return { ...state, status: 'gameOver', eliminatedOptions: [] };
        }
      }

      return {
        ...state,
        currentQuestionIndex: nextIndex,
        eliminatedOptions: [],
      };
    }

    case 'NEXT_QUESTION': {
      const nextIndex = state.currentQuestionIndex + 1;
      
      // Check if we've answered all questions in this level
      if (nextIndex >= state.questions.length) {
        // If time is still remaining, reload more questions to continue playing
        if (state.timeRemaining > 0) {
          const moreQuestions = getQuestionsForLevel(state.currentLevel, state.usedQuestionIds);
          // If no more unique questions available, just keep playing with what we have
          if (moreQuestions.length === 0) {
            // Check if can advance
            if (canAdvanceToNextLevel(state.currentLevel, state.levelScore)) {
              return { ...state, status: 'levelComplete', eliminatedOptions: [] };
            } else {
              return { ...state, status: 'gameOver', eliminatedOptions: [] };
            }
          }
          const newQuestionIds = moreQuestions.map(q => q.id);
          return {
            ...state,
            questions: moreQuestions,
            currentQuestionIndex: 0,
            eliminatedOptions: [],
            usedQuestionIds: [...state.usedQuestionIds, ...newQuestionIds],
          };
        }
        // Time ran out - check if can advance
        if (canAdvanceToNextLevel(state.currentLevel, state.levelScore)) {
          return { ...state, status: 'levelComplete', eliminatedOptions: [] };
        } else {
          return { ...state, status: 'gameOver', eliminatedOptions: [] };
        }
      }

      return {
        ...state,
        currentQuestionIndex: nextIndex,
        eliminatedOptions: [],
      };
    }

    case 'COMPLETE_LEVEL':
      return { ...state, status: 'levelComplete' };

    case 'START_NEXT_LEVEL': {
      const nextLevel = state.currentLevel + 1;
      
      // Check if completed all levels
      if (nextLevel > LEVELS.length) {
        return { ...state, status: 'victory' };
      }

      const questions = getQuestionsForLevel(nextLevel, state.usedQuestionIds);
      
      // Defensive check: If no questions available, end game gracefully instead of blank screen
      if (questions.length === 0) {
        console.warn(`No questions available for level ${nextLevel}. Ending game.`);
        return { ...state, status: 'gameOver' };
      }
      
      const newQuestionIds = questions.map(q => q.id);
      const levelConfig = LEVELS[nextLevel - 1];

      return {
        ...state,
        status: 'playing',
        currentLevel: nextLevel,
        currentQuestionIndex: 0,
        questions,
        levelScore: 0,
        timeRemaining: levelConfig.timeLimit,
        isTimerPaused: false,
        eliminatedOptions: [],
        usedQuestionIds: [...state.usedQuestionIds, ...newQuestionIds],
      };
    }

    case 'TICK_TIMER': {
      if (state.isTimerPaused || state.status !== 'playing') {
        return state;
      }
      
      const newTime = state.timeRemaining - 1;
      
      if (newTime <= 0) {
        // Time's up! Check if player earned enough points to advance
        if (canAdvanceToNextLevel(state.currentLevel, state.levelScore)) {
          return { ...state, timeRemaining: 0, status: 'levelComplete' };
        } else {
          return { ...state, timeRemaining: 0, status: 'gameOver' };
        }
      }
      
      return { ...state, timeRemaining: newTime };
    }

    case 'PAUSE_TIMER':
      return { ...state, isTimerPaused: true };

    case 'RESUME_TIMER':
      return { ...state, isTimerPaused: false };

    case 'USE_POWER_UP': {
      const powerUpId = action.payload;
      const powerUps = state.powerUps.map(p => {
        if (p.id === powerUpId && p.available > p.used) {
          return { ...p, used: p.used + 1 };
        }
        return p;
      });
      return { ...state, powerUps };
    }

    case 'SET_ELIMINATED_OPTIONS':
      return { ...state, eliminatedOptions: action.payload };

    case 'GAME_OVER':
      return { ...state, status: 'gameOver' };

    case 'VICTORY':
      return { ...state, status: 'victory' };

    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        newAchievements: [...state.newAchievements, action.payload],
      };

    case 'TOGGLE_MUTE':
      return { ...state, isMuted: !state.isMuted };

    case 'TOGGLE_MUSIC':
      return { ...state, musicEnabled: !state.musicEnabled };

    case 'SET_LEADERBOARD_STATUS':
      return { ...state, leaderboardStatus: action.payload };

    case 'RESET_GAME':
      return {
        ...initialState,
        player: state.player,
        isMuted: state.isMuted,
        musicEnabled: state.musicEnabled,
      };

    default:
      return state;
  }
}

// Context type
interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  createNewPlayer: (nickname: string) => Promise<Player>;
  startGame: () => void;
  answerQuestion: (answerIndex: number, timeSpent: number) => void;
  nextQuestion: () => void;
  skipQuestion: () => void;
  startNextLevel: () => void;
  usePowerUp: (powerUpId: PowerUp['id']) => void;
  useTimeFreezeEffect: () => void;
  useFiftyFiftyEffect: () => void;
  resetGame: () => void;
  toggleMute: () => void;
  toggleMusic: () => void;
  getCurrentQuestion: () => Question | null;
  getGameStats: () => GameStats;
  saveGameResults: () => Promise<void>;
}

const GameContext = createContext<GameContextType | null>(null);

// Provider component
export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const timerRef = useRef<number | null>(null);
  const freezeTimerRef = useRef<number | null>(null);
  const questionStartTimeRef = useRef<number>(Date.now());

  // Load player from local storage on mount
  useEffect(() => {
    const savedPlayer = getLocalPlayer();
    if (savedPlayer) {
      dispatch({ type: 'SET_PLAYER', payload: savedPlayer });
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (state.status === 'playing' && !state.isTimerPaused) {
      timerRef.current = window.setInterval(() => {
        dispatch({ type: 'TICK_TIMER' });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [state.status, state.isTimerPaused]);

  // Track question start time
  useEffect(() => {
    if (state.status === 'playing') {
      questionStartTimeRef.current = Date.now();
    }
  }, [state.currentQuestionIndex, state.status]);

  // Play warning sounds
  useEffect(() => {
    if (state.status === 'playing' && state.timeRemaining <= 10 && state.timeRemaining > 0) {
      audioService.playTick(state.timeRemaining);
    }
  }, [state.timeRemaining, state.status]);

  // Create new player
  const createNewPlayer = useCallback(async (nickname: string): Promise<Player> => {
    const newPlayer: Player = {
      id: uuidv4(),
      nickname,
      createdAt: new Date(),
      totalScore: 0,
      highestLevel: 0,
      achievements: [],
      gamesPlayed: 0,
    };

    // Save locally
    savePlayerLocally(newPlayer);

    dispatch({ type: 'SET_PLAYER', payload: newPlayer });
    return newPlayer;
  }, []);

  // Start game
  const startGame = useCallback(() => {
    audioService.init();
    dispatch({ type: 'START_GAME' });
    questionStartTimeRef.current = Date.now();
  }, []);

  // Answer question
  const answerQuestion = useCallback((answerIndex: number, timeSpent: number) => {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === answerIndex;

    if (isCorrect) {
      audioService.playCorrect(state.currentStreak);
    } else {
      audioService.play('wrong');
    }

    dispatch({ type: 'ANSWER_QUESTION', payload: { answerIndex, timeSpent } });
  }, [state.questions, state.currentQuestionIndex, state.currentStreak]);

  // Next question
  const nextQuestion = useCallback(() => {
    dispatch({ type: 'NEXT_QUESTION' });
  }, []);

  // Skip question
  const skipQuestion = useCallback(() => {
    const skipPowerUp = state.powerUps.find(p => p.id === 'skip');
    if (skipPowerUp && skipPowerUp.available > skipPowerUp.used) {
      audioService.play('powerUp');
      dispatch({ type: 'USE_POWER_UP', payload: 'skip' });
      dispatch({ type: 'SKIP_QUESTION' });
    }
  }, [state.powerUps]);

  // Start next level
  const startNextLevel = useCallback(() => {
    audioService.playLevelUp();
    dispatch({ type: 'START_NEXT_LEVEL' });
    questionStartTimeRef.current = Date.now();
  }, []);

  // Use power-up
  const usePowerUp = useCallback((powerUpId: PowerUp['id']) => {
    const powerUp = state.powerUps.find(p => p.id === powerUpId);
    if (powerUp && powerUp.available > powerUp.used) {
      audioService.play('powerUp');
      dispatch({ type: 'USE_POWER_UP', payload: powerUpId });
    }
  }, [state.powerUps]);

  // Time freeze effect
  const useTimeFreezeEffect = useCallback(() => {
    const timeFreezeUp = state.powerUps.find(p => p.id === 'timeFreeze');
    if (timeFreezeUp && timeFreezeUp.available > timeFreezeUp.used) {
      dispatch({ type: 'USE_POWER_UP', payload: 'timeFreeze' });
      dispatch({ type: 'PAUSE_TIMER' });
      
      // Resume after 10 seconds
      freezeTimerRef.current = window.setTimeout(() => {
        dispatch({ type: 'RESUME_TIMER' });
      }, 10000);
    }
  }, [state.powerUps]);

  // 50/50 effect
  const useFiftyFiftyEffect = useCallback(() => {
    const fiftyFiftyUp = state.powerUps.find(p => p.id === 'fiftyFifty');
    if (fiftyFiftyUp && fiftyFiftyUp.available > fiftyFiftyUp.used) {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const correctIndex = currentQuestion.correctAnswer;
      
      // Get indices of wrong answers
      const wrongIndices = [0, 1, 2, 3].filter(i => i !== correctIndex);
      
      // Randomly select 2 wrong answers to eliminate
      const shuffled = wrongIndices.sort(() => Math.random() - 0.5);
      const eliminated = shuffled.slice(0, 2);
      
      dispatch({ type: 'USE_POWER_UP', payload: 'fiftyFifty' });
      dispatch({ type: 'SET_ELIMINATED_OPTIONS', payload: eliminated });
    }
  }, [state.powerUps, state.questions, state.currentQuestionIndex]);

  // Reset game
  const resetGame = useCallback(() => {
    if (freezeTimerRef.current) {
      clearTimeout(freezeTimerRef.current);
    }
    dispatch({ type: 'RESET_GAME' });
  }, []);

  // Toggle mute
  const toggleMute = useCallback(() => {
    const newMuted = audioService.toggleMute();
    dispatch({ type: 'TOGGLE_MUTE' });
    return newMuted;
  }, []);

  // Toggle music
  const toggleMusic = useCallback(() => {
    const newMusicEnabled = audioService.toggleMusic();
    dispatch({ type: 'TOGGLE_MUSIC' });
    return newMusicEnabled;
  }, []);

  // Get current question
  const getCurrentQuestion = useCallback((): Question | null => {
    if (state.questions.length === 0) return null;
    return state.questions[state.currentQuestionIndex] || null;
  }, [state.questions, state.currentQuestionIndex]);

  // Get game stats for achievement checking
  const getGameStats = useCallback((): GameStats => {
    const powerUpsUsed = state.powerUps.reduce((sum, p) => sum + p.used, 0);
    
    return {
      currentLevel: state.currentLevel,
      totalScore: state.score,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      currentStreak: state.currentStreak,
      longestStreak: state.longestStreak,
      fastestAnswer: state.fastestAnswer,
      powerUpsUsed,
      levelCompletionTimes: [], // Track this separately if needed
      perfectLevels: state.wrongAnswers === 0 ? [state.currentLevel] : [],
      totalGamesPlayed: state.player?.gamesPlayed || 0,
    };
  }, [state]);

  // Save game results
  const saveGameResults = useCallback(async () => {
    if (!state.player) return;

    const stats = getGameStats();
    
    // Check for new achievements
    const newAchievements = checkAchievements(stats, state.player.achievements);
    newAchievements.forEach(achievement => {
      dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: achievement });
      audioService.play('achievement');
    });

    // Update player
    const updatedPlayer: Player = {
      ...state.player,
      totalScore: Math.max(state.player.totalScore, state.score),
      highestLevel: Math.max(state.player.highestLevel, state.currentLevel),
      achievements: [
        ...state.player.achievements,
        ...newAchievements.map(a => a.id),
      ],
      gamesPlayed: state.player.gamesPlayed + 1,
    };

    // Save locally
    savePlayerLocally(updatedPlayer);
    dispatch({ type: 'SET_PLAYER', payload: updatedPlayer });

    // Submit to global leaderboard (fire-and-forget)
    if (state.score > 0) {
      try {
        dispatch({ type: 'SET_LEADERBOARD_STATUS', payload: 'submitting' });
        
        // Check if score qualifies for top 30
        const qualifies = await isTopScore(state.score);
        
        if (qualifies) {
          const leaderboardEntry: LeaderboardEntry = {
            id: updatedPlayer.id,
            nickname: updatedPlayer.nickname,
            score: state.score,
            level: state.currentLevel,
            achievementCount: updatedPlayer.achievements.length,
            longestStreak: state.longestStreak,
            submittedAt: new Date().toISOString(),
          };
          
          const success = await submitScore(leaderboardEntry);
          dispatch({ 
            type: 'SET_LEADERBOARD_STATUS', 
            payload: success ? 'success' : 'error' 
          });
        } else {
          // Score doesn't qualify, but that's okay
          dispatch({ type: 'SET_LEADERBOARD_STATUS', payload: 'idle' });
        }
      } catch (error) {
        console.error('Failed to submit score to leaderboard:', error);
        dispatch({ type: 'SET_LEADERBOARD_STATUS', payload: 'error' });
      }
    }
  }, [state.player, state.score, state.currentLevel, getGameStats]);

  const contextValue: GameContextType = {
    state,
    dispatch,
    createNewPlayer,
    startGame,
    answerQuestion,
    nextQuestion,
    skipQuestion,
    startNextLevel,
    usePowerUp,
    useTimeFreezeEffect,
    useFiftyFiftyEffect,
    resetGame,
    toggleMute,
    toggleMusic,
    getCurrentQuestion,
    getGameStats,
    saveGameResults,
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use game context
export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
