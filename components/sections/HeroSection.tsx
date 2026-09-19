'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { ArrowUpRight, ArrowDown, Terminal as TerminalIcon } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface HeroSectionProps {
  onNavigateWork?: () => void;
  onNavigateContact?: () => void;
  onOpenTerminal?: () => void;
}

export default function HeroSection({ onNavigateWork, onNavigateContact, onOpenTerminal }: HeroSectionProps) {
  const { playClick, playHover } = useSound();

  const techStack = [
    'PyTorch',
    'Next.js',
    'FastAPI',
    'LangGraph',
    'Supabase',
    'TypeScript',
    'XGBoost',
    'PostgreSQL',
  ];

  return (
    <div className="w-full space-y-20 sm:space-y-28 select-text">
      
      {/* ─── 1. CLEAN EDITORIAL HERO BANNER ─── */}
      <section className="pt-8 sm:pt-16 max-w-4xl space-y-8">
        
        {/* Name & Availability Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-lg sm:text-xl font-bold text-[#F4F4F6] tracking-tight">
            Sajal (Sam)
          </span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-medium text-[#9E9EA8]">
            NIT Jalandhar &apos;29
          </span>
          <span className="text-white/20">·</span>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[#9E9EA8]">
            <span className="w-2 h-2 rounded-full bg-[#30A46C] animate-pulse" />
            <span className="text-[#F4F4F6] font-medium">Available for work & internships</span>
          </div>
        </div>

        {/* Main Impact Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F4F6] tracking-tight leading-[1.08]">
          Building intelligent products at the intersection of ML, software & design.
        </h1>

        {/* Value Proposition Subtitle */}
        <p className="text-base sm:text-xl text-[#9E9EA8] max-w-2xl leading-relaxed font-sans">
          I design and engineer production machine learning systems, adaptive financial reasoning engines, and delightful real-time web applications.
        </p>

        {/* Action Buttons & Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-sans text-sm">
          <button
            onClick={() => {
              playClick();
              if (onNavigateWork) onNavigateWork();
            }}
            onMouseEnter={playHover}
            className="px-6 py-3 rounded-full bg-[#F4F4F6] hover:bg-white text-[#090A0C] font-semibold tracking-tight transition-all hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowDown size={15} />
          </button>

          <button
            onClick={() => {
              playClick();
              if (onNavigateContact) onNavigateContact();
            }}
            onMouseEnter={playHover}
            className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-white/[0.25] text-[#F4F4F6] font-medium tracking-tight transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowUpRight size={15} className="text-[#9E9EA8]" />
          </button>

          <button
            onClick={() => {
              playClick();
              if (onOpenTerminal) onOpenTerminal();
            }}
            onMouseEnter={playHover}
            className="px-4 py-3 rounded-full hover:bg-white/[0.04] text-[#9E9EA8] hover:text-[#F4F4F6] font-mono text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <TerminalIcon size={14} className="text-[#9E9EA8]" />
            <span>Terminal mode</span>
          </button>
        </div>

        {/* Glanceable Tech Stack Strip */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#9E9EA8]">
          <span className="text-[#62636C] font-semibold">CORE STACK:</span>
          {techStack.map((tech, idx) => (
            <span key={tech} className="flex items-center gap-2">
              <span className="text-[#F4F4F6]">{tech}</span>
              {idx < techStack.length - 1 && <span className="text-white/10">·</span>}
            </span>
          ))}
        </div>

      </section>

      {/* ─── 2. SELECTED PROJECTS TEASER ─── */}
      <section className="space-y-6 pt-4">
        
        <div className="flex items-center justify-between text-xs font-mono text-[#9E9EA8]">
          <span className="font-semibold uppercase tracking-widest text-[#F4F4F6]">FEATURED WORK</span>
          <button
            onClick={() => {
              playClick();
              if (onNavigateWork) onNavigateWork();
            }}
            className="hover:text-[#F4F4F6] transition-colors flex items-center gap-1 cursor-pointer font-sans text-xs font-medium"
          >
            <span>View all projects</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* 3 Prominent Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              onClick={() => {
                playClick();
                if (onNavigateWork) onNavigateWork();
              }}
              onMouseEnter={playHover}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all cursor-pointer flex flex-col justify-between group space-y-6 shadow-sm"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#62636C] font-semibold">0{idx + 1}</span>
                  <span className="text-[#9E9EA8] group-hover:text-[#F4F4F6] transition-colors">
                    {proj.tagline}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors">
                  {proj.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#9E9EA8] font-sans leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono">
                <span className="text-[#9E9EA8]">{proj.metric}</span>
                <span className="text-[#F4F4F6] group-hover:text-white transition-colors flex items-center gap-1 font-sans font-medium">
                  <span>Explore</span>
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
