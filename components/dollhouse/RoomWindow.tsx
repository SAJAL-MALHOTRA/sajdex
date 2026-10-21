'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, ExternalLink, Download, ArrowUpRight, Copy, Check, Send, Trophy, BookOpen } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects, Project } from '@/data/projects';
import { skills, SkillCategory } from '@/data/skills';
import { experiences, ExperienceItem } from '@/data/experience';
import { badges, Badge } from '@/data/badges';
import { useSound } from '@/hooks/useSound';

interface RoomWindowProps {
  room: string | null;
  onClose: () => void;
  onOpenProjectModal?: (id: string) => void;
  onOpenRoom?: (id: string) => void;
}

export default function RoomWindow({
  room,
  onClose,
  onOpenProjectModal,
  onOpenRoom,
}: RoomWindowProps) {
  const { playClick } = useSound();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  if (!room || room === 'home' || room === 'overview') return null;

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.links.email || 'sam@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getRoomTitle = () => {
    switch (room) {
      case 'about':
        return 'ROOM 01 // BEDROOM (ABOUT ME)';
      case 'projects':
        return 'ROOM 02 // DEV WORKBENCH (PROJECTS)';
      case 'education':
        return 'ROOM 03 // BOOKSHELF (EDUCATION & ACADEMICS)';
      case 'experience':
        return 'ROOM 04 // WARDROBE (OPERATIONAL EXPERIENCE)';
      case 'staircase':
        return 'ROOM 05 // THE STAIRCASE (HOUSE NAVIGATION)';
      case 'achievements':
        return 'ROOM 06 // TROPHY DISPLAY (ACHIEVEMENTS & AWARDS)';
      case 'skills':
        return 'ROOM 07 // ALCHEMY LAB (TECHNICAL STACK)';
      case 'resume':
        return 'ROOM 08 // THE GARAGE (RÉSUMÉ ARCHIVE)';
      case 'contact':
        return 'ROOM 09 // DISPATCH DESK (GET IN TOUCH)';
      default:
        return 'DOLLHOUSE OS // WINDOW';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 pointer-events-none select-none">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs pointer-events-auto cursor-pointer"
        />

        {/* Retro Window Container */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#1D1026] border-2 border-[#FF4081] rounded-lg shadow-2xl overflow-hidden pointer-events-auto pixel-box-shadow flex flex-col max-h-[88vh]"
        >
          {/* Window Header Bar */}
          <div className="h-8 px-3 bg-[#FF4081] text-[#1D1026] font-pixel text-xs font-bold flex items-center justify-between select-none shrink-0 shadow-sm">
            <span className="tracking-wide text-white uppercase">{getRoomTitle()}</span>
            <div className="flex items-center gap-1.5 text-white">
              <button
                onClick={onClose}
                className="hover:bg-black/20 p-1 rounded-xs cursor-pointer transition-colors"
                title="Minimize"
              >
                <Minus size={12} />
              </button>
              <button
                onClick={onClose}
                className="hover:bg-black/20 p-1 rounded-xs cursor-pointer transition-colors"
                title="Maximize"
              >
                <Square size={11} />
              </button>
              <button
                onClick={() => {
                  playClick();
                  onClose();
                }}
                className="hover:bg-red-600 p-1 rounded-xs cursor-pointer transition-colors"
                title="Close"
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Window Body with Scrollable Area */}
          <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar space-y-5 text-[#FCE4EC] font-sans">
            
            {/* ══════════════════════════════════════════════════════════
                01 ABOUT ME (BEDROOM)
            ══════════════════════════════════════════════════════════ */}
            {room === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-[#2D163B] border-2 border-[#FF4081] flex items-center justify-center text-2xl shadow-md">
                    🛋️
                  </div>
                  <div>
                    <h3 className="font-pixel text-2xl text-[#FF80AB] font-bold">
                      {profile.fullName || profile.name}
                    </h3>
                    <p className="font-mono text-xs text-[#E1BEE7]">{profile.title}</p>
                    <p className="font-mono text-[11px] text-[#CE93D8]">{profile.location} · {profile.batch}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#281335] border border-[#FF4081]/30 rounded-lg text-sm text-[#F3E5F5] leading-relaxed">
                  {profile.description}
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-pixel text-center">
                  <div className="p-2 bg-[#251032] border border-[#FF4081]/20 rounded">
                    <span className="text-lg text-[#FF4081] block">6+</span>
                    <span className="text-[10px] text-neutral-300">PROJECTS</span>
                  </div>
                  <div className="p-2 bg-[#251032] border border-[#FF4081]/20 rounded">
                    <span className="text-lg text-[#FF4081] block">NITJ</span>
                    <span className="text-[10px] text-neutral-300">CAMPUS</span>
                  </div>
                  <div className="p-2 bg-[#251032] border border-[#FF4081]/20 rounded">
                    <span className="text-lg text-[#FF4081] block">FULL</span>
                    <span className="text-[10px] text-neutral-300">STACK & AI</span>
                  </div>
                  <div className="p-2 bg-[#251032] border border-[#FF4081]/20 rounded">
                    <span className="text-lg text-[#FF4081] block">2029</span>
                    <span className="text-[10px] text-neutral-300">GRADUATION</span>
                  </div>
                </div>

                {/* Personal Motto */}
                <div className="p-3 bg-[#1A0B22] border-l-4 border-[#FF4081] rounded-r text-xs text-[#F8BBD0] italic">
                  &ldquo;{profile.quote}&rdquo;
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                02 PROJECTS (DEV WORKBENCH)
            ══════════════════════════════════════════════════════════ */}
            {room === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#FF4081]/30 pb-2">
                  <p className="font-pixel text-xs text-[#FF80AB]">
                    FEATURED CREATIONS & OPEN SOURCE SYSTEMS
                  </p>
                  <span className="font-mono text-[10px] text-neutral-400">
                    {projects.length} PROJECTS REGISTERED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projects.map((p: Project) => (
                    <div
                      key={p.id}
                      className="p-3 rounded-lg bg-[#281335] border border-[#FF4081]/40 hover:border-[#FF4081] transition-all flex flex-col justify-between group shadow-sm"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <h4 className="font-pixel text-sm text-white group-hover:text-[#FF80AB] transition-colors">
                            {p.name}
                          </h4>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1B0B24] text-[#E1BEE7] border border-[#FF4081]/20">
                            {p.tagline}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 line-clamp-2 mb-2.5">
                          {p.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1">
                          {p.stack.slice(0, 3).map((t: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1C0D26] text-[#FF80AB]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2 pt-1 border-t border-[#FF4081]/20">
                          {onOpenProjectModal && (
                            <button
                              onClick={() => {
                                playClick();
                                onOpenProjectModal(p.id);
                              }}
                              className="flex-1 py-1 rounded bg-[#FF4081] hover:bg-[#F50057] text-[#1D1026] font-pixel text-[10px] font-bold text-center transition-colors cursor-pointer"
                            >
                              DETAILS
                            </button>
                          )}
                          {(p.githubUrl || p.github) && (
                            <a
                              href={p.githubUrl || p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded bg-[#1B0B24] hover:bg-[#FF4081] hover:text-[#1D1026] text-neutral-300 transition-colors"
                              title="GitHub Repo"
                            >
                              <ExternalLink size={12} />
                            </a>
                          )}
                          {(p.liveUrl || p.demo) && (
                            <a
                              href={p.liveUrl || p.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded bg-[#1B0B24] hover:bg-[#FF4081] hover:text-[#1D1026] text-neutral-300 transition-colors"
                              title="Live Demo"
                            >
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                03 EDUCATION (BOOKSHELF)
            ══════════════════════════════════════════════════════════ */}
            {room === 'education' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#281335] border border-[#FF4081]/40 rounded-lg space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-pixel text-lg text-white">
                        Dr. B. R. Ambedkar National Institute of Technology (NIT Jalandhar)
                      </h4>
                      <p className="font-mono text-xs text-[#FF80AB]">
                        Bachelor of Technology in Information Technology
                      </p>
                    </div>
                    <span className="font-pixel text-xs px-2 py-0.5 rounded bg-[#1A0B22] text-[#81D4FA] border border-[#81D4FA]/30">
                      2024 – 2029
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Focusing on Data Structures & Algorithms, Machine Learning Systems, Database Architecture, and Distributed Systems. Active participant in college tech initiatives and hackathons.
                  </p>
                </div>

                {/* Core Academics & Knowledge Shelf */}
                <div className="space-y-2">
                  <h5 className="font-pixel text-xs text-[#FF80AB] tracking-wider uppercase flex items-center gap-1.5">
                    <BookOpen size={12} />
                    <span>Core Coursework & Studies</span>
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                    {[
                      'Data Structures & Algorithms',
                      'Object Oriented Programming',
                      'Operating Systems',
                      'Database Management (SQL)',
                      'Machine Learning Fundamentals',
                      'Computer Networks',
                    ].map((subject, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded bg-[#200E2C] border border-[#FF4081]/20 text-neutral-200"
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                04 EXPERIENCE (WARDROBE)
            ══════════════════════════════════════════════════════════ */}
            {room === 'experience' && (
              <div className="space-y-3">
                <p className="font-pixel text-xs text-[#FF80AB] tracking-wider uppercase">
                  OPERATIONAL TIMELINE & ROLES
                </p>

                <div className="space-y-3">
                  {experiences.map((exp: ExperienceItem, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#281335] border border-[#FF4081]/30 hover:border-[#FF4081] transition-all space-y-2 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <h4 className="font-pixel text-sm text-white">{exp.role}</h4>
                          <p className="font-mono text-xs text-[#FF80AB]">{exp.organization}</p>
                        </div>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1B0B24] text-neutral-400 self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {exp.summary}
                      </p>

                      {exp.highlights && (
                        <ul className="list-disc list-inside text-xs text-[#E1BEE7] space-y-1 pt-1">
                          {exp.highlights.map((h: string, hIdx: number) => (
                            <li key={hIdx}>{h}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                05 THE STAIRCASE (HOUSE NAVIGATION)
            ══════════════════════════════════════════════════════════ */}
            {room === 'staircase' && (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#341A42] border-2 border-[#FF4081] flex items-center justify-center text-3xl shadow-lg">
                  🪜
                </div>

                <div>
                  <h3 className="font-pixel text-xl text-white">THE CENTRAL STAIRCASE</h3>
                  <p className="text-xs text-[#E1BEE7] font-mono mt-1">
                    Connects all 3 levels of Sajal&apos;s architectural dollhouse.
                  </p>
                </div>

                {/* Level Navigation Jumpers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#281335] border border-[#FF4081]/30 flex flex-col justify-between space-y-2">
                    <span className="font-pixel text-xs text-[#FF80AB]">LEVEL 3: ATTIC</span>
                    <p className="text-[11px] text-neutral-400">About Me, Projects Studio, and Bookshelf.</p>
                    <button
                      onClick={() => onOpenRoom && onOpenRoom('projects')}
                      className="py-1 rounded bg-[#FF4081] text-[#1D1026] font-pixel text-xs font-bold hover:bg-[#F50057] transition-colors cursor-pointer"
                    >
                      GO TO PROJECTS
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-[#281335] border border-[#FF4081]/30 flex flex-col justify-between space-y-2">
                    <span className="font-pixel text-xs text-[#FF80AB]">LEVEL 2: MID-FLOOR</span>
                    <p className="text-[11px] text-neutral-400">Experience Wardrobe and Trophy Showcase.</p>
                    <button
                      onClick={() => onOpenRoom && onOpenRoom('achievements')}
                      className="py-1 rounded bg-[#FF4081] text-[#1D1026] font-pixel text-xs font-bold hover:bg-[#F50057] transition-colors cursor-pointer"
                    >
                      VIEW TROPHIES
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-[#281335] border border-[#FF4081]/30 flex flex-col justify-between space-y-2">
                    <span className="font-pixel text-xs text-[#FF80AB]">LEVEL 1: GROUND</span>
                    <p className="text-[11px] text-neutral-400">Skills Alchemy Lab, Garage Résumé, and Dispatch Desk.</p>
                    <button
                      onClick={() => onOpenRoom && onOpenRoom('resume')}
                      className="py-1 rounded bg-[#FF4081] text-[#1D1026] font-pixel text-xs font-bold hover:bg-[#F50057] transition-colors cursor-pointer"
                    >
                      VISIT GARAGE
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                06 ACHIEVEMENTS (TROPHY DISPLAY)
            ══════════════════════════════════════════════════════════ */}
            {room === 'achievements' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#FF4081]/30 pb-2">
                  <p className="font-pixel text-xs text-[#FF80AB] flex items-center gap-1.5">
                    <Trophy size={14} className="text-[#FFD700]" />
                    <span>HONORS, BADGES & COMPETITIVE MILESTONES</span>
                  </p>
                  <span className="font-mono text-[10px] text-neutral-400">5 TROPHIES ON SHELF</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {badges.map((b: Badge) => (
                    <div
                      key={b.id}
                      className="p-3 rounded-lg bg-[#281335] border border-[#FFD700]/40 hover:border-[#FFD700] transition-all space-y-2 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-pixel text-sm text-[#FFD700] flex items-center gap-1">
                          🏆 {b.name}
                        </span>
                        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#1B0B24] text-neutral-400">
                          {b.unlockedAt}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-200">{b.description}</p>
                      <p className="text-[11px] text-[#FF80AB] italic border-t border-neutral-700/50 pt-1">
                        Criteria: {b.criteria}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                07 SKILLS (ALCHEMY LAB)
            ══════════════════════════════════════════════════════════ */}
            {room === 'skills' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#FF4081]/30 pb-2">
                  <p className="font-pixel text-xs text-[#FF80AB]">TECHNICAL COMPETENCIES & LAB TOOLS</p>
                  <span className="font-mono text-[10px] text-neutral-400">FULL STACK & ML</span>
                </div>

                <div className="space-y-3">
                  {skills.categories.map((cat: SkillCategory, idx: number) => (
                    <div key={idx} className="p-3 bg-[#281335] border border-[#FF4081]/20 rounded-lg space-y-2">
                      <h4 className="font-pixel text-xs text-white uppercase tracking-wider">
                        {cat.title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((skill: string, sIdx: number) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded bg-[#1B0C23] border border-[#FF4081]/40 text-xs font-mono text-[#FCE4EC] hover:border-[#FF4081] transition-colors"
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

            {/* ══════════════════════════════════════════════════════════
                08 RESUME (THE GARAGE)
            ══════════════════════════════════════════════════════════ */}
            {room === 'resume' && (
              <div className="space-y-4">
                <div className="p-4 bg-[#281335] border border-[#FF4081]/40 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#3D1E4A] border-2 border-[#FF4081] flex items-center justify-center text-2xl">
                      🏎️
                    </div>
                    <div>
                      <h4 className="font-pixel text-lg text-white">SAJAL_RESUME.PDF</h4>
                      <p className="font-mono text-xs text-[#FF80AB]">Software Engineer & ML Builder</p>
                    </div>
                  </div>

                  <a
                    href={profile.links.resume || '/resume.pdf'}
                    download
                    className="w-full sm:w-auto px-4 py-2 rounded bg-[#FF4081] hover:bg-[#F50057] text-[#1D1026] font-pixel text-xs font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md cursor-pointer"
                  >
                    <Download size={13} />
                    <span>DOWNLOAD RESUME.PDF</span>
                  </a>
                </div>

                {/* Quick Resume Highlights Sheet */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-[#200E2C] rounded border border-[#FF4081]/20 space-y-1">
                    <h5 className="font-pixel text-xs text-[#FF80AB]">EDUCATION</h5>
                    <p className="text-white">NIT Jalandhar — B.Tech Information Technology (2024–2029)</p>
                  </div>

                  <div className="p-3 bg-[#200E2C] rounded border border-[#FF4081]/20 space-y-1">
                    <h5 className="font-pixel text-xs text-[#FF80AB]">CORE COMPETENCIES</h5>
                    <p className="text-neutral-300">
                      Full-Stack Architecture, Python, TypeScript, PyTorch, LangGraph, React, Next.js, PostgreSQL, Distributed APIs.
                    </p>
                  </div>

                  <div className="p-3 bg-[#200E2C] rounded border border-[#FF4081]/20 space-y-1">
                    <h5 className="font-pixel text-xs text-[#FF80AB]">KEY SHIPMENTS</h5>
                    <p className="text-neutral-300">
                      Pairfect (real-time platform), ThinkFolio (ML evaluation engine), DevDex (retro OS identity).
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════════
                09 CONTACT (DISPATCH DESK)
            ══════════════════════════════════════════════════════════ */}
            {room === 'contact' && (
              <div className="space-y-4">
                <div className="p-3 bg-[#281335] border border-[#FF4081]/30 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-pixel text-xs text-[#FF80AB] block">DIRECT EMAIL</span>
                    <span className="font-mono text-sm text-white">{profile.links.email || 'sam@example.com'}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#FF4081] hover:bg-[#F50057] text-[#1D1026] font-pixel text-xs font-bold transition-all cursor-pointer"
                  >
                    {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
                  </button>
                </div>

                {/* Dispatch Note Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    playClick();
                    setContactSent(true);
                  }}
                  className="p-4 bg-[#251032] border border-[#FF4081]/20 rounded-lg space-y-3 font-mono text-xs"
                >
                  <h4 className="font-pixel text-xs text-white">LEAVE A NOTE FOR SAJAL</h4>
                  {contactSent ? (
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded text-emerald-300 text-center font-pixel text-xs">
                      THANK YOU! NOTE DISPATCHED TO SAJAL&apos;S DESK.
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="block text-[10px] text-neutral-400 mb-1">YOUR NAME</label>
                        <input
                          type="text"
                          required
                          placeholder="Ada Lovelace"
                          className="w-full px-2.5 py-1.5 rounded bg-[#1A0B22] border border-[#FF4081]/30 text-white focus:outline-hidden focus:border-[#FF4081]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400 mb-1">YOUR EMAIL</label>
                        <input
                          type="email"
                          required
                          placeholder="ada@example.com"
                          className="w-full px-2.5 py-1.5 rounded bg-[#1A0B22] border border-[#FF4081]/30 text-white focus:outline-hidden focus:border-[#FF4081]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400 mb-1">MESSAGE</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Loved exploring your dollhouse portfolio! Let's connect..."
                          className="w-full px-2.5 py-1.5 rounded bg-[#1A0B22] border border-[#FF4081]/30 text-white focus:outline-hidden focus:border-[#FF4081]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 rounded bg-[#FF4081] hover:bg-[#F50057] text-[#1D1026] font-pixel text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Send size={12} />
                        <span>DISPATCH MESSAGE</span>
                      </button>
                    </>
                  )}
                </form>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-1 font-pixel text-xs">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF80AB] hover:underline"
                  >
                    GITHUB ↗
                  </a>
                  <span className="text-neutral-600">·</span>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF80AB] hover:underline"
                  >
                    LINKEDIN ↗
                  </a>
                  <span className="text-neutral-600">·</span>
                  <a
                    href={profile.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF80AB] hover:underline"
                  >
                    TWITTER/X ↗
                  </a>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}