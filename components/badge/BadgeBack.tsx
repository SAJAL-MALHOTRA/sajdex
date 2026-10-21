'use client';

import { motion } from 'framer-motion';
import { ArrowRight, RotateCw, Monitor, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

interface BadgeBackProps {
  onFlip: () => void;
  onBadgeIn: (tab?: string) => void;
}

export default function BadgeBack({ onFlip, onBadgeIn }: BadgeBackProps) {
  const { playClick, playHover } = useSound();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    navigator.clipboard.writeText(profile.email || 'sajal@devdex.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'experience', num: '01', ja: '経歴', en: 'EXPERIENCE', badge: '04 ROLES' },
    { id: 'projects', num: '02', ja: '個人開発', en: 'PERSONAL PROJECTS', badge: '04 BUILDS' },
    { id: 'achievements', num: '03', ja: '実績', en: 'ACHIEVEMENTS', badge: '05 WINS' },
    { id: 'connect', num: '04', ja: '連絡先', en: 'CONNECT WITH ME', badge: '07 CHANNELS' },
    { id: 'resume', num: '05', ja: '履歴書', en: 'RESUME', badge: 'VIEW PDF' },
  ];

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
      <div className="rounded-[24px] bg-[#181A22] border border-[#282B37] p-5 sm:p-6 space-y-5 shadow-inner">
        
        {/* Header Strip: Reverse & Personnel File + Collab Badge */}
        <div className="flex items-start justify-between border-b border-[#282B37] pb-4">
          <div className="space-y-0.5 text-left">
            <div className="text-[8.5px] text-[#7E8597] tracking-wider uppercase font-semibold">
              裏面 · REVERSE
            </div>
            <div className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
              職員記録
            </div>
            <div className="text-[10px] text-[#A6ACB9] tracking-widest font-semibold uppercase">
              PERSONNEL FILE
            </div>
          </div>

          {/* OPEN TO COLLAB Stamp with Hazard Striping */}
          <div className="text-right">
            <div className="px-3 py-1.5 rounded-sm bg-[#E5E7EB] text-[#111215] font-sans font-bold text-center leading-tight shadow">
              <div className="text-[9px] tracking-wider font-semibold">協業歓迎</div>
              <div className="text-[10px] tracking-widest font-black">OPEN TO COLLAB</div>
            </div>
            {/* Hazard Stripes */}
            <div className="h-2 w-full mt-1 bg-[repeating-linear-gradient(45deg,#E5E7EB,#E5E7EB_3px,#181A22_3px,#181A22_6px)] opacity-90 rounded-xs" />
          </div>
        </div>

        {/* Bio Summary Paragraph */}
        <p className="text-[11px] sm:text-xs text-[#9DA2B4] font-mono leading-relaxed text-left border-b border-[#282B37] pb-4">
          Software engineer building low-latency distributed systems and zero-knowledge protocols at NIT Jalandhar. Builder of Cybernauts Arena, Pairfect, and AgentVerse. Focused on real-time WebSockets, cryptographic proofs, and agentic workflows.
        </p>

        {/* 5-Item Navigation Menu List */}
        <div className="divide-y divide-[#282B37] border-y border-[#282B37]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                playClick();
                onBadgeIn(item.id);
              }}
              onMouseEnter={playHover}
              className="w-full py-3 flex items-center justify-between text-left group hover:bg-white/[0.03] px-1.5 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.num}
                </span>
                <div>
                  <div className="text-[8px] text-[#717789] group-hover:text-[#9DA2B4] transition-colors leading-none">
                    {item.ja}
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#E5E7EB] group-hover:text-white transition-colors tracking-wide">
                    {item.en}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#717789] group-hover:text-white font-mono tracking-wider transition-colors">
                <span>{item.badge}</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Section: Realistic Barcode + Contact Details */}
        <div className="pt-2 flex items-end justify-between gap-4">
          
          {/* Vertical Barcode Graphic */}
          <div className="space-y-1 text-left shrink-0">
            <div className="h-10 flex items-center gap-[2px] bg-[#E5E7EB] p-1.5 rounded-sm">
              <span className="w-[2px] h-full bg-[#111215]" />
              <span className="w-[1px] h-full bg-[#111215]" />
              <span className="w-[3px] h-full bg-[#111215]" />
              <span className="w-[1px] h-full bg-[#111215]" />
              <span className="w-[4px] h-full bg-[#111215]" />
              <span className="w-[2px] h-full bg-[#111215]" />
              <span className="w-[1px] h-full bg-[#111215]" />
              <span className="w-[3px] h-full bg-[#111215]" />
              <span className="w-[2px] h-full bg-[#111215]" />
              <span className="w-[1px] h-full bg-[#111215]" />
              <span className="w-[3px] h-full bg-[#111215]" />
              <span className="w-[2px] h-full bg-[#111215]" />
              <span className="w-[1px] h-full bg-[#111215]" />
              <span className="w-[4px] h-full bg-[#111215]" />
            </div>
            <div className="text-[8.5px] text-[#717789] font-mono tracking-widest">
              SM-NITJ-2026
            </div>
          </div>

          {/* If Found, Please Contact Box */}
          <div className="text-right space-y-1">
            <div className="text-[8px] text-[#717789] leading-tight">
              拾得された方は下記までご連絡ください
            </div>
            <div className="text-[8.5px] text-[#8E92A2] font-semibold tracking-wider">
              IF FOUND, PLEASE CONTACT
            </div>
            <button
              onClick={handleCopyEmail}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#101217] border border-white/10 hover:border-white/30 text-white text-[10px] font-mono transition-colors cursor-pointer"
            >
              <span>{profile.email}</span>
              {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} className="text-[#8E92A2]" />}
            </button>
          </div>

        </div>

      </div>

      {/* Floating Card Actions */}
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
          <span>表面 · FLIP TO FRONT</span>
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
