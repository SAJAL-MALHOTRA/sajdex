'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shirt, Sparkles, Layers } from 'lucide-react';
import { fits, FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface LookbookGridProps {
  onSelectFit: (fit: FitItem) => void;
}

export default function LookbookGrid({ onSelectFit }: LookbookGridProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1A1C22] pb-4">
        <div>
          <span className="font-mono text-xs text-[#6E7280] tracking-wider uppercase">
            ARCHIVE 02 // WARDROBE & SILHOUETTE
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight mt-1">
            Curated Lookbook
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8A8E9C]">
          Streetwear silhouettes, technical outerwear, and sneaker rotations. Click to inspect breakdown.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fits.map((fit) => (
          <motion.div
            key={fit.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            onClick={() => {
              playClick();
              onSelectFit(fit);
            }}
            onMouseEnter={playHover}
            className="group rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#404452] shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container with Editorial Zoom */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#13151A]">
              <img
                src={fit.image}
                alt={fit.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-transparent to-transparent opacity-80" />

              {/* Season Pill Badge */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                {fit.season}
              </div>

              {/* Number Pill Badge */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                #{fit.number}
              </div>

              {/* Footwear Quick Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                <span className="px-2 py-1 rounded bg-[#101217]/90 backdrop-blur-md border border-white/10 truncate max-w-[170px]">
                  👟 {fit.garments.footwear.split('(')[0]}
                </span>
                <span className="p-1 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-sans font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                  {fit.title}
                </h4>
                <p className="font-mono text-[11px] text-[#7E828E] truncate mt-0.5">
                  {fit.silhouette}
                </p>
              </div>

              {/* Palette Hex Dots */}
              <div className="flex items-center justify-between pt-2 border-t border-[#1A1C24]">
                <div className="flex items-center gap-1.5">
                  {fit.palette.map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-black/30"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#6E7280]">
                  INSPECT FIT ↗
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}