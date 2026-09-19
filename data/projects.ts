export interface Project {
  id: string;
  name: string;
  status: 'ACTIVE' | 'BUILDING' | 'SHIPPED';
  metric: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  liveUrl?: string;
  githubUrl?: string;
  types?: string[];
  problem?: string;
  solution?: string;
  abilities?: string[];
}

export const projects: Project[] = [
  {
    id: 'OBJ-026',
    name: 'THINKFOLIO',
    status: 'ACTIVE',
    metric: 'R² 0.927',
    tagline: 'ML · FINANCE',
    description: 'Adaptive financial reasoning platform with BKT & PyTorch.',
    stack: ['PyTorch', 'XGBoost', 'FastAPI'],
    github: 'https://github.com/sajal/thinkfolio',
    githubUrl: 'https://github.com/sajal/thinkfolio',
    demo: 'https://thinkfolio.ai',
    liveUrl: 'https://thinkfolio.ai',
    types: ['ML Reasoning Engine', 'Quantitative Finance'],
    problem: 'Cold-start financial portfolio optimization lacks adaptive knowledge tracing.',
    solution: 'Engineered Bayesian Knowledge Tracing with PyTorch & XGBoost scoring delivering R² 0.927 accuracy.',
    abilities: ['PyTorch', 'XGBoost', 'FastAPI', 'Bayesian Knowledge Tracing'],
  },
  {
    id: 'OBJ-027',
    name: 'PAIRFECT',
    status: 'ACTIVE',
    metric: '<50ms',
    tagline: 'REALTIME · PRODUCT',
    description: 'Full-stack couples platform with Groq AI Vibe Judge.',
    stack: ['Next.js', 'Supabase', 'Groq'],
    github: 'https://github.com/sajal/pairfect',
    githubUrl: 'https://github.com/sajal/pairfect',
    demo: 'https://pairfect.app',
    liveUrl: 'https://pairfect.app',
    types: ['Realtime Consumer App', 'LLM Product'],
    problem: 'Real-time consumer interaction requires sub-50ms AI evaluation latencies.',
    solution: 'Architected Supabase real-time channels with Groq Llama 3 API for instantaneous vibe judging.',
    abilities: ['Next.js', 'Supabase', 'Groq Llama 3 API', 'TailwindCSS'],
  },
  {
    id: 'OBJ-028',
    name: 'SCHOLARAI',
    status: 'BUILDING',
    metric: '5 NODE GRAPH',
    tagline: 'AI · AGENTS',
    description: 'LangGraph multi-agent research synthesis engine.',
    stack: ['LangGraph', 'Python', 'FastAPI'],
    github: 'https://github.com/sajal/scholarai',
    githubUrl: 'https://github.com/sajal/scholarai',
    demo: 'https://scholarai.dev',
    liveUrl: 'https://scholarai.dev',
    types: ['Multi-Agent Architecture', 'AI Research Tools'],
    problem: 'Academic paper literature review requires multi-step autonomous synthesis.',
    solution: 'Designed a 5-node stateful LangGraph pipeline for automated paper search, extraction, and synthesis.',
    abilities: ['LangGraph', 'Python', 'FastAPI', 'Vector Search'],
  },
];
