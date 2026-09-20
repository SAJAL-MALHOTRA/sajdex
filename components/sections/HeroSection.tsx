'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface HeroSectionProps {
  onNavigateWork?: () => void;
  onNavigateContact?: () => void;
}

export default function HeroSection({ onNavigateWork, onNavigateContact }: HeroSectionProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="w-full space-y-16 sm:space-y-24 select-text">
      
      {/* Availability Status Indicator */}
      <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs tracking-wider text-[#8E8E93] uppercase">
        <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
        <span className="text-[#F5F5F7] font-semibold">AVAILABLE FOR COLLABORATION</span>
        <span className="text-white/20">/</span>
        <span>INDIA</span>
      </div>

      {/* Main Hero Grid: Giant Typography (Left) + Orbital Radar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left: Signature Dual-Font Display Name */}
        <div className="lg:col-span-8 space-y-0 select-none">
          <h1 className="font-display font-bold text-6xl sm:text-8xl lg:text-[7.2rem] tracking-tight text-[#F5F5F7] leading-[0.9]">
            Sajal
          </h1>
          <h1 className="font-serif-editorial italic font-normal text-6xl sm:text-8xl lg:text-[7.6rem] tracking-tight text-[#F5F5F7] leading-[0.95] -mt-1 sm:-mt-3">
            Malhotra
          </h1>
        </div>

        {/* Right: Orbital Radar System Graphic */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center relative">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            
            {/* Concentric Orbital Rings */}
            <svg className="w-full h-full text-white/[0.08]" viewBox="0 0 200 200" fill="none">
              <ellipse cx="100" cy="100" rx="90" ry="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="100" cy="100" rx="65" ry="45" stroke="currentColor" strokeWidth="1" />
              <ellipse cx="100" cy="100" rx="40" ry="28" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Orbiting Red Particle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-full h-full relative flex items-center justify-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-[0_0_12px_#EF4444]" />
              </div>
            </motion.div>

            {/* Orbiting Satellite Dots */}
            <div className="absolute flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shadow-[0_0_10px_#EF4444]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]/60" />
            </div>

            {/* System Label */}
            <div className="absolute -bottom-6 right-0 font-mono text-[10px] text-[#636366] tracking-widest uppercase">
              <span>SYSTEM [IDEAS INTO REAL SOFTWARE]</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bio Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 sm:pt-12 border-t border-white/[0.08] items-start">
        
        {/* Left Role Column */}
        <div className="md:col-span-4 space-y-1 font-mono text-xs text-[#8E8E93] tracking-wider uppercase leading-relaxed">
          <div>DEVELOPER / BUILDER</div>
          <div className="text-white/20">/</div>
          <div>CREATIVE</div>
          <div>TECHNOLOGIST</div>
        </div>

        {/* Right Main Bio Statement */}
        <div className="md:col-span-8 space-y-6">
          <p className="font-sans text-2xl sm:text-3xl lg:text-[2.1rem] text-[#F5F5F7] font-normal leading-snug tracking-tight">
            I build products for the web, explore AI, and turn ideas into real software.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <button
              onClick={() => {
                playClick();
                if (onNavigateWork) onNavigateWork();
              }}
              onMouseEnter={playHover}
              className="px-5 py-2.5 rounded-full bg-[#F5F5F7] hover:bg-white text-[#0A0B0D] font-bold tracking-tight transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105"
            >
              <span>EXPLORE WORK</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => {
                playClick();
                if (onNavigateContact) onNavigateContact();
              }}
              onMouseEnter={playHover}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-[#F5F5F7] font-medium tracking-tight transition-colors cursor-pointer"
            >
              <span>GET IN TOUCH</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
