'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Copy, Download, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function VogueColophon() {
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
    <footer id="contact" className="w-full py-20 sm:py-28 select-none bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="space-y-2 pb-8 border-b border-white/10 mb-12">
          <span className="font-mono text-xs tracking-widest text-[#717585] uppercase block">
            COLOPHON // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight uppercase">
            Initiate Contact
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-[#A6ABB9]">
            Seeking high-impact machine learning and software engineering opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pb-16 border-b border-white/10">
          
          {/* LEFT: DIRECT INQUIRIES & DETAILS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest block">
                DIRECT INQUIRY
              </span>
              <p className="text-xs sm:text-sm text-[#8E92A0] leading-relaxed">
                Whether you have an ML systems challenge, a full-stack engineering role, or a creative editorial collaboration in mind, reach out directly.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-sm bg-[#0A0A0D] border border-white/10 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5 text-white">
                <Mail size={14} className="text-white/70" />
                <span className="text-[11px] sm:text-xs">{profile.links.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-[10px]"
              >
                {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="space-y-2 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3">
                <a
                  href={profile.links.resume}
                  download
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold tracking-wider transition-all"
                >
                  <Download size={12} />
                  <span>RESUME (PDF)</span>
                </a>

                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white/50 text-white transition-colors"
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
                  onMouseEnter={playHover}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white/50 text-white transition-colors"
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
                  onMouseEnter={playHover}
                  className="p-2.5 rounded-full border border-white/20 hover:border-white/50 text-white transition-colors"
                  title="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: DIRECT MESSAGE FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-white/40 uppercase block mb-1.5">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engineering Lead"
                    className="w-full bg-[#0A0A0D] border border-white/10 focus:border-white rounded-sm p-3 text-white text-xs outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-white/40 uppercase block mb-1.5">YOUR EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#0A0A0D] border border-white/10 focus:border-white rounded-sm p-3 text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-white/40 uppercase block mb-1.5">MESSAGE / PROJECT BRIEF</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share role scope, engineering requirements, or inquiry..."
                  className="w-full bg-[#0A0A0D] border border-white/10 focus:border-white rounded-sm p-3 text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                {formSent ? (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <Check size={13} />
                    <span>TRANSMISSION DISPATCHED TO SAJAL</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-white/30">END-TO-END ENCRYPTED</span>
                )}

                <button
                  type="submit"
                  disabled={formSent}
                  onMouseEnter={playHover}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider transition-all cursor-pointer shadow-md"
                >
                  <span>{formSent ? 'TRANSMITTING...' : 'SEND INQUIRY'}</span>
                  <Send size={12} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-3">
            <span>SAJAL // MERVEILLEUX × NIT JALANDHAR</span>
            <span>•</span>
            <span>AUTUMN / WINTER 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-24 h-4 barcode-strip text-white/40" />
            <span>ISSN 2026-NITJ-MRV</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
