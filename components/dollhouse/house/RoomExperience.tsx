'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomExperience({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#E0F2F1] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Experience & Wardrobe"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Garment Clothing Rack with Hanging Developer Outfits */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1 px-1">
        <div className="relative flex flex-col items-center">
          {/* Top Rod */}
          <div className="w-18 sm:w-20 h-1 bg-[#78909C] border-t border-slate-300 relative">
            <div className="absolute top-1 inset-x-1 flex justify-around items-start">
              {/* Outfit 1: Pink */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-400 rotate-45" />
                <div className="w-2.5 h-6 bg-[#E91E63] rounded-b-xs" />
              </div>
              {/* Outfit 2: Blue */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-400 rotate-45" />
                <div className="w-2.5 h-6 bg-[#42A5F5] rounded-b-xs" />
              </div>
              {/* Outfit 3: Mint */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-400 rotate-45" />
                <div className="w-2.5 h-6 bg-[#26A69A] rounded-b-xs" />
              </div>
              {/* Outfit 4: Yellow */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-400 rotate-45" />
                <div className="w-2.5 h-6 bg-[#FFCA28] rounded-b-xs" />
              </div>
              {/* Outfit 5: Orange */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-400 rotate-45" />
                <div className="w-2.5 h-6 bg-[#FF7043] rounded-b-xs" />
              </div>
            </div>
          </div>

          <div className="w-full h-8 flex justify-between px-0.5 pointer-events-none">
            <div className="w-1 h-full bg-[#546E7A]" />
            <div className="w-1 h-full bg-[#546E7A]" />
          </div>
        </div>

        {/* Milestone Gift Box with Pink Ribbon */}
        <div className="relative flex flex-col items-center">
          <div className="w-6 h-5 bg-[#FFF9C4] border-2 border-[#FBC02D] rounded-xs relative flex items-center justify-center shadow-xs">
            <div className="w-1.5 h-full bg-[#EC407A]" />
            <div className="absolute inset-y-1.5 inset-x-0 h-1.5 bg-[#EC407A]" />
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          EXPERIENCE
        </div>
      </div>
    </div>
  );
}