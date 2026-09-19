export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills = {
  categories: [
    {
      title: "LANGUAGES",
      items: ["Python", "C++", "JavaScript", "TypeScript"],
    },
    {
      title: "FRAMEWORKS",
      items: ["Next.js", "React", "FastAPI", "Streamlit", "LangChain"],
    },
    {
      title: "ML / AI STACK",
      items: ["PyTorch", "scikit-learn", "LangGraph", "ChromaDB", "NumPy", "Pandas"],
    },
    {
      title: "DATABASES",
      items: ["Supabase", "PostgreSQL", "SQLite", "pgvector"],
    },
  ] as SkillCategory[],
};
