import { motion } from 'framer-motion';
import { PowerUp } from '../../types';

interface PowerUpsProps {
  powerUps: PowerUp[];
  onUseTimeFreeze: () => void;
  onUseFiftyFifty: () => void;
  onUseSkip: () => void;
  disabled?: boolean;
}

export function PowerUps({
  powerUps,
  onUseTimeFreeze,
  onUseFiftyFifty,
  onUseSkip,
  disabled = false,
}: PowerUpsProps) {
  const getPowerUpHandler = (id: PowerUp['id']) => {
    switch (id) {
      case 'timeFreeze':
        return onUseTimeFreeze;
      case 'fiftyFifty':
        return onUseFiftyFifty;
      case 'skip':
        return onUseSkip;
    }
  };

  const getPowerUpColor = (id: PowerUp['id']) => {
    switch (id) {
      case 'timeFreeze':
        return 'from-arcade-cyan to-arcade-blue';
      case 'fiftyFifty':
        return 'from-arcade-pink to-arcade-purple';
      case 'skip':
        return 'from-arcade-yellow to-arcade-orange';
    }
  };

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {powerUps.map((powerUp) => {
        const remaining = powerUp.available - powerUp.used;
        const isAvailable = remaining > 0;
        
        return (
          <motion.button
            key={powerUp.id}
            whileHover={isAvailable && !disabled ? { scale: 1.1, y: -2 } : {}}
            whileTap={isAvailable && !disabled ? { scale: 0.95 } : {}}
            onClick={() => !disabled && isAvailable && getPowerUpHandler(powerUp.id)()}
            disabled={disabled || !isAvailable}
            className={`
              relative flex flex-col items-center justify-center
              w-14 h-14 md:w-20 md:h-20
              border-2 rounded-lg
              transition-all duration-200
              ${isAvailable && !disabled
                ? `border-white/30 bg-gradient-to-br ${getPowerUpColor(powerUp.id)} cursor-pointer hover:border-white/60`
                : 'border-gray-600 bg-gray-800/50 cursor-not-allowed opacity-50'
              }
            `}
            title={`${powerUp.name}: ${powerUp.description}`}
          >
            {/* Icon */}
            <span className="text-lg md:text-2xl">{powerUp.icon}</span>
            
            {/* Count badge */}
            <div className={`
              absolute -top-1 -right-1 md:-top-2 md:-right-2
              w-4 h-4 md:w-6 md:h-6 rounded-full
              flex items-center justify-center
              font-pixel text-[10px] md:text-xs
              ${isAvailable ? 'bg-arcade-green text-black' : 'bg-gray-600 text-gray-400'}
            `}>
              {remaining}
            </div>

            {/* Name */}
            <span className="font-arcade text-[8px] md:text-xs text-white/80 mt-0.5 md:mt-1">
              {powerUp.name.split(' ')[0]}
            </span>

            {/* Glow effect when available */}
            {isAvailable && !disabled && (
              <motion.div
                className={`absolute inset-0 rounded-lg bg-gradient-to-br ${getPowerUpColor(powerUp.id)} opacity-0`}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
