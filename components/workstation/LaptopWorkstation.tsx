'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, Copy, Download, ExternalLink, Mail, Send, Terminal } from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { useSound } from '@/hooks/useSound';

interface LaptopWorkstationProps {
  initialTab?: string;
  onBadgeOut: () => void;
}

export default function LaptopWorkstation({
  initialTab = 'experience',
  onBadgeOut,
}: LaptopWorkstationProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const { playClick, playHover } = useSound();

  const tabs = [
    { id: 'experience', num: '01', ja: '経歴', en: 'EXPERIENCE' },
    { id: 'projects', num: '02', ja: '個人開発', en: 'PERSONAL PROJECTS' },
    { id: 'achievements', num: '03', ja: '実績', en: 'ACHIEVEMENTS' },
    { id: 'connect', num: '04', ja: '連絡先', en: 'CONNECT WITH ME' },
    { id: 'resume', num: '05', ja: '履歴書', en: 'RESUME' },
  ];

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.email || 'sajal@devdex.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRequestResume = () => {
    playClick();
    setRequestSent(true);
    setTimeout(() => setRequestSent(false), 4000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center py-6 px-3 sm:px-6 select-none font-mono">
      
      {/* ── LAPTOP HARDWARE CHASSIS ── */}
      <div className="w-full rounded-[24px] sm:rounded-[32px] bg-[#121318] p-3 sm:p-5 border border-[#232631] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] relative">
        
        {/* Laptop Display Top Notch / Camera Lens */}
        <div className="absolute top-2 sm:top-2.5 inset-x-0 flex justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#08090C] border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-cyan-500/60" />
          </div>
        </div>

        {/* ── TERMINAL DISPLAY SCREEN ── */}
        <div className="w-full rounded-[16px] sm:rounded-[20px] bg-[#0A0B0E] border border-[#1E222D] overflow-hidden shadow-2xl flex flex-col min-h-[580px]">
          
          {/* Terminal Window Header Bar */}
          <div className="h-10 px-4 bg-[#0F1116] border-b border-[#1A1D27] flex items-center justify-between text-xs text-[#636877]">
            {/* Left: Window Controls + Shell Host */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <span className="text-white/90 font-bold ml-1 tracking-wider text-[11px]">
                sajal@nitj
              </span>
            </div>

            {/* Center: Current Working Path */}
            <div className="text-[11px] text-[#8E92A2] font-semibold tracking-wider">
              ~/portfolio
            </div>

            {/* Right: Environment & Location */}
            <div className="text-[10px] text-[#555B6C] tracking-wider uppercase hidden sm:block">
              NITJ // IND · WMS 2.0
            </div>
          </div>

          {/* Terminal Main Workspace (2 Columns) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
            
            {/* ── LEFT NAVIGATION SIDEBAR (4 Cols) ── */}
            <div className="md:col-span-4 p-4 sm:p-5 border-b md:border-b-0 md:border-r border-[#1A1D27] bg-[#0C0E13] flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <div className="text-[9px] text-[#555B6C] tracking-widest uppercase px-3 py-1">
                  NAVIGATION DIRECTORY
                </div>

                <div className="space-y-1">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          playClick();
                          setActiveTab(tab.id);
                        }}
                        onMouseEnter={playHover}
                        className={`w-full px-3.5 py-3 rounded-xl flex items-center justify-between text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#E5E7EB] text-[#111215] font-bold shadow-md'
                            : 'text-[#6B7280] hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs ${isActive ? 'text-[#111215] font-black' : 'text-[#484E5E]'}`}>
                            {tab.num}
                          </span>
                          <div>
                            <div className={`text-[8.5px] leading-tight ${isActive ? 'text-black/60' : 'text-[#555B6C]'}`}>
                              {tab.ja}
                            </div>
                            <div className={`text-xs tracking-wider ${isActive ? 'font-black' : 'font-semibold'}`}>
                              {tab.en}
                            </div>
                          </div>
                        </div>

                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Footer Info */}
              <div className="p-3 rounded-xl bg-[#101218] border border-white/5 space-y-1 text-[10px] text-[#717789]">
                <div className="flex justify-between">
                  <span>TERMINAL:</span>
                  <span className="text-white">ZSH 5.9</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-emerald-400">READY</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT CONTENT PANE (8 Cols) ── */}
            <div className="md:col-span-8 p-5 sm:p-7 overflow-y-auto max-h-[580px] space-y-6 text-left bg-[#08090C]">
              
              {/* Terminal Command Prompt Line */}
              <div className="flex items-center gap-2 text-xs text-[#8E92A2] pb-2 border-b border-[#1A1D27]">
                <span className="text-cyan-400 font-bold">sajal@nitj:~/portfolio $</span>
                <span className="text-white font-semibold">open {activeTab}</span>
                <span className="w-2 h-3.5 bg-white animate-pulse" />
              </div>

              {/* ── TAB 01: EXPERIENCE ── */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  {/* Section Title */}
                  <div className="flex items-end justify-between border-b border-[#1A1D27] pb-3">
                    <div>
                      <div className="text-[10px] text-[#636877]">経歴</div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        EXPERIENCE
                      </h2>
                    </div>
                    <div className="text-xs text-[#555B6C]">04 ROLES</div>
                  </div>

                  {/* Experience Entry 1 */}
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-4 text-xs text-[#6B7280]">
                        <div className="font-bold text-white">2026.01 — PRESENT</div>
                        <div className="text-[11px]">Bangalore, India</div>
                      </div>
                      <div className="sm:col-span-8 space-y-2">
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          <span>DevDex ↗ Real-time Mesh</span>
                        </div>
                        <div className="text-xs text-[#9DA2B4] space-y-1">
                          <div className="flex items-center gap-2 text-white font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>Systems Architect · Jun 2026 — Present</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#7E8597]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#484E5E]" />
                            <span>Software Engineer Intern · Jan 2026 — Jun 2026</span>
                          </div>
                        </div>
                        <ul className="text-xs text-[#9CA3AF] space-y-1.5 pt-1">
                          <li className="leading-relaxed">
                            <span className="text-cyan-400">&gt;</span> Built high-frequency sub-30ms Redis Pub/Sub WebSocket mesh to broadcast 1v1 real-time match state across 16 tournament nodes.
                          </li>
                          <li className="leading-relaxed">
                            <span className="text-cyan-400">&gt;</span> Implemented client-side WebCrypto AES-256-GCM zero-knowledge state sync for collaborative sessions.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience Entry 2 */}
                  <div className="pt-4 border-t border-[#1A1D27] space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-4 text-xs text-[#6B7280]">
                        <div className="font-bold text-white">2025.05 — 2025.12</div>
                        <div className="text-[11px]">Remote / New Delhi</div>
                      </div>
                      <div className="sm:col-span-8 space-y-2">
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          <span>Cybernauts R&amp;D ↗ Core</span>
                        </div>
                        <div className="text-xs text-white font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>Distributed Systems Fellow</span>
                        </div>
                        <ul className="text-xs text-[#9CA3AF] space-y-1.5 pt-1">
                          <li className="leading-relaxed">
                            <span className="text-cyan-400">&gt;</span> Designed a 5-node cyclic LangGraph state machine with deterministic routing and long-term vector memory recall.
                          </li>
                          <li className="leading-relaxed">
                            <span className="text-cyan-400">&gt;</span> Optimized cold-start query routing latency down to &lt;18ms with cache warming and indexed Redis clusters.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ── TAB 02: PERSONAL PROJECTS ── */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  {/* Section Title */}
                  <div className="flex items-end justify-between border-b border-[#1A1D27] pb-3">
                    <div>
                      <div className="text-[10px] text-[#636877]">個人開発</div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        PERSONAL PROJECTS
                      </h2>
                    </div>
                    <div className="text-xs text-[#555B6C]">04 BUILDS</div>
                  </div>

                  <div className="space-y-4">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-xl bg-[#0F1117] border border-[#1E222D] hover:border-white/20 transition-all space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-bold text-white tracking-tight">
                            {proj.name}
                          </h3>
                          <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 text-[10px] font-bold border border-cyan-500/20">
                            {proj.metric || 'PRODUCTION'}
                          </span>
                        </div>

                        <div className="text-xs text-[#9DA2B4] space-y-1">
                          <p className="leading-relaxed">
                            <span className="text-cyan-400">&gt;</span> {proj.description}
                          </p>
                          {proj.solution && (
                            <p className="leading-relaxed text-[#7E8597]">
                              <span className="text-emerald-400">&gt;</span> {proj.solution}
                            </p>
                          )}
                        </div>

                        {/* Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.stack.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 rounded bg-[#151822] text-[#A6ACB9] text-[10px] border border-white/5"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              onMouseEnter={playHover}
                              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-colors flex items-center gap-1.5"
                            >
                              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                              <span>GitHub ↗</span>
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noreferrer"
                              onMouseEnter={playHover}
                              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 transition-colors flex items-center gap-1.5"
                            >
                              <ExternalLink size={11} />
                              <span>Demo ↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ── TAB 03: ACHIEVEMENTS ── */}
              {activeTab === 'achievements' && (
                <div className="space-y-6">
                  {/* Section Title */}
                  <div className="flex items-end justify-between border-b border-[#1A1D27] pb-3">
                    <div>
                      <div className="text-[10px] text-[#636877]">実績</div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        ACHIEVEMENTS
                      </h2>
                    </div>
                    <div className="text-xs text-[#555B6C]">05 WINS</div>
                  </div>

                  <div className="divide-y divide-[#1A1D27] space-y-4 pt-1">
                    <div className="pt-3 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white">ETHGlobal New Delhi Winner</span>
                        <span className="text-cyan-400 font-bold">1ST PLACE</span>
                      </div>
                      <p className="text-xs text-[#9DA2B4] leading-relaxed">
                        <span className="text-cyan-400">&gt;</span> Built real-time decentralized sound verification network against international submissions.
                      </p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white">NIT Jalandhar Annual Hackathon</span>
                        <span className="text-emerald-400 font-bold">BEST ARCHITECTURE</span>
                      </div>
                      <p className="text-xs text-[#9DA2B4] leading-relaxed">
                        <span className="text-cyan-400">&gt;</span> Engineered zero-knowledge encrypted collaborative editor with sub-30ms sync latency.
                      </p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white">Smart India Hackathon</span>
                        <span className="text-amber-400 font-bold">FINALIST</span>
                      </div>
                      <p className="text-xs text-[#9DA2B4] leading-relaxed">
                        <span className="text-cyan-400">&gt;</span> Distributed warehouse location designer with graph telemetry and offline-first sync.
                      </p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-white">Competitive Programming &amp; Systems</span>
                        <span className="text-purple-400 font-bold">TOP 5%</span>
                      </div>
                      <p className="text-xs text-[#9DA2B4] leading-relaxed">
                        <span className="text-cyan-400">&gt;</span> Solved 500+ problems across Codeforces, LeetCode (2000+ rating), and CSES Graph problem sets.
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* ── TAB 04: CONNECT WITH ME ── */}
              {activeTab === 'connect' && (
                <div className="space-y-6">
                  {/* Section Title */}
                  <div className="flex items-end justify-between border-b border-[#1A1D27] pb-3">
                    <div>
                      <div className="text-[10px] text-[#636877]">連絡先</div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        CONNECT WITH ME
                      </h2>
                    </div>
                    <div className="text-xs text-emerald-400">07 CHANNELS</div>
                  </div>

                  <p className="text-xs text-[#9DA2B4] leading-relaxed">
                    Always open to high-concurrency systems design, distributed backend roles, and ambitious software collaborations.
                  </p>

                  <div className="space-y-2.5">
                    <button
                      onClick={handleCopyEmail}
                      onMouseEnter={playHover}
                      className="w-full p-3.5 rounded-xl bg-[#0F1117] hover:bg-[#141722] border border-[#1E222D] flex items-center justify-between text-xs text-white transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Mail size={13} className="text-cyan-400" />
                        <span>Email: {profile.email}</span>
                      </div>
                      <span className="text-[11px] text-[#717789]">
                        {copiedEmail ? 'COPIED ✓' : 'COPY'}
                      </span>
                    </button>

                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="w-full p-3.5 rounded-xl bg-[#0F1117] hover:bg-[#141722] border border-[#1E222D] flex items-center justify-between text-xs text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>GitHub: github.com/sajal</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[#717789]" />
                    </a>

                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="w-full p-3.5 rounded-xl bg-[#0F1117] hover:bg-[#141722] border border-[#1E222D] flex items-center justify-between text-xs text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-cyan-400 font-bold">in</span>
                        <span>LinkedIn: linkedin.com/in/sajal</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[#717789]" />
                    </a>

                    <a
                      href={profile.links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={playHover}
                      className="w-full p-3.5 rounded-xl bg-[#0F1117] hover:bg-[#141722] border border-[#1E222D] flex items-center justify-between text-xs text-white transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-white font-bold">𝕏</span>
                        <span>X / Twitter: @sajal_m</span>
                      </div>
                      <ArrowUpRight size={13} className="text-[#717789]" />
                    </a>
                  </div>

                </div>
              )}

              {/* ── TAB 05: RESUME (Image 2) ── */}
              {activeTab === 'resume' && (
                <div className="space-y-6">
                  {/* Section Title */}
                  <div className="flex items-end justify-between border-b border-[#1A1D27] pb-3">
                    <div>
                      <div className="text-[10px] text-[#636877]">履歴書</div>
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        RESUME
                      </h2>
                    </div>
                    <div className="text-xs text-[#555B6C]">PDF READY</div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-[#8E92A2] space-y-1">
                      <div>$ ls resume.pdf</div>
                      <div className="text-emerald-400">resume.pdf: verified &amp; available for download</div>
                    </div>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed pt-2 max-w-lg">
                      The full engineering resume is published with comprehensive project benchmarks, production metrics, and education specs.
                    </p>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={playHover}
                        className="py-3 px-5 rounded-xl bg-[#E5E7EB] hover:bg-white text-[#111215] font-black text-xs flex items-center gap-2 shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Download size={13} />
                        <span>Download resume.pdf</span>
                      </a>

                      <button
                        onClick={handleRequestResume}
                        onMouseEnter={playHover}
                        className="py-3 px-5 rounded-xl bg-[#14161F] hover:bg-[#1A1E2B] border border-white/10 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <Mail size={13} className="text-cyan-400" />
                        <span>{requestSent ? 'Request Dispatched ✓' : 'Request a copy'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* Laptop Bottom Lip / Hinge Groove */}
        <div className="w-24 h-1 rounded-full bg-white/10 mx-auto mt-2.5" />

      </div>

      {/* ── RETRO BADGE OUT BUTTON (Image 2, 3, 4) ── */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => {
            playClick();
            onBadgeOut();
          }}
          onMouseEnter={playHover}
          className="py-2.5 px-6 rounded-full bg-[#12141A] hover:bg-[#1A1D27] border border-white/10 text-xs text-[#E5E7EB] font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:border-white/30 active:scale-[0.98]"
        >
          <span>←</span>
          <span className="text-white/60">退館</span>
          <span>·</span>
          <span className="tracking-wider">BADGE OUT</span>
        </button>
      </div>

    </div>
  );
}
