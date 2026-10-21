'use client';

import { useSound } from '@/hooks/useSound';

interface RoomStaircaseProps {
  onOpen?: () => void;
  isActive?: boolean;
}

export default function RoomStaircase({ onOpen, isActive }: RoomStaircaseProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        if (onOpen) onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full bg-[#FAF2E1] border-2 transition-all duration-200 group cursor-pointer overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 ${
        isActive
          ? 'border-[#FF6B9D] ring-2 ring-[#FF6B9D]/60 shadow-[0_0_12px_rgba(255,107,157,0.4)]'
          : 'border-[#7E573C] hover:border-[#FF6B9D]'
      }`}
      title="The Staircase // Connects Ground, Studio & Attic"
    >
      {/* Wooden Floor Strip */}
      <div className="absolute bottom-0 inset-x-0 h-3 bg-[#A66E4E] border-t border-[#6E4226] z-10" />

      {/* Ascending Wooden Staircase (from bottom-left to top-right) */}
      <div className="relative z-20 w-full h-full flex items-end justify-center pb-2">
        <svg
          viewBox="0 0 160 100"
          className="w-full h-full max-h-[85%] drop-shadow-xs"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Staircase Steps */}
          <rect x="15" y="80" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="30" y="72" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="45" y="64" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="60" y="56" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="75" y="48" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="90" y="40" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="105" y="32" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="120" y="24" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />
          <rect x="135" y="16" width="16" height="8" fill="#B87B52" stroke="#6E4226" strokeWidth="1.5" />

          {/* Banister Handrail */}
          <line
            x1="18"
            y1="68"
            x2="148"
            y2="4"
            stroke="#54301B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Banister Uprights */}
          <line x1="25" y1="80" x2="25" y2="62" stroke="#7E573C" strokeWidth="2" />
          <line x1="55" y1="64" x2="55" y2="46" stroke="#7E573C" strokeWidth="2" />
          <line x1="85" y1="48" x2="85" y2="30" stroke="#7E573C" strokeWidth="2" />
          <line x1="115" y1="32" x2="115" y2="14" stroke="#7E573C" strokeWidth="2" />
          <line x1="145" y1="16" x2="145" y2="4" stroke="#7E573C" strokeWidth="2" />
        </svg>
      </div>

      {/* Subtle Staircase Floor Indicator */}
      <div className="absolute top-2 inset-x-0 flex justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-pixel text-[9px] text-[#8D5B3A] bg-[#FFF5E4] px-1.5 py-0.5 rounded border border-[#8D5B3A]/30">
          ▲ STAIRWAY ▲
        </span>
      </div>
    </div>
  );
}