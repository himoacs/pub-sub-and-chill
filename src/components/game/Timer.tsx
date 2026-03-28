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

  // Calculate circle properties - use viewBox for proper scaling
  const size = 120; // viewBox size
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Determine color based on time - use inline styles for reliable mobile animation
  let strokeColor = '#30d158'; // green
  let glowColor = 'rgba(48, 209, 88, 0.6)';
  
  if (isCritical) {
    strokeColor = '#ff453a'; // red
    glowColor = 'rgba(255, 69, 58, 0.8)';
  } else if (isWarning) {
    strokeColor = '#ffd93d'; // yellow
    glowColor = 'rgba(255, 217, 61, 0.7)';
  }

  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 p-1">
      {/* SVG with viewBox for proper scaling */}
      <svg 
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full transform -rotate-90 overflow-visible"
        style={{ filter: `drop-shadow(0 0 8px ${glowColor})` }}
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#0a0a0f"
          strokeWidth={strokeWidth}
          opacity={0.5}
        />
        {/* Progress circle */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: 'stroke 0.3s ease',
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
          className={`font-pixel text-3xl md:text-4xl ${isCritical ? 'animate-pulse' : ''}`}
          style={{ color: strokeColor, transition: 'color 0.3s ease' }}
          animate={isCritical ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, repeat: isCritical ? Infinity : 0 }}
        >
          {timeRemaining}
        </motion.span>
        {isPaused && (
          <span className="font-arcade text-[10px] md:text-xs text-white/50 uppercase">
            PAUSED
          </span>
        )}
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
