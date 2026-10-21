'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Shirt, Sparkles, Sliders } from 'lucide-react';
import { fits, FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface SpreadLookbookGalleryProps {
  onOpenFitModal: (fit: FitItem) => void;
}

export default function SpreadLookbookGallery({
  onOpenFitModal,
}: SpreadLookbookGalleryProps) {
  const { playClick, playHover } = useSound();

  const kicks = [
    { name: 'Salomon XT-6 Gore-Tex', color: 'Black / Phantom', spec: 'Gore-Tex Membrane / Contagrip' },
    { name: 'Adidas Samba OG', color: 'White / Black Gum', spec: 'Full Grain Leather / Suede T-toe' },
    { name: 'Asics Gel-Kayano 14', color: 'Cream / Pure Silver', spec: 'GEL Technology / Mesh Rig' },
  ];

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-3 sm:px-8 md:px-12 select-none overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E212B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Double-Page Spread Container */}
      <div className="relative w-full max-w-6xl h-[80vh] sm:h-[82vh] max-h-[820px] rounded-lg border border-white/15 bg-[#0A0B0F] shadow-2xl p-4 sm:p-8 flex flex-col justify-between overflow-hidden">
        
        {/* Top Editorial Bar */}
        <div className="border-b border-white/15 pb-2.5 flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#8E92A0]">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold uppercase tracking-widest">
              SPREAD 05 // WARDROBE CONTACT SHEET
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white">MERVEILLEUX ARCHIVE COLLECTION</span>
          </div>

          <div className="flex items-center gap-2 text-white/60">
            <span>4 SILHOUETTES CURATED</span>
          </div>
        </div>

        {/* ── CORE LOOKBOOK CONTACT SHEET GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-3 flex-1 overflow-y-auto custom-scrollbar">
          {fits.map((fit) => (
            <motion.div
              key={fit.id}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                playClick();
                onOpenFitModal(fit);
              }}
              onMouseEnter={playHover}
              className="rounded-lg bg-[#0F1016] border border-white/10 hover:border-amber-400/50 p-2.5 flex flex-col justify-between group cursor-pointer shadow-lg transition-all"
            >
              {/* Photo Frame with Film Perforation Aesthetic */}
              <div className="relative w-full h-[24vh] sm:h-[28vh] rounded overflow-hidden border border-white/10 bg-black mb-2.5">
                <img
                  src={fit.image}
                  alt={fit.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Film Negative Frame Number */}
                <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/20 font-mono text-[9px] text-white">
                  FRAME #{fit.number}
                </div>

                {/* Inspect Button Pill */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-white text-black font-mono text-[9px] font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:bg-amber-300 transition-colors shadow">
                  <span>INSPECT</span>
                  <ArrowUpRight size={10} />
                </div>
              </div>

              {/* Garment Title & Notes */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                  <span>{fit.season}</span>
                  <span className="text-white/40">{fit.vibe}</span>
                </div>
                <h3 className="font-serif italic font-bold text-sm text-white group-hover:text-amber-300 transition-colors truncate">
                  {fit.title}
                </h3>
                <p className="text-[10px] font-mono text-[#8E92A0] line-clamp-2 leading-relaxed">
                  {fit.stylingNotes}
                </p>
              </div>

              {/* Palette Chips */}
              <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/40 uppercase">PALETTE</span>
                <div className="flex items-center gap-1">
                  {fit.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SNEAKER PEDESTAL STRIP (RUNNING FOOTER) ── */}
        <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px]">
          <div className="flex items-center gap-2 text-amber-400 font-semibold uppercase tracking-wider">
            <Sliders size={12} />
            <span>DAILY SNEAKER ROTATION:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#A6ABB9]">
            {kicks.map((kick, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                <span className="text-white font-medium">{kick.name}</span>
                <span className="text-white/40">•</span>
                <span className="text-[9px] text-[#717585]">{kick.color}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
