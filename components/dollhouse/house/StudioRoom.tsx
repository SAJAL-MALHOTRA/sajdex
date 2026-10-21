'use client';

import { useSound } from '@/hooks/useSound';

interface StudioRoomProps {
  onOpen: () => void;
  isActive: boolean;
  onOpenProjectModal?: (id: string) => void;
}

export default function StudioRoom({ onOpen, isActive, onOpenProjectModal }: StudioRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-wallpaper-studio border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 02: Dev Studio (Projects)"
    >
      {/* Wooden Floorboard Base */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-wood-floor border-t-2 border-[#1E110A] z-10" />

      {/* Cyber Blue Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/10 via-transparent to-[#D46A88]/10 pointer-events-none" />

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#131722]/90 border border-[#60A5FA]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#3B82F6] transition-colors">
          [ 02 STUDIO ]
        </div>
      </div>

      {/* Wall Decor: Project Cards on Corkboard */}
      <div className="relative z-10 flex justify-between items-start mt-0.5 px-1">
        <div className="p-1 bg-[#6D5348] border border-[#4E3931] rounded-xs shadow-xs flex gap-1 items-center">
          <div
            onClick={(e) => {
              if (onOpenProjectModal) {
                e.stopPropagation();
                playClick();
                onOpenProjectModal('OBJ-027');
              }
            }}
            className="px-1 py-0.5 bg-[#FFF9C4] border border-[#FBC02D] rounded-xs hover:scale-105 transition-transform"
            title="Open Pairfect Case Study"
          >
            <span className="text-[5px] font-pixel text-[#D97706] font-bold">PAIRFECT</span>
          </div>

          <div
            onClick={(e) => {
              if (onOpenProjectModal) {
                e.stopPropagation();
                playClick();
                onOpenProjectModal('OBJ-026');
              }
            }}
            className="px-1 py-0.5 bg-[#EDE9FE] border border-[#C4B5FD] rounded-xs hover:scale-105 transition-transform"
            title="Open Thinkfolio Case Study"
          >
            <span className="text-[5px] font-pixel text-[#6D28D9] font-bold">THINKFOLIO</span>
          </div>
        </div>

        <div className="bg-[#121620] border border-[#D46A88]/50 px-1 py-0.5 rounded-xs">
          <span className="font-mono text-[7px] text-[#F2ACB9]">DEV: ACTIVE</span>
        </div>
      </div>

      {/* Main Furniture: Dual Monitor Setup, Server Tower & Office Chair */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Server Tower */}
        <div className="w-5 sm:w-6 h-10 bg-[#12141A] border-2 border-[#282E3D] rounded-xs p-0.5 shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse" />
            <span className="w-1.5 h-0.5 bg-[#3B455B]" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full border border-[#38BDF8] flex items-center justify-center animate-spin">
              <span className="w-1 h-1 bg-[#38BDF8]/40 rounded-full" />
            </div>
            <div className="w-3 h-3 rounded-full border border-[#D46A88] flex items-center justify-center animate-spin">
              <span className="w-1 h-1 bg-[#D46A88]/40 rounded-full" />
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#282E3D]" />
        </div>

        {/* Dual Monitors on Desk */}
        <div className="relative flex flex-col items-center flex-1 max-w-[130px] sm:max-w-[150px] mx-1">
          <div className="flex items-end justify-center gap-1 -mb-0.5">
            {/* Monitor 1: Code Screen */}
            <div className="w-11 sm:w-13 h-8 bg-[#0D1017] border border-[#38BDF8] rounded-t-xs p-0.5 shadow-xs flex flex-col justify-between">
              <span className="text-[4px] font-mono text-[#38BDF8]">main.tsx</span>
              <div className="space-y-0.5 py-0.5">
                <div className="w-7 h-[1.5px] bg-[#38BDF8]" />
                <div className="w-9 h-[1.5px] bg-[#F2ACB9] ml-1" />
                <div className="w-5 h-[1.5px] bg-[#34D399] ml-1.5" />
              </div>
              <span className="text-[4px] font-mono text-[#10B981]">&gt; compiled</span>
            </div>

            {/* Monitor 2: Live App */}
            <div className="w-10 sm:w-12 h-7 bg-[#140E1E] border border-[#D46A88] rounded-t-xs p-0.5 shadow-xs flex flex-col justify-between">
              <span className="text-[4px] font-mono text-[#F2ACB9]">Pairfect:3000</span>
              <div className="w-5 h-1 bg-[#D46A88]/70 rounded-xs mx-auto" />
              <span className="text-[4px] font-mono text-[#D46A88]">200 OK</span>
            </div>
          </div>

          {/* Keyboard & Mouse on Desk Surface */}
          <div className="w-full flex items-center justify-center gap-1 -mb-0.5 z-10">
            <div className="w-12 sm:w-14 h-1.5 bg-[#1F2430] border border-[#475569] rounded-xs flex items-center justify-center">
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#38BDF8] to-[#D46A88] opacity-60" />
            </div>
            <div className="w-1.5 h-2 bg-[#334155] rounded-full" />
          </div>

          {/* Heavy Desk */}
          <div className="w-full h-1.5 bg-[#422B22] border-t border-[#6E493B] rounded-xs shadow-xs" />
          <div className="w-full flex justify-between px-1">
            <div className="w-1 h-4 bg-[#311F18]" />
            <div className="w-1 h-4 bg-[#311F18]" />
          </div>
        </div>

        {/* Office Chair */}
        <div className="relative flex flex-col items-center mb-0.5">
          <div className="w-5 h-6 bg-[#1F2937] border-2 border-[#374151] rounded-t-sm shadow-xs" />
          <div className="w-6 h-1.5 bg-[#374151] rounded-xs" />
          <div className="w-1 h-2 bg-[#6B7280]" />
          <div className="w-5 h-0.5 bg-[#1F2937] rounded-full" />
        </div>
      </div>
    </div>
  );
}