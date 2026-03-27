import { useState } from 'react';
import { motion } from 'framer-motion';
import { PixelButton } from '../ui/PixelButton';
import { PixelInput } from '../ui/PixelInput';
import { PixelCard } from '../ui/PixelCard';
import { useGame } from '../../context/GameContext';

interface NicknameEntryProps {
  onComplete: () => void;
}

export function NicknameEntry({ onComplete }: NicknameEntryProps) {
  const { createNewPlayer, state } = useGame();
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // If player already exists, show welcome back
  if (state.player) {
    return (
      <div className="min-h-screen flex items-center justify-center p-2 md:p-4">
        <PixelCard className="max-w-md w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-pixel text-lg md:text-xl text-arcade-cyan mb-3 md:mb-4">
              WELCOME BACK
            </h2>
            <p className="font-arcade text-2xl md:text-3xl text-arcade-yellow mb-2">
              {state.player.nickname}
            </p>
            <p className="font-arcade text-base md:text-lg text-white/70 mb-4 md:mb-6">
              High Score: {state.player.totalScore.toLocaleString()}
            </p>
            <p className="font-arcade text-base md:text-lg text-white/70 mb-4 md:mb-6">
              Highest Level: {state.player.highestLevel}
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <PixelButton
                variant="warning"
                size="lg"
                fullWidth
                glow
                onClick={onComplete}
              >
                CONTINUE
              </PixelButton>
              
              <button
                className="font-arcade text-xs md:text-sm text-arcade-purple hover:text-arcade-pink transition-colors"
                onClick={() => {
                  localStorage.removeItem('pubsub_player');
                  window.location.reload();
                }}
              >
                Play as different player
              </button>
            </div>
          </motion.div>
        </PixelCard>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedNickname = nickname.trim();
    
    if (trimmedNickname.length < 2) {
      setError('Nickname must be at least 2 characters');
      return;
    }
    
    if (trimmedNickname.length > 20) {
      setError('Nickname must be 20 characters or less');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await createNewPlayer(trimmedNickname);
      onComplete();
    } catch (err) {
      setError('Failed to create player. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 md:p-4">
      <PixelCard className="max-w-md w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 md:mb-8"
        >
          {/* Arcade-style title */}
          <h1 className="font-pixel text-xl md:text-3xl text-arcade-pink mb-1 md:mb-2 animate-pulse">
            PUB/SUB
          </h1>
          <h1 className="font-pixel text-xl md:text-3xl text-arcade-cyan mb-2 md:mb-4">
            AND CHILL
          </h1>
          <p className="font-arcade text-base md:text-xl text-arcade-yellow">
            SOLACE TRIVIA ARCADE
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Pixel art decoration */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="text-3xl md:text-4xl">🎮</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <PixelInput
              label="Enter Your Nickname"
              placeholder="PLAYER_ONE"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              error={error}
              maxLength={20}
              autoFocus
            />

            <PixelButton
              type="submit"
              variant="warning"
              size="lg"
              fullWidth
              glow
              disabled={isLoading || nickname.trim().length < 2}
            >
              {isLoading ? 'LOADING...' : 'INSERT COIN'}
            </PixelButton>
          </form>

          <div className="mt-4 md:mt-8 text-center">
            <p className="font-arcade text-xs md:text-sm text-white/50">
              Test your Solace knowledge
            </p>
            <p className="font-arcade text-xs md:text-sm text-white/50 mt-1">
              10 Levels • 60 seconds each • Power-ups
            </p>
          </div>
        </motion.div>
      </PixelCard>
    </div>
  );
}
