'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Terminal, X, ArrowUpRight, Sparkles } from 'lucide-react';
import DeveloperTerminal from '@/components/terminal/DeveloperTerminal';
import { useSound } from '@/hooks/useSound';

interface DevDexWidgetProps {
  onOpenProject?: (id: string) => void;
}

export default function DevDexWidget({ onOpenProject }: DevDexWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { playClick, playModalOpen } = useSound();

  return (
    <>
      {/* ─── FLOATING BOTTOM-RIGHT TRIGGER BUTTON ─── */}
      <motion.button
        onClick={() => {
          playModalOpen();
          setIsOpen(true);
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111216]/90 backdrop-blur-xl border border-white/10 hover:border-white/20 text-[#F5F5F7] font-mono text-xs shadow-2xl transition-all cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
        <Mic size={14} className="text-[#8E8E93] group-hover:text-[#EF4444] transition-colors" />
        <span className="font-semibold text-xs tracking-tight">
          Talk to Sajal&apos;s DevDex
        </span>
      </motion.button>

      {/* ─── MODAL OVERLAY ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playClick();
                setIsOpen(false);
              }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-full sm:max-w-2xl bg-[#0E0F13] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden font-mono"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
                  <span className="font-bold text-[#F5F5F7]">SAJAL&apos;S DEVDEX // INTELLIGENCE CONSOLE</span>
                </div>

                <button
                  onClick={() => {
                    playClick();
                    setIsOpen(false);
                  }}
                  className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Terminal / Assistant Interface */}
              <div className="flex-1 min-h-[360px] overflow-hidden">
                <DeveloperTerminal onOpenModalProject={(id) => {
                  setIsOpen(false);
                  if (onOpenProject) onOpenProject(id);
                }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
