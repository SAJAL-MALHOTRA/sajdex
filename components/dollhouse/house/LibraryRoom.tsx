'use client';

import { useSound } from '@/hooks/useSound';
import PixelCat from './PixelCat';

interface LibraryRoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function LibraryRoom({ onOpen, isActive }: LibraryRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-wallpaper-library border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 03: Library (Skills)"
    >
      {/* Wooden Floorboard Base */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-wood-floor border-t-2 border-[#1E110A] z-10" />

      {/* Warm Parchment Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFE082]/5 to-[#D46A88]/10 pointer-events-none" />

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#241322]/90 border border-[#C084FC]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#A855F7] transition-colors">
          [ 03 LIBRARY ]
        </div>
      </div>

      {/* Wall Decor: Arched Star Window & Tech Blueprint */}
      <div className="relative z-10 flex justify-between items-start mt-0.5 px-1">
        <div className="w-8 h-10 bg-[#0E0619] border-2 border-[#4C2849] rounded-t-full relative overflow-hidden shadow-xs">
          <div className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-[#FFF9C4] rounded-full" />
          <div className="absolute top-4 left-1.5 w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-[#4C2849]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-[1px] bg-[#4C2849]" />
          </div>
        </div>

        <div className="px-1.5 py-0.5 bg-[#211124] border border-[#D46A88]/40 rounded-xs shadow-xs text-center">
          <div className="text-[6px] font-pixel text-[#F2ACB9] leading-tight">TECH ARCHIVE</div>
          <div className="text-[5px] font-mono text-[#C084FC] leading-none">PY · C++ · TS · AI</div>
        </div>
      </div>

      {/* Main Furniture: Bookshelves with Books + Cat, Reading Armchair & Floor Lamp */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Floor Lamp */}
        <div className="relative flex flex-col items-center mr-1">
          <div className="w-4 h-2.5 bg-[#FDE68A] border border-[#F59E0B] rounded-t-xs shadow-xs" />
          <div className="w-0.5 h-12 bg-[#785444]" />
          <div className="w-3.5 h-1 bg-[#4E3429] rounded-full" />
        </div>

        {/* Velvet Reading Armchair */}
        <div className="relative flex flex-col items-center mr-1.5">
          <div className="w-9 h-9 bg-[#6B183C] border-2 border-[#8C2351] rounded-t-lg shadow-xs flex items-center justify-center">
            <div className="w-7 h-7 bg-[#8C2351] rounded-t-md" />
          </div>
          <div className="w-11 h-2.5 bg-[#8C2351] border-t border-[#A63264] rounded-xs shadow-xs" />
          <div className="w-9 flex justify-between">
            <div className="w-1 h-2 bg-[#4E3429]" />
            <div className="w-1 h-2 bg-[#4E3429]" />
          </div>
        </div>

        {/* Wooden Bookshelves with Books & Sleeping Pixel Cat */}
        <div className="relative flex flex-col items-center flex-1 max-w-[120px] sm:max-w-[140px]">
          <div className="w-full bg-[#422315] border-2 border-[#27140B] rounded-t-xs p-1 shadow-md space-y-1">
            {/* Top Shelf: Languages */}
            <div className="h-5 bg-[#31190E] border-b border-[#27140B] flex items-end justify-between px-1">
              <div className="flex items-end gap-0.5">
                <div className="w-2 h-4.5 bg-[#2563EB] border-t border-[#60A5FA] rounded-t-xs" title="Python" />
                <div className="w-1.5 h-4 bg-[#16A34A] border-t border-[#4ADE80] rounded-t-xs" title="C++" />
                <div className="w-2 h-4.5 bg-[#D97706] border-t border-[#FBBF24] rounded-t-xs" title="TypeScript" />
                <div className="w-1.5 h-3.5 bg-[#7C3AED] border-t border-[#A78BFA] rounded-t-xs" title="Next.js" />
              </div>
              <div className="w-2 h-1.5 bg-[#34D399] rounded-t-full" />
            </div>

            {/* Middle Shelf: AI & Frameworks + Sleeping Pixel Cat! */}
            <div className="h-5 bg-[#31190E] flex items-end justify-between px-1">
              <div className="mb-0.5">
                <PixelCat />
              </div>
              <div className="flex items-end gap-0.5">
                <div className="w-2 h-4.5 bg-[#DC2626] border-t border-[#F87171] rounded-t-xs" title="PyTorch" />
                <div className="w-1.5 h-4 bg-[#0891B2] border-t border-[#22D3EE] rounded-t-xs" title="LangGraph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}