'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface JourneySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JourneySidebar({ isOpen, onClose }: JourneySidebarProps) {
  const { playClick, playModalOpen } = useSound();

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playClick]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              playClick();
              onClose();
            }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Clean Slide-over Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-[101] w-full max-w-md bg-[#0F1014]/98 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden font-sans select-text"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#13141A]/90 shrink-0">
              <div>
                <span className="text-xs font-mono text-[#9E9EA8] uppercase tracking-wider block">
                  Background
                </span>
                <h3 className="font-display text-xl font-bold text-[#F4F4F6] tracking-tight">
                  Experience & Education
                </h3>
              </div>

              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#9E9EA8] hover:text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Timeline Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
              
              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs text-[#9E9EA8]">
                <div className="flex items-center justify-between text-[#F4F4F6] font-semibold">
                  <span>{profile.fullName}</span>
                  <span className="text-[11px] text-[#30A46C]">● Active</span>
                </div>
                <p className="leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Connected Timeline */}
              <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/[0.08]">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-[#0F1014] border-2 border-white/20 group-hover:border-white transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#62636C] font-mono">
                        <span className="font-semibold text-[#9E9EA8]">{exp.organization}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display font-semibold text-base text-[#F4F4F6] group-hover:text-white transition-colors">
                          {exp.role}
                        </h4>
                        <div className="text-xs text-[#9E9EA8] flex items-center gap-1 pt-0.5">
                          <MapPin size={11} className="text-[#62636C]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-[#9E9EA8] leading-relaxed pt-1">
                        {exp.summary}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1 pt-1.5 text-xs text-[#62636C]">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-white/40 mt-0.5">›</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer Quick Action */}
            <div className="p-5 border-t border-white/[0.08] bg-[#13141A]/90 flex items-center justify-between text-xs font-sans shrink-0">
              <span className="text-[#9E9EA8]">Need complete details?</span>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F4F4F6] text-[#090A0C] font-semibold hover:bg-white transition-colors"
              >
                <span>Download Résumé</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
