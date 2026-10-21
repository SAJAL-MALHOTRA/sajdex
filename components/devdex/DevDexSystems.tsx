'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, GitBranch, Terminal } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface DevDexSystemsProps {
  onOpenProjectModal: (id: string) => void;
}

export default function DevDexSystems({ onOpenProjectModal }: DevDexSystemsProps) {
  const { playClick, playHover } = useSound();

  // All 4 engineering production projects
  const systemProjects: Project[] = [
    projects[0], // Cybernauts Arena
    projects[1], // Pairfect
    {
      id: 'DX-003',
      name: 'ThinkFolio',
      status: 'ACTIVE',
      metric: 'R² 0.927 Alpha',
      tagline: 'QUANT ML REASONING',
      description: 'Adaptive quantitative financial portfolio optimization engine with Bayesian Knowledge Tracing & PyTorch.',
      stack: ['PyTorch', 'XGBoost', 'FastAPI', 'Next.js 15'],
      githubUrl: 'https://github.com/sajal/thinkfolio',
      demo: 'https://thinkfolio.ai',
      problem: 'Cold-start financial portfolio optimization lacks adaptive knowledge tracing under strict latency constraints.',
      solution: 'Engineered Bayesian Knowledge Tracing with PyTorch & XGBoost scoring delivering R² 0.927 backtest accuracy.',
    },
    projects[2], // AgentVerse
  ];

  return (
    <section id="systems" className="w-full py-16 sm:py-24 border-b border-[#1A1D27] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Hardware Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1A1D27]">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#636877] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>DEVDEX MODULE 02 // ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Engineered Systems
            </h2>
            <p className="font-mono text-xs text-[#8E92A2] max-w-xl">
              High-frequency real-time WebSocket meshes, zero-knowledge encryption, and autonomous multi-agent graphs.
            </p>
          </div>

          <div className="font-mono text-xs text-[#555B6C]">
            <span>4 PRODUCTION BUILDS // 2026</span>
          </div>
        </div>

        {/* 4 Systems Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systemProjects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={playHover}
              className="relative p-6 sm:p-7 rounded-[28px] bg-[#0D0F14] border border-[#202430] hover:border-[#383F54] shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              {/* Viewfinder Bracket Corners: ┌ ┐ └ ┘ */}
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />

              <div className="space-y-4 text-left">
                {/* Status Bar */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#1A1D27] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-bold tracking-wider">{proj.id}</span>
                    <span className="text-[#555B6C]">•</span>
                    <span className="text-[#8E92A2] text-[11px] uppercase tracking-wider">{proj.tagline}</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded bg-[#131620] border border-cyan-500/30 text-cyan-400 text-[10px] font-bold tracking-wider">
                    {proj.metric}
                  </span>
                </div>

                {/* Project Title & Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight group-hover:text-cyan-300 transition-colors">
                    {proj.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9DA2B4] font-sans leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Problem & Architectural Solution Box */}
                <div className="p-3.5 rounded-xl bg-[#08090D] border border-[#1A1D26] space-y-2 font-mono text-xs">
                  <div>
                    <span className="text-[#636877] text-[10px] uppercase block">THE PROBLEM:</span>
                    <p className="text-[#A6ABB9] text-[11px] leading-relaxed">{proj.problem}</p>
                  </div>
                  <div>
                    <span className="text-cyan-400 text-[10px] uppercase block">ARCHITECTURAL SOLUTION:</span>
                    <p className="text-white text-[11px] leading-relaxed">{proj.solution}</p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                  {proj.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#12151D] border border-white/5 text-[#8E92A2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-2 border-t border-[#1A1D27] flex items-center justify-between font-mono text-xs">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="flex items-center gap-1 text-[#8E92A2] hover:text-white transition-colors"
                >
                  <span>GITHUB REPO</span>
                  <ArrowUpRight size={11} />
                </a>

                <button
                  onClick={() => {
                    playClick();
                    onOpenProjectModal(proj.id);
                  }}
                  onMouseEnter={playHover}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E6E8EE] hover:bg-white text-[#0B0D12] font-bold text-xs tracking-wider uppercase transition-all shadow cursor-pointer active:scale-95"
                >
                  <span>SPEC SHEET</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
