import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
}

const variantStyles = {
  primary: 'border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan/20',
  secondary: 'border-arcade-purple text-arcade-purple hover:bg-arcade-purple/20',
  success: 'border-arcade-green text-arcade-green hover:bg-arcade-green/20',
  danger: 'border-arcade-red text-arcade-red hover:bg-arcade-red/20',
  warning: 'border-arcade-yellow text-arcade-yellow hover:bg-arcade-yellow/20',
};

const sizeStyles = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

const glowStyles = {
  primary: 'shadow-neon-cyan',
  secondary: 'shadow-neon-purple',
  success: 'shadow-neon-green',
  danger: 'shadow-neon-red',
  warning: 'shadow-neon-yellow',
};

export function PixelButton({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  fullWidth = false,
  className = '',
  disabled,
  onClick,
  type = 'button',
  title,
}: PixelButtonProps) {
  return (
    <motion.button
      type={type}
      title={title}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98, y: disabled ? 0 : 1 }}
      className={`
        font-pixel uppercase tracking-wider
        border-4 bg-arcade-darker/80 backdrop-blur-sm
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${glow ? glowStyles[variant] : ''}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
