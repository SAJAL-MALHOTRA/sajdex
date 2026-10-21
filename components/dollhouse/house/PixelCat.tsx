'use client';

export default function PixelCat() {
  return (
    <div
      className="relative cursor-pointer group select-none inline-block"
      title="Sajal's cozy companion (Purring...)"
    >
      {/* Purr Floating Particle */}
      <div className="absolute -top-5 -right-2 text-[9px] font-pixel text-[#D46A88] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap animate-bounce bg-[#241630] px-1 py-0.5 rounded border border-[#D46A88]/40 z-20">
        purr~ ♡
      </div>

      {/* Sleeping Cat Sprite */}
      <div className="relative animate-cat-purr flex items-end">
        <div className="relative">
          {/* Velvet Cat Pillow */}
          <div className="w-9 h-3 bg-[#3F2039] rounded-full border border-[#D46A88]/50 shadow-xs" />
          
          {/* Sleeping Cat Body */}
          <div className="absolute -top-2.5 left-1 w-7 h-3.5 bg-[#FFF9F0] rounded-t-full border border-[#2A1633] shadow-xs">
            {/* Soft fur patch */}
            <div className="absolute top-0.5 right-1 w-2 h-1 bg-[#F2ACB9] rounded-full opacity-60" />
            
            {/* Cat Ears */}
            <div className="absolute -top-1 left-0.5 w-1.5 h-1.5 bg-[#FFF9F0] border-t border-l border-[#2A1633] rotate-45" />
            <div className="absolute -top-1 left-2.5 w-1.5 h-1.5 bg-[#FFF9F0] border-t border-r border-[#2A1633] rotate-45" />
            
            {/* Sleeping Eyes */}
            <div className="absolute top-1 left-1 flex gap-0.5">
              <span className="text-[6px] text-[#2A1633] font-mono leading-none">˘</span>
              <span className="text-[6px] text-[#2A1633] font-mono leading-none">˘</span>
            </div>
            
            {/* Tail */}
            <div className="absolute -bottom-0.5 -left-1 w-2 h-1 bg-[#FFF9F0] border-b border-l border-[#2A1633] rounded-bl-full" />
          </div>
        </div>
      </div>
    </div>
  );
}