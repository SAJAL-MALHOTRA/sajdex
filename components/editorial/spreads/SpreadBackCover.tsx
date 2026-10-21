import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Copy, Download, Mail, Sparkles, Globe } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function SpreadBackCover() {
  const { playClick, playHover } = useSound();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    playClick();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-3 sm:px-8 md:px-12 select-none overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1E212B_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Double-Page Spread Container */}
      <div className="relative w-full max-w-6xl h-[80vh] sm:h-[82vh] max-h-[820px] rounded-lg border border-white/15 bg-[#0A0B0F] shadow-2xl p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* ── LEFT PAGE (VERSO): EDITORIAL COLOPHON & CREDITS (5 COLS) ── */}
        <div className="lg:col-span-5 h-full flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6 overflow-y-auto custom-scrollbar">
          
          <div className="space-y-4">
            <div className="border-b border-white/15 pb-2">
              <span className="font-mono text-[10px] text-amber-400 tracking-widest uppercase block">
                COLOPHON // CLOSING STATEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white uppercase">
                THE BACK COVER
              </h2>
            </div>

            {/* Merveilleux Quote */}
            <div className="p-3.5 rounded bg-white/[0.03] border-l-2 border-amber-400 font-serif italic text-xs sm:text-sm text-white/90 leading-snug">
              &ldquo;{profile.quote}&rdquo;
              <span className="block font-mono text-[10px] text-amber-400/80 not-italic mt-1 uppercase">
                — {profile.society}
              </span>
            </div>

            {/* Publication Spec Table */}
            <div className="space-y-2 font-mono text-[11px] text-[#A6ABB9]">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">ISSUE:</span>
                <span className="text-white">{profile.issue}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">CREATIVE LEAD:</span>
                <span className="text-white">{profile.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">INSTITUTION:</span>
                <span className="text-white">NIT Jalandhar [PB, IN]</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">DISCIPLINES:</span>
                <span className="text-white">ML Engineering & High Fashion</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">ISSN:</span>
                <span className="text-white">{profile.issn}</span>
              </div>
            </div>
          </div>

          {/* Social Channels & Barcode */}
          <div className="space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
                  title="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
                  title="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
                  title="Merveilleux Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <a
                href={profile.links.resume}
                download
                onClick={playClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/50 text-[10px] font-mono text-white transition-colors"
              >
                <Download size={11} />
                <span>RESUME (PDF)</span>
              </a>
            </div>

            <div className="flex items-center justify-between font-mono text-[9px] text-[#717585]">
              <div className="w-24 h-5 barcode-strip text-white/50" />
              <span>END OF ISSUE N° 01</span>
            </div>
          </div>

        </div>

        {/* ── RIGHT PAGE (RECTO): DISPATCH & DIRECT TRANSMISSION (7 COLS) ── */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between pl-0 lg:pl-4 overflow-y-auto custom-scrollbar">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-2 font-mono text-[10px]">
              <span className="text-emerald-400 font-bold tracking-widest uppercase">
                EDITORIAL DISPATCH // TRANSMISSION
              </span>
              <span className="text-white/40">STATUS: OPEN FOR ROLES</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white uppercase leading-tight">
                INITIATE DIRECT TRANSMISSION
              </h1>
              <p className="text-xs sm:text-sm font-sans text-[#8E92A0]">
                Seeking high-impact machine learning and software engineering internships. Direct inquiries welcomed below.
              </p>
            </div>

            {/* Quick Email Direct Copy Bar */}
            <div className="flex items-center justify-between p-2.5 rounded bg-white/[0.03] border border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2 text-white/90">
                <Mail size={13} className="text-amber-400" />
                <span className="text-[11px]">{profile.links.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Direct Message Form */}
            <form onSubmit={handleSendMessage} className="space-y-2.5 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] text-white/40 uppercase block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vogue Recruiter / ML Lead"
                    className="w-full bg-[#12131A] border border-white/10 focus:border-amber-400 rounded p-2 text-white text-xs outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-white/40 uppercase block mb-1">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@atelier.com"
                    className="w-full bg-[#12131A] border border-white/10 focus:border-amber-400 rounded p-2 text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-white/40 uppercase block mb-1">EDITORIAL NOTE / PROJECT BRIEF</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share role details, team scope, or inquiry..."
                  className="w-full bg-[#12131A] border border-white/10 focus:border-amber-400 rounded p-2 text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                {formSent ? (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <Check size={13} />
                    <span>DISPATCH SENT TO SAJAL</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-white/40">ENCRYPTED TRANSMISSION</span>
                )}

                <button
                  type="submit"
                  disabled={formSent}
                  onMouseEnter={playHover}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <span>{formSent ? 'TRANSMITTING...' : 'DISPATCH'}</span>
                  <Send size={12} />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
