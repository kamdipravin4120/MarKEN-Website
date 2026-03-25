# MarKEN Website POC Demo Design Spec

**Date:** 2026-03-26
**Demo:** Friday March 28, morning
**Audience:** Investors, internal stakeholders, potential customers (hospitals/blood banks)
**Goal:** Showcase tech capabilities, get build approval, demonstrate customer conversion flow

---

## 1. Visual Direction & Design System

### Theme
- **Light theme (default)** with dark mode toggle
- `next-themes` for SSR-safe switching, persists user preference in localStorage
- System preference respected on first visit

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Background | white / slate-50 | slate-900 / slate-950 |
| Text primary | slate-900 | white |
| Text secondary | slate-700 | slate-300 |
| Primary | #2563eb (blue-600) | #3b82f6 (blue-500) |
| Accent/CTA | #0891b2 (teal-600) | #06b6d4 (cyan-500) |
| Cards | white + shadow + border | glass-morphism + backdrop blur |
| Header | white + backdrop blur | slate-900 + backdrop blur |
| Hero gradient | blue-50 → white | slate-950 → slate-900 |

### Typography
- **Font:** Inter via `next/font`
- **Headings:** Bold, 4xl-6xl for hero, gradient text effects optional
- **Body:** Regular, slate-700 (light) / slate-300 (dark)

### CSS Architecture
- Tailwind v4 CSS variables with semantic tokens (`bg-surface`, `text-heading`, `border-default`)
- Single component source — theme switch is variable swap only
- No duplicate styles

### Animations (Framer Motion)
- Scroll-triggered fade-up for all sections (staggered children)
- Page transitions: subtle fade between routes
- Number counter animation on stats (intersection observer)
- Card hover: translateY -4px + shadow increase
- 3D CTA button: subtle pulse glow
- Accordion: smooth expand/collapse

---

## 2. Page Layouts

### Homepage (`/`)

| Section | Design |
|---------|--------|
| **Hero** | Full-width gradient banner. Large headline ("Precision Medical Equipment for Modern Healthcare"). Value prop subtext. Two CTAs: "Explore Products" (primary blue) + "View 3D Experience" (accent teal/outlined). Right side: animated medical illustration or 3D preview |
| **Stats Bar** | Horizontal strip on blue-50/slate-800 background. 6 counters: 25+ Years, 400+ Products, WHO PQS (10), 20K+ Customers, 30 Franchises, 500 Service Centers. Animated count-up on scroll |
| **Product Categories** | 6-card grid (3x2 → 2x3 → 1x6). Icon + title + product count per card. Hover lift + color shift. Staggered fade-in |
| **Why MarKEN** | Trust signals — certifications, differentiators, company story. Icon + text blocks |
| **CTA** | Full-width gradient banner. "Request a Quote" + phone/email/WhatsApp quick links |

### Product Detail (`/products/blood-bank-equipment/blood-bank-refrigerator`)

| Section | Design |
|---------|--------|
| **Hero** | Product name + tagline left, key spec badges right. "Launch 3D Experience" CTA with pulse animation |
| **Features** | 3-column icon card grid. Hover reveals expanded description |
| **Specifications** | Toggle between 6 variant cards. Clean table, alternating row colors |
| **FAQ** | Accordion with smooth expand animation |
| **Downloads** | Card per resource (brochure, datasheet, manual, certificate) with download icon |
| **Sticky CTA** | "Get Quote for this Product" sticky bottom bar on mobile |

### 3D Experience (`/3d-experience/blood-bank-refrigerator`)

| Section | Design |
|---------|--------|
| **Viewer** | Full-screen 3D canvas with orbit controls |
| **Hotspots** | 7 pulsing dot markers on model. Hover → tooltip. Click → camera fly-to + info panel |
| **Guided Tour** | Bottom toolbar with step indicators. "Start Tour" auto-navigates camera between hotspots with narration text. Prev/next/play controls |
| **Controls** | Top-right: fullscreen, reset view, toggle hotspots visibility |
| **Info Panel** | Slide-in from right: hotspot title, description, spec highlight, "Learn More" link. Semi-transparent backdrop |

### Get Quote (`/contact/get-quote`)

| Section | Design |
|---------|--------|
| **Form** | Fields: name, organization, email, phone, product interest (dropdown), message. Inline validation. Submit with loading state + success confirmation |
| **Sidebar** | Contact cards: phone, email, WhatsApp, office address |
| **Trust** | Below form: certification badges, "Response within 24hrs" |

### Mobile Responsive (all pages)
- Hamburger menu with slide-in nav drawer
- Stacked single-column layouts
- 3D viewer: touch gestures (pinch zoom, swipe rotate)
- Sticky bottom CTA bar on product pages
- WhatsApp FAB always visible

---

## 3. 3D Model & Interaction

### Model Sourcing
1. Search Sketchfab for free CC-licensed medical/lab refrigerator GLTF
2. Fallback: commercial refrigerator or server rack model with similar form factor
3. Apply custom PBR materials: brushed stainless steel, glass door reflections, blue LED glow

### Interaction System

| Feature | Behavior |
|---------|----------|
| **Orbit** | Click-drag rotate, scroll zoom, right-drag pan. Bounded limits |
| **Hotspots** | 7 pulsing markers. Hover → label tooltip. Click → camera fly-to + info panel |
| **Guided Tour** | Auto-animate through all 7 hotspots, 3-second pause each. Progress bar. Pause/skip/exit controls |
| **Exploded View** | Button to spread components apart (door, shelves, compressor) with smooth animation |
| **Reset** | One-click smooth tween back to default camera |
| **Loading** | Skeleton shimmer + progress bar. Fallback to procedural model if GLTF fails |
| **Performance** | Lazy load 3D canvas. Static preview image until user activates |

### Info Panel (right slide-in)
- Hotspot title + icon
- 2-3 line description
- Key spec highlight
- "Learn More" link to product page section

---

## 4. Theme Toggle Implementation

- Library: `next-themes`
- UI: Sun/moon icon button in header with smooth transition
- Behavior: System preference on first visit → user choice persisted in localStorage
- Architecture: CSS variables swap only, no conditional rendering per theme

---

## 5. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| 3D Load | Lazy with preview placeholder |
| Images | next/image with blur placeholder |
| Font | Inter via next/font (no layout shift) |
| Bundle | Code-split per page |

---

## 6. Out of Scope (Separate Tasks)

- Full SEO module (meta optimization, sitemap, GA4, AI ranking) — separate task
- CMS integration (Strapi)
- Search functionality (Meilisearch)
- Additional product pages beyond BBR
- Blog, case studies, resources
- Real product photography
- Commissioned 3D model (production quality)

---

## 7. Demo Flow (Friday)

1. **Homepage** → scroll hero, watch stats animate, browse categories
2. **Product page** → click Blood Bank Refrigerator, explore features/specs/FAQ
3. **3D Experience** → launch viewer, interact with hotspots, run guided tour, exploded view
4. **Get Quote** → fill form, show conversion flow
5. **Mobile** → responsive demo on phone/tablet viewport
6. **Theme toggle** → switch light ↔ dark during any step

---

## 8. Parallel Task for User

Generate Stitch mockups with this prompt:
> "Clean, modern medical equipment website. Light theme. White background, blue accents (#2563eb), teal CTAs (#0891b2). Homepage hero with 3D product visualization CTA, animated stats counter section, product category cards with hover effects. Premium B2B medical enterprise feel. Generous whitespace, Inter font."

Share screenshots → aesthetic will be matched in code implementation.
