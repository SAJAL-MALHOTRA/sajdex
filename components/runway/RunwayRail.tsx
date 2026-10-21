'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface StationInfo {
  id: string;
  name: string;
}

interface RunwayRailProps {
  stations: StationInfo[];
  activeIndex: number;
  onSelectIndex: (idx: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function RunwayRail({
  stations,
  activeIndex,
  onSelectIndex,
  onPrev,
  onNext,
}: RunwayRailProps) {
  const { playClick, playHover } = useSound();

  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-[#08090A]/90 backdrop-blur-md border-t border-[#1A1C24] h-12 flex items-center justify-between px-3 sm:px-6 select-none font-mono text-xs">
      
      {/* Left Stepper */}
      <button
        onClick={() => {
          playClick();
          onPrev();
        }}
        disabled={activeIndex === 0}
        className={`flex items-center gap-1 px-2.5 py-1 rounded bg-[#12141A] border border-[#20232B] transition-colors ${
          activeIndex === 0 ? 'opacity-30 cursor-not-allowed text-[#555864]' : 'hover:bg-white hover:text-black text-white cursor-pointer'
        }`}
      >
        <ChevronLeft size={13} />
        <span className="hidden sm:inline text-[11px]">PREV</span>
      </button>

      {/* Center Station Scrubbing Rail */}
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto custom-scrollbar px-2 py-1 max-w-[80vw]">
        {stations.map((st, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={st.id}
              onClick={() => {
                playClick();
                onSelectIndex(idx);
              }}
              onMouseEnter={playHover}
              className={`px-2.5 py-1 rounded text-[11px] whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'bg-[#101217] hover:bg-[#1A1D26] text-[#7A7E8D] hover:text-white border border-[#1A1C24]'
              }`}
            >
              <span className="opacity-60 mr-1">0{idx}</span>
              <span className="uppercase">{st.name}</span>
            </button>
          );
        })}
      </div>

      {/* Right Stepper */}
      <button
        onClick={() => {
          playClick();
          onNext();
        }}
        disabled={activeIndex === stations.length - 1}
        className={`flex items-center gap-1 px-2.5 py-1 rounded bg-[#12141A] border border-[#20232B] transition-colors ${
          activeIndex === stations.length - 1 ? 'opacity-30 cursor-not-allowed text-[#555864]' : 'hover:bg-white hover:text-black text-white cursor-pointer'
        }`}
      >
        <span className="hidden sm:inline text-[11px]">NEXT</span>
        <ChevronRight size={13} />
      </button>

    </footer>
  );
}