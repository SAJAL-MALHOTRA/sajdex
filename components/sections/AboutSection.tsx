'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function AboutSection() {
  const { playClick, playHover } = useSound();

  return (
    <div className="w-full space-y-12 select-text">
      
      {/* Section 02 Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs text-[#8E8E93]">
        <div className="flex items-center gap-2">
          <span className="text-[#EF4444] font-bold">02 —</span>
          <h2 className="text-[#F5F5F7] font-semibold tracking-wide text-sm font-sans">About & Journey</h2>
        </div>

        <span className="tracking-widest uppercase text-[11px] text-[#636366]">
          BACKGROUND & EDUCATION
        </span>
      </div>

      {/* Grid: Bio Paragraph (Left) + Timeline (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <p className="font-sans text-lg sm:text-xl text-[#F5F5F7] leading-relaxed">
            I&apos;m an Information Technology undergraduate at NIT Jalandhar, building machine learning platforms, real-time products, and intuitive software.
          </p>
          <p className="font-sans text-sm text-[#8E8E93] leading-relaxed">
            My work focuses on bridging the gap between cutting-edge AI research and production applications with high craft and low latency.
          </p>

          <div className="pt-2">
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-[#F5F5F7] transition-colors"
            >
              <span>READ RÉSUMÉ</span>
              <ArrowUpRight size={13} className="text-[#EF4444]" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 divide-y divide-white/[0.06]">
          {experiences.map((exp) => (
            <div key={exp.id} className="pt-6 first:pt-0 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#EF4444] font-semibold">{exp.id}</span>
                <span className="text-[#636366]">{exp.period}</span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#F5F5F7]">
                  {exp.role} <span className="text-[#8E8E93] font-normal">@ {exp.organization}</span>
                </h3>
                <p className="text-xs text-[#636366] font-mono">{exp.location}</p>
              </div>

              <p className="text-xs sm:text-sm text-[#8E8E93] font-sans leading-relaxed pt-1">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
