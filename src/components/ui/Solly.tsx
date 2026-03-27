import { motion } from 'framer-motion';

// Pixelated Solly the Otter mascot - celebrating pose based on Solly Superstars
export function Solly({ className = '', size = 160 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ scale: 0 }}
      animate={{ 
        scale: 1,
        y: [0, -4, 0]
      }}
      transition={{ 
        scale: { duration: 0.5, type: 'spring' },
        y: { duration: 0.8, repeat: Infinity, ease: 'easeInOut' }
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Solly celebrating - arms up, happy otter face */}
        
        {/* Left paw raised up */}
        <rect x="4" y="8" width="2" height="2" fill="#f8f8f8" />
        <rect x="4" y="10" width="2" height="2" fill="#f8f8f8" />
        <rect x="6" y="10" width="2" height="2" fill="#1a1a1a" />
        <rect x="6" y="12" width="2" height="2" fill="#f8f8f8" />
        <rect x="6" y="14" width="2" height="2" fill="#f8f8f8" />
        <rect x="8" y="14" width="2" height="2" fill="#1a1a1a" />
        <rect x="8" y="16" width="2" height="4" fill="#f8f8f8" />
        
        {/* Right paw raised up */}
        <rect x="42" y="8" width="2" height="2" fill="#f8f8f8" />
        <rect x="42" y="10" width="2" height="2" fill="#f8f8f8" />
        <rect x="40" y="10" width="2" height="2" fill="#1a1a1a" />
        <rect x="40" y="12" width="2" height="2" fill="#f8f8f8" />
        <rect x="40" y="14" width="2" height="2" fill="#f8f8f8" />
        <rect x="38" y="14" width="2" height="2" fill="#1a1a1a" />
        <rect x="38" y="16" width="2" height="4" fill="#f8f8f8" />
        
        {/* Head - otter shape with snout pointing up */}
        
        {/* Left ear */}
        <rect x="14" y="0" width="2" height="2" fill="#1a1a1a" />
        <rect x="16" y="0" width="2" height="2" fill="#f8f8f8" />
        <rect x="16" y="2" width="2" height="2" fill="#f8f8f8" />
        <rect x="14" y="2" width="2" height="2" fill="#1a1a1a" />
        
        {/* Right ear */}
        <rect x="32" y="0" width="2" height="2" fill="#1a1a1a" />
        <rect x="30" y="0" width="2" height="2" fill="#f8f8f8" />
        <rect x="30" y="2" width="2" height="2" fill="#f8f8f8" />
        <rect x="32" y="2" width="2" height="2" fill="#1a1a1a" />
        
        {/* Top of head */}
        <rect x="18" y="2" width="12" height="2" fill="#1a1a1a" />
        <rect x="16" y="4" width="2" height="2" fill="#1a1a1a" />
        <rect x="18" y="4" width="12" height="2" fill="#f8f8f8" />
        <rect x="30" y="4" width="2" height="2" fill="#1a1a1a" />
        
        {/* Upper head */}
        <rect x="14" y="6" width="2" height="2" fill="#1a1a1a" />
        <rect x="16" y="6" width="16" height="2" fill="#f8f8f8" />
        <rect x="32" y="6" width="2" height="2" fill="#1a1a1a" />
        
        {/* Eyes level - happy closed eyes */}
        <rect x="12" y="8" width="2" height="2" fill="#1a1a1a" />
        <rect x="14" y="8" width="6" height="2" fill="#f8f8f8" />
        <rect x="20" y="9" width="2" height="1" fill="#1a1a1a" />
        <rect x="22" y="8" width="4" height="2" fill="#f8f8f8" />
        <rect x="26" y="9" width="2" height="1" fill="#1a1a1a" />
        <rect x="28" y="8" width="6" height="2" fill="#f8f8f8" />
        <rect x="34" y="8" width="2" height="2" fill="#1a1a1a" />
        
        {/* Cheeks and snout */}
        <rect x="12" y="10" width="2" height="2" fill="#1a1a1a" />
        <rect x="14" y="10" width="4" height="2" fill="#f8f8f8" />
        <rect x="18" y="10" width="12" height="2" fill="#f8f8f8" />
        <rect x="30" y="10" width="4" height="2" fill="#f8f8f8" />
        <rect x="34" y="10" width="2" height="2" fill="#1a1a1a" />
        
        {/* Nose */}
        <rect x="22" y="10" width="4" height="2" fill="#1a1a1a" />
        
        {/* Whiskers left */}
        <rect x="8" y="10" width="4" height="1" fill="#1a1a1a" />
        <rect x="8" y="12" width="4" height="1" fill="#1a1a1a" />
        <rect x="10" y="14" width="2" height="1" fill="#1a1a1a" />
        
        {/* Whiskers right */}
        <rect x="36" y="10" width="4" height="1" fill="#1a1a1a" />
        <rect x="36" y="12" width="4" height="1" fill="#1a1a1a" />
        <rect x="36" y="14" width="2" height="1" fill="#1a1a1a" />
        
        {/* Lower face / open mouth */}
        <rect x="14" y="12" width="2" height="2" fill="#1a1a1a" />
        <rect x="16" y="12" width="4" height="2" fill="#f8f8f8" />
        <rect x="20" y="12" width="8" height="4" fill="#1a1a1a" />
        <rect x="28" y="12" width="4" height="2" fill="#f8f8f8" />
        <rect x="32" y="12" width="2" height="2" fill="#1a1a1a" />
        
        {/* Inside mouth - tongue hint */}
        <rect x="22" y="14" width="4" height="2" fill="#ff6b6b" />
        
        {/* Chin */}
        <rect x="16" y="14" width="4" height="2" fill="#1a1a1a" />
        <rect x="28" y="14" width="4" height="2" fill="#1a1a1a" />
        <rect x="18" y="16" width="12" height="2" fill="#1a1a1a" />
        
        {/* Neck/collar area */}
        <rect x="14" y="18" width="2" height="2" fill="#1a1a1a" />
        <rect x="16" y="18" width="4" height="2" fill="#f8f8f8" />
        <rect x="20" y="18" width="8" height="2" fill="#e8e8e8" />
        <rect x="28" y="18" width="4" height="2" fill="#f8f8f8" />
        <rect x="32" y="18" width="2" height="2" fill="#1a1a1a" />
        
        {/* Shirt/jacket body */}
        <rect x="12" y="20" width="2" height="2" fill="#1a1a1a" />
        <rect x="14" y="20" width="6" height="2" fill="#f8f8f8" />
        <rect x="20" y="20" width="8" height="2" fill="#e8e8e8" />
        <rect x="28" y="20" width="6" height="2" fill="#f8f8f8" />
        <rect x="34" y="20" width="2" height="2" fill="#1a1a1a" />
        
        {/* Arms connecting to raised paws */}
        <rect x="10" y="20" width="2" height="2" fill="#f8f8f8" />
        <rect x="36" y="20" width="2" height="2" fill="#f8f8f8" />
        
        {/* Lower shirt */}
        <rect x="14" y="22" width="2" height="2" fill="#1a1a1a" />
        <rect x="16" y="22" width="6" height="2" fill="#f8f8f8" />
        <rect x="22" y="22" width="4" height="2" fill="#e8e8e8" />
        <rect x="26" y="22" width="6" height="2" fill="#f8f8f8" />
        <rect x="32" y="22" width="2" height="2" fill="#1a1a1a" />
        
        {/* Bottom of shirt */}
        <rect x="16" y="24" width="2" height="2" fill="#1a1a1a" />
        <rect x="18" y="24" width="12" height="2" fill="#f8f8f8" />
        <rect x="30" y="24" width="2" height="2" fill="#1a1a1a" />
      </svg>
    </motion.div>
  );
}

// Celebration variant with extra animation
export function SollyCelebrating({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Solly size={80} />
      <motion.p
        className="font-pixel text-xs text-arcade-yellow mt-2"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Solly says, GREAT JOB!
      </motion.p>
    </motion.div>
  );
}
