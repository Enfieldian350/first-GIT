# JOOLA Teams — Tournament Details Page (2026)

## Product Vision
Build a premium, immersive **Tournament Details** experience where tabs behave like **virtual pages** in a single shell. The user should feel they are navigating a high-end event microsite (not a legacy admin panel), while staying on one route with URL-synced state.

---

## Experience Architecture

### Route and state
- Route: `/tournaments/[slug]`
- Tab query param:
  - `?tab=format`
  - `?tab=ratings-seeding`
- Default: `format`
- Sticky tab nav remains visible while scrolling each virtual page.

### Core interaction model
- Tabs are not tiny content panes; each is a scroll-heavy full-page narrative.
- Transition pattern:
  - Fade + slight upward motion when tab changes
  - Animated underline in nav
  - Preserve scroll per tab (optional enhancement via in-memory map)
- Loading states:
  - Skeleton hero block
  - Skeleton card grid
  - Skeleton accordion rows

---

## Visual System (JOOLA Brand)

### Color tokens
- `--bg`: `#FFFFFF`
- `--text`: `#111111`
- `--joola-yellow`: `#FFE632` (primary emphasis / CTA)
- `--joola-blue`: `#485AFF` (secondary accent)
- `--muted`: `#F6F7F9`
- `--border`: `#E9EBF0`

### UI style
- Radius: `12px` cards, `16px` hero containers
- Shadow: soft (`0 8px 30px rgba(17,17,17,0.06)`)
- Spacing rhythm: 8pt system with generous vertical whitespace
- Typography hierarchy:
  - Hero title: 36/40 semibold
  - Section title: 24/30 semibold
  - Card title: 18/24 medium
  - Body: 15/24 regular

### Anti-patterns to avoid
- Dense text walls
- Flat tables for core narrative
- Small cramped tap targets

---

## Page Shell Blueprint

1. **Global Header (outside tabs)**
   - Tournament name: *JOOLA North American Teams 2026*
   - Dates: *Nov 26 – Nov 29, 2026*
   - Venue line: *Baltimore Convention Center · 1 W Pratt St, Baltimore, MD*
2. **Sticky Tab Bar**
   - `Format`
   - `Ratings & Seeding`
3. **Tab Panel Canvas**
   - Max width: 1200px
   - Center aligned
   - Section spacing: 48–72px

Subtle premium context line used in both tab heroes:
> “Hosted in a large indoor championship venue with professional court setup, broadcast-ready flow, and hotel-connected convenience.”

---

## TAB 1 — FORMAT (Virtual Page)

## 1) Hero Section
**Title:** Tournament Format  
**Summary:** Explain tournament progression from registration through finals, with clarity on daily cadence and match load.

**Layout:**
- Left: title + short copy + key badges
- Right: compact visual flow chip rail (`Registration → Groups → Championship → Finals`)

**Hero badges:**
- `4-Day Event`
- `Team-Based Competition`
- `Professional Arena Setup`

## 2) Tournament Flow (Visual)
Use horizontal step cards on desktop, vertical timeline on mobile.

**Steps:**
1. **Registration** — roster lock + payment verification
2. **Group Stage** — seeded pools and opening rounds
3. **Championship Rounds** — bracket progression by results
4. **Finals** — title-deciding matches and podium flow

Each step card contains:
- Icon
- Step number
- 1–2 line explanation
- “What this means for your team” callout

## 3) Match Structure
Card cluster with three content blocks:

- **Team Match Format**
  - Team-vs-team matchups based on published event ruleset
  - Captains confirm lineups before each tie
- **Match Volume**
  - Expected minimum and maximum match counts per team by progression
- **Daily Rhythm (Thu–Sun)**
  - Morning: check-in / warm-up
  - Midday: stage play
  - Evening: feature match windows / finals progression

Use icon-led cards for scanability (clock, trophy, users).

## 4) Daily Breakdown (Visual Cards)
Use 4 high-contrast day cards (Thu, Fri, Sat, Sun) in responsive grid.

- **Thursday (Nov 26, 2026)**
  - Check-in & practice windows
  - Opening group matches
- **Friday (Nov 27, 2026)**
  - Group stage continuation
  - Key seeding-impact matches
- **Saturday (Nov 28, 2026)**
  - Championship rounds intensify
  - Elimination pressure windows
- **Sunday (Nov 29, 2026)**
  - Finals, placement matches, awards cadence

Add stage icons:
- Practice → warmup icon
- Matches → crossed paddles icon
- Finals → trophy icon

## 5) Important Rules
Prominent highlight cards with yellow accent border.

Required blocks:
- **Payment must be completed before first scheduled match**
- **Maximum rounds per team enforced by division format**
- **Late readiness penalties may apply per operations handbook**

Style:
- Left accent stripe (`#FFE632`)
- “Important” label chip
- Expandable “Learn why” micro-accordion

## 6) UX Enhancements
- Sticky mini-TOC for long screens (desktop)
- Inline callouts (“Pro Tip for captains”)
- Context tags (“Arena-scale logistics”, “High-traffic time window”)
- Micro-interactions:
  - Hover elevation for cards
  - Icon pulse on active step
  - Smooth scroll to section anchors

---

## TAB 2 — RATINGS & SEEDING (Virtual Page)

## 1) Hero Section
**Title:** Ratings & Seeding  
**Summary:** Explain how fair matchups are created, how ratings inform placement, and how integrity is protected.

Hero KPI badges:
- `Transparent Logic`
- `Balanced Competition`
- `Integrity Safeguards`

## 2) Seeding System
Three-part info architecture:

1. **Team Seeding Inputs**
   - Combined player ratings
   - Eligible roster declarations
   - Division constraints
2. **Seed Assignment Logic**
   - Initial seeding generated pre-event lock
   - Final validation near event start
3. **Bracket/Pools Placement**
   - Balanced distribution across groups
   - Avoid early concentration of top seeds

Present this as progressive numbered cards with tooltips.

## 3) Rating System
Explain model in approachable format:
- Rating acts as skill proxy for competitive balance
- Supports ELO-like mechanics today
- DUPR-compatible integration path for future updates

Include a “Future-Ready” callout card:
- API-driven provider abstraction
- Auditability for source + timestamp

## 4) Tie-Breaker Logic
Use accordion with deterministic order:
1. Head-to-head result
2. Game/point differential (as configured)
3. Strength of schedule
4. Historical performance signal (if enabled)
5. Admin-reviewed final arbitration rule

Each accordion row includes “Why this is fair” helper text.

## 5) Edge Case Handling
Grid of scenario cards:
- **Late entries:** provisional seed band + controlled placement
- **Rating mismatches:** flagged for verification workflow
- **Unranked players:** temporary baseline + rapid reclassification rules

Add status chips:
- `Auto`
- `Manual Review`
- `Restricted`

## 6) Fair Play Principles
Three large principle cards:
- **Transparency:** rules visible before play starts
- **Competitive Balance:** avoid stacked brackets
- **Anti-Manipulation:** detect sandbagging/rating abuse patterns

Include anti-manipulation note:
- Suspicious patterns can trigger seeding override review by tournament ops.

## 7) UX Enhancements
- Rich tooltips for technical terms
- “Examples” toggle for novice users
- Accordion memory state (remember open panels per session)
- Inline glossary drawer on mobile

---

## Mobile UX Requirements
- Horizontal scrollable sticky tab bar with snap
- Hero blocks collapse to single-column stack
- Stepper converts to vertical timeline
- Daily cards and rule cards stack with 16px spacing
- Bottom safe-area padding for comfortable reach

Touch behavior:
- Swipe-friendly cards (not swipe-to-change-tab)
- 44px+ interactive targets

---

## Next.js + Tailwind + TypeScript Implementation Blueprint

## Folder structure
```txt
app/
  tournaments/
    [slug]/
      page.tsx
      loading.tsx
      error.tsx
components/tournament-details/
  TournamentDetailsShell.tsx
  StickyTabNav.tsx
  tabs/
    FormatTabPage.tsx
    RatingsSeedingTabPage.tsx
  sections/
    HeroSection.tsx
    TimelineFlow.tsx
    InfoCardGrid.tsx
    DailyBreakdown.tsx
    RulesCallouts.tsx
    RulesAccordion.tsx
lib/
  tournament-details/
    queryState.ts
    types.ts
    mappers.ts
```

## URL-synced tab state
```tsx
// lib/tournament-details/queryState.ts
export type TournamentTab = 'format' | 'ratings-seeding';

export const parseTournamentTab = (value: string | null): TournamentTab => {
  if (value === 'ratings-seeding') return 'ratings-seeding';
  return 'format';
};
```

## Sticky tab nav behavior
```tsx
// components/tournament-details/StickyTabNav.tsx
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parseTournamentTab, TournamentTab } from '@/lib/tournament-details/queryState';

const tabs: { key: TournamentTab; label: string }[] = [
  { key: 'format', label: 'Format' },
  { key: 'ratings-seeding', label: 'Ratings & Seeding' },
];

export function StickyTabNav() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = parseTournamentTab(params.get('tab'));

  const onChange = (next: TournamentTab) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set('tab', next);
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <ul className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3">
        {tabs.map((tab) => {
          const isActive = active === tab.key;
          return (
            <li key={tab.key}>
              <button
                onClick={() => onChange(tab.key)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'text-black' : 'text-neutral-500 hover:text-black'
                }`}
              >
                {tab.label}
                <span
                  className={`absolute -bottom-1 left-2 right-2 h-0.5 origin-left bg-[#485AFF] transition-transform ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

## Backend Design (NestJS + Prisma)

## Prisma models
```prisma
model Tournament {
  id            String        @id @default(cuid())
  slug          String        @unique
  name          String
  startDate     DateTime
  endDate       DateTime
  venueName     String
  venueAddress  String
  formatConfig  FormatConfig?
  seedingRules  SeedingRules?
  ratingSystem  RatingSystem?
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt
}

model FormatConfig {
  id                 String   @id @default(cuid())
  tournamentId       String   @unique
  flowJson           Json
  matchStructureJson Json
  dailyPlanJson      Json
  rulesJson          Json
  tournament         Tournament @relation(fields: [tournamentId], references: [id], onDelete: Cascade)
}

model SeedingRules {
  id                   String   @id @default(cuid())
  tournamentId         String   @unique
  seedingLogicJson     Json
  tieBreakerJson       Json
  edgeCasePolicyJson   Json
  fairPlayPolicyJson   Json
  tournament           Tournament @relation(fields: [tournamentId], references: [id], onDelete: Cascade)
}

model RatingSystem {
  id                   String   @id @default(cuid())
  tournamentId         String   @unique
  provider             String
  version              String
  configJson           Json
  tournament           Tournament @relation(fields: [tournamentId], references: [id], onDelete: Cascade)
}
```

## API surface
- `GET /api/tournaments/:slug`
- `GET /api/tournaments/:slug/format`
- `GET /api/tournaments/:slug/seeding`

DTO response strategy:
- Keep FE-facing payload semantic and section-oriented.
- Avoid leaking persistence naming (`*_json`) into response contract.

---

## Content Model (FE Contracts)

```ts
export interface FormatTabPayload {
  hero: {
    title: string;
    summary: string;
    badges: string[];
  };
  flow: Array<{ step: number; title: string; description: string; impact: string }>;
  matchStructure: {
    teamFormat: string;
    matchVolume: string;
    dailyRhythm: string[];
  };
  dailyBreakdown: Array<{
    dayLabel: string;
    dateISO: string;
    blocks: Array<{ stage: 'practice' | 'matches' | 'finals'; label: string; timeRange: string }>;
  }>;
  importantRules: Array<{ title: string; body: string; rationale?: string }>;
}

export interface RatingsSeedingPayload {
  hero: {
    title: string;
    summary: string;
    badges: string[];
  };
  seedingSystem: Array<{ title: string; description: string; tooltip?: string }>;
  ratingSystem: {
    currentModel: string;
    futureIntegration: string;
  };
  tieBreakers: Array<{ rank: number; rule: string; fairnessReason: string }>;
  edgeCases: Array<{ scenario: string; policy: string; mode: 'auto' | 'manual' | 'restricted' }>;
  fairPlayPrinciples: Array<{ title: string; description: string }>;
}
```

---

## Animation + Interaction Specs
- Tab panel transition: 180ms ease-out fade/translateY(4px→0)
- Card hover: shadow + translateY(-2px)
- Accordion open/close: height animation + opacity
- Skeleton shimmer: neutral gradient, 1.2s infinite

Accessibility:
- Keyboard-operable tabs/accordions
- `aria-current="page"` semantics for active virtual page tab
- 4.5:1 contrast minimum for text
- Reduced motion fallback via `prefers-reduced-motion`

---

## Delivery Checklist
- [ ] Sticky tab nav with URL sync implemented
- [ ] `Format` tab shipped as rich virtual page
- [ ] `Ratings & Seeding` tab shipped as rich virtual page
- [ ] Skeleton loaders present
- [ ] Mobile layout validated for 360–430px widths
- [ ] API contracts and DB schema aligned
- [ ] Content QA for fairness language and rule clarity

---

## Suggested Rollout Plan
1. Build static FE with mock payloads for rapid design iteration.
2. Implement NestJS endpoints + Prisma models.
3. Wire FE to API with loading/skeleton/error states.
4. Add analytics events:
   - `tab_changed`
   - `accordion_opened`
   - `rules_callout_expanded`
5. Run usability test with captains/new teams before full release.
