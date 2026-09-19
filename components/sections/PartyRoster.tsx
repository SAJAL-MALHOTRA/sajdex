'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { partyMembers, PartyMemberData } from '@/data/party';
import { useSound } from '@/hooks/useSound';
import { ChevronDown } from 'lucide-react';

export default function PartyRoster() {
  const [activeSlot, setActiveSlot] = useState<string>('01');
  const { playHover, playClick } = useSound();

  return (
    <section id="team" className="py-20 max-w-5xl mx-auto px-6 font-inter select-none">
      {/* Section Eyebrow & Heading */}
      <div className="mb-10 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
          <span className="font-pixel text-[8px] text-[#888888] tracking-widest uppercase">
            CURRENT PARTY
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#F5F5F0] tracking-tight uppercase">
          Active Builds.
        </h2>
        <p className="text-sm text-[#888888]">
          The core systems and applications I am actively building, researching, and maintaining.
        </p>
      </div>

      {/* 4 Interactive Build Rows */}
      <div className="space-y-3">
        {partyMembers.map((member: PartyMemberData) => {
          const isActive = activeSlot === member.slot;

          return (
            <motion.div
              key={member.slot}
              layout
              onClick={() => {
                playClick();
                setActiveSlot(isActive ? '' : member.slot);
              }}
              onMouseEnter={playHover}
              className={`rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                isActive
                  ? 'bg-[#0B0C0F] border-[#888888]/40 shadow-xl'
                  : 'bg-[#0B0C0F]/40 border-[#1a1a1f] hover:border-[#1a1a1f] hover:bg-[#0B0C0F]/80'
              }`}
            >
              {/* Row Header */}
              <div className="p-5 flex items-center justify-between gap-4">
                
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Slot Number */}
                  <span className="font-pixel text-[9px] text-[#888888] w-6">
                    {member.slot}
                  </span>

                  {/* Name & Ability */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-bold text-[#F5F5F0] uppercase tracking-tight">
                        {member.name}
                      </h3>
                      
                      {/* Type Badge */}
                      <span className="font-pixel text-[6px] px-2 py-0.5 rounded bg-[#111216] border border-[#1a1a1f] text-[#888888] tracking-wider">
                        {member.type}
                      </span>

                      {/* Status */}
                      <span className="font-mono text-[10px] text-emerald-400 bg-[#081a14] px-2 py-0.5 rounded border border-[#10B981]/30">
                        {member.status}
                      </span>
                    </div>

                    <p className="text-xs text-[#888888] mt-0.5 truncate">
                      FOCUS: <span className="text-[#F5F5F0] font-medium">{member.ability}</span>
                    </p>
                  </div>
                </div>

                {/* Right: Chevron */}
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#888888]"
                >
                  <ChevronDown size={18} />
                </motion.div>

              </div>

              {/* Expanded Party Member Details */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-5 pb-5 pt-1 border-t border-[#1a1a1f]/60 space-y-4"
                  >
                    <p className="text-xs text-[#888888] leading-relaxed max-w-2xl">
                      {member.description}
                    </p>

                    {/* Stack & Tools */}
                    <div className="space-y-1.5">
                      <span className="font-pixel text-[6px] text-[#888888] uppercase block">
                        STACK & TOOLS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {member.moves.map((move) => (
                          <span
                            key={move}
                            className="text-xs font-mono px-3 py-1 bg-[#111216] border border-[#1a1a1f] rounded-lg text-[#F5F5F0]"
                          >
                            {move}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
