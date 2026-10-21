'use client';

import { useState, useEffect } from 'react';
import { Home, Music, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface DollhouseTopBarProps {
  currentTrackTitle?: string;
  isPlaying?: boolean;
  onToggleMusic?: () => void;
  onNextTrack?: () => void;
  onPrevTrack?: () => void;
  activeRoom?: string;
}

export default function DollhouseTopBar({
  currentTrackTitle = "Akhiyan · Harkirat Sangha",
  isPlaying = false,
  onToggleMusic,
  onNextTrack,
  onPrevTrack,
  activeRoom = 'LIVING SPACE',
}: DollhouseTopBarProps) {
  const [timeStr, setTimeStr] = useState('19:40');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 h-8 bg-[#20122E] border-b border-[#362144] px-3 sm:px-4 flex items-center justify-between text-xs font-mono text-[#F2ACB9] select-none z-40 shadow-md">
      {/* Left: Monogram */}
      <div className="flex items-center gap-2">
        <Home size={12} className="text-[#D46A88]" />
        <span className="font-bold text-[#FDF6E5] font-pixel text-sm tracking-wide">
          SAJAL.EXE <span className="text-[#A78BFA] text-xs font-normal">v1.0</span>
        </span>
      </div>

      {/* Center: Location Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-[10px] text-[#A78BFA]">
        <span>LOCATION:</span>
        <span className="text-[#FDF6E5] font-pixel text-xs tracking-wider uppercase font-semibold">
          {activeRoom}
        </span>
      </div>

      {/* Right: Music Player & System Clock */}
      <div className="flex items-center gap-3 text-[10px]">
        {/* Compact Lofi Audio Player */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#2D1B3D] border border-[#3D2554] text-[#FDF6E5]">
          <Music size={10} className="text-[#D46A88]" />
          <span className="max-w-[90px] sm:max-w-[130px] truncate">{currentTrackTitle}</span>
          
          <div className="flex items-center gap-1 ml-1">
            {onPrevTrack && (
              <button onClick={onPrevTrack} className="hover:text-[#D46A88] cursor-pointer">
                <SkipBack size={9} />
              </button>
            )}
            <button
              onClick={onToggleMusic}
              className="w-4 h-4 rounded bg-[#D46A88] hover:bg-[#F2ACB9] text-white flex items-center justify-center cursor-pointer shadow-xs"
            >
              {isPlaying ? <Pause size={8} className="fill-current" /> : <Play size={8} className="fill-current ml-0.5" />}
            </button>
            {onNextTrack && (
              <button onClick={onNextTrack} className="hover:text-[#D46A88] cursor-pointer">
                <SkipForward size={9} />
              </button>
            )}
          </div>
        </div>

        <span className="text-[#A78BFA]/40">|</span>

        {/* Live Clock */}
        <div className="text-[#FDF6E5] font-mono text-[11px]">
          {timeStr}
        </div>
      </div>
    </header>
  );
}