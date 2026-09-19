'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function ContactSection() {
  const { playClick, playHover } = useSound();

  const links = [
    { label: 'Email', value: profile.links.email, url: `mailto:${profile.links.email}`, note: 'Direct inbox for opportunities' },
    { label: 'GitHub', value: 'github.com/sajal', url: profile.links.github, note: 'Code repositories and open source' },
    { label: 'LinkedIn', value: 'linkedin.com/in/sajal', url: profile.links.linkedin, note: 'Professional background and network' },
    { label: 'Twitter / X', value: '@sajal', url: profile.links.twitter, note: 'Engineering thoughts and builds' },
  ];

  return (
    <div className="w-full space-y-10 select-text max-w-2xl mx-auto">
      
      {/* Contact Header */}
      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <span className="text-xs font-mono text-[#9E9EA8] uppercase tracking-wider block">
          Contact
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F4F6]">
          Get in touch
        </h2>
        <p className="text-sm sm:text-base text-[#9E9EA8] leading-relaxed font-sans">
          I&apos;m currently looking for engineering internships, research roles, and interesting collaborative projects. Feel free to reach out directly.
        </p>
      </div>

      {/* Clean Interactive Links */}
      <div className="space-y-3">
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all cursor-pointer shadow-sm"
          >
            <div>
              <div className="font-display font-semibold text-base text-[#F4F4F6] group-hover:text-white transition-colors">
                {link.label}
              </div>
              <div className="text-xs text-[#9E9EA8] font-sans">
                {link.note}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#9E9EA8] group-hover:text-white transition-colors">
              <span className="hidden sm:inline">{link.value}</span>
              <ArrowUpRight size={15} />
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  );
}
