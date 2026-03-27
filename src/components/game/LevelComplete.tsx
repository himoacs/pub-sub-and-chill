import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { PixelButton } from '../ui/PixelButton';
import { PixelCard } from '../ui/PixelCard';
import { SollyCelebrating } from '../ui/Solly';
import { LEVELS } from '../../data/questions';
import { formatScore } from '../../services/scoring';
import { useGame } from '../../context/GameContext';

interface LevelCompleteProps {
  level: number;
  levelScore: number;
  totalScore: number;
  onContinue: () => void;
}

export function LevelComplete({
  level,
  levelScore,
  totalScore,
  onContinue,
}: LevelCompleteProps) {
  const { state } = useGame();
  const [showConfetti, setShowConfetti] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const levelConfig = LEVELS[level - 1];
  const nextLevelConfig = LEVELS[level];

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const isVictory = level === 10;

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-4 pt-4 relative overflow-auto">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={isVictory ? 500 : 200}
          colors={['#ff2d95', '#00f5ff', '#ffd93d', '#bf5af2', '#30d158']}
        />
      )}

      <PixelCard variant="highlight" className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
        >
          {/* Level complete text */}
          <motion.h2
            className="font-pixel text-xl md:text-3xl text-arcade-yellow level-complete-text mb-2 md:mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {isVictory ? '🏆 VICTORY! 🏆' : 'LEVEL CLEAR!'}
          </motion.h2>

          <p className="font-arcade text-base md:text-xl text-arcade-cyan mb-2 md:mb-4">
            {levelConfig?.name}
          </p>

          {/* Solly celebration */}
          <SollyCelebrating className="mb-3 md:mb-6" />

          {/* Score breakdown */}
          <div className="bg-arcade-dark/50 border-2 border-arcade-cyan/30 p-3 md:p-4 mb-3 md:mb-6">
            <div className="space-y-1 md:space-y-2">
              <div className="flex justify-between font-arcade text-base md:text-lg">
                <span className="text-white/70">Level Score:</span>
                <motion.span
                  className="text-arcade-green"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  +{formatScore(levelScore)}
                </motion.span>
              </div>

              {state.currentStreak >= 3 && (
                <div className="flex justify-between font-arcade text-base md:text-lg">
                  <span className="text-white/70">Streak Bonus:</span>
                  <span className="text-arcade-orange">🔥 Active</span>
                </div>
              )}

              <div className="border-t border-arcade-cyan/30 pt-1 md:pt-2 mt-1 md:mt-2">
                <div className="flex justify-between font-pixel text-lg md:text-xl">
                  <span className="text-arcade-yellow">TOTAL:</span>
                  <motion.span
                    className="text-white"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                  >
                    {formatScore(totalScore)}
                  </motion.span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-6">
            <div className="text-center">
              <p className="font-arcade text-xl md:text-2xl text-arcade-pink">
                {state.correctAnswers}
              </p>
              <p className="font-arcade text-[10px] md:text-xs text-white/50">CORRECT</p>
            </div>
            <div className="text-center">
              <p className="font-arcade text-xl md:text-2xl text-arcade-cyan">
                {state.longestStreak}
              </p>
              <p className="font-arcade text-[10px] md:text-xs text-white/50">BEST STREAK</p>
            </div>
            <div className="text-center">
              <p className="font-arcade text-xl md:text-2xl text-arcade-yellow">
                {state.wrongAnswers}
              </p>
              <p className="font-arcade text-[10px] md:text-xs text-white/50">WRONG</p>
            </div>
          </div>

          {/* Next level preview or victory message */}
          {!isVictory && nextLevelConfig && (
            <div className="mb-3 md:mb-6">
              <p className="font-arcade text-xs md:text-sm text-white/50 mb-1 md:mb-2">NEXT UP:</p>
              <p className="font-pixel text-sm md:text-lg text-arcade-purple">
                Level {level + 1}: {nextLevelConfig.name}
              </p>
              <p className="font-arcade text-xs text-white/50 mt-1">
                {nextLevelConfig.description}
              </p>
            </div>
          )}

          {isVictory && (
            <div className="mb-3 md:mb-6">
              <p className="font-arcade text-base md:text-lg text-arcade-green">
                You completed all 10 levels!
              </p>
              <p className="font-arcade text-xs md:text-sm text-white/50 mt-1 md:mt-2">
                You are a true Solace Master! 👑
              </p>
            </div>
          )}

          {/* Continue button with countdown */}
          <PixelButton
            variant={isVictory ? 'success' : 'warning'}
            size="lg"
            fullWidth
            glow
            onClick={onContinue}
          >
            {isVictory 
              ? 'VIEW RESULTS'
              : countdown > 0 
                ? `READY? (${countdown})` 
                : 'NEXT LEVEL →'
            }
          </PixelButton>
        </motion.div>
      </PixelCard>
    </div>
  );
}
