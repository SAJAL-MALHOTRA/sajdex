'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';
import { LayoutGrid, Terminal as TerminalIcon, Volume2, VolumeX, SkipForward, Play, Pause, Mic } from 'lucide-react';

interface DollhouseBottomBarProps {
  onOpenRoom: (room: string) => void;
  activeRoom?: string | null;
  onOpenTerminal?: () => void;
  onOpenVoiceWidget?: () => void;
  isPlayingMusic?: boolean;
  onToggleMusic?: () => void;
  onNextTrack?: () => void;
  currentTrackTitle?: string;
}

export default function DollhouseBottomBar({
  onOpenRoom,
  activeRoom = 'home',
  onOpenTerminal,
  onOpenVoiceWidget,
  isPlayingMusic = false,
  onToggleMusic,
  onNextTrack,
  currentTrackTitle = 'Lofi Chillhop',
}: DollhouseBottomBarProps) {
  const { playClick, playHover } = useSound();
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  // Live Digital Clock & Date
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTimeStr(`${hours}:${mins}`);

      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      setDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const rooms = [
    { id: 'about', label: '01 ABOUT ME', icon: '🛋️', floor: 'Attic' },
    { id: 'projects', label: '02 PROJECTS', icon: '💻', floor: 'Attic' },
    { id: 'education', label: '03 EDUCATION', icon: '📚', floor: 'Attic' },
    { id: 'experience', label: '04 EXPERIENCE', icon: '👔', floor: 'Studio' },
    { id: 'staircase', label: '05 STAIRCASE', icon: '🪜', floor: 'Studio' },
    { id: 'achievements', label: '06 ACHIEVEMENTS', icon: '🏆', floor: 'Studio' },
    { id: 'skills', label: '07 SKILLS', icon: '✨', floor: 'Ground' },
    { id: 'resume', label: '08 RESUME', icon: '🏎️', floor: 'Ground' },
    { id: 'contact', label: '09 CONTACT', icon: '✉️', floor: 'Ground' },
  ];

  return (
    <>
      {/* ── POPUP START / ROOMS LAUNCHER MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed bottom-10 left-3 z-50 w-72 bg-[#1F1027] border-2 border-[#FF4081] rounded-lg shadow-2xl p-2.5 font-pixel text-white pixel-box-shadow"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FF4081]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF4081] rounded-full animate-ping" />
                  <span className="text-xs text-[#FF80AB] font-bold tracking-wider">DOLLHOUSE DIRECTORY</span>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    onOpenRoom('home');
                    setMenuOpen(false);
                  }}
                  className="text-[9px] text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  WHOLE HOUSE
                </button>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {rooms.map((r) => {
                  const isActive = activeRoom === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => {
                        playClick();
                        onOpenRoom(r.id);
                        setMenuOpen(false);
                      }}
                      onMouseEnter={playHover}
                      className={`flex items-center justify-between px-2 py-1 rounded text-xs transition-colors cursor-pointer text-left ${
                        isActive
                          ? 'bg-[#FF4081] text-white font-bold'
                          : 'hover:bg-[#341A42] text-[#F8BBD0]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{r.icon}</span>
                        <span>{r.label}</span>
                      </span>
                      <span className="text-[9px] opacity-60 uppercase">{r.floor}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── BOTTOM OS TASKBAR (MATCHING REFERENCE) ── */}
      <footer className="fixed bottom-0 inset-x-0 h-10 bg-[#241228] border-t border-[#3D1E44] px-3 sm:px-4 flex items-center justify-between text-xs font-mono select-none z-40 shadow-2xl">
        
        {/* Left Side: Pink [ ⊞ ROOMS ] Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClick();
              setMenuOpen(!menuOpen);
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#FF4081] hover:bg-[#F50057] active:scale-95 text-[#1F1027] font-pixel text-xs font-bold transition-all cursor-pointer shadow-md border border-[#FF80AB]"
          >
            <LayoutGrid size={13} className="text-[#1F1027]" />
            <span className="tracking-wider">ROOMS</span>
          </button>

          {/* Quick Whole House Reset */}
          <button
            onClick={() => {
              playClick();
              onOpenRoom('home');
            }}
            className="hidden sm:inline font-pixel text-[11px] text-[#F8BBD0]/80 hover:text-white transition-colors cursor-pointer"
          >
            SAJAL.EXE
          </button>
        </div>

        {/* Center: Music Player & Terminal Shortcuts */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Lo-Fi Music Player Controller */}
          {onToggleMusic && (
            <div className="flex items-center gap-1.5 bg-[#1B0C1E] border border-[#FF4081]/30 rounded px-2 py-0.5 text-[10px]">
              <button
                onClick={onToggleMusic}
                className="text-[#FF4081] hover:text-white cursor-pointer"
                title={isPlayingMusic ? 'Pause Music' : 'Play Music'}
              >
                {isPlayingMusic ? <Pause size={10} /> : <Play size={10} />}
              </button>

              <span className="hidden md:inline font-pixel text-[10px] text-[#F8BBD0] max-w-[100px] truncate">
                {currentTrackTitle}
              </span>

              {onNextTrack && (
                <button
                  onClick={onNextTrack}
                  className="text-[#FF4081]/80 hover:text-white cursor-pointer"
                  title="Next Track"
                >
                  <SkipForward size={10} />
                </button>
              )}
            </div>
          )}

          {/* CLI Terminal Shortcut */}
          {onOpenTerminal && (
            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              className="flex items-center gap-1 px-2 py-1 rounded bg-[#1B0C1E] hover:bg-[#341A42] border border-[#FF4081]/30 text-[#F8BBD0] hover:text-white transition-colors cursor-pointer"
              title="Open Interactive Terminal (~)"
            >
              <TerminalIcon size={11} className="text-[#FF4081]" />
              <span className="font-pixel text-[10px] hidden sm:inline">CLI (~)</span>
            </button>
          )}

          {/* DevDex Voice Shortcut */}
          {onOpenVoiceWidget && (
            <button
              onClick={() => {
                playClick();
                onOpenVoiceWidget();
              }}
              className="flex items-center gap-1 px-2 py-1 rounded bg-[#1B0C1E] hover:bg-[#341A42] border border-[#FF4081]/30 text-[#F8BBD0] hover:text-white transition-colors cursor-pointer"
              title="Talk to DevDex AI Voice Agent"
            >
              <Mic size={11} className="text-[#FF4081]" />
              <span className="font-pixel text-[10px] hidden lg:inline">VOICE</span>
            </button>
          )}
        </div>

        {/* Right Side: Pixel Clock & Date (matching reference image) */}
        <div className="flex flex-col items-end leading-none font-pixel text-[#F8BBD0]">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FF80AB]">{timeStr || '19:39'}</span>
          <span className="text-[8px] sm:text-[9px] tracking-wider text-[#F8BBD0]/70 uppercase">{dateStr || 'SUN, SEP 20'}</span>
        </div>
      </footer>
    </>
  );
}