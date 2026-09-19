export interface Badge {
  id: string;
  name: string;
  category: string;
  unlockedAt: string;
  criteria: string;
  description: string;
  evidence: string;
  icon?: string;
  stack: string[];
}

export const badges: Badge[] = [
  {
    id: "B-BUILDER",
    name: "BUILDER",
    category: "PRODUCT",
    unlockedAt: "2024",
    criteria: "Built and shipped a real-time consumer application.",
    description: "Architected and shipped Pairfect — a real-time web platform for couples with live state sync.",
    evidence: "Pairfect live application deployment & user testing.",
    stack: ["Next.js", "TypeScript", "Supabase Realtime", "Tailwind CSS"],
  },
  {
    id: "B-RESEARCHER",
    name: "RESEARCHER",
    category: "AI SYSTEMS",
    unlockedAt: "2024",
    criteria: "Designed and implemented an adaptive ML reasoning system.",
    description: "Constructed ThinkFolio's Bayesian Knowledge Tracing (BKT) learner evaluation model.",
    evidence: "BKT learner evaluation model & SHAP feature explainability pipeline.",
    stack: ["Python", "PyTorch", "FastAPI", "BKT Engine"],
  },
  {
    id: "B-FULLSTACK",
    name: "FULL STACK",
    category: "ENGINEERING",
    unlockedAt: "2024",
    criteria: "Built production web applications with modern full-stack tooling.",
    description: "Engineered responsive frontend interfaces, RESTful microservices, and database schemas.",
    evidence: "Full-stack production builds across Next.js, Supabase, and FastAPI.",
    stack: ["Next.js 15", "React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "B-SYSTEMS",
    name: "SYSTEMS ARCHITECT",
    category: "ARCHITECTURE",
    unlockedAt: "2025",
    criteria: "Designed systems spanning frontend, backend, ML, and vector data layers.",
    description: "Constructed multi-agent graph workflows, semantic vector RAG search, and microservice APIs.",
    evidence: "Async multi-agent orchestration pipelines with LangGraph and ChromaDB.",
    stack: ["LangGraph", "FastAPI", "ChromaDB", "Supabase pgvector"],
  },
];
