export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  status: 'ACTIVE' | 'BUILDING' | 'SHIPPED';
  metric: string;
  tagline: string;
  description: string;
  bullets?: string[];
  stack: string[];
  githubUrl?: string;
  github?: string;
  demo?: string;
  liveUrl?: string;
  types?: string[];
  abilities?: string[];
  problem?: string;
  solution?: string;
}

export const projects: Project[] = [
  {
    id: 'PRJ-01',
    name: 'Pairfect',
    subtitle: 'Real-Time Interactive Consumer Platform',
    status: 'ACTIVE',
    metric: '<50ms Latency',
    tagline: 'NEXT.JS · SUPABASE · GROQ LLAMA 3',
    description: 'Full-stack real-time consumer social app (pairfect.site) with live state synchronization and Groq AI vibe judging.',
    bullets: [
      'Designed and shipped a full-stack real-time social app (pairfect.site) with live state synchronization and LLM-driven prompt analysis.',
      'Built a Groq-accelerated Llama 3 inference pipeline delivering sub-50ms evaluation latency for instant conversational scoring and "vibe judging".',
      'Implemented real-time bidirectional communication using Supabase WebSockets with PostgreSQL Row-Level Security (RLS) policies.',
      'Enforced end-to-end TypeScript schemas across all real-time payloads, shipping with zero TypeScript errors across 77 routes.'
    ],
    stack: ['Next.js', 'Supabase', 'Groq API (Llama 3)', 'Tailwind CSS', 'WebSockets', 'TypeScript'],
    githubUrl: 'https://github.com/SAJAL-MALHOTRA',
    github: 'https://github.com/SAJAL-MALHOTRA',
    demo: 'https://pairfect.site',
    liveUrl: 'https://pairfect.site',
    types: ['Real-Time Social Platform', 'LLM Product'],
    abilities: ['Next.js', 'Supabase Realtime', 'Groq Llama 3', 'PostgreSQL RLS'],
    problem: 'Real-time conversational social apps suffer from slow LLM evaluation latencies and uncoordinated client state.',
    solution: 'Shipped Groq-accelerated Llama 3 pipeline with sub-50ms inference, WebSocket bidirectional sync, and zero TypeScript errors over 77 routes.',
  },
  {
    id: 'PRJ-02',
    name: 'ThinkFolio',
    subtitle: 'Adaptive ML Reasoning Engine',
    status: 'ACTIVE',
    metric: 'R² = 0.927',
    tagline: 'PYTORCH · FASTAPI · XGBOOST',
    description: 'Dual-branch ML evaluation engine scoring financial reasoning across 8 dimensions with FinBERT & SHAP explainability.',
    bullets: [
      'Engineered a dual-branch ML evaluation engine (PyTorch Tabular MLP + gradient-boosted trees) scoring financial reasoning across 8 dimensions, reaching R² = 0.927 predictive accuracy.',
      'Integrated FinBERT sentence embeddings with SHAP explainability to deliver real-time feature attribution at under 100ms latency overhead.',
      'Architected a containerized microservice backend with FastAPI, SQLAlchemy, and PostgreSQL, adding EMA-based competency tracking and Alembic migrations.',
      'Built an interactive evaluation UI in Next.js and Tailwind CSS that surfaces dynamic rubric scores and personalized learning trajectories.'
    ],
    stack: ['PyTorch', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Docker', 'Next.js', 'FinBERT'],
    githubUrl: 'https://github.com/SAJAL-MALHOTRA',
    github: 'https://github.com/SAJAL-MALHOTRA',
    types: ['ML Evaluation Engine', 'Financial Reasoning'],
    abilities: ['PyTorch', 'FinBERT', 'SHAP', 'FastAPI', 'PostgreSQL', 'Docker'],
    problem: 'Financial reasoning assessment lacks real-time feature attribution and multi-dimensional competency scoring.',
    solution: 'Engineered dual-branch Tabular MLP + gradient-boosted trees with FinBERT embeddings delivering R² 0.927 accuracy under 100ms latency.',
  },
  {
    id: 'PRJ-03',
    name: 'ScholarAI / ResearchFlow',
    subtitle: 'Stateful Multi-Agent Engine',
    status: 'ACTIVE',
    metric: '5-Node Graph',
    tagline: 'LANGGRAPH · PYTHON · PGVECTOR',
    description: 'Autonomous multi-agent research synthesis engine with cyclic stateful graph routing and semantic paper retrieval.',
    bullets: [
      'Architected a 5-node stateful LangGraph pipeline (Planner → Researcher → Evidence Collector → Verifier → Writer) automating academic paper discovery, semantic parsing, and structured synthesis.',
      'Implemented vector similarity search over Supabase pgvector with semantic embeddings for high-precision retrieval across technical literature.',
      'Built asynchronous REST APIs with FastAPI to handle long-running multi-agent reasoning cycles with checkpointing and state recovery.'
    ],
    stack: ['LangGraph', 'LangChain', 'Python', 'FastAPI', 'pgvector', 'Supabase'],
    githubUrl: 'https://github.com/SAJAL-MALHOTRA',
    github: 'https://github.com/SAJAL-MALHOTRA',
    types: ['Autonomous Multi-Agent System', 'AI Research Tools'],
    abilities: ['LangGraph', 'LangChain', 'FastAPI', 'pgvector', 'Vector Search'],
    problem: 'Academic paper literature review requires multi-step autonomous synthesis without agent looping or state loss.',
    solution: 'Designed a 5-node stateful LangGraph pipeline with checkpointing, state recovery, and pgvector semantic retrieval.',
  },
  {
    id: 'PRJ-04',
    name: 'CV Illumination Classifier',
    subtitle: 'Computer Vision Ensemble',
    status: 'SHIPPED',
    metric: 'Top 7% · 94.2% Acc',
    tagline: 'PYTORCH · TORCHVISION · OPENCV',
    description: 'Deep CNN ensemble (ResNet-18/34, EfficientNet-B0, FastMLP) for 3-class surveillance illumination classification.',
    bullets: [
      'Built a deep CNN ensemble (ResNet-18/34, EfficientNet-B0, handcrafted illumination features, FastMLP) for 3-class surveillance illumination classification, achieving 94.2% validation accuracy.',
      'Engineered an end-to-end pipeline with custom data loaders, geometric augmentations, and evaluation metrics; ranked in the top 7% (169/227) of a national computer vision challenge.'
    ],
    stack: ['PyTorch', 'Torchvision', 'OpenCV', 'ResNet-34', 'EfficientNet-B0', 'Python'],
    githubUrl: 'https://github.com/SAJAL-MALHOTRA',
    github: 'https://github.com/SAJAL-MALHOTRA',
    types: ['Computer Vision Ensemble', 'National Challenge'],
    abilities: ['PyTorch', 'OpenCV', 'CNN Ensembles', 'Geometric Augmentations'],
    problem: 'Camera surveillance feeds under erratic lighting require robust 3-class illumination classification.',
    solution: 'Engineered an ensemble of ResNet-18/34, EfficientNet-B0, and FastMLP achieving 94.2% validation accuracy, ranking in national Top 7%.',
  },
];
