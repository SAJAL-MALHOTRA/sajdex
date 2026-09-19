'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useSound } from '@/hooks/useSound';

const dotSections = [
  { id: 'trainer', label: 'Trainer / Hero' },
  { id: 'terminal', label: 'SajDex Terminal' },
  { id: 'builds', label: 'Selected Work' },
  { id: 'abilities', label: 'Capabilities' },
  { id: 'journey', label: 'Timeline' },
  { id: 'lab', label: 'Open Lab' },
  { id: 'about', label: 'Outside Code' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = dotSections.map((s) => s.id);

export default function SideDotNav() {
  const activeSection = useActiveSection(sectionIds);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { playHover, playClick } = useSound();

  const handleDotClick = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-5 select-none">
      {dotSections.map((sec) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredId === sec.id;
        const showTooltip = isHovered || isActive;

        return (
          <div
            key={sec.id}
            className="relative flex items-center group cursor-pointer p-1"
            onMouseEnter={() => {
              playHover();
              setHoveredId(sec.id);
            }}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleDotClick(sec.id)}
          >
            {/* Hover / Active Monospace Tooltip Pill (Bigger text & padding) */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 12, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 12, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-10 font-mono text-xs font-semibold text-[#F5F5F0] bg-[#0B0C0F] border border-[#1a1a1f] px-3.5 py-1.5 rounded-lg shadow-2xl whitespace-nowrap pointer-events-none"
                >
                  {sec.label}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Significantly Larger Circular Dot Indicator */}
            <motion.div
              animate={{
                scale: isActive ? 1.4 : isHovered ? 1.25 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`rounded-full transition-colors duration-200 ${
                isActive
                  ? 'w-5 h-5 bg-[#FF1A1A] ring-6 ring-[#FF1A1A]/30 shadow-[0_0_20px_rgba(255,26,26,0.9)]'
                  : isHovered
                  ? 'w-4 h-4 bg-[#F5F5F0]'
                  : 'w-3.5 h-3.5 bg-[#333338] hover:bg-[#888888]'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
