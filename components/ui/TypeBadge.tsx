'use client';

const typeColors: Record<string, { text: string; bg: string; border: string }> = {
  AI:         { text: '#fbbf24', bg: '#1a1708', border: '#fbbf2433' },
  WEB:        { text: '#3b82f6', bg: '#0b1422', border: '#3b82f633' },
  ML:         { text: '#8b5cf6', bg: '#140f22', border: '#8b5cf633' },
  FINANCE:    { text: '#10b981', bg: '#081a14', border: '#10b98133' },
  SOCIAL:     { text: '#ec4899', bg: '#1a0010', border: '#ec489933' },
  RESEARCH:   { text: '#f97316', bg: '#1a0c00', border: '#f9731633' },
  CREATIVE:   { text: '#ef4444', bg: '#1c0c0c', border: '#ef444433' },
  FULLSTACK:  { text: '#06b6d4', bg: '#081418', border: '#06b6d433' },
  'FULL STACK': { text: '#06b6d4', bg: '#081418', border: '#06b6d433' },
  AGENTS:     { text: '#f59e0b', bg: '#1c1508', border: '#f59e0b33' },
  RAG:        { text: '#6366f1', bg: '#0e1022', border: '#6366f133' },
};

interface TypeBadgeProps {
  type: string;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const config = typeColors[type.toUpperCase()] || { text: '#9CA3AF', bg: '#12131a', border: '#1e1e28' };

  return (
    <span
      className="inline-block font-pixel text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-none border select-none"
      style={{
        color: config.text,
        backgroundColor: config.bg,
        borderColor: config.border,
      }}
    >
      {type}
    </span>
  );
}
