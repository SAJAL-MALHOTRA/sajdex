'use client';

import { useState, useEffect, useCallback } from 'react';

class WebAudioSynth {
  private ctx: AudioContext | null = null;

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

  public playTone(freq: number, type: OscillatorType = 'square', duration: number = 0.08, volume: number = 0.05) {
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

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);

      // Critical node cleanup on ended to prevent oscillator leaks
      osc.onended = () => {
        try {
          osc.disconnect();
          gain.disconnect();
        } catch {
          // Ignore disconnection safety catch
        }
      };
    } catch {
      // Audio safety catch
    }
  }

  public playHover() {
    this.playTone(380, 'square', 0.05, 0.03);
  }

  public playClick() {
    this.playTone(520, 'square', 0.08, 0.04);
  }

  public playModalOpen() {
    this.playTone(440, 'triangle', 0.08, 0.05);
  }
}

const audioSynth = new WebAudioSynth();

export function useSound() {
  const [enabled, setEnabled] = useState(false);

  const toggleSound = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        audioSynth.playClick();
      }
      return next;
    });
  }, []);

  const playHover = useCallback(() => {
    if (enabled) audioSynth.playHover();
  }, [enabled]);

  const playClick = useCallback(() => {
    if (enabled) audioSynth.playClick();
  }, [enabled]);

  const playModalOpen = useCallback(() => {
    if (enabled) audioSynth.playModalOpen();
  }, [enabled]);

  return {
    enabled,
    toggleSound,
    playHover,
    playClick,
    playModalOpen,
  };
}
