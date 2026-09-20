'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function ContactSection() {
  const { playClick, playHover } = useSound();

  const links = [
    { label: profile.links.email, url: `mailto:${profile.links.email}` },
    { label: 'GitHub', url: profile.links.github },
    { label: 'LinkedIn', url: profile.links.linkedin },
    { label: 'Twitter', url: profile.links.twitter },
  ];

  return (
    <div className="w-full space-y-12 select-text">
      
      {/* Section 04 Header */}
      <div className="border-b border-white/[0.08] pb-4 font-mono text-xs text-[#8E8E93]">
        <span className="text-[#EF4444] font-bold">04 —</span>
      </div>

      {/* Main Grid: Headline (Left) + Links (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Signature Dual-Font Call to Action */}
        <div className="lg:col-span-8 space-y-0 select-none">
          <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight text-[#F5F5F7] leading-[0.95]">
            Let&apos;s make
          </h2>
          <h2 className="font-serif-editorial italic font-normal text-5xl sm:text-7xl lg:text-[5.8rem] tracking-tight text-[#F5F5F7] leading-[0.95]">
            something useful.
          </h2>
        </div>

        {/* Right: Direct Link List */}
        <div className="lg:col-span-4 space-y-4 pt-2">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="flex items-center justify-between py-2 text-base font-sans text-[#8E8E93] hover:text-[#F5F5F7] transition-colors border-b border-white/[0.04] group cursor-pointer"
            >
              <span>{link.label}</span>
              <ArrowUpRight
                size={16}
                className="text-[#636366] group-hover:text-[#EF4444] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="pt-12 border-t border-white/[0.06] font-mono text-[11px] text-[#636366] tracking-wider uppercase">
        <span>© {new Date().getFullYear()} SAJAL MALHOTRA / ALL RIGHTS RESERVED</span>
      </div>

    </div>
  );
}
