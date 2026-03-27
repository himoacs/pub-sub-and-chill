import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from './context/GameContext';
import { NicknameEntry } from './components/game/NicknameEntry';
import { Timer } from './components/game/Timer';
import { QuestionCard } from './components/game/QuestionCard';
import { PowerUps } from './components/game/PowerUps';
import { LevelProgress } from './components/game/LevelProgress';
import { LevelComplete } from './components/game/LevelComplete';
import { GameOver } from './components/results/GameOver';
import { PixelButton } from './components/ui/PixelButton';
import { SolaceLogo } from './components/ui/SolaceLogo';
import { LEVELS } from './data/questions';
import { audioService } from './services/audio';

type Screen = 'entry' | 'menu' | 'instructions' | 'playing' | 'levelComplete' | 'gameOver';

function GameContent() {
  const { 
    state, 
    startGame, 
    answerQuestion, 
    nextQuestion,
    skipQuestion,
    startNextLevel,
    useTimeFreezeEffect,
    useFiftyFiftyEffect,
    resetGame,
    toggleMute,
    toggleMusic,
    getCurrentQuestion,
  } = useGame();

  const [screen, setScreen] = useState<Screen>('entry');
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [answerTimeout, setAnswerTimeout] = useState<number | null>(null);

  // Handle game status changes
  useEffect(() => {
    switch (state.status) {
      case 'levelComplete':
        setScreen('levelComplete');
        break;
      case 'gameOver':
      case 'victory':
        setScreen('gameOver');
        break;
    }
  }, [state.status]);

  const handleStartGame = () => {
    audioService.init();
    startGame();
    setScreen('playing');
    setQuestionAnswered(false);
  };

  const handleShowInstructions = () => {
    audioService.init();
    setScreen('instructions');
  };

  const handleAnswer = useCallback((answerIndex: number) => {
    if (questionAnswered) return;
    
    const timeSpent = (LEVELS[state.currentLevel - 1].timeLimit - state.timeRemaining) * 1000;
    answerQuestion(answerIndex, timeSpent);
    setQuestionAnswered(true);

    // Auto-proceed to next question after delay
    const timeout = window.setTimeout(() => {
      nextQuestion();
      setQuestionAnswered(false);
    }, 1500);
    setAnswerTimeout(timeout);
  }, [state.currentLevel, state.timeRemaining, questionAnswered, answerQuestion, nextQuestion]);

  const handleNextLevel = () => {
    if (state.currentLevel >= 10) {
      setScreen('gameOver');
    } else {
      startNextLevel();
      setScreen('playing');
      setQuestionAnswered(false);
    }
  };

  const handlePlayAgain = () => {
    if (answerTimeout) {
      clearTimeout(answerTimeout);
    }
    resetGame();
    setScreen('menu');
    setQuestionAnswered(false);
  };

  const handleSkip = () => {
    if (questionAnswered) return;
    skipQuestion();
    setQuestionAnswered(false);
  };

  const currentQuestion = getCurrentQuestion();
  const levelConfig = LEVELS[state.currentLevel - 1];

  return (
    <div className="min-h-screen bg-arcade-dark">
      {/* Scanline overlay */}
      <div className="scanline-overlay" />

      {/* Audio controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleMute}
          className="p-2 bg-arcade-dark/80 border-2 border-arcade-purple/50 hover:border-arcade-purple transition-colors"
          title={state.isMuted ? 'Unmute' : 'Mute'}
        >
          <span className="text-xl">{state.isMuted ? '🔇' : '🔊'}</span>
        </button>
        <button
          onClick={toggleMusic}
          className="p-2 bg-arcade-dark/80 border-2 border-arcade-purple/50 hover:border-arcade-purple transition-colors"
          title={state.musicEnabled ? 'Disable Music' : 'Enable Music'}
        >
          <span className="text-xl">{state.musicEnabled ? '🎵' : '🎶'}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* Entry screen */}
        {screen === 'entry' && (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NicknameEntry onComplete={() => setScreen('menu')} />
          </motion.div>
        )}

        {/* Menu screen */}
        {screen === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <div className="text-center max-w-md w-full">
              {/* Solace Logo */}
              <SolaceLogo className="mb-2 md:mb-4" />
              
              {/* Title */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="mb-4 md:mb-8"
              >
                <h1 className="font-pixel text-2xl md:text-4xl text-arcade-pink mb-1 md:mb-2">
                  PUB/SUB
                </h1>
                <h1 className="font-pixel text-2xl md:text-4xl text-arcade-cyan mb-2 md:mb-4">
                  AND CHILL
                </h1>
                <p className="font-arcade text-base md:text-xl text-arcade-yellow">
                  SOLACE TRIVIA ARCADE
                </p>
              </motion.div>

              {/* Player info */}
              {state.player && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4 md:mb-8 bg-arcade-dark/50 border-2 border-arcade-cyan/30 p-3 md:p-4"
                >
                  <p className="font-arcade text-xs md:text-sm text-white/50">PLAYER</p>
                  <p className="font-pixel text-base md:text-lg text-arcade-cyan mb-2">
                    {state.player.nickname}
                  </p>
                  <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm">
                    <div>
                      <p className="font-arcade text-white/50">HIGH SCORE</p>
                      <p className="font-pixel text-arcade-yellow">
                        {state.player.totalScore.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="font-arcade text-white/50">BEST LEVEL</p>
                      <p className="font-pixel text-arcade-green">
                        {state.player.highestLevel}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Menu buttons */}
              <div className="space-y-4">
                <PixelButton
                  variant="warning"
                  size="lg"
                  fullWidth
                  glow
                  onClick={handleShowInstructions}
                >
                  START GAME
                </PixelButton>

              </div>

              {/* Game info */}
              <div className="mt-4 md:mt-8 font-arcade text-xs md:text-sm text-white/40">
                <p>10 Levels • 60 seconds each</p>
                <p>Test your Solace knowledge!</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructions screen */}
        {screen === 'instructions' && (
          <motion.div
            key="instructions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-4 pt-8 md:pt-4 overflow-auto"
          >
            <div className="max-w-lg w-full bg-arcade-darker/80 border-4 border-arcade-cyan p-4 md:p-6">
              <h2 className="font-pixel text-lg md:text-2xl text-arcade-yellow text-center mb-4 md:mb-6">
                HOW TO PLAY
              </h2>
              
              <div className="space-y-3 font-arcade text-white">
                <div className="flex items-start gap-2">
                  <span className="text-arcade-pink text-lg">🎯</span>
                  <p className="text-xs md:text-sm">Answer trivia questions across <span className="text-arcade-cyan">10 levels</span> covering Solace concepts</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-arcade-pink text-lg">⏱️</span>
                  <p className="text-xs md:text-sm">You have <span className="text-arcade-yellow">60 seconds</span> per level - answer as many questions as you can!</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-arcade-pink text-lg">🔥</span>
                  <p className="text-xs md:text-sm">Build <span className="text-arcade-green">streaks</span> with consecutive correct answers for bonus points</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-arcade-pink text-lg">⚡</span>
                  <p className="text-xs md:text-sm">Use <span className="text-arcade-purple">power-ups</span>: Time Freeze, 50/50, and Skip Question</p>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="text-arcade-pink text-lg">🏆</span>
                  <p className="text-xs md:text-sm">Earn <span className="text-arcade-yellow">achievements</span> and compete on the leaderboard!</p>
                </div>
              </div>

              <div className="mt-4 md:mt-6 text-center">
                <p className="font-arcade text-[10px] md:text-xs text-white/50 mb-3 md:mb-4">
                  Topics: Overview • Delivery • Protocols • Topics • Queues • Replay • Bridges • DMR • HA • DR
                </p>
                
                <PixelButton
                  variant="warning"
                  size="lg"
                  glow
                  onClick={handleStartGame}
                >
                  LET'S GO! 🚀
                </PixelButton>
              </div>
            </div>
          </motion.div>
        )}

        {/* Playing screen */}
        {screen === 'playing' && state.status === 'playing' && currentQuestion && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col p-2 md:p-4 pt-12 md:pt-4"
          >
            {/* Header */}
            <div className="flex-shrink-0 mb-3 md:mb-6">
              <LevelProgress
                level={state.currentLevel}
                score={state.score}
                levelScore={state.levelScore}
                streak={state.currentStreak}
              />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col items-center justify-start md:justify-center">
              {/* Timer */}
              <div className="mb-3 md:mb-6">
                <Timer
                  timeRemaining={state.timeRemaining}
                  maxTime={levelConfig?.timeLimit || 60}
                  isPaused={state.isTimerPaused}
                />
              </div>

              {/* Question */}
              <div className="w-full mb-3 md:mb-6">
                <QuestionCard
                  question={currentQuestion}
                  onAnswer={handleAnswer}
                  eliminatedOptions={state.eliminatedOptions}
                  questionNumber={state.currentQuestionIndex + 1}
                  totalQuestions={state.questions.length}
                  disabled={questionAnswered}
                />
              </div>

              {/* Power-ups */}
              <div className="flex-shrink-0">
                <PowerUps
                  powerUps={state.powerUps}
                  onUseTimeFreeze={useTimeFreezeEffect}
                  onUseFiftyFifty={useFiftyFiftyEffect}
                  onUseSkip={handleSkip}
                  disabled={questionAnswered || state.isTimerPaused}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Level complete screen */}
        {screen === 'levelComplete' && (
          <motion.div
            key="levelComplete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LevelComplete
              level={state.currentLevel}
              levelScore={state.levelScore}
              totalScore={state.score}
              onContinue={handleNextLevel}
            />
          </motion.div>
        )}

        {/* Game over screen */}
        {screen === 'gameOver' && (
          <motion.div
            key="gameOver"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameOver
              isVictory={state.status === 'victory'}
              onPlayAgain={handlePlayAgain}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;
