'use client';

import { motion } from 'framer-motion';
import { Terminal, Shirt, ArrowUpRight, Cpu, Footprints } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface CurrentRotationProps {
  onOpenProjectModal?: (id: string) => void;
  onOpenTerminal?: () => void;
}

export default function CurrentRotation({
  onOpenProjectModal,
  onOpenTerminal,
}: CurrentRotationProps) {
  const { playClick } = useSound();

  return (
    <section id="rotation" className="w-full py-16 border-b border-[#1A1C22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-[#6E7280] tracking-wider uppercase">
              CURRENT ROTATION // SS26
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight mt-1">
              What I&apos;m Building × What I&apos;m Wearing
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A8E9C] max-w-md">
            Dual inventory of live technical codebases and daily wardrobe rotation.
          </p>
        </div>

        {/* Side-by-Side Dual Rotation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: ON THE DESK (TECH) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#383C4A] shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#1A1C24] pb-3">
                <span className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-medium">
                  <Cpu size={14} />
                  <span>ON THE DESK // ACTIVE CODEBASE</span>
                </span>
                <span className="font-mono text-[10px] text-[#555864] uppercase">
                  ACTIVE BRANCH
                </span>
              </div>

              <div>
                <h3 className="text-xl font-sans font-bold text-white">
                  ThinkFolio & Pairfect Realtime
                </h3>
                <p className="text-xs text-[#8E92A0] font-mono mt-1">
                  Machine Learning Financial Reasoning & Realtime Supabase Platform
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#12141A] border border-[#1E212A] space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">ACTIVE PIPELINE:</span>
                  <span className="text-[#C5C8D4]">Bayesian Knowledge Tracing (BKT)</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">TARGET METRIC:</span>
                  <span className="text-emerald-400 font-bold">R² 0.927 Accuracy</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">STACK IN PLAY:</span>
                  <span className="text-[#C5C8D4]">PyTorch, FastAPI, Next.js 15, Groq</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#1A1C24] text-xs font-mono">
              <button
                onClick={() => {
                  playClick();
                  if (onOpenTerminal) onOpenTerminal();
                }}
                className="flex items-center gap-1.5 text-[#8E92A0] hover:text-white transition-colors cursor-pointer"
              >
                <Terminal size={12} />
                <span>run `git status` in terminal</span>
              </button>

              <button
                onClick={() => {
                  playClick();
                  if (onOpenProjectModal) onOpenProjectModal('OBJ-026');
                }}
                className="flex items-center gap-1 text-white hover:text-emerald-400 transition-colors font-medium cursor-pointer"
              >
                <span>SPEC SHEET</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>

          {/* Card 2: ON THE RACK (FITS) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#383C4A] shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#1A1C24] pb-3">
                <span className="flex items-center gap-2 font-mono text-xs text-amber-400 font-medium">
                  <Shirt size={14} />
                  <span>ON THE RACK // CURRENT SILHOUETTE</span>
                </span>
                <span className="font-mono text-[10px] text-[#555864] uppercase">
                  DAILY UNIFORM
                </span>
              </div>

              <div>
                <h3 className="text-xl font-sans font-bold text-white">
                  Technical Gorpcore × Boxy Minimalism
                </h3>
                <p className="text-xs text-[#8E92A0] font-mono mt-1">
                  High-mobility campus gear & structured studio tailoring
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#12141A] border border-[#1E212A] space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">OUTER LAYER:</span>
                  <span className="text-[#C5C8D4]">Matte Black Packable Windbreaker</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">BASE LAYER:</span>
                  <span className="text-[#C5C8D4]">320GSM Heavyweight Bone White Tee</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E7280]">KICK ROTATION:</span>
                  <span className="text-amber-400 font-bold">Salomon XT-6 Gore-Tex</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#1A1C24] text-xs font-mono">
              <span className="text-[#7E828E] flex items-center gap-1.5">
                <Footprints size={12} />
                <span>Silhouette: Cropped Torso / Wide Drape</span>
              </span>

              <button
                onClick={() => {
                  playClick();
                  document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors font-medium cursor-pointer"
              >
                <span>VIEW LOOKBOOK</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}