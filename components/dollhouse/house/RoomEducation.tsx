'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomEducation({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#E3EDF8] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Education & Library"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Window on wall */}
      <div className="relative z-10 flex justify-end pr-2 pt-1">
        <div className="w-5 h-6 bg-white border-2 border-[#54301B] flex shadow-xs">
          <div className="w-1/2 h-full border-r border-[#54301B]" />
        </div>
      </div>

      {/* Large Colorful Wooden Bookshelf */}
      <div className="relative z-20 flex flex-col items-start mt-auto mb-1 pl-1">
        <div className="w-18 sm:w-22 bg-[#8D5B3A] border-2 border-[#54301B] rounded-t-xs p-1 shadow-xs space-y-1">
          {/* Shelf 1 */}
          <div className="h-3.5 bg-[#6D4125] flex items-end justify-around px-1">
            <div className="w-1.5 h-3 bg-[#E91E63] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#9C27B0] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#2196F3] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#4CAF50] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#FF9800] rounded-t-xs" />
          </div>
          {/* Shelf 2 */}
          <div className="h-3.5 bg-[#6D4125] flex items-end justify-around px-1">
            <div className="w-1.5 h-3 bg-[#00BCD4] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#FFEB3B] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#E91E63] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#3F51B5] rounded-t-xs" />
            <div className="w-1.5 h-3 bg-[#9C27B0] rounded-t-xs" />
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          EDUCATION
        </div>
      </div>
    </div>
  );
}