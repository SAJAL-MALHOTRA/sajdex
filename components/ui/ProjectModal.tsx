'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';
import { X, ExternalLink, Code2, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const liveUrl = project.liveUrl || project.demo;
  const githubUrl = project.githubUrl || project.github;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-md overflow-y-auto font-sans"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-[640px] bg-white dark:bg-[#0D0F12] border border-[#E2E4E8] dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 max-h-[85vh] overflow-y-auto text-[#09090B] dark:text-[#EDEDED]"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#E2E4E8] dark:border-white/10 pb-4 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5 font-mono">
                <span className="text-xs font-bold text-black dark:text-[#D4A373]">
                  #{project.id}
                </span>
                <span className="text-[10px] bg-[#F4F4F6] dark:bg-[#111317] border border-[#E2E4E8] dark:border-white/10 text-emerald-600 dark:text-[#30D158] font-bold px-2.5 py-0.5 rounded-full">
                  ● {project.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#09090B] dark:text-[#F8FAFC] uppercase tracking-tight">
                {project.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F4F4F6] hover:bg-[#EAECEF] border border-[#D1D5DB] text-[#52525B] hover:text-[#09090B] dark:bg-[#111317] dark:border-white/10 dark:hover:border-white/20 dark:text-[#94A3B8] dark:hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Type Badges */}
          {project.types && project.types.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center font-mono">
              {project.types.map((t) => (
                <span key={t} className="text-xs text-[#52525B] dark:text-[#94A3B8] bg-[#F4F4F6] dark:bg-[#111317] border border-[#E2E4E8] dark:border-white/10 px-3 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Tagline */}
          <p className="text-sm italic text-[#52525B] dark:text-[#94A3B8]">
            &quot;{project.tagline}&quot;
          </p>

          {/* Problem & Solution */}
          <div className="space-y-4 pt-2 border-t border-[#E2E4E8] dark:border-white/10">
            {project.problem && (
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] dark:text-[#D4A373] font-bold uppercase block">
                  PROBLEM STATEMENT:
                </span>
                <p className="text-xs text-[#3F3F46] dark:text-[#F8FAFC] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#71717A] dark:text-[#D4A373] font-bold uppercase block">
                  TECHNICAL SOLUTION:
                </span>
                <p className="text-xs text-[#3F3F46] dark:text-[#F8FAFC] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Key Capabilities */}
          {project.abilities && project.abilities.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[#E2E4E8] dark:border-white/10">
              <span className="font-mono text-[10px] text-[#71717A] dark:text-[#94A3B8] uppercase block">
                KEY CAPABILITIES & ARCHITECTURE:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.abilities.map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F4F6] dark:bg-[#111317] border border-[#E2E4E8] dark:border-white/10 text-xs text-[#09090B] dark:text-[#F8FAFC] rounded-lg">
                    <ShieldCheck size={12} className="text-black dark:text-[#D4A373]" />
                    <span>{a}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stack Components */}
          <div className="space-y-2 pt-2 border-t border-[#E2E4E8] dark:border-white/10">
            <span className="font-mono text-[10px] text-[#71717A] dark:text-[#94A3B8] uppercase block">
              TECHNOLOGY STACK:
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono">
              {project.stack.map((s) => (
                <span key={s} className="px-2.5 py-1 bg-[#F4F4F6] dark:bg-[#111317] border border-[#E2E4E8] dark:border-white/10 text-[11px] text-[#52525B] dark:text-[#94A3B8] rounded">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E2E4E8] dark:border-white/10 font-mono">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-black hover:bg-neutral-800 text-white dark:bg-[#F8FAFC] dark:hover:bg-white dark:text-[#08090B] font-bold text-xs rounded-xl tracking-wide transition-colors"
              >
                <ExternalLink size={14} />
                <span>LIVE DEMO ↗</span>
              </a>
            ) : null}

            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F4F4F6] hover:bg-[#EAECEF] border border-[#D1D5DB] text-[#09090B] dark:bg-[#111317] dark:border-white/10 dark:hover:border-white/20 dark:text-[#F8FAFC] font-semibold text-xs rounded-xl tracking-wide transition-colors"
              >
                <Code2 size={14} />
                <span>SOURCE REPO ↗</span>
              </a>
            ) : null}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
