export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "EXP-01",
    role: "B.Tech in Information Technology",
    organization: "NIT Jalandhar",
    period: "2025 — 2029",
    location: "Jalandhar, Punjab",
    summary: "CGPA: 8.13 · Dr. B. R. Ambedkar National Institute of Technology Jalandhar.",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, DBMS, Machine Learning, Computer Networks.",
      "Core Member, Cybernauts, NIT Jalandhar — organized coding competitions and technical events, engaging students in competitive programming and software development.",
      "Active participant in Fashion & Modelling Club, NIT Jalandhar (modelling events, workshops, shoots, and stage performances)."
    ]
  },
  {
    id: "EXP-02",
    role: "Full-Stack Real-Time Engineer",
    organization: "Pairfect (pairfect.site)",
    period: "2024",
    location: "Shipped Production App",
    summary: "Designed and shipped a full-stack real-time social platform with live state synchronization and LLM-driven prompt analysis.",
    highlights: [
      "Built Groq-accelerated Llama 3 inference pipeline delivering sub-50ms evaluation latency for instant conversational scoring.",
      "Implemented real-time bidirectional communication using Supabase WebSockets with PostgreSQL Row-Level Security (RLS) policies.",
      "Enforced end-to-end TypeScript schemas, shipping with zero TypeScript errors across 77 routes."
    ]
  },
  {
    id: "EXP-03",
    role: "Lead ML Systems Architect",
    organization: "ThinkFolio Platform",
    period: "2024 — Present",
    location: "Open Research & Production",
    summary: "Engineered dual-branch ML evaluation engine (PyTorch Tabular MLP + gradient-boosted trees) scoring financial reasoning across 8 dimensions.",
    highlights: [
      "Reached R² = 0.927 predictive accuracy across financial reasoning evaluations.",
      "Integrated FinBERT sentence embeddings with SHAP explainability under 100ms latency overhead.",
      "Architected containerized microservice backend with FastAPI, SQLAlchemy, PostgreSQL, and Alembic migrations."
    ]
  },
  {
    id: "EXP-04",
    role: "Autonomous Multi-Agent Developer",
    organization: "ScholarAI / ResearchFlow",
    period: "2024",
    location: "Agentic Systems",
    summary: "Architected 5-node stateful LangGraph pipeline (Planner → Researcher → Evidence Collector → Verifier → Writer) automating paper discovery.",
    highlights: [
      "Implemented vector similarity search over Supabase pgvector with semantic embeddings for technical literature.",
      "Built asynchronous REST APIs with FastAPI to handle long-running multi-agent reasoning cycles with checkpointing and state recovery."
    ]
  },
  {
    id: "EXP-05",
    role: "Content Creator & Model",
    organization: "Personal Brand & Media",
    period: "2024 — Present",
    location: "Digital & Editorial",
    summary: "Built a personal Instagram presence generating 2.2L+ (220K+) monthly views across fashion, tech, and creative content.",
    highlights: [
      "Curates sartorial streetwear silhouettes, outerwear layering, and creative editorial storytelling.",
      "Combines software engineering discipline with fashion modeling and runway performance at NIT Jalandhar."
    ]
  }
];
