'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function SocialFooter() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    {
      id: 'github',
      label: 'GitHub',
      href: profile.links.github,
      icon: (
        <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: profile.links.linkedin,
      icon: (
        <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      id: 'twitter',
      label: 'X / Twitter',
      href: profile.links.twitter,
      icon: (
        <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'Email',
      href: `mailto:${profile.links.email}`,
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer className="w-full max-w-4xl mx-auto pt-12 pb-16 space-y-8 font-mono select-none">
      {/* Thin Horizontal Editorial Divider */}
      <div className="w-full border-t border-white/10" />

      <div className="flex flex-col items-center gap-4">
        {/* Minimal Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* Tooltip on hover */}
              <AnimatePresence>
                {hoveredSocial === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-8 px-2 py-0.5 rounded bg-[#111111] border border-white/10 text-[#F5F5F5] text-[10px] whitespace-nowrap shadow-md pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHoveredSocial(item.id)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                {item.icon}
              </motion.a>
            </div>
          ))}
        </div>

        {/* Minimal Copyright */}
        <p className="text-[11px] text-[#555555]">
          © {new Date().getFullYear()} {profile.fullName} — Designed & Built with Precision.
        </p>
      </div>
    </footer>
  );
}
