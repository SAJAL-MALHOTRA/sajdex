'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, Terminal, ArrowLeft, ArrowRight, Volume2 } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface RunwayHUDProps {
  onOpenTerminal?: () => void;
  isPlayingMusic?: boolean;
  onToggleMusic?: () => void;
  onNextTrack?: () => void;
  currentTrackTitle?: string;
  activeStationIndex: number;
  totalStations: number;
}

export default function RunwayHUD({
  onOpenTerminal,
  isPlayingMusic = false,
  onToggleMusic,
  onNextTrack,
  currentTrackTitle = 'Runway Ambient',
  activeStationIndex,
  totalStations,
}: RunwayHUDProps) {
  const { playClick } = useSound();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}:${secs}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#08090A]/90 backdrop-blur-md border-b border-[#1A1C24] h-12 flex items-center justify-between px-4 sm:px-6 select-none font-mono text-xs">
      
      {/* Brand Monogram & Coordinates */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-sans font-bold text-white tracking-widest uppercase">
            SAJAL // RUNWAY
          </span>
        </div>

        <span className="text-[#3D404C] hidden sm:inline">|</span>

        <span className="text-[11px] text-[#7A7E8D] hidden md:inline">
          NIT JALANDHAR [PB, IN]
        </span>
      </div>

      {/* Station Indicator */}
      <div className="flex items-center gap-2 text-[11px] text-[#A1A4B0]">
        <span className="text-[#555864] hidden sm:inline">STATION:</span>
        <span className="px-2 py-0.5 rounded bg-[#13151A] text-white border border-[#222530] font-bold">
          0{activeStationIndex} / 0{totalStations - 1}
        </span>
      </div>

      {/* Right: Audio Player, Terminal Button, Time */}
      <div className="flex items-center gap-3">
        {/* Audio Player */}
        {onToggleMusic && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111317] border border-[#1E2028] text-[10px] text-[#A1A4B0]">
            <button
              onClick={onToggleMusic}
              className="text-[#D1D4DF] hover:text-white cursor-pointer"
              title={isPlayingMusic ? 'Pause Ambient' : 'Play Ambient'}
            >
              {isPlayingMusic ? <Pause size={11} /> : <Play size={11} />}
            </button>
            <span className="max-w-[70px] sm:max-w-[100px] truncate hidden sm:inline">
              {currentTrackTitle}
            </span>
            {onNextTrack && (
              <button
                onClick={onNextTrack}
                className="text-[#6E7280] hover:text-white cursor-pointer"
                title="Next Track"
              >
                <SkipForward size={11} />
              </button>
            )}
          </div>
        )}

        {/* Terminal Shortcut */}
        {onOpenTerminal && (
          <button
            onClick={() => {
              playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#111317] hover:bg-[#1C1F28] border border-[#1E2028] text-white transition-colors cursor-pointer"
            title="Open Interactive Terminal (~)"
          >
            <Terminal size={11} className="text-[#8E92A0]" />
            <span className="hidden sm:inline text-[10px]">CLI (~)</span>
          </button>
        )}

        <span className="text-[10px] text-[#555864] tabular-nums hidden lg:inline">
          {timeStr}
        </span>
      </div>

    </header>
  );
}