'use client';

import { motion } from 'framer-motion';
import { Code2, Shirt, Layers } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function StationMatrix() {
  const { playHover } = useSound();

  const comparisons = [
    {
      category: "CORE FOUNDATION",
      code: "Python, C++, TypeScript, SQL",
      codeNote: "Type safety, memory efficiency, deterministic logic",
      gear: "Heavyweight French Terry (380GSM), 14oz Raw Denim",
      gearNote: "Rigid structure, natural draping, long-term durability",
    },
    {
      category: "FRAMEWORKS & SILHOUETTES",
      code: "Next.js 15, React 19, FastAPI, Tailwind CSS",
      codeNote: "Server actions, reactive states, zero-latency microservices",
      gear: "Cropped Boxy Upper × Wide-Leg Pleated Trousers",
      gearNote: "Proportional contrast, drop shoulder seams, relaxed movement",
    },
    {
      category: "INTELLIGENCE & OUTERWEAR",
      code: "PyTorch, LangGraph, ChromaDB, Groq Llama 3",
      codeNote: "Bayesian knowledge tracing, multi-agent graph orchestration",
      gear: "Packable Technical Shells, Matte Gore-Tex, Sherpa Fleece",
      gearNote: "Weather-adaptive layering, functional utility pockets, matte hardware",
    },
    {
      category: "RUNTIME & FOOTWEAR",
      code: "Supabase Realtime, pgvector, Docker, Edge Functions",
      codeNote: "Sub-50ms data synchronization, distributed scalability",
      gear: "Salomon XT-6 Gore-Tex, Adidas Samba OG, Gel-Kayano 14",
      gearNote: "High-comfort campus pacing, trail-ready stability, archival classics",
    },
  ];

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-4 sm:px-10 md:px-16 select-none overflow-hidden border-r border-[#1B1D24]">
      <div className="max-w-6xl w-full h-[76vh] flex flex-col justify-between py-2 relative z-10">
        
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1A1C24] pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="text-white font-bold tracking-widest uppercase">
              STATION 06 // DISCIPLINE SYNTHESIS MATRIX
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#555864]">
            <span className="text-emerald-400">SOFTWARE</span>
            <span>×</span>
            <span className="text-amber-400">SARTORIAL</span>
          </div>
        </div>

        {/* Matrix Lightboard */}
        <div className="rounded-2xl border border-[#1E2028] bg-[#0D0E12] overflow-hidden shadow-2xl flex-1 flex flex-col justify-between my-4">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#1A1C24] bg-[#12141A] font-mono text-xs text-[#8E92A0] p-4 font-semibold uppercase">
            <div className="md:col-span-3">DISCIPLINE</div>
            <div className="md:col-span-4 text-emerald-400 flex items-center gap-1.5">
              <Code2 size={13} />
              <span>[ 01 CODE SPECIFICATION ]</span>
            </div>
            <div className="md:col-span-5 text-amber-400 flex items-center gap-1.5">
              <Shirt size={13} />
              <span>[ 02 WARDROBE ANALOGUE ]</span>
            </div>
          </div>

          <div className="divide-y divide-[#1A1C24] flex-1 flex flex-col justify-around">
            {comparisons.map((row, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={playHover}
                className="grid grid-cols-1 md:grid-cols-12 p-3 sm:p-4 gap-2 sm:gap-4 text-xs font-mono items-center"
              >
                <div className="md:col-span-3 font-bold text-white tracking-wider text-[11px]">
                  {row.category}
                </div>
                <div className="md:col-span-4 space-y-0.5">
                  <div className="text-white font-medium">{row.code}</div>
                  <div className="text-[#6E7280] text-[10px]">{row.codeNote}</div>
                </div>
                <div className="md:col-span-5 space-y-0.5">
                  <div className="text-white font-medium">{row.gear}</div>
                  <div className="text-[#6E7280] text-[10px]">{row.gearNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#555864] pt-2 border-t border-[#1A1C24]">
          <span>CROSS-DISCIPLINARY BENCHMARKS</span>
          <span>STATION 06 / 07</span>
        </div>

      </div>
    </div>
  );
}