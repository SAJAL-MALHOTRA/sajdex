'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import VogueCover from './VogueCover';
import SpreadEditorsNote from './spreads/SpreadEditorsNote';
import SpreadStoryThinkFolio from './spreads/SpreadStoryThinkFolio';
import SpreadStoryPairfect from './spreads/SpreadStoryPairfect';
import SpreadStoryScholarAI from './spreads/SpreadStoryScholarAI';
import SpreadLookbookGallery from './spreads/SpreadLookbookGallery';
import SpreadBackCover from './spreads/SpreadBackCover';
import { FitItem } from '@/data/fits';

interface MagazineSpreadReaderProps {
  activeIndex: number;
  onSetIndex: (idx: number | ((prev: number) => number)) => void;
  onOpenFitModal: (fit: FitItem) => void;
  onOpenProjectModal: (id: string) => void;
  onOpenTerminal?: () => void;
}

export default function MagazineSpreadReader({
  activeIndex,
  onSetIndex,
  onOpenFitModal,
  onOpenProjectModal,
  onOpenTerminal,
}: MagazineSpreadReaderProps) {
  const isScrolling = useRef(false);

  // Wheel listener: map vertical/horizontal wheel delta to spread turns
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't hijack scroll inside an inner scrollable panel
      const target = e.target as HTMLElement;
      if (target.closest('.overflow-y-auto')) return;

      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (delta > 25) {
        onSetIndex((prev) => Math.min(6, (prev as number) + 1));
      } else if (delta < -25) {
        onSetIndex((prev) => Math.max(0, (prev as number) - 1));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 450);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onSetIndex]);

  // Keyboard listener: ArrowLeft / ArrowRight / PageUp / PageDown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        onSetIndex((prev) => Math.min(6, (prev as number) + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onSetIndex((prev) => Math.max(0, (prev as number) - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        onSetIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        onSetIndex(6);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSetIndex]);

  return (
    <div className="relative w-full h-[calc(100dvh-6.5rem)] mt-14 overflow-hidden flex items-center">
      {/* 700vw Horizontal Spreads Magazine Track */}
      <motion.div
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full w-[700vw]"
      >
        {/* SPREAD 00: THE VOGUE MAGAZINE COVER */}
        <VogueCover
          onOpenIssue={() => onSetIndex(1)}
          onOpenTerminal={onOpenTerminal}
        />

        {/* SPREAD 01: TABLE OF CONTENTS & EDITOR'S LETTER */}
        <SpreadEditorsNote
          onSelectSpread={(idx) => onSetIndex(idx)}
          onOpenTerminal={onOpenTerminal}
        />

        {/* SPREAD 02: THINKFOLIO // ML QUANT REASONING */}
        <SpreadStoryThinkFolio
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* SPREAD 03: PAIRFECT // SYNCHRONIZED STATES */}
        <SpreadStoryPairfect
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* SPREAD 04: SCHOLARAI // AUTONOMOUS RESEARCH GRAPH */}
        <SpreadStoryScholarAI
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* SPREAD 05: THE WARDROBE ARCHIVE // LOOKBOOK CONTACT SHEET */}
        <SpreadLookbookGallery
          onOpenFitModal={onOpenFitModal}
        />

        {/* SPREAD 06: COLOPHON & DISPATCH // THE BACK COVER */}
        <SpreadBackCover />
      </motion.div>
    </div>
  );
}
