import { Player } from '../types';

const STORAGE_KEY = 'pubsub_and_chill_player';

export function savePlayerLocally(player: Player): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
  } catch (error) {
    console.error('Error saving player locally:', error);
  }
}

export function getLocalPlayer(): Player | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const player = JSON.parse(stored);
    // Convert date string back to Date object
    player.createdAt = new Date(player.createdAt);
    return player;
  } catch (error) {
    console.error('Error getting local player:', error);
    return null;
  }
}
