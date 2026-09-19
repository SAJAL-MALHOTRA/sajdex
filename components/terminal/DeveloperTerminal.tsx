'use client';

import { useState, useRef, useEffect } from 'react';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { skills } from '@/data/skills';
import { experiences } from '@/data/experience';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface DeveloperTerminalProps {
  onOpenModalProject?: (id: string) => void;
}

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export default function DeveloperTerminal({ onOpenModalProject }: DeveloperTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const { playClick } = useSound();
  const hasBooted = useRef(false);

  // Auto focus input on mount
  useEffect(() => {
    if (!isBooting && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isBooting]);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isBooting]);

  // Boot sequence
  useEffect(() => {
    if (hasBooted.current) return;
    hasBooted.current = true;

    const bootSequence = async () => {
      await new Promise((r) => setTimeout(r, 400));
      executeCommand('whoami', true);
      setIsBooting(false);
    };

    bootSequence();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const newIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIdx);
      setInputVal(history[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIdx = historyIndex + 1;
      if (newIdx >= history.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(newIdx);
        setInputVal(history[newIdx] || '');
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setLogs([]);
      setInputVal('');
    }
  };

  const handleExecuteCommandForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
  };

  const executeCommand = (rawCmd: string, silent = false) => {
    if (!silent) playClick();
    const cmdStr = rawCmd.trim();
    const lowerCmd = cmdStr.toLowerCase();
    
    if (!silent) {
      setHistory((prev) => [...prev, cmdStr]);
      setHistoryIndex(-1);
      setInputVal('');
    }

    let responseNode: React.ReactNode = null;

    if (lowerCmd === 'clear') {
      setLogs([]);
      return;
    } else if (lowerCmd === 'projects' || lowerCmd === 'ls' || lowerCmd === 'cd /projects') {
      responseNode = (
        <div className="space-y-2 pt-1 font-mono text-xs">
          <div className="font-semibold text-white">Featured Projects</div>
          <div className="space-y-1">
            {projects.map((p) => (
              <div key={p.id} className="flex justify-between items-center text-[#9E9EA8]">
                <span>
                  <span className="text-white font-medium">{p.id}</span> {p.name}
                </span>
                <span className="text-[#30A46C]">{p.status}</span>
              </div>
            ))}
          </div>
          <div className="text-[#62636C] text-[11px] pt-1">
            Type &apos;open OBJ-026&apos; to view case study.
          </div>
        </div>
      );
    } else if (lowerCmd.startsWith('open ')) {
      const targetId = cmdStr.split(' ')[1]?.toUpperCase();
      const proj = projects.find((p) => p.id === targetId || p.name === targetId);
      if (proj) {
        if (onOpenModalProject) onOpenModalProject(proj.id);
        responseNode = (
          <div className="space-y-1 text-xs text-[#30A46C]">
            <div>Opening case study: {proj.id} ({proj.name})</div>
          </div>
        );
      } else {
        responseNode = (
          <div className="text-xs text-red-400">
            Project &apos;{targetId}&apos; not found. Type &apos;projects&apos; for list.
          </div>
        );
      }
    } else if (lowerCmd === 'about' || lowerCmd === 'whoami' || lowerCmd === 'cd /') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#9E9EA8]">
          <div className="text-[#F4F4F6] font-semibold">{profile.fullName} ({profile.name})</div>
          <div>Role: ML Engineer & Full-Stack Builder</div>
          <div>Institution: NIT Jalandhar (IT &apos;29)</div>
          <div className="text-[#F4F4F6] pt-1">{profile.description}</div>
        </div>
      );
    } else if (lowerCmd === 'contact' || lowerCmd === 'email') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#9E9EA8]">
          <div>Email: {profile.links.email}</div>
          <div>GitHub: {profile.links.github}</div>
          <div>LinkedIn: {profile.links.linkedin}</div>
        </div>
      );
    } else if (lowerCmd === 'skills' || lowerCmd === 'stack') {
      responseNode = (
        <div className="space-y-3 pt-1 font-mono text-xs">
          <div className="font-semibold text-white">Technical Arsenal</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.categories.map((cat) => (
              <div key={cat.title} className="space-y-0.5">
                <div className="text-white/60 font-medium">{cat.title}</div>
                <div className="text-[#F4F4F6]">{cat.items.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (lowerCmd === 'experience' || lowerCmd === 'history') {
      responseNode = (
        <div className="space-y-3 pt-1 font-mono text-xs">
          <div className="font-semibold text-white">Experience Timeline</div>
          {experiences.map((exp) => (
            <div key={exp.id} className="space-y-0.5 border-l border-white/20 pl-3">
              <div className="text-[#F4F4F6] font-medium">{exp.role} <span className="text-[#9E9EA8]">@ {exp.organization}</span></div>
              <div className="text-[#62636C] text-[11px]">{exp.period}</div>
              <div className="text-[#9E9EA8]">{exp.summary}</div>
            </div>
          ))}
        </div>
      );
    } else if (lowerCmd === 'help') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#9E9EA8]">
          <div className="text-white font-medium pb-1">Available commands:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
            <div><span className="text-white">whoami</span> — Identity & bio</div>
            <div><span className="text-white">projects</span> — Shipped systems</div>
            <div><span className="text-white">skills</span> — Tech stack</div>
            <div><span className="text-white">experience</span> — Career timeline</div>
            <div><span className="text-white">open [ID]</span> — Inspect project modal</div>
            <div><span className="text-white">contact</span> — Reach out</div>
            <div><span className="text-white">clear</span> — Clear screen</div>
          </div>
        </div>
      );
    } else {
      responseNode = (
        <div className="text-xs text-red-400">
          zsh: command not found: {cmdStr}. Type &apos;help&apos; for list.
        </div>
      );
    }

    setLogs((prev) => [...prev, { cmd: cmdStr, output: responseNode }]);
  };

  return (
    <div
      onClick={() => { if (!isBooting) inputRef.current?.focus(); }}
      className="w-full bg-[#111216] border border-white/10 rounded-2xl overflow-hidden font-mono select-text flex flex-col justify-between cursor-text shadow-xl min-h-[460px] relative"
    >
      {/* Native macOS Header */}
      <div className="h-10 px-4 bg-[#16181F] border-b border-white/[0.06] flex items-center justify-between select-none shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5484D]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#30A46C]" />
        </div>

        <div className="text-xs text-[#9E9EA8] font-medium flex items-center gap-1.5">
          <span>sajal@portfolio ~ (zsh)</span>
        </div>

        <div className="w-12" />
      </div>

      {/* Terminal Content Box */}
      <div className="p-6 space-y-4 text-xs overflow-y-auto custom-scrollbar flex-1 pb-20 pr-2">
        {logs.map((log, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="text-[#9E9EA8]">sajal@portfolio ~ %</span>
              <span>{log.cmd}</span>
            </div>
            {log.output}
          </div>
        ))}

        {/* Active Input Line */}
        {!isBooting && (
          <form onSubmit={handleExecuteCommandForm} className="flex items-center gap-2 pt-1">
            <span className="text-[#9E9EA8] font-medium shrink-0">sajal@portfolio ~ %</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#F4F4F6] text-xs outline-none font-mono caret-white"
              autoFocus
            />
          </form>
        )}

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Run Chips */}
      <div className="absolute bottom-3 left-6 right-6 border-t border-white/[0.06] pt-3 bg-[#111216]">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#62636C] text-[11px]">Commands:</span>
          {['whoami', 'projects', 'skills', 'experience', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={(e) => {
                e.stopPropagation();
                executeCommand(cmd);
              }}
              className="px-2 py-0.5 bg-white/[0.04] hover:bg-white/10 rounded text-[11px] text-[#9E9EA8] hover:text-white transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
