'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, GitBranch, Terminal, ShieldCheck } from 'lucide-react';
import { projects, Project } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface SystemsGridProps {
  onOpenProjectModal: (id: string) => void;
}

export default function SystemsGrid({ onOpenProjectModal }: SystemsGridProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1A1C22] pb-4">
        <div>
          <span className="font-mono text-xs text-[#6E7280] tracking-wider uppercase">
            ARCHIVE 01 // CODE & ML ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight mt-1">
            Engineered Systems
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8A8E9C]">
          Production applications, quantitative reasoning models, and multi-agent graph pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p: Project) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={playHover}
            className="p-6 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#3E4250] shadow-xl flex flex-col justify-between space-y-5 relative group"
          >
            <div className="space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between border-b border-[#1A1C24] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white font-bold">{p.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#13151A] text-emerald-400 border border-emerald-500/20 text-[10px]">
                    {p.metric}
                  </span>
                  <span className="text-[#636773]">{p.id}</span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div>
                <span className="text-[11px] font-mono text-[#8E92A0] uppercase block">
                  {p.tagline}
                </span>
                <p className="text-sm text-[#C5C8D4] leading-relaxed mt-1 font-sans">
                  {p.description}
                </p>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.stack.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#13151A] text-[#9A9EAB] border border-[#1E212A] text-[11px] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-[#1A1C24] text-xs font-mono">
              <button
                onClick={() => {
                  playClick();
                  onOpenProjectModal(p.id);
                }}
                className="flex items-center gap-1.5 text-white hover:text-emerald-400 font-semibold transition-colors cursor-pointer"
              >
                <span>ARCHITECTURE SPEC</span>
                <ArrowUpRight size={13} />
              </button>

              <div className="flex items-center gap-3">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7E828E] hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    GITHUB ↗
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7E828E] hover:text-white transition-colors"
                    title="Live Deployment"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}