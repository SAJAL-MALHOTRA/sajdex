'use client';

import { useSound } from '@/hooks/useSound';

interface KitchenRoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function KitchenRoom({ onOpen, isActive }: KitchenRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-wallpaper-kitchen rounded-bl-xl border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 05: Kitchen (Contact)"
    >
      {/* Terracotta/Cream Checkered Tile Floor */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-checker-floor border-t-2 border-[#4E2D1A] z-10" />

      {/* Warm Ambient Kitchen Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FFE082]/10 via-transparent to-transparent pointer-events-none" />

      {/* Hanging Pendant Lamp */}
      <div className="absolute top-0 left-1/3 flex flex-col items-center pointer-events-none z-10">
        <div className="w-[1px] h-2.5 bg-neutral-600" />
        <div className="w-4 h-1.5 bg-[#CBD5E1] rounded-t-full border border-neutral-400 relative">
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-yellow-100 rounded-full blur-[1px]" />
        </div>
      </div>

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#162524]/90 border border-[#2DD4BF]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#14B8A6] transition-colors">
          [ 05 KITCHEN ]
        </div>
      </div>

      {/* Wall Decor: Wall Clock & Mail Dispatch Box */}
      <div className="relative z-10 flex justify-between items-start mt-0.5 px-1">
        <div className="w-4.5 h-4.5 rounded-full bg-[#FFFBEB] border-2 border-[#4E2D1A] flex items-center justify-center shadow-xs">
          <div className="w-1.5 h-[1px] bg-[#1E293B] rotate-45" />
        </div>

        <div className="px-1.5 py-0.5 bg-[#0F766E] border border-[#115E59] rounded-xs shadow-xs text-center flex items-center gap-1">
          <span className="text-[7px]">✉</span>
          <span className="text-[5px] font-pixel text-white leading-none">INBOX OPEN</span>
        </div>
      </div>

      {/* Main Furniture: Retro Mint Fridge, Espresso Machine & Bistro Table */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Retro Mint Fridge */}
        <div className="relative flex flex-col items-center">
          <div className="w-8 sm:w-9 h-15 bg-[#5EEAD4] border-2 border-[#0F766E] rounded-t-md p-0.5 shadow-md flex flex-col justify-between">
            {/* Freezer Door */}
            <div className="h-5 bg-[#99F6E4] border-b-2 border-[#115E59] rounded-t-xs p-0.5 relative">
              <div className="absolute right-0.5 bottom-1 w-0.5 h-1.5 bg-white border border-neutral-400 rounded-xs" />
              <div className="w-2 h-2.5 bg-white border border-neutral-300 rounded-xs shadow-xs" />
            </div>
            {/* Lower Door with Sticky Note */}
            <div className="flex-1 bg-[#5EEAD4] pt-1 relative">
              <div className="absolute right-0.5 top-1 w-0.5 h-2 bg-white border border-neutral-400 rounded-xs" />
              <div className="w-2.5 h-2.5 bg-[#FEF08A] border border-[#FACC15] rounded-xs p-0.5 ml-0.5" />
            </div>
          </div>
        </div>

        {/* Counter with Espresso Machine */}
        <div className="relative flex flex-col items-center flex-1 max-w-[90px] sm:max-w-[100px] mx-1">
          <div className="relative flex flex-col items-center -mb-0.5">
            <span className="text-[6px] text-[#5EEAD4] animate-steam leading-none">~</span>
            <div className="w-7 h-6 bg-[#94A3B8] border-2 border-[#334155] rounded-t-xs p-0.5 shadow-xs flex flex-col justify-between items-center">
              <div className="flex justify-between w-full px-0.5">
                <span className="w-1 h-1 rounded-full bg-[#EF4444]" />
                <span className="w-1 h-1 rounded-full bg-[#EAB308]" />
              </div>
              <div className="w-3 h-1 bg-[#1E293B] rounded-xs" />
              <div className="w-1.5 h-1 bg-[#D46A88] rounded-xs" />
            </div>
          </div>

          <div className="w-full h-1.5 bg-[#E2E8F0] border-t border-white rounded-xs shadow-xs" />
          <div className="w-full h-5 bg-[#3F281E] border-t border-[#29170E] flex justify-around p-0.5">
            <div className="w-0.5 h-1.5 bg-[#CBD5E1]" />
            <div className="w-0.5 h-1.5 bg-[#CBD5E1]" />
          </div>
        </div>

        {/* Bistro Table with Steaming Mug */}
        <div className="relative flex flex-col items-center">
          <div className="relative flex flex-col items-center -mb-0.5">
            <span className="text-[5px] text-[#FFE082] animate-steam leading-none">~</span>
            <div className="w-2.5 h-2.5 bg-[#FFF7ED] rounded-xs border border-[#FDBA74]" />
          </div>
          <div className="w-10 h-1.5 bg-[#785444] rounded-full shadow-xs" />
          <div className="w-1 h-4 bg-[#1E293B]" />
          <div className="w-5 h-0.5 bg-[#1E293B] rounded-full" />
        </div>
      </div>
    </div>
  );
}