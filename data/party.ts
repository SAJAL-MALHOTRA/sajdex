export interface PartyMemberData {
  slot: string;
  name: string;
  type: string;
  ability: string;
  status: "LIVE" | "BUILDING" | "RESEARCH";
  color: string;
  moves: string[];
  description: string;
}

export const partyMembers: PartyMemberData[] = [
  {
    slot: "01",
    name: "THINKFOLIO",
    type: "ML / FINANCE",
    ability: "Adaptive Financial Reasoning",
    status: "RESEARCH",
    color: "#A855F7", // Psychic Purple
    moves: ["Python", "PyTorch", "FastAPI", "BKT Engine", "SHAP"],
    description: "Adaptive financial decision platform built with step-by-step reasoning decomposition and Bayesian Knowledge Tracing.",
  },
  {
    slot: "02",
    name: "PAIRFECT",
    type: "PRODUCT / FULL STACK",
    ability: "Real-Time Relationship Platform",
    status: "LIVE",
    color: "#3B82F6", // Steel Blue
    moves: ["Next.js 15", "React", "TypeScript", "Supabase Realtime"],
    description: "A real-time couples web application centered around emotional connection, shared photobooth, and AI vibe evaluation.",
  },
  {
    slot: "03",
    name: "ALGORITHMS & SYSTEMS",
    type: "ENGINEERING",
    ability: "DSA + Systems Problem Solving",
    status: "BUILDING",
    color: "#10B981", // Emerald Green
    moves: ["C++", "Python", "Data Structures", "System Design"],
    description: "Rigorous computer science problem solving, memory optimization algorithms, and high-performance system design.",
  },
  {
    slot: "04",
    name: "MULTI-AGENT RESEARCH",
    type: "AI / AGENTS",
    ability: "Graph Workflows & Vector Search",
    status: "BUILDING",
    color: "#FBBF24", // Amber AI
    moves: ["LangGraph", "FastAPI", "ChromaDB", "Gemini Flash"],
    description: "Constructing async multi-agent graph workflows, automated code reasoning, and semantic RAG search pipelines.",
  },
];
