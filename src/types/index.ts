// Game Types
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  topic: LevelTopic;
  explanation?: string;
}

export type LevelTopic = 
  | 'overview'
  | 'delivery'
  | 'protocols'
  | 'topics'
  | 'queues'
  | 'replay'
  | 'bridges'
  | 'dmr'
  | 'ha'
  | 'dr';

export interface Level {
  number: number;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  pointsPerQuestion: number;
  requiredPoints: number; // Points needed to advance
  timeLimit: number; // seconds
  questionsCount: number;
}

export interface Player {
  id: string;
  nickname: string;
  createdAt: Date;
  totalScore: number;
  highestLevel: number;
  achievements: string[];
  gamesPlayed: number;
}

export interface LeaderboardEntry {
  id: string; // player ID
  nickname: string;
  score: number; // totalScore
  level: number; // highestLevel reached
  achievementCount: number;
  longestStreak: number;
  submittedAt: string; // ISO date string
}

export interface LeaderboardData {
  entries: LeaderboardEntry[];
  lastUpdated: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (stats: GameStats) => boolean;
}

export interface GameStats {
  currentLevel: number;
  totalScore: number;
  correctAnswers: number;
  wrongAnswers: number;
  currentStreak: number;
  longestStreak: number;
  fastestAnswer: number; // milliseconds
  powerUpsUsed: number;
  levelCompletionTimes: number[];
  perfectLevels: number[];
  totalGamesPlayed: number;
}

export interface PowerUp {
  id: 'timeFreeze' | 'fiftyFifty' | 'skip';
  name: string;
  description: string;
  icon: string;
  available: number;
  used: number;
}

export interface GameState {
  // Player
  player: Player | null;
  
  // Game status
  status: 'idle' | 'playing' | 'levelComplete' | 'gameOver' | 'victory';
  
  // Current game
  currentLevel: number;
  currentQuestionIndex: number;
  questions: Question[];
  score: number;
  levelScore: number;
  
  // Timer
  timeRemaining: number;
  isTimerPaused: boolean;
  
  // Streak & stats
  currentStreak: number;
  longestStreak: number;
  correctAnswers: number;
  wrongAnswers: number;
  fastestAnswer: number;
  
  // Power-ups
  powerUps: PowerUp[];
  
  // Eliminated options (for 50/50)
  eliminatedOptions: number[];
  
  // Track used questions to avoid repeats
  usedQuestionIds: string[];
  
  // Achievements unlocked this game
  newAchievements: Achievement[];
  
  // Audio
  isMuted: boolean;
  musicEnabled: boolean;
  
  // Leaderboard
  leaderboardStatus: 'idle' | 'submitting' | 'success' | 'error';
}

export type GameAction =
  | { type: 'SET_PLAYER'; payload: Player }
  | { type: 'START_GAME' }
  | { type: 'SET_QUESTIONS'; payload: Question[] }
  | { type: 'ANSWER_QUESTION'; payload: { answerIndex: number; timeSpent: number } }
  | { type: 'SKIP_QUESTION' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'COMPLETE_LEVEL' }
  | { type: 'START_NEXT_LEVEL' }
  | { type: 'TICK_TIMER' }
  | { type: 'PAUSE_TIMER' }
  | { type: 'RESUME_TIMER' }
  | { type: 'USE_POWER_UP'; payload: PowerUp['id'] }
  | { type: 'SET_ELIMINATED_OPTIONS'; payload: number[] }
  | { type: 'GAME_OVER' }
  | { type: 'VICTORY' }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: Achievement }
  | { type: 'TOGGLE_MUTE' }
  | { type: 'TOGGLE_MUSIC' }
  | { type: 'SET_LEADERBOARD_STATUS'; payload: 'idle' | 'submitting' | 'success' | 'error' }
  | { type: 'RESET_GAME' };
