import { InputHTMLAttributes, forwardRef } from 'react';

interface PixelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const PixelInput = forwardRef<HTMLInputElement, PixelInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-pixel text-xs text-arcade-cyan mb-2 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              w-full px-4 py-3
              font-arcade text-xl text-white
              bg-arcade-darker border-4 border-arcade-cyan
              focus:outline-none focus:border-arcade-pink focus:shadow-neon-pink
              placeholder:text-arcade-cyan/50
              transition-all duration-200
              ${error ? 'border-arcade-red' : ''}
              ${className}
            `}
            {...props}
          />
          {/* Blinking cursor effect */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-6 bg-arcade-cyan animate-pulse" 
               style={{ display: props.value ? 'none' : 'block' }} />
        </div>
        {error && (
          <p className="mt-1 font-arcade text-sm text-arcade-red">{error}</p>
        )}
      </div>
    );
  }
);

PixelInput.displayName = 'PixelInput';
