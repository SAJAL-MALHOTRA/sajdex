'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BookOpen } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectIndex: (idx: number) => void;
}

export default function TableOfContentsModal({
  isOpen,
  onClose,
  currentIndex,
  onSelectIndex,
}: TableOfContentsModalProps) {
  const { playClick, playHover } = useSound();

  const spreads = [
    {
      num: '00',
      title: 'THE VOGUE COVER',
      subtitle: 'Students of Merveilleux Exposed',
      category: 'COVER STORY',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '01',
      title: "EDITOR'S NOTE & MANIFESTO",
      subtitle: 'Analytical Rigor × Wardrobe Curation',
      category: 'ESSAY & TOC',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '02',
      title: 'THINKFOLIO: QUANT REASONING',
      subtitle: 'Look 01 × PyTorch Alpha Architecture',
      category: 'FEATURE STORY',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '03',
      title: 'PAIRFECT: SYNCHRONIZED STATES',
      subtitle: 'Look 02 × Realtime Peer Environments',
      category: 'FEATURE STORY',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '04',
      title: 'SCHOLARAI: AUTONOMOUS GRAPH',
      subtitle: 'Look 03 × Multi-Agent Research Networks',
      category: 'INVESTIGATION',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '05',
      title: 'THE WARDROBE ARCHIVE',
      subtitle: 'Lookbook Contact Sheet & Sneaker Rig',
      category: 'GALLERY',
      image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=400&q=80',
    },
    {
      num: '06',
      title: 'COLOPHON & DISPATCH',
      subtitle: 'Direct Transmission Channel & Resume',
      category: 'BACK COVER',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[85vh] bg-[#0E0F14] border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="h-14 px-6 bg-[#13151D] border-b border-white/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-white">
              <BookOpen size={14} className="text-amber-400" />
              <span className="font-semibold tracking-widest uppercase">
                INDEX // SPREAD DIRECTORY
              </span>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              onMouseEnter={playHover}
              className="p-1.5 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>

          {/* Grid of Spreads */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 overflow-y-auto custom-scrollbar">
            {spreads.map((spread, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    playClick();
                    onSelectIndex(idx);
                    onClose();
                  }}
                  onMouseEnter={playHover}
                  className={`group rounded-lg border p-3 cursor-pointer transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white/10 border-amber-400/80 shadow-lg'
                      : 'bg-[#151720] border-white/10 hover:border-white/30 hover:bg-[#1A1D28]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] pb-2 border-b border-white/10">
                    <span className="text-amber-400 font-bold">{spread.num}</span>
                    <span className="text-white/40">{spread.category}</span>
                  </div>

                  <div className="py-2.5">
                    <h4 className="font-serif italic font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {spread.title}
                    </h4>
                    <p className="text-[10px] font-mono text-[#8E92A0] mt-1 line-clamp-1">
                      {spread.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-[9px] text-white/50 group-hover:text-white">
                    <span>{isCurrent ? 'CURRENT SPREAD' : 'JUMP TO PAGE'}</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="h-10 px-6 bg-[#13151D] border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#717585]">
            <span>MERVEILLEUX × SAJAL // ISSUE N° 01</span>
            <span>PRESS ESC TO CLOSE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
