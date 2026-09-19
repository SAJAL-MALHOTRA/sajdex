'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface DesktopWindowProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export default function DesktopWindow({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  children,
}: DesktopWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const { playClick, playHover } = useSound();

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      dragConstraints={{ left: -300, right: 300, top: -100, bottom: 300 }}
      onMouseDown={onFocus}
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.2 }}
      style={{ zIndex }}
      className={`fixed ${
        isMaximized
          ? 'top-14 left-4 right-4 bottom-24 rounded-2xl'
          : 'top-20 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[92%] sm:max-w-6xl max-h-[80vh] rounded-3xl'
      } bg-[#0B0C0F]/95 backdrop-blur-2xl border border-[#1a1a1f] shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden font-inter select-none`}
    >
      {/* ─── WINDOW TOP CONTROL BAR ─── */}
      <div
        className="h-11 px-4 bg-[#111216]/90 border-b border-[#1a1a1f] flex items-center justify-between cursor-grab active:cursor-grabbing shrink-0"
      >
        {/* Left macOS Control Dots */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 flex items-center justify-center text-black/60 group transition-colors"
            title="Close"
          >
            <X size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => {
              playClick();
              onMinimize();
            }}
            onMouseEnter={playHover}
            className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 flex items-center justify-center text-black/60 group transition-colors"
            title="Minimize"
          >
            <Minus size={9} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => {
              playClick();
              setIsMaximized(!isMaximized);
            }}
            onMouseEnter={playHover}
            className="w-3.5 h-3.5 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 flex items-center justify-center text-black/60 group transition-colors"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? (
              <Minimize2 size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            ) : (
              <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F5F5F0]">
          {icon}
          <span>{title}</span>
        </div>

        {/* Right Window Indicator */}
        <div className="text-[10px] font-mono text-[#888888] uppercase tracking-widest hidden sm:block">
          SAJDEX WINDOW
        </div>
      </div>

      {/* ─── WINDOW SCROLLABLE BODY CONTENT ─── */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar select-text">
        {children}
      </div>
    </motion.div>
  );
}
