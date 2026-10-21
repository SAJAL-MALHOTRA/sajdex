'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface HeroSectionProps {
  onNavigateWork?: () => void;
  onNavigateContact?: () => void;
}

export default function HeroSection({ onNavigateWork, onNavigateContact }: HeroSectionProps) {
  const { playClick, playHover } = useSound();
  const [timeStr, setTimeStr] = useState('18:34:34');

  // Real-time ticking clock for the broadsheet ribbon
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full space-y-0 select-text border border-[#202123] rounded-lg overflow-hidden bg-[#0C0D0F]">
      
      {/* ─── 1. BROADSHEET METADATA STATUS RIBBON ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#202123] font-mono text-[11px] text-[#8C8D8A] bg-[#0A0B0D]">
        <div className="px-4 py-2.5 border-r border-[#202123] flex items-center gap-2">
          <span className="text-[#555755]">ISSUE:</span>
          <span className="text-[#F2F1ED] font-bold">VOL. 01</span>
        </div>

        <div className="px-4 py-2.5 md:border-r border-[#202123] flex items-center gap-2">
          <span className="text-[#555755]">DATE:</span>
          <span className="text-[#F2F1ED]">SEP 20, 2026</span>
        </div>

        <div className="px-4 py-2.5 border-r border-t md:border-t-0 border-[#202123] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D85A38] animate-pulse" />
          <span className="text-[#F2F1ED] font-semibold">LIVE SYNC — GITHUB</span>
        </div>

        <div className="px-4 py-2.5 border-t md:border-t-0 border-[#202123] flex items-center justify-between">
          <span className="text-[#555755]">IST:</span>
          <span className="text-[#F2F1ED] font-mono font-medium">GMT+05:30 {timeStr}</span>
        </div>
      </div>

      {/* ─── 2. THE EDITORIAL HERO SPLIT ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column (Approx 65% width with right border) */}
        <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 lg:border-r border-[#202123] space-y-8 flex flex-col justify-between">
          
          {/* Subheader */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-[#8C8D8A] tracking-wider uppercase">
            <span className="text-[#D85A38] font-bold">01 / PREMISE</span>
            <span className="text-[#555755]">—</span>
            <span>FOR BUILDERS, BY BUILDERS</span>
          </div>

          {/* Giant Broadsheet Headline */}
          <div className="space-y-0 select-none">
            <h1 className="font-serif-editorial font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#F2F1ED] leading-[0.92]">
              Building
            </h1>
            <h1 className="font-serif-editorial italic font-normal text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#D85A38] leading-[0.96] -my-1 sm:-my-2">
              Functional
            </h1>
            <h1 className="font-serif-editorial font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#F2F1ED] leading-[0.92]">
              Projects.
            </h1>
          </div>

          {/* Footer of Left Column: Identity Metadata & Actions */}
          <div className="pt-6 border-t border-[#202123] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-mono text-xs text-[#8C8D8A] space-y-0.5">
              <div className="text-[#F2F1ED] font-bold">SAJAL MALHOTRA (SAM)</div>
              <div className="text-[11px] text-[#555755]">DEVELOPER / BUILDER / CREATIVE TECHNOLOGIST</div>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <button
                onClick={() => {
                  playClick();
                  if (onNavigateWork) onNavigateWork();
                }}
                onMouseEnter={playHover}
                className="px-4 py-2 rounded bg-[#F2F1ED] hover:bg-white text-[#08090B] font-bold tracking-tight transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight size={13} className="text-[#D85A38]" />
              </button>

              <button
                onClick={() => {
                  playClick();
                  if (onNavigateContact) onNavigateContact();
                }}
                onMouseEnter={playHover}
                className="px-4 py-2 rounded bg-[#111214] hover:bg-[#16181B] border border-[#202123] text-[#F2F1ED] font-medium transition-colors cursor-pointer"
              >
                <span>CONTACT</span>
              </button>
            </div>
          </div>

        </div>

        {/* Right Column (Approx 35% width: Abstract & Counters) */}
        <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8 bg-[#0A0B0D]">
          
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-[#555755] uppercase tracking-wider">
              ABSTRACT
            </div>

            <p className="font-serif-editorial text-lg sm:text-xl text-[#F2F1ED] leading-relaxed">
              An initiative for the NIT Jalandhar community to build, share, and scale <span className="italic text-[#D85A38]">open-source code</span> — written by a student, used by real people, maintained in public.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#8C8D8A] leading-relaxed pt-2 border-t border-[#202123]">
              Currently engineering real-time multimodal applications, Bayesian student knowledge tracing, and distributed multi-agent systems at the Department of IT, NIT Jalandhar.
            </p>
          </div>

          {/* Quick Metrics Grid at Bottom of Right Column */}
          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#202123] font-mono">
            <div className="p-3 rounded bg-[#0C0D0F] border border-[#202123] space-y-1">
              <span className="text-[10px] text-[#555755] uppercase block">SYSTEMS</span>
              <span className="text-xl font-bold text-[#F2F1ED]">03</span>
            </div>

            <div className="p-3 rounded bg-[#0C0D0F] border border-[#202123] space-y-1">
              <span className="text-[10px] text-[#555755] uppercase block">ACCURACY</span>
              <span className="text-xl font-bold text-[#D85A38]">R² 0.927</span>
            </div>

            <div className="p-3 rounded bg-[#0C0D0F] border border-[#202123] space-y-1">
              <span className="text-[10px] text-[#555755] uppercase block">LATENCY</span>
              <span className="text-xl font-bold text-[#F2F1ED]">&lt;50ms</span>
            </div>

            <div className="p-3 rounded bg-[#0C0D0F] border border-[#202123] space-y-1">
              <span className="text-[10px] text-[#555755] uppercase block">CAMPUS</span>
              <span className="text-xs font-bold text-[#8C8D8A] leading-tight block pt-1">NIT JALANDHAR</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
