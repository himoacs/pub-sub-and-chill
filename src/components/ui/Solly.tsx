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

// Waving Solly for menu screen - detailed pixel art with animated wave
export function SollyWaving({ className = '', size = 180 }: { className?: string; size?: number }) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1,
        opacity: 1,
        y: [0, -6, 0]
      }}
      transition={{ 
        scale: { duration: 0.5, type: 'spring' },
        opacity: { duration: 0.3 },
        y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 72"
        style={{ imageRendering: 'pixelated' }}
      >
        <style>
          {`
            @keyframes wave {
              0%, 100% { transform: rotate(-8deg); }
              50% { transform: rotate(12deg); }
            }
            .waving-arm {
              animation: wave 0.6s ease-in-out infinite;
              transform-origin: 52px 28px;
            }
          `}
        </style>
        
        {/* === EARS === */}
        {/* Left ear */}
        <rect x="12" y="2" width="4" height="4" fill="#f0f0f0" />
        <rect x="14" y="0" width="4" height="4" fill="#f0f0f0" />
        <rect x="16" y="2" width="2" height="2" fill="#e0e0e0" />
        
        {/* Right ear */}
        <rect x="44" y="2" width="4" height="4" fill="#f0f0f0" />
        <rect x="42" y="0" width="4" height="4" fill="#f0f0f0" />
        <rect x="42" y="2" width="2" height="2" fill="#e0e0e0" />
        
        {/* === HEAD === */}
        {/* Top of head */}
        <rect x="18" y="4" width="24" height="4" fill="#f8f8f8" />
        <rect x="14" y="6" width="6" height="4" fill="#f8f8f8" />
        <rect x="40" y="6" width="6" height="4" fill="#f8f8f8" />
        
        {/* Main head */}
        <rect x="12" y="10" width="36" height="6" fill="#f8f8f8" />
        <rect x="10" y="14" width="40" height="4" fill="#f8f8f8" />
        <rect x="10" y="18" width="40" height="4" fill="#f8f8f8" />
        
        {/* === EYES === */}
        {/* Left eye - cute dot */}
        <rect x="18" y="14" width="4" height="4" fill="#1a1a1a" />
        <rect x="19" y="15" width="1" height="1" fill="#ffffff" />
        
        {/* Right eye - cute dot */}
        <rect x="38" y="14" width="4" height="4" fill="#1a1a1a" />
        <rect x="39" y="15" width="1" height="1" fill="#ffffff" />
        
        {/* === NOSE === */}
        <rect x="26" y="18" width="8" height="6" fill="#2a2a2a" />
        <rect x="28" y="20" width="4" height="2" fill="#3a3a3a" />
        
        {/* === WHISKERS === */}
        {/* Left whiskers */}
        <rect x="4" y="20" width="8" height="2" fill="#c0c0c0" />
        <rect x="6" y="24" width="6" height="2" fill="#c0c0c0" />
        <rect x="8" y="28" width="4" height="2" fill="#c0c0c0" />
        
        {/* Right whiskers */}
        <rect x="48" y="20" width="8" height="2" fill="#c0c0c0" />
        <rect x="48" y="24" width="6" height="2" fill="#c0c0c0" />
        <rect x="48" y="28" width="4" height="2" fill="#c0c0c0" />
        
        {/* === CHEEKS === */}
        <rect x="10" y="22" width="6" height="4" fill="#f8f8f8" />
        <rect x="44" y="22" width="6" height="4" fill="#f8f8f8" />
        
        {/* === MOUTH - Open smile === */}
        <rect x="22" y="26" width="16" height="6" fill="#1a1a1a" />
        <rect x="24" y="28" width="12" height="2" fill="#ff6b6b" />
        <rect x="26" y="30" width="8" height="2" fill="#ff8888" />
        
        {/* Lower face */}
        <rect x="14" y="26" width="8" height="4" fill="#f8f8f8" />
        <rect x="38" y="26" width="8" height="4" fill="#f8f8f8" />
        <rect x="18" y="30" width="6" height="4" fill="#f8f8f8" />
        <rect x="36" y="30" width="6" height="4" fill="#f8f8f8" />
        
        {/* Chin */}
        <rect x="22" y="32" width="16" height="4" fill="#f0f0f0" />
        
        {/* === BODY === */}
        {/* Neck */}
        <rect x="20" y="36" width="20" height="4" fill="#f8f8f8" />
        
        {/* Upper body */}
        <rect x="16" y="40" width="28" height="6" fill="#f8f8f8" />
        <rect x="14" y="44" width="32" height="6" fill="#f8f8f8" />
        
        {/* Belly - lighter shade */}
        <rect x="24" y="42" width="12" height="10" fill="#ffffff" />
        
        {/* Lower body */}
        <rect x="16" y="50" width="28" height="6" fill="#f8f8f8" />
        <rect x="18" y="56" width="24" height="4" fill="#f8f8f8" />
        
        {/* === LEFT ARM (static) === */}
        <rect x="8" y="42" width="8" height="4" fill="#f8f8f8" />
        <rect x="6" y="46" width="6" height="6" fill="#f8f8f8" />
        <rect x="4" y="50" width="6" height="4" fill="#f8f8f8" />
        
        {/* Left paw */}
        <rect x="2" y="52" width="8" height="4" fill="#f0f0f0" />
        <rect x="2" y="54" width="2" height="2" fill="#e8e8e8" />
        <rect x="4" y="54" width="2" height="2" fill="#e8e8e8" />
        <rect x="6" y="54" width="2" height="2" fill="#e8e8e8" />
        
        {/* === RIGHT ARM (waving) === */}
        <g className="waving-arm">
          {/* Upper arm */}
          <rect x="48" y="40" width="6" height="4" fill="#f8f8f8" />
          <rect x="50" y="36" width="6" height="6" fill="#f8f8f8" />
          <rect x="52" y="30" width="6" height="8" fill="#f8f8f8" />
          
          {/* Waving paw */}
          <rect x="52" y="22" width="8" height="10" fill="#f0f0f0" />
          
          {/* Paw fingers spread */}
          <rect x="50" y="20" width="4" height="4" fill="#f0f0f0" />
          <rect x="54" y="18" width="4" height="4" fill="#f0f0f0" />
          <rect x="58" y="20" width="4" height="4" fill="#f0f0f0" />
          <rect x="60" y="24" width="4" height="4" fill="#f0f0f0" />
          
          {/* Paw pad hints */}
          <rect x="54" y="26" width="4" height="2" fill="#e8e8e8" />
        </g>
        
        {/* === FEET === */}
        {/* Left foot */}
        <rect x="18" y="60" width="8" height="4" fill="#f0f0f0" />
        <rect x="16" y="62" width="4" height="4" fill="#e8e8e8" />
        <rect x="20" y="64" width="6" height="4" fill="#e8e8e8" />
        
        {/* Right foot */}
        <rect x="34" y="60" width="8" height="4" fill="#f0f0f0" />
        <rect x="40" y="62" width="4" height="4" fill="#e8e8e8" />
        <rect x="34" y="64" width="6" height="4" fill="#e8e8e8" />
        
        {/* Tail hint on the right */}
        <rect x="44" y="54" width="6" height="4" fill="#f0f0f0" />
        <rect x="48" y="52" width="4" height="4" fill="#e8e8e8" />
      </svg>
    </motion.div>
  );
}
