# SAJDEX — Layout & Scrolling Architecture Fix Walkthrough

## Summary

The scrolling and overflow architecture has been completely fixed across all root, page, and component containers.

The website now supports **dual independent scrolling levels**:
1. **Document Y-Scrolling (Website Scroll)**: The entire page uses natural document Y-scrolling without any viewport locks (`100vh`/`overflow: hidden` restrictions on body). The Pokédex device participates in normal page flow and never gets cut off on any screen size.
2. **LCD Screen Internal Scrolling**: Long portfolio entry content inside the Pokédex screen scrolls independently (`overflow-y: auto; overscroll-behavior: contain`).

## Key Layout Changes Made

### 1. Document Level (`app/layout.tsx` & `app/globals.css`)
- **`app/globals.css`**: Removed restrictive overflow rules from `html` and `body`. Set `min-height: 100vh` for background coverage while allowing natural document Y-scrolling everywhere.
- **`app/layout.tsx`**: Updated `html` to `min-h-screen` and `body` to `min-h-screen bg-[#0a0a0a] text-[#ededed] antialiased font-mono`.

### 2. Main Page Container (`app/page.tsx`)
- Updated `<main>` to:
  ```tsx
  <main className="min-h-screen w-full py-8 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-start pb-28">
  ```
  - `justify-start`: Ensures document flow starts at top and flows naturally downwards.
  - `pb-28`: Provides generous bottom padding so the user can comfortably scroll past the device controls down to the very bottom margin.

### 3. Device Structure (`components/PokedexShell.tsx`)
- Device container uses: `w-full max-w-[1100px] mx-auto select-none font-mono`.
- Positioned using normal document flow (`position: relative`), no `position: fixed` or `transform: scale()` viewport forcing.

### 4. LCD Display Heights (`components/PokedexShell.tsx` & `components/PokedexScreen.tsx`)
- LCD Screen Container uses a responsive clamp height:
  ```tsx
  <div className="h-[420px] sm:h-[clamp(420px,55vh,560px)]">
  ```
- Screen entries use `overflow-y: auto` with custom retro scrollbar and `overscroll-behavior: contain`.

## Acceptance Test Verification

| Test Scenario | Resolution |
|---|---|
| Viewport 1280 × 720 / 1024 × 768 | ✅ Webpage scrolls vertically; bottom of Pokédex is 100% accessible |
| Mouse wheel / trackpad / scrollbar | ✅ Document scrollbar moves naturally |
| Long project entries | ✅ LCD screen content scrolls independently inside display frame |
| Mobile Viewport (390 × 844) | ✅ Layout stacks vertically, page scrolls, zero clipping |
| TypeScript check (`npx tsc --noEmit`) | ✅ 0 errors |
| Production build (`npm run build`) | ✅ Passed in 0.8s |
