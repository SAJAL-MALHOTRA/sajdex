'use client';

import { motion } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

interface DevDexCollapsedProps {
  onOpen: () => void;
}

export default function DevDexCollapsed({ onOpen }: DevDexCollapsedProps) {
  const { playClick, playHover } = useSound();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[420px] rounded-[36px] bg-[#0E1015] border border-[#202430] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col justify-between min-h-[580px] select-none group"
    >
      {/* ── 1. DEVICE TOP STATUS BAR ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#1A1D27]">
          {/* Cyan Camera Lens with 3 Color Status Dots */}
          <div className="flex items-center gap-3">
            {/* Glowing Cyan Lens */}
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#121620] border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.35)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
            </div>

            {/* 3 Status Dots: Red, Orange, Green */}
            <div className="flex items-center gap-1.5 pl-1">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            </div>
          </div>

          {/* Model Tag */}
          <div className="font-mono text-xs text-[#8E92A2] tracking-widest uppercase">
            DEVDEX // DX-042
          </div>
        </div>
      </div>

      {/* ── 2. CENTER: COMPASS DIAL & IDENTITY ── */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 my-auto py-8">
        
        {/* Large Circular Compass Dial */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-28 h-28 rounded-full bg-[#12151D] border-2 border-[#262B3A] flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.06)] group-hover:border-[#383F54] transition-colors"
        >
          {/* Outer Ring */}
          <div className="absolute inset-1.5 rounded-full border border-[#1A1E29]" />
          
          {/* Directional Arrow Icon */}
          <svg
            className="w-10 h-10 text-white fill-current filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L4 20l8-4 8 4L12 2z" />
          </svg>
        </motion.div>

        {/* Name & Subtitle */}
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Sajal Malhotra
          </h2>
          <p className="font-mono text-xs text-[#8A8F9E] tracking-wider uppercase">
            STUDENT BUILDER · NIT Jalandhar (NITJ)
          </p>
        </div>

      </div>

      {/* ── 3. BOTTOM TRIGGER BUTTON & CAPTION ── */}
      <div className="space-y-3 pt-4 border-t border-[#1A1D27]/60">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            playClick();
            onOpen();
          }}
          onMouseEnter={playHover}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#E6E8EE] hover:bg-white text-[#0B0D12] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(255,255,255,0.12)] flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>▲</span>
          <span>OPEN DEVDEX →</span>
        </motion.button>

        <p className="text-center font-mono text-[9px] sm:text-[10px] text-[#555B6C] uppercase tracking-widest">
          TAP TO UNFOLD DEVELOPER IDENTITY &amp; AUDIO SUMMARY
        </p>
      </div>

    </motion.div>
  );
}
