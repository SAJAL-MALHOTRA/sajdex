'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioKnowledge, KnowledgeQuery } from '@/data/knowledge';
import { useSound } from '@/hooks/useSound';
import { Terminal, Sparkles, ArrowRight, X, Code2, Cpu, FileText, Layers, Search } from 'lucide-react';

interface SajDexTerminalProps {
  onOpenModal?: (projectId: string) => void;
}

export default function SajDexTerminal({ onOpenModal }: SajDexTerminalProps) {
  const [activeQuery, setActiveQuery] = useState<KnowledgeQuery | null>(null);
  const [inputQuery, setInputQuery] = useState('');
  const { playClick, playHover } = useSound();

  // Console Easter Egg Message
  useEffect(() => {
    console.log(
      "%c SAJDEX ONLINE %c Type 'who is sam' in the terminal input to unlock Trainer Record #001!",
      "background: #FF1A1A; color: white; font-weight: bold; padding: 2px 6px; border-radius: 4px;",
      "color: #10B981; font-weight: bold;"
    );
  }, []);

  const handleQuickAction = (targetSectionId: string) => {
    playClick();
    const el = document.getElementById(targetSectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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

    // Match keywords across knowledge base queries
    const match = portfolioKnowledge.queries.find(
      (q) =>
        q.query.toLowerCase().includes(lower) ||
        q.keywords.some((k) => lower.includes(k) || k.includes(lower))
    );

    if (match) {
      setActiveQuery(match);
    } else {
      // Fallback query response
      setActiveQuery({
        id: "q-fallback",
        query: inputQuery,
        keywords: [],
        title: "SAJDEX SEARCH RESULT",
        category: "PROFILE",
        summary: `Search results for "${inputQuery}"`,
        details: `Sajal is an IT undergraduate at NIT Jalandhar focused on ML systems (ThinkFolio), real-time web applications (Pairfect), and multi-agent RAG search (ScholarAI).`,
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
    } else if (action.actionType === 'LINK') {
      window.open(action.target, '_blank');
    }
  };

  return (
    <div id="terminal" className="w-full max-w-7xl mx-auto px-6 sm:px-10 font-inter">
      {/* ─── POKÉDEX TERMINAL CONTAINER ─── */}
      <div className="bg-[#0B0C0F] border border-[#1a1a1f] rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 relative overflow-hidden select-none">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF1A1A] animate-pulse" />
            <span className="font-pixel text-[7px] text-[#F5F5F0] tracking-widest uppercase">
              SAJALDEX ONLINE // V2.5
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[9px] text-[#888888]">
            <Terminal size={12} className="text-[#FF1A1A]" />
            <span>PRIMARY INTERACTION MODEL</span>
          </div>
        </div>

        {/* Greeting Message */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-[#F5F5F0] uppercase tracking-tight">
            Hello, Trainer.
          </h2>
          <p className="text-xs sm:text-sm text-[#888888]">
            Indexed builds, ML research, experience, and codebase architecture. What are you looking for?
          </p>
        </div>

        {/* Natural Language Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-4 text-[#888888]" />
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask SAJDEX... (e.g. 'show me Thinkfolio', 'who is sam')"
              className="w-full pl-11 pr-24 py-3 bg-[#111216] border border-[#1a1a1f] focus:border-[#FF1A1A] rounded-xl text-xs text-[#F5F5F0] placeholder-[#555555] focus:outline-none transition-colors font-mono select-text"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-1.5 bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-xs rounded-lg transition-colors"
            >
              QUERY →
            </button>
          </div>
        </form>

        {/* Interactive Quick Action Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuickAction('builds')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <Cpu size={14} className="text-[#FF1A1A]" />
            <span>PROJECTS</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuerySelect(portfolioKnowledge.queries[2])}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span>RESEARCH</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuickAction('team')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <Layers size={14} className="text-blue-400" />
            <span>MY TEAM</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuickAction('lab')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <Code2 size={14} className="text-emerald-400" />
            <span>OPEN LAB</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuickAction('journey')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <FileText size={14} className="text-amber-400" />
            <span>EXPERIENCE</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={playHover}
            onClick={() => handleQuickAction('contact')}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs font-semibold text-[#F5F5F0] transition-colors"
          >
            <ArrowRight size={14} className="text-[#FF1A1A]" />
            <span>CONTACT</span>
          </motion.button>
        </div>

        {/* Preset Query Pills */}
        <div className="pt-2 border-t border-[#1a1a1f] space-y-1.5">
          <span className="font-pixel text-[5px] text-[#888888] uppercase block">
            INDEXED QUERIES:
          </span>
          <div className="flex flex-wrap gap-2">
            {portfolioKnowledge.queries.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuerySelect(q)}
                onMouseEnter={playHover}
                className={`text-xs font-mono px-3 py-1 rounded-md border transition-colors ${
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

        {/* Query Answer Panel */}
        <AnimatePresence mode="wait">
          {activeQuery && (
            <motion.div
              key={activeQuery.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl bg-[#111216] border border-[#1a1a1f] space-y-3 relative select-text"
            >
              <button
                onClick={() => setActiveQuery(null)}
                className="absolute top-4 right-4 text-[#888888] hover:text-white p-1"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2">
                <span className="font-pixel text-[6px] text-[#FF1A1A]">DEX // QUERY RESULT</span>
                <span className="font-mono text-[9px] text-[#888888]">category: {activeQuery.category}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#F5F5F0] uppercase">
                  {activeQuery.title}
                </h3>
                <p className="text-xs italic text-[#888888] mt-0.5">
                  {activeQuery.summary}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#E8E6E3] leading-relaxed">
                {activeQuery.details}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1a1a1f]">
                <div className="flex flex-wrap gap-1.5">
                  {activeQuery.stack.map((st) => (
                    <span key={st} className="text-[10px] font-mono text-[#888888] bg-[#0B0C0F] px-2 py-0.5 rounded">
                      {st}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {activeQuery.actions.map((act) => (
                    <button
                      key={act.label}
                      onClick={() => handleActionClick(act)}
                      className="px-3 py-1.5 rounded-lg bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-xs transition-colors flex items-center gap-1"
                    >
                      <span>{act.label}</span>
                      <ArrowRight size={12} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
