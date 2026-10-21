'use client';

import { Terminal, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface DevDexHeaderProps {
  onOpenTerminal: () => void;
  isExpanded: boolean;
  onToggleExpanded: () => void;
  isPlayingMusic?: boolean;
  onToggleMusic?: () => void;
  currentTrackTitle?: string;
}

export default function DevDexHeader({
  onOpenTerminal,
  isExpanded,
  onToggleExpanded,
  isPlayingMusic,
  onToggleMusic,
  currentTrackTitle = 'DevDex Ambient',
}: DevDexHeaderProps) {
  const { playClick, playHover } = useSound();

  const navLinks = [
    { label: 'CONSOLE', href: '#console' },
    { label: 'SYSTEMS', href: '#systems' },
    { label: 'WARDROBE', href: '#wardrobe' },
    { label: 'MATRIX', href: '#matrix' },
    { label: 'DISPATCH', href: '#dispatch' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 px-4 sm:px-8 backdrop-blur-md bg-[#08090C]/90 border-b border-[#1A1D27] select-none transition-all">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between font-mono text-xs">
        
        {/* Left: Device Telemetry Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* Glowing Cyan Lens */}
            <div className="w-5 h-5 rounded-full bg-[#121620] border border-cyan-500/40 flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_#22d3ee] animate-pulse" />
            </div>

            {/* Status LEDs */}
            <div className="hidden sm:flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </div>

            <span className="font-bold text-white tracking-wider ml-1">
              DEVDEX
            </span>
            <span className="text-[#636877] hidden md:inline">
              // DX-042
            </span>
          </div>

          <span className="text-white/20 hidden lg:inline">|</span>

          <span className="text-[11px] text-[#8E92A2] hidden lg:inline">
            SAJAL MALHOTRA · NIT JALANDHAR
          </span>
        </div>

        {/* Center: Anchor Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-[11px] text-[#8E92A2] tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={playHover}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Controls (Toggle Expand, Audio, Terminal) */}
        <div className="flex items-center gap-3">
          
          {/* Audio Player Toggle */}
          {onToggleMusic && (
            <button
              onClick={onToggleMusic}
              onMouseEnter={playHover}
              className="flex items-center gap-1 text-[#8E92A2] hover:text-white transition-colors cursor-pointer text-[10px]"
              title={isPlayingMusic ? 'Mute Audio' : 'Play Audio'}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 size={12} className="text-emerald-400 animate-pulse" />
                  <span className="hidden xl:inline max-w-[80px] truncate">{currentTrackTitle}</span>
                </>
              ) : (
                <>
                  <VolumeX size={12} className="text-white/40" />
                  <span className="hidden xl:inline text-white/40">AUDIO</span>
                </>
              )}
            </button>
          )}

          {/* Fold / Expand Toggle */}
          <button
            onClick={() => {
              playClick();
              onToggleExpanded();
            }}
            onMouseEnter={playHover}
            className="px-2.5 py-1 rounded bg-[#131620] hover:bg-[#1A1E2B] border border-white/10 text-white text-[10px] font-semibold tracking-wider transition-colors cursor-pointer"
          >
            {isExpanded ? 'FOLD BADGE' : 'EXPAND CONSOLE'}
          </button>

          {/* Terminal CLI Shortcut */}
          <button
            onClick={() => {
              playClick();
              onOpenTerminal();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#131620] hover:bg-[#1A1E2B] border border-white/10 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer text-[10px] font-semibold"
            title="Open Developer Terminal (~)"
          >
            <Terminal size={11} />
            <span className="hidden sm:inline">CLI (~)</span>
          </button>

        </div>

      </div>
    </header>
  );
}
