'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const { playClick, playModalOpen } = useSound();
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const lines = [
    { text: 'COUNTING ROOMS...........8 FOUND', status: 'OK' },
    { text: 'DUSTING FURNITURE........OK', status: 'OK' },
    { text: 'HANGING THE HOODIES......OK', status: 'OK' },
    { text: 'WAKING THE RESIDENT......OK', status: 'OK' },
    { text: 'PUTTING THE KETTLE ON....OK', status: 'OK' },
  ];

  // Progressive loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setReady(true);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Reveal lines sequentially
  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          clearInterval(lineTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 220);

    return () => clearInterval(lineTimer);
  }, [lines.length]);

  // Press Enter key to enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleEnter = () => {
    playClick();
    playModalOpen();
    setDismissed(true);
    setTimeout(onComplete, 350);
  };

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] bg-[#241734] flex flex-col items-center justify-center p-6 select-none font-pixel text-[#FDF6E5]"
        >
          <div className="w-full max-w-md space-y-6">
            {/* Title Header */}
            <div className="text-center space-y-1">
              <h1 className="text-3xl sm:text-4xl text-[#FF6B9D] font-bold tracking-widest drop-shadow-[0_0_12px_rgba(255,107,157,0.7)] animate-pulse">
                DOLLHOUSE OS
              </h1>
              <p className="text-xs sm:text-sm text-[#FDF6E5]/70 tracking-widest uppercase">
                V1.0 — A PORTFOLIO YOU CAN WALK AROUND IN
              </p>
            </div>

            {/* Checklist items */}
            <div className="space-y-1.5 font-pixel text-xs sm:text-sm text-[#FDF6E5]/90 py-2">
              {lines.slice(0, visibleLines).map((line, idx) => (
                <div key={idx} className="flex justify-between items-center tracking-wider">
                  <span>{line.text.split('.')[0]}...........</span>
                  <span className="text-[#34D399] font-bold">{line.status}</span>
                </div>
              ))}
            </div>

            {/* Pink Progress Bar */}
            <div className="w-full h-3.5 bg-[#170E21] border-2 border-[#FF6B9D]/60 rounded-xs p-0.5 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#FF6B9D] to-[#F472B6] transition-all duration-75 ease-out rounded-xs"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Ring the Doorbell Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleEnter}
                className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#9D3663]/60 hover:bg-[#FF6B9D] text-white border-2 border-[#FF6B9D] hover:border-white font-pixel text-sm tracking-widest transition-all cursor-pointer shadow-[0_0_15px_rgba(255,107,157,0.4)] active:scale-95"
              >
                RING THE DOORBELL
              </button>
              <span className="text-xs text-[#FDF6E5]/50 tracking-wider">
                OR PRESS ENTER
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}