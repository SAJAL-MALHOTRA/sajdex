'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Shirt, ExternalLink, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface VogueCoverProps {
  onOpenIssue: () => void;
  onOpenTerminal?: () => void;
}

export default function VogueCover({ onOpenIssue, onOpenTerminal }: VogueCoverProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-3 sm:px-6 md:px-10 select-none overflow-hidden bg-[#070709]">
      {/* Background Ambience & Editorial Paper Grain */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A1D26_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* The Magazine Cover Wrapper (Frame of the printed issue) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl h-[82vh] max-h-[820px] rounded-sm border-2 border-white/20 bg-[#0A0B10] shadow-[0_0_50px_rgba(0,0,0,0.9)] p-3.5 sm:p-6 flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle dark film grain overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.03] pointer-events-none" />

        {/* ── 1. NEWSPAPER & VOGUE TOP HEADER (From Image 1 & 2) ── */}
        <div className="relative z-20 text-center">
          
          {/* Top Double Rule Border (Image 1 & 2) */}
          <div className="border-t-2 border-b border-white/40 pt-1 pb-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-widest text-white uppercase select-none">
              BREAKING NEWS
            </h2>
          </div>

          {/* Subheader Strip: FASHION * @MERVEILLEUX_NITJ * MODELLING (Image 1) */}
          <div className="py-1 border-b-2 border-white/40 flex items-center justify-center gap-3 sm:gap-6 font-mono text-[10px] sm:text-xs text-[#9DA2B3] tracking-widest uppercase">
            <span>FASHION</span>
            <span className="text-white/40">✱</span>
            <span className="text-white font-semibold tracking-wider">@MERVEILLEUX_NITJ</span>
            <span className="text-white/40">✱</span>
            <span>SOFTWARE & ML</span>
            <span className="text-white/40 hidden sm:inline">✱</span>
            <span className="hidden sm:inline">NIT JALANDHAR</span>
          </div>

          {/* Massive Magazine Masthead with Hand-Drawn Blue Underline (Image 1 & 3) */}
          <div className="pt-2 sm:pt-3 pb-1 relative">
            <div className="flex items-center justify-between font-mono text-[9px] sm:text-[11px] text-[#7E8394] uppercase tracking-wider mb-0.5">
              <span>{profile.issue}</span>
              <span className="text-amber-400 font-semibold tracking-widest">
                MERVEILLEUX LEAD DOSSIER
              </span>
              <span>{profile.issn}</span>
            </div>

            {/* Giant Title: VOGUE × MERVEILLEUX */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-white uppercase leading-[0.85] select-none">
              MERVEILLEUX
            </h1>

            {/* Sub-headline: TEAM LEADS 2K25-26 */}
            <div className="font-mono font-bold tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-xl md:text-2xl text-white/90 uppercase mt-1">
              TEAM LEADS 2K25-26 // SAJAL
            </div>

            {/* Hand-Drawn Blue Underline Scribble (Direct from Image 1) */}
            <svg
              viewBox="0 0 400 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 sm:w-72 md:w-96 h-4 sm:h-5 mx-auto -mt-1 sm:-mt-1 text-blue-500"
            >
              <path
                d="M6 18C70 8 200 4 394 12M18 20C110 11 260 8 360 16"
                stroke="#2563EB"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* ── 2. MAGAZINE CORE SPREAD: SATIRICAL DOSSIER + FRAMED PORTRAIT (Image 2 & 3) ── */}
        <div className="relative z-20 flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2 overflow-hidden border-t border-b border-white/20 my-1">
          
          {/* LEFT: THE INVESTIGATION / CHARGES (From Image 2 & 3 - 6 Cols) */}
          <div className="md:col-span-6 h-full flex flex-col justify-between py-1 pr-0 md:pr-4 overflow-y-auto custom-scrollbar text-left font-sans">
            
            <div className="space-y-3">
              {/* Upper Headline (Image 2 style) */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-amber-400 font-bold uppercase tracking-widest block">
                  DEPARTMENT OF INFORMATION TECHNOLOGY
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-white uppercase leading-snug tracking-tight">
                  SAJAL UNDER SCRUTINY—
                </h3>
                <h4 className="text-xs sm:text-sm font-serif italic text-[#C5C8D4] leading-snug">
                  Charged with Causing Mass Outbreaks of Perfectly Deterministic ML Models and Lethal Silhouettes
                </h4>
              </div>

              {/* Single Thin Rule (Image 2) */}
              <div className="border-b border-white/20 w-full" />

              {/* Suspect Profile & Allegations (Directly matching Image 2 satirical copy) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-serif font-black text-sm text-white tracking-wider">
                  <span>SAJAL</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[10px] font-mono text-amber-400 font-normal uppercase">
                    CREATIVE & ML LEAD
                  </span>
                </div>

                <p className="text-xs text-[#9DA2B3] font-sans leading-relaxed">
                  Sajal suspected of bending PyTorch inference latency and raw denim drape. Sources reveal their systems keep servers humming at sub-10ms and campus runways stunned. Teammates claim they transform complex vector graphs into seamless digital experiences.
                </p>

                <p className="text-xs font-serif italic text-white/90 bg-white/[0.04] p-2.5 rounded border-l-2 border-blue-500">
                  &ldquo;The charges? Too smooth, too iconic, too deterministic. Consider them repeat offenders of brilliance.&rdquo;
                </p>
              </div>

              {/* Dotted Divider (Image 2 style) */}
              <div className="text-[9px] font-mono tracking-[0.3em] text-white/30 text-center select-none">
                :::::::::::::::::::::::::::::::::::::::::::::::::
              </div>

              {/* Featured Case Studies Pill Strip */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400">
                  OBJ-026: ThinkFolio (ML Quant)
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-sky-400">
                  OBJ-027: Pairfect (Realtime WebRTC)
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: FRAMED HERO EDITORIAL PORTRAIT (Matching Image 1 & 3 - 6 Cols) */}
          <div className="md:col-span-6 h-full flex items-center justify-center relative">
            <div className="relative w-full h-full max-h-[38vh] sm:max-h-[44vh] rounded-sm overflow-hidden border-2 border-white/30 group shadow-2xl bg-black">
              {/* Editorial Fashion Photography */}
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt="Sajal Merveilleux Lead"
                className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

              {/* Top Frame Stamp (Image 1 style) */}
              <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded text-[9px] font-mono text-white tracking-widest uppercase">
                EXHIBIT A // LOOK N° 01
              </div>

              {/* Bottom Inscription */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 bg-black/80 backdrop-blur-md border border-white/15 rounded text-left">
                <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider block">
                  EVIDENCE LOG: NIT JALANDHAR
                </span>
                <div className="text-xs font-serif italic text-white">
                  &ldquo;Guilty of too much style, too much talent, and zero remorse.&rdquo;
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM BYLINE & FOOTER STRIP (From Image 1 & 3) ── */}
        <div className="relative z-20 space-y-1.5 pt-1">
          
          {/* Double Hairline Byline Strip (Direct from Image 3: "YESHA JHAVERI | PSYCHOTHERAPIST") */}
          <div className="border-t border-b border-white/30 py-1.5 flex items-center justify-between font-serif text-xs sm:text-sm tracking-widest uppercase text-white/90">
            <span className="font-bold">SAJAL</span>
            <span className="text-white/40">|</span>
            <span className="font-mono text-[10px] sm:text-xs text-[#A6ABB9]">
              LEAD SOFTWARE & ML ENGINEER
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="font-mono text-[10px] sm:text-xs text-amber-400 hidden sm:inline">
              MERVEILLEUX CREATIVE LEAD
            </span>
          </div>

          {/* Circle Asterisk Instagram Strip (Direct from Image 1: "⊛ VISIT OUR INSTAGRAM PAGE @MERVEILLEUX_NITJ ⊛") */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-[#8E92A0]">
            <div className="flex items-center gap-1.5 text-white/80 tracking-wider">
              <span>⊛</span>
              <span>VISIT INSTAGRAM PAGE @MERVEILLEUX_NITJ</span>
              <span>⊛</span>
            </div>

            {/* Read Investigation Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                playClick();
                onOpenIssue();
              }}
              onMouseEnter={playHover}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider transition-all cursor-pointer shadow-lg active:scale-95"
            >
              <span>OPEN FULL INVESTIGATION</span>
              <ArrowRight size={13} />
            </motion.button>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
