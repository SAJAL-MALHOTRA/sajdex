'use client';

import { useState, useEffect } from 'react';
import FieldConsole from '@/components/console/FieldConsole';
import ProjectModal from '@/components/ui/ProjectModal';
import DeveloperTerminal from '@/components/terminal/DeveloperTerminal';
import KonamiEasterEgg from '@/components/ui/KonamiEasterEgg';
import SajalsTastePlayer from '@/components/layout/SajalsTastePlayer';
import { projects } from '@/data/projects';
import { useSound } from '@/hooks/useSound';
import { Terminal, X } from 'lucide-react';

export type ViewType = 'overview' | 'hero' | 'home' | 'work' | 'about' | 'skills' | 'experience' | 'contact' | 'resume' | 'terminal';

export default function Home() {
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const { playClick, playModalOpen } = useSound();

  const activeModalProject = modalProjectId
    ? projects.find((p) => p.id === modalProjectId) || null
    : null;

  // Keyboard shortcut listener (`~` for terminal, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        playClick();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        if (terminalOpen) {
          setTerminalOpen(false);
        } else if (modalProjectId) {
          setModalProjectId(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playClick, terminalOpen, modalProjectId]);

  return (
    <main className="h-screen max-h-screen w-full bg-[#09090B] text-[#EDEDED] font-mono antialiased selection:bg-white selection:text-black flex flex-col justify-between items-center p-2 sm:p-3 relative overflow-hidden">
      
      {/* ── MINIMALIST MONOCHROME TECHNICAL GRID ── */}
      <div className="fixed inset-0 bg-[radial-gradient(#27272A_1px,transparent_1px)] [background-size:20px_20px] opacity-35 pointer-events-none" />

      {/* ── TOP AMBIENT STATUS STRIP ── */}
      <header className="w-full max-w-5xl z-30 flex items-center justify-between font-mono text-[10.5px] text-[#71717A] select-none py-1 px-1 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <span className="text-white font-medium tracking-wider">SAJAL MALHOTRA</span>
          <span className="text-[#3F3F46]">•</span>
          <span className="text-[#A1A1AA] hidden sm:inline">NIT JALANDHAR // IT (2025–2029)</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[9.5px] text-[#52525B] hidden md:inline">
            PRESS &lsquo;1-5&rsquo; TO SWITCH MODULES
          </span>
          <SajalsTastePlayer />
          <button
            onClick={() => {
              playClick();
              setTerminalOpen(true);
            }}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#141417] hover:bg-[#1E1E24] border border-[#27272A] text-[#EDEDED] font-medium transition-colors cursor-pointer text-[10px]"
            title="Terminal (~)"
          >
            <Terminal size={10} className="text-[#A1A1AA]" />
            <span>CLI (~)</span>
          </button>
        </div>
      </header>

      {/* ── BESPOKE R&D FIELD CONSOLE (100% IN VIEWPORT) ── */}
      <div className="relative z-10 w-full max-w-5xl flex-1 min-h-0 flex items-center justify-center my-auto py-1">
        <FieldConsole
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenProjectModal={(id) => {
            playModalOpen();
            setModalProjectId(id);
          }}
        />
      </div>

      {/* ── BOTTOM FOOTER CAPTION ── */}
      <footer className="w-full max-w-5xl z-30 flex items-center justify-between font-mono text-[9px] text-[#52525B] tracking-wider select-none py-1 px-1 border-t border-[#18181B] shrink-0">
        <div>
          DEVDEX // MODEL DX-042 · SM-NITJ-2029
        </div>
        <div>
          MACHINE LEARNING &times; FULL-STACK SYSTEMS &times; AGENTIC ARCHITECTURES
        </div>
      </footer>

      {/* ── PROJECT ARCHITECTURE SPEC MODAL ── */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setModalProjectId(null)}
        />
      )}

      {/* ── DEVELOPER TERMINAL OVERLAY ── */}
      {terminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0E0E11] border border-[#27272A] rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <div className="h-9 px-4 bg-[#141417] text-white font-mono text-xs font-medium flex items-center justify-between border-b border-[#27272A] select-none">
              <span className="tracking-wide text-white">DEVDEX TERMINAL // SHELL (zsh)</span>
              <button
                onClick={() => setTerminalOpen(false)}
                className="hover:bg-white/10 p-1 rounded text-[#71717A] hover:text-white cursor-pointer transition-colors"
              >
                <X size={13} />
              </button>
            </div>
            <div className="h-[460px] overflow-hidden">
              <DeveloperTerminal
                onOpenModalProject={(id) => {
                  setTerminalOpen(false);
                  setModalProjectId(id);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── KONAMI EASTER EGG ── */}
      <KonamiEasterEgg />

    </main>
  );
}