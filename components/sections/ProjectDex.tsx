'use client';

import { motion } from 'framer-motion';
import { projects, Project } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface ProjectDexProps {
  onOpenModalProject?: (id: string) => void;
}

export default function ProjectDex({ onOpenModalProject }: ProjectDexProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="w-full space-y-12 py-4 select-text max-w-4xl mx-auto">
      
      {/* Editorial Header */}
      <div className="space-y-2 border-b border-white/[0.08] pb-6">
        <span className="text-xs font-mono text-[#9E9EA8] uppercase tracking-wider block">
          Featured Work
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
          Projects & Systems
        </h2>
        <p className="text-sm text-[#9E9EA8] max-w-xl font-sans leading-relaxed">
          Production software and research architectures built across machine learning, real-time sync, and distributed agents.
        </p>
      </div>

      {/* Clean Stacked Projects List */}
      <div className="space-y-8">
        {projects.map((project: Project, index: number) => {
          const num = `0${index + 1}`;
          
          return (
            <motion.div
              key={project.id}
              onClick={() => {
                playClick();
                if (onOpenModalProject) onOpenModalProject(project.id);
              }}
              onMouseEnter={playHover}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.04] transition-all space-y-5 shadow-sm"
            >
              {/* Header: 01 + Status */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#62636C] font-semibold">{num}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#9E9EA8]">
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-[#9E9EA8] pt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#9E9EA8] font-sans leading-relaxed">
                {project.solution || project.description}
              </p>

              {/* Metric & Tech Stack */}
              <div className="pt-4 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#9E9EA8]">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
                  <span className="font-bold text-[#F4F4F6] bg-white/[0.06] px-2.5 py-1 rounded-md border border-white/[0.08]">
                    {project.metric}
                  </span>
                  <span className="text-[#F4F4F6] group-hover:text-white flex items-center gap-1 font-sans font-medium">
                    <span>Case study</span>
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
