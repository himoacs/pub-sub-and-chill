import { Howl, Howler } from 'howler';

// Sound effect types
type SoundType = 
  | 'correct'
  | 'wrong'
  | 'levelUp'
  | 'gameOver'
  | 'victory'
  | 'tick'
  | 'powerUp'
  | 'achievement'
  | 'click'
  | 'countdown';

// Sound URLs - using free sound effects
// In production, these should be hosted in the public folder
const SOUND_URLS: Record<SoundType, string> = {
  correct: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3',
  wrong: 'https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3',
  levelUp: 'https://assets.mixkit.co/active_storage/sfx/1997/1997-preview.mp3',
  gameOver: 'https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3',
  victory: 'https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3',
  tick: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  powerUp: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
  achievement: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3',
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  countdown: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
};

// Background music URL
const BGM_URL = 'https://assets.mixkit.co/active_storage/sfx/2533/2533-preview.mp3';

class AudioService {
  private sounds: Map<SoundType, Howl> = new Map();
  private bgm: Howl | null = null;
  private isMuted: boolean = false;
  private musicEnabled: boolean = false;
  private volume: number = 0.5;
  private initialized: boolean = false;
  private unlocked: boolean = false;

  constructor() {
    // Check local storage for preferences (with error handling for private browsing)
    try {
      const savedMuted = localStorage.getItem('pubsub_muted');
      const savedMusic = localStorage.getItem('pubsub_music');
      const savedVolume = localStorage.getItem('pubsub_volume');

      this.isMuted = savedMuted === 'true';
      this.musicEnabled = savedMusic === 'true';
      this.volume = savedVolume ? parseFloat(savedVolume) : 0.5;
    } catch {
      // localStorage not available (private browsing, etc.)
      this.isMuted = false;
      this.musicEnabled = false;
      this.volume = 0.5;
    }
  }

  // Unlock audio context for mobile browsers (must be called from user gesture)
  private unlock(): void {
    // Always try to resume if context is suspended (can happen on mobile after inactivity)
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume().catch(() => {
        // Ignore errors - audio might still work
      });
    }

    // Only play silent sound once to unlock iOS
    if (this.unlocked) return;
    this.unlocked = true;

    // Play a silent sound to unlock audio on iOS
    // This is a workaround for iOS Safari which requires actual audio playback
    const silentSound = new Howl({
      src: ['data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'],
      volume: 0,
      onend: () => {
        silentSound.unload();
      }
    });
    silentSound.play();
  }

  // Initialize sounds (call this after user interaction due to browser autoplay policies)
  init(): void {
    if (this.initialized) return;

    // Unlock audio context for mobile
    this.unlock();

    // Preload sound effects with html5 for better mobile support
    Object.entries(SOUND_URLS).forEach(([key, url]) => {
      const sound = new Howl({
        src: [url],
        volume: this.volume,
        preload: true,
        html5: true, // Better mobile compatibility
      });
      this.sounds.set(key as SoundType, sound);
    });

    // Initialize background music
    this.bgm = new Howl({
      src: [BGM_URL],
      volume: this.volume * 0.3, // Lower volume for background music
      loop: true,
      preload: true,
      html5: true, // Better mobile compatibility
    });

    // Apply mute state
    Howler.mute(this.isMuted);

    this.initialized = true;
  }

  // Play a sound effect
  play(type: SoundType): void {
    if (!this.initialized) this.init();
    if (this.isMuted) return;

    // Try to unlock on every play (needed for mobile when context suspends)
    this.unlock();

    const sound = this.sounds.get(type);
    if (sound) {
      sound.play();
    }
  }

  // Play a sound with max duration (auto-fades out)
  playWithDuration(type: SoundType, maxDurationMs: number): void {
    if (!this.initialized) this.init();
    if (this.isMuted) return;

    // Try to unlock on every play (needed for mobile when context suspends)
    this.unlock();

    const sound = this.sounds.get(type);
    if (sound) {
      const id = sound.play();
      // Fade out and stop after max duration
      setTimeout(() => {
        sound.fade(this.volume, 0, 500, id);
        setTimeout(() => {
          sound.stop(id);
          sound.volume(this.volume); // Reset volume for next play
        }, 500);
      }, maxDurationMs);
    }
  }

  // Play level up sound (limited duration)
  playLevelUp(): void {
    this.playWithDuration('levelUp', 2000); // Stop after 2 seconds
  }

  // Play game over sound (limited duration)
  playGameOver(): void {
    this.playWithDuration('gameOver', 3000); // Stop after 3 seconds
  }

  // Play victory sound (limited duration)
  playVictory(): void {
    this.playWithDuration('victory', 4000); // Stop after 4 seconds
  }

  // Start background music
  startMusic(): void {
    if (!this.initialized) this.init();
    if (!this.musicEnabled || this.isMuted) return;

    if (this.bgm && !this.bgm.playing()) {
      this.bgm.play();
    }
  }

  // Stop background music
  stopMusic(): void {
    if (this.bgm) {
      this.bgm.stop();
    }
  }

  // Pause background music
  pauseMusic(): void {
    if (this.bgm) {
      this.bgm.pause();
    }
  }

  // Toggle mute
  toggleMute(): boolean {
    // Ensure audio is initialized and unlocked
    if (!this.initialized) this.init();
    this.unlock();

    this.isMuted = !this.isMuted;
    Howler.mute(this.isMuted);
    try {
      localStorage.setItem('pubsub_muted', String(this.isMuted));
    } catch {
      // Ignore localStorage errors
    }

    // Play a quick sound to confirm unmute worked (also helps unlock on mobile)
    if (!this.isMuted) {
      this.play('click');
    }

    if (this.isMuted) {
      this.pauseMusic();
    } else if (this.musicEnabled) {
      this.startMusic();
    }

    return this.isMuted;
  }

  // Toggle music
  toggleMusic(): boolean {
    // Ensure audio is initialized and unlocked
    if (!this.initialized) this.init();
    this.unlock();

    this.musicEnabled = !this.musicEnabled;
    try {
      localStorage.setItem('pubsub_music', String(this.musicEnabled));
    } catch {
      // Ignore localStorage errors
    }

    if (this.musicEnabled && !this.isMuted) {
      this.startMusic();
    } else {
      this.stopMusic();
    }

    return this.musicEnabled;
  }

  // Set volume (0 to 1)
  setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    try {
      localStorage.setItem('pubsub_volume', String(this.volume));
    } catch {
      // Ignore localStorage errors
    }

    // Update all sound volumes
    this.sounds.forEach(sound => {
      sound.volume(this.volume);
    });

    if (this.bgm) {
      this.bgm.volume(this.volume * 0.3);
    }
  }

  // Getters
  getMuted(): boolean {
    return this.isMuted;
  }

  getMusicEnabled(): boolean {
    return this.musicEnabled;
  }

  getVolume(): number {
    return this.volume;
  }

  // Play correct answer sound with pitch variation based on streak
  playCorrect(streak: number): void {
    if (!this.initialized) this.init();
    if (this.isMuted) return;

    const sound = this.sounds.get('correct');
    if (sound) {
      // Increase pitch slightly with streak for satisfying feedback
      const rate = 1 + Math.min(streak * 0.05, 0.3);
      sound.rate(rate);
      sound.play();
    }
  }

  // Play countdown tick with increasing urgency
  playTick(timeRemaining: number): void {
    if (!this.initialized) this.init();
    if (this.isMuted) return;

    // Only play tick in last 10 seconds
    if (timeRemaining > 10) return;

    const sound = this.sounds.get('tick');
    if (sound) {
      // Increase rate as time runs out
      const rate = 1 + (10 - timeRemaining) * 0.1;
      sound.rate(rate);
      sound.play();
    }
  }
}

// Export singleton instance
export const audioService = new AudioService();
