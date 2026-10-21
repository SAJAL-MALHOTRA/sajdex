'use client';

import PixelAvatar from './PixelAvatar';

interface BalconyProps {
  onSpeak?: () => void;
}

export default function Balcony({ onSpeak }: BalconyProps) {
  return (
    <div className="relative flex flex-col items-center select-none z-20">
      {/* Sajal's Pixel Avatar */}
      <div className="mb-[-3px] z-20">
        <PixelAvatar onSpeak={onSpeak} />
      </div>

      {/* Wooden Balcony Deck & Railing */}
      <div className="relative flex flex-col items-center w-22 sm:w-26">
        {/* Railing Top with Planters */}
        <div className="w-full h-1.5 bg-[#784A2D] border-t border-[#9E653F] rounded-xs shadow-xs relative flex justify-around">
          <div className="absolute -top-1.5 left-2 flex flex-col items-center">
            <div className="flex gap-0.5 mb-[-2px]">
              <span className="w-1 h-1 bg-[#D46A88] rounded-full" />
              <span className="w-1 h-1 bg-[#FDE68A] rounded-full" />
            </div>
            <div className="w-5 h-1.5 bg-[#8D4E2A] rounded-b-xs" />
          </div>

          <div className="absolute -top-1.5 right-2 flex flex-col items-center">
            <div className="flex gap-0.5 mb-[-2px]">
              <span className="w-1 h-1 bg-[#F2ACB9] rounded-full" />
              <span className="w-1 h-1 bg-[#A78BFA] rounded-full" />
            </div>
            <div className="w-5 h-1.5 bg-[#8D4E2A] rounded-b-xs" />
          </div>
        </div>

        {/* Railing Posts */}
        <div className="w-full h-5 flex justify-around items-center px-1 bg-[#1F132B]/30 border-x border-[#5A351E]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1 h-full bg-[#5A351E]" />
          ))}
        </div>

        {/* Timber Deck Base */}
        <div className="w-full h-2.5 bg-[#4E2D1A] border-t-2 border-[#784A2D] border-b-2 border-[#2F190D] shadow-md relative">
          <div className="absolute -bottom-3 left-2.5 w-1.5 h-3 bg-[#3B2011] rotate-[-25deg] origin-top" />
          <div className="absolute -bottom-3 right-2.5 w-1.5 h-3 bg-[#3B2011] rotate-[25deg] origin-top" />
        </div>
      </div>
    </div>
  );
}