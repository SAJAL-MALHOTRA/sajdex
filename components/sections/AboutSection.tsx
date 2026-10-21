'use client';

import { profile } from '@/data/profile';
import { experiences } from '@/data/experience';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function AboutSection() {
  const { playClick, playHover } = useSound();

  return (
    <div className="w-full space-y-12 sm:space-y-16 select-text">
      
      {/* ─── 1. ABOUT EDITORIAL SPLIT ─── */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#202123] pb-4 font-mono text-xs text-[#8C8D8A]">
          <span className="text-[#E5484D] font-bold">02 —</span>
          <h2 className="text-[#F2F1ED] font-semibold tracking-wide text-sm font-sans">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          
          {/* Left Large Statement (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-[#F2F1ED] font-bold leading-snug tracking-tight">
              I&apos;m an Information Technology undergraduate at NIT Jalandhar, building machine learning platforms, real-time products, and intuitive software.
            </h3>
          </div>

          {/* Right Detailed Narrative & Resume Trigger (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <p className="font-sans text-sm sm:text-base text-[#8C8D8A] leading-relaxed">
              My engineering focuses on autonomous multi-agent reasoning, low-latency client-server synchronization, and full-stack software built with extreme craftsmanship. I bridge the gap between academic research papers and robust production interfaces.
            </p>

            <div className="pt-1">
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0C0D0F] hover:bg-[#141516] border border-[#202123] hover:border-[#35373B] text-xs font-mono text-[#F2F1ED] transition-colors"
              >
                <span>READ RESUME</span>
                <ArrowUpRight size={13} className="text-[#E5484D]" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ─── 2. EXPERIENCE TIMELINE INDEX (CLEAN SEPARATORS, NO CARDS) ─── */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-[#202123] pb-3 font-mono text-[11px] text-[#555755] uppercase tracking-wider">
          <span>OPERATIONAL HISTORY / TIMELINE</span>
          <span>CHRONOLOGICAL [2023 — 2026]</span>
        </div>

        <div className="divide-y divide-[#202123]">
          {experiences.map((exp) => (
            <div key={exp.id} className="py-5 first:pt-0 space-y-2 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono text-xs">
                <div className="flex items-baseline gap-3">
                  <span className="text-[#E5484D] font-bold">{exp.id}</span>
                  <h4 className="font-display text-base font-bold text-[#F2F1ED] group-hover:text-white transition-colors">
                    {exp.role} <span className="text-[#8C8D8A] font-normal">@ {exp.organization}</span>
                  </h4>
                </div>

                <span className="text-[#555755] text-[11px] pl-7 sm:pl-0">
                  {exp.period} · {exp.location}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8C8D8A] font-sans leading-relaxed pl-7 max-w-2xl">
                {exp.summary}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
