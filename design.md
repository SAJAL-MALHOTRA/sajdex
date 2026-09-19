# SAJDEX — Design System & Workstation Specification

**Design Target**: `Apple Studio × Linear × Raycast × SAJDEX Developer Personality`  
**Core Vibe**: Quiet, expensive, precise, minimal, and insanely polished.  
**Ratio**: 60% Apple Discipline + 25% Workstation Personality + 15% Terminal Identity.

---

## 🎨 1. Color Palette & 3-Layer Material Contrast

SAJDEX establishes physical material depth through 3 discrete dark contrast layers:

```text
Layer 1: Base Desktop Canvas    →  #08090B  (Dark workstation atmosphere)
Layer 2: Workspace Window       →  #0D0F12  (Elevated central application window)
Layer 3: Components & Cards     →  #111317  (Cards, buttons & elevated containers)
Elevated Surface                →  #16191D  (Active hover & interior surface)
Border Stroke                   →  rgba(255, 255, 255, 0.08)
```

### Color Tokens
| Role | Hex / RGBA | Usage |
| :--- | :--- | :--- |
| **Base Canvas** | `#08090B` | Outer viewport background |
| **Workspace Window** | `#0D0F12` | Main central workstation window |
| **Card Surface** | `#111317` | Project cards, skill containers, avatar frame |
| **Elevated Surface** | `#16191D` | Hover states & interior card surfaces |
| **Primary Text** | `#F5F5F7` | Headings, titles, primary labels |
| **Secondary Text** | `#A1A1A6` | Descriptions, subtitles, body text |
| **Muted Text** | `#6E6E73` | Technical metadata, timestamps |
| **Primary Accent** | `#FF453A` | Apple Red (Active indicators, system status, key badges) |
| **Status Green** | `#30D158` | Realtime status (`● ONLINE · REALTIME`), live badges |
| **Status Blue** | `#0A84FF` | Research & system information |
| **Status Yellow** | `#FFD60A` | System warnings & window controls |

---

## 🔤 2. Typography & Hierarchy

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, sans-serif;
```

### Typography Scale
- **Hero Title (`SAM`)**: `clamp(72px, 7vw, 110px)`, `font-weight: 800`, `letter-spacing: -0.055em`, `line-height: 0.9`.
- **Section Titles**: `28px–32px`, `font-weight: 900`, `letter-spacing: -0.025em`.
- **Card Headings**: `20px–24px`, `font-weight: 700`.
- **Body Text**: `14px–16px`, `line-height: 1.6`.
- **Technical Monospace**: `11px–12px` font-mono (`zsh`, timestamps, CLI prompts).

---

## 🖥️ 3. Single Persistent Workspace Architecture

```text
SAJDEX DESKTOP (#08090B)
  │
  ├── Top System Status Bar (Navbar.tsx)
  ├── Right Floating Icon Controls (DesktopIcons.tsx)
  ├── Bottom macOS Navigation Dock (SajDexDock.tsx)
  │
  └── ONE ACTIVE WORKSPACE WINDOW (#0D0F12)
        │
        ├── "about"     → <HeroSection /> & <SideQuestsSection />
        ├── "work"      → <ProjectDex /> (Case Study Inspector Triggers)
        ├── "stack"     → <AbilitiesSection />
        ├── "timeline"  → <TrainerJourney />
        ├── "lab"       → <OpenLabExplorer />
        ├── "ai"        → <DeveloperTerminal />
        └── "contact"   → <ContactSection /> & <SocialFooter />
```

### View Transition Spec
- **Type**: Single workspace view replacement (No stacked windows or layered browser pages).
- **Duration**: `200ms ease-out`.
- **Transform**: `opacity: 0 → 1`, `translateY: 6px → 0px`.

---

## 📐 4. Layout Proportions & Grid

- **Workspace Window Sizing**: Fluid viewport-responsive container: `w-full max-w-4xl lg:max-w-5xl 2xl:max-w-6xl min-h-[70vh]`.
- **Atmospheric Glow**: Radial gradient `circle at 35% 35%, rgba(70,80,110,0.12), transparent 45%`.
- **Technical Grid**: 1px lines at 3% opacity with 4rem spacing (`bg-technical-grid opacity-40`).
- **Bottom Dock Padding**: `pb-28` ensuring floating dock never obscures workspace content.

---

## 🛠️ 5. Component Anatomy

### A. Profile Hero
- **Category Badge**: `ML ENGINEER · FULL-STACK BUILDER` (`#FF453A` background tint).
- **Title**: Massive clean `SAM` (clamp 72–110px).
- **Subtitle**: `ML · SOFTWARE · PRODUCT`.
- **Description**: `I build machine-learning systems and production software — from adaptive financial reasoning engines to real-time consumer platforms.`
- **Institution**: `NIT Jalandhar · B.Tech IT '29`.
- **Avatar Container**: Dark rounded surface `#111317`, soft border, 20px radius (`/sam_sprite.jpg`).
- **CTAs**: Primary White (`VIEW MY WORK →`) + Secondary Dark Translucent (`GET IN TOUCH`).

### B. "Currently Building" Product Row
- Compact 3-card row immediately below Hero:
  - `THINKFOLIO` (ML + Finance · R²=0.927)
  - `PAIRFECT` (Realtime App · Live Web App)
  - `SCHOLARAI` (AI + Agents · 5 Nodes)

### C. Project Case Study Inspector Modal (`ProjectModal.tsx`)
- Publication-grade modal featuring Problem, Solution, Architecture Diagram, Proof Metrics, Technical Decisions, and Live/GitHub links.

### D. Open Lab Simulator (`OpenLabExplorer.tsx`)
- Interactive 6-step simulator for ThinkFolio BKT learner state updates (`Diagnostic → Ingestion → BKT Engine → PyTorch/XGBoost Scoring → SHAP Explainability → Recommendation`).

### E. Developer Terminal (`DeveloperTerminal.tsx`)
- Interactive `sajal@portfolio ~ zsh` CLI terminal supporting `open thinkfolio`, `open pairfect`, `open scholarai`, `lab thinkfolio`, `recruiter`, `secret`, `help`, `whoami`, `projects`, `clear`.

---

## 🧪 6. Verified Technical Metrics

- **TypeScript Check (`npx tsc --noEmit`)**: ✅ **0 Errors**
- **Next.js Production Build (`npm run build`)**: ✅ **Compiled in 619ms**
- **Live Local Server**: Active at **`http://localhost:3000`**
