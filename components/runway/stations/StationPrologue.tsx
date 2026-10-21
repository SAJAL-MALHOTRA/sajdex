'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shirt, Sparkles, Terminal } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface StationPrologueProps {
  onNextStation: () => void;
  onOpenTerminal?: () => void;
}

export default function StationPrologue({
  onNextStation,
  onOpenTerminal,
}: StationPrologueProps) {
  const { playClick } = useSound();

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-6 sm:px-12 md:px-20 select-none overflow-hidden border-r border-[#1B1D24]">
      {/* Background Architectural Grid & Subtle Radial Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(#20232B_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full flex flex-col justify-between h-[75vh] py-6 relative z-10">
        
        {/* Top Runway Header Metadata */}
        <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1A1C24] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold tracking-widest">
              STATION 00 // PROLOGUE
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#555864]">
            <span>NIT JALANDHAR [PB, IN]</span>
            <span className="hidden sm:inline">31.3959° N, 75.5358° E</span>
          </div>
        </div>

        {/* Center: Massive Headline Typography */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-sm text-[#8E92A0] tracking-widest uppercase block">
              SAJAL // RUNWAY EXHIBITION SS26
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-sans font-bold tracking-tight text-white uppercase leading-[0.98]">
              ENGINEER BY LOGIC.
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif italic text-[#A6ABB9] tracking-normal leading-[1.05]">
              Stylist by Aesthetic.
            </h1>
          </div>

          <p className="text-sm sm:text-base text-[#9A9EAB] max-w-2xl font-sans leading-relaxed">
            {profile.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="px-3 py-1 rounded-md bg-[#111317] border border-[#20232B] text-xs font-mono text-[#C5C8D4] flex items-center gap-1.5">
              <Code2 size={13} className="text-emerald-400" />
              <span>Full-Stack & ML Systems</span>
            </div>
            <div className="px-3 py-1 rounded-md bg-[#111317] border border-[#20232B] text-xs font-mono text-[#C5C8D4] flex items-center gap-1.5">
              <Shirt size={13} className="text-amber-400" />
              <span>Streetwear & Lookbook Archive</span>
            </div>
            {onOpenTerminal && (
              <button
                onClick={() => {
                  playClick();
                  onOpenTerminal();
                }}
                className="px-3 py-1 rounded-md bg-[#161820] hover:bg-[#222530] border border-[#262A36] text-xs font-mono text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Terminal size={12} className="text-[#8E92A0]" />
                <span>CLI Console (~)</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Runway Prompt */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1A1C24] font-mono text-xs">
          <span className="text-[#555864] hidden sm:inline">
            USE HORIZONTAL SCROLL, TRACKPAD SWIPE, OR ARROW KEYS
          </span>

          <button
            onClick={() => {
              playClick();
              onNextStation();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#E1E4EE] text-black font-semibold tracking-wider transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <span>ENTER RUNWAY</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}