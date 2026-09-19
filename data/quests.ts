export interface SideQuest {
  id: string;
  number: string;
  title: string;
  icon: string;
  status: "ACTIVE" | "COMPLETED";
  objective: string;
  description: string;
}

export const sideQuests: SideQuest[] = [
  {
    id: "SQ-001",
    number: "#001",
    title: "GYM",
    icon: "🏋️‍♂️",
    status: "ACTIVE",
    objective: "Strength + physical consistency.",
    description: "Daily resistance training, discipline, and personal health optimization.",
  },
  {
    id: "SQ-002",
    number: "#002",
    title: "FASHION",
    icon: "🧥",
    status: "ACTIVE",
    objective: "Personal aesthetic & design details.",
    description: "Curating minimal street & technical wardrobe silhouettes.",
  },
  {
    id: "SQ-003",
    number: "#003",
    title: "CONTENT",
    icon: "✍️",
    status: "ACTIVE",
    objective: "Technical writing & research specs.",
    description: "Documenting ML architecture blueprints and developer guides.",
  },
  {
    id: "SQ-004",
    number: "#004",
    title: "MUSIC",
    icon: "🎧",
    status: "ACTIVE",
    objective: "Focus beats & ambient soundscapes.",
    description: "Deep work playlists and synthwave/lo-fi audio exploration.",
  },
  {
    id: "SQ-005",
    number: "#005",
    title: "LEARNING",
    icon: "📚",
    status: "ACTIVE",
    objective: "Exploring new AI agent research.",
    description: "Reading multi-agent paper benchmarks and vector RAG advancements.",
  },
];
