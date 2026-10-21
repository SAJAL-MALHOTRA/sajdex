'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Quote, Sparkles, Terminal, ShieldAlert } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface SpreadEditorsNoteProps {
  onSelectSpread: (idx: number) => void;
  onOpenTerminal?: () => void;
}

export default function SpreadEditorsNote({
  onSelectSpread,
  onOpenTerminal,
}: SpreadEditorsNoteProps) {
  const { playClick, playHover } = useSound();

  const caseFiles = [
    { page: '00', title: 'MERVEILLEUX COVER DOSSIER', charge: 'Breaking News & Team Leads 2K25-26' },
    { page: '01', title: 'CASE INDICTMENT & MANIFESTO', charge: 'Analytical Rigor × Wardrobe Architecture' },
    { page: '02', title: 'CASE FILE OBJ-026: THINKFOLIO', charge: 'Quant Alpha Optimization via PyTorch' },
    { page: '03', title: 'CASE FILE OBJ-027: PAIRFECT', charge: 'Synchronized WebRTC Peer Collaboration' },
    { page: '04', title: 'CASE FILE OBJ-028: SCHOLARAI', charge: 'Autonomous Multi-Agent Research Graphs' },
    { page: '05', title: 'EVIDENCE LOG: WARDROBE ARCHIVE', charge: '4 Curated Silhouettes & Sneaker Rotation' },
    { page: '06', title: 'FINAL DISPATCH & COLOPHON', charge: 'Official Transmission Channel & Resume' },
  ];

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-3 sm:px-6 md:px-10 select-none overflow-hidden bg-[#070709]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A1D26_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />

      {/* Double-Page Spread Container (Matching Image 2 Newspaper Spread) */}
      <div className="relative w-full max-w-6xl h-[82vh] max-h-[820px] rounded-sm border-2 border-white/20 bg-[#0A0B10] shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
        
        {/* ── TOP ORNATE NEWSPAPER HEADER (Directly from Image 2) ── */}
        <div className="border-b-2 border-white/30 pb-2">
          
          {/* Masthead line: Merveilleux_nitj — flourish — NIT Jalandhar */}
          <div className="flex items-center justify-between font-serif text-xs sm:text-sm text-[#A6ABB9] pb-1">
            <span className="font-semibold text-white">Merveilleux_nitj</span>
            <div className="flex items-center gap-2 text-white/50 text-[11px] font-mono">
              <span>—</span>
              <span className="tracking-widest">✦ 𝕲 𝕬 𝕽 𝕷 𝕬 𝕹 𝕯 ✦</span>
              <span>—</span>
            </div>
            <span className="font-semibold text-white">NIT Jalandhar</span>
          </div>

          {/* Double Rule around Breaking News (Image 2) */}
          <div className="border-t-2 border-b-2 border-white/40 py-1 my-1 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-widest text-white uppercase">
              Breaking News
            </h1>
          </div>

          {/* Subheading: Under Scrutiny (Image 2) */}
          <div className="text-center pt-1">
            <h2 className="font-serif font-bold text-xs sm:text-sm md:text-base text-white uppercase tracking-wider">
              CREATIVE & IT LEAD UNDER SCRUTINY—
            </h2>
            <p className="font-serif italic text-xs text-[#C5C8D4]">
              Charged with Causing Mass Outbreaks of Perfectly Synchronized Code & Wearable Architecture
            </p>
          </div>

        </div>

        {/* ── CORE SPREAD: DOCKET OF CHARGES (LEFT) + LEAD DOSSIER (RIGHT) ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 py-2.5 overflow-hidden my-1">
          
          {/* LEFT: DOCKET OF CASE FILES (TOC) (5 COLS) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/20 pb-3 lg:pb-0 lg:pr-5 overflow-y-auto custom-scrollbar">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-white/15 pb-1 font-mono text-[10px] text-amber-400">
                <span className="font-bold tracking-widest uppercase">
                  DOCKET OF CHARGES // SPREAD DIRECTORY
                </span>
                <span>VOL. 26</span>
              </div>

              <div className="space-y-1.5 font-mono">
                {caseFiles.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      playClick();
                      onSelectSpread(idx);
                    }}
                    onMouseEnter={playHover}
                    className="group p-2 rounded bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all cursor-pointer flex items-baseline justify-between"
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300">
                        {item.page}
                      </span>
                      <div>
                        <div className="text-[11px] font-semibold text-white group-hover:text-amber-200">
                          {item.title}
                        </div>
                        <div className="text-[9px] text-[#7E8394] truncate max-w-[210px]">
                          {item.charge}
                        </div>
                      </div>
                    </div>

                    <ArrowRight
                      size={11}
                      className="text-white/30 group-hover:text-white transition-transform group-hover:translate-x-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Society Badge Box */}
            <div className="p-2.5 bg-black/60 border border-white/15 rounded font-mono text-[9px] text-[#8E92A0] space-y-0.5 mt-2">
              <div className="text-white font-semibold uppercase">
                {profile.society}
              </div>
              <div>Lead Suspect: <span className="text-white">{profile.fullName}</span> (IT Dept)</div>
              <div>Verdict: <span className="text-amber-400">Guilty of Too Much Style & Talent</span></div>
            </div>

          </div>

          {/* RIGHT: LEAD DOSSIER & MANIFESTO (Matching Tanveer's Box in Image 2 - 7 COLS) */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between pl-0 lg:pl-3 overflow-y-auto custom-scrollbar">
            
            <div className="space-y-3">
              
              {/* Ornate Lead Frame (Directly matching Image 2 bottom box) */}
              <div className="rounded border-2 border-white/25 bg-[#0F1017] p-3 shadow-lg relative">
                
                {/* Filigree Diamond Header: • • • Lead • • • */}
                <div className="flex items-center justify-center gap-3 text-white/60 font-serif text-[11px] uppercase tracking-widest pb-2 border-b border-white/10 mb-2.5">
                  <span>◆ ─── •</span>
                  <span className="text-amber-400 font-bold">LEAD CREATIVE & ENGINEER</span>
                  <span>• ─── ◆</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  
                  {/* Photo with Crisp Border */}
                  <div className="sm:col-span-4 h-28 sm:h-32 rounded overflow-hidden border border-white/20 bg-black">
                    <img
                      src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
                      alt="Sajal Lead Profile"
                      className="w-full h-full object-cover object-center filter contrast-110 brightness-90"
                    />
                  </div>

                  {/* Profile Description */}
                  <div className="sm:col-span-8 space-y-1.5 text-left">
                    <h3 className="font-serif font-black text-xl text-white tracking-wider uppercase">
                      SAJAL
                    </h3>
                    <p className="font-serif italic text-xs text-[#C5C8D4] leading-relaxed">
                      Sajal has been keeping the architecture steady with mathematical precision and uncompromising aesthetic discipline. Known for engineering high-frequency inference systems behind the scenes, their routines turn chaotic data pipelines into fluid digital poetry.
                    </p>
                    <div className="font-mono text-[10px] text-amber-400">
                      Alleged Offense: Making difficult engineering look effortless.
                    </div>
                  </div>

                </div>

              </div>

              {/* Manifesto Essay with Editorial Drop-Cap */}
              <div className="space-y-2 font-sans text-xs text-[#9DA2B3] leading-relaxed pt-1">
                <p className="editorial-dropcap">
                  We reject the false dichotomy between analytical rigor and visual aesthetic. Code is structural syntax; garment is wearable architecture. Both demand immaculate proportion, deliberate restraint, and deterministic execution.
                </p>
                <p>
                  As an Information Technology undergraduate at NIT Jalandhar and Creative Lead for Merveilleux, I split my focus between deep learning architectures and curated silhouettes. This issue presents both without compromise.
                </p>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-2 border-t border-white/20 flex items-center justify-between font-mono text-xs">
              <span className="text-[10px] text-white/50">
                CASE PROCEEDING TO SPREAD 02
              </span>

              <button
                onClick={() => {
                  playClick();
                  onSelectSpread(2);
                }}
                onMouseEnter={playHover}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider transition-all cursor-pointer shadow-md"
              >
                <span>OPEN CASE 01: THINKFOLIO</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

        </div>

        {/* ── BOTTOM DOUBLE RULE FOOTER ── */}
        <div className="border-t-2 border-b border-white/30 py-1 flex items-center justify-between font-mono text-[9px] text-[#7E8394] uppercase tracking-wider">
          <span>MERVEILLEUX × NIT JALANDHAR</span>
          <span className="text-white/40">✦ ✦ ✦</span>
          <span>OFFICIAL INVESTIGATION RECORD // 2K25-26</span>
        </div>

      </div>
    </div>
  );
}
