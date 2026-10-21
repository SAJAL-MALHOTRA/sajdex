'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Volume2, X, Terminal, ArrowUpRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface DevDexWidgetProps {
  onOpenProject?: (id: string) => void;
  onOpenTerminal?: () => void;
}

type VoiceState = 'idle' | 'listening' | 'processing' | 'speaking';

export default function DevDexWidget({ onOpenProject, onOpenTerminal }: DevDexWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState<string>('');
  const [responseMessage, setResponseMessage] = useState<string>(
    "DevDex Voice Console online. Ask me about Sajal's projects, background, or stack."
  );

  const { playClick, playModalOpen } = useSound();
  const recognitionRef = useRef<any>(null);

  // Setup Web Speech Recognition if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setVoiceState('listening');
        };

        recognition.onresult = (event: any) => {
          const text = event.results[0][0].transcript;
          setTranscript(text);
          processQuery(text);
        };

        recognition.onerror = () => {
          setVoiceState('idle');
        };

        recognition.onend = () => {
          if (voiceState === 'listening') {
            setVoiceState('processing');
          }
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.onstart = () => setVoiceState('speaking');
      utterance.onend = () => setVoiceState('idle');
      utterance.onerror = () => setVoiceState('idle');
      window.speechSynthesis.speak(utterance);
    } else {
      setVoiceState('idle');
    }
  };

  const processQuery = (rawQuery: string) => {
    setVoiceState('processing');
    const q = rawQuery.toLowerCase();

    setTimeout(() => {
      let reply = '';
      if (q.includes('who') || q.includes('sajal') || q.includes('background')) {
        reply = "Sajal is an Information Technology undergraduate at NIT Jalandhar, building machine learning platforms and real-time software.";
      } else if (q.includes('pairfect') || q.includes('relationship')) {
        reply = "Pairfect is Sajal's flagship product—a real-time relationship platform built with Next.js, Supabase, and WebRTC.";
        if (onOpenProject) onOpenProject('OBJ-001');
      } else if (q.includes('thinkfolio') || q.includes('study')) {
        reply = "Thinkfolio is an analytical workspace combining React, TypeScript, and PyTorch for Bayesian student knowledge tracing.";
        if (onOpenProject) onOpenProject('OBJ-026');
      } else if (q.includes('stack') || q.includes('skills') || q.includes('tech')) {
        reply = "Sajal works primarily with Python, TypeScript, PyTorch, Next.js, FastAPI, and Supabase.";
      } else if (q.includes('terminal')) {
        reply = "Opening terminal shell.";
        if (onOpenTerminal) onOpenTerminal();
      } else {
        reply = `Received query: "${rawQuery}". Explore the portfolio sections below or inspect individual case studies.`;
      }

      setResponseMessage(reply);
      speakText(reply);
    }, 600);
  };

  const toggleListening = () => {
    playClick();
    if (voiceState === 'listening') {
      recognitionRef.current?.stop();
      setVoiceState('idle');
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch {
          // fallback
          setVoiceState('listening');
        }
      } else {
        // Fallback for browsers without speech API
        setVoiceState('listening');
        setTimeout(() => {
          processQuery('Tell me about Sajal and Pairfect');
        }, 1500);
      }
    }
  };

  const getStateLabel = () => {
    switch (voiceState) {
      case 'listening':
        return 'LISTENING';
      case 'processing':
        return 'PROCESSING';
      case 'speaking':
        return 'SPEAKING';
      default:
        return "TALK TO SAJAL'S DEVDEX";
    }
  };

  return (
    <>
      {/* ─── 1. FLOATING BOTTOM-RIGHT TRIGGER BUTTON ─── */}
      <motion.button
        onClick={() => {
          playModalOpen();
          setIsOpen(true);
        }}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0C0D0F] border border-[#202123] hover:border-[#35373B] text-[#F2F1ED] font-mono text-[11px] tracking-wider shadow-2xl transition-all cursor-pointer group"
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            voiceState === 'idle' ? 'bg-[#E5484D]' : 'bg-[#F2F1ED] animate-ping'
          }`}
        />
        <Mic size={13} className="text-[#8C8D8A] group-hover:text-[#F2F1ED] transition-colors" />
        <span className="font-semibold uppercase text-[10px] tracking-widest text-[#F2F1ED]">
          {getStateLabel()}
        </span>
      </motion.button>

      {/* ─── 2. COMPACT PHYSICAL ACOUSTIC INTERFACE (TEENAGE ENGINEERING STYLE) ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playClick();
                setIsOpen(false);
                if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                }
              }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-2.5rem)] sm:w-96 bg-[#0C0D0F] border border-[#202123] rounded-xl p-5 shadow-2xl space-y-4 font-mono select-text"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#202123] pb-2.5">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5484D]" />
                  <span className="font-bold text-[#F2F1ED] text-[11px] tracking-wider uppercase">
                    DEVDEX VOICE CONSOLE
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-[#555755] uppercase tracking-wider">
                    MOD-V01
                  </span>
                  <button
                    onClick={() => {
                      playClick();
                      setIsOpen(false);
                      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                      }
                    }}
                    className="p-1 rounded bg-[#141516] border border-[#202123] text-[#8C8D8A] hover:text-[#F2F1ED] transition-colors cursor-pointer"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>

              {/* Acoustic Component Visualizer */}
              <div className="py-4 flex flex-col items-center justify-center relative">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  
                  {/* Subtle gray rings */}
                  <motion.div
                    animate={
                      voiceState === 'listening' || voiceState === 'speaking'
                        ? { scale: [1, 1.12, 1], opacity: [0.3, 0.7, 0.3] }
                        : { scale: 1, opacity: 0.3 }
                    }
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-[#35373B]"
                  />

                  <motion.div
                    animate={
                      voiceState === 'speaking'
                        ? { scale: [1, 1.25, 1], opacity: [0.2, 0.5, 0.2] }
                        : { scale: 1, opacity: 0.15 }
                    }
                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.2 }}
                    className="absolute -inset-2 rounded-full border border-[#202123]"
                  />

                  {/* Physical Mic Button / Center Core */}
                  <button
                    onClick={toggleListening}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-lg ${
                      voiceState === 'listening'
                        ? 'bg-[#E5484D] border-[#E5484D] text-white shadow-[0_0_20px_rgba(229,72,77,0.4)]'
                        : voiceState === 'speaking'
                        ? 'bg-[#141516] border-[#F2F1ED] text-[#F2F1ED]'
                        : 'bg-[#141516] border-[#202123] hover:border-[#35373B] text-[#8C8D8A] hover:text-[#F2F1ED]'
                    }`}
                  >
                    {voiceState === 'listening' ? (
                      <Mic size={18} className="animate-pulse" />
                    ) : voiceState === 'speaking' ? (
                      <Volume2 size={18} className="text-[#E5484D]" />
                    ) : (
                      <Mic size={18} />
                    )}
                  </button>
                </div>

                {/* State Caption */}
                <div className="pt-3 flex items-center gap-1.5 text-[10px] text-[#8C8D8A] font-mono uppercase tracking-wider">
                  <span className={`w-1.5 h-1.5 rounded-full ${voiceState !== 'idle' ? 'bg-[#E5484D]' : 'bg-[#555755]'}`} />
                  <span>{getStateLabel()}</span>
                </div>
              </div>

              {/* Dynamic Response Window */}
              <div className="p-3 rounded bg-[#111214] border border-[#202123] space-y-1 text-xs">
                <div className="flex items-center justify-between text-[10px] text-[#555755]">
                  <span>RESPONSE</span>
                  <span>ENCRYPTED REASONING</span>
                </div>
                <p className="font-sans text-xs text-[#F2F1ED] leading-relaxed">
                  {responseMessage}
                </p>
              </div>

              {/* Quick Acoustic Inquiry Chips */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] text-[#555755] uppercase tracking-wider">
                  RAPID INQUIRY CHIPS:
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  {[
                    'Who is Sajal?',
                    'Explain Pairfect',
                    'Technical Stack',
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        playClick();
                        processQuery(chip);
                      }}
                      className="px-2.5 py-1 rounded bg-[#141516] hover:bg-[#1A1C20] border border-[#202123] text-[#8C8D8A] hover:text-[#F2F1ED] transition-colors cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Fallback Trigger */}
              {onOpenTerminal && (
                <div className="pt-2 border-t border-[#202123] flex items-center justify-between text-[10px] text-[#555755]">
                  <span>PREFER CLI INTERFACE?</span>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenTerminal();
                    }}
                    className="text-[#F2F1ED] hover:text-white flex items-center gap-1 cursor-pointer font-mono"
                  >
                    <Terminal size={11} />
                    <span>LAUNCH TERMINAL ↗</span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
