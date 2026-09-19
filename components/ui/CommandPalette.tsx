'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, Briefcase, Terminal, Mail, X, ArrowRight } from 'lucide-react';
import { ViewType } from '@/app/page';
import { useSound } from '@/hooks/useSound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectView: (view: ViewType) => void;
  onOpenModalProject?: (id: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectView,
  onOpenModalProject,
}: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const { playClick, playModalOpen } = useSound();

  // Keyboard listener for Cmd+K / Ctrl+K and ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playModalOpen();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playModalOpen]);

  if (!isOpen) return null;

  const commands: { id: ViewType; title: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'home', title: 'ABOUT / HOME', desc: 'Main editorial hero portfolio overview', icon: <Home size={16} /> },
    { id: 'work', title: 'PROJECTS', desc: 'Archive of shipped systems & research builds', icon: <Briefcase size={16} /> },
    { id: 'terminal', title: 'LAB / TERMINAL', desc: 'Interactive developer workstation zsh environment', icon: <Terminal size={16} /> },
    { id: 'contact', title: 'CONTACT', desc: 'Direct outreach, email & social channels', icon: <Mail size={16} /> },
  ];

  const filtered = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[120] flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md font-sans"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl bg-[#0D0F12] border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden font-sans"
        >
          {/* Search Header */}
          <div className="relative flex items-center px-4 py-3.5 border-b border-white/10 bg-[#111317]">
            <Search size={18} className="text-[#94A3B8] mr-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search SAJDEX workspace... (e.g. 'Projects', 'Terminal')"
              className="flex-1 bg-transparent text-[#F8FAFC] text-sm outline-none placeholder-[#94A3B8] font-sans"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Commands List */}
          <div className="p-2 max-h-80 overflow-y-auto space-y-1 custom-scrollbar">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playClick();
                  onSelectView(item.id);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#16191D] border border-transparent hover:border-white/10 text-left transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#15171A] text-[#EF4444] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F8FAFC] tracking-wide font-mono">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#94A3B8]">
                      {item.desc}
                    </div>
                  </div>
                </div>

                <ArrowRight size={14} className="text-[#94A3B8] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          {/* Footer Badge */}
          <div className="px-4 py-2 bg-[#08090B] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#111317] border border-white/10 text-[#F8FAFC]">ESC</kbd> to exit</span>
            <span className="text-[#EF4444] font-bold">SAJDEX COMMAND PALETTE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
