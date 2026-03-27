import { motion } from 'framer-motion';
import { formatScore, getLevelProgress, getRequiredPoints, getMaxLevelPoints, getThresholdPosition } from '../../services/scoring';
import { LEVELS } from '../../data/questions';
import { SolaceLogo } from '../ui/SolaceLogo';

interface LevelProgressProps {
  level: number;
  score: number;
  levelScore: number;
  streak: number;
}

export function LevelProgress({ level, score, levelScore, streak }: LevelProgressProps) {
  const levelConfig = LEVELS[level - 1];
  const progress = getLevelProgress(level, levelScore);
  const requiredPoints = getRequiredPoints(level);
  const maxPoints = getMaxLevelPoints(level);
  const thresholdPosition = getThresholdPosition(level);
  const hasPassedThreshold = levelScore >= requiredPoints;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Top bar with level info, logo, and score */}
      <div className="flex justify-between items-start mb-2 md:mb-4">
        {/* Level info */}
        <div className="flex flex-col flex-1">
          <span className="font-pixel text-[10px] md:text-xs text-arcade-purple mb-1">
            LEVEL {level}/10
          </span>
          <span className="font-arcade text-sm md:text-xl text-arcade-cyan">
            {levelConfig?.name || 'Unknown'}
          </span>
        </div>

        {/* Solace Logo - centered */}
        <div className="flex-shrink-0 mx-2 md:mx-4 hidden md:block">
          <SolaceLogo className="scale-75" />
        </div>

        {/* Total score */}
        <div className="text-right flex-1">
          <span className="font-pixel text-[10px] md:text-xs text-arcade-yellow block mb-1">
            SCORE
          </span>
          <motion.span
            key={score}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="font-pixel text-lg md:text-2xl text-white"
          >
            {formatScore(score)}
          </motion.span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-4 bg-arcade-dark border-2 border-arcade-purple/50 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ 
            minWidth: progress > 0 ? '8px' : '0',
            background: 'linear-gradient(to right, #bf5af2, #ff2d95, #00f5ff)'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Progress markers */}
        <div className="absolute inset-0 flex">
          {[25, 50, 75].map((marker) => (
            <div
              key={marker}
              className="absolute top-0 bottom-0 w-px bg-white/20"
              style={{ left: `${marker}%` }}
            />
          ))}
        </div>

        {/* Threshold indicator */}
        <div
          className="absolute top-0 bottom-0 w-1"
          style={{ 
            left: `${thresholdPosition}%`, 
            backgroundColor: hasPassedThreshold ? '#30d158' : '#ffd93d' 
          }}
          title={`${requiredPoints} pts needed to advance`}
        />
      </div>

      {/* Progress info */}
      <div className="flex justify-between mt-1 md:mt-2">
        <span className="font-arcade text-xs md:text-sm text-white/60">
          {formatScore(levelScore)} / {formatScore(maxPoints)} pts
          {!hasPassedThreshold && (
            <span className="text-arcade-yellow hidden md:inline"> ({formatScore(requiredPoints)} to advance)</span>
          )}
          {hasPassedThreshold && (
            <span className="text-arcade-green"> ✓</span>
          )}
        </span>
        
        {/* Streak indicator */}
        {streak > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1"
          >
            <span className="text-lg">🔥</span>
            <span className="font-pixel text-sm text-arcade-orange">
              x{streak}
            </span>
            {streak >= 3 && (
              <span className="font-arcade text-xs text-arcade-yellow">
                {streak >= 10 ? '3X' : streak >= 5 ? '2X' : '1.5X'}
              </span>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
