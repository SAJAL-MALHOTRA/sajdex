'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Download, ExternalLink, Mail, Send, ShieldCheck, Terminal } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function DevDexDispatch() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const { playClick, playHover } = useSound();

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.email || 'sajal@devdex.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    if (!message.trim()) return;

    // Simulate instant dispatch transmission
    setFormSent(true);
    setTimeout(() => {
      setSenderName('');
      setSenderEmail('');
      setMessage('');
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="dispatch" className="w-full py-16 sm:py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Hardware Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1A1D27]">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#636877] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DEVDEX MODULE 05 // SECURE DISPATCH</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Initialize Transmission
            </h2>
            <p className="font-mono text-xs text-[#8E92A2] max-w-xl">
              Encrypted channel open for software engineering roles, high-concurrency consulting, and collaborative telemetry.
            </p>
          </div>

          <div className="font-mono text-xs text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>CHANNEL 256-BIT AES ENCRYPTED</span>
          </div>
        </div>

        {/* Dispatch Console Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left: Device Telemetry & Direct Relays (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-[28px] bg-[#0D0F14] border border-[#202430] shadow-2xl flex flex-col justify-between space-y-8 relative group">
            {/* Viewfinder Brackets */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-emerald-400/60 transition-colors" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-emerald-400/60 transition-colors" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-emerald-400/60 transition-colors" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-emerald-400/60 transition-colors" />

            <div className="space-y-6">
              {/* Telemetry Header */}
              <div className="flex items-center justify-between font-mono text-xs border-b border-[#1A1D27] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-white font-bold tracking-wider">OPERATOR IDENTITY</span>
                </div>
                <span className="text-[#555B6C]">ONLINE</span>
              </div>

              {/* Bio & Location Card */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white font-sans tracking-tight">
                  {profile.name}
                </h3>
                <p className="font-mono text-xs text-cyan-400 font-semibold">
                  {profile.title} · {profile.department} ({profile.college})
                </p>
                <p className="font-mono text-xs text-[#8E92A2] leading-relaxed pt-1">
                  {profile.collegeFull} alum building zero-knowledge protocols, real-time interactive systems, and high-frequency backend graphs.
                </p>
              </div>

              {/* Direct Quick Actions */}
              <div className="space-y-3 pt-2">
                {/* Email Copy Relay */}
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#131620] hover:bg-[#1A1E2B] border border-white/10 text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="text-cyan-400" />
                    <span>{profile.email}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-[#8E92A2]">
                    {copied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400 font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>COPY</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Resume PDF Download */}
                <a
                  href={profile.links.resume || '/resume.pdf'}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#131620] hover:bg-[#1A1E2B] border border-white/10 text-white font-mono text-xs transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Download size={14} className="text-amber-400" />
                    <span>ENGINEERING_RESUME_2026.PDF</span>
                  </div>
                  <ExternalLink size={12} className="text-[#8E92A2]" />
                </a>
              </div>
            </div>

            {/* Social Signal Relays */}
            <div className="pt-4 border-t border-[#1A1D27] space-y-3">
              <span className="font-mono text-[10px] text-[#555B6C] tracking-wider uppercase block">
                SIGNAL RELAYS // PUBLIC NODES
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="px-3 py-1.5 rounded-xl bg-[#12151D] hover:bg-[#1A1E2B] border border-white/5 hover:border-cyan-400/40 text-[#A2A6B8] hover:text-white transition-colors"
                  >
                    GITHUB ↗
                  </a>
                )}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="px-3 py-1.5 rounded-xl bg-[#12151D] hover:bg-[#1A1E2B] border border-white/5 hover:border-cyan-400/40 text-[#A2A6B8] hover:text-white transition-colors"
                  >
                    LINKEDIN ↗
                  </a>
                )}
                {profile.links.twitter && (
                  <a
                    href={profile.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHover}
                    className="px-3 py-1.5 rounded-xl bg-[#12151D] hover:bg-[#1A1E2B] border border-white/5 hover:border-cyan-400/40 text-[#A2A6B8] hover:text-white transition-colors"
                  >
                    X / TWITTER ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Encrypted Transmission Terminal Form (7 cols) */}
          <div className="lg:col-span-7 p-7 rounded-[28px] bg-[#0D0F14] border border-[#202430] shadow-2xl relative group">
            {/* Viewfinder Brackets */}
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-cyan-400/60 transition-colors" />

            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs border-b border-[#1A1D27] pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span className="text-white font-bold tracking-wider">DISPATCH BUFFER // INGESTION</span>
                </div>
                <span className="text-[10px] text-[#555B6C] font-mono">PORT: 443 (TLS)</span>
              </div>

              {formSent ? (
                <div className="py-16 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">TRANSMISSION DISPATCHED</h4>
                  <p className="text-xs text-[#8E92A2] max-w-sm mx-auto">
                    Packet logged to Sajal&apos;s primary dispatch queue. Expect response via secure relay within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Caller Name */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-[#8E92A2] tracking-wider uppercase">
                        SENDER IDENTIFIER
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-3 rounded-xl bg-[#12151D] border border-white/10 text-white font-mono text-xs placeholder:text-[#4A5060] focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Caller Return Frequency */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-[#8E92A2] tracking-wider uppercase">
                        RETURN FREQUENCY (EMAIL)
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. alex@frontier.tech"
                        className="w-full px-4 py-3 rounded-xl bg-[#12151D] border border-white/10 text-white font-mono text-xs placeholder:text-[#4A5060] focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Transmission Payload */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-[#8E92A2] tracking-wider uppercase">
                      MISSION PAYLOAD / SPECIFICATION
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline system architecture needs, engineering role details, or collaboration scope..."
                      className="w-full px-4 py-3 rounded-xl bg-[#12151D] border border-white/10 text-white font-mono text-xs placeholder:text-[#4A5060] focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Transmit Button */}
                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="w-full py-4 rounded-2xl bg-white hover:bg-[#E2E8F0] text-black font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-[0.99] cursor-pointer"
                  >
                    <Send size={13} />
                    <span>DISPATCH PACKET →</span>
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
