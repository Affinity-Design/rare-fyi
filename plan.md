# Plan: Convert `rarecoin.html` to Next.js Components

This converts the 1,846-line standalone HTML file into the 7 component slots that `app/page.tsx` already imports. Extra sections (Ticker, Scarcity Bar, CTA, Base Banner) are absorbed into their nearest parent. Styling is migrated to Tailwind v4 with a proper `@theme` block. A custom cursor client component is added to the layout layer.

---

## Change Log / Amendments

- **NFT Drops removed** from all sections (footer nav, pricing card features, pricing card list, roadmap references)
- **Mobile-first design** — all components built at 375px base, scaled up, not the reverse
- **Mega-menu navigation** replaces simple nav links — futuristic full-width panel with animated sections
- **Nav structure updated**: `About | Learn | Apps` replacing `About | Distribution | Philosophy | Apps`

---

## Steps

### 1. Fix `globals.css` for Tailwind v4

In `app/globals.css`, replace `@tailwind base/components/utilities` (v3 syntax) with `@import "tailwindcss"`. Add an `@theme` block mapping all design tokens from `rarecoin.html` into Tailwind-compatible CSS variables: colors (`--color-void: #080B0F`, `--color-rare: #9432FB`, etc.), gradient shorthands (`--iridescent`, `--secondary`), border values, and font-family stacks. Existing globals.css utility classes (`.glass`, `.btn-primary`, `.text-gradient`, etc.) should be updated to reference the new token names or rewritten as `@layer utilities` blocks.

### 2. Add fonts to `layout.tsx`

In `app/layout.tsx`, use `next/font/google` to load **Plus Jakarta Sans** (weights 300/400/600/700/800), **Cormorant Garamond** (italic + regular, weights 300/600), and **Space Mono** (400/700). Assign each to a CSS variable (`--font-sans`, `--font-serif`, `--font-mono`) and apply on the `<html>` element so all components can reference them.

### 3. Create `components/cursor.tsx` (new file)

`"use client"` directive. `useEffect` attaches a `mousemove` listener that drives two absolutely-positioned elements: a small 20px iridescent dot (`mix-blend-mode: screen`) and a 40px trailing ring (delayed via `requestAnimationFrame` lerp). On hover over `a`/`button` elements, scale the dot up. Add `cursor: none` scoped to `body` inside this component via a `<style>` tag. Framer Motion's `useMotionValue`/`useSpring` can replace the raw lerp loop for cleaner code. **Hidden on touch devices** (`@media (pointer: coarse) { display: none }`).

### 4. Mount cursor in `layout.tsx`

Import `<CustomCursor />` inside `RootLayout`'s `<body>` above `{children}`. Keep layout as a server component — only the cursor itself is a client component.

### 5. Create `components/navbar.tsx` — Futuristic Mega-Menu

`"use client"` (scroll + hover state). Floating pill navbar: fixed, centered, `max-w-1200px`, rounded-full, backdrop-blur.

**Structure:**

- Left: iridescent ring logo + "R" inner + "RARE COIN" wordmark
- Center: three nav triggers — `About` | `Learn` | `Apps`
- Right: "Claim Now" gradient pill CTA + mobile hamburger icon

**Mega-menu panel** (desktop only, `pointer: fine`):

- Full-width frosted-glass panel drops below the navbar on trigger hover/focus
- Animated with Framer Motion `AnimatePresence` — slides down + fades in (spring, `stiffness: 400, damping: 30`)
- Panel has a subtle iridescent top border (`1px` gradient line)
- Three columns, one per nav group, each with icon, title, description per link:

| About                       | Learn                              | Apps                            |
| --------------------------- | ---------------------------------- | ------------------------------- |
| 🪙 Coin — What is RARE COIN | 📚 Tutorials — Step-by-step guides | 🎯 Claim — Earn free RARE daily |
| 👥 Team — The builders      | 🎓 Learn — DeFi & Base education   | 📈 Stake — Earn staking rewards |
|                             | 📰 News — Updates & announcements  | 🎰 Win — Rare Lotto             |
|                             |                                    | 💱 Trade — Buy & sell $RARE     |

- On mobile: mega-menu becomes a full-screen slide-in drawer from the right, triggered by hamburger. Each group is an accordion `<details>` or Framer Motion `AnimatePresence` expand. Background: `--void` with iridescent accent lines.
- `useEffect` toggles a `scrolled` state at `scrollY > 50` to add purple shadow and brighter border

**Mobile navbar specifics:**

- Logo left, hamburger right only — no center links
- Hamburger animates to × on open (two span bars rotate with Framer Motion)
- Drawer: full-screen overlay, `z-index: 9000`, items stagger-animate in
- "Claim Now" CTA pinned at bottom of drawer

### 6. Create `components/hero.tsx` (absorbs Ticker)

`"use client"` (entrance animations). Two sub-sections:

**Hero area** (mobile-first):

- Mobile: stacked, coin hidden, content centered, `padding: 100px 24px 120px`
- Desktop (`md:`): flex row, coin visible right side, content left, `padding: 0 60px 100px`
- Background: CSS grid-line overlay + conic-gradient orb animation (`orbFloat`)
- Coin (desktop only via `hidden md:block`): animated coin circle, Framer Motion `animate rotate` or CSS `coinSpin`
- Left content: Space Mono eyebrow, `clamp` H1 with Cormorant italic `<em>` gradient, subtitle, CTA buttons, hero stats row, hero link pills
- CTA buttons stack vertically on mobile (`flex-col sm:flex-row`)
- Hero stats: `grid grid-cols-3` on mobile with tighter font size, same on desktop
- Hero link pills: `flex-wrap` horizontal, scroll-snap on mobile if overflow

**Ticker strip:**

- `overflow-hidden` container — full width, `bg-deep`, top/bottom border
- `flex` track with `animate-[tickerScroll_20s_linear_infinite]`
- Content duplicated for seamless loop
- Items: green pulse dot, label, value — `font-mono text-xs`
- Define `tickerScroll` keyframe in `@layer utilities`
- Same on all breakpoints

### 7. Create `components/features.tsx` (absorbs Scarcity Bar)

`"use client"` (IntersectionObserver + scarcity calc). Two sub-sections:

**About grid:**

- Mobile: single column, card first then text
- Desktop (`lg:`): two-column `gap-20`
- Left: distribution card — animated progress bars (Claimers Pool 50%, Stakers Pool 50%, Dev Fund 0%), 4-stat grid (`<7s`, `<$0.001`, `Eco`, `Free`)
- Right: 3 paragraphs + 2×2 differentiator cards (Eco Friendly 🌱, Near Instant ⚡, Truly Rare 💎, Fair Launch ⚖️)
- Differentiator cards: full width on mobile, 2-col on `sm:`

**Scarcity bar:**

- `Math.floor((today - new Date(2019,0,1)) / 86400000) * 200` → clamp to 3,650,000
- Animate bar fill with Framer Motion on IntersectionObserver trigger
- Mobile: full padding `px-6`, stacked header (title above, count below)
- Desktop: `flex justify-between` header

### 8. Create `components/philosophy.tsx`

Server component. Full-width dark section. Centered `max-w-1000px`.

- Mobile: `padding: 80px 24px`, font sizes scaled down with `clamp`
- Cormorant italic rhetorical question
- Space Mono "VS" divider with flex lines either side
- Oversized iridescent bold answer ("COLLABORATIVE WEALTH") — `clamp(36px, 8vw, 72px)`
- Body text
- CTA button centered below body
- Background: two `absolute` radial gradient orbs (left pink, right blue), `pointer-events: none`

### 9. Create `components/protocol.tsx`

Server component. Distribution section.

- Mobile: single column, `px-6`
- Desktop: two-column pool cards
- Each pool card: emoji icon panel square, large gradient pool name, description, requirements list (`→` prefixed), "Learn More →" text link
- Hover iridescent border via CSS `::after` mask trick (desktop only — hover doesn't exist on touch)
- On mobile, cards get a subtle static iridescent border instead of hover-only

### 10. Create `components/pricing.tsx` (absorbs CTA + Base Banner)

`"use client"` (hover states). Three sub-sections. **NFT Drops removed from all feature lists.**

**Pricing grid:**

- Mobile: single column, stacked cards with `gap-4`
- Desktop: 3-column grid
- Cards: Observer (Explorer/New To Crypto), Builder (Farmer/Daily Claimer — featured), Architect (Investor/Staker + Holder)
- Featured card: "Most Popular" badge, gradient background tint, `btn-primary` CTA
- Feature lists updated: **no NFT drops** — replace with "Rare Lotto participation" on Staker card only
- Mobile: featured card gets a stronger border glow to distinguish without hover

**CTA section:**

- Mobile: `px-6`, buttons full-width stacked, card group single column
- Desktop: centered max-w-700px, 2-col card group

**Base Migration Banner:**

- Mobile: single column — left content then Base chain card stacked, `px-6`
- Desktop: `grid-cols-[1.3fr_1fr] gap-15`
- Base chain card stats: 2×2 grid preserved
- "Why Base?" reasons list preserved

### 11. Create `components/footer.tsx`

Server component. **NFT Drops link removed from Apps column.**

- Mobile: 2-col top grid (brand full-width top, then 2×2 link columns below), `px-6`
- Desktop: 4-column grid `grid-cols-[2fr_1fr_1fr_1fr]`
- Brand column: logo + description + Live status pill
- Link columns updated:
  - **Made Possible**: About, News, Team, Price Chart, Change Log
  - **Support**: FAQs, Tutorials, Roadmap, Support Group
  - **Apps**: Claiming App, Staking App _(NFT Drops removed)_, Rare Lotto App `new` badge
- Bottom row: copyright + social icons
- Mobile: bottom row stacks copyright above socials, centered

---

## Mobile Optimization Rules (apply to all components)

- **Base breakpoint: 375px** — all layout designed mobile-first, desktop is additive
- **Touch targets**: all buttons/links minimum `44×44px` tap target (padding expansion if needed)
- **Typography**: all `clamp()` values bottom-clamped at readable mobile sizes (minimum `14px` body, `11px` labels)
- **No hover-only UX**: anything communicating state via `:hover` must have a fallback visible state on touch (`@media (hover: none)`)
- **Coin hidden on mobile** (`hidden md:block`) — replaces dead space with tighter hero copy layout
- **Custom cursor disabled on touch**: `@media (pointer: coarse)` hides cursor elements
- **Mega-menu becomes drawer on mobile**: no flyout panels, full-screen slide-in drawer with accordion groups
- **Spacing scale**: mobile sections use `py-16 px-6`, desktop `py-30 px-15`
- **Images/SVGs**: all decorative elements use `will-change: transform` and `contain: layout` to avoid repaints on scroll
- **Framer Motion**: use `useReducedMotion()` hook — if true, skip all entrance animations to respect OS accessibility setting

---

## Verification

- Run `next dev` — confirm zero build errors across all 7 new components
- `get_errors` check after each component is created
- Visually compare each section side-by-side with `rarecoin.html` opened in browser
- **Mobile**: test at 375px, 390px (iPhone 15), 430px (iPhone 15 Plus) in Chrome DevTools
- Test mega-menu open/close on desktop — panel animates correctly, focus trap works
- Test mobile drawer open/close — accordion groups expand, "Claim Now" pinned at bottom
- Test responsive breakpoint at 900px: coin hides, grids go single-column, nav switches to hamburger
- Test Ticker scroll loop is seamless (no jump)
- Test Scarcity bar calculation and animation on page load
- Test custom cursor on desktop, confirm `cursor: none` applies globally
- Test `prefers-reduced-motion` — confirm all Framer Motion animations are skipped
- **Audit**: no NFT Drops references remain anywhere in component tree

---

## Decisions

- Extra sections absorbed into parents rather than new files to keep `page.tsx` unchanged
- Tailwind v4 `@theme` over raw CSS vars: unlocks utility class generation (e.g. `bg-void`, `text-rare`) from the tokens
- `next/font/google` over `<link>` tags: automatic font optimization and no layout shift
- Framer Motion used for coin spin, bar fills, cursor spring, and mega-menu panel — already installed (v12)
- Mega-menu uses `AnimatePresence` with `motion.div` panel — not a native `<details>` on desktop for full animation control
- Mobile drawer uses `motion.div` slide-in from right (`x: "100%" → x: 0`) with `backdrop-blur` overlay
- NFT Drops removed entirely — no stub links, no commented-out code
- Mobile-first CSS order: base styles → `sm:` → `md:` → `lg:` — never override mobile from desktop
