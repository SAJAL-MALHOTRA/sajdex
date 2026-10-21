'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomAboutMe({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#EADCF0] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore About Me"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Wall Decor: Portrait Frame */}
      <div className="relative z-10 flex justify-end pr-2 pt-1">
        <div className="w-6 h-9 bg-[#FFF6E5] border-2 border-[#54301B] rounded-xs shadow-xs p-0.5 flex flex-col justify-between">
          <div className="w-full h-4 bg-[#81D4FA] rounded-xs relative overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 h-2 bg-[#A5D6A7] rounded-t-full" />
          </div>
          <div className="w-full h-1 bg-[#F48FB1]/40 rounded-xs" />
        </div>
      </div>

      {/* Furniture: Pink Sofa / Bed & Soft Rug */}
      <div className="relative z-20 flex flex-col items-start mt-auto mb-1 pl-1">
        {/* Soft Pink Rug */}
        <div className="absolute -bottom-1 left-2 w-18 sm:w-22 h-4 bg-[#F8BBD0]/60 rounded-full -z-10" />

        {/* Cozy Pink Sofa */}
        <div className="relative flex flex-col items-center">
          {/* Backrest & Cushions */}
          <div className="w-16 sm:w-20 h-7 bg-[#FF4081] rounded-t-md border-2 border-[#C2185B] shadow-xs relative flex justify-around p-0.5">
            <div className="w-6 h-4 bg-[#F50057] rounded-t-xs" />
            <div className="w-6 h-4 bg-[#F50057] rounded-t-xs" />
          </div>
          {/* Seat Base */}
          <div className="w-18 sm:w-22 h-3 bg-[#E91E63] border-t-2 border-x-2 border-[#AD1457] rounded-xs shadow-xs" />
        </div>
      </div>

      {/* Room Label Pill (matching reference) */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          ABOUT ME
        </div>
      </div>
    </div>
  );
}