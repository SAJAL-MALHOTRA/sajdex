'use client';

import { useTheme } from './ThemeProvider';
import { useSound } from '@/hooks/useSound';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { playClick, playHover } = useSound();

  const handleToggle = () => {
    playClick();
    toggleTheme();
  };

  const isLight = theme === 'light';

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={playHover}
      className={`flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-mono tracking-wider transition-all cursor-pointer select-none ${
        isLight
          ? 'bg-white hover:bg-[#F4F4F6] text-[#09090B] border-[#D1D5DB] shadow-sm'
          : 'bg-[#141417] hover:bg-[#1E1E24] text-[#EDEDED] border-[#27272A]'
      }`}
      title={isLight ? 'Switch to Dark Mode (☾)' : 'Switch to Light Mode (☼)'}
      aria-label="Toggle light/dark theme"
    >
      {isLight ? (
        <>
          <Sun size={10} className="text-amber-500 fill-amber-400/20" />
          <span className="font-semibold tracking-wider">LIGHT</span>
        </>
      ) : (
        <>
          <Moon size={10} className="text-zinc-300 fill-zinc-400/20" />
          <span className="font-semibold tracking-wider">DARK</span>
        </>
      )}
    </button>
  );
}
