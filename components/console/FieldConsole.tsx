'use client';

import { useState, useEffect } from 'react';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  Terminal,
  Volume2,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { skills } from '@/data/skills';
import DeveloperTerminal from '@/components/terminal/DeveloperTerminal';
import { useSound } from '@/hooks/useSound';
import { getAssetPath } from '@/utils/asset';

interface FieldConsoleProps {
  onOpenTerminal: () => void;
  onOpenProjectModal: (id: string) => void;
}

export default function FieldConsole({
  onOpenTerminal,
  onOpenProjectModal,
}: FieldConsoleProps) {
  const [activeModule, setActiveModule] = useState<'systems' | 'skills' | 'timeline' | 'cli' | 'dispatch'>('systems');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechProgress, setSpeechProgress] = useState(0);
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
  const [dispatchSent, setDispatchSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [dispatchMessage, setDispatchMessage] = useState('');

  const { playClick, playHover } = useSound();

  const modules = [
    { id: 'systems', num: '01', title: 'TECHNICAL PROJECTS', count: '04 BUILDS' },
    { id: 'skills', num: '02', title: 'TECHNICAL SKILLS', count: '5 STACKS' },
    { id: 'timeline', num: '03', title: 'EDUCATION & ACHIEVEMENTS', count: 'CGPA 8.13' },
    { id: 'cli', num: '04', title: 'DEVELOPER CLI // SHELL', count: 'INTERACTIVE' },
    { id: 'dispatch', num: '05', title: 'CONTACT & DISPATCH', count: 'DIRECT' },
  ];

  const handleCopy = (text: string, label: string) => {
    playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Web Speech API Voice Briefing Engine
  const handleToggleVoice = () => {
    playClick();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setSpeechProgress(0);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = profile.transcript;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;
    utterance.pitch = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('Alex'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onboundary = (e) => {
      const pct = Math.min(100, Math.round((e.charIndex / textToSpeak.length) * 100));
      setSpeechProgress(pct);
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setSpeechProgress(100);
      setTimeout(() => setSpeechProgress(0), 1200);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setSpeechProgress(0);
    };

    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  // Keyboard number keys to quickly switch modules (1-5) and Escape to close zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === 'Escape' && isPhotoZoomed) {
        setIsPhotoZoomed(false);
      } else if (e.key === '1') setActiveModule('systems');
      else if (e.key === '2') setActiveModule('skills');
      else if (e.key === '3') setActiveModule('timeline');
      else if (e.key === '4') setActiveModule('cli');
      else if (e.key === '5') setActiveModule('dispatch');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoZoomed]);

  return (
    <div className="w-full h-full max-h-full flex flex-col justify-between select-none font-mono text-[#09090B] dark:text-[#EDEDED] transition-colors duration-200">
      
      {/* ── MAIN HARDWARE CHASSIS ── */}
      <div className="w-full h-full flex flex-col justify-between rounded-2xl bg-white dark:bg-[#0E0F12] border border-[#E2E4E8] dark:border-[#22242A] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] p-2.5 sm:p-3.5 overflow-hidden transition-colors duration-200">
        
        {/* Top Hardware Header */}
        <div className="flex items-center justify-between pb-2 px-1 border-b border-[#ECEEF2] dark:border-[#1E2026] text-xs text-[#52525B] dark:text-[#71717A] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-black/90 dark:bg-white/90" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#09090B] dark:text-white font-semibold tracking-wider text-[11px]">
                SAJAL MALHOTRA // NIT JALANDHAR
              </span>
              <span className="text-[#CBD0D8] dark:text-white/20 hidden sm:inline">•</span>
              <span className="text-[10px] text-[#52525B] dark:text-[#A1A1AA] hidden sm:inline">
                B.TECH IT · 2025–2029 (CGPA: 8.13)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <button
              onClick={handleToggleVoice}
              onMouseEnter={playHover}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                isPlayingAudio
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white font-bold'
                  : 'bg-[#F1F2F5] hover:bg-[#E8EAEE] border-[#D1D5DB] text-[#52525B] hover:text-[#09090B] dark:bg-[#16171B] dark:border-[#2B2D35] dark:text-[#A1A1AA] dark:hover:text-white'
              }`}
            >
              <Volume2 size={10} />
              <span>{isPlayingAudio ? 'AUDIO ON' : 'AUDIO BRIEF'}</span>
            </button>

            <button
              onClick={() => {
                playClick();
                setActiveModule('cli');
              }}
              onMouseEnter={playHover}
              className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-colors cursor-pointer text-[10px] ${
                activeModule === 'cli'
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white font-bold'
                  : 'bg-[#F1F2F5] hover:bg-[#E8EAEE] border-[#D1D5DB] text-[#09090B] dark:bg-[#16171B] dark:border-[#2B2D35] dark:text-white dark:hover:bg-[#202227]'
              }`}
            >
              <Terminal size={10} className={activeModule === 'cli' ? 'text-white dark:text-black' : 'text-[#52525B] dark:text-[#A1A1AA]'} />
              <span>CLI (4)</span>
            </button>
          </div>
        </div>

        {/* ── TWO-PANEL HARDWARE WORKSPACE (FLEX-1 MIN-H-0 TO FIT IN VIEWPORT) ── */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3 pt-2.5 overflow-hidden">
          
          {/* ════════ LEFT PANEL: OPERATOR SPEC & MODULE SELECTOR (5 Cols) ════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-0 space-y-2 overflow-y-auto pr-0.5">
            
            {/* Operator Identity & Verified Stamp Card (Enlarged Upper Section to Fill Space) */}
            <div className="rounded-xl bg-[#F9F9FB] dark:bg-[#131418] border border-[#E2E4E8] dark:border-[#22242B] p-3.5 sm:p-4 space-y-3.5 shrink-0 shadow-sm dark:shadow-lg transition-colors">
              
              {/* Header: FULL COLOR Real Photo (Enlarged) + Verification Hazard Stamp */}
              <div className="flex items-center gap-3.5">
                
                {/* Viewfinder-Framed FULL COLOR Photo (Click to Enlarge) */}
                <button
                  onClick={() => {
                    playClick();
                    setIsPhotoZoomed(true);
                  }}
                  onMouseEnter={playHover}
                  title="Click to view full portrait"
                  className="group relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl bg-[#F1F2F5] dark:bg-[#0A0B0E] border border-black/15 hover:border-black/60 dark:border-white/20 dark:hover:border-white/70 overflow-hidden flex items-center justify-center shadow-md transition-all cursor-pointer select-none"
                >
                  <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-black/80 dark:border-white/90 z-10 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-black/80 dark:border-white/90 z-10 group-hover:scale-110 transition-transform" />
                  <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-black/80 dark:border-white/90 z-10 group-hover:scale-110 transition-transform" />
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-black/80 dark:border-white/90 z-10 group-hover:scale-110 transition-transform" />

                  {/* Fully Colored Profile Picture */}
                  <img
                    src={getAssetPath('/avatar.png')}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top contrast-[1.03] brightness-100 group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-[9px] text-white font-mono bg-black/85 px-2 py-0.5 rounded border border-white/40 shadow-sm">
                      ZOOM ↗
                    </span>
                  </div>
                </button>

                {/* Verified Stamp & Department */}
                <div className="flex-1 min-w-0 flex flex-col justify-between space-y-1.5 text-right">
                  <div className="self-end">
                    <div className="px-3 py-1 rounded-xs bg-black text-white dark:bg-[#EDEDED] dark:text-[#09090B] font-sans font-black text-center leading-tight shadow">
                      <div className="text-[9px] sm:text-[10px] tracking-widest uppercase">VERIFIED CANDIDATE</div>
                    </div>
                    {/* Hazard Stripes Bar */}
                    <div className="h-1.5 w-full mt-1 bg-[repeating-linear-gradient(45deg,#09090B,#09090B_2px,#E2E4E8_2px,#E2E4E8_4px)] dark:bg-[repeating-linear-gradient(45deg,#EDEDED,#EDEDED_2px,#131418_2px,#131418_4px)]" />
                  </div>

                  <div className="space-y-1 border-t border-[#E2E4E8] dark:border-white/10 pt-1.5">
                    <div className="text-[8px] sm:text-[8.5px] text-[#71717A] tracking-wider uppercase font-mono">EDUCATION // DEGREE</div>
                    <div className="text-xs sm:text-sm font-bold text-[#09090B] dark:text-white tracking-wide leading-tight font-mono">
                      B.TECH IN INFORMATION TECHNOLOGY
                    </div>
                    <div className="text-[10px] text-[#52525B] dark:text-[#A1A1AA] font-mono tracking-wider">
                      NIT JALANDHAR · CGPA 8.13
                    </div>
                    <div className="text-[9.5px] text-[#09090B] dark:text-white font-mono font-semibold tracking-wider pt-0.5">
                      BATCH: 2025–2029
                    </div>
                  </div>
                </div>
              </div>

              {/* Name Banner & Contact Quick-Links (Expanded & Prominent) */}
              <div className="rounded-xl overflow-hidden border border-[#E2E4E8] dark:border-[#27272A] bg-white dark:bg-[#18181B] p-3 sm:p-3.5 space-y-2.5 text-left transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[8px] text-[#71717A] tracking-widest uppercase font-mono">NAME</div>
                    <div className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white font-sans tracking-tight">
                      {profile.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] text-[#71717A] tracking-widest uppercase font-mono">LOCATION</div>
                    <div className="text-xs text-[#52525B] dark:text-white font-mono font-medium">
                      Jalandhar, Punjab
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#E2E4E8] dark:border-white/5 text-[9.5px] text-[#52525B] dark:text-[#A1A1AA]">
                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#F4F4F6] hover:bg-[#ECEEF2] text-[#09090B] dark:bg-[#202024] dark:hover:bg-[#27272A] dark:text-[#EDEDED] transition-colors cursor-pointer border border-[#D1D5DB] dark:border-[#2B2D35]"
                    title="Click to copy email"
                  >
                    <Mail size={11} className="text-[#71717A] dark:text-[#A1A1AA] shrink-0" />
                    <span className="truncate font-mono">{copiedField === 'email' ? 'Copied Email!' : profile.email}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#F4F4F6] hover:bg-[#ECEEF2] text-[#09090B] dark:bg-[#202024] dark:hover:bg-[#27272A] dark:text-[#EDEDED] transition-colors cursor-pointer border border-[#D1D5DB] dark:border-[#2B2D35]"
                    title="Click to copy phone"
                  >
                    <Phone size={11} className="text-[#71717A] dark:text-[#A1A1AA] shrink-0" />
                    <span className="font-mono">{copiedField === 'phone' ? 'Copied Phone!' : profile.phone}</span>
                  </button>
                </div>
              </div>

              {/* Technical Specialization & Candidacy Status (Fills Space Cleanly) */}
              <div className="rounded-lg border border-[#E2E4E8] dark:border-[#27272A] bg-[#F4F4F6] dark:bg-[#101115] p-2.5 space-y-1.5 text-left font-mono transition-colors">
                <div className="flex items-center justify-between text-[8px] text-[#71717A] uppercase tracking-wider">
                  <span>SPECIALIZATION</span>
                  <span className="text-[#09090B] dark:text-white font-semibold">NITJ-IT-2029</span>
                </div>
                <div className="text-[10px] text-[#3F3F46] dark:text-[#D4D4D8] font-medium leading-snug">
                  ML Reasoning Engines · Real-Time Systems · Autonomous Agents
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#E2E4E8] dark:border-white/5 text-[8.5px]">
                  <div className="flex items-center gap-1.5 text-[#52525B] dark:text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[#09090B] dark:text-white font-medium">OPEN TO SWE &amp; ML ROLES</span>
                  </div>
                  <span className="text-[#71717A]">BATCH 2025–2029</span>
                </div>
              </div>

            </div>

            {/* Tactical Module Navigation Selector */}
            <div className="rounded-xl bg-[#F9F9FB] dark:bg-[#131418] border border-[#E2E4E8] dark:border-[#22242B] p-2 space-y-1 shrink-0 transition-colors">
              <div className="flex items-center justify-between px-1.5 pb-1 text-[8.5px] text-[#71717A] dark:text-[#52525B] tracking-widest uppercase border-b border-[#E2E4E8] dark:border-white/5">
                <span>SECTIONS</span>
                <span>KEYS [1-5]</span>
              </div>

              <div className="space-y-0.5">
                {modules.map((mod) => {
                  const isActive = activeModule === mod.id;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        playClick();
                        setActiveModule(mod.id as any);
                      }}
                      onMouseEnter={playHover}
                      className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-black text-white dark:bg-[#EDEDED] dark:text-[#09090B] font-bold shadow-xs'
                          : 'text-[#52525B] hover:text-[#09090B] hover:bg-black/[0.04] dark:text-[#71717A] dark:hover:text-white dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] ${isActive ? 'text-white dark:text-[#09090B] font-bold' : 'text-[#71717A] dark:text-[#52525B]'}`}>
                          {mod.num}
                        </span>
                        <span className={`text-[11px] tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>
                          {mod.title}
                        </span>
                      </div>

                      <span className={`text-[9px] tracking-wider font-mono ${isActive ? 'text-white/80 dark:text-black/60 font-semibold' : 'text-[#71717A] dark:text-[#52525B]'}`}>
                        {mod.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Barcode & Links Strip */}
            <div className="rounded-xl bg-[#F9F9FB] dark:bg-[#131418] border border-[#E2E4E8] dark:border-[#22242B] p-2 flex items-center justify-between gap-2 shrink-0 transition-colors">
              <div className="space-y-0.5 text-left">
                <div className="h-4.5 flex items-center gap-[1.5px] bg-black dark:bg-[#EDEDED] p-0.5 rounded-xs">
                  <span className="w-[1.5px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[1px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[2px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[1px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[3px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[1.5px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[1px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[2px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[1.5px] h-full bg-white dark:bg-[#09090B]" />
                  <span className="w-[3px] h-full bg-white dark:bg-[#09090B]" />
                </div>
                <div className="text-[7.5px] text-[#71717A] font-mono tracking-widest">
                  NITJ-IT-8.13
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[9px]">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 rounded bg-white hover:bg-[#F4F4F6] text-[#09090B] border border-[#D1D5DB] dark:bg-[#18181B] dark:hover:bg-[#27272A] dark:border-[#27272A] dark:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-1 rounded bg-white hover:bg-[#F4F4F6] text-[#09090B] border border-[#D1D5DB] dark:bg-[#18181B] dark:hover:bg-[#27272A] dark:border-[#27272A] dark:text-white transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

          </div>

          {/* ════════ RIGHT PANEL: ACTIVE TELEMETRY PANE (7 Cols) ════════ */}
          <div className="lg:col-span-7 rounded-xl bg-[#F9F9FB] dark:bg-[#0B0C0E] border border-[#E2E4E8] dark:border-[#1E2026] p-3 sm:p-4 overflow-y-auto h-full min-h-0 flex flex-col justify-between space-y-3 text-left transition-colors">
            
            <div className="space-y-3 h-full flex flex-col">
              {/* Terminal Command Prompt Header */}
              <div className="flex items-center justify-between text-xs text-[#71717A] pb-2 border-b border-[#E2E4E8] dark:border-[#1E2026] shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-[#52525B] dark:text-[#A1A1AA] font-mono text-[11px]">sajal@nitj:~/resume $</span>
                  <span className="text-[#09090B] dark:text-white font-medium text-[11px]">cat {activeModule}</span>
                  <span className="w-1.5 h-3 bg-black/80 dark:bg-white/80 animate-pulse" />
                </div>
                <span className="text-[9px] text-[#71717A] dark:text-[#52525B] uppercase tracking-wider font-mono">
                  VERIFIED RECORD
                </span>
              </div>

              {/* ── MODULE 01: TECHNICAL PROJECTS (EXACT FROM RESUME) ── */}
              {activeModule === 'systems' && (
                <div className="space-y-2.5">
                  <div className="flex items-end justify-between border-b border-[#E2E4E8] dark:border-[#1E2026] pb-1.5">
                    <div>
                      <div className="text-[9px] text-[#71717A] dark:text-[#52525B] tracking-wider uppercase font-mono">MODULE 01</div>
                      <h2 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white tracking-tight font-sans">
                        TECHNICAL PROJECTS
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#52525B] dark:text-[#A1A1AA] text-[9.5px] font-mono">
                      4 PRODUCTION BUILDS
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-3 rounded-lg bg-white dark:bg-[#121316] border border-[#E2E4E8] dark:border-[#22242B] hover:border-black/30 dark:hover:border-[#383B44] transition-all space-y-2 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm font-bold text-[#09090B] dark:text-white tracking-tight">
                                {proj.name}
                              </h3>
                              <span className="text-[#71717A] text-[11px]">
                                — {proj.subtitle}
                              </span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-black text-white dark:bg-[#18181B] dark:text-[#A1A1AA] text-[9px] font-mono border border-black dark:border-[#27272A]">
                            {proj.metric}
                          </span>
                        </div>

                        {/* Resume Bullets */}
                        <div className="space-y-1 text-xs text-[#3F3F46] dark:text-[#A1A1AA] leading-relaxed">
                          {(proj.bullets || [proj.description]).map((b, idx) => (
                            <p key={idx} className="flex items-start gap-1.5 text-[11px]">
                              <span className="text-[#09090B] dark:text-white font-bold">&gt;</span>
                              <span>{b}</span>
                            </p>
                          ))}
                        </div>

                        {/* Stack Badges & Actions */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E2E4E8] dark:border-white/5">
                          <div className="flex flex-wrap gap-1">
                            {proj.stack.map((s) => (
                              <span
                                key={s}
                                className="px-2 py-0.5 rounded bg-[#F4F4F6] text-[#09090B] dark:bg-[#18181B] dark:text-[#D4D4D8] text-[9.5px] font-mono border border-[#E2E4E8] dark:border-[#27272A]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 font-mono text-[10px]">
                            {proj.demo && (
                              <a
                                href={proj.demo}
                                target="_blank"
                                rel="noreferrer"
                                onMouseEnter={playHover}
                                className="px-2.5 py-0.5 rounded bg-black hover:bg-neutral-800 text-white dark:bg-[#18181B] dark:hover:bg-white dark:hover:text-black dark:text-[#D4D4D8] border border-black dark:border-[#27272A] transition-colors font-medium"
                              >
                                Live Demo ↗
                              </a>
                            )}
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                onMouseEnter={playHover}
                                className="px-2.5 py-0.5 rounded bg-white hover:bg-black hover:text-white text-[#09090B] dark:bg-[#18181B] dark:hover:bg-white dark:hover:text-black dark:text-[#D4D4D8] border border-[#D1D5DB] dark:border-[#27272A] transition-colors"
                              >
                                GitHub ↗
                              </a>
                            )}
                            <button
                              onClick={() => {
                                playClick();
                                onOpenProjectModal(proj.id);
                              }}
                              onMouseEnter={playHover}
                              className="px-2.5 py-0.5 rounded bg-white hover:bg-black hover:text-white text-[#09090B] dark:bg-[#18181B] dark:hover:bg-white dark:hover:text-black dark:text-[#D4D4D8] border border-[#D1D5DB] dark:border-[#27272A] transition-colors cursor-pointer"
                            >
                              Spec ↗
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── MODULE 02: TECHNICAL SKILLS (EXACT FROM RESUME) ── */}
              {activeModule === 'skills' && (
                <div className="space-y-2.5">
                  <div className="flex items-end justify-between border-b border-[#E2E4E8] dark:border-[#1E2026] pb-1.5">
                    <div>
                      <div className="text-[9px] text-[#71717A] dark:text-[#52525B] tracking-wider uppercase font-mono">MODULE 02</div>
                      <h2 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white tracking-tight font-sans">
                        TECHNICAL SKILLS
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#52525B] dark:text-[#A1A1AA] text-[9.5px] font-mono">
                      CORE STACK
                    </span>
                  </div>

                  <div className="space-y-2">
                    {skills.categories.map((cat) => (
                      <div
                        key={cat.title}
                        className="p-3 rounded-lg bg-white dark:bg-[#121316] border border-[#E2E4E8] dark:border-[#22242B] space-y-1.5 shadow-xs"
                      >
                        <div className="text-[10px] text-[#71717A] tracking-wider uppercase font-bold">
                          {cat.title}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded bg-[#F4F4F6] border border-[#E2E4E8] text-[#09090B] dark:bg-[#18181B] dark:border-[#27272A] dark:text-white text-xs font-mono font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── MODULE 03: EXPERIENCE & EDUCATION (EXACT FROM RESUME) ── */}
              {activeModule === 'timeline' && (
                <div className="space-y-2.5">
                  <div className="flex items-end justify-between border-b border-[#E2E4E8] dark:border-[#1E2026] pb-1.5">
                    <div>
                      <div className="text-[9px] text-[#71717A] dark:text-[#52525B] tracking-wider uppercase font-mono">MODULE 03</div>
                      <h2 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white tracking-tight font-sans">
                        EDUCATION &amp; ACHIEVEMENTS
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#52525B] dark:text-[#A1A1AA] text-[9.5px] font-mono">
                      CGPA 8.13
                    </span>
                  </div>

                  {/* Education & Core Coursework */}
                  <div className="p-3 rounded-lg bg-white dark:bg-[#121316] border border-[#E2E4E8] dark:border-[#22242B] space-y-2 shadow-xs">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-[#09090B] dark:text-white">Dr. B. R. Ambedkar National Institute of Technology Jalandhar</div>
                        <div className="text-[#52525B] dark:text-[#A1A1AA] text-[11px]">B.Tech in Information Technology — <span className="text-[#09090B] dark:text-white font-bold">CGPA: 8.13</span></div>
                      </div>
                      <div className="text-[#71717A] text-[9.5px] font-mono">2025 — 2029</div>
                    </div>

                    <div className="pt-1.5 border-t border-[#E2E4E8] dark:border-white/5 space-y-1">
                      <div className="text-[9px] text-[#71717A] uppercase font-bold tracking-wider">
                        RELEVANT COURSEWORK
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {profile.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded bg-[#F4F4F6] text-[#09090B] dark:bg-[#18181B] dark:text-[#D4D4D8] text-[9.5px] border border-[#E2E4E8] dark:border-[#27272A]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements List from Resume */}
                  <div className="p-3 rounded-lg bg-white dark:bg-[#121316] border border-[#E2E4E8] dark:border-[#22242B] space-y-2 shadow-xs">
                    <div className="text-[9px] text-[#71717A] uppercase font-bold tracking-wider border-b border-[#E2E4E8] dark:border-white/5 pb-1">
                      ACHIEVEMENTS &amp; EXTRACURRICULAR
                    </div>

                    <div className="space-y-2 text-xs">
                      {profile.achievements.map((ach) => (
                        <div key={ach.title} className="space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#09090B] dark:text-white text-[11px]">{ach.title}</span>
                            <span className="px-1.5 py-0.2 rounded bg-black text-white dark:bg-[#18181B] dark:text-white text-[9px] font-mono border border-black dark:border-[#27272A]">
                              {ach.stat}
                            </span>
                          </div>
                          <p className="text-[#52525B] dark:text-[#A1A1AA] text-[11px] leading-relaxed">
                            {ach.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── MODULE 04: EMBEDDED DEVELOPER CLI / SHELL (REPLACES FASHION/MEDIA) ── */}
              {activeModule === 'cli' && (
                <div className="flex-1 min-h-0 flex flex-col space-y-2">
                  <div className="flex items-end justify-between border-b border-[#E2E4E8] dark:border-[#1E2026] pb-1.5 shrink-0">
                    <div>
                      <div className="text-[9px] text-[#71717A] dark:text-[#52525B] tracking-wider uppercase font-mono">MODULE 04</div>
                      <h2 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white tracking-tight font-sans">
                        DEVELOPER SHELL // ZSH
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#52525B] dark:text-[#A1A1AA] text-[9.5px] font-mono">
                      TRY &apos;HELP&apos; OR &apos;PROJECTS&apos;
                    </span>
                  </div>

                  {/* Embedded Terminal Frame */}
                  <div className="flex-1 min-h-[340px] rounded-lg bg-[#0E0E11] border border-[#22242A] overflow-hidden flex flex-col shadow-inner">
                    <div className="h-7 px-3 bg-[#131417] text-white font-mono text-[10px] flex items-center justify-between border-b border-[#22242A] select-none shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                        </div>
                        <span className="text-[#A1A1AA]">sajal@nitj:~ (zsh)</span>
                      </div>
                      <span className="text-[#52525B]">PORT: LOCALHOST</span>
                    </div>

                    <div className="flex-1 min-h-0 overflow-hidden">
                      <DeveloperTerminal onOpenModalProject={onOpenProjectModal} />
                    </div>
                  </div>
                </div>
              )}

              {/* ── MODULE 05: CONTACT & DISPATCH ── */}
              {activeModule === 'dispatch' && (
                <div className="space-y-2.5">
                  <div className="flex items-end justify-between border-b border-[#E2E4E8] dark:border-[#1E2026] pb-1.5">
                    <div>
                      <div className="text-[9px] text-[#71717A] dark:text-[#52525B] tracking-wider uppercase font-mono">MODULE 05</div>
                      <h2 className="text-base sm:text-lg font-bold text-[#09090B] dark:text-white tracking-tight font-sans">
                        CONTACT &amp; DIRECT RELAY
                      </h2>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-white dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#52525B] dark:text-[#A1A1AA] text-[9.5px] font-mono">
                      DIRECT RELAY
                    </span>
                  </div>

                  {/* Direct Contact Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      onClick={() => handleCopy(profile.email, 'email')}
                      className="p-2.5 rounded-lg bg-white dark:bg-[#121316] hover:bg-[#F4F4F6] dark:hover:bg-[#18181B] border border-[#E2E4E8] dark:border-[#22242B] text-[#09090B] dark:text-white font-mono text-xs flex items-center justify-between transition-colors cursor-pointer text-left shadow-xs"
                    >
                      <div>
                        <div className="text-[8px] text-[#71717A]">EMAIL</div>
                        <div className="text-[11px] truncate max-w-[130px] font-medium">{profile.email}</div>
                      </div>
                      <span className="text-[9px] text-[#71717A]">
                        {copiedField === 'email' ? '✓' : 'COPY'}
                      </span>
                    </button>

                    <button
                      onClick={() => handleCopy(profile.phone, 'phone')}
                      className="p-2.5 rounded-lg bg-white dark:bg-[#121316] hover:bg-[#F4F4F6] dark:hover:bg-[#18181B] border border-[#E2E4E8] dark:border-[#22242B] text-[#09090B] dark:text-white font-mono text-xs flex items-center justify-between transition-colors cursor-pointer text-left shadow-xs"
                    >
                      <div>
                        <div className="text-[8px] text-[#71717A]">PHONE</div>
                        <div className="text-[11px] font-medium">{profile.phone}</div>
                      </div>
                      <span className="text-[9px] text-[#71717A]">
                        {copiedField === 'phone' ? '✓' : 'COPY'}
                      </span>
                    </button>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="p-2.5 rounded-lg bg-white dark:bg-[#121316] hover:bg-[#F4F4F6] dark:hover:bg-[#18181B] border border-[#E2E4E8] dark:border-[#22242B] text-[#09090B] dark:text-white font-mono text-xs flex items-center justify-between transition-colors cursor-pointer shadow-xs"
                    >
                      <div>
                        <div className="text-[8px] text-[#71717A]">RESUME</div>
                        <div className="text-[11px] font-medium">RESUME.PDF</div>
                      </div>
                      <Download size={11} className="text-[#71717A] dark:text-[#A1A1AA]" />
                    </a>
                  </div>

                  {/* Direct Contact Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      playClick();
                      if (!dispatchMessage.trim()) return;
                      setDispatchSent(true);
                      setTimeout(() => {
                        setSenderName('');
                        setSenderEmail('');
                        setDispatchMessage('');
                        setDispatchSent(false);
                      }, 4000);
                    }}
                    className="p-3 rounded-lg bg-white dark:bg-[#121316] border border-[#E2E4E8] dark:border-[#22242B] space-y-2.5 shadow-xs transition-colors"
                  >
                    <div className="text-xs font-bold text-[#09090B] dark:text-white flex items-center justify-between border-b border-[#E2E4E8] dark:border-white/5 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck size={12} className="text-[#09090B] dark:text-white" />
                        <span>SEND MESSAGE TO SAJAL</span>
                      </div>
                      <span className="text-[9px] text-[#71717A] dark:text-[#52525B]">DIRECT RELAY</span>
                    </div>

                    {dispatchSent ? (
                      <div className="py-6 text-center space-y-1.5">
                        <div className="w-7 h-7 mx-auto rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 flex items-center justify-center text-[#09090B] dark:text-white">
                          <Check size={14} />
                        </div>
                        <div className="text-xs font-bold text-[#09090B] dark:text-white">MESSAGE DISPATCHED</div>
                        <p className="text-[11px] text-[#52525B] dark:text-[#A1A1AA]">
                          Logged to Sajal&apos;s direct queue at {profile.email}.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <div className="space-y-0.5">
                            <label className="text-[8.5px] text-[#71717A] tracking-wider uppercase">
                              NAME
                            </label>
                            <input
                              type="text"
                              required
                              value={senderName}
                              onChange={(e) => setSenderName(e.target.value)}
                              placeholder="Alex Mercer"
                              className="w-full px-2.5 py-1 rounded bg-[#F9F9FB] dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#09090B] dark:text-white font-mono text-xs focus:border-black dark:focus:border-white focus:outline-none"
                            />
                          </div>

                          <div className="space-y-0.5">
                            <label className="text-[8.5px] text-[#71717A] tracking-wider uppercase">
                              EMAIL
                            </label>
                            <input
                              type="email"
                              required
                              value={senderEmail}
                              onChange={(e) => setSenderEmail(e.target.value)}
                              placeholder="alex@example.com"
                              className="w-full px-2.5 py-1 rounded bg-[#F9F9FB] dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#09090B] dark:text-white font-mono text-xs focus:border-black dark:focus:border-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <label className="text-[8.5px] text-[#71717A] tracking-wider uppercase">
                            MESSAGE
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={dispatchMessage}
                            onChange={(e) => setDispatchMessage(e.target.value)}
                            placeholder="Software opportunities, ML systems, or collaboration scope..."
                            className="w-full px-2.5 py-1 rounded bg-[#F9F9FB] dark:bg-[#18181B] border border-[#D1D5DB] dark:border-[#27272A] text-[#09090B] dark:text-white font-mono text-xs focus:border-black dark:focus:border-white focus:outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          onMouseEnter={playHover}
                          className="w-full py-2 rounded bg-black hover:bg-neutral-800 text-white dark:bg-[#EDEDED] dark:hover:bg-white dark:text-[#09090B] font-bold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-[0.99] cursor-pointer shadow-sm"
                        >
                          <Send size={10} />
                          <span>SEND DISPATCH →</span>
                        </button>
                      </>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Public Signal Relays Footer */}
            <div className="pt-2 border-t border-[#E2E4E8] dark:border-[#1E2026] flex items-center justify-between text-[10px] text-[#71717A] shrink-0">
              <span className="text-[8.5px] tracking-wider uppercase font-mono">CONTACT // RELAYS:</span>
              <div className="flex items-center gap-3 font-mono">
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-white transition-colors">
                  GitHub ↗
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
                <a href={`mailto:${profile.email}`} className="text-[#52525B] hover:text-[#09090B] dark:text-[#A1A1AA] dark:hover:text-white transition-colors">
                  Email ↗
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ── ENLARGED PHOTO LIGHTBOX MODAL WITH WHITE BORDER & LIL ANIMATION ── */}
      <AnimatePresence>
        {isPhotoZoomed && (
          <div
            onClick={() => setIsPhotoZoomed(false)}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md cursor-pointer select-none"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.88, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 14 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              className="relative flex flex-col items-center cursor-default max-w-sm sm:max-w-md w-full"
            >
              {/* Image Frame with Distinct White Border & Viewfinder Reticles */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-[0_0_50px_rgba(255,255,255,0.25)] bg-[#0A0B0E]">
                {/* Precision Tactical Viewfinder Corner Reticles */}
                <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white z-20 pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white z-20 pointer-events-none" />

                {/* Close Button on Top Right */}
                <button
                  onClick={() => setIsPhotoZoomed(false)}
                  className="absolute top-3 right-3 z-30 p-1.5 rounded-full bg-black/75 hover:bg-white hover:text-black text-white border border-white/40 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={15} />
                </button>

                {/* Natural Full Color Portrait */}
                <img
                  src={getAssetPath('/avatar.png')}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top contrast-[1.03] brightness-100"
                />

                {/* Bottom Spec Bar inside Image Frame */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-3.5 pt-8 flex items-center justify-between text-white font-mono text-[11px] z-10">
                  <div>
                    <div className="font-bold text-white text-xs tracking-wide">{profile.name}</div>
                    <div className="text-[9.5px] text-[#A1A1AA]">NIT JALANDHAR // IT · 2025–2029</div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white text-black font-bold uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Bottom Esc Tip */}
              <div className="mt-2.5 text-center font-mono text-[10px] text-white/80 tracking-widest uppercase">
                CLICK OUTSIDE OR PRESS &lsquo;ESC&rsquo; TO CLOSE
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
