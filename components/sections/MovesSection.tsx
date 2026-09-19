'use client';

import { motion } from 'framer-motion';
import { moves, Move } from '@/data/moves';
import { useSound } from '@/hooks/useSound';

export default function MovesSection() {
  const { playHover } = useSound();

  return (
    <section id="moves" className="py-20 max-w-5xl mx-auto px-6 font-inter select-none">
      {/* Eyebrow & Heading */}
      <div className="mb-12 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
          <span className="font-pixel text-[8px] text-[#888888] tracking-widest uppercase">
            MOVES
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#F5F5F0] tracking-tight uppercase">
          Known Execution Moves.
        </h2>
        <p className="text-sm text-[#888888]">
          Actionable capabilities backed by technical stack evidence and project implementations.
        </p>
      </div>

      {/* 6 Move Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {moves.map((move: Move, idx: number) => (
          <motion.div
            key={move.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            onMouseEnter={playHover}
            className="p-6 rounded-2xl bg-[#0B0C0F] border border-[#1a1a1f] hover:border-[#888888]/40 space-y-3 transition-colors shadow-lg group cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-3">
              <h3 className="text-base font-bold text-[#F5F5F0] uppercase tracking-tight group-hover:text-white transition-colors">
                {move.name}
              </h3>
              <span className="font-pixel text-[6px] px-2 py-0.5 rounded bg-[#111216] border border-[#1a1a1f] text-[#888888]">
                {move.type}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#888888] leading-relaxed">
              &quot;{move.description}&quot;
            </p>

            {/* Used In Projects */}
            <div className="space-y-1 pt-1">
              <span className="font-pixel text-[6px] text-[#888888] block">USED IN:</span>
              <div className="flex flex-wrap gap-1.5">
                {move.usedIn.map((proj) => (
                  <span key={proj} className="text-[11px] font-mono text-[#F5F5F0] bg-[#111216] border border-[#1a1a1f] px-2.5 py-0.5 rounded">
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 pt-1">
              {move.stack.map((st) => (
                <span key={st} className="text-[10px] font-mono text-[#888888]">
                  • {st}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
