'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check, ArrowUpRight, Mail, Camera, Code2, Globe, Share2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function AtelierContact() {
  const { playClick } = useSound();
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(profile.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSent(true);
  };

  return (
    <section id="dispatch" className="w-full py-20 border-b border-[#1A1C22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <span className="font-mono text-xs text-[#6E7280] tracking-wider uppercase">
            DISPATCH // INQUIRIES & COLLABORATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Let&apos;s Build Together.
          </h2>
          <p className="text-sm text-[#8E92A0] font-sans leading-relaxed">
            Available for ML engineering, full-stack software development internships, and creative design collaborations.
          </p>
        </div>

        {/* Form & Direct Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#0D0E12] border border-[#1E2028] space-y-4">
              <span className="text-[11px] font-mono text-[#6E7280] uppercase block">
                DIRECT TRANSMISSION
              </span>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-white font-medium">
                  {profile.links.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161820] hover:bg-white hover:text-black border border-[#242732] text-xs font-mono text-white transition-all cursor-pointer"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <p className="text-xs text-[#7E828E] font-mono">
                Location: NIT Jalandhar, Punjab, India (UTC+5:30)
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Code2 size={14} className="text-[#8E92A0] group-hover:text-white" />
                  <span>GITHUB</span>
                </span>
                <ArrowUpRight size={13} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Camera size={14} className="text-[#8E92A0] group-hover:text-white" />
                  <span>LOOKBOOK</span>
                </span>
                <ArrowUpRight size={13} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Globe size={14} className="text-[#8E92A0] group-hover:text-white" />
                  <span>LINKEDIN</span>
                </span>
                <ArrowUpRight size={13} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Share2 size={14} className="text-[#8E92A0] group-hover:text-white" />
                  <span>X / TWITTER</span>
                </span>
                <ArrowUpRight size={13} className="text-[#6E7280] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-[#0D0E12] border border-[#1E2028] space-y-4 font-mono text-xs"
            >
              {sent ? (
                <div className="p-8 text-center space-y-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check size={18} />
                  </span>
                  <h4 className="font-sans font-bold text-lg text-white">DISPATCH TRANSMITTED</h4>
                  <p className="text-xs text-[#8E92A0]">
                    Thank you. Sajal has received your transmission and will review it shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[#7E828E] uppercase text-[10px]">NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Virgil Abloh"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[#7E828E] uppercase text-[10px]">EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="virgil@off---white.com"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#7E828E] uppercase text-[10px]">TOPIC</label>
                    <select className="w-full px-3 py-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40 transition-colors">
                      <option>Software Engineering / Internship</option>
                      <option>Machine Learning Systems Inquiry</option>
                      <option>Creative Direction & Styling Collab</option>
                      <option>General Studio Transmission</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#7E828E] uppercase text-[10px]">TRANSMISSION MESSAGE</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Discussing software architecture, model evaluation, or aesthetic direction..."
                      className="w-full px-3 py-2.5 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-white hover:bg-[#E1E4EE] text-black font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-98"
                  >
                    <Send size={13} />
                    <span>DISPATCH MESSAGE</span>
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

        {/* Footer Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#16181E] font-mono text-xs text-[#555864]">
          <div>
            SAJAL // ATELIER © 2026. ALL RIGHTS RESERVED.
          </div>
          <div>
            ENGINEERED WITH NEXT.JS 15, LENIS & TAILWIND.
          </div>
        </div>

      </div>
    </section>
  );
}