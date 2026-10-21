'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Shirt } from 'lucide-react';
import { Project } from '@/data/projects';
import { FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface VogueFeatureSpreadProps {
  issueNumber: string;
  category: string;
  project: Project;
  fit: FitItem;
  reversed?: boolean;
  onOpenProjectModal: (id: string) => void;
  onOpenFitModal: (fit: FitItem) => void;
}

export default function VogueFeatureSpread({
  issueNumber,
  category,
  project,
  fit,
  reversed = false,
  onOpenProjectModal,
  onOpenFitModal,
}: VogueFeatureSpreadProps) {
  const { playClick, playHover } = useSound();

  return (
    <article className="w-full py-16 sm:py-24 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Top Story Header */}
        <div className="flex items-center justify-between font-mono text-[11px] text-[#717585] uppercase tracking-widest pb-4 border-b border-white/10 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">{issueNumber}</span>
            <span>•</span>
            <span>{category}</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <span>{project.id}</span>
            <span>×</span>
            <span>LOOK #{fit.number}</span>
          </div>
        </div>

        {/* Two-Column Editorial Spread */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
            reversed ? 'lg:flex-row-reverse' : ''
          }`}
        >
          
          {/* TEXT CONTENT COLUMN (7 COLS) */}
          <div className={`lg:col-span-7 space-y-6 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#8E92A0] uppercase tracking-widest block">
                {project.tagline}
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                {project.name}
              </h3>
              
              {/* Hairline Divider */}
              <div className="w-full border-t border-white/15 pt-3">
                <p className="text-sm sm:text-base font-serif italic text-[#C5C8D4] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Performance Metric Callout Grid */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-sm bg-[#0B0C10] border border-white/10 font-mono text-center">
              <div>
                <span className="text-[10px] text-white/40 block uppercase">PRIMARY METRIC</span>
                <span className="text-sm sm:text-base font-bold text-white">{project.metric}</span>
              </div>
              <div>
                <span className="text-[10px] text-white/40 block uppercase">SYSTEM STATUS</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400">{project.status}</span>
              </div>
              <div>
                <span className="text-[10px] text-white/40 block uppercase">LATENCY</span>
                <span className="text-sm sm:text-base font-bold text-[#A6ABB9]">&lt;20ms</span>
              </div>
            </div>

            {/* Problem & Solution Case Study */}
            <div className="space-y-3 text-xs sm:text-sm font-sans text-[#8E92A0] leading-relaxed">
              <p>
                <strong className="text-white font-serif font-bold">The Problem: </strong>
                {project.problem}
              </p>
              <p>
                <strong className="text-white font-serif font-bold">The Architectural Solution: </strong>
                {project.solution}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
              {project.stack.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-3 flex items-center gap-4 font-mono text-xs">
              <button
                onClick={() => {
                  playClick();
                  onOpenProjectModal(project.id);
                }}
                onMouseEnter={playHover}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold tracking-wider transition-all cursor-pointer shadow-md"
              >
                <span>SPECIFICATION SHEET</span>
                <ArrowUpRight size={13} />
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/20 hover:border-white/50 text-white font-medium tracking-wider transition-all"
              >
                <span>GITHUB REPO</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </div>

          {/* EDITORIAL PHOTO COLUMN (5 COLS) */}
          <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                playClick();
                onOpenFitModal(fit);
              }}
              onMouseEnter={playHover}
              className="relative w-full h-[400px] sm:h-[480px] rounded-sm overflow-hidden border border-white/20 group cursor-pointer shadow-2xl bg-[#090A0D]"
            >
              <img
                src={fit.image}
                alt={fit.title}
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white/80 border border-white/15 uppercase">
                {fit.season} ARCHIVE // LOOK #{fit.number}
              </div>

              {/* Bottom Inscription */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/75 backdrop-blur-md rounded border border-white/15 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#8E92A0] uppercase block">
                    PAIRED SILHOUETTE
                  </span>
                  <div className="font-serif italic font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                    {fit.title}
                  </div>
                  <div className="text-[10px] font-mono text-white/60 truncate max-w-[200px]">
                    {fit.silhouette}
                  </div>
                </div>

                <span className="px-2 py-1 rounded bg-white text-black font-mono text-[10px] font-semibold flex items-center gap-1 shadow">
                  <span>INSPECT</span>
                  <ArrowUpRight size={10} />
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </article>
  );
}
