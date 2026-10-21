'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowUpRight, Copy, Check, X, Terminal, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects, Project } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface DevDexExpandedProps {
  onClose: () => void;
  onOpenProjectModal: (id: string) => void;
  onOpenTerminal?: () => void;
}

export default function DevDexExpanded({
  onClose,
  onOpenProjectModal,
  onOpenTerminal,
}: DevDexExpandedProps) {
  const { playClick, playHover } = useSound();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  // Audio Speech Synthesis
  const handleToggleSpeech = () => {
    playClick();
    if (typeof window === 'undefined') return;

    if (isPlayingAudio) {
      window.speechSynthesis?.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis?.cancel();
      const utterance = new SpeechSynthesisUtterance(profile.transcript);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => {
        setIsPlayingAudio(false);
        setActiveDotIndex(0);
      };
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis?.speak(utterance);
    }
  };

  // Animate dots when audio is playing
  useEffect(() => {
    if (!isPlayingAudio) return;
    const interval = setInterval(() => {
      setActiveDotIndex((prev) => (prev + 1) % 18);
    }, 180);
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        window.speechSynthesis?.cancel();
      }
    };
  }, []);

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center select-none py-2"
    >
      {/* Top Floating Control: Collapse Button */}
      <div className="w-full flex items-center justify-between pb-3 px-2 font-mono text-xs text-[#717789]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-semibold">DEVDEX DUAL CONSOLE // ACTIVE</span>
        </div>

        <div className="flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={() => {
                playClick();
                onOpenTerminal();
              }}
              onMouseEnter={playHover}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15 hover:border-white/40 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <Terminal size={11} className="text-emerald-400" />
              <span>TERMINAL (~)</span>
            </button>
          )}

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            onMouseEnter={playHover}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            title="Fold Back into Pocket Badge"
          >
            <X size={12} />
            <span>FOLD DEVDEX</span>
          </button>
        </div>
      </div>

      {/* ── DUAL CONSOLE GRID: CARD 1 (LEFT) + CARD 2 (RIGHT) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
        
        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* CARD 1: DEVELOPER IDENTITY CARD (5 COLS)                         */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 rounded-[34px] bg-[#0D0F14] border border-[#202430] p-6 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
          
          {/* Top Notch / Speaker Slot */}
          <div className="w-16 h-1 rounded-full bg-[#1E2330] mx-auto -mt-1" />

          {/* 1. Header Profile Box */}
          <div className="grid grid-cols-12 gap-4 items-center">
            
            {/* Viewfinder Wireframe Avatar (5 Cols) */}
            <div className="col-span-5 relative aspect-square w-full rounded-md bg-[#090A0E] border border-white/5 flex items-center justify-center p-2">
              {/* Viewfinder Bracket Corners: ┌ ┐ └ ┘ */}
              <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-white/70" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-white/70" />
              <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-white/70" />
              <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-white/70" />

              {/* Minimal Wireframe Character Illustration (From Image 1) */}
              <svg className="w-16 h-16 text-white stroke-current fill-none" viewBox="0 0 64 64">
                {/* Beanie / Cap */}
                <path d="M22 24C22 18 26 14 32 14C38 14 42 18 42 24" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 24H44" strokeWidth="2.5" strokeLinecap="round" />
                {/* Face */}
                <circle cx="32" cy="30" r="9" strokeWidth="2" />
                {/* Eyes & Smile */}
                <circle cx="29" cy="29" r="1" fill="currentColor" />
                <circle cx="35" cy="29" r="1" fill="currentColor" />
                <path d="M29 33C30 35 34 35 35 33" strokeWidth="1.5" strokeLinecap="round" />
                {/* Torso & Collar */}
                <path d="M23 48V42C23 39 27 38 32 38C37 38 41 39 41 42V48" strokeWidth="2" />
                <path d="M32 38V48" strokeWidth="1.5" />
                <path d="M27 41L32 44L37 41" strokeWidth="1.5" />
                {/* Outstretched Arms Frame */}
                <path d="M19 48L24 43" strokeWidth="2" strokeLinecap="round" />
                <path d="M45 48L40 43" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Department & Verified Badge (7 Cols) */}
            <div className="col-span-7 space-y-3 text-left">
              {/* Verified Pill with Hazard Stripes */}
              <div className="rounded overflow-hidden bg-white text-black font-mono font-black text-[10px] tracking-wider uppercase flex flex-col">
                <div className="py-1 px-3 text-center tracking-widest font-bold">
                  VERIFIED
                </div>
                <div className="h-1.5 w-full bg-[repeating-linear-gradient(45deg,#000,#000_3px,#fff_3px,#fff_6px)]" />
              </div>

              {/* Department */}
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#636877] uppercase block tracking-wider">
                  DEPARTMENT
                </span>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-tight">
                  {profile.department}
                </div>
                <div className="font-mono text-[10px] text-[#8E92A0] uppercase">
                  NIT JALANDHAR
                </div>
              </div>

              {/* Title */}
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-[#636877] uppercase block tracking-wider">
                  TITLE
                </span>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-wide">
                  {profile.title}
                </div>
              </div>
            </div>

          </div>

          {/* 2. Name & Digital Signature Box */}
          <div className="grid grid-cols-12 gap-3 items-center border-t border-b border-[#1A1D27] py-4">
            {/* Name Column (7 Cols) */}
            <div className="col-span-7 space-y-0.5 text-left">
              <span className="font-mono text-[9px] text-[#636877] uppercase tracking-wider block">
                NAME
              </span>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight">
                {profile.fullName}
              </h3>
              <p className="font-mono text-[10px] text-[#8E92A0] uppercase tracking-widest">
                SAJAL MALHOTRA
              </p>
            </div>

            {/* Digital Signature Card (5 Cols) */}
            <div className="col-span-5 rounded-md bg-[#E6E8EE] p-2 flex flex-col justify-between h-16 shadow-inner">
              {/* Handwritten Signature SVG */}
              <svg className="w-full h-8 text-black fill-none stroke-current" viewBox="0 0 100 30">
                <path
                  d="M10 20C15 8 20 6 25 15C30 24 35 12 40 18C45 22 55 10 65 14C75 18 85 12 90 14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="font-mono text-[8px] font-bold text-black/70 tracking-widest text-center uppercase">
                SIGNATURE
              </div>
            </div>
          </div>

          {/* 3. Technical 3x2 Metadata Grid with Compass Centerpiece */}
          <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
            {/* Box 1: Org */}
            <div className="p-2 rounded bg-[#12151D] border border-white/5 space-y-0.5 text-left">
              <span className="text-[8px] text-[#636877] uppercase block">ORGANIZATION</span>
              <div className="text-white font-bold flex items-center justify-between">
                <span>{profile.organization}</span>
                <ArrowUpRight size={10} className="text-[#636877]" />
              </div>
            </div>

            {/* Center: Compass Dial Icon */}
            <div className="row-span-2 rounded bg-[#12151D] border border-white/5 flex items-center justify-center p-2">
              <div className="w-12 h-12 rounded-full bg-[#181C26] border border-[#2B3040] flex items-center justify-center shadow-inner">
                <svg className="w-6 h-6 text-white fill-current transform -rotate-12" viewBox="0 0 24 24">
                  <path d="M12 2L4 20l8-4 8 4L12 2z" />
                </svg>
              </div>
            </div>

            {/* Box 3: X Twitter */}
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="p-2 rounded bg-[#12151D] border border-white/5 space-y-0.5 text-left hover:border-white/20 transition-colors"
            >
              <span className="text-[8px] text-[#636877] uppercase block">X</span>
              <div className="text-white font-bold flex items-center justify-between truncate">
                <span>{profile.handle}</span>
                <ArrowUpRight size={10} className="text-[#636877]" />
              </div>
            </a>

            {/* Box 4: College */}
            <div className="p-2 rounded bg-[#12151D] border border-white/5 space-y-0.5 text-left">
              <span className="text-[8px] text-[#636877] uppercase block">COLLEGE</span>
              <div className="text-white font-bold flex items-center justify-between">
                <span>{profile.college}</span>
                <ArrowUpRight size={10} className="text-[#636877]" />
              </div>
            </div>

            {/* Box 6: GitHub */}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="p-2 rounded bg-[#12151D] border border-white/5 space-y-0.5 text-left hover:border-white/20 transition-colors"
            >
              <span className="text-[8px] text-[#636877] uppercase block">GITHUB</span>
              <div className="text-white font-bold flex items-center justify-between truncate">
                <span>sajal</span>
                <ArrowUpRight size={10} className="text-[#636877]" />
              </div>
            </a>
          </div>

          {/* 4. Bottom Engineering Hazard Banner */}
          <div className="py-2 px-3 rounded-lg bg-[#E6E8EE] text-[#0A0B0E] font-mono font-bold text-[10px] tracking-widest uppercase flex items-center justify-between shadow">
            <span>/////</span>
            <span>/ DEVDEX ENGINEERING /</span>
            <span>/////</span>
          </div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* CARD 2: DEVDEX AUDIO ENGINE (7 COLS)                             */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 rounded-[34px] bg-[#0D0F14] border border-[#202430] p-6 sm:p-7 shadow-2xl flex flex-col justify-between space-y-5 text-left relative overflow-hidden">
          
          {/* Top Engine Header */}
          <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[#1A1D27]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold tracking-wider uppercase">
                DEVDEX AUDIO ENGINE
              </span>
            </div>

            <div className="text-[#6E7383] tracking-widest uppercase text-[11px]">
              {profile.model}
            </div>
          </div>

          {/* Voice Greeting Tag & Big Headline */}
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#161922] border border-white/10 font-mono text-[9px] text-[#8E92A2] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>VOICE GREETING</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
              {profile.audioGreeting}
            </h2>

            <p className="font-mono text-xs text-[#8E92A2]">
              {profile.audioBriefing}
            </p>
          </div>

          {/* Audio Waveform Player Strip with Play Button */}
          <div className="p-3.5 rounded-xl bg-[#11141C] border border-[#1E222D] flex items-center justify-between gap-4">
            {/* Waveform Progression Dots */}
            <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => {
                const isActive = isPlayingAudio && i <= activeDotIndex;
                return (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all duration-150 ${
                      isActive
                        ? 'w-2 bg-white shadow-[0_0_8px_#ffffff]'
                        : 'w-1.5 bg-[#2B3040]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Play Summary Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleToggleSpeech}
              onMouseEnter={playHover}
              className="px-4 py-2 rounded-xl bg-[#E6E8EE] hover:bg-white text-[#0B0D12] font-mono font-bold text-xs tracking-wider uppercase transition-all shadow flex items-center gap-2 cursor-pointer shrink-0"
            >
              {isPlayingAudio ? (
                <>
                  <Pause size={12} className="fill-current" />
                  <span>PAUSE BRIEFING</span>
                </>
              ) : (
                <>
                  <Play size={12} className="fill-current" />
                  <span>PLAY SUMMARY</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Transcript Readout Box */}
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] text-[#636877] tracking-wider uppercase block">
              TRANSCRIPT READOUT
            </span>

            <div className="p-3.5 rounded-xl bg-[#08090D] border border-[#1A1D26] font-mono text-[11px] sm:text-xs text-[#9DA2B4] leading-relaxed max-h-24 overflow-y-auto custom-scrollbar">
              {profile.transcript}
            </div>
          </div>

          {/* Core Builds Section (3 Cards) */}
          <div className="space-y-2">
            <span className="font-mono text-[9px] text-[#636877] tracking-wider uppercase block">
              CORE BUILDS
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono">
              {projects.map((proj: Project) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    playClick();
                    onOpenProjectModal(proj.id);
                  }}
                  onMouseEnter={playHover}
                  className="p-2.5 rounded-lg bg-[#11141C] border border-[#1E222D] hover:border-[#383F54] transition-all cursor-pointer group flex flex-col justify-between space-y-1 shadow"
                >
                  <div className="text-white font-bold text-xs group-hover:text-cyan-300 transition-colors truncate">
                    {proj.name}
                  </div>
                  <div className="text-[9px] text-[#636877] uppercase truncate tracking-wider">
                    {proj.tagline}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Email & Copy Email Button */}
          <div className="pt-2 border-t border-[#1A1D27] flex items-center justify-between font-mono text-xs">
            <span className="text-[#8E92A2] text-[11px]">
              {profile.email}
            </span>

            <button
              onClick={handleCopyEmail}
              onMouseEnter={playHover}
              className="px-3 py-1.5 rounded-lg bg-[#161922] hover:bg-white hover:text-black border border-white/10 text-white font-mono text-[10px] font-semibold tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
              <span>{copiedEmail ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
