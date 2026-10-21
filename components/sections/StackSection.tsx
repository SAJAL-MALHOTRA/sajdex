'use client';

export default function StackSection() {
  const specCategories = [
    {
      num: '01',
      title: 'LANGUAGES',
      items: ['Python', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      num: '02',
      title: 'FRAMEWORKS',
      items: ['Next.js', 'React', 'FastAPI', 'Streamlit', 'LangChain'],
    },
    {
      num: '03',
      title: 'ML / AI STACK',
      items: ['PyTorch', 'scikit-learn', 'LangGraph', 'ChromaDB', 'NumPy', 'Pandas'],
    },
    {
      num: '04',
      title: 'DATABASES',
      items: ['Supabase', 'PostgreSQL', 'SQLite', 'pgvector'],
    },
  ];

  return (
    <div className="w-full space-y-8 select-text">
      
      {/* ─── SECTION HEADER ─── */}
      <div className="flex items-center justify-between border-b border-[#202123] pb-4 font-mono text-xs text-[#8C8D8A]">
        <div className="flex items-center gap-2">
          <span className="text-[#E5484D] font-bold">03 —</span>
          <h2 className="text-[#F2F1ED] font-semibold tracking-wide text-sm font-sans">Technical stack</h2>
        </div>

        <span className="tracking-widest uppercase text-[11px] text-[#555755]">
          SPECIFICATION MODULES
        </span>
      </div>

      {/* ─── 4 TECHNICAL SPECIFICATION MODULES (TEENAGE ENGINEERING / BRAUN STYLE) ─── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {specCategories.map((cat) => (
          <div
            key={cat.title}
            className="p-5 rounded-lg bg-[#0C0D0F] border border-[#202123] hover:border-[#35373B] transition-colors space-y-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between font-mono text-xs border-b border-[#202123] pb-2.5">
              <span className="text-[#E5484D] font-bold">{cat.num}</span>
              <span className="text-[#8C8D8A] font-semibold tracking-wider text-[11px]">
                {cat.title}
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs flex-1">
              {cat.items.map((item) => (
                <div key={item} className="text-[#F2F1ED] flex items-center justify-between py-0.5 group">
                  <span className="group-hover:text-white transition-colors">{item}</span>
                  <span className="w-1 h-1 rounded-full bg-[#35373B] group-hover:bg-[#E5484D] transition-colors" />
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#202123] flex items-center justify-between text-[9px] font-mono text-[#555755]">
              <span>SPEC // VERIFIED</span>
              <span>DEV-0{cat.num}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
