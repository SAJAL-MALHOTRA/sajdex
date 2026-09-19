'use client';

import { motion } from 'framer-motion';

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
  delay?: number;
}

export default function StatBar({ label, value, max = 100, color = "#CC0000", delay = 0 }: StatBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="flex items-center gap-3 font-inter select-none">
      <span className="font-pixel text-[7px] text-[#999999] uppercase tracking-wider w-32 flex-shrink-0 truncate">
        {label}
      </span>

      <div className="flex-1 h-2 bg-[#1a1a22] border border-[#252528] rounded-none overflow-hidden">
        <motion.div
          className="h-full rounded-none"
          style={{ backgroundColor: color }}
          initial={{ width: '0%' }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: delay,
            ease: 'easeOut',
          }}
        />
      </div>

      <span className="font-pixel text-[7px] text-[#999999] w-8 text-right font-mono">
        {value}
      </span>
    </div>
  );
}
