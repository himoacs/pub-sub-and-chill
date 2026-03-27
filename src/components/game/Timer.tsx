import { motion } from 'framer-motion';

interface TimerProps {
  timeRemaining: number;
  maxTime: number;
  isPaused?: boolean;
}

export function Timer({ timeRemaining, maxTime, isPaused = false }: TimerProps) {
  const percentage = (timeRemaining / maxTime) * 100;
  const isWarning = timeRemaining <= 15;
  const isCritical = timeRemaining <= 5;

  // Calculate circle properties
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine color based on time
  let colorClass = 'text-arcade-green';
  let glowClass = 'drop-shadow-[0_0_10px_#30d158]';
  
  if (isCritical) {
    colorClass = 'text-arcade-red';
    glowClass = 'drop-shadow-[0_0_15px_#ff453a]';
  } else if (isWarning) {
    colorClass = 'text-arcade-yellow';
    glowClass = 'drop-shadow-[0_0_12px_#ffd93d]';
  }

  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32">
      {/* Background circle */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-arcade-dark opacity-50"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className={`${colorClass} ${glowClass} transition-colors duration-300`}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
          animate={{
            strokeDashoffset,
          }}
          transition={{ duration: 0.5, ease: 'linear' }}
        />
      </svg>

      {/* Time display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className={`font-pixel text-2xl md:text-3xl ${colorClass} ${isCritical ? 'animate-pulse' : ''}`}
          animate={isCritical ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: isCritical ? Infinity : 0 }}
        >
          {timeRemaining}
        </motion.span>
        <span className="font-arcade text-xs text-white/50 uppercase">
          {isPaused ? 'PAUSED' : 'SEC'}
        </span>
      </div>

      {/* Freeze effect overlay */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-arcade-cyan/20 rounded-full animate-pulse" />
          <span className="text-2xl">❄️</span>
        </motion.div>
      )}
    </div>
  );
}
