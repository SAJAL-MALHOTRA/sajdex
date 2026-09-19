'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { X, FileText, Globe } from 'lucide-react';

interface RecruiterViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RecruiterViewModal({ isOpen, onClose }: RecruiterViewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto font-inter"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-[680px] bg-[#0B0C0F] border border-[#1a1a1f] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto select-text"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#1a1a1f] pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#FF1A1A]" />
                <span className="font-mono text-xs text-[#FF1A1A] uppercase font-semibold">
                  HIGH-DENSITY RECRUITER VIEW
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F5F5F0] uppercase tracking-tight">
                SAM (SAJAL)
              </h2>
              <p className="text-xs font-semibold text-[#888888] uppercase mt-0.5">
                ML ENGINEERING · FULL STACK · AI SYSTEMS · NIT JALANDHAR
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-[#888888] hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Overview */}
          <div className="p-4 rounded-2xl bg-[#111216] border border-[#1a1a1f] text-xs text-[#E8E6E3] leading-relaxed">
            2nd-year IT undergraduate at NIT Jalandhar building machine learning systems and production software. Seeking ML & Software Engineering internships.
          </div>

          {/* Selected Work Summary */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider block font-semibold">
              SELECTED WORK & RESULTS
            </span>

            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-[#111216] border border-[#1a1a1f] space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#F5F5F0] uppercase">{p.name}</h3>
                  <span className="font-mono text-[10px] text-emerald-400 bg-[#081a14] px-2 py-0.5 rounded">
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-[#888888]">{p.tagline}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] font-mono text-[#888888] bg-[#0B0C0F] px-2 py-0.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2 pt-2 border-t border-[#1a1a1f]">
            <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider block font-semibold">
              TECHNICAL SKILLS
            </span>
            <div className="text-xs font-mono text-[#E8E6E3] leading-relaxed">
              Python · C++ · PyTorch · Next.js 15 · TypeScript · FastAPI · Supabase · LangGraph · ChromaDB · Tailwind CSS
            </div>
          </div>

          {/* Education & Status */}
          <div className="space-y-2 pt-2 border-t border-[#1a1a1f]">
            <span className="font-mono text-[10px] text-[#888888] uppercase tracking-wider block font-semibold">
              EDUCATION & AVAILABILITY
            </span>
            <div className="flex justify-between text-xs font-mono text-[#E8E6E3]">
              <span>NIT JALANDHAR — B.Tech IT</span>
              <span>BATCH 2024–2029</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1a1a1f]">
            <a
              href={profile.links.resume}
              download="Sam_Sajal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-xs rounded-xl tracking-wide transition-colors"
            >
              <FileText size={14} />
              <span>DOWNLOAD RESUME PDF ↗</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-4 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-[#F5F5F0] text-xs font-semibold rounded-xl transition-colors"
            >
              <Globe size={14} />
              <span>LINKEDIN</span>
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-4 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-[#F5F5F0] text-xs font-semibold rounded-xl transition-colors"
            >
              <Globe size={14} />
              <span>GITHUB</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
