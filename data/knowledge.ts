export interface KnowledgeQuery {
  id: string;
  query: string;
  keywords: string[];
  title: string;
  category: "PROJECT" | "RESEARCH" | "EXPERIENCE" | "PROFILE" | "EASTER_EGG";
  summary: string;
  details: string;
  type: string;
  stack: string[];
  actions: { label: string; actionType: "NAVIGATE" | "MODAL" | "LINK" | "ACTION"; target: string }[];
}

export const portfolioKnowledge = {
  profile: {
    name: "SAM (SAJAL)",
    title: "IT UNDERGRAD • NIT JALANDHAR",
    summary: "Sajal is an IT undergraduate focused on software engineering, machine learning reasoning systems, and product development.",
    focusAreas: [
      { id: "01", name: "MACHINE LEARNING", description: "Adaptive reasoning models, Bayesian Knowledge Tracing, SHAP explainability." },
      { id: "02", name: "SOFTWARE ENGINEERING", description: "Full-stack web applications, real-time sync, microservice APIs." },
      { id: "03", name: "PRODUCT DEVELOPMENT", description: "Turning research papers and technical ideas into production products." },
    ],
  },

  queries: [
    {
      id: "q-thinkfolio",
      query: "show me Thinkfolio",
      keywords: ["thinkfolio", "financial", "bkt", "eval", "xgb"],
      title: "THINKFOLIO",
      category: "RESEARCH",
      summary: "Adaptive financial reasoning platform designed around measurable learning and reasoning models.",
      details: "Microarchitecture with 3-generation ML eval engine: V1 Rubric → V2 XGBoost (R²=0.927) → V3 PyTorch Dual-Branch. Features BKT learner modeling, SHAP explainability, GroupKFold CV, and A/B research infrastructure.",
      type: "ML / FinTech",
      stack: ["Python", "PyTorch", "XGBoost", "FastAPI", "Next.js", "SQLite"],
      actions: [
        { label: "Architecture", actionType: "MODAL", target: "026" },
        { label: "Explore Build", actionType: "NAVIGATE", target: "builds" },
      ],
    },
    {
      id: "q-pairfect",
      query: "what is Pairfect?",
      keywords: ["pairfect", "couples", "realtime", "supabase", "vibe"],
      title: "PAIRFECT",
      category: "PROJECT",
      summary: "Real-time couples web application built around emotional connection and shared interactive activities.",
      details: "Full-stack platform featuring real-time sync via Supabase, AI Vibe Judge (Groq/NIM), Virtual Photobooth, Riddle Night, IQ Duel, and Gratitude Jar.",
      type: "Product / Full Stack",
      stack: ["Next.js 15", "TypeScript", "Supabase", "Tailwind CSS", "Groq"],
      actions: [
        { label: "Inspect Build", actionType: "MODAL", target: "025" },
        { label: "Live Demo", actionType: "LINK", target: "https://pairfect.site" },
      ],
    },
    {
      id: "q-ml",
      query: "what ML projects has Sajal built?",
      keywords: ["ml", "machine learning", "models", "pytorch", "ai"],
      title: "MACHINE LEARNING RESEARCH",
      category: "RESEARCH",
      summary: "Sajal has architected adaptive learning systems, Bayesian Knowledge Tracing engines, and multi-agent RAG pipelines.",
      details: "Key ML builds include ThinkFolio (PyTorch dual-branch eval engine), ScholarAI (5-node LangGraph research assistant with Supabase pgvector), and TripScout AI (async multi-agent city comparator).",
      type: "AI / ML Research",
      stack: ["Python", "PyTorch", "LangGraph", "FastAPI", "ChromaDB", "Supabase pgvector"],
      actions: [
        { label: "View ThinkFolio", actionType: "MODAL", target: "026" },
        { label: "View ScholarAI", actionType: "MODAL", target: "028" },
      ],
    },
    {
      id: "q-tech",
      query: "what technologies does he use?",
      keywords: ["tech", "technologies", "stack", "tools", "frameworks"],
      title: "TECHNOLOGY STACK SUMMARY",
      category: "PROFILE",
      summary: "Languages: Python, C++, TypeScript, JavaScript | Stack: Next.js 15, React, PyTorch, FastAPI, Supabase, LangGraph.",
      details: "Sajal engineers across full-stack web platforms and backend ML microservices, using Next.js for high-performance frontend UIs, Supabase for realtime state sync, and PyTorch / FastAPI / LangGraph for AI & agent pipelines.",
      type: "Stack Specs",
      stack: ["Next.js 15", "React", "TypeScript", "Python", "PyTorch", "FastAPI", "Supabase", "LangGraph"],
      actions: [
        { label: "Explore Lab Code", actionType: "NAVIGATE", target: "lab" },
        { label: "View Capabilities", actionType: "NAVIGATE", target: "abilities" },
      ],
    },
    {
      id: "q-why-pairfect",
      query: "why did he build Pairfect?",
      keywords: ["why pairfect", "reason pairfect", "purpose pairfect"],
      title: "PAIRFECT — PURPOSE & MOTIVATION",
      category: "PROJECT",
      summary: "Built to create a dedicated, intimate digital space for couples beyond basic messaging apps.",
      details: "Sajal identified that existing messaging apps lacked shared, real-time activity spaces. Pairfect was built with custom Supabase realtime state channels, AI vibe scoring, and interactive riddle duels to make shared online time meaningful.",
      type: "Product Purpose",
      stack: ["Next.js 15", "TypeScript", "Supabase Realtime"],
      actions: [
        { label: "Inspect Pairfect", actionType: "MODAL", target: "025" },
        { label: "Live Demo", actionType: "LINK", target: "https://pairfect.site" },
      ],
    },
    {
      id: "q-experience",
      query: "show me his experience",
      keywords: ["experience", "journey", "timeline", "history", "nit"],
      title: "ROUTE TIMELINE & MILESTONES",
      category: "EXPERIENCE",
      summary: "NIT Jalandhar B.Tech IT → Pairfect Lead Architect → ThinkFolio ML Researcher → Multi-Agent Developer.",
      details: "Sajal is currently a 2nd-year IT student at NIT Jalandhar. He has shipped production platforms, conducted ML evaluation research, and built multi-agent LangGraph pipelines.",
      type: "Experience Record",
      stack: ["NIT Jalandhar", "Pairfect", "ThinkFolio", "ScholarAI"],
      actions: [
        { label: "Scroll to Timeline", actionType: "NAVIGATE", target: "journey" },
      ],
    },
    {
      id: "q-easter-egg",
      query: "who is sam",
      keywords: ["who is sam", "who is sajal", "sam", "easter egg"],
      title: "EASTER EGG // TRAINER RECORD #001",
      category: "EASTER_EGG",
      summary: "Sam (Sajal) is an IT undergraduate at NIT Jalandhar who builds software systems, financial ML engines, and tools he actually wants to use.",
      details: "🎮 You unlocked an Easter Egg! Sam loves minimal street fashion, heavy resistance training (Bench 55kg / Squat 90kg / Leg Press 200kg), synthwave beats, and building production software. Check out the browser console for extra developer telemetry!",
      type: "Easter Egg #001",
      stack: ["C++", "Python", "TypeScript", "PyTorch", "Gym 🏋️‍♂️"],
      actions: [
        { label: "View Profile", actionType: "NAVIGATE", target: "trainer" },
      ],
    },
  ] as KnowledgeQuery[],

  labFiles: [
    {
      id: "thinkfolio-bkt",
      name: "ThinkFolio_BKT.py",
      category: "ML MODEL",
      language: "python",
      code: `# ThinkFolio BKT (Bayesian Knowledge Tracing) Evaluation Model
import torch
import torch.nn as nn

class DualBranchEvaluator(nn.Module):
    def __init__(self, input_dim=16, hidden_dim=64):
        super().__init__()
        # Branch 1: Step-by-step reasoning quality
        self.reasoning_branch = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, 32)
        )
        # Branch 2: Quantitative risk calculation
        self.risk_branch = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, 32)
        )
        # Final evaluation head
        self.eval_head = nn.Linear(64, 1)

    def forward(self, reasoning_feats, risk_feats):
        r_out = self.reasoning_branch(reasoning_feats)
        k_out = self.risk_branch(risk_feats)
        combined = torch.cat([r_out, k_out], dim=-1)
        return torch.sigmoid(self.eval_head(combined))

# Model accuracy: R² = 0.927 across GroupKFold CV evaluation`,
    },
    {
      id: "pairfect-realtime",
      name: "Pairfect_Realtime.ts",
      category: "REALTIME ENGINE",
      language: "typescript",
      code: `// Pairfect Real-time State Synchronization Engine
import { createClient } from '@supabase/supabase-javascript';

export class PairfectRealtimeEngine {
  private channel: any;

  constructor(private roomId: string) {
    this.channel = supabase.channel(\`room:\${roomId}\`);
  }

  public subscribeToVibeJudge(onVibeUpdate: (state: any) => void) {
    this.channel
      .on('broadcast', { event: 'vibe_score' }, ({ payload }) => {
        onVibeUpdate(payload);
      })
      .subscribe();
  }

  public async triggerRiddleNight(riddleId: string) {
    await this.channel.send({
      type: 'broadcast',
      event: 'riddle_start',
      payload: { riddleId, timestamp: Date.now() },
    });
  }
}`,
    },
    {
      id: "langgraph-agents",
      name: "ScholarAI_Graph.py",
      category: "AI AGENTS",
      language: "python",
      code: `# ScholarAI 5-Node LangGraph Research Assistant
from langgraph.graph import StateGraph, END

class ResearchState(TypedDict):
    query: str
    plan: list[str]
    evidence: list[dict]
    verified_claims: list[dict]
    summary: str

builder = StateGraph(ResearchState)

# Define 5 async nodes
builder.add_node("planner", plan_research)
builder.add_node("researcher", search_pgvector)
builder.add_node("collector", gather_evidence)
builder.add_node("verifier", verify_claims)
builder.add_node("writer", synthesize_output)

# Set workflow edges
builder.set_entry_point("planner")
builder.add_edge("planner", "researcher")
builder.add_edge("researcher", "collector")
builder.add_edge("collector", "verifier")
builder.add_edge("verifier", "writer")
builder.add_edge("writer", END)

graph = builder.compile()`,
    },
  ],
};
