import { motion } from 'framer-motion';

// Pixelated Solace logo matching the arcade theme
export function SolaceLogo({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* SOLACE text in pixel font */}
      <span 
        className="font-pixel text-lg tracking-wider"
        style={{ color: '#00C895' }}
      >
        SOLACE.
      </span>
    </motion.div>
  );
}
