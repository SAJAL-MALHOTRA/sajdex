'use client';

class RetroAudio {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false; // Muted by default

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public playTone(freq: number, type: OscillatorType = 'square', duration: number = 0.05, volume: number = 0.06) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio playback safety catch
    }
  }

  public playNav() {
    this.playTone(350, 'square', 0.03, 0.04);
  }

  public playSelect() {
    this.playTone(520, 'square', 0.06, 0.06);
    setTimeout(() => this.playTone(680, 'square', 0.08, 0.06), 60);
  }

  public playBack() {
    this.playTone(280, 'square', 0.07, 0.05);
  }

  public playBoot() {
    this.playTone(260, 'square', 0.08, 0.05);
    setTimeout(() => this.playTone(520, 'square', 0.1, 0.06), 80);
    setTimeout(() => this.playTone(780, 'triangle', 0.18, 0.07), 180);
  }
}

export const soundFx = new RetroAudio();
