'use client';

import { useState } from 'react';

interface PixelAvatarProps {
  onSpeak?: () => void;
}

export default function PixelAvatar({ onSpeak }: PixelAvatarProps) {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isWaving, setIsWaving] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  const quotes = [
    "Hi there! I'm Sajal. Welcome to my dollhouse! ♡",
    "Click any room to take a closer look at my work!",
    "Check out the Projects room (top middle) for Pairfect & DevDex! 🚀",
    "Head to the garage to grab a copy of my résumé! 🏎️",
    "Peek into Achievements for hackathon cups & awards! 🏆",
    "Press the [ROOMS] button below or press ~ for the terminal!",
  ];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 900);
    setQuoteIdx((prev) => (prev + 1) % quotes.length);
    setShowBubble(true);
    if (onSpeak) onSpeak();
  };

  return (
    <div
      onClick={handleClick}
      className="relative group cursor-pointer select-none flex flex-col items-center"
      title="Click Sajal to say hello!"
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute -top-20 -left-28 sm:-left-36 w-44 sm:w-52 p-2 rounded bg-[#FFF8E7] border-2 border-[#2A1633] text-[#1F132B] font-mono text-[10px] shadow-xl z-30 pixel-box-shadow leading-tight group-hover:scale-105 transition-transform pointer-events-auto">
          <div className="flex items-center justify-between border-b border-[#2A1633]/20 pb-0.5 mb-1">
            <span className="font-pixel text-[9px] text-[#FF4081] font-bold">SAJAL.EXE</span>
            <span className="text-[8px] text-[#7E573C]">CLICK TO CHAT</span>
          </div>
          <p>{quotes[quoteIdx]}</p>
          {/* Bubble tail pointing down-right toward avatar */}
          <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#FFF8E7]" />
        </div>
      )}

      {/* Avatar Pixel Character (matching reference in media_1789913364471.png) */}
      <div className="relative animate-avatar-idle flex flex-col items-center">
        {/* Brown Bob Hair with Fringe */}
        <div className="relative">
          <div className="w-8 h-4 bg-[#6D4125] rounded-t-sm relative shadow-xs">
            {/* Top Highlight */}
            <div className="absolute top-0.5 left-1.5 w-5 h-1 bg-[#8D5B3A] rounded-full" />
            {/* Side Bob Hair Lengths */}
            <div className="absolute top-1 -left-1 w-1.5 h-4 bg-[#6D4125] rounded-b-xs" />
            <div className="absolute top-1 -right-1 w-1.5 h-4 bg-[#6D4125] rounded-b-xs" />
          </div>

          {/* Face */}
          <div className="w-6 h-5 bg-[#FBD7BA] mx-auto relative border-x border-b border-[#E0AC82]">
            {/* Black Glasses */}
            <div className="absolute top-1.5 left-0.5 right-0.5 flex justify-between items-center px-0.5">
              <div className="w-2 h-1.5 border-2 border-[#1E1128] bg-white/50 rounded-xs" />
              <div className="w-1 h-[1.5px] bg-[#1E1128]" />
              <div className="w-2 h-1.5 border-2 border-[#1E1128] bg-white/50 rounded-xs" />
            </div>
            {/* Eyes behind lenses */}
            <div className="absolute top-2 left-1.5 w-[2px] h-[2px] bg-[#1E1128] rounded-full" />
            <div className="absolute top-2 right-1.5 w-[2px] h-[2px] bg-[#1E1128] rounded-full" />
            {/* Shy Blush */}
            <div className="absolute bottom-1 left-0.5 w-1.5 h-1 bg-[#FF80AB]/60 rounded-full" />
            <div className="absolute bottom-1 right-0.5 w-1.5 h-1 bg-[#FF80AB]/60 rounded-full" />
            {/* Smile */}
            <div className="absolute bottom-0.5 left-2 w-2 h-[1px] bg-[#A05C3B] rounded-full" />
          </div>
        </div>

        {/* Pink Dress / Top (matching reference) */}
        <div className="relative w-8 h-6 bg-[#FF4081] border-x-2 border-b-2 border-[#C2185B] shadow-xs flex flex-col items-center">
          {/* Collar detail */}
          <div className="w-3 h-1 bg-white rounded-b-xs mb-1" />

          {/* Left Arm (waving when clicked) */}
          <div
            className={`absolute top-0.5 -left-2 w-2 h-5 bg-[#FBD7BA] border border-[#E0AC82] rounded-xs origin-top transition-transform ${
              isWaving ? 'rotate-[-60deg] animate-pulse' : ''
            }`}
          />
          {/* Right Arm */}
          <div className="absolute top-0.5 -right-2 w-2 h-5 bg-[#FBD7BA] border border-[#E0AC82] rounded-xs" />
        </div>

        {/* Legs & Shoes (Light blue / Lavender shoes) */}
        <div className="flex gap-1 -mt-0.5">
          <div className="w-2.5 h-4 bg-[#90CAF9] border-x border-[#64B5F6] flex flex-col justify-end">
            <div className="w-full h-1.5 bg-[#5C6BC0] rounded-b-xs" />
          </div>
          <div className="w-2.5 h-4 bg-[#90CAF9] border-x border-[#64B5F6] flex flex-col justify-end">
            <div className="w-full h-1.5 bg-[#5C6BC0] rounded-b-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}