import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixelCard } from '../ui/PixelCard';
import { PixelButton } from '../ui/PixelButton';
import { LeaderboardEntry } from '../../types';
import { fetchLeaderboard } from '../../services/leaderboard';

interface LeaderboardProps {
  currentPlayerId?: string;
  currentNickname?: string;
  autoRefresh?: boolean;
}

export function Leaderboard({ 
  currentPlayerId, 
  currentNickname,
  autoRefresh = false 
}: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const loadLeaderboard = async (isManualRefresh = false) => {
    try {
      setError(null);
      if (isManualRefresh) {
        setRefreshing(true);
      }
      const data = await fetchLeaderboard();
      setEntries(data.entries);
      setLastUpdated(data.lastUpdated);
      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      console.error('Failed to load leaderboard:', err);
      setError('Unable to load leaderboard. Please try again later.');
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadLeaderboard();

    // Auto-refresh if enabled
    if (autoRefresh) {
      const interval = setInterval(loadLeaderboard, 30000); // 30 seconds
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const isCurrentPlayer = (entry: LeaderboardEntry) => {
    if (!currentPlayerId && !currentNickname) return false;
    return entry.id === currentPlayerId || 
           entry.nickname.toLowerCase() === currentNickname?.toLowerCase();
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric' 
      });
    } catch {
      return 'N/A';
    }
  };

  const formatRelativeTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);

      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 23) return `${diffHours}h ago`;
      
      // For entries older than 23 hours, show actual date
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch {
      return 'N/A';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return null;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-arcade-yellow';
      case 2: return 'text-gray-300';
      case 3: return 'text-orange-400';
      default: return 'text-arcade-cyan';
    }
  };

  if (loading) {
    return (
      <PixelCard variant="default" className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="text-4xl"
          >
            ⚡
          </motion.div>
          <p className="text-arcade-cyan font-pixel text-lg">Loading Leaderboard...</p>
        </div>
      </PixelCard>
    );
  }

  if (error) {
    return (
      <PixelCard variant="danger" className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center py-8 gap-4">
          <p className="text-arcade-red font-pixel text-lg">⚠️ {error}</p>
          <PixelButton variant="danger" onClick={() => loadLeaderboard(true)} disabled={refreshing}>
            {refreshing ? 'Retrying...' : 'Retry'}
          </PixelButton>
        </div>
      </PixelCard>
    );
  }

  if (entries.length === 0) {
    return (
      <PixelCard variant="default" className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <p className="text-arcade-cyan font-pixel text-xl">🏆 Leaderboard is Empty</p>
          <p className="text-gray-400 font-pixel text-sm">Be the first to claim the top spot!</p>
        </div>
      </PixelCard>
    );
  }

  return (
    <PixelCard variant="highlight" className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-arcade-yellow/30">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🏆</span>
          <h2 className="text-2xl md:text-3xl font-pixel text-arcade-yellow">
            Global Leaderboard
          </h2>
        </div>
        <button
          onClick={() => loadLeaderboard(true)}
          disabled={refreshing}
          className={`text-arcade-cyan hover:text-arcade-yellow transition-colors font-pixel text-sm flex items-center gap-2 ${
            refreshing ? 'opacity-50 cursor-wait' : ''
          }`}
          title="Refresh leaderboard"
        >
          <motion.span
            animate={refreshing ? { rotate: 360 } : {}}
            transition={refreshing ? { duration: 1, repeat: Infinity, ease: 'linear' } : {}}
          >
            🔄
          </motion.span>
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {/* Last Updated */}
      {lastUpdated && (
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-xs text-gray-400 font-pixel text-center">
            Last updated: {formatDate(lastUpdated)}
          </p>
          {refreshing && (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xs text-arcade-cyan font-pixel"
            >
              • Updating...
            </motion.span>
          )}
        </div>
      )}

      {/* Leaderboard List */}
      <div className="space-y-2 max-h-[600px] md:max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-arcade-cyan scrollbar-track-arcade-darker">
        <AnimatePresence>
          {entries.map((entry, index) => {
            const rank = index + 1;
            const rankIcon = getRankIcon(rank);
            const isPlayer = isCurrentPlayer(entry);

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`
                  border-2 p-3 flex items-center justify-between gap-3
                  transition-all duration-200
                  ${
                    isPlayer 
                    ? 'border-arcade-green bg-arcade-green/10 shadow-neon-green' 
                    : 'border-arcade-cyan/30 bg-arcade-darker/50 hover:border-arcade-cyan/60'
                  }
                `}
              >
                {/* Rank */}
                <div className={`flex items-center justify-center w-10 md:w-12 font-pixel text-sm ${getRankColor(rank)}`}>
                  {rankIcon ? (
                    <span className="text-xl md:text-2xl">{rankIcon}</span>
                  ) : (
                    <span className="text-base md:text-lg">#{rank}</span>
                  )}
                </div>

                {/* Player Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`font-pixel text-xs md:text-base truncate ${isPlayer ? 'text-arcade-green' : 'text-white'}`}>
                      {entry.nickname}
                      {isPlayer && <span className="ml-2 text-[10px] md:text-xs">(You)</span>}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1 text-[10px] md:text-xs text-gray-400 font-pixel">
                    <span>Lvl {entry.level}</span>
                    {entry.achievementCount > 0 && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1">
                          🏅 {entry.achievementCount}
                        </span>
                      </>
                    )}
                    {entry.longestStreak > 0 && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center gap-1" title="Longest streak">
                          🔥 {entry.longestStreak}
                        </span>
                      </>
                    )}
                    <span className="text-gray-500">•</span>
                    <span title={formatDate(entry.submittedAt)}>
                      {formatRelativeTime(entry.submittedAt)}
                    </span>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right flex-shrink-0">
                  <p className={`font-pixel text-base md:text-xl ${getRankColor(rank)}`}>
                    {entry.score.toLocaleString()}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-400 font-pixel">pts</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Info Footer */}
      <div className="mt-6 pt-4 border-t-2 border-arcade-yellow/30">
        <p className="text-center text-xs text-gray-400 font-pixel">
          Top {entries.length} players worldwide 🌍
        </p>
      </div>
    </PixelCard>
  );
}
