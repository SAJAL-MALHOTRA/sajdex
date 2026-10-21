'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, RotateCw, Monitor } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';
import { getAssetPath } from '@/utils/asset';

interface BadgeFrontProps {
  onFlip: () => void;
  onBadgeIn: (tab?: string) => void;
}

export default function BadgeFront({ onFlip, onBadgeIn }: BadgeFrontProps) {
  const { playClick, playHover } = useSound();

  return (
    <div className="relative w-full max-w-[390px] sm:max-w-[430px] rounded-[36px] bg-[#14151A] p-4 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] border border-[#232631] text-[#E5E7EB] font-mono select-none">
      
      {/* Molded Outer Bezel Rim */}
      <div className="absolute inset-1 rounded-[32px] border border-white/[0.04] pointer-events-none" />

      {/* Top Lanyard Slot Cutout */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-24 h-4 rounded-full bg-[#0A0B0E] border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Main Inner Card Surface */}
      <div className="rounded-[24px] bg-[#181A22] border border-[#282B37] p-4 sm:p-5 space-y-4 shadow-inner">
        
        {/* Row 1: Avatar + Verified Stamp + Department/Title */}
        <div className="grid grid-cols-12 gap-3.5 items-start">
          
          {/* Avatar Box with Viewfinder Brackets ┌ ┐ └ ┘ */}
          <div className="col-span-5 relative aspect-square rounded-xl bg-[#0F1015] border border-white/10 overflow-hidden flex items-center justify-center group">
            {/* Viewfinder Brackets */}
            <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/80" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/80" />
            <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/80" />
            <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/80" />

            {/* Stylized Illustrated Avatar */}
            <img
              src={getAssetPath('/avatar.png')}
              alt={profile.name}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-95"
              onError={(e) => {
                // High-fidelity fallback wireframe avatar matching the manga line-art in the image
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Fallback Vector Graphic if avatar image fails */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center pointer-events-none opacity-80">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center mb-1">
                <span className="text-lg font-bold text-white">SM</span>
              </div>
              <span className="text-[9px] text-[#8E92A2] tracking-wider">DEV // DX-042</span>
            </div>
          </div>

          {/* Department, Title & Verified Stamp */}
          <div className="col-span-7 flex flex-col justify-between h-full space-y-2.5">
            
            {/* VERIFIED Badge with Hazard Striping */}
            <div className="self-end text-right">
              <div className="px-3.5 py-1.5 rounded-sm bg-[#E5E7EB] text-[#111215] font-sans font-bold text-center leading-tight shadow">
                <div className="text-[10px] tracking-wider font-semibold">検証済み</div>
                <div className="text-[11px] tracking-widest font-black">VERIFIED</div>
              </div>
              {/* Hazard Stripes */}
              <div className="h-2 w-full mt-1 bg-[repeating-linear-gradient(45deg,#E5E7EB,#E5E7EB_3px,#181A22_3px,#181A22_6px)] opacity-90 rounded-xs" />
            </div>

            {/* Department */}
            <div className="border-t border-white/10 pt-1.5 text-right">
              <div className="text-[8px] text-[#717789] uppercase tracking-wider">所属部署 / DEPARTMENT</div>
              <div className="text-[11px] text-white font-bold leading-tight">情報工学科 // CS</div>
              <div className="text-[9px] text-[#9CA3AF] tracking-wider">NIT JALANDHAR</div>
            </div>

            {/* Title */}
            <div className="border-t border-white/10 pt-1.5 text-right">
              <div className="text-[8px] text-[#717789] uppercase tracking-wider">役職 / TITLE</div>
              <div className="text-[11px] text-white font-bold leading-tight">ソフトウェアエンジニア</div>
              <div className="text-[9px] text-[#9CA3AF] tracking-wider">SOFTWARE ENGINEER</div>
            </div>

          </div>
        </div>

        {/* Row 2: Name & Digital Signature Box */}
        <div className="grid grid-cols-12 rounded-xl overflow-hidden border border-[#2D313F]">
          
          {/* Japanese & English Name Banner */}
          <div className="col-span-8 bg-[#1F222D] p-3 flex flex-col justify-center space-y-0.5 border-r border-[#2D313F]">
            <div className="text-[8px] text-[#7E8597] uppercase tracking-widest">名前 / NAME</div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide font-sans">
              サジャル・マルホトラ
            </div>
            <div className="text-[10px] text-[#A6ACB9] tracking-widest font-semibold uppercase">
              {profile.name}
            </div>
          </div>

          {/* White Signature Card */}
          <div className="col-span-4 bg-[#E5E7EB] p-2.5 flex flex-col items-center justify-between text-[#111215]">
            {/* Stylized Digital Signature Curve */}
            <svg viewBox="0 0 100 36" className="w-full h-8 stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round opacity-90">
              <path d="M 8 26 C 20 8, 30 14, 40 22 C 50 28, 55 12, 65 16 C 75 20, 85 8, 92 18" />
              <path d="M 32 30 L 68 30" strokeWidth="1.5" />
            </svg>
            <div className="text-[8px] font-bold text-[#111215] tracking-wider border-t border-black/20 w-full text-center pt-0.5 uppercase">
              サイン / SIGNATURE
            </div>
          </div>

        </div>

        {/* Row 3: Technical 3x3 Metadata Grid with Center Emblem */}
        <div className="grid grid-cols-12 border border-[#2D313F] rounded-xl overflow-hidden text-[9px] sm:text-[10px]">
          
          {/* Left Column (3 Rows) */}
          <div className="col-span-5 divide-y divide-[#2D313F] bg-[#161821]">
            <div className="p-2 flex justify-between items-center hover:bg-white/5 transition-colors">
              <div>
                <div className="text-[7.5px] text-[#717789] uppercase">所属 / ORG</div>
                <div className="text-white font-bold">DEVDEX ↗</div>
              </div>
            </div>
            <div className="p-2 flex justify-between items-center hover:bg-white/5 transition-colors">
              <div>
                <div className="text-[7.5px] text-[#717789] uppercase">出身大学 / COLLEGE</div>
                <div className="text-white font-bold">NIT - JAL ↗</div>
              </div>
            </div>
            <div className="p-2 flex justify-between items-center hover:bg-white/5 transition-colors">
              <div>
                <div className="text-[7.5px] text-[#717789] uppercase">勤務地 / LOCATION</div>
                <div className="text-white font-bold">BLR // IND ↗</div>
              </div>
            </div>
          </div>

          {/* Center Emblem Column */}
          <div className="col-span-2 bg-[#1B1E29] border-x border-[#2D313F] flex items-center justify-center p-1">
            <div className="w-10 h-10 rounded-full bg-[#E5E7EB] text-[#111215] flex items-center justify-center shadow-md">
              <Compass size={18} className="stroke-[2.5]" />
            </div>
          </div>

          {/* Right Column (3 Rows - Socials) */}
          <div className="col-span-5 divide-y divide-[#2D313F] bg-[#161821] text-right">
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHover}
              className="p-2 block hover:bg-white/5 transition-colors"
            >
              <div className="text-[7.5px] text-[#717789] uppercase">X / TWITTER</div>
              <div className="text-white font-bold">@sajal_m ↗</div>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHover}
              className="p-2 block hover:bg-white/5 transition-colors"
            >
              <div className="text-[7.5px] text-[#717789] uppercase">LINKEDIN</div>
              <div className="text-white font-bold">in/sajal ↗</div>
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={playHover}
              className="p-2 block hover:bg-white/5 transition-colors"
            >
              <div className="text-[7.5px] text-[#717789] uppercase">GITHUB</div>
              <div className="text-white font-bold">sajal ↗</div>
            </a>
          </div>

        </div>

        {/* Row 4: Bottom Chamfered Engineering Strip */}
        <div className="relative pt-1 flex items-center justify-between text-[10px] font-bold text-[#E5E7EB]">
          <div className="tracking-widest text-[#8E92A2]">
            ///// &nbsp; / &nbsp; NITJ ENGINEERING &nbsp; / &nbsp; /////
          </div>
          <div className="px-2 py-0.5 rounded-sm bg-[#E5E7EB] text-[#111215] text-[9px] font-black tracking-wider uppercase">
            2026
          </div>
        </div>

      </div>

      {/* Floating Card Actions (Flip to Back + Badge In) */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={() => {
            playClick();
            onFlip();
          }}
          onMouseEnter={playHover}
          className="flex-1 py-2.5 px-4 rounded-xl bg-[#1A1C24] hover:bg-[#222531] border border-white/10 text-xs text-[#C5C9D6] hover:text-white font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow"
        >
          <RotateCw size={13} />
          <span>裏面 · FLIP TO REVERSE</span>
        </button>

        <button
          onClick={() => {
            playClick();
            onBadgeIn();
          }}
          onMouseEnter={playHover}
          className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-[#F3F4F6] text-[#111215] text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-[0.98]"
        >
          <Monitor size={13} />
          <span>入館 · BADGE IN →</span>
        </button>
      </div>

    </div>
  );
}
