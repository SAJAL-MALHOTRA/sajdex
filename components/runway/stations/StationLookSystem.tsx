'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Shirt, ExternalLink } from 'lucide-react';
import { FitItem } from '@/data/fits';
import { Project } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface StationLookSystemProps {
  stationNumber: string;
  stationName: string;
  fit: FitItem;
  project: Project;
  onOpenFitModal: (fit: FitItem) => void;
  onOpenProjectModal: (id: string) => void;
}

export default function StationLookSystem({
  stationNumber,
  stationName,
  fit,
  project,
  onOpenFitModal,
  onOpenProjectModal,
}: StationLookSystemProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-4 sm:px-10 md:px-16 select-none overflow-hidden border-r border-[#1B1D24]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full h-[76vh] flex flex-col justify-between py-2 relative z-10">
        
        {/* Station Top Bar */}
        <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1A1C24] pb-2.5">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold tracking-widest uppercase">
              STATION {stationNumber} // {stationName}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#555864]">
            <span className="text-amber-400">LOOK #{fit.number}</span>
            <span>×</span>
            <span className="text-emerald-400">{project.id}</span>
          </div>
        </div>

        {/* Dual Split Core: Lookbook Left × System Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 py-4 overflow-hidden">
          
          {/* ── LEFT: LOOKBOOK PHOTO COLUMN (5 COLS) ── */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              playClick();
              onOpenFitModal(fit);
            }}
            onMouseEnter={playHover}
            className="lg:col-span-5 h-full max-h-[58vh] rounded-2xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#424656] shadow-2xl relative overflow-hidden group cursor-pointer flex flex-col justify-between"
          >
            {/* Full-Bleed Editorial Image */}
            <img
              src={fit.image}
              alt={fit.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="relative z-10 p-3.5 flex items-center justify-between font-mono text-[10px] text-white">
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/15">
                {fit.season} ARCHIVE
              </span>
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/15">
                #{fit.number}
              </span>
            </div>

            {/* Bottom Fit Information */}
            <div className="relative z-10 p-4 space-y-2">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                    SILHOUETTE SPEC
                  </span>
                  <h3 className="font-sans font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                    {fit.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#A1A4B0] truncate max-w-[240px]">
                    {fit.silhouette}
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-white text-black font-mono text-[11px] font-semibold flex items-center gap-1 shadow-lg group-hover:bg-amber-300 transition-colors">
                  <span>INSPECT</span>
                  <ArrowUpRight size={12} />
                </span>
              </div>

              {/* Palette Hex dots */}
              <div className="flex items-center gap-1.5 pt-1 border-t border-white/10">
                {fit.palette.map((c, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full border border-black/40"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span className="text-[10px] font-mono text-[#8E92A0] ml-2">
                  👟 {fit.garments.footwear.split('(')[0]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: ENGINEERED SYSTEM PEDESTAL (7 COLS) ── */}
          <div className="lg:col-span-7 h-full max-h-[58vh] rounded-2xl bg-[#0D0E12] border border-[#1E2028] p-6 sm:p-7 shadow-2xl flex flex-col justify-between space-y-4">
            
            {/* Project Header & Metric */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs border-b border-[#1A1C24] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-bold">{project.name}</span>
                  <span className="text-[#555864] hidden sm:inline">[{project.tagline}]</span>
                </div>

                <span className="px-2.5 py-1 rounded bg-[#13151A] text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
                  {project.metric}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight pt-1">
                {project.description}
              </h4>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#12141A] border border-[#1C1F28] space-y-1">
                <span className="text-[#6E7280] text-[10px] uppercase block">ENGINEERING CHALLENGE:</span>
                <p className="text-[#C5C8D4] line-clamp-3">
                  {project.problem || "High-concurrency realtime state synchronization under microsecond latencies."}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#12141A] border border-[#1C1F28] space-y-1">
                <span className="text-[#6E7280] text-[10px] uppercase block">SYSTEM ARCHITECTURE:</span>
                <p className="text-[#C5C8D4] line-clamp-3">
                  {project.solution || "Implemented distributed edge sockets with automated Bayesian trace scoring."}
                </p>
              </div>
            </div>

            {/* Stack Pills & Actions */}
            <div className="space-y-3 pt-2 border-t border-[#1A1C24]">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded bg-[#13151A] text-[#9A9EAB] border border-[#1E212A] text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <button
                  onClick={() => {
                    playClick();
                    onOpenProjectModal(project.id);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white hover:bg-emerald-400 text-black font-semibold transition-colors cursor-pointer"
                >
                  <span>SPEC SHEET</span>
                  <ArrowUpRight size={13} />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E92A0] hover:text-white transition-colors"
                    >
                      GITHUB ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8E92A0] hover:text-white transition-colors"
                    >
                      LIVE DEPLOY ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Station Footer Metric Note */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#555864] pt-2 border-t border-[#1A1C24]">
          <span>PARALLEL ARCHIVE SPECIFICATION</span>
          <span>STATION {stationNumber} / 07</span>
        </div>

      </div>
    </div>
  );
}