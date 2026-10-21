'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Radio, Users, Zap } from 'lucide-react';
import { fits, FitItem } from '@/data/fits';
import { projects } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface SpreadStoryPairfectProps {
  onOpenFitModal: (fit: FitItem) => void;
  onOpenProjectModal: (id: string) => void;
}

export default function SpreadStoryPairfect({
  onOpenFitModal,
  onOpenProjectModal,
}: SpreadStoryPairfectProps) {
  const { playClick, playHover } = useSound();
  const fit = fits[1]; // Look 02: Archive Layered Uniform
  const project = projects.find((p) => p.id === 'OBJ-027') || projects[1]; // Pairfect

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-3 sm:px-8 md:px-12 select-none overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E212B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Double-Page Spread Container */}
      <div className="relative w-full max-w-6xl h-[80vh] sm:h-[82vh] max-h-[820px] rounded-lg border border-white/15 bg-[#0A0B0F] shadow-2xl p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* ── LEFT PAGE (VERSO): FASHION LOOKBOOK PHOTO & GARMENT CREDITS (5 COLS) ── */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6 overflow-y-auto custom-scrollbar">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8E92A0] border-b border-white/10 pb-2">
              <span className="text-amber-400 font-bold uppercase tracking-widest">
                LOOK N° {fit.number} // {fit.season} ARCHIVE
              </span>
              <span>DAILY UNIFORM</span>
            </div>

            {/* Clickable Editorial Photograph */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => {
                playClick();
                onOpenFitModal(fit);
              }}
              onMouseEnter={playHover}
              className="relative w-full h-[32vh] sm:h-[36vh] rounded-lg overflow-hidden border border-white/15 cursor-pointer group shadow-xl"
            >
              <img
                src={fit.image}
                alt={fit.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white font-mono text-[10px]">
                <span className="font-sans font-bold text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                  {fit.title}
                </span>
                <span className="px-2 py-0.5 rounded bg-white text-black font-semibold flex items-center gap-1">
                  <span>INSPECT</span>
                  <ArrowUpRight size={10} />
                </span>
              </div>
            </motion.div>

            {/* Garment Credits Breakdown */}
            <div className="space-y-1.5 font-mono text-[11px] pt-1">
              <span className="text-[10px] text-amber-400/90 tracking-widest uppercase block font-semibold">
                WARDROBE CREDITS & SPEC
              </span>
              <div className="text-white/90 text-xs">
                <span className="text-white/40">OUTERWEAR:</span> {fit.garments.outerwear}
              </div>
              <div className="text-white/90 text-xs">
                <span className="text-white/40">TOP:</span> {fit.garments.top}
              </div>
              <div className="text-white/90 text-xs">
                <span className="text-white/40">BOTTOM:</span> {fit.garments.bottom}
              </div>
              <div className="text-white/90 text-xs">
                <span className="text-white/40">FOOTWEAR:</span> {fit.garments.footwear}
              </div>
            </div>
          </div>

          {/* Palette Swatches */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
            <span className="text-white/40">COLOR SPECTRUM</span>
            <div className="flex items-center gap-2">
              {fit.palette.map((color, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border border-white/20 shadow-inner"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT PAGE (RECTO): TECHNICAL CASE STUDY JOURNALISM (7 COLS) ── */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between pl-0 lg:pl-4 overflow-y-auto custom-scrollbar">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-2 font-mono text-[10px]">
              <span className="text-sky-400 font-bold tracking-widest uppercase">
                FEATURE STORY // REALTIME PLATFORMS
              </span>
              <span className="text-white/50">{project.id}</span>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block">
                {project.tagline}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-white uppercase leading-tight">
                {project.name}: SYNCHRONIZED STATES
              </h1>
            </div>

            {/* Performance Metric Strip */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-white/[0.03] border border-white/10 rounded font-mono text-center">
              <div>
                <span className="text-[10px] text-white/50 block">CONCURRENT PEERS</span>
                <span className="text-sm sm:text-base font-bold text-sky-400">{project.metric}</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 block">STATE SYNC</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">&lt;50ms</span>
              </div>
              <div>
                <span className="text-[10px] text-white/50 block">WEBRTC AUDIO</span>
                <span className="text-sm sm:text-base font-bold text-white">Opus High-Fi</span>
              </div>
            </div>

            {/* Investigative Article Body */}
            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#C3C6D4] leading-relaxed">
              <p className="editorial-dropcap">
                Engineering in isolation limits collective velocity. Pairfect reimagines real-time technical pairing by harmonizing collaborative code synthesis with sub-50 millisecond broadcast sync and built-in low-latency voice telemetry.
              </p>
              <p>
                Powered by Supabase Realtime channels and WebRTC mesh topologies, engineers can debug, annotate, and brainstorm concurrently without state drift or synchronization conflicts.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-[#A6ABB9]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between font-mono text-xs">
            <span className="text-[10px] text-white/40 hidden sm:inline">
              ENGINEERED & DEPLOYED BY SAJAL
            </span>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="px-3.5 py-2 rounded-full border border-white/20 hover:border-white/50 text-white font-medium text-[11px] transition-colors flex items-center gap-1"
              >
                <span>VIEW REPO</span>
                <ArrowUpRight size={12} />
              </a>

              <button
                onClick={() => {
                  playClick();
                  onOpenProjectModal(project.id);
                }}
                onMouseEnter={playHover}
                className="px-4 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider transition-all cursor-pointer shadow-md flex items-center gap-1"
              >
                <span>SPEC SHEET</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
