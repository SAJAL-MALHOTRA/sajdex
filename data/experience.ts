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
    role: "IT Undergraduate (2nd Year)",
    organization: "NIT Jalandhar",
    period: "2023 - Present",
    location: "Jalandhar, Punjab",
    summary: "Specializing in Machine Learning pipelines, full-stack systems architecture, and algorithmic problem solving.",
    highlights: [
      "Core coursework in Data Structures & Algorithms, Operating Systems, Database Management Systems.",
      "Leading hands-on development for ML-powered and full-stack software initiatives."
    ]
  },
  {
    id: "EXP-02",
    role: "Creator & Lead Architect",
    organization: "Pairfect",
    period: "2024",
    location: "Production App",
    summary: "Designed and launched Pairfect, a live real-time web application centered around emotional connection.",
    highlights: [
      "Engineered real-time state synchronization with Supabase and Next.js App Router.",
      "Integrated AI-driven vibe analysis engines and interactive photobooth modules."
    ]
  },
  {
    id: "EXP-03",
    role: "ML Researcher & System Developer",
    organization: "ThinkFolio Platform",
    period: "2024",
    location: "Open Research",
    summary: "Engineered adaptive financial reasoning platform powered by Bayesian Knowledge Tracing and SHAP explainability.",
    highlights: [
      "Built multi-generation ML evaluation engine in PyTorch and FastAPI.",
      "Implemented step-by-step model interpretability with zero latency degradation."
    ]
  },
  {
    id: "EXP-04",
    role: "Async Multi-Agent Developer",
    organization: "TripScout & ScholarAI",
    period: "2024",
    location: "Sprint Builds",
    summary: "Architected 5-node LangGraph pipelines and RAG workflows with Supabase pgvector.",
    highlights: [
      "Built multi-agent city comparator in a 3-hour sprint using LangGraph and Gemini API.",
      "Developed semantic research synthesis backend with FastAPI and vector search."
    ]
  }
];
