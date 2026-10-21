'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, Terminal, ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface AtelierNavbarProps {
  onOpenTerminal?: () => void;
  isPlayingMusic?: boolean;
  onToggleMusic?: () => void;
  onNextTrack?: () => void;
  currentTrackTitle?: string;
  activeFilter?: string;
  onSelectFilter?: (filter: string) => void;
}

export default function AtelierNavbar({
  onOpenTerminal,
  isPlayingMusic = false,
  onToggleMusic,
  onNextTrack,
  currentTrackTitle = 'Lofi Chillhop',
  activeFilter = 'all',
  onSelectFilter,
}: AtelierNavbarProps) {
  const { playClick } = useSound();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}:${secs} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 inset-x-0 z-40 bg-[#08090A]/85 backdrop-blur-md border-b border-[#1C1E23] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs text-[#9E9EA8]">
        
        {/* Left: Brand Monogram & Live Status */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <span className="font-sans font-bold text-sm tracking-wider text-white">
              SAJAL
            </span>
            <span className="text-[#555861] hidden sm:inline">//</span>
            <span className="text-[11px] text-[#A1A4B0] tracking-widest uppercase hidden sm:inline">
              ATELIER ARCHIVE
            </span>
          </button>

          <span className="hidden md:inline px-2 py-0.5 rounded bg-[#131519] border border-[#22252C] text-[10px] text-[#7E828E]">
            NIT JALANDHAR • 2024–2029
          </span>
        </div>

        {/* Center: Section Anchor Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0E1013] border border-[#1E2026] rounded-full p-1 text-[11px]">
          <button
            onClick={() => scrollToSection('rotation')}
            className="px-3 py-1 rounded-full text-[#A1A4B0] hover:text-white hover:bg-[#181B22] transition-colors cursor-pointer"
          >
            ROTATION
          </button>
          <button
            onClick={() => {
              if (onSelectFilter) onSelectFilter('code');
              scrollToSection('archive');
            }}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              activeFilter === 'code' ? 'bg-white text-black font-semibold' : 'text-[#A1A4B0] hover:text-white hover:bg-[#181B22]'
            }`}
          >
            01 CODE
          </button>
          <button
            onClick={() => {
              if (onSelectFilter) onSelectFilter('fits');
              scrollToSection('archive');
            }}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              activeFilter === 'fits' ? 'bg-white text-black font-semibold' : 'text-[#A1A4B0] hover:text-white hover:bg-[#181B22]'
            }`}
          >
            02 FITS
          </button>
          <button
            onClick={() => scrollToSection('matrix')}
            className="px-3 py-1 rounded-full text-[#A1A4B0] hover:text-white hover:bg-[#181B22] transition-colors cursor-pointer"
          >
            MATRIX
          </button>
          <button
            onClick={() => scrollToSection('dispatch')}
            className="px-3 py-1 rounded-full text-[#A1A4B0] hover:text-white hover:bg-[#181B22] transition-colors cursor-pointer"
          >
            DISPATCH
          </button>
        </nav>

        {/* Right: Audio Controller, Terminal Button, Time */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Lo-Fi Soundtrack Player */}
          {onToggleMusic && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111317] border border-[#1E2026] text-[10px] text-[#A1A4B0]">
              <button
                onClick={onToggleMusic}
                className="hover:text-white text-[#D1D4DF] cursor-pointer"
                title={isPlayingMusic ? 'Pause Music' : 'Play Music'}
              >
                {isPlayingMusic ? <Pause size={11} /> : <Play size={11} />}
              </button>
              <span className="max-w-[80px] sm:max-w-[110px] truncate hidden sm:inline">
                {currentTrackTitle}
              </span>
              {onNextTrack && (
                <button
                  onClick={onNextTrack}
                  className="hover:text-white text-[#7E828E] cursor-pointer"
                  title="Next Track"
                >
                  <SkipForward size={11} />
                </button>
              )}
            </div>
          )}

          {/* Terminal Launcher Button */}
          {onOpenTerminal && (
            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111317] hover:bg-[#1C1F27] border border-[#1E2026] hover:border-[#383C47] text-white transition-all cursor-pointer"
              title="Open Terminal (~)"
            >
              <Terminal size={11} className="text-[#8E92A0]" />
              <span className="hidden sm:inline text-[11px]">CLI (~)</span>
            </button>
          )}

          {/* Clock */}
          <span className="hidden xl:inline text-[10px] text-[#636773] tabular-nums">
            {timeStr}
          </span>
        </div>
      </div>
    </header>
  );
}