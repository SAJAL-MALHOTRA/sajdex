'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check, ArrowUpRight, Code2, Camera, Globe, Share2, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { useSound } from '@/hooks/useSound';

export default function StationDispatch() {
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
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-4 sm:px-10 md:px-16 select-none overflow-hidden">
      <div className="max-w-6xl w-full h-[76vh] flex flex-col justify-between py-2 relative z-10">
        
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1A1C24] pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-white font-bold tracking-widest uppercase">
              STATION 07 // BACKSTAGE TRANSMISSION & PRESS
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#555864]">
            <span>RUNWAY FINALE</span>
            <span>•</span>
            <span>CONTACT</span>
          </div>
        </div>

        {/* Core Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 py-4 overflow-hidden">
          
          {/* Left Column: Direct Info & Social Grid (5 cols) */}
          <div className="lg:col-span-5 h-full max-h-[58vh] flex flex-col justify-between space-y-4">
            
            <div className="p-5 rounded-xl bg-[#0D0E12] border border-[#1E2028] space-y-3">
              <span className="text-[10px] font-mono text-[#6E7280] uppercase block">
                DIRECT TRANSMISSION
              </span>

              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-white font-medium truncate">
                  {profile.links.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161820] hover:bg-white hover:text-black border border-[#242732] text-xs font-mono text-white transition-all cursor-pointer shrink-0"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#1C1F28] text-xs font-mono text-[#7E828E]">
                <span>NIT Jalandhar [PB, IN]</span>
                <a
                  href={profile.links.resume}
                  download
                  className="text-white hover:text-emerald-400 flex items-center gap-1"
                >
                  <Download size={11} />
                  <span>RESUME PDF</span>
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Code2 size={13} className="text-[#8E92A0] group-hover:text-white" />
                  <span>GITHUB</span>
                </span>
                <ArrowUpRight size={12} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Camera size={13} className="text-[#8E92A0] group-hover:text-white" />
                  <span>LOOKBOOK</span>
                </span>
                <ArrowUpRight size={12} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Globe size={13} className="text-[#8E92A0] group-hover:text-white" />
                  <span>LINKEDIN</span>
                </span>
                <ArrowUpRight size={12} className="text-[#6E7280] group-hover:text-white" />
              </a>

              <a
                href={profile.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-white/40 text-white flex items-center justify-between transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Share2 size={13} className="text-[#8E92A0] group-hover:text-white" />
                  <span>X / TWITTER</span>
                </span>
                <ArrowUpRight size={12} className="text-[#6E7280] group-hover:text-white" />
              </a>
            </div>

          </div>

          {/* Right Column: Transmission Dispatch Form (7 cols) */}
          <div className="lg:col-span-7 h-full max-h-[58vh]">
            <form
              onSubmit={handleSubmit}
              className="h-full p-5 sm:p-6 rounded-2xl bg-[#0D0E12] border border-[#1E2028] flex flex-col justify-between font-mono text-xs space-y-3"
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-2 py-8">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Check size={18} />
                  </span>
                  <h4 className="font-sans font-bold text-lg text-white">DISPATCH TRANSMITTED</h4>
                  <p className="text-xs text-[#8E92A0]">
                    Thank you. Sajal will review your transmission backstage.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-1 border-b border-[#1A1C24] pb-2">
                    <span className="text-[10px] text-[#6E7280] uppercase tracking-wider block">
                      TRANSMISSION FORM
                    </span>
                    <h4 className="font-sans font-bold text-base text-white">
                      Initiate Direct Communication
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[#7E828E] text-[10px]">NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Virgil Abloh"
                        className="w-full px-3 py-2 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#7E828E] text-[10px]">EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="virgil@atelier.com"
                        className="w-full px-3 py-2 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#7E828E] text-[10px]">MESSAGE</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Discussing software architecture, ML models, or creative styling..."
                      className="w-full px-3 py-2 rounded-lg bg-[#14161C] border border-[#1E212A] text-white focus:outline-none focus:border-white/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-white hover:bg-[#E1E4EE] text-black font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-98"
                  >
                    <Send size={12} />
                    <span>DISPATCH TRANSMISSION</span>
                  </button>
                </>
              )}
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#555864] pt-2 border-t border-[#1A1C24]">
          <span>SAJAL // RUNWAY SS26 • ALL RIGHTS RESERVED</span>
          <span>STATION 07 / 07</span>
        </div>

      </div>
    </div>
  );
}