'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProjectDex from '@/components/sections/ProjectDex';
import AboutSection from '@/components/sections/AboutSection';
import StackSection from '@/components/sections/StackSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectModal from '@/components/ui/ProjectModal';
import SajalsTastePlayer from '@/components/layout/SajalsTastePlayer';
import DevDexWidget from '@/components/ui/DevDexWidget';
import KonamiEasterEgg from '@/components/ui/KonamiEasterEgg';
import CommandPalette from '@/components/ui/CommandPalette';
import { projects } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

export type ViewType = 'hero' | 'work' | 'about' | 'stack' | 'contact';

export default function Home() {
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { playClick, playHover } = useSound();

  const activeModalProject = modalProjectId
    ? projects.find((p) => p.id === modalProjectId) || null
    : null;

  const scrollToSection = (id: string) => {
    playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'work', label: 'Work', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'stack', label: 'Stack', num: '03' },
    { id: 'contact', label: 'Contact', num: '04' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0A0B0D] text-[#F5F5F7] relative font-sans editorial-canvas selection:bg-[#EF4444] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* Konami Easter Egg */}
      <KonamiEasterEgg />

      {/* Signature Cmd+K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectView={(v) => scrollToSection(v)}
        onOpenModalProject={(id) => setModalProjectId(id)}
      />

      {/* ─── 1. TOP EDITORIAL NAVIGATION ─── */}
      <header className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-8 pb-6 flex items-center justify-between z-30 select-none font-mono text-xs">
        
        {/* Left: Brand / Monogram */}
        <button
          onClick={() => {
            playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-[#F5F5F7] hover:text-[#EF4444] transition-colors cursor-pointer font-bold tracking-wider uppercase text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
          <span>SAJAL / SAJDEX</span>
        </button>

        {/* Center: Numbered Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={playHover}
              className="group flex items-center gap-1.5 text-[#8E8E93] hover:text-[#F5F5F7] transition-colors cursor-pointer py-1"
            >
              <span className="text-[#636366] group-hover:text-[#EF4444] transition-colors">{item.num}</span>
              <span className="font-sans font-medium text-xs">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right: Location/Year & Music Player */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-[#636366] text-[11px] tracking-wider">
            IN / {new Date().getFullYear()}
          </span>

          <SajalsTastePlayer />
        </div>
      </header>

      {/* Mobile Sub-Nav */}
      <div className="md:hidden flex items-center justify-center gap-6 py-3 border-y border-white/[0.06] bg-[#0A0B0D]/90 backdrop-blur-md sticky top-0 z-20 font-mono text-xs">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-1 text-[#8E8E93] hover:text-[#F5F5F7]"
          >
            <span className="text-[#EF4444]">{item.num}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* ─── 2. MAIN SECTIONS FLOW ─── */}
      <main className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-8 sm:py-16 space-y-28 sm:space-y-36 flex-1">
        
        {/* HERO SECTION */}
        <section id="hero">
          <HeroSection
            onNavigateWork={() => scrollToSection('work')}
            onNavigateContact={() => scrollToSection('contact')}
          />
        </section>

        {/* 01 — SELECTED WORK */}
        <section id="work" className="scroll-mt-24">
          <ProjectDex onOpenModalProject={(id) => setModalProjectId(id)} />
        </section>

        {/* 02 — ABOUT & JOURNEY */}
        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        {/* 03 — TECHNICAL STACK */}
        <section id="stack" className="scroll-mt-24">
          <StackSection />
        </section>

        {/* 04 — CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>

      </main>

      {/* ─── 3. FLOATING DEVDEX WIDGET (● 🎙 Talk to Sajal's DevDex) ─── */}
      <DevDexWidget onOpenProject={(id) => setModalProjectId(id)} />

      {/* Focused Project Case Study Inspector Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setModalProjectId(null)}
      />
    </div>
  );
}
