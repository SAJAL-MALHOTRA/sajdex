export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills = {
  categories: [
    {
      title: "LANGUAGES",
      items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
    },
    {
      title: "ML & AI",
      items: ["PyTorch", "XGBoost", "scikit-learn", "LangGraph", "LangChain", "HuggingFace (FinBERT)", "OpenCV"],
    },
    {
      title: "BACKEND & WEB",
      items: ["FastAPI", "Next.js", "React", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "DATABASES & STORAGE",
      items: ["PostgreSQL", "Supabase", "pgvector", "Redis", "SQLite", "SQLAlchemy"],
    },
    {
      title: "TOOLS & INFRASTRUCTURE",
      items: ["Docker", "Git/GitHub", "Linux (Arch Linux)", "Postman", "Alembic", "CI/CD"],
    },
  ] as SkillCategory[],
};
