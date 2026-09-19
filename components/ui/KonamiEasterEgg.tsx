'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Sparkles, X } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiEasterEgg() {
  const [inputBuffer, setInputBuffer] = useState<string[]>([]);
  const [unlocked, setUnlocked] = useState(false);
  const { playModalOpen } = useSound();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      setInputBuffer((prev) => {
        const next = [...prev, key].slice(-KONAMI_CODE.length);
        if (JSON.stringify(next) === JSON.stringify(KONAMI_CODE)) {
          playModalOpen();
          setUnlocked(true);
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playModalOpen]);

  if (!unlocked) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl select-none font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative max-w-md w-full bg-[#080808] border-2 border-emerald-500 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-[0_0_50px_rgba(16,185,129,0.5)]"
        >
          <button
            onClick={() => setUnlocked(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-[#111111] text-[#888888] hover:text-white"
          >
            <X size={16} />
          </button>

          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
            <Trophy size={32} />
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase block">
              SECRET UNLOCKED // KONAMI CODE
            </span>
            <h3 className="text-2xl font-black text-[#F5F5F0] uppercase tracking-tight">
              MASTER TRAINER BADGE #001
            </h3>
          </div>

          <p className="text-xs text-[#888888]">
            You entered the legendary Konami Code! Sajal Malhotra has achieved maximum Pokédex optimization status.
          </p>

          <div className="p-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs text-emerald-400 font-bold">
            ⚡ CODE: UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
