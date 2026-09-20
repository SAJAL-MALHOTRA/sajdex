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

  // Curated showcase matching the reference
  const showcaseProjects = [
    {
      id: 'OBJ-001',
      number: '01',
      name: 'Pairfect',
      category: 'PRIMARY PRODUCT · 2025',
      description: 'A relationship platform designed around shared memories, rituals and meaningful interaction.',
      stack: ['Next.js', 'TypeScript', 'Supabase', 'WebRTC'],
      originalId: 'OBJ-001',
    },
    {
      id: 'OBJ-026',
      number: '02',
      name: 'Thinkfolio',
      category: 'PRODUCT STUDY · 2024',
      description: 'A focused workspace for turning scattered thinking into a living portfolio of ideas.',
      stack: ['React', 'TypeScript', 'Tailwind', 'PyTorch'],
      originalId: 'OBJ-026',
    },
    {
      id: 'OBJ-094',
      number: '03',
      name: 'CampusConnect',
      category: 'COMMUNITY PLATFORM · 2024',
      description: 'A connected campus experience built for useful conversations and real-world community.',
      stack: ['Next.js', 'Supabase', 'Tailwind', 'LangGraph'],
      originalId: 'OBJ-094',
    },
  ];

  return (
    <div className="w-full space-y-8 select-text">
      
      {/* Section 01 Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs text-[#8E8E93]">
        <div className="flex items-center gap-2">
          <span className="text-[#EF4444] font-bold">01 —</span>
          <h2 className="text-[#F5F5F7] font-semibold tracking-wide text-sm font-sans">Selected work</h2>
        </div>

        <span className="tracking-widest uppercase text-[11px] text-[#636366]">
          THREE THINGS I&apos;VE MADE
        </span>
      </div>

      {/* Stacked Project Showcase Rows */}
      <div className="divide-y divide-white/[0.08]">
        {showcaseProjects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => {
              playClick();
              if (onOpenModalProject) onOpenModalProject(project.originalId);
            }}
            onMouseEnter={playHover}
            className="py-10 sm:py-14 group cursor-pointer space-y-4 transition-colors hover:bg-white/[0.01] -mx-4 px-4 rounded-xl"
          >
            {/* Top Line: Red Number, Big Title & Category Tag */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-xs font-bold text-[#EF4444]">
                  {project.number}
                </span>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] group-hover:text-white transition-colors flex items-center gap-2">
                  <span>{project.name}</span>
                  <ArrowUpRight
                    size={22}
                    className="text-[#EF4444] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </h3>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] group-hover:text-[#F5F5F7] transition-colors pl-8 sm:pl-0">
                <span>{project.category}</span>
                <ArrowUpRight size={13} className="text-[#636366]" />
              </div>

            </div>

            {/* Description Narrative */}
            <div className="pl-8 sm:pl-10 max-w-2xl">
              <p className="text-sm sm:text-base text-[#8E8E93] group-hover:text-[#A1A1A6] font-sans leading-relaxed transition-colors">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Metadata */}
            <div className="pl-8 sm:pl-10 pt-1 font-mono text-xs text-[#636366]">
              <span>{project.stack.join(' · ')}</span>
            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
