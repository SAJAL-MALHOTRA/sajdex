'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface VogueCoverHeroProps {
  onOpenProjectModal?: (id: string) => void;
}

export default function VogueCoverHero({ onOpenProjectModal }: VogueCoverHeroProps) {
  const { playClick, playHover } = useSound();

  return (
    <section className="relative min-h-screen w-full pt-20 sm:pt-24 pb-12 px-6 sm:px-12 flex flex-col justify-between max-w-7xl mx-auto select-none">
      
      {/* ── 1. THE ICONIC VOGUE MASTHEAD (Direct from Image 3) ── */}
      <div className="text-center pt-2 sm:pt-6 pb-6 sm:pb-10 border-b border-white/10">
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-serif font-black tracking-tight text-white uppercase leading-[0.82] select-none hover:text-white/95 transition-colors">
          VOGUE
        </h1>
        <div className="font-mono text-xs sm:text-sm tracking-[0.35em] text-[#8E92A0] uppercase mt-2 sm:mt-3">
          SAJAL // MERVEILLEUX × NIT JALANDHAR
        </div>
      </div>

      {/* ── 2. TWO-COLUMN EDITORIAL SPREAD (Direct from Image 3) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-10 sm:py-14 flex-1">
        
        {/* LEFT COLUMN: EDITORIAL HEADLINE & ESSAY (6 COLS) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-widest text-[#717585] uppercase block">
              COVER STORY // AUTUMN-WINTER 2026
            </span>

            {/* Giant Editorial Title (Image 3 style) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
              The architecture of software &amp; style
            </h2>

            {/* Hairline Divider (Image 3) */}
            <div className="w-full border-t border-white/20 pt-4">
              <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#C5C8D4] leading-relaxed">
                Constructing software by logic. Curating wardrobe by aesthetic. Deterministic machine learning pipelines and functional minimalism.
              </p>
            </div>

            {/* Bio Blurb */}
            <p className="text-xs sm:text-sm font-sans text-[#8E92A0] leading-relaxed max-w-xl">
              IT Undergraduate at Dr. B. R. Ambedkar National Institute of Technology Jalandhar (2024–2029) and Creative Lead at Merveilleux. Operating across PyTorch quant systems, low-latency WebRTC pairing platforms, and silhouette proportion.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex items-center gap-4 font-mono text-xs">
            <a
              href="#features"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold tracking-wider transition-all"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown size={13} />
            </a>

            <a
              href="#lookbook"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white font-medium tracking-wider transition-all"
            >
              <span>WARDROBE ARCHIVE</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: HIGH-FASHION FRAMED PORTRAIT (Direct from Image 3 - 6 COLS) */}
        <div className="lg:col-span-6 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-md lg:max-w-none h-[420px] sm:h-[500px] md:h-[560px] rounded-sm overflow-hidden border border-white/20 group shadow-2xl bg-[#0A0A0A]"
          >
            {/* Crisp High Fashion Portrait */}
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
              alt="Sajal Editorial Portrait"
              className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Corner Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-white/80">
              <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/20">
                LOOK N° 01 // TECHNICAL MONOCHROME
              </span>
              <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/20">
                MERVEILLEUX ARCHIVE
              </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ── 3. BOTTOM BYLINE BETWEEN TWO HAIRLINES (Direct from Image 3: "YESHA JHAVERI | PSYCHOTHERAPIST") ── */}
      <div className="w-full border-t border-b border-white/20 py-3 mt-4">
        <div className="flex items-center justify-between font-serif text-xs sm:text-sm tracking-[0.25em] uppercase text-white/90">
          <span className="font-bold">SAJAL</span>
          <span className="text-white/30">|</span>
          <span className="font-mono text-[10px] sm:text-xs text-[#9DA2B3] tracking-wider">
            SOFTWARE ENGINEER &amp; ML CURATOR
          </span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] sm:text-xs text-white/60 tracking-wider hidden sm:inline">
            CREATIVE LEAD @ MERVEILLEUX
          </span>
        </div>
      </div>

    </section>
  );
}
