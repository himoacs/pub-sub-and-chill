import { createClient } from '@supabase/supabase-js';
import { LeaderboardEntry, LeaderboardData } from '../types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const MAX_ENTRIES = 30;

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');

// Database table name
const TABLE_NAME = 'leaderboard';

/**
 * Fetches the current leaderboard from Supabase
 * Returns top 30 scores ordered by score descending
 */
export async function fetchLeaderboard(): Promise<LeaderboardData> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('*')
      .order('score', { ascending: false })
      .order('level', { ascending: false })
      .order('achievement_count', { ascending: false })
      .limit(MAX_ENTRIES);

    if (error) {
      throw error;
    }

    // Transform database rows to LeaderboardEntry format
    const entries: LeaderboardEntry[] = (data || []).map((row: any) => ({
      id: row.player_id,
      nickname: row.nickname,
      score: row.score,
      level: row.level,
      achievementCount: row.achievement_count,
      submittedAt: row.submitted_at,
    }));

    return {
      entries,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    throw error;
  }
}

/**
 * Submits a new score to the leaderboard
 * Uses UPSERT to insert new entry or update existing if score is higher
 */
export async function submitScore(entry: LeaderboardEntry): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Leaderboard not configured (missing Supabase credentials)');
    return false;
  }

  try {
    // Check if player already exists
    const { data: existing } = await supabase
      .from(TABLE_NAME)
      .select('score')
      .eq('player_id', entry.id)
      .single();

    // If exists and new score is not higher, skip
    if (existing && entry.score <= existing.score) {
      console.log('Score not better than existing, skipping submission');
      return true;
    }

    // Transform to database format
    const dbEntry = {
      player_id: entry.id,
      nickname: entry.nickname,
      score: entry.score,
      level: entry.level,
      achievement_count: entry.achievementCount,
      submitted_at: new Date().toISOString(),
    };

    // Upsert (insert or update if player_id already exists)
    const { error } = await supabase
      .from(TABLE_NAME)
      .upsert(dbEntry, {
        onConflict: 'player_id',
      });

    if (error) {
      console.error('Error submitting score:', error);
      return false;
    }

    console.log('Score successfully submitted to leaderboard');
    return true;
  } catch (error) {
    console.error('Error submitting score:', error);
    return false;
  }
}

/**
 * Checks if a score qualifies for the top 30 leaderboard
 */
export async function isTopScore(score: number): Promise<boolean> {
  try {
    // Count total entries
    const { count, error: countError } = await supabase
      .from(TABLE_NAME)
      .select('*', { count: 'exact', head: true });

    if (countError) {
      throw countError;
    }

    // If less than 30 entries, always qualifies
    if (!count || count < MAX_ENTRIES) {
      return true;
    }

    // Get the 30th highest score (lowest in top 30)
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select('score')
      .order('score', { ascending: false })
      .limit(MAX_ENTRIES)
      .range(MAX_ENTRIES - 1, MAX_ENTRIES - 1)
      .single();

    if (error || !data) {
      // On error, assume it qualifies (fail open)
      return true;
    }

    return score > data.score;
  } catch (error) {
    console.error('Error checking if top score:', error);
    // On error, assume it qualifies (fail open)
    return true;
  }
}

/**
 * Gets the rank position for a given player ID
 */
export async function getPlayerRank(playerId: string, nickname: string): Promise<number | null> {
  try {
    const data = await fetchLeaderboard();
    const index = data.entries.findIndex(
      e => e.id === playerId || e.nickname.toLowerCase() === nickname.toLowerCase()
    );
    
    return index !== -1 ? index + 1 : null;
  } catch (error) {
    console.error('Error getting player rank:', error);
    return null;
  }
}
