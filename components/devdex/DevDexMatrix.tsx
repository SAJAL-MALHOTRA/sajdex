'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles, Terminal, Shield, Footprints, Zap, Sliders } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function DevDexMatrix() {
  const { playHover } = useSound();

  const matrixNodes = [
    {
      code: 'LAYER // 01',
      domainA: {
        category: 'COMPUTE & KERNEL',
        tech: 'TypeScript · Python · C++',
        spec: 'Type-safe memory bounds, deterministic compile-time verification & zero runtime exceptions.',
      },
      domainB: {
        category: 'STRUCTURAL FOUNDATION',
        tech: '380GSM French Terry · Raw Denim',
        spec: 'Dense natural weave, architectural boxy drape, uncompromised structural weight.',
      },
      synergy: 'Structure dictates longevity before runtime execution.',
    },
    {
      code: 'LAYER // 02',
      domainA: {
        category: 'INTERACTIVE RUNTIME',
        tech: 'Next.js 15 · React 19 · WebSockets',
        spec: 'Sub-15ms delta state sync, bidirectional pub/sub streaming, zero-layout-shift hydration.',
      },
      domainB: {
        category: 'DYNAMIC ENVELOPE',
        tech: 'Technical Ripstop · Drop-Shoulder',
        spec: 'Ergonomic range of motion, atmospheric airflow regulation, proportional silhouette.',
      },
      synergy: 'Responsiveness adapts dynamically to extreme load spikes.',
    },
    {
      code: 'LAYER // 03',
      domainA: {
        category: 'INTELLIGENCE CORE',
        tech: 'PyTorch · LangChain · Vector DBs',
        spec: 'High-dimensional latent embeddings, autonomous goal-seeking graphs, Bayesian inference.',
      },
      domainB: {
        category: 'INSULATIVE SHELL',
        tech: 'GORE-TEX 3L · Waterproof Sealed Seams',
        spec: 'Impermeable hydrostatic barrier, vapor-permeable membrane, severe weather resilience.',
      },
      synergy: 'Abstract complexity encapsulated behind an invulnerable interface.',
    },
    {
      code: 'LAYER // 04',
      domainA: {
        category: 'STORAGE & LATENCY',
        tech: 'Redis Pub/Sub · PostgreSQL · Prisma',
        spec: 'Atomic transaction isolation, sub-millisecond in-memory cache, indexed spatial querying.',
      },
      domainB: {
        category: 'GROUND SUSPENSION',
        tech: 'Salomon Contagrip · Asics GEL-Kayano',
        spec: 'Decoupled heel cushioning, multi-directional lug traction, energy-return EVA chassis.',
      },
      synergy: 'Stable grounding prevents catastrophic systemic failure.',
    },
    {
      code: 'LAYER // 05',
      domainA: {
        category: 'ORCHESTRATION',
        tech: 'Docker · AWS S3/EC2 · GitHub Actions',
        spec: 'Immutable container packaging, automated canary deploys, zero-downtime rolling updates.',
      },
      domainB: {
        category: 'MODULAR RIG',
        tech: 'Cordura Ballistic · Fidlock Hardware',
        spec: 'Abrasion-resistant 1000D weave, magnetic quick-release fasteners, military utility webbing.',
      },
      synergy: 'Frictionless distribution in any untrusted production environment.',
    },
    {
      code: 'LAYER // 06',
      domainA: {
        category: 'MICRO-AESTHETICS',
        tech: 'Framer Motion · Tailwind CSS · Web Audio',
        spec: 'Spring physics curves, tactile acoustic feedback, pixel-perfect contrast ratios.',
      },
      domainB: {
        category: 'COLOR & FINISH',
        tech: 'Monochrome Palette · Matte Oxide',
        spec: 'Subtle slate gradients, anodized metal pull tabs, minimalist high-visibility accents.',
      },
      synergy: 'Uncompromising attention to tactile sensory feedback.',
    },
  ];

  return (
    <section id="matrix" className="w-full py-16 sm:py-24 border-b border-[#1A1D27] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Hardware Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1A1D27]">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#636877] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>DEVDEX MODULE 04 // DISCIPLINE SYNTHESIS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              System Architecture &times; Gear Spec Matrix
            </h2>
            <p className="font-mono text-xs text-[#8E92A2] max-w-xl">
              Cross-disciplinary telemetry mapping software systems engineering to technical garment construction.
            </p>
          </div>

          <div className="font-mono text-xs text-[#555B6C]">
            <span>6-LAYER PARALLEL RIG // 2026</span>
          </div>
        </div>

        {/* 3×2 Hardware Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matrixNodes.map((node, idx) => (
            <motion.div
              key={node.code}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={playHover}
              className="relative p-6 rounded-[26px] bg-[#0D0F14] border border-[#202430] hover:border-cyan-500/40 shadow-xl flex flex-col justify-between space-y-6 group text-left"
            >
              {/* Corner Viewfinder Accents */}
              <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/20 group-hover:border-cyan-400/70 transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/20 group-hover:border-cyan-400/70 transition-colors" />
              <span className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/20 group-hover:border-cyan-400/70 transition-colors" />
              <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/20 group-hover:border-cyan-400/70 transition-colors" />

              <div className="space-y-4">
                {/* Node Top Header */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#1A1D27] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-bold text-white tracking-wider">{node.code}</span>
                  </div>
                  <span className="text-[10px] text-[#555B6C] font-mono">SPEC #{idx + 1}</span>
                </div>

                {/* Sub-card 1: Software Stack */}
                <div className="p-3 rounded-xl bg-[#12151D] border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-cyan-400 font-bold tracking-wider">{node.domainA.category}</span>
                    <span className="text-[#555B6C]">STACK</span>
                  </div>
                  <div className="text-sm font-bold text-white font-sans tracking-tight">
                    {node.domainA.tech}
                  </div>
                  <p className="text-[11px] text-[#8E92A2] font-mono leading-relaxed">
                    {node.domainA.spec}
                  </p>
                </div>

                {/* Sub-card 2: Garment & Textile Architecture */}
                <div className="p-3 rounded-xl bg-[#12151D] border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-amber-400 font-bold tracking-wider">{node.domainB.category}</span>
                    <span className="text-[#555B6C]">TEXTILE</span>
                  </div>
                  <div className="text-sm font-bold text-white font-sans tracking-tight">
                    {node.domainB.tech}
                  </div>
                  <p className="text-[11px] text-[#8E92A2] font-mono leading-relaxed">
                    {node.domainB.spec}
                  </p>
                </div>
              </div>

              {/* Bottom Synergy Annotation */}
              <div className="pt-3 border-t border-[#1A1D27] font-mono text-[10px] text-[#717789] flex items-center gap-2">
                <span className="text-emerald-400 font-bold">SYNTHESIS:</span>
                <span className="text-white/80">{node.synergy}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
