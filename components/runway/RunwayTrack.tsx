'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import StationPrologue from './stations/StationPrologue';
import StationLookSystem from './stations/StationLookSystem';
import StationSneakerPedestal from './stations/StationSneakerPedestal';
import StationMatrix from './stations/StationMatrix';
import StationDispatch from './stations/StationDispatch';
import { fits, FitItem } from '@/data/fits';
import { projects, Project } from '@/data/projects';

interface RunwayTrackProps {
  activeIndex: number;
  onSetIndex: (idx: number | ((prev: number) => number)) => void;
  onOpenFitModal: (fit: FitItem) => void;
  onOpenProjectModal: (id: string) => void;
  onOpenTerminal?: () => void;
}

export default function RunwayTrack({
  activeIndex,
  onSetIndex,
  onOpenFitModal,
  onOpenProjectModal,
  onOpenTerminal,
}: RunwayTrackProps) {
  const isScrolling = useRef(false);

  // Wheel listener: translate vertical or horizontal wheel events to station navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Avoid hijacking if inside a scrollable modal
      const target = e.target as HTMLElement;
      if (target.closest('.overflow-y-auto')) return;

      e.preventDefault();

      if (isScrolling.current) return;
      isScrolling.current = true;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (delta > 25) {
        onSetIndex((prev) => Math.min(7, prev + 1));
      } else if (delta < -25) {
        onSetIndex((prev) => Math.max(0, prev - 1));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 450);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onSetIndex]);

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toUpperCase();
      if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        onSetIndex((prev) => Math.min(7, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onSetIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        onSetIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        onSetIndex(7);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSetIndex]);

  // Project mappings
  const thinkfolio = projects.find((p) => p.id === 'OBJ-026') || projects[0];
  const pairfect = projects.find((p) => p.id === 'OBJ-027') || projects[1];
  const scholarai = projects.find((p) => p.id === 'OBJ-028') || projects[2];
  const devdexProj: Project = {
    id: 'OBJ-029',
    name: 'DEVDEX OS',
    status: 'ACTIVE',
    metric: '<10ms Latency',
    tagline: 'CLI & VOICE INTERFACE',
    description: 'Developer workspace operating system with integrated AI voice agent and terminal.',
    stack: ['React 19', 'Next.js 15', 'Web Audio API', 'TypeScript'],
    problem: 'Traditional portfolios lack interactive utility and tactile developer feedback.',
    solution: 'Engineered an in-browser operating system featuring terminal emulators and voice synthesis.',
    githubUrl: 'https://github.com/sajal/devdex',
  };

  return (
    <div className="relative w-full h-[calc(100dvh-6rem)] mt-12 overflow-hidden flex items-center">
      {/* Horizontal Runway Strip that Glides Smoothly */}
      <motion.div
        animate={{ x: `-${activeIndex * 100}vw` }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full w-[800vw]"
      >
        {/* ── STATION 00: PROLOGUE ── */}
        <StationPrologue
          onNextStation={() => onSetIndex(1)}
          onOpenTerminal={onOpenTerminal}
        />

        {/* ── STATION 01: LOOK 01 × THINKFOLIO ── */}
        <StationLookSystem
          stationNumber="01"
          stationName="ML REASONING × TECHNICAL MONOCHROME"
          fit={fits[0]}
          project={thinkfolio}
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* ── STATION 02: LOOK 02 × PAIRFECT ── */}
        <StationLookSystem
          stationNumber="02"
          stationName="REALTIME PLATFORMS × ARCHIVE UNIFORM"
          fit={fits[1]}
          project={pairfect}
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* ── STATION 03: SNEAKER & HARDWARE PEDESTAL ── */}
        <StationSneakerPedestal />

        {/* ── STATION 04: LOOK 03 × SCHOLARAI ── */}
        <StationLookSystem
          stationNumber="04"
          stationName="MULTI-AGENT GRAPH × MIDNIGHT OPS"
          fit={fits[2]}
          project={scholarai}
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* ── STATION 05: LOOK 04 × DEVDEX ── */}
        <StationLookSystem
          stationNumber="05"
          stationName="TERMINAL RIG × CAMPUS CODE"
          fit={fits[3]}
          project={devdexProj}
          onOpenFitModal={onOpenFitModal}
          onOpenProjectModal={onOpenProjectModal}
        />

        {/* ── STATION 06: DISCIPLINE SYNTHESIS MATRIX ── */}
        <StationMatrix />

        {/* ── STATION 07: BACKSTAGE DISPATCH & TRANSMISSION ── */}
        <StationDispatch />
      </motion.div>
    </div>
  );
}