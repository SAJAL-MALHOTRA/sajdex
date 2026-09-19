export interface Move {
  id: string;
  name: string;
  type: string;
  description: string;
  usedIn: string[];
  stack: string[];
}

export const moves: Move[] = [
  {
    id: "M01",
    name: "BUILD",
    type: "NORMAL",
    description: "Turn ideas into working, production-ready software products.",
    usedIn: ["Pairfect", "ThinkFolio"],
    stack: ["Next.js", "React", "Supabase", "TypeScript"],
  },
  {
    id: "M02",
    name: "RESEARCH",
    type: "PSYCHIC",
    description: "Turn research papers and questions into experiments and computational models.",
    usedIn: ["ThinkFolio BKT Engine", "ScholarAI"],
    stack: ["Python", "PyTorch", "FastAPI", "BKT"],
  },
  {
    id: "M03",
    name: "SHIP",
    type: "STEEL",
    description: "Take software prototypes from development to live production deployment.",
    usedIn: ["Pairfect Platform", "TripScout AI"],
    stack: ["Vercel", "FastAPI", "Tailwind CSS"],
  },
  {
    id: "M04",
    name: "ANALYZE",
    type: "ELECTRIC",
    description: "Break complex technical problems and ML model outputs into clear metrics.",
    usedIn: ["SHAP ML Pipeline", "BKT Learner Modeling"],
    stack: ["Python", "Scikit-Learn", "NumPy", "Pandas"],
  },
  {
    id: "M05",
    name: "DESIGN",
    type: "FAIRY",
    description: "Turn complex technical ideas into intuitive, editorial user interfaces.",
    usedIn: ["Pairfect Relationship UX", "SajDex OS"],
    stack: ["Tailwind CSS", "Framer Motion", "Inter Font"],
  },
  {
    id: "M06",
    name: "LEARN",
    type: "DRAGON",
    description: "Rapidly master new technologies, frameworks, and domain concepts.",
    usedIn: ["Multi-Agent Workflows", "Semantic RAG Search"],
    stack: ["LangGraph", "ChromaDB", "Supabase Vector"],
  },
];
