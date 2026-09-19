'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Play, RotateCcw, Cpu, CheckCircle2, ChevronRight, BarChart3, Database } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export default function OpenLabExplorer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [masteryProb, setMasteryProb] = useState(0.42);
  const { playClick } = useSound();

  const pipelineSteps = [
    {
      title: '1. Diagnostic User Input',
      description: 'User submits financial reasoning query or problem step solution.',
      data: { query: 'Analyze risk-adjusted return ratio under volatility shift', userState: 'INITIAL' },
    },
    {
      title: '2. FastAPI Ingestion Gateway',
      description: 'Ingests request payload, validates schema, and routes to ML processing queue.',
      data: { latency: '12ms', status: 'VALIDATED' },
    },
    {
      title: '3. Learner Model (BKT Engine)',
      description: 'Bayesian Knowledge Tracing calculates p(L_t) mastery state probability update.',
      data: { priorMastery: '0.420', updatedMastery: (masteryProb + 0.15).toFixed(3), learnRate: '0.15' },
    },
    {
      title: '4. ML Evaluation Engine (PyTorch / XGBoost)',
      description: 'XGBoost (R²=0.927) scores multi-step reasoning accuracy and step logic.',
      data: { score: '94.2%', r2Metric: '0.927', PyTorchModel: 'v3-dual-branch' },
    },
    {
      title: '5. SHAP Interpretability Module',
      description: 'Extracts feature attribution scores explaining exact reason for model output.',
      data: { topFeature: 'Volatility_Ratio_Weight (+0.41)', attribution: 'EXPLAINABLE' },
    },
    {
      title: '6. Adaptive Recommendation Engine',
      description: 'Recommends next tailored financial scenario based on updated mastery state.',
      data: { nextModule: 'Advanced Options Pricing & Hedge Analysis', difficulty: 'LEVEL_4' },
    },
  ];

  const handleNextStep = () => {
    playClick();
    if (currentStep < pipelineSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setMasteryProb((prev) => Math.min(0.98, prev + 0.09));
    }
  };

  const handleReset = () => {
    playClick();
    setCurrentStep(0);
    setMasteryProb(0.42);
  };

  return (
    <div className="w-full bg-[#080808] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 font-inter text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <FlaskConical size={18} />
          </div>
          <div>
            <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
              OPEN LAB // DATA-FLOW EXPLORER
            </span>
            <h3 className="text-lg font-black text-[#F5F5F0] uppercase tracking-tight font-sans">
              ThinkFolio BKT Adaptive Pipeline Simulator
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-[#888888]">Mastery State p(L):</span>
          <span className="text-emerald-400 font-bold">{(masteryProb * 100).toFixed(1)}%</span>
        </div>
      </div>

      {/* Pipeline Visual Diagram */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {pipelineSteps.map((st, idx) => {
          const isActive = idx === currentStep;
          const isDone = idx < currentStep;

          return (
            <button
              key={st.title}
              onClick={() => {
                playClick();
                setCurrentStep(idx);
              }}
              className={`p-3 rounded-xl border text-left font-mono transition-all ${
                isActive
                  ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : isDone
                  ? 'bg-[#0D0D0D] border-emerald-500/40 text-emerald-400'
                  : 'bg-[#0B0B0B] border-white/10 text-[#888888]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="font-bold">STEP 0{idx + 1}</span>
                {isDone && <CheckCircle2 size={12} className="text-emerald-400" />}
              </div>
              <span className="font-bold text-xs block truncate">{st.title.split('. ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Inspector Card */}
      <div className="p-5 rounded-xl bg-[#0D0D0D] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[11px]">
          <span className="text-emerald-400 font-bold uppercase">{pipelineSteps[currentStep].title}</span>
          <span className="text-[#888888]">STATUS: EXECUTING</span>
        </div>

        <p className="text-sm text-[#F5F5F0] font-sans">
          {pipelineSteps[currentStep].description}
        </p>

        {/* Live Payload Data */}
        <div className="p-3 rounded-lg bg-[#050505] border border-white/10 font-mono text-[11px] space-y-1">
          <div className="text-[10px] text-[#888888] uppercase font-bold">PIPELINE STATE PAYLOAD:</div>
          <pre className="text-emerald-400 whitespace-pre-wrap">
            {JSON.stringify(pipelineSteps[currentStep].data, null, 2)}
          </pre>
        </div>
      </div>

      {/* Simulation Controls */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-white/10 text-[#888888] hover:text-white font-mono text-xs font-bold transition-colors"
        >
          <RotateCcw size={13} />
          <span>RESET PIPELINE</span>
        </button>

        <button
          onClick={handleNextStep}
          disabled={currentStep >= pipelineSteps.length - 1}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-colors disabled:opacity-50"
        >
          <span>SIMULATE NEXT STEP</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
