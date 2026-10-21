'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface MagazineFolioProps {
  currentSpreadIndex: number;
  totalSpreads: number;
  spreadTitle: string;
  onPrevSpread: () => void;
  onNextSpread: () => void;
  onSelectSpread: (idx: number) => void;
}

export default function MagazineFolio({
  currentSpreadIndex,
  totalSpreads,
  spreadTitle,
  onPrevSpread,
  onNextSpread,
  onSelectSpread,
}: MagazineFolioProps) {
  const { playClick, playHover } = useSound();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 h-12 px-4 sm:px-8 border-t backdrop-blur-md select-none border-white/10 bg-[#070709]/85 text-white/80">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between font-mono text-[11px]">
        
        {/* Left: Issue Colophon Line */}
        <div className="flex items-center gap-3">
          <span className="text-white/40 hidden md:inline">VOL. 01 / SS26</span>
          <span className="text-white/20 hidden md:inline">•</span>
          <span className="text-white font-medium tracking-wider uppercase truncate max-w-[200px] sm:max-w-none">
            {spreadTitle}
          </span>
        </div>

        {/* Center: Pagination Dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSpreads }).map((_, idx) => {
            const isActive = idx === currentSpreadIndex;
            return (
              <button
                key={idx}
                onClick={() => {
                  playClick();
                  onSelectSpread(idx);
                }}
                onMouseEnter={playHover}
                className={`transition-all rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Jump to Spread ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Right: Spread Navigation Buttons */}
        <div className="flex items-center gap-3">
          <span className="text-white/40 hidden lg:inline">
            USE TRACKPAD / ARROWS
          </span>

          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-0.5">
            <button
              onClick={() => {
                playClick();
                onPrevSpread();
              }}
              disabled={currentSpreadIndex === 0}
              onMouseEnter={playHover}
              className={`p-1.5 rounded-full transition-colors ${
                currentSpreadIndex === 0
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-white/80 hover:text-white hover:bg-white/10 cursor-pointer'
              }`}
              title="Previous Page / Spread (Left Arrow)"
            >
              <ChevronLeft size={14} />
            </button>

            <span className="px-2 text-[10px] font-semibold text-white/70">
              {String(currentSpreadIndex + 1).padStart(2, '0')} / {String(totalSpreads).padStart(2, '0')}
            </span>

            <button
              onClick={() => {
                playClick();
                onNextSpread();
              }}
              disabled={currentSpreadIndex === totalSpreads - 1}
              onMouseEnter={playHover}
              className={`p-1.5 rounded-full transition-colors ${
                currentSpreadIndex === totalSpreads - 1
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-white/80 hover:text-white hover:bg-white/10 cursor-pointer'
              }`}
              title="Next Page / Spread (Right Arrow)"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
