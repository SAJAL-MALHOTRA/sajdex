'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Shirt, Sliders, Footprints } from 'lucide-react';
import { fits, FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface DevDexWardrobeProps {
  onOpenFitModal: (fit: FitItem) => void;
}

export default function DevDexWardrobe({ onOpenFitModal }: DevDexWardrobeProps) {
  const { playClick, playHover } = useSound();

  const kicks = [
    { name: 'Salomon XT-6 Gore-Tex', color: 'Black / Phantom', spec: 'Gore-Tex Membrane / Contagrip' },
    { name: 'Adidas Samba OG', color: 'White / Black Gum', spec: 'Full Grain Leather / Suede T-toe' },
    { name: 'Asics Gel-Kayano 14', color: 'Cream / Pure Silver', spec: 'GEL Technology / Mesh Rig' },
  ];

  return (
    <section id="wardrobe" className="w-full py-16 sm:py-24 border-b border-[#1A1D27] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Hardware Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1A1D27]">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#636877] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>DEVDEX MODULE 03 // WARDROBE TELEMETRY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Curated Wardrobe Archive
            </h2>
            <p className="font-mono text-xs text-[#8E92A2] max-w-xl">
              Streetwear silhouettes, heavyweight textiles (380GSM), proportional drape, and daily footwear rotation.
            </p>
          </div>

          <div className="font-mono text-xs text-[#555B6C]">
            <span>4 SILHOUETTES CURATED // SS26</span>
          </div>
        </div>

        {/* 4 Looks Hardware Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fits.map((fit) => (
            <motion.div
              key={fit.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                playClick();
                onOpenFitModal(fit);
              }}
              onMouseEnter={playHover}
              className="relative p-4 rounded-[26px] bg-[#0D0F14] border border-[#202430] hover:border-amber-400/40 shadow-xl flex flex-col justify-between space-y-4 group cursor-pointer"
            >
              {/* Viewfinder Bracket Corners */}
              <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/20 group-hover:border-amber-400/70 transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/20 group-hover:border-amber-400/70 transition-colors" />
              <span className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/20 group-hover:border-amber-400/70 transition-colors" />
              <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/20 group-hover:border-amber-400/70 transition-colors" />

              {/* Photo Frame with Viewfinder Overlay */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black border border-white/5">
                <img
                  src={fit.image}
                  alt={fit.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Season & Look Tag */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[9px] text-white">
                  LOOK #{fit.number} · {fit.season}
                </div>

                {/* Inspect Action */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded bg-white text-black font-mono text-[9px] font-bold flex items-center gap-1 shadow group-hover:bg-amber-300 transition-colors">
                  <span>INSPECT</span>
                  <ArrowUpRight size={10} />
                </div>
              </div>

              {/* Garment Meta */}
              <div className="space-y-1.5 text-left font-mono">
                <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  {fit.silhouette}
                </div>

                <h3 className="font-sans font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  {fit.title}
                </h3>

                <p className="text-[10px] text-[#7E8394] line-clamp-2 leading-relaxed font-sans">
                  {fit.stylingNotes}
                </p>

                {/* Palette Chips */}
                <div className="flex items-center gap-1 pt-1">
                  {fit.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Sneaker Rotation Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0F14] border border-[#202430] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider">
            <Sliders size={13} />
            <span>DAILY SNEAKER ROTATION:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {kicks.map((kick, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-[#11141C] border border-white/5 space-y-0.5 text-left"
              >
                <div className="text-white font-bold text-[11px]">{kick.name}</div>
                <div className="text-[9px] text-[#7E8394]">{kick.color}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
