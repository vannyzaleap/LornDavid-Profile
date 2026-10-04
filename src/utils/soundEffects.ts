/**
 * Lightweight, zero-dependency tactile sound effects engine
 * Generates subtle, non-intrusive micro-audio feedback for Neo-Brutalist interactions.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMutedState: boolean = false;
  private listeners: Set<(muted: boolean) => void> = new Set();
  private lastHoverTime: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lorn_david_sound_muted');
      // Default to enabled (unmuted) so user immediately enjoys tactile feedback,
      // but easily toggled off anytime.
      this.isMutedState = stored === 'true';
    }
  }

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return this.ctx;
  }

  public isMuted(): boolean {
    return this.isMutedState;
  }

  public setMuted(muted: boolean): void {
    this.isMutedState = muted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('lorn_david_sound_muted', muted ? 'true' : 'false');
    }
    this.listeners.forEach((listener) => listener(muted));
  }

  public toggleMute(): boolean {
    const next = !this.isMutedState;
    this.setMuted(next);
    if (!next) {
      // Play a quick reassuring confirmation pop when unmuting
      this.playToggle();
    }
    return next;
  }

  public subscribe(listener: (muted: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Tactile Mechanical Click:
   * Short 28ms warm acoustic switch pop for button presses & tabs.
   */
  public playClick(): void {
    if (this.isMutedState) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.028);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.028);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.029);
    } catch {
      // Audio autoplay policy or not supported
    }
  }

  /**
   * Subtle Project Card Hover:
   * Ultra-light 16ms airy tick (throttled to avoid rapid triggering on fast mouse moves).
   */
  public playHover(): void {
    if (this.isMutedState) return;

    // Throttle hovers to at most once per 80ms
    const nowMs = Date.now();
    if (nowMs - this.lastHoverTime < 80) return;
    this.lastHoverTime = nowMs;

    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(680, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.018);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.019);
    } catch {
      // Audio autoplay policy or not supported
    }
  }

  /**
   * Crisp Dual-Tone Toggle:
   * Used for theme switcher & mute controls.
   */
  public playToggle(): void {
    if (this.isMutedState) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.setValueAtTime(640, now + 0.022);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.046);
    } catch {
      // Ignore
    }
  }

  /**
   * Success / Chime:
   * Used for clipboard copy and form submission.
   */
  public playSuccess(): void {
    if (this.isMutedState) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.05);
      osc.frequency.setValueAtTime(783.99, now + 0.1);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.19);
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundEngine();
