'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomGarage({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#ECEFF1] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Resume & Garage"
    >
      {/* Concrete / Asphalt Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#607D8B] border-t border-[#455A64] z-10" />

      {/* Garage Roller Shutter Slats (Upper half) */}
      <div className="relative z-10 w-full px-2 pt-1 flex flex-col gap-1 opacity-70">
        <div className="w-full h-1 bg-[#B0BEC5] rounded-xs shadow-xs" />
        <div className="w-full h-1 bg-[#B0BEC5] rounded-xs shadow-xs" />
        <div className="w-full h-1 bg-[#B0BEC5] rounded-xs shadow-xs" />
        <div className="w-full h-1 bg-[#B0BEC5] rounded-xs shadow-xs" />
      </div>

      {/* Retro Pink Sports Coupe Car (Lower half, matching reference) */}
      <div className="relative z-20 flex flex-col items-center mt-auto mb-1 w-full">
        <div className="relative flex flex-col items-center group-hover:translate-x-0.5 transition-transform">
          {/* Car Roof & Tinted Windshield Dome */}
          <div className="w-12 sm:w-14 h-4 bg-white border-2 border-[#D81B60] rounded-t-full relative flex items-center justify-center overflow-hidden">
            <div className="w-8 sm:w-10 h-3 bg-[#80DEEA]/70 rounded-t-full" />
          </div>

          {/* Car Body */}
          <div className="w-20 sm:w-24 h-4 bg-[#FF4081] border-2 border-[#C2185B] rounded-md relative flex items-center justify-between px-1 shadow-xs">
            {/* Front Headlight */}
            <div className="w-1.5 h-1.5 bg-[#FFEB3B] rounded-full border border-[#FBC02D] shadow-[0_0_5px_#FFEB3B] group-hover:animate-ping" />
            {/* Side Door Trim */}
            <div className="w-8 h-[1px] bg-[#C2185B]" />
            {/* Rear Light */}
            <div className="w-1 h-1.5 bg-[#D50000] rounded-xs" />
          </div>

          {/* Wheels */}
          <div className="w-16 sm:w-19 flex justify-between px-1 -mt-1.5">
            {/* Front Wheel */}
            <div className="w-4 h-4 rounded-full bg-[#212121] border border-black flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CFD8DC]" />
            </div>
            {/* Rear Wheel */}
            <div className="w-4 h-4 rounded-full bg-[#212121] border border-black flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CFD8DC]" />
            </div>
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          RESUME
        </div>
      </div>
    </div>
  );
}