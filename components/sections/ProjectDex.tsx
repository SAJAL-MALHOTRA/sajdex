'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Heart, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface ProjectDexProps {
  onOpenModalProject?: (id: string) => void;
}

export default function ProjectDex({ onOpenModalProject }: ProjectDexProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="w-full space-y-6 select-text">
      
      {/* ─── SECTION HEADER ─── */}
      <div className="flex items-center justify-between border-b border-[#202123] pb-4 font-mono text-xs text-[#8C8D8A]">
        <div className="flex items-center gap-2">
          <span className="text-[#E5484D] font-bold">01 —</span>
          <h2 className="text-[#F2F1ED] font-semibold tracking-wide text-sm font-sans">Selected work</h2>
        </div>

        <span className="tracking-widest uppercase text-[11px] text-[#555755]">
          THREE THINGS I&apos;VE MADE
        </span>
      </div>

      {/* ─── 1. FLAGSHIP FEATURED PROJECT: PAIRFECT ─── */}
      <motion.div
        onClick={() => {
          playClick();
          if (onOpenModalProject) onOpenModalProject('OBJ-001');
        }}
        onMouseEnter={playHover}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.16 }}
        className="group cursor-pointer p-6 sm:p-8 rounded-xl bg-[#0C0D0F] border border-[#202123] hover:border-[#35373B] transition-all space-y-6 shadow-md relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#E5484D] font-bold tracking-wider">01 // FLAGSHIP</span>
              <span className="px-2 py-0.5 rounded bg-[#141516] border border-[#202123] text-[10px] text-[#8C8D8A] uppercase tracking-wider">
                PRIMARY PRODUCT · 2025
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2F1ED] group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-2">
                <span>Pairfect</span>
                <ArrowUpRight
                  size={24}
                  className="text-[#8C8D8A] group-hover:text-[#E5484D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#8C8D8A] group-hover:text-[#BABBB7] font-sans leading-relaxed transition-colors max-w-xl">
              A relationship platform designed around shared memories, rituals and meaningful interaction.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-[#555755]">
              <span className="text-[#F2F1ED] text-[11px] font-semibold">Next.js</span>
              <span>·</span>
              <span>TypeScript</span>
              <span>·</span>
              <span>Supabase</span>
              <span>·</span>
              <span>WebRTC</span>
            </div>
          </div>

          {/* Right Cinematic Preview: Warm parchment / Realtime UI visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="w-full h-44 sm:h-48 rounded-lg bg-gradient-to-br from-[#161414] to-[#0A0A0C] border border-[#202123] group-hover:border-[#E5484D]/30 p-4 flex flex-col justify-between transition-all group-hover:scale-[1.02] shadow-inner overflow-hidden relative">
              <div className="flex items-center justify-between font-mono text-[10px] text-[#555755]">
                <span className="flex items-center gap-1.5 text-[#E5484D]">
                  <Heart size={10} className="fill-current" />
                  <span>SHARED REALTIME TIMELINE</span>
                </span>
                <span>&lt;50ms SYNC</span>
              </div>

              {/* Preview UI Component Mock */}
              <div className="space-y-2 py-1">
                <div className="p-2.5 rounded bg-[#111214]/90 border border-white/[0.04] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5484D]" />
                    <span className="font-medium text-[#F2F1ED]">Daily Ritual Prompt</span>
                  </div>
                  <span className="text-[10px] text-[#8C8D8A] font-mono">COMPLETE</span>
                </div>

                <div className="p-2 rounded bg-black/40 border border-white/[0.02] text-[11px] text-[#8C8D8A] font-sans italic truncate">
                  &ldquo;Our favorite memory together this month...&rdquo;
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#555755] border-t border-white/[0.04] pt-1.5">
                <span>CHANNEL: ENCRYPTED P2P</span>
                <span className="text-[#F2F1ED]">INSPECT CASE STUDY ↗</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ─── 2. SECONDARY EDITORIAL ROWS: THINKFOLIO & CAMPUSCONNECT ─── */}
      <div className="divide-y divide-[#202123]">
        
        {/* ROW 02: THINKFOLIO */}
        <motion.div
          onClick={() => {
            playClick();
            if (onOpenModalProject) onOpenModalProject('OBJ-026');
          }}
          onMouseEnter={playHover}
          className="py-6 sm:py-8 group cursor-pointer space-y-3 transition-all hover:bg-[#0C0D0F]/60 -mx-3 px-3 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-bold text-[#555755] group-hover:text-[#E5484D] transition-colors">
                    02
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F1ED] group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-2">
                    <span>Thinkfolio</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#555755] group-hover:text-[#E5484D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                </div>

                <span className="font-mono text-[10px] text-[#8C8D8A] uppercase">
                  PRODUCT STUDY · 2024
                </span>
              </div>

              <p className="text-sm text-[#8C8D8A] group-hover:text-[#BABBB7] font-sans leading-relaxed pl-8 sm:pl-10 max-w-xl transition-colors">
                A focused workspace for turning scattered thinking into a living portfolio of ideas.
              </p>

              <div className="pl-8 sm:pl-10 font-mono text-[11px] text-[#555755]">
                <span>React · TypeScript · Tailwind · PyTorch</span>
              </div>
            </div>

            {/* Right Analytical Preview (4 cols) */}
            <div className="md:col-span-4 flex justify-start md:justify-end pl-8 md:pl-0">
              <div className="w-full max-w-[220px] h-20 rounded bg-[#111214] border border-[#202123] group-hover:border-[#35373B] p-2.5 flex flex-col justify-between transition-transform group-hover:scale-[1.02]">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#555755]">
                  <span className="flex items-center gap-1 text-[#8C8D8A]">
                    <TrendingUp size={9} />
                    <span>BAYESIAN TRACING</span>
                  </span>
                  <span className="text-[#E5484D] font-bold">R² 0.927</span>
                </div>
                <div className="h-4 flex items-end gap-1">
                  <div className="w-1/5 h-2 bg-[#202123] rounded-sm" />
                  <div className="w-1/5 h-3 bg-[#35373B] rounded-sm" />
                  <div className="w-1/5 h-2.5 bg-[#555755] rounded-sm" />
                  <div className="w-1/5 h-3.5 bg-[#8C8D8A] rounded-sm" />
                  <div className="w-1/5 h-4 bg-[#E5484D] rounded-sm" />
                </div>
                <div className="text-[9px] font-mono text-[#555755] truncate">
                  PyTorch / Quantitative Inference
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ROW 03: CAMPUSCONNECT */}
        <motion.div
          onClick={() => {
            playClick();
            if (onOpenModalProject) onOpenModalProject('OBJ-094');
          }}
          onMouseEnter={playHover}
          className="py-6 sm:py-8 group cursor-pointer space-y-3 transition-all hover:bg-[#0C0D0F]/60 -mx-3 px-3 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-bold text-[#555755] group-hover:text-[#E5484D] transition-colors">
                    03
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F1ED] group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-2">
                    <span>CampusConnect</span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#555755] group-hover:text-[#E5484D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                </div>

                <span className="font-mono text-[10px] text-[#8C8D8A] uppercase">
                  COMMUNITY PLATFORM · 2024
                </span>
              </div>

              <p className="text-sm text-[#8C8D8A] group-hover:text-[#BABBB7] font-sans leading-relaxed pl-8 sm:pl-10 max-w-xl transition-colors">
                A connected campus experience built around useful conversations and real-world community.
              </p>

              <div className="pl-8 sm:pl-10 font-mono text-[11px] text-[#555755]">
                <span>Next.js · Supabase · Tailwind · LangGraph</span>
              </div>
            </div>

            {/* Right Community Preview (4 cols) */}
            <div className="md:col-span-4 flex justify-start md:justify-end pl-8 md:pl-0">
              <div className="w-full max-w-[220px] h-20 rounded bg-[#111214] border border-[#202123] group-hover:border-[#35373B] p-2.5 flex flex-col justify-between transition-transform group-hover:scale-[1.02]">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#555755]">
                  <span className="flex items-center gap-1 text-[#8C8D8A]">
                    <Users size={9} />
                    <span>NITJ NETWORK GRAPH</span>
                  </span>
                  <span className="text-[#F2F1ED] font-bold">5-NODE</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#BABBB7] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D]" />
                  <span>LangGraph Autonomous Mesh</span>
                </div>
                <div className="text-[9px] font-mono text-[#555755] truncate">
                  Distributed Real-time Threads
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
}
