'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioKnowledge, KnowledgeQuery } from '@/data/knowledge';
import { useSound } from '@/hooks/useSound';
import { X, Search, ArrowRight, Sparkles, Cpu, Layers, FileText, Code2 } from 'lucide-react';

interface SajDexFloatingPillProps {
  onOpenModal?: (projectId: string) => void;
}

export default function SajDexFloatingPill({ onOpenModal }: SajDexFloatingPillProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState<KnowledgeQuery | null>(null);
  const [inputQuery, setInputQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const { playClick, playHover } = useSound();

  const handleQuickAction = (targetSectionId: string) => {
    playClick();
    const el = document.getElementById(targetSectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleQuerySelect = (q: KnowledgeQuery) => {
    playClick();
    setActiveQuery(q);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    playClick();
    const lower = inputQuery.toLowerCase().trim();

    const match = portfolioKnowledge.queries.find(
      (q) =>
        q.query.toLowerCase().includes(lower) ||
        q.keywords.some((k) => lower.includes(k) || k.includes(lower))
    );

    if (match) {
      setActiveQuery(match);
    } else {
      setActiveQuery({
        id: "q-fallback",
        query: inputQuery,
        keywords: [],
        title: "SAJDEX RESULT",
        category: "PROFILE",
        summary: `Search results for "${inputQuery}"`,
        details: `Sajal is an IT undergraduate at NIT Jalandhar building ML systems (ThinkFolio), real-time web platforms (Pairfect), and multi-agent AI research (ScholarAI).`,
        type: "Search Output",
        stack: ["Next.js", "Python", "PyTorch", "Supabase"],
        actions: [
          { label: "Explore Projects", actionType: "NAVIGATE", target: "builds" },
          { label: "Open Lab", actionType: "NAVIGATE", target: "lab" },
        ],
      });
    }

    setInputQuery('');
  };

  const handleActionClick = (action: KnowledgeQuery['actions'][0]) => {
    playClick();
    if (action.actionType === 'NAVIGATE') {
      handleQuickAction(action.target);
    } else if (action.actionType === 'MODAL' && onOpenModal) {
      onOpenModal(action.target);
      setIsOpen(false);
    } else if (action.actionType === 'LINK') {
      window.open(action.target, '_blank');
    }
  };

  return (
    <>
      {/* ─── 1. BOTTOM-RIGHT FLOATING COMMAND PILL ─── */}
      <div className="fixed bottom-6 right-6 z-50 select-none">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => {
            playHover();
            setIsHovered(true);
          }}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            playClick();
            setIsOpen(!isOpen);
          }}
          className="group relative flex items-center gap-2.5 bg-[#0B0C0F]/90 backdrop-blur-xl border border-[#1a1a1f] hover:border-[#FF1A1A]/60 px-4 py-2.5 rounded-full shadow-2xl text-xs font-mono text-[#F5F5F0] transition-all"
        >
          {/* Status Red Indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1A1A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF1A1A]" />
          </span>

          {/* Label: ASK SAJDEX (Hover reveals ONLINE · READY status) */}
          <span className="font-semibold tracking-wide">
            {isHovered ? 'SAJDEX ONLINE · READY' : 'ASK SAJDEX'}
          </span>

          {/* Right Arrow / Icon */}
          <ArrowRight
            size={13}
            className="text-[#888888] group-hover:text-[#FF1A1A] group-hover:translate-x-0.5 transition-all"
          />
        </motion.button>
      </div>

      {/* ─── 2. SLEEK TERMINAL DRAWER MODAL ─── */}
      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-8 bg-black/70 backdrop-blur-md select-none font-inter"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[460px] bg-[#0B0C0F] border border-[#1a1a1f] rounded-3xl p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto select-text"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF1A1A] animate-pulse" />
                  <span className="font-mono text-xs text-[#F5F5F0] font-bold tracking-wider uppercase">
                    ● SAJDEX ASSISTANT
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-[#888888] hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Subheading */}
              <div className="space-y-0.5">
                <h3 className="text-lg font-black text-[#F5F5F0] uppercase tracking-tight">
                  What are you looking for?
                </h3>
                <p className="text-xs text-[#888888]">
                  Search Sajal&apos;s builds, ML research, skills, or experience:
                </p>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative flex items-center">
                  <Search size={14} className="absolute left-3.5 text-[#888888]" />
                  <input
                    type="text"
                    value={inputQuery}
                    onChange={(e) => setInputQuery(e.target.value)}
                    placeholder="Ask about my projects, research, or skills..."
                    className="w-full pl-10 pr-20 py-2.5 bg-[#111216] border border-[#1a1a1f] focus:border-[#FF1A1A] rounded-xl text-xs text-[#F5F5F0] placeholder-[#555555] focus:outline-none transition-colors font-mono"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-3 py-1 bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-xs rounded-lg transition-colors"
                  >
                    ASK →
                  </button>
                </div>
              </form>

              {/* Quick Navigation Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="font-mono text-[10px] text-[#888888] uppercase block font-semibold">
                  QUICK NAVIGATION CHIPS
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => handleQuickAction('builds')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <Cpu size={14} className="text-[#FF1A1A]" />
                    <span>THINKFOLIO</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('builds')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <Layers size={14} className="text-blue-400" />
                    <span>PAIRFECT</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('abilities')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <Sparkles size={14} className="text-purple-400" />
                    <span>SKILLS</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('journey')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <FileText size={14} className="text-amber-400" />
                    <span>EXPERIENCE</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('lab')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <Code2 size={14} className="text-emerald-400" />
                    <span>OPEN LAB</span>
                  </button>

                  <button
                    onClick={() => handleQuickAction('contact')}
                    className="flex items-center gap-2 p-2.5 bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] rounded-xl text-left font-semibold text-[#F5F5F0] transition-colors"
                  >
                    <ArrowRight size={14} className="text-[#FF1A1A]" />
                    <span>CONTACT</span>
                  </button>
                </div>
              </div>

              {/* Preset Queries */}
              <div className="pt-2 border-t border-[#1a1a1f] space-y-1.5">
                <span className="font-mono text-[10px] text-[#888888] uppercase block font-semibold">
                  POPULAR QUESTIONS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {portfolioKnowledge.queries.slice(0, 4).map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleQuerySelect(q)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-colors ${
                        activeQuery?.id === q.id
                          ? 'bg-[#FF1A1A] text-white border-[#FF1A1A]'
                          : 'bg-[#111216] border-[#1a1a1f] text-[#888888] hover:border-[#888888] hover:text-[#F5F5F0]'
                      }`}
                    >
                      ▸ &quot;{q.query}&quot;
                    </button>
                  ))}
                </div>
              </div>

              {/* Query Result Window */}
              <AnimatePresence mode="wait">
                {activeQuery && (
                  <motion.div
                    key={activeQuery.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-[#111216] border border-[#1a1a1f] space-y-2 relative select-text"
                  >
                    <button
                      onClick={() => setActiveQuery(null)}
                      className="absolute top-3 right-3 text-[#888888] hover:text-white p-1"
                    >
                      <X size={14} />
                    </button>

                    <h4 className="text-xs font-bold text-[#F5F5F0] uppercase">
                      {activeQuery.title}
                    </h4>

                    <p className="text-xs text-[#E8E6E3] leading-relaxed">
                      {activeQuery.details}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1f]">
                      <div className="flex flex-wrap gap-1">
                        {activeQuery.stack.slice(0, 3).map((st) => (
                          <span key={st} className="text-[9px] font-mono text-[#888888] bg-[#0B0C0F] px-2 py-0.5 rounded">
                            {st}
                          </span>
                        ))}
                      </div>

                      {activeQuery.actions[0] && (
                        <button
                          onClick={() => handleActionClick(activeQuery.actions[0])}
                          className="px-2.5 py-1 rounded-lg bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-[11px] transition-colors flex items-center gap-1"
                        >
                          <span>{activeQuery.actions[0].label}</span>
                          <ArrowRight size={10} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
