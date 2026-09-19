'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import DeveloperTerminal from '@/components/terminal/DeveloperTerminal';
import ProjectDex from '@/components/sections/ProjectDex';
import ContactSection from '@/components/sections/ContactSection';
import SocialFooter from '@/components/layout/SocialFooter';
import ProjectModal from '@/components/ui/ProjectModal';
import JourneySidebar from '@/components/ui/JourneySidebar';
import SajalsTastePlayer from '@/components/layout/SajalsTastePlayer';
import KonamiEasterEgg from '@/components/ui/KonamiEasterEgg';
import CommandPalette from '@/components/ui/CommandPalette';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export type ViewType = 'home' | 'work' | 'terminal' | 'contact';

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);
  const [journeySidebarOpen, setJourneySidebarOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const { playClick, playHover, playModalOpen } = useSound();

  const activeModalProject = modalProjectId
    ? projects.find((p) => p.id === modalProjectId) || null
    : null;

  // Global Keyboard Navigation (1, 2, 3, 4, J)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === '1') setActiveView('home');
      else if (e.key === '2') setActiveView('work');
      else if (e.key === '3') setActiveView('terminal');
      else if (e.key === '4') setActiveView('contact');
      else if (e.key === 'j' || e.key === 'J') {
        playModalOpen();
        setJourneySidebarOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [playModalOpen]);

  const navItems = [
    { id: 'home' as ViewType, label: 'Overview' },
    { id: 'work' as ViewType, label: 'Projects' },
    { id: 'terminal' as ViewType, label: 'Terminal' },
    { id: 'contact' as ViewType, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#090A0C] text-[#F4F4F6] relative font-sans refined-canvas selection:bg-white selection:text-black flex flex-col justify-between overflow-x-hidden">
      
      {/* Konami Easter Egg */}
      <KonamiEasterEgg />

      {/* Signature Cmd+K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectView={(v) => setActiveView(v)}
        onOpenModalProject={(id) => setModalProjectId(id)}
      />

      {/* Experience & Education Slide-over Drawer */}
      <JourneySidebar
        isOpen={journeySidebarOpen}
        onClose={() => setJourneySidebarOpen(false)}
      />

      {/* ─── 1. CLEAN REFINED TOP NAVIGATION ─── */}
      <header className="w-full max-w-5xl mx-auto px-6 sm:px-8 pt-8 pb-4 flex items-center justify-between z-30 select-none">
        
        {/* Left: Author Brand */}
        <button
          onClick={() => {
            playClick();
            setActiveView('home');
          }}
          className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#F4F4F6] hover:text-white transition-colors cursor-pointer"
        >
          Sajal
        </button>

        {/* Center: Nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9E9EA8]">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClick();
                  setActiveView(item.id);
                }}
                onMouseEnter={playHover}
                className={`transition-colors cursor-pointer py-1 ${
                  isActive
                    ? 'text-[#F4F4F6] font-semibold border-b border-white'
                    : 'hover:text-[#F4F4F6]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => {
              playModalOpen();
              setJourneySidebarOpen(true);
            }}
            onMouseEnter={playHover}
            className="hover:text-[#F4F4F6] transition-colors cursor-pointer py-1"
          >
            Experience
          </button>
        </nav>

        {/* Right: Quick Actions & Music Player */}
        <div className="flex items-center gap-3">
          {/* Music Player */}
          <SajalsTastePlayer />

          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] hover:border-white/[0.2] text-[#F4F4F6] text-xs font-medium transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight size={13} className="text-[#9E9EA8]" />
          </a>

          <button
            onClick={() => {
              playClick();
              setActiveView('contact');
            }}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F4F4F6] text-[#090A0C] font-semibold text-xs tracking-tight hover:bg-white transition-all shadow-sm cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </header>

      {/* Mobile Sub-Nav */}
      <div className="md:hidden flex items-center justify-center gap-5 py-3 border-y border-white/[0.06] bg-[#090A0C]/80 backdrop-blur-md sticky top-0 z-20 text-xs font-medium text-[#9E9EA8]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              playClick();
              setActiveView(item.id);
            }}
            className={`transition-colors ${
              activeView === item.id ? 'text-[#F4F4F6] font-bold border-b border-white pb-0.5' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => {
            playModalOpen();
            setJourneySidebarOpen(true);
          }}
          className="hover:text-white"
        >
          Experience
        </button>
      </div>

      {/* ─── 2. MAIN EDITORIAL CONTENT ─── */}
      <main className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-8 sm:py-16 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activeView === 'home' && (
              <HeroSection
                onNavigateWork={() => setActiveView('work')}
                onNavigateContact={() => setActiveView('contact')}
                onOpenTerminal={() => setActiveView('terminal')}
              />
            )}

            {activeView === 'work' && (
              <ProjectDex onOpenModalProject={(id) => setModalProjectId(id)} />
            )}

            {activeView === 'terminal' && (
              <div className="w-full max-w-3xl mx-auto py-4 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#9E9EA8] font-mono">
                  <span className="text-[#F4F4F6] font-semibold">Interactive Developer Terminal</span>
                  <span>Type &apos;help&apos; for commands</span>
                </div>
                <DeveloperTerminal onOpenModalProject={(id) => setModalProjectId(id)} />
              </div>
            )}

            {activeView === 'contact' && (
              <div className="w-full max-w-3xl mx-auto space-y-12 py-4">
                <ContactSection />
                <SocialFooter />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 sm:px-8 py-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#62636C] font-sans select-none">
        <div>© {new Date().getFullYear()} Sajal (Sam). Built with Next.js & TypeScript.</div>
        <div className="flex items-center gap-4 text-[#9E9EA8]">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </footer>

      {/* Focused Project Case Study Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setModalProjectId(null)}
      />
    </div>
  );
}
