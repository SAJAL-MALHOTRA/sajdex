'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Shirt, Sliders } from 'lucide-react';
import { fits, FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface VogueLookbookProps {
  onOpenFitModal: (fit: FitItem) => void;
}

export default function VogueLookbook({ onOpenFitModal }: VogueLookbookProps) {
  const { playClick, playHover } = useSound();

  const kicks = [
    { name: 'Salomon XT-6 Gore-Tex', model: 'Black / Phantom', note: 'Technical trail membrane' },
    { name: 'Adidas Samba OG', model: 'White / Black Gum', note: 'Low-profile raw leather' },
    { name: 'Asics Gel-Kayano 14', model: 'Cream / Pure Silver', note: 'GEL cushioning & mesh' },
  ];

  return (
    <section id="lookbook" className="w-full py-20 sm:py-28 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10 mb-12">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#717585] uppercase block">
              MERVEILLEUX ATELIER // ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight uppercase">
              The Wardrobe Lookbook
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-[#A6ABB9]">
              Proportion, drape, textile weight, and functional minimalism.
            </p>
          </div>

          <div className="font-mono text-xs text-white/50">
            <span>4 SILHOUETTES CURATED // SS26</span>
          </div>
        </div>

        {/* 4-Column High-Fashion Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fits.map((fit) => (
            <motion.div
              key={fit.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                playClick();
                onOpenFitModal(fit);
              }}
              onMouseEnter={playHover}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Tall Vertical Photo Frame */}
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-sm overflow-hidden border border-white/15 bg-[#0A0A0D] mb-4">
                <img
                  src={fit.image}
                  alt={fit.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white border border-white/15">
                  LOOK #{fit.number}
                </div>

                {/* Inspect Action */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-white text-black font-mono text-[10px] font-semibold flex items-center gap-1 shadow opacity-90 group-hover:opacity-100 group-hover:bg-amber-300 transition-colors">
                  <span>INSPECT FIT</span>
                  <ArrowUpRight size={11} />
                </div>
              </div>

              {/* Garment Title & Notes */}
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-between font-mono text-[10px] text-white/50">
                  <span>{fit.season}</span>
                  <span>{fit.vibe}</span>
                </div>
                <h4 className="font-serif italic font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  {fit.title}
                </h4>
                <p className="font-mono text-[11px] text-[#8E92A0] line-clamp-2 leading-relaxed">
                  {fit.stylingNotes}
                </p>

                {/* Palette Chips */}
                <div className="flex items-center gap-1.5 pt-2">
                  {fit.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sneaker Rotation Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider">
            <Sliders size={13} />
            <span>DAILY SNEAKER ROTATION:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {kicks.map((kick, i) => (
              <div
                key={i}
                className="p-3 rounded-sm bg-[#0A0A0D] border border-white/10 flex flex-col justify-between space-y-1"
              >
                <div className="text-white font-medium text-xs">{kick.name}</div>
                <div className="text-[10px] text-white/50">{kick.model}</div>
                <div className="text-[9px] text-[#717585]">{kick.note}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
