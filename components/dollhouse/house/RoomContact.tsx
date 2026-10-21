'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomContact({ onOpen, isActive }: RoomProps) {
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
      title="Explore Contact & Dispatch Office"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Wall Mail Envelope (matching reference) */}
      <div className="relative z-10 flex justify-end pr-3 pt-1">
        <div className="w-6 h-7 bg-white border-2 border-[#54301B] rounded-xs shadow-xs p-0.5 flex flex-col items-center justify-between group-hover:scale-110 transition-transform">
          {/* Envelope Flap Lines */}
          <div className="w-full h-3 border-b-2 border-[#8D5B3A] relative flex justify-center">
            <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-1" />
          </div>
          <div className="w-3 h-0.5 bg-[#CFD8DC] rounded-full mb-0.5" />
        </div>
      </div>

      {/* Wooden Dispatch Desk with Gift Box & Steaming Mug */}
      <div className="relative z-20 flex flex-col items-start mt-auto mb-1 pl-1">
        <div className="relative flex flex-col items-center">
          {/* Items on the Desk */}
          <div className="flex items-end gap-2 -mb-0.5 z-10">
            {/* Steaming Mug */}
            <div className="flex flex-col items-center">
              <span className="text-[6px] text-teal-600 animate-steam leading-none">~</span>
              <div className="w-2.5 h-3 bg-white border border-[#54301B] rounded-xs relative">
                <div className="absolute top-0.5 -right-0.5 w-0.5 h-1.5 border-r border-[#54301B] rounded-r-xs" />
              </div>
            </div>

            {/* Pink Dispatch Gift Package */}
            <div className="w-7 h-5 bg-[#FF4081] border-2 border-[#C2185B] rounded-xs relative flex items-center justify-center shadow-xs">
              <div className="w-2 h-full bg-[#FCE4EC]" />
              <div className="absolute inset-y-1.5 inset-x-0 h-1.5 bg-[#FCE4EC]" />
            </div>
          </div>

          {/* Table Surface & Legs */}
          <div className="w-16 sm:w-18 h-1.5 bg-[#8D5B3A] border-t border-[#54301B] shadow-xs" />
          <div className="w-14 sm:w-16 h-5 flex justify-between px-1">
            <div className="w-1 h-full bg-[#6D4125]" />
            <div className="w-1 h-full bg-[#6D4125]" />
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          CONTACT
        </div>
      </div>
    </div>
  );
}