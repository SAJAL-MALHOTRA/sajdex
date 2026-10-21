'use client';

import { useSound } from '@/hooks/useSound';

interface RoomProjectsProps {
  onOpen: () => void;
  isActive: boolean;
  onOpenProjectModal?: (id: string) => void;
}

export default function RoomProjects({ onOpen, isActive, onOpenProjectModal }: RoomProjectsProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#FFF3E0] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="Explore Projects Studio"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Kitchenette / Dev Workstation Counters & Refrigerator */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1 px-1">
        {/* White Kitchen Stove / Workbench with Teapot */}
        <div className="relative flex flex-col items-center">
          {/* Teapot / Kettle */}
          <div className="relative flex flex-col items-center -mb-0.5">
            <span className="text-[6px] text-amber-600 animate-steam leading-none">~</span>
            <div className="w-3.5 h-3 bg-[#FFB74D] border border-[#E65100] rounded-t-full relative">
              <div className="absolute top-0.5 -right-1 w-1 h-1.5 border-r border-[#E65100] rounded-r-xs" />
            </div>
          </div>

          {/* Counter Top & Knobs */}
          <div className="w-14 sm:w-16 h-8 bg-white border-2 border-[#54301B] rounded-t-xs p-1 flex flex-col justify-between shadow-xs">
            <div className="flex gap-2 justify-center">
              <span className="w-2 h-2 rounded-full bg-[#CFD8DC] border border-[#90A4AE]" />
              <span className="w-2 h-2 rounded-full bg-[#CFD8DC] border border-[#90A4AE]" />
            </div>
            <div className="w-full h-2 bg-[#ECEFF1] rounded-xs border border-[#CFD8DC]" />
          </div>
        </div>

        {/* Tall Double-Door Refrigerator */}
        <div className="w-8 sm:w-9 h-14 bg-white border-2 border-[#54301B] rounded-t-xs p-0.5 shadow-xs flex flex-col justify-between">
          <div className="h-5 border-b-2 border-[#54301B] relative">
            <div className="absolute right-0.5 bottom-1 w-0.5 h-1.5 bg-[#78909C] rounded-xs" />
          </div>
          <div className="flex-1 relative pt-1">
            <div className="absolute right-0.5 top-1 w-0.5 h-2 bg-[#78909C] rounded-xs" />
          </div>
        </div>
      </div>

      {/* Room Label Pill */}
      <div className="absolute bottom-4 left-2 z-30">
        <div className="px-2 py-0.5 rounded bg-[#170E21] border border-[#FF6B9D]/60 text-white font-pixel text-[9px] sm:text-[10px] tracking-wider group-hover:bg-[#FF4081] transition-colors shadow-md">
          PROJECTS
        </div>
      </div>
    </div>
  );
}