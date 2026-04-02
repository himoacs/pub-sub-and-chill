-- =====================================================
-- Supabase Leaderboard Table Setup
-- =====================================================
-- Run this SQL in your Supabase SQL Editor:
-- Dashboard → SQL Editor → New Query → Paste and Run
-- =====================================================

-- Create the leaderboard table
CREATE TABLE IF NOT EXISTS leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id TEXT NOT NULL,
  nickname TEXT NOT NULL,
  score INTEGER NOT NULL,
  level INTEGER NOT NULL,
  achievement_count INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_player UNIQUE (player_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leaderboard_score ON leaderboard (score DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_player ON leaderboard (player_id);

-- Enable Row Level Security (RLS)
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (safe to re-run)
DROP POLICY IF EXISTS "Public read access" ON leaderboard;
DROP POLICY IF EXISTS "Allow score submission" ON leaderboard;
DROP POLICY IF EXISTS "Update if score higher" ON leaderboard;

-- Allow anyone to read the leaderboard (authenticated or not)
CREATE POLICY "Public read access" ON leaderboard
  FOR SELECT USING (true);

-- Allow anyone to insert new scores
CREATE POLICY "Allow score submission" ON leaderboard
  FOR INSERT WITH CHECK (true);

-- Allow updates only if the new score is higher than the existing score
CREATE POLICY "Update if score higher" ON leaderboard
  FOR UPDATE USING (true)
  WITH CHECK (
    score >= (SELECT score FROM leaderboard WHERE player_id = leaderboard.player_id)
  );

-- Optional: Add some test data to verify setup
-- Uncomment the lines below if you want sample data
-- INSERT INTO leaderboard (player_id, nickname, score, level, achievement_count) VALUES
--   ('test-1', 'TestPlayer1', 10000, 5, 8),
--   ('test-2', 'TestPlayer2', 8500, 4, 6),
--   ('test-3', 'TestPlayer3', 7200, 3, 5);

-- Verify the setup
SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10;
