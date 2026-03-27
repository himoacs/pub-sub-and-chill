import { Achievement, GameStats } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete Level 1: Solace Overview',
    icon: '🎮',
    condition: (stats: GameStats) => stats.currentLevel > 1 || stats.currentLevel === 1 && stats.correctAnswers >= 4,
  },
  {
    id: 'messaging-master',
    name: 'Messaging Master',
    description: 'Complete Level 2 without any wrong answers',
    icon: '📨',
    condition: (stats: GameStats) => {
      // This would be tracked separately when completing level 2 with 0 errors
      return stats.perfectLevels.includes(2);
    },
  },
  {
    id: 'protocol-pro',
    name: 'Protocol Pro',
    description: 'Finish Level 3 in under 45 seconds',
    icon: '🔌',
    condition: (stats: GameStats) => {
      const level3Time = stats.levelCompletionTimes[2];
      return level3Time !== undefined && level3Time < 45000;
    },
  },
  {
    id: 'topic-wizard',
    name: 'Topic Wizard',
    description: 'Get a 5-streak on Level 4',
    icon: '🧙',
    condition: (stats: GameStats) => stats.longestStreak >= 5 && stats.currentLevel >= 4,
  },
  {
    id: 'queue-champion',
    name: 'Queue Champion',
    description: 'Complete Level 5: Queues & Endpoints',
    icon: '🏆',
    condition: (stats: GameStats) => stats.currentLevel > 5,
  },
  {
    id: 'replay-legend',
    name: 'Replay Legend',
    description: 'Complete Level 6 with all power-ups unused',
    icon: '⏪',
    condition: (stats: GameStats) => stats.currentLevel > 6 && stats.powerUpsUsed === 0,
  },
  {
    id: 'bridge-builder',
    name: 'Bridge Builder',
    description: 'Reach Level 7: VPN Bridges',
    icon: '🌉',
    condition: (stats: GameStats) => stats.currentLevel >= 7,
  },
  {
    id: 'dmr-expert',
    name: 'DMR Expert',
    description: 'Complete Level 8: Dynamic Message Routing',
    icon: '🔀',
    condition: (stats: GameStats) => stats.currentLevel > 8,
  },
  {
    id: 'ha-hero',
    name: 'HA Hero',
    description: 'Complete Level 9: High Availability',
    icon: '🦸',
    condition: (stats: GameStats) => stats.currentLevel > 9,
  },
  {
    id: 'dr-master',
    name: 'DR Disaster Master',
    description: 'Complete all 10 levels',
    icon: '👑',
    condition: (stats: GameStats) => stats.currentLevel > 10,
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Complete any level in under 30 seconds',
    icon: '⚡',
    condition: (stats: GameStats) => {
      return stats.levelCompletionTimes.some(time => time < 30000);
    },
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Complete any level with 100% accuracy',
    icon: '💯',
    condition: (stats: GameStats) => stats.perfectLevels.length > 0,
  },
  {
    id: 'marathon-runner',
    name: 'Marathon Runner',
    description: 'Play 10 games',
    icon: '🏃',
    condition: (stats: GameStats) => stats.totalGamesPlayed >= 10,
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Achieve a 10-answer streak',
    icon: '🔥',
    condition: (stats: GameStats) => stats.longestStreak >= 10,
  },
  {
    id: 'quick-draw',
    name: 'Quick Draw',
    description: 'Answer a question in under 3 seconds',
    icon: '🤠',
    condition: (stats: GameStats) => stats.fastestAnswer < 3000,
  },
];

// Function to check for new achievements
export function checkAchievements(
  stats: GameStats,
  existingAchievements: string[]
): Achievement[] {
  const newAchievements: Achievement[] = [];
  
  for (const achievement of ACHIEVEMENTS) {
    if (!existingAchievements.includes(achievement.id)) {
      if (achievement.condition(stats)) {
        newAchievements.push(achievement);
      }
    }
  }
  
  return newAchievements;
}

// Get achievement by ID
export function getAchievement(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id);
}

// Get all achievements with unlock status
export function getAchievementsWithStatus(unlockedIds: string[]): (Achievement & { unlocked: boolean })[] {
  return ACHIEVEMENTS.map(achievement => ({
    ...achievement,
    unlocked: unlockedIds.includes(achievement.id),
  }));
}
