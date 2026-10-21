'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Copy, Check, Sparkles, Tag } from 'lucide-react';
import { FitItem } from '@/data/fits';
import { useSound } from '@/hooks/useSound';

interface FitModalProps {
  fit: FitItem | null;
  onClose: () => void;
  onNavigateFit?: (direction: 'prev' | 'next') => void;
}

export default function FitModal({ fit, onClose, onNavigateFit }: FitModalProps) {
  const { playClick } = useSound();
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onNavigateFit) onNavigateFit('prev');
      if (e.key === 'ArrowRight' && onNavigateFit) onNavigateFit('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigateFit]);

  if (!fit) return null;

  const handleCopyColor = (hex: string) => {
    playClick();
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0D0E12] border border-[#262832] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Left Column: Fit Imagery */}
          <div className="w-full md:w-1/2 relative bg-[#13151A] flex items-center justify-center min-h-[300px] md:min-h-[520px] overflow-hidden group">
            {/* Real Editorial Image */}
            <img
              src={fit.image}
              alt={fit.title}
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-transparent to-black/20 pointer-events-none" />

            {/* Image Overlay Tags */}
            <div className="absolute bottom-4 left-4 z-10 font-mono text-[11px] text-white flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20">
                {fit.season} ARCHIVE
              </span>
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20">
                {fit.vibe}
              </span>
            </div>
          </div>

          {/* Right Column: Garment Specs & Styling Breakdown */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1E2028] pb-3">
                <span>LOOKBOOK #{fit.number}</span>
                <span>{fit.id}</span>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
                  {fit.title}
                </h3>
                <p className="font-mono text-xs text-[#9E9EA8] mt-1">
                  Silhouette: {fit.silhouette}
                </p>
              </div>

              {/* Itemized Garment Breakdown */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-mono text-[#6E7280] uppercase tracking-wider block">
                  GARMENT BREAKDOWN:
                </span>

                <div className="space-y-2 font-mono text-xs">
                  {fit.garments.outerwear && (
                    <div className="p-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] flex justify-between gap-2">
                      <span className="text-[#7E828E]">OUTERWEAR</span>
                      <span className="text-white text-right font-medium">{fit.garments.outerwear}</span>
                    </div>
                  )}

                  <div className="p-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] flex justify-between gap-2">
                    <span className="text-[#7E828E]">TOP</span>
                    <span className="text-white text-right font-medium">{fit.garments.top}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] flex justify-between gap-2">
                    <span className="text-[#7E828E]">TROUSERS</span>
                    <span className="text-white text-right font-medium">{fit.garments.bottom}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] flex justify-between gap-2">
                    <span className="text-[#7E828E]">FOOTWEAR</span>
                    <span className="text-amber-300 text-right font-medium">{fit.garments.footwear}</span>
                  </div>
                </div>

                {/* Accessories */}
                {fit.garments.accessories.length > 0 && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {fit.garments.accessories.map((acc, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#161820] text-[#9A9EAB] border border-[#222530] text-[10px] font-mono"
                      >
                        + {acc}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Styling Notes */}
              <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E212A] text-xs text-[#A1A4B0] font-sans leading-relaxed">
                <span className="font-mono text-[10px] text-[#6E7280] block mb-1">STYLING ETHOS:</span>
                {fit.stylingNotes}
              </div>

              {/* Palette Hex Swatches */}
              <div className="space-y-1.5 pt-1">
                <span className="font-mono text-[10px] text-[#6E7280] uppercase block">
                  COLOR PALETTE (CLICK TO COPY):
                </span>
                <div className="flex items-center gap-2">
                  {fit.palette.map((hex, i) => (
                    <button
                      key={i}
                      onClick={() => handleCopyColor(hex)}
                      className="group flex items-center gap-1.5 px-2 py-1 rounded bg-[#14161C] border border-[#20232C] hover:border-white/40 font-mono text-[10px] text-white transition-colors cursor-pointer"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/30"
                        style={{ backgroundColor: hex }}
                      />
                      <span>{copiedHex === hex ? 'COPIED' : hex}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Nav Prev / Next */}
            {onNavigateFit && (
              <div className="flex items-center justify-between pt-4 border-t border-[#1E2028] font-mono text-xs">
                <button
                  onClick={() => onNavigateFit('prev')}
                  className="flex items-center gap-1 text-[#8E92A0] hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  <span>PREV LOOK</span>
                </button>
                <button
                  onClick={() => onNavigateFit('next')}
                  className="flex items-center gap-1 text-[#8E92A0] hover:text-white transition-colors cursor-pointer"
                >
                  <span>NEXT LOOK</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}