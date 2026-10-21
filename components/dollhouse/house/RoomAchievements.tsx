'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomAchievements({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#FFF8DC] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Achievements & Trophies"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* 2-Tier Display Étagère with 5 Golden Trophies (matching reference) */}
      <div className="relative z-20 flex flex-col items-center mt-auto mb-1 w-full px-2">
        <div className="relative w-22 sm:w-26 bg-white/40 border-2 border-[#8D5B3A] rounded-t-lg p-1 shadow-xs flex flex-col justify-between h-14">
          {/* Top Shelf: 3 Golden Trophies */}
          <div className="flex justify-around items-end pb-1 border-b border-[#8D5B3A]/40">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center group-hover:scale-110 transition-transform">
                {/* Trophy Cup */}
                <div className="w-2.5 h-2.5 bg-[#FFD700] border border-[#B8860B] rounded-b-xs relative flex items-center justify-center">
                  <div className="absolute -left-0.5 top-0.5 w-0.5 h-1 border-l border-y border-[#B8860B] rounded-l-xs" />
                  <div className="absolute -right-0.5 top-0.5 w-0.5 h-1 border-r border-y border-[#B8860B] rounded-r-xs" />
                  <div className="w-1 h-0.5 bg-[#FFF9C4]" />
                </div>
                {/* Trophy Stem & Base */}
                <div className="w-1 h-1 bg-[#DAA520]" />
                <div className="w-2.5 h-0.5 bg-[#B8860B] rounded-xs" />
              </div>
            ))}
          </div>

          {/* Bottom Shelf: 2 Golden Trophies */}
          <div className="flex justify-around items-end pt-0.5">
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col items-center group-hover:scale-110 transition-transform">
                {/* Trophy Cup */}
                <div className="w-3 h-3 bg-[#FFD700] border border-[#B8860B] rounded-b-xs relative flex items-center justify-center">
                  <div className="absolute -left-0.5 top-0.5 w-0.5 h-1.5 border-l border-y border-[#B8860B] rounded-l-xs" />
                  <div className="absolute -right-0.5 top-0.5 w-0.5 h-1.5 border-r border-y border-[#B8860B] rounded-r-xs" />
                  <div className="w-1 h-1 bg-[#FFF9C4]" />
                </div>
                {/* Trophy Stem & Base */}
                <div className="w-1 h-1 bg-[#DAA520]" />
                <div className="w-3 h-0.5 bg-[#B8860B] rounded-xs" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          ACHIEVEMENTS
        </div>
      </div>
    </div>
  );
}