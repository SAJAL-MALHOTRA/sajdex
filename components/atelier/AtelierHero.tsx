'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Shirt, Download, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface AtelierHeroProps {
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
}

export default function AtelierHero({ activeFilter, onSelectFilter }: AtelierHeroProps) {
  const { playClick } = useSound();

  const handleFilterClick = (filter: string) => {
    playClick();
    onSelectFilter(filter);
    const archiveEl = document.getElementById('archive');
    if (archiveEl) {
      archiveEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full pt-12 pb-16 border-b border-[#1A1C22] overflow-hidden">
      {/* Background Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E2128_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-10">
        
        {/* Top Metadata Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E92A0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#C5C8D4] tracking-wider uppercase">STUDIO STATUS: ACTIVE & SHIPPING</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#636773]">
            <span>LOCATION: NIT JALANDHAR [PB, IN]</span>
            <span className="hidden sm:inline">COORDINATES: 31.3959° N, 75.5358° E</span>
          </div>
        </div>

        {/* Hero Headline: Bold Editorial Typography */}
        <div className="space-y-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white uppercase leading-[1.02]">
              ENGINEER BY LOGIC.
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-[#A6ABB9] tracking-normal leading-[1.08] mt-1">
              Stylist by Aesthetic.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#9A9EAB] max-w-2xl font-sans leading-relaxed pt-2"
          >
            {profile.description}
          </motion.p>
        </div>

        {/* Dual Pillar Filter Selector (The Key Interaction) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#16181E]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#636773] pr-2">FILTER ARCHIVE:</span>
            
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-3.5 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-[#111317] hover:bg-[#1C1F27] text-[#9A9EAB] border border-[#1E2026]'
              }`}
            >
              ALL (8)
            </button>

            <button
              onClick={() => handleFilterClick('code')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
                activeFilter === 'code'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-[#111317] hover:bg-[#1C1F27] text-[#9A9EAB] border border-[#1E2026]'
              }`}
            >
              <Code2 size={12} />
              <span>01 CODE / SYSTEMS (4)</span>
            </button>

            <button
              onClick={() => handleFilterClick('fits')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md font-mono text-xs transition-all cursor-pointer ${
                activeFilter === 'fits'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-[#111317] hover:bg-[#1C1F27] text-[#9A9EAB] border border-[#1E2026]'
              }`}
            >
              <Shirt size={12} />
              <span>02 LOOKBOOK / FITS (4)</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={profile.links.resume}
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#16181F] hover:bg-[#20232B] border border-[#262933] text-white transition-colors cursor-pointer"
            >
              <Download size={12} />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={() => {
                playClick();
                document.getElementById('rotation')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-[#7E828E] hover:text-white transition-colors cursor-pointer"
            >
              <span>EXPLORE</span>
              <ArrowDown size={12} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}