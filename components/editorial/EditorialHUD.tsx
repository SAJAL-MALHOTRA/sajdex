'use client';

import { BookOpen, Volume2, VolumeX, SkipForward, Terminal, Sparkles } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface EditorialHUDProps {
  currentSpreadTitle: string;
  currentSpreadIndex: number;
  totalSpreads: number;
  onOpenIndex: () => void;
  onOpenTerminal: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onNextTrack: () => void;
  currentTrackTitle: string;
}

export default function EditorialHUD({
  currentSpreadTitle,
  currentSpreadIndex,
  totalSpreads,
  onOpenIndex,
  onOpenTerminal,
  isPlayingMusic,
  onToggleMusic,
  onNextTrack,
  currentTrackTitle,
}: EditorialHUDProps) {
  const { playClick, playHover } = useSound();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 px-4 sm:px-8 border-b backdrop-blur-md select-none transition-colors duration-300 border-white/10 bg-[#070709]/80 text-white">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between font-mono text-xs">
        
        {/* Left: Magazine Logo & Society Affiliation */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-bold text-base tracking-wider text-white">
              MERVEILLEUX
            </span>
            <span className="text-[10px] text-[#A6ABB9] tracking-widest hidden sm:inline">
              × SAJAL
            </span>
          </div>

          <span className="text-white/20 hidden md:inline">|</span>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#8E92A0]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ISSUE N° 01 // NIT JALANDHAR</span>
          </div>
        </div>

        {/* Center: Table of Contents / Index Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playClick();
              onOpenIndex();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all cursor-pointer text-white/90 hover:text-white"
            title="Open Table of Contents (Index)"
          >
            <BookOpen size={13} className="text-amber-400" />
            <span className="font-semibold tracking-wider text-[11px] uppercase">
              INDEX: {currentSpreadTitle}
            </span>
            <span className="text-[10px] text-white/50">
              [{currentSpreadIndex + 1}/{totalSpreads}]
            </span>
          </button>
        </div>

        {/* Right: Audio Player, Theme Toggle, Terminal */}
        <div className="flex items-center gap-2 sm:gap-3 text-[11px]">
          
          {/* Ambient Music Player */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
            <button
              onClick={onToggleMusic}
              onMouseEnter={playHover}
              className="text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title={isPlayingMusic ? 'Pause Runway Soundtrack' : 'Play Runway Soundtrack'}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 size={13} className="text-emerald-400 animate-pulse" />
                  <span className="hidden xl:inline text-[10px] text-white/80 max-w-[90px] truncate">
                    {currentTrackTitle}
                  </span>
                </>
              ) : (
                <>
                  <VolumeX size={13} className="text-white/40" />
                  <span className="hidden xl:inline text-[10px] text-white/50">MUTED</span>
                </>
              )}
            </button>

            {isPlayingMusic && (
              <button
                onClick={onNextTrack}
                onMouseEnter={playHover}
                className="text-white/50 hover:text-white transition-colors cursor-pointer ml-1"
                title="Next Audio Track"
              >
                <SkipForward size={11} />
              </button>
            )}
          </div>

          {/* Developer CLI Shortcut */}
          <button
            onClick={() => {
              playClick();
              onOpenTerminal();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all cursor-pointer"
            title="Open Developer Terminal (~)"
          >
            <Terminal size={12} className="text-emerald-400" />
            <span className="font-semibold text-[10px] hidden sm:inline">CLI (~)</span>
          </button>

        </div>

      </div>
    </header>
  );
}
