'use client';

import { Home, Briefcase, Terminal, Mail } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { ViewType } from '@/app/page';

interface SajDexDockProps {
  activeView: ViewType;
  onSelectView: (view: ViewType) => void;
}

export default function SajDexDock({ activeView, onSelectView }: SajDexDockProps) {
  const { playClick, playHover } = useSound();

  const dockItems = [
    { id: 'about' as ViewType, label: 'HOME', icon: <Home size={18} /> },
    { id: 'work' as ViewType, label: 'PROJECTDEX', icon: <Briefcase size={18} /> },
    { id: 'ai' as ViewType, label: 'TERMINAL', icon: <Terminal size={18} /> },
    { id: 'contact' as ViewType, label: 'CONTACT', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none select-none font-sans">
      <div className="pointer-events-auto h-[56px] p-[6px] rounded-full bg-[#0D0F12]/80 backdrop-blur-[20px] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
        {dockItems.map((item) => {
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                playClick();
                onSelectView(item.id);
              }}
              onMouseEnter={playHover}
              title={item.label}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-[#EF4444] text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                  : 'bg-[#15171A] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A1C20]'
              }`}
            >
              {item.icon}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
