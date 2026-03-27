import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { PixelButton } from '../ui/PixelButton';
import { ScoreCard } from './ScoreCard';
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
      {/* Victory confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          colors={['#ff2d95', '#00f5ff', '#ffd93d', '#bf5af2', '#30d158']}
        />
      )}

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
    </div>
  );
}
