'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-[#CC0000]"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
}
