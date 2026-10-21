'use client';

import { useSound } from '@/hooks/useSound';

interface BedroomRoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function BedroomRoom({ onOpen, isActive }: BedroomRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-wallpaper-bedroom rounded-tl-xl border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 01: Bedroom (About Me)"
    >
      {/* Wooden Floorboard Base */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-wood-floor border-t-2 border-[#26150D] z-10" />

      {/* Warm Ambient Room Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D46A88]/5 to-[#FFE082]/10 pointer-events-none" />

      {/* Ceiling String Lights */}
      <div className="absolute top-1 inset-x-3 flex justify-around pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#FFE082] animate-twinkle"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}
      </div>

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#1F132B]/90 border border-[#D46A88]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#D46A88] transition-colors">
          [ 01 BEDROOM ]
        </div>
      </div>

      {/* Wall Decor: NIT Jalandhar Pennant & Plant Shelf */}
      <div className="relative z-10 flex justify-between items-start mt-1 px-1">
        <div className="px-1.5 py-0.5 bg-[#170E21] border border-[#D46A88]/40 rounded-xs shadow-xs text-center">
          <div className="font-pixel text-[7px] text-[#F2ACB9] leading-none">NIT JALANDHAR</div>
          <div className="text-[6px] font-mono text-[#A78BFA] leading-tight">IT · 2023-27</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-0.5 mb-0.5">
            <span className="w-1 h-2 bg-[#5BA865] rounded-t-full" />
            <span className="w-1 h-2.5 bg-[#4A8F53] rounded-t-full" />
          </div>
          <div className="w-2.5 h-2 bg-[#C27D56] rounded-b-xs" />
        </div>
      </div>

      {/* Main Furniture: Bed, Rug, Study Desk & Laptop */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Bed with Dusty Rose Quilt & Cream Pillow */}
        <div className="relative flex items-end">
          <div className="w-1.5 h-12 bg-[#4E2D1A] border-l border-t border-[#361F12] rounded-t-xs" />
          <div className="relative w-15 sm:w-18 h-8 bg-[#FFF6E5] border-t border-r border-[#361F12] rounded-tr-xs shadow-xs overflow-hidden">
            <div className="absolute top-1 left-1 w-4 h-2.5 bg-white rounded-xs border border-[#E0D5C3]" />
            <div className="absolute inset-y-0 right-0 left-3 bg-[#D46A88] border-l border-[#A64A64] flex items-center justify-around px-1">
              <div className="w-[1px] h-full bg-[#F2ACB9]/30" />
              <div className="w-[1px] h-full bg-[#F2ACB9]/30" />
            </div>
            <div className="absolute top-0 bottom-0 left-3 w-1 bg-[#F2ACB9] border-r border-[#A64A64]" />
          </div>
          <div className="w-1 h-7 bg-[#4E2D1A] border-r border-t border-[#361F12] rounded-t-xs" />
        </div>

        {/* Cozy Rug */}
        <div className="absolute bottom-[-1px] left-8 w-14 h-2 bg-[#D46A88]/30 rounded-full border border-[#D46A88]/40 -z-10" />

        {/* Study Desk with Glowing Laptop & Lamp */}
        <div className="relative flex flex-col items-center">
          <div className="relative self-end mr-0.5 flex flex-col items-center">
            <div className="w-2.5 h-1.5 bg-[#FFE082] border border-[#D4A33B] rounded-t-xs relative">
              <div className="absolute top-1.5 -left-1.5 w-6 h-6 bg-yellow-100/15 rounded-full blur-xs pointer-events-none" />
            </div>
            <div className="w-0.5 h-2.5 bg-neutral-400" />
          </div>

          <div className="w-5 h-3.5 bg-[#170E21] border border-[#D46A88] rounded-t-xs flex items-center justify-center shadow-xs">
            <span className="text-[5px] font-mono text-[#A78BFA]">&gt;_</span>
          </div>

          <div className="w-12 sm:w-14 h-1.5 bg-[#6D4C3D] border-t border-[#8D6553] rounded-xs shadow-xs" />
          <div className="w-10 sm:w-12 flex justify-between">
            <div className="w-1 h-4 bg-[#4E342A]" />
            <div className="w-1 h-4 bg-[#4E342A]" />
          </div>
        </div>
      </div>
    </div>
  );
}