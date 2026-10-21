'use client';

import { useSound } from '@/hooks/useSound';

interface WardrobeRoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function WardrobeRoom({ onOpen, isActive }: WardrobeRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-wallpaper-wardrobe rounded-tr-xl border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 04: Wardrobe (Experience)"
    >
      {/* Light Wood Floorboard Base */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-wood-light border-t-2 border-[#24130A] z-10" />

      {/* Warm Rose Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#D46A88]/10 via-transparent to-[#A78BFA]/10 pointer-events-none" />

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#271424]/90 border border-[#F2ACB9]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#D46A88] transition-colors">
          [ 04 WARDROBE ]
        </div>
      </div>

      {/* Wall Decor: Timeline Milestone Badges */}
      <div className="relative z-10 flex justify-between items-start mt-0.5 px-1">
        <div className="flex gap-1">
          <div className="px-1 py-0.5 bg-[#1C0D1B] border border-[#D46A88]/40 rounded-xs text-[6px] font-mono text-[#F2ACB9]">
            EXP-01: NITJ
          </div>
          <div className="px-1 py-0.5 bg-[#1C0D1B] border border-[#D46A88]/40 rounded-xs text-[6px] font-mono text-[#A78BFA]">
            EXP-02: PAIRFECT
          </div>
        </div>
      </div>

      {/* Main Furniture: Clothes Rack with Hanging Hoodies, Vanity Mirror, Milestone Trunk */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Full-Length Vanity Mirror */}
        <div className="relative flex flex-col items-center mr-1">
          <div className="w-6 h-14 bg-[#E092A6] border-2 border-[#A64A64] rounded-t-xs p-0.5 shadow-md relative">
            <div className="w-full h-full bg-gradient-to-b from-[#EDE9FE]/50 to-[#DDD6FE]/70 rounded-t-xs relative overflow-hidden">
              <div className="absolute top-2 -left-2 w-6 h-0.5 bg-white/40 rotate-45" />
            </div>
            {/* Vanity Bulbs */}
            <div className="absolute -top-1 inset-x-0.5 flex justify-between">
              <span className="w-1 h-1 bg-[#FEF08A] rounded-full shadow-xs" />
              <span className="w-1 h-1 bg-[#FEF08A] rounded-full shadow-xs" />
            </div>
          </div>
          <div className="w-8 h-1 bg-[#83263E] rounded-full mt-0.5" />
        </div>

        {/* Clothing Rack with Developer Hoodies */}
        <div className="relative flex flex-col items-center flex-1 max-w-[100px] sm:max-w-[120px] mx-1">
          <div className="w-full h-1 bg-[#64748B] border-t border-[#94A3B8] rounded-xs relative">
            <div className="absolute top-1 inset-x-1 flex justify-around items-start">
              {/* Black Tech Zip-Up */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-300 rotate-45" />
                <div className="w-4 h-7 bg-[#1E293B] border border-[#334155] rounded-xs" />
              </div>

              {/* Pink Pairfect Hoodie */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-300 rotate-45" />
                <div className="w-4 h-6.5 bg-[#D46A88] border border-[#A64A64] rounded-xs flex items-center justify-center">
                  <span className="text-[3px] font-pixel text-white">PF</span>
                </div>
              </div>

              {/* Collegiate NIT Hoodie */}
              <div className="flex flex-col items-center">
                <div className="w-1 h-1 border-t border-l border-slate-300 rotate-45" />
                <div className="w-4 h-7 bg-[#64748B] border border-[#475569] rounded-xs flex items-center justify-center">
                  <span className="text-[3px] font-mono text-white font-bold">NIT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-10 flex justify-between px-0.5 pointer-events-none">
            <div className="w-1 h-full bg-[#475569]" />
            <div className="w-1 h-full bg-[#475569]" />
          </div>

          <div className="w-full h-1.5 bg-[#64748B] rounded-xs" />
        </div>

        {/* Leather Milestone Archive Trunk */}
        <div className="relative flex flex-col items-center">
          <div className="w-9 sm:w-11 h-7 bg-[#5A3828] border-2 border-[#361F12] rounded-xs p-0.5 shadow-md flex flex-col justify-between">
            <div className="flex justify-around">
              <div className="w-1 h-1 bg-[#FBBF24] rounded-full" />
              <div className="w-1 h-1 bg-[#FBBF24] rounded-full" />
            </div>
            <div className="text-[4px] font-pixel text-[#FDE68A] text-center leading-none">
              ARCHIVE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}