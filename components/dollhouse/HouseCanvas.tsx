'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import HouseStructure from './house/HouseStructure';
import PixelAvatar from './house/PixelAvatar';

interface HouseCanvasProps {
  onOpenRoom: (room: string) => void;
  activeRoom: string | null;
  onOpenProjectModal: (id: string) => void;
}

export default function HouseCanvas({
  onOpenRoom,
  activeRoom,
  onOpenProjectModal,
}: HouseCanvasProps) {
  const { playClick } = useSound();

  // Smooth Camera Pan & Zoom Calculation for 3x3 Grid
  const getCameraTransform = () => {
    if (!activeRoom || activeRoom === 'home' || activeRoom === 'overview') {
      return 'translate3d(0, 0, 0) scale(1)';
    }

    switch (activeRoom) {
      // Top Floor
      case 'about':
        return 'translate3d(22%, 20%, 0) scale(1.4)';
      case 'projects':
        return 'translate3d(0%, 20%, 0) scale(1.4)';
      case 'education':
        return 'translate3d(-22%, 20%, 0) scale(1.4)';
      // Middle Floor
      case 'experience':
        return 'translate3d(22%, 0%, 0) scale(1.4)';
      case 'staircase':
        return 'translate3d(0%, 0%, 0) scale(1.4)';
      case 'achievements':
        return 'translate3d(-22%, 0%, 0) scale(1.4)';
      // Ground Floor
      case 'skills':
        return 'translate3d(22%, -20%, 0) scale(1.4)';
      case 'resume':
        return 'translate3d(0%, -20%, 0) scale(1.4)';
      case 'contact':
        return 'translate3d(-22%, -20%, 0) scale(1.4)';
      default:
        return 'translate3d(0, 0, 0) scale(1)';
    }
  };

  const isZoomed = Boolean(activeRoom && activeRoom !== 'home' && activeRoom !== 'overview');

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-1 sm:p-2 select-none overflow-hidden">
      
      {/* ── FLOATING BUTTON: BACK TO WHOLE HOUSE (WHEN ZOOMED) ── */}
      <AnimatePresence>
        {isZoomed && (
          <motion.button
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onClick={() => {
              playClick();
              onOpenRoom('home');
            }}
            className="fixed top-3 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1 rounded-full bg-[#FF4081] hover:bg-[#F50057] text-white font-pixel text-xs tracking-wider shadow-xl border-2 border-white/60 cursor-pointer flex items-center gap-1.5 pixel-bevel"
          >
            <Home size={12} />
            <span>[ ⌂ BACK TO WHOLE HOUSE ]</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CENTRAL DOLLHOUSE CONTAINER (PERFECTLY FITTED) ── */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center my-auto pt-1 pb-4">
        
        {/* Animated Camera Viewport */}
        <div
          className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu"
          style={{ transform: getCameraTransform() }}
        >
          <HouseStructure
            onOpenRoom={onOpenRoom}
            activeRoom={activeRoom}
            onOpenProjectModal={onOpenProjectModal}
          />
        </div>

        {/* Soft Oval Ground Shadow Under the House (matching reference) */}
        <div className="w-[92%] sm:w-[94%] h-5 sm:h-6 bg-[#BCAFCF]/60 rounded-full blur-[2px] -mt-2 z-0 pointer-events-none" />

        {/* Sajal's Avatar Outside on the Lawn at Bottom-Right (matching reference) */}
        <div className="absolute -bottom-1 right-2 sm:right-4 md:-right-6 z-30 pointer-events-auto">
          <PixelAvatar />
        </div>
      </div>
    </div>
  );
}