import { Level } from '../types';
import { LEVELS } from '../data/questions';

export interface ScoreResult {
  basePoints: number;
  streakBonus: number;
  timeBonus: number;
  totalPoints: number;
  newStreak: number;
  streakMultiplier: number;
}

// Calculate score for a correct answer
export function calculateScore(
  level: number,
  currentStreak: number,
  answerTimeMs: number, // Time taken to answer in milliseconds
  isCorrect: boolean
): ScoreResult {
  if (!isCorrect) {
    return {
      basePoints: 0,
      streakBonus: 0,
      timeBonus: 0,
      totalPoints: 0,
      newStreak: 0,
      streakMultiplier: 1,
    };
  }

  const levelConfig = LEVELS[level - 1];
  if (!levelConfig) {
    return {
      basePoints: 0,
      streakBonus: 0,
      timeBonus: 0,
      totalPoints: 0,
      newStreak: 1,
      streakMultiplier: 1,
    };
  }

  const basePoints = levelConfig.pointsPerQuestion;
  
  // Calculate streak multiplier
  const newStreak = currentStreak + 1;
  let streakMultiplier = 1;
  if (newStreak >= 10) {
    streakMultiplier = 3;
  } else if (newStreak >= 5) {
    streakMultiplier = 2;
  } else if (newStreak >= 3) {
    streakMultiplier = 1.5;
  }

  // Calculate streak bonus
  const streakBonus = Math.floor(basePoints * (streakMultiplier - 1));

  // Calculate time bonus (extra 10% if answered in first 5 seconds)
  let timeBonus = 0;
  if (answerTimeMs < 5000) {
    timeBonus = Math.floor(basePoints * 0.1);
  } else if (answerTimeMs < 10000) {
    timeBonus = Math.floor(basePoints * 0.05);
  }

  const totalPoints = basePoints + streakBonus + timeBonus;

  return {
    basePoints,
    streakBonus,
    timeBonus,
    totalPoints,
    newStreak,
    streakMultiplier,
  };
}

// Check if player has enough points to advance to next level
export function canAdvanceToNextLevel(
  currentLevel: number,
  levelScore: number
): boolean {
  const levelConfig = LEVELS[currentLevel - 1];
  if (!levelConfig) return false;
  
  return levelScore >= levelConfig.requiredPoints;
}

// Get required points for a level
export function getRequiredPoints(level: number): number {
  const levelConfig = LEVELS[level - 1];
  return levelConfig?.requiredPoints || 0;
}

// Get max possible points for a level
export function getMaxLevelPoints(level: number): number {
  const levelConfig = LEVELS[level - 1];
  if (!levelConfig) return 0;
  return levelConfig.pointsPerQuestion * levelConfig.questionsCount;
}

// Calculate level progress percentage (based on max possible points)
export function getLevelProgress(
  currentLevel: number,
  levelScore: number
): number {
  const maxPoints = getMaxLevelPoints(currentLevel);
  if (maxPoints === 0) return 0;
  return Math.min(100, Math.floor((levelScore / maxPoints) * 100));
}

// Calculate threshold position as percentage of max points
export function getThresholdPosition(level: number): number {
  const maxPoints = getMaxLevelPoints(level);
  const requiredPoints = getRequiredPoints(level);
  if (maxPoints === 0) return 0;
  return Math.floor((requiredPoints / maxPoints) * 100);
}

// Get level config
export function getLevelConfig(level: number): Level | undefined {
  return LEVELS[level - 1];
}

// Get total number of levels
export function getTotalLevels(): number {
  return LEVELS.length;
}

// Calculate accuracy percentage
export function calculateAccuracy(correct: number, wrong: number): number {
  const total = correct + wrong;
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

// Format score with commas
export function formatScore(score: number): string {
  return score.toLocaleString();
}

// Get grade based on accuracy
export function getGrade(accuracy: number): { grade: string; color: string } {
  if (accuracy >= 90) return { grade: 'S', color: 'text-arcade-yellow' };
  if (accuracy >= 80) return { grade: 'A', color: 'text-arcade-green' };
  if (accuracy >= 70) return { grade: 'B', color: 'text-arcade-cyan' };
  if (accuracy >= 60) return { grade: 'C', color: 'text-arcade-purple' };
  if (accuracy >= 50) return { grade: 'D', color: 'text-arcade-orange' };
  return { grade: 'F', color: 'text-arcade-red' };
}

// Get rank title based on highest level reached
export function getRankTitle(highestLevel: number): string {
  const ranks = [
    'Novice',           // Level 1
    'Apprentice',       // Level 2
    'Practitioner',     // Level 3
    'Specialist',       // Level 4
    'Expert',           // Level 5
    'Master',           // Level 6
    'Architect',        // Level 7
    'Champion',         // Level 8
    'Legend',           // Level 9
    'Grand Master',     // Level 10+
  ];
  
  const index = Math.min(highestLevel - 1, ranks.length - 1);
  return ranks[Math.max(0, index)];
}
