'use client';

import { motion } from 'framer-motion';
import { Footprints, Laptop, Key, Headphones, ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function StationSneakerPedestal() {
  const { playClick, playHover } = useSound();

  const kicks = [
    {
      name: "Salomon XT-6 Gore-Tex",
      colorway: "Black / Phantom / Magnet",
      category: "GORPCORE / TRAIL",
      vibe: "Rainproof technical nylon, Quicklace harness, all-weather campus pacing.",
      status: "PRIMARY ROTATION",
    },
    {
      name: "Adidas Samba OG",
      colorway: "Cloud White / Core Black / Gum",
      category: "HERITAGE / LOW SILHOUETTE",
      vibe: "Clean low-profile leather, suede T-toe, pairs effortlessly with wide raw denim.",
      status: "STUDIO UNIFORM",
    },
    {
      name: "Asics Gel-Kayano 14",
      colorway: "Pure Silver / Metallic Grey",
      category: "Y2K / TECH RUNNER",
      vibe: "GEL cushioning, metallic cage overlays, high-mileage engineering sprints.",
      status: "SPRINT ROTATION",
    },
  ];

  const gear = [
    { icon: Laptop, title: "Apple Silicon Rig", desc: "M-series workstation for local PyTorch tensor training & Next.js." },
    { icon: Headphones, title: "Studio Monitors", desc: "Closed-back neutral response for late night coding focus." },
    { icon: Key, title: "Matte Carabiner Rig", desc: "Tactile quick-release clip with braided nylon lanyard." },
  ];

  return (
    <div className="relative w-screen h-full shrink-0 flex items-center justify-center px-4 sm:px-10 md:px-16 select-none overflow-hidden border-r border-[#1B1D24]">
      <div className="max-w-6xl w-full h-[76vh] flex flex-col justify-between py-2 relative z-10">
        
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-xs text-[#7A7E8D] border-b border-[#1A1C24] pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="text-white font-bold tracking-widest uppercase">
              STATION 03 // SNEAKER & HARDWARE PEDESTAL
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-[#555864]">
            <span className="text-amber-400">PHYSICAL ARTIFACTS</span>
            <span>•</span>
            <span>SS26 ROTATION</span>
          </div>
        </div>

        {/* Core Pedestal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 py-4 overflow-hidden">
          
          {/* Left: Kick Rotation Cards (7 cols) */}
          <div className="lg:col-span-7 h-full max-h-[58vh] flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-[#7E828E] border-b border-[#1A1C24] pb-2">
              <span className="flex items-center gap-2 text-white font-bold">
                <Footprints size={14} className="text-amber-400" />
                <span>DAILY FOOTWEAR PEDESTAL</span>
              </span>
              <span>3 SILHOUETTES</span>
            </div>

            <div className="space-y-2.5 overflow-y-auto pr-1">
              {kicks.map((kick, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  onMouseEnter={playHover}
                  className="p-4 rounded-xl bg-[#0D0E12] border border-[#1E2028] hover:border-[#3E4250] transition-colors space-y-1.5 group cursor-default"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold group-hover:text-amber-300 transition-colors">
                      {kick.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#13151A] text-amber-400 border border-amber-500/20 text-[10px]">
                      {kick.category}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-[#8E92A0]">
                    Colorway: {kick.colorway}
                  </div>

                  <p className="text-xs text-[#A1A4B0] font-sans">
                    {kick.vibe}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Daily Developer Hardware Bench (5 cols) */}
          <div className="lg:col-span-5 h-full max-h-[58vh] rounded-2xl bg-[#0D0E12] border border-[#1E2028] p-6 shadow-2xl flex flex-col justify-between space-y-4">
            
            <div className="space-y-1.5 border-b border-[#1A1C24] pb-3 font-mono">
              <span className="text-[10px] text-[#6E7280] uppercase tracking-wider block">
                DAILY WORKSTATION GEAR
              </span>
              <h4 className="text-lg font-sans font-bold text-white">
                Hardware Benchmark
              </h4>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {gear.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-3 rounded-lg bg-[#12141A] border border-[#1C1F28] flex items-start gap-3">
                    <div className="p-2 rounded bg-[#161822] text-white shrink-0 mt-0.5">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-[11px] text-[#8E92A0] font-sans mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-lg bg-[#14161E] border border-[#20232E] text-[11px] font-mono text-[#A1A4B0] flex items-center justify-between">
              <span>ACTIVE AUDIO:</span>
              <span className="text-white font-bold">Lofi & Industrial Bass</span>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[#555864] pt-2 border-t border-[#1A1C24]">
          <span>FOOTWEAR × HARDWARE SPECIFICATION</span>
          <span>STATION 03 / 07</span>
        </div>

      </div>
    </div>
  );
}