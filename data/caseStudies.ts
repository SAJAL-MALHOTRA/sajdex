export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  architectureDiagram: string[];
  metrics: { label: string; value: string; detail: string }[];
  keyLearnings: string[];
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-thinkfolio',
    projectId: '026',
    title: 'THINKFOLIO',
    subtitle: 'Adaptive Financial Reasoning Platform powered by Machine Learning',
    category: 'ML / RESEARCH / FINTECH',
    problem:
      'Financial education platforms rely on static quizzes with static difficulty. They fail to measure true step-by-step reasoning quality, predict learner mastery, or provide mathematically explainable feedback to users.',
    solution:
      'Engineered a 3-service microarchitecture with a 3-generation ML evaluation engine (V1 Rubric → V2 XGBoost R²=0.927 → V3 PyTorch Dual-Branch). Integrated Bayesian Knowledge Tracing (BKT) for dynamic learner modeling and SHAP for step-level model interpretability.',
    architectureDiagram: [
      'User Input / Diagnostic Assessment',
      '├── Fast API Ingestion Gateway',
      '├── Learner Model (BKT Engine updates mastery probability p_L)',
      '├── ML Evaluation Engine (PyTorch / XGBoost scoring reasoning quality)',
      '├── SHAP Explainability Module (extracts feature attributions)',
      '└── Adaptive Recommendation Engine → Delivers targeted next exercise',
    ],
    metrics: [
      { label: 'ML ACCURACY', value: 'R² = 0.927', detail: 'V2 XGBoost evaluation engine precision' },
      { label: 'TEST COVERAGE', value: '13 / 13', detail: 'Passing pytest suite verifying ML & API services' },
      { label: 'ML ARCHITECTURE', value: '3-Gen Engine', detail: 'V1 Rubric → V2 XGBoost → V3 PyTorch Dual-Branch' },
      { label: 'INTERPRETABILITY', value: 'SHAP Ready', detail: 'Step-by-step feature attribution & BKT tracking' },
    ],
    keyLearnings: [
      'GroupKFold cross-validation is essential when evaluating models on grouped user session data to prevent data leakage.',
      'Bayesian Knowledge Tracing (BKT) provides a mathematically rigorous model for real-time mastery tracking with zero latency overhead.',
      'Building automated test suites for ML pipelines ensures model regression prevention during continuous deployment.',
    ],
    stack: ['PyTorch', 'XGBoost', 'FastAPI', 'Next.js 15', 'SQLite', 'scikit-learn', 'SHAP'],
    liveUrl: '',
    githubUrl: 'https://github.com/',
  },
  {
    id: 'cs-pairfect',
    projectId: '025',
    title: 'PAIRFECT',
    subtitle: 'Real-Time Couples Web Application for Emotional Connection',
    category: 'FULLSTACK / AI / SOCIAL',
    problem:
      'Couples in long-distance or busy relationships lack dedicated digital spaces for shared interactive experiences beyond simple messaging apps.',
    solution:
      'Built a full-stack platform featuring real-time state synchronization via Supabase, an AI Vibe Judge powered by Groq/NVIDIA NIM, a Virtual Photobooth, Riddle Night, IQ Duel, and Gratitude Jar modules.',
    architectureDiagram: [
      'Next.js 15 App Router Frontend',
      '├── Supabase Real-Time Subscriptions (Synchronizes state across devices)',
      '├── AI Vibe Judge (Groq Llama-3 API analyzing conversational tone)',
      '├── Photobooth & Canvas Processing Engine',
      '└── Resend Email System → Scheduled love letters & milestone alerts',
    ],
    metrics: [
      { label: 'SYNC LATENCY', value: '< 50ms', detail: 'Supabase real-time websocket state updates' },
      { label: 'AI RESPONSE', value: 'Sub-second', detail: 'Groq Llama-3 inference for AI Vibe Judge' },
      { label: 'PRODUCTION STATUS', value: 'Live App', detail: 'Deployed at pairfect.site with active users' },
      { label: 'FEATURES', value: '7+ Modules', detail: 'Photobooth, IQ Duel, Riddle Night, Gratitude Jar' },
    ],
    keyLearnings: [
      'Optimistic UI state updates are crucial for real-time multiplayer features to feel instantaneous to end users.',
      'Designing strict TypeScript interfaces for real-time payloads prevents runtime websocket deserialization errors.',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Supabase', 'Tailwind CSS v4', 'Groq Llama-3', 'Resend'],
    liveUrl: 'https://pairfect.site',
    githubUrl: 'https://github.com/',
  },
  {
    id: 'cs-scholarai',
    projectId: '028',
    title: 'SCHOLARAI',
    subtitle: '5-Node LangGraph Multi-Agent Research Assistant',
    category: 'AI / RAG / AGENTS',
    problem:
      'Academic research synthesis requires searching, evaluating, verifying evidence, and drafting structured summaries — a process that is slow and prone to hallucination.',
    solution:
      'Architected a 5-node LangGraph multi-agent pipeline: Planner → Researcher → Evidence Collector → Verifier → Writer. Integrated Supabase pgvector for semantic vector retrieval.',
    architectureDiagram: [
      'User Research Prompt',
      '├── Node 1: Planner Agent (Deconstructs research query into sub-goals)',
      '├── Node 2: Researcher Agent (Queries arXiv & Supabase pgvector)',
      '├── Node 3: Evidence Collector (Extracts citation snippets)',
      '├── Node 4: Verifier Agent (Cross-examines claim against evidence)',
      '└── Node 5: Writer Agent → Generates formatted academic report',
    ],
    metrics: [
      { label: 'AGENT PIPELINE', value: '5 Nodes', detail: 'Planner, Researcher, Collector, Verifier, Writer' },
      { label: 'VECTOR RETRIEVAL', value: 'pgvector', detail: 'Supabase vector embeddings for semantic search' },
      { label: 'MODEL BACKEND', value: 'Gemini Flash', detail: 'Fast, high-context LLM reasoning backend' },
      { label: 'CITATION ACCURACY', value: '100% Verified', detail: 'Auto-verification node checks claims against source text' },
    ],
    keyLearnings: [
      'Adding a dedicated Verifier Node between retrieval and generation dramatically reduces LLM hallucinations in RAG pipelines.',
      'LangGraph state graphs provide deterministic control flow over complex multi-step AI agent workflows.',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'Supabase', 'pgvector', 'Gemini Flash'],
    liveUrl: '',
    githubUrl: 'https://github.com/',
  },
];
