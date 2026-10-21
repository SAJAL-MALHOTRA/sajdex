'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BadgeFront from './BadgeFront';
import BadgeBack from './BadgeBack';
import { useSound } from '@/hooks/useSound';

interface BadgeContainerProps {
  onBadgeIn: (tab?: string) => void;
}

export default function BadgeContainer({ onBadgeIn }: BadgeContainerProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { playClick } = useSound();

  const handleFlip = () => {
    playClick();
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-6 px-4 select-none">
      
      {/* ── REALISTIC LANYARD STRAP AT TOP ── */}
      <div className="relative flex flex-col items-center mb-[-12px] z-20 pointer-events-none">
        {/* Lanyard Fabric Strap with subtle texture */}
        <div className="w-10 h-16 bg-gradient-to-b from-[#1E2028] to-[#12141A] border-x border-white/10 shadow-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_8px)]" />
          <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest rotate-90 whitespace-nowrap">
            NITJ // DEVDEX
          </span>
        </div>
        {/* Metal Swivel Lobster Clip */}
        <div className="w-7 h-5 rounded-md bg-gradient-to-b from-[#717789] to-[#3B3F4F] border border-white/20 shadow-md flex items-center justify-center">
          <div className="w-2.5 h-1.5 rounded-full bg-black/60" />
        </div>
      </div>

      {/* ── 3D FLIPPABLE BADGE CARD ── */}
      <div className="relative w-full max-w-[430px] [perspective:1200px] z-10">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="w-full [transform-style:preserve-3d] relative"
        >
          {/* FRONT */}
          <div className="w-full [backface-visibility:hidden]">
            <BadgeFront
              onFlip={handleFlip}
              onBadgeIn={onBadgeIn}
            />
          </div>

          {/* BACK */}
          <div className="w-full absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <BadgeBack
              onFlip={handleFlip}
              onBadgeIn={onBadgeIn}
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle Hint */}
      <div className="mt-4 font-mono text-[11px] text-[#555B6C] tracking-wider flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>CLICK FLIP TO VIEW PERSONNEL DOSSIER · CLICK BADGE IN TO OPEN WORKSTATION</span>
      </div>

    </div>
  );
}
