'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function RoomSkills({ onOpen, isActive }: RoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#FCE4EC] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Technical Skills & Alchemy Lab"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Vanity Mirror with Glowing Bulbs & Potion Bottles */}
      <div className="relative z-20 flex flex-col items-center mt-auto mb-1 w-full">
        {/* Glowing Circular Mirror with Marquee Bulbs */}
        <div className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#E0F7FA] border-2 border-[#FFD54F] shadow-[0_0_10px_rgba(255,213,79,0.5)] flex items-center justify-center -mb-2">
          {/* Mirror Reflection Glass */}
          <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-tr from-[#B2EBF2] to-white opacity-80" />
          
          {/* Perimeter Marquee Bulbs */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#FFF59D] border border-[#FBC02D] shadow-xs animate-pulse"
              style={{
                transform: `rotate(${deg}deg) translate(${22}px) rotate(-${deg}deg)`,
                animationDelay: `${(i * 0.15).toFixed(2)}s`,
              }}
            />
          ))}
        </div>

        {/* Vanity Tabletop & Legs */}
        <div className="relative w-20 sm:w-24 flex flex-col items-center">
          {/* Table Surface with Bottles */}
          <div className="w-full h-2 bg-[#D7CCC8] border border-[#8D6E63] rounded-xs shadow-xs flex items-end justify-around px-2 relative -mt-0.5">
            {/* Bottle 1: Cyan */}
            <div className="w-1.5 h-3 bg-[#00E5FF] border border-[#00B0FF] rounded-t-xs -mt-2 shadow-xs" title="React / Frontend" />
            {/* Bottle 2: Magenta */}
            <div className="w-1.5 h-3.5 bg-[#FF4081] border border-[#C2185B] rounded-t-full -mt-2.5 shadow-xs" title="Python / AI" />
            {/* Bottle 3: Yellow */}
            <div className="w-1.5 h-2.5 bg-[#FFD600] border border-[#FFAB00] rounded-t-xs -mt-1.5 shadow-xs" title="TypeScript" />
            {/* Bottle 4: Violet */}
            <div className="w-1.5 h-3 bg-[#7C4DFF] border border-[#651FFF] rounded-t-full -mt-2 shadow-xs" title="Cloud / DevOps" />
          </div>

          {/* Table Legs */}
          <div className="w-full h-5 flex justify-between px-2">
            <div className="w-1 h-full bg-[#A1887F] border-x border-[#6D4C41]" />
            <div className="w-1 h-full bg-[#A1887F] border-x border-[#6D4C41]" />
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          SKILLS
        </div>
      </div>
    </div>
  );
}