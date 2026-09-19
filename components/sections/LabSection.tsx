'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioKnowledge } from '@/data/knowledge';
import { useSound } from '@/hooks/useSound';
import { Code2, FileCode, Terminal as TerminalIcon, ExternalLink, Copy, Check, Play, Cpu, Layers } from 'lucide-react';

export default function LabSection() {
  const [selectedFileId, setSelectedFileId] = useState<string>('thinkfolio-bkt');
  const [labMode, setLabMode] = useState<'CODE' | 'ARCHITECTURE' | 'SIMULATION'>('CODE');
  const [simStep, setSimStep] = useState<number>(1);
  const [copied, setCopied] = useState(false);

  const { playClick, playHover } = useSound();

  const selectedFile = portfolioKnowledge.labFiles.find((f) => f.id === selectedFileId) || portfolioKnowledge.labFiles[0];

  const handleCopyCode = () => {
    playClick();
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulationStep = () => {
    playClick();
    setSimStep((prev) => (prev >= 4 ? 1 : prev + 1));
  };

  return (
    <section id="lab" className="py-8 max-w-7xl mx-auto px-6 sm:px-10 font-inter select-none">
      {/* Eyebrow, Heading, and Mode Toggles */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1A1A]" />
            <span className="font-mono text-xs text-[#888888] font-semibold tracking-wider uppercase">
              OPEN LAB // DEVELOPER ENVIRONMENT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#F5F5F0] tracking-tight uppercase">
            Open Lab.
          </h2>
          <p className="text-xs sm:text-sm text-[#888888]">
            Explore production architecture code, PyTorch evaluation models, and interactive system simulations.
          </p>
        </div>

        {/* View Toggles: CODE / ARCHITECTURE / SIMULATION */}
        <div className="flex items-center gap-1 p-1 bg-[#0B0C0F] border border-[#1a1a1f] rounded-xl self-start md:self-auto">
          <button
            onClick={() => {
              playClick();
              setLabMode('CODE');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              labMode === 'CODE'
                ? 'bg-[#111216] border border-[#1a1a1f] text-[#F5F5F0] font-semibold'
                : 'text-[#888888] hover:text-[#F5F5F0]'
            }`}
          >
            <Code2 size={14} />
            <span>CODE</span>
          </button>

          <button
            onClick={() => {
              playClick();
              setLabMode('ARCHITECTURE');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              labMode === 'ARCHITECTURE'
                ? 'bg-[#111216] border border-[#1a1a1f] text-[#F5F5F0] font-semibold'
                : 'text-[#888888] hover:text-[#F5F5F0]'
            }`}
          >
            <Layers size={14} />
            <span>ARCHITECTURE</span>
          </button>

          <button
            onClick={() => {
              playClick();
              setLabMode('SIMULATION');
            }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              labMode === 'SIMULATION'
                ? 'bg-[#111216] border border-[#1a1a1f] text-[#F5F5F0] font-semibold'
                : 'text-[#888888] hover:text-[#F5F5F0]'
            }`}
          >
            <Cpu size={14} className="text-[#FF1A1A]" />
            <span>SIMULATION</span>
          </button>
        </div>
      </div>

      {/* Mode 1 & 2: IDE Editor & File Explorer (CODE & ARCHITECTURE Modes) */}
      <AnimatePresence mode="wait">
        {labMode !== 'SIMULATION' ? (
          <motion.div
            key="ide-view"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0B0C0F] border border-[#1a1a1f] rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[380px]"
          >
            {/* Left Sidebar: File Explorer */}
            <div className="md:col-span-3 bg-[#08090B] border-b md:border-b-0 md:border-r border-[#1a1a1f] p-4 space-y-3">
              <div className="flex items-center gap-2 font-mono text-[10px] text-[#888888] px-1 border-b border-[#1a1a1f] pb-2">
                <TerminalIcon size={14} className="text-[#FF1A1A]" />
                <span>EXPLORER // MODULES</span>
              </div>

              <div className="space-y-1">
                <span className="font-pixel text-[5px] text-[#888888] px-1 block">CODE FILES:</span>
                {portfolioKnowledge.labFiles.map((file) => {
                  const isActive = file.id === selectedFileId;
                  return (
                    <button
                      key={file.id}
                      onClick={() => {
                        playClick();
                        setSelectedFileId(file.id);
                      }}
                      onMouseEnter={playHover}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-mono text-xs transition-colors text-left ${
                        isActive
                          ? 'bg-[#111216] border border-[#1a1a1f] text-[#F5F5F0] font-semibold'
                          : 'text-[#888888] hover:text-[#F5F5F0] hover:bg-[#0B0C0F]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <FileCode size={14} className={isActive ? 'text-[#FF1A1A]' : 'text-gray-500'} />
                        <span className="truncate">{file.name}</span>
                      </div>
                      <span className="font-pixel text-[5px] text-[#888888] shrink-0 ml-1">{file.category}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 rounded-lg bg-[#111216] border border-[#1a1a1f] text-xs text-[#888888] space-y-1 mt-3">
                <span className="font-pixel text-[5px] text-[#FF1A1A] block">REPRODUCIBILITY:</span>
                <p className="text-[11px] leading-relaxed">
                  {labMode === 'CODE'
                    ? 'Production code modules from ThinkFolio, Pairfect, and ScholarAI repositories.'
                    : 'System microservices architecture and Bayesian Knowledge Tracing specifications.'}
                </p>
              </div>
            </div>

            {/* Right Panel: Code / Architecture Viewer */}
            <div className="md:col-span-9 flex flex-col justify-between bg-[#0B0C0F] p-4 md:p-6">
              
              <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#F5F5F0]">
                  <Code2 size={16} className="text-[#FF1A1A]" />
                  <span>{selectedFile.name}</span>
                  <span className="text-[10px] text-[#888888] font-pixel">({labMode})</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-xs text-[#888888] hover:text-white transition-colors"
                  >
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span className="font-mono text-[10px]">{copied ? 'COPIED' : 'COPY'}</span>
                  </button>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md bg-[#111216] border border-[#1a1a1f] hover:border-[#888888] text-[#888888] hover:text-white transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Code Window */}
              <div className="bg-[#08090B] border border-[#1a1a1f] rounded-xl p-4 sm:p-5 overflow-x-auto font-mono text-xs text-[#E8E6E3] leading-relaxed flex-1 select-text">
                <pre className="whitespace-pre">{selectedFile.code}</pre>
              </div>

              <div className="pt-3 mt-3 border-t border-[#1a1a1f] flex items-center justify-between text-xs font-mono text-[#888888]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>MODULE VERIFIED</span>
                </div>
                <span>CATEGORY: {selectedFile.category}</span>
              </div>

            </div>
          </motion.div>
        ) : (
          /* Mode 3: Interactive System Flow Simulation */
          <motion.div
            key="sim-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0B0C0F] border border-[#1a1a1f] shadow-xl space-y-6 min-h-[320px]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#1a1a1f] pb-3">
              <div>
                <span className="font-pixel text-[6px] text-[#FF1A1A]">THINKFOLIO ML PIPELINE SIMULATION</span>
                <h3 className="text-xl font-black text-[#F5F5F0] uppercase tracking-tight">
                  Dual-Branch Reasoning & Risk Pipeline
                </h3>
              </div>

              <button
                onClick={handleRunSimulationStep}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5F5F0] hover:bg-white text-[#08090B] font-semibold text-xs transition-colors shadow-md"
              >
                <Play size={14} className="fill-current" />
                <span>NEXT STEP ({simStep}/4)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 1 ? 'bg-[#111216] border-[#FF1A1A] text-[#F5F5F0]' : 'bg-[#08090B] border-[#1a1a1f] text-[#888888]'
              }`}>
                <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-2 mb-2">
                  <span className="font-pixel text-[5px] text-[#FF1A1A]">STEP 01</span>
                  <span className="font-mono text-xs">INPUT</span>
                </div>
                <h4 className="text-sm font-bold uppercase">Query & Data</h4>
                <p className="text-xs text-[#888888] mt-1">Raw user prompt & portfolio features.</p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 2 ? 'bg-[#111216] border-[#FF1A1A] text-[#F5F5F0]' : 'bg-[#08090B] border-[#1a1a1f] text-[#888888]'
              }`}>
                <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-2 mb-2">
                  <span className="font-pixel text-[5px] text-[#FF1A1A]">STEP 02</span>
                  <span className="font-mono text-xs">PROCESSING</span>
                </div>
                <h4 className="text-sm font-bold uppercase">Features</h4>
                <p className="text-xs text-[#888888] mt-1">16-dim vector feature extraction.</p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 3 ? 'bg-[#111216] border-[#FF1A1A] text-[#F5F5F0]' : 'bg-[#08090B] border-[#1a1a1f] text-[#888888]'
              }`}>
                <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-2 mb-2">
                  <span className="font-pixel text-[5px] text-[#FF1A1A]">STEP 03</span>
                  <span className="font-mono text-xs">MODEL</span>
                </div>
                <h4 className="text-sm font-bold uppercase">PyTorch BKT</h4>
                <p className="text-xs text-[#888888] mt-1">Dual-branch evaluator pass.</p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                simStep >= 4 ? 'bg-[#111216] border-[#10B981] text-[#10B981]' : 'bg-[#08090B] border-[#1a1a1f] text-[#888888]'
              }`}>
                <div className="flex items-center justify-between border-b border-[#1a1a1f] pb-2 mb-2">
                  <span className="font-pixel text-[5px] text-[#10B981]">STEP 04</span>
                  <span className="font-mono text-xs">OUTPUT</span>
                </div>
                <h4 className="text-sm font-bold uppercase">Reasoning Eval</h4>
                <p className="text-xs text-[#888888] mt-1">Score: 0.927 | SHAP importances.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
