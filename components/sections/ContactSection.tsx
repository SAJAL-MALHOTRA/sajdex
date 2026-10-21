'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function ContactSection() {
  const { playClick, playHover } = useSound();

  const links = [
    { label: 'Email', value: profile.links.email, url: `mailto:${profile.links.email}` },
    { label: 'GitHub', value: 'github.com/sajal', url: profile.links.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/sajal', url: profile.links.linkedin },
    { label: 'X', value: '@sajal', url: profile.links.twitter },
  ];

  return (
    <div className="w-full space-y-12 select-text">
      
      {/* ─── SECTION HEADER ─── */}
      <div className="border-b border-[#202123] pb-4 font-mono text-xs text-[#8C8D8A]">
        <span className="text-[#E5484D] font-bold">04 —</span>
      </div>

      {/* ─── MAIN GRID: HEADLINE (LEFT) + PARAGRAPH & LINKS (RIGHT) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Oversized Emotional Statement */}
        <div className="lg:col-span-7 space-y-0 select-none">
          <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.4rem] tracking-tight text-[#F2F1ED] leading-[0.94]">
            Let&apos;s make
          </h2>
          <h2 className="font-serif-editorial italic font-normal text-5xl sm:text-7xl lg:text-[5.7rem] tracking-tight text-[#F2F1ED] leading-[0.96] -mt-1 sm:-mt-2">
            something useful.
          </h2>
        </div>

        {/* Right: Narrative & Direct Channel Links */}
        <div className="lg:col-span-5 space-y-6 pt-2">
          <p className="font-sans text-base sm:text-lg text-[#8C8D8A] leading-relaxed">
            Always open to thoughtful conversations, collaborations, and new opportunities.
          </p>

          <div className="space-y-1 border-t border-[#202123] pt-4 font-mono text-xs">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center justify-between py-2.5 text-[#8C8D8A] hover:text-[#F2F1ED] transition-colors border-b border-[#202123]/60 group cursor-pointer"
              >
                <span className="font-medium text-sm font-sans">{link.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#555755] hidden sm:inline">{link.value}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-[#555755] group-hover:text-[#E5484D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>

      {/* ─── BOTTOM METADATA COPYRIGHT ─── */}
      <div className="pt-10 border-t border-[#202123] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-[#555755] uppercase tracking-wider">
        <span>© {new Date().getFullYear()} SAJAL MALHOTRA / ALL RIGHTS RESERVED</span>
        <span>DEVDEX WORKSTATION // RELEASE 2026.1</span>
      </div>

    </div>
  );
}
