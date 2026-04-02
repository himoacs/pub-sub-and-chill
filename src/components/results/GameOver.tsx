import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { PixelButton } from '../ui/PixelButton';
import { ScoreCard } from './ScoreCard';
import { Leaderboard } from './Leaderboard';
import { useGame } from '../../context/GameContext';
import { audioService } from '../../services/audio';

interface GameOverProps {
  isVictory: boolean;
  onPlayAgain: () => void;
}

export function GameOver({
  isVictory,
  onPlayAgain,
}: GameOverProps) {
  const { state, saveGameResults } = useGame();
  const [showConfetti, setShowConfetti] = useState(isVictory);

  // Handle visibility change to prevent blank screen when returning from LinkedIn
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Page is being backgrounded - stop expensive animations
        setShowConfetti(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    // Play appropriate sound (with limited duration)
    if (isVictory) {
      audioService.playVictory();
    } else {
      audioService.playGameOver();
    }

    // Save results
    saveGameResults();

    // Hide confetti after animation
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isVictory, saveGameResults, showConfetti]);

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-4 pt-4 md:pt-4 relative overflow-auto">
      {/* Victory confetti - wrapped to ensure touches pass through */}
      {showConfetti && (
        <div style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 50 }}>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
            colors={['#ff2d95', '#00f5ff', '#ffd93d', '#bf5af2', '#30d158']}
          />
        </div>
      )}

      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        {/* Score Card Section - Narrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-3 md:mb-6">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className={`font-pixel text-xl md:text-3xl mb-1 md:mb-2 ${
              isVictory ? 'text-arcade-yellow' : 'text-arcade-red'
            }`}
          >
            {isVictory ? '🏆 VICTORY! 🏆' : 'GAME OVER'}
          </motion.h1>
          <p className="font-arcade text-base md:text-lg text-white/70">
            {isVictory 
              ? 'You conquered all 10 levels!'
              : state.timeRemaining <= 0 
                ? 'Time ran out!' 
                : 'Not enough points to advance'
            }
          </p>
        </div>

        {/* Score Card */}
        {state.player && (
          <ScoreCard
            nickname={state.player.nickname}
            score={state.score}
            level={state.currentLevel}
            correctAnswers={state.correctAnswers}
            wrongAnswers={state.wrongAnswers}
            longestStreak={state.longestStreak}
            achievements={[
              ...state.player.achievements,
              ...state.newAchievements.map(a => a.id),
            ]}
          />
        )}

        {/* New achievements - compact for mobile */}
        {state.newAchievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3 md:mt-6 bg-arcade-dark/50 border-2 border-arcade-yellow/30 p-2 md:p-4"
          >
            <h3 className="font-pixel text-xs md:text-sm text-arcade-yellow mb-2">
              🎉 NEW ACHIEVEMENTS!
            </h3>
            <div className="flex flex-wrap gap-2">
              {state.newAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center gap-2 bg-arcade-darker/50 p-2 rounded"
                >
                  <span className="text-lg md:text-2xl">{achievement.icon}</span>
                  <span className="font-arcade text-xs text-arcade-cyan">
                    {achievement.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action buttons */}
        <div className="mt-3 md:mt-6 space-y-3 pb-4">
          <PixelButton
            variant="warning"
            size="lg"
            fullWidth
            glow
            onClick={onPlayAgain}
          >
            PLAY AGAIN
          </PixelButton>
        </div>
      </motion.div>

      {/* Leaderboard Section - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        {/* Leaderboard status message */}
        {state.leaderboardStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 bg-arcade-green/20 border-2 border-arcade-green p-3 text-center max-w-2xl mx-auto"
          >
            <p className="font-pixel text-sm text-arcade-green">
              🏆 You made the global leaderboard!
            </p>
          </motion.div>
        )}

        {/* Global Leaderboard */}
        <Leaderboard 
          currentPlayerId={state.player?.id}
          currentNickname={state.player?.nickname}
          autoRefresh={false}
        />
      </motion.div>
      </div>
    </div>
  );
}
