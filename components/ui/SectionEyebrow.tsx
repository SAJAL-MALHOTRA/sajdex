'use client';

interface SectionEyebrowProps {
  text: string;
  number?: string;
}

export default function SectionEyebrow({ text, number }: SectionEyebrowProps) {
  return (
    <div className="inline-flex items-center gap-2 mb-3">
      <span className="font-pixel text-[8px] text-[#CC0000] tracking-widest uppercase">
        {text}
      </span>
      {number && (
        <span className="font-pixel text-[8px] text-[#444444] uppercase">
          #{number}
        </span>
      )}
    </div>
  );
}
