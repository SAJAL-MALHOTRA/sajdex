'use client';

import { useSound } from '@/hooks/useSound';
import { Download } from 'lucide-react';
import { profile } from '@/data/profile';

interface GarageRoomProps {
  onOpen: () => void;
  isActive: boolean;
}

export default function GarageRoom({ onOpen, isActive }: GarageRoomProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      onClick={() => {
        playClick();
        onOpen();
      }}
      onMouseEnter={playHover}
      className={`relative w-full h-full pixel-pegboard-garage rounded-br-xl border-2 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between p-2.5 sm:p-3 ${
        isActive
          ? 'border-[#D46A88] ring-2 ring-[#D46A88]/50 shadow-[0_0_15px_rgba(212,106,136,0.35)]'
          : 'border-[#362144] hover:border-[#F2ACB9]'
      }`}
      title="Explore 06: Garage (Resume Archive)"
    >
      {/* Industrial Concrete Floor */}
      <div className="absolute bottom-0 inset-x-0 h-4 pixel-concrete-floor border-t-2 border-[#16181C] z-10" />

      {/* Industrial Amber Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F59E0B]/10 via-transparent to-transparent pointer-events-none" />

      {/* Single Clear Room Label */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="px-2 py-0.5 rounded bg-[#1A1D24]/90 border border-[#F59E0B]/50 text-white font-pixel text-[10px] tracking-wider pixel-bevel group-hover:bg-[#D97706] transition-colors">
          [ 06 GARAGE ]
        </div>
      </div>

      {/* Wall Decor: Tool Rack & Wall-Hung Bicycle */}
      <div className="relative z-10 flex justify-between items-start mt-0.5 px-1">
        <div className="p-1 bg-[#1E293B]/90 border border-[#334155] rounded-xs shadow-xs flex items-center gap-1">
          <div className="w-1 h-3.5 bg-[#94A3B8] rounded-full" />
          <div className="w-2 h-1 bg-[#475569] rounded-xs" />
          <div className="w-1 h-2 bg-[#EF4444] rounded-t-xs" />
        </div>

        <div className="relative w-15 h-6 flex items-center justify-between">
          <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
          </div>
          <div className="absolute inset-x-1.5 top-1.5 h-0.5 bg-[#D46A88] rounded-xs rotate-[-10deg]" />
          <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center">
            <div className="w-1 h-1 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Furniture: Retro Sports Coupe Car & Workbench with Resume Dossier */}
      <div className="relative z-20 flex items-end justify-between mt-auto mb-1.5 sm:mb-2 px-1">
        {/* Retro Sports Coupe Car */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-14 h-4 bg-[#2D162B] rounded-t-md border-t-2 border-x-2 border-[#D46A88] flex items-center justify-around px-0.5">
            <div className="w-4 h-2.5 bg-[#38BDF8]/60 rounded-tl-xs" />
            <div className="w-5 h-2.5 bg-[#38BDF8]/60 rounded-tr-xs" />
          </div>

          <div className="relative w-24 sm:w-28 h-5 bg-[#9E2A4B] border-t-2 border-x-2 border-[#D46A88] rounded-xs shadow-md flex items-center justify-between px-1">
            <div className="w-1.5 h-1.5 bg-[#FEF08A] rounded-xs shadow-[0_0_4px_#FEF08A]" />
            <div className="w-10 h-0.5 bg-white/70 rounded-xs" />
            <div className="w-1.5 h-1.5 bg-[#EF4444] rounded-xs" />
          </div>

          {/* Wheels */}
          <div className="w-20 sm:w-24 flex justify-between px-1.5 -mt-1.5 z-10">
            <div className="w-4 h-4 bg-[#18181B] rounded-full border-2 border-[#3F3F46] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
            </div>
            <div className="w-4 h-4 bg-[#18181B] rounded-full border-2 border-[#3F3F46] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Workbench with RESUME.PDF Folder */}
        <div className="relative flex flex-col items-center">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              playClick();
            }}
            className="flex items-center gap-1 mb-0.5 px-1.5 py-0.5 bg-[#FEF3C7] hover:bg-[#FDE68A] border border-[#F59E0B] rounded-xs shadow-xs hover:scale-105 transition-transform"
            title="Download Sajal's Résumé PDF"
          >
            <Download size={8} className="text-[#B45309]" />
            <span className="font-pixel text-[6px] text-[#B45309] font-bold">RESUME.PDF</span>
          </a>

          <div className="w-14 sm:w-16 h-1.5 bg-[#4E342E] border-t border-[#795548] rounded-xs shadow-xs" />
          <div className="w-12 sm:w-14 flex justify-between">
            <div className="w-1.5 h-5 bg-[#311F18]" />
            <div className="w-1.5 h-5 bg-[#311F18]" />
          </div>
        </div>
      </div>
    </div>
  );
}