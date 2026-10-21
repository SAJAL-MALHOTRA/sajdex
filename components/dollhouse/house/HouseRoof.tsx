'use client';

export default function HouseRoof() {
  return (
    <div className="relative w-full h-14 sm:h-16 md:h-18 overflow-visible pointer-events-none select-none z-10">
      {/* Brick Chimney on the RIGHT side (matching reference image) */}
      <div className="absolute -top-3 right-14 sm:right-20 md:right-24 z-10 flex flex-col items-center">
        {/* Animated Smoke Puffs */}
        <div className="relative w-4 h-5 mb-0.5">
          <div className="absolute bottom-0 left-0.5 w-2 h-2 bg-white/40 rounded-full animate-smoke" />
          <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 bg-white/30 rounded-full animate-smoke" style={{ animationDelay: '0.9s' }} />
          <div className="absolute bottom-3 left-0 w-3 h-3 bg-white/20 rounded-full animate-smoke" style={{ animationDelay: '1.7s' }} />
        </div>

        {/* Chimney Cap & Brick Shaft */}
        <div className="w-6 sm:w-7 h-1.5 bg-[#8C3228] border-t border-[#BA4E42] rounded-xs shadow-xs" />
        <div className="w-4.5 sm:w-5 h-6 sm:h-8 bg-[#A33D32] border-x-2 border-[#78281F] shadow-md flex flex-col justify-around py-0.5">
          <div className="w-full h-[1px] bg-[#78281F]" />
          <div className="w-full h-[1px] bg-[#78281F]" />
        </div>
      </div>

      {/* Main Triangular Pitch Gable Roof (Terracotta / Burnt Brick Red) */}
      <div className="absolute bottom-0 inset-x-0 h-12 sm:h-14 md:h-16">
        <svg
          viewBox="0 0 1000 120"
          className="w-full h-full drop-shadow-md"
          preserveAspectRatio="none"
        >
          {/* Terracotta Gable Roof Polygon */}
          <polygon
            points="0,120 500,8 1000,120"
            fill="#B54D40"
            stroke="#8E3529"
            strokeWidth="3"
          />
          {/* Subtle Shingle Highlight Lines */}
          <line x1="60" y1="110" x2="500" y2="18" stroke="#C95F52" strokeWidth="1.5" />
          <line x1="940" y1="110" x2="500" y2="18" stroke="#9A372C" strokeWidth="1.5" />
          <line x1="130" y1="115" x2="500" y2="28" stroke="#C95F52" strokeWidth="1" opacity="0.6" />
          <line x1="870" y1="115" x2="500" y2="28" stroke="#9A372C" strokeWidth="1" opacity="0.6" />
        </svg>

        {/* Overhanging Eaves Fascia Board */}
        <div className="absolute bottom-0 inset-x-0 h-1.5 sm:h-2 bg-[#7E2D22] border-t border-[#9C3A2E] shadow-sm" />
      </div>
    </div>
  );
}