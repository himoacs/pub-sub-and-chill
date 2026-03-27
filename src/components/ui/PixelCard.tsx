import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PixelCardProps {
  children: ReactNode;
  variant?: 'default' | 'highlight' | 'success' | 'danger';
  className?: string;
  animate?: boolean;
}

const variantStyles = {
  default: 'border-arcade-cyan shadow-neon-cyan/30',
  highlight: 'border-arcade-yellow shadow-neon-yellow/30',
  success: 'border-arcade-green shadow-neon-green/30',
  danger: 'border-arcade-red shadow-neon-red/30',
};

export function PixelCard({
  children,
  variant = 'default',
  className = '',
  animate = true,
}: PixelCardProps) {
  const Component = animate ? motion.div : 'div';
  
  return (
    <Component
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        border-4 bg-arcade-darker/90 backdrop-blur-md
        p-6 relative
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-current" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-current" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-current" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-current" />
      
      {children}
    </Component>
  );
}
