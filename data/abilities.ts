export interface Ability {
  id: string;
  name: string;
  category: string;
  description: string;
  demonstratedIn: string[];
}

export const abilities: Ability[] = [
  {
    id: "AB-01",
    name: "SYSTEM DESIGN",
    category: "ENGINEERING",
    description: "Designing end-to-end software and data systems from ambiguous requirements.",
    demonstratedIn: ["Pairfect Realtime Engine", "ThinkFolio Microservice Architecture"],
  },
  {
    id: "AB-02",
    name: "RAPID PROTOTYPING",
    category: "PRODUCT",
    description: "Turning product ideas into functional, production-ready applications quickly.",
    demonstratedIn: ["Pairfect", "TripScout AI"],
  },
  {
    id: "AB-03",
    name: "ML REASONING",
    category: "AI / RESEARCH",
    description: "Building, evaluating, and explaining machine-learning systems and learner models.",
    demonstratedIn: ["ThinkFolio BKT Engine", "SHAP Explainability Pipeline"],
  },
  {
    id: "AB-04",
    name: "PRODUCT THINKING",
    category: "PRODUCT",
    description: "Connecting complex technical implementation directly to intuitive user experience.",
    demonstratedIn: ["Pairfect Relationship UX", "ScholarAI Search Workflow"],
  },
  {
    id: "AB-05",
    name: "RESEARCH & EXPERIMENTATION",
    category: "RESEARCH",
    description: "Translating research papers into code, benchmarks, and functional microservices.",
    demonstratedIn: ["Bayesian Knowledge Tracing", "RAG Vector Search"],
  },
  {
    id: "AB-06",
    name: "FULL-STACK ENGINEERING",
    category: "ENGINEERING",
    description: "Building scalable, responsive web platforms with modern Next.js and Supabase tooling.",
    demonstratedIn: ["Pairfect Platform", "SajDex OS"],
  },
];
