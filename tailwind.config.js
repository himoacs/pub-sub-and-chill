/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Arcade neon color palette
        'arcade-dark': '#0a0a0f',
        'arcade-darker': '#050508',
        'arcade-pink': '#ff2d95',
        'arcade-cyan': '#00f5ff',
        'arcade-yellow': '#ffd93d',
        'arcade-purple': '#bf5af2',
        'arcade-green': '#30d158',
        'arcade-red': '#ff453a',
        'arcade-orange': '#ff9f0a',
        'arcade-blue': '#0a84ff',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'arcade': ['"VT323"', 'monospace'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'flicker': 'flicker 0.15s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'score-pop': 'score-pop 0.5s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
            opacity: '0.8'
          },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        'score-pop': {
          '0%': { transform: 'scale(0) translateY(0)', opacity: '1' },
          '50%': { transform: 'scale(1.5) translateY(-20px)', opacity: '1' },
          '100%': { transform: 'scale(1) translateY(-40px)', opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px #ff2d95, 0 0 10px #ff2d95, 0 0 20px #ff2d95',
        'neon-cyan': '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff',
        'neon-yellow': '0 0 5px #ffd93d, 0 0 10px #ffd93d, 0 0 20px #ffd93d',
        'neon-green': '0 0 5px #30d158, 0 0 10px #30d158, 0 0 20px #30d158',
        'neon-red': '0 0 5px #ff453a, 0 0 10px #ff453a, 0 0 20px #ff453a',
        'neon-purple': '0 0 5px #bf5af2, 0 0 10px #bf5af2, 0 0 20px #bf5af2',
      },
    },
  },
  plugins: [],
}
