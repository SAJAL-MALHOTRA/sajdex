'use client';

import { motion } from 'framer-motion';
import { Code2, Shirt, Music, Terminal, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function VogueAbout() {
  const { playClick, playHover } = useSound();

  return (
    <section id="about" className="w-full py-20 sm:py-28 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="space-y-2 pb-8 border-b border-white/10 mb-12">
          <span className="font-mono text-xs tracking-widest text-[#717585] uppercase block">
            PROFILE // THE TWO DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight uppercase">
            About Sajal
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-[#A6ABB9]">
            Operating at the exact intersection of software logic and high-fashion curation.
          </p>
        </div>

        {/* Dual Discipline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: ESSAY & MANIFESTO (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-sm sm:text-base text-[#9DA2B3] leading-relaxed">
              <p className="editorial-dropcap text-white font-serif">
                Engineering software and curating wardrobe share identical fundamental tenets: structural integrity, deliberate proportion, and the elimination of superfluous noise.
              </p>
              
              <p>
                As an Information Technology undergraduate at Dr. B. R. Ambedkar National Institute of Technology Jalandhar (Batch 2024–2029) and Creative Lead for Merveilleux, I split my waking hours between deterministic algorithms and tactile textiles.
              </p>

              <p>
                A high-frequency ML model predicts market alpha through clean math and low-latency execution; a boxy 380GSM zip jacket commands presence through drop-shoulder silhouette and fabric drape. Neither allows room for mediocrity.
              </p>
            </div>

            {/* Quote Block */}
            <div className="p-4 rounded-sm bg-[#0B0C10] border-l-2 border-white text-white font-serif italic text-sm leading-snug">
              &ldquo;We reject the false dichotomy between analytical rigor and visual aesthetic. Code is structural syntax; garment is wearable architecture.&rdquo;
            </div>

            {/* Department & Society Metadata */}
            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-3 bg-[#0B0C10] border border-white/10 rounded-sm">
                <span className="text-[10px] text-white/40 uppercase block">INSTITUTION</span>
                <span className="text-white font-medium">NIT Jalandhar [PB, IN]</span>
                <span className="text-[10px] text-[#717585] block mt-0.5">Dept. of Information Tech</span>
              </div>
              <div className="p-3 bg-[#0B0C10] border border-white/10 rounded-sm">
                <span className="text-[10px] text-white/40 uppercase block">FASHION SOCIETY</span>
                <span className="text-white font-medium">Merveilleux NITJ</span>
                <span className="text-[10px] text-[#717585] block mt-0.5">Creative & Styling Lead</span>
              </div>
            </div>
          </div>

          {/* RIGHT: CURRENT ROTATION CARDS (5 COLS) */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <span className="text-[#717585] uppercase tracking-widest block pb-2 border-b border-white/10 text-[10px]">
              DAILY ROTATION LOG
            </span>

            {/* Building */}
            <div className="p-4 rounded-sm bg-[#0A0A0D] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold uppercase">
                <Code2 size={13} className="text-emerald-400" />
                <span>CURRENTLY BUILDING</span>
              </div>
              <p className="text-[11px] text-[#A6ABB9] leading-relaxed">
                {profile.rotation.building}
              </p>
            </div>

            {/* Wearing */}
            <div className="p-4 rounded-sm bg-[#0A0A0D] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold uppercase">
                <Shirt size={13} className="text-amber-400" />
                <span>CURRENTLY WEARING</span>
              </div>
              <p className="text-[11px] text-[#A6ABB9] leading-relaxed">
                {profile.rotation.wearing}
              </p>
            </div>

            {/* Listening */}
            <div className="p-4 rounded-sm bg-[#0A0A0D] border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold uppercase">
                <Music size={13} className="text-purple-400" />
                <span>STUDIO AUDIO ROTATION</span>
              </div>
              <p className="text-[11px] text-[#A6ABB9] leading-relaxed">
                {profile.rotation.listening}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
