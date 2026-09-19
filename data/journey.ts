export interface JourneyItem {
  id: string;
  year: string;
  label: string;
  title: string;
  description: string;
  type: "MILESTONE" | "PROJECT" | "QUEST";
  status: "COMPLETE" | "ACTIVE";
}

export const journey: JourneyItem[] = [
  {
    id: "J001",
    year: "2024",
    label: "ROUTE 1 — ORIGIN",
    title: "Joined NIT Jalandhar",
    description: "Started B.Tech IT at NIT Jalandhar. Batch 2024–2029.",
    type: "MILESTONE",
    status: "COMPLETE",
  },
  {
    id: "J002",
    year: "2024",
    label: "ROUTE 2 — FIRST BUILD",
    title: "AmbitionBox Data Science Project",
    description:
      "End-to-end project: scraped 10,000+ companies, trained Random Forest " +
      "salary predictor, built Streamlit app, began RAG chatbot pipeline.",
    type: "PROJECT",
    status: "COMPLETE",
  },
  {
    id: "J003",
    year: "2025",
    label: "ROUTE 3 — FULLSTACK",
    title: "Shipped Pairfect",
    description:
      "Built and deployed a full couples web app — auth, real-time, " +
      "AI features, legal pages, and programmatic SEO.",
    type: "PROJECT",
    status: "COMPLETE",
  },
  {
    id: "J004",
    year: "2026",
    label: "ROUTE 4 — ML RESEARCH",
    title: "ThinkFolio 2.0",
    description:
      "Built adaptive financial reasoning platform with 3-gen ML eval " +
      "engine, BKT, SHAP, GroupKFold CV, and A/B testing infrastructure.",
    type: "PROJECT",
    status: "ACTIVE",
  },
  {
    id: "J005",
    year: "2026",
    label: "ACTIVE QUEST ●",
    title: "ML Internship Hunt",
    description:
      "Actively seeking ML & software engineering internships. " +
      "Open to research collaborations and cool ideas.",
    type: "QUEST",
    status: "ACTIVE",
  },
];
