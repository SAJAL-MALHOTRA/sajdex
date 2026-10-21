'use client';

import { motion } from 'framer-motion';
import { Code2, Shirt, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';

export default function TechWardrobeMatrix() {
  const comparisons = [
    {
      category: "CORE FOUNDATION",
      code: "Python, C++, TypeScript, SQL",
      codeNote: "Type safety, memory efficiency, deterministic logic",
      gear: "Heavyweight French Terry (380GSM), 14oz Selvedge Raw Denim",
      gearNote: "Rigid structure, natural draping, long-term durability",
    },
    {
      category: "FRAMEWORKS & SILHOUETTES",
      code: "Next.js 15, React 19, FastAPI, Tailwind CSS",
      codeNote: "Server actions, reactive states, zero-latency microservices",
      gear: "Cropped Boxy Upper × Cascading Wide-Leg Pleated Trousers",
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
      gear: "Salomon XT-6 Gore-Tex, Adidas Samba OG, Asics Gel-Kayano 14",
      gearNote: "High-comfort campus pacing, trail-ready stability, archival classics",
    },
  ];

  return (
    <section id="matrix" className="w-full py-16 border-b border-[#1A1C22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1A1C22] pb-4">
          <div>
            <span className="font-mono text-xs text-[#6E7280] tracking-wider uppercase">
              THE MATRIX // DISCIPLINE SYNTHESIS
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight mt-1">
              Code Stack × Gear Stack
            </h2>
          </div>
          <p className="font-mono text-xs text-[#8A8E9C] max-w-md">
            Parallels between software architecture standards and sartorial design principles.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="rounded-xl border border-[#1E2028] bg-[#0D0E12] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#1A1C24] bg-[#12141A] font-mono text-xs text-[#8E92A0] p-4 font-semibold uppercase">
            <div className="md:col-span-3">CATEGORY</div>
            <div className="md:col-span-4 text-emerald-400 flex items-center gap-1.5">
              <Code2 size={13} />
              <span>[ 01 CODE SPECIFICATION ]</span>
            </div>
            <div className="md:col-span-5 text-amber-400 flex items-center gap-1.5">
              <Shirt size={13} />
              <span>[ 02 WARDROBE ANALOGUE ]</span>
            </div>
          </div>

          <div className="divide-y divide-[#1A1C24]">
            {comparisons.map((row, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 sm:gap-4 text-xs font-mono items-center"
              >
                {/* Category */}
                <div className="md:col-span-3 font-bold text-white tracking-wider">
                  {row.category}
                </div>

                {/* Code Spec */}
                <div className="md:col-span-4 space-y-1">
                  <div className="text-white font-medium">{row.code}</div>
                  <div className="text-[#6E7280] text-[11px]">{row.codeNote}</div>
                </div>

                {/* Gear Spec */}
                <div className="md:col-span-5 space-y-1">
                  <div className="text-white font-medium">{row.gear}</div>
                  <div className="text-[#6E7280] text-[11px]">{row.gearNote}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}