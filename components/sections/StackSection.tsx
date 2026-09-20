'use client';

import { skills } from '@/data/skills';

export default function StackSection() {
  return (
    <div className="w-full space-y-12 select-text">
      
      {/* Section 03 Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs text-[#8E8E93]">
        <div className="flex items-center gap-2">
          <span className="text-[#EF4444] font-bold">03 —</span>
          <h2 className="text-[#F5F5F7] font-semibold tracking-wide text-sm font-sans">Technical stack</h2>
        </div>

        <span className="tracking-widest uppercase text-[11px] text-[#636366]">
          LANGUAGES & TOOLS
        </span>
      </div>

      {/* Stack Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.categories.map((cat, idx) => (
          <div key={cat.title} className="space-y-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#EF4444] font-semibold">0{idx + 1}</span>
              <span className="text-[#8E8E93] uppercase tracking-wider text-[11px]">{cat.title}</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {cat.items.map((item) => (
                <div key={item} className="text-[#F5F5F7] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#EF4444]/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
