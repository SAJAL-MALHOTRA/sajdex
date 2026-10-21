'use client';

import { Volume2, VolumeX, Terminal, ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface VogueHeaderProps {
  onOpenTerminal: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  currentTrackTitle: string;
}

export default function VogueHeader({
  onOpenTerminal,
  isPlayingMusic,
  onToggleMusic,
  currentTrackTitle,
}: VogueHeaderProps) {
  const { playClick, playHover } = useSound();

  const navLinks = [
    { label: 'STORIES', href: '#features' },
    { label: 'LOOKBOOK', href: '#lookbook' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 px-6 sm:px-12 backdrop-blur-md bg-[#050505]/90 border-b border-white/10 select-none transition-all">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        
        {/* Left: Publication Tagline */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-serif italic font-bold text-lg sm:text-xl tracking-wider text-white hover:text-white/80 transition-colors"
          >
            SAJAL
          </a>
          <span className="text-white/30 text-xs hidden sm:inline">•</span>
          <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase hidden sm:inline">
            ISSUE N° 01 // NIT JALANDHAR
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-white/70">
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

        {/* Right: Audio Toggle & Terminal */}
        <div className="flex items-center gap-4 font-mono text-xs">
          {/* Soundtrack Button */}
          <button
            onClick={onToggleMusic}
            onMouseEnter={playHover}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
            title={isPlayingMusic ? 'Pause Ambient Soundtrack' : 'Play Ambient Soundtrack'}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 size={13} className="text-white animate-pulse" />
                <span className="text-[10px] tracking-wider hidden lg:inline max-w-[100px] truncate">
                  {currentTrackTitle}
                </span>
              </>
            ) : (
              <>
                <VolumeX size={13} className="text-white/40" />
                <span className="text-[10px] tracking-wider hidden lg:inline text-white/40">AUDIO</span>
              </>
            )}
          </button>

          <span className="text-white/20 hidden sm:inline">|</span>

          {/* Terminal Toggle */}
          <button
            onClick={() => {
              playClick();
              onOpenTerminal();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 hover:border-white/50 text-white/80 hover:text-white transition-all cursor-pointer text-[10px] tracking-wider"
          >
            <Terminal size={11} />
            <span>CLI (~)</span>
          </button>
        </div>

      </div>
    </header>
  );
}
