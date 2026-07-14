# SCALEQ — Corporate Website

Production website for **SCALEQ ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.** — https://scale-q.com

Premium bilingual (Greek / English) corporate site: strategy, technology & digital growth partner.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css` `@theme`)
- **Framer Motion** (scroll scenes, reveals) + custom **Canvas 2D** signature visual ("The Lattice")
- No GSAP / Three.js — not needed for the current motion design, keeps the bundle light
- Fonts via `next/font`: Source Serif 4 (display), Manrope (UI), JetBrains Mono (labels) — all with Greek subsets

## Routing & i18n

- Greek is the primary language served at the **root**: `/`, `/services`, …
- English lives under `/en`: `/en`, `/en/services`, …
- There is **no public `/el` route** — `src/proxy.ts` rewrites `/` → `/el` internally and 301-redirects any direct `/el/...` hit to the root equivalent.
- The language switcher (header) maps every page to its counterpart in the other locale.
- All localisable copy lives in `src/content/*` and `src/data/*` as `Record<Locale, …>` objects — adding a locale or moving to a CMS later means changing these modules only.

## Project structure

```
src/
  proxy.ts                  # locale rewrite/redirect logic (no /el in public URLs)
  config/site.ts            # company/legal info + contact placeholders (single source)
  lib/                      # i18n helpers, metadata builder, shared types
  content/                  # page copy per locale (home, about, approach, contact, legal, nav)
  data/                     # data-driven content: services, solutions, projects,
                            # capabilities, operating model, technology, outcomes
  components/
    layout/                 # Header, Footer, CookieConsent
    ui/                     # Container, Section, PageHero, CtaLink, Reveal
    graphics/               # LatticeCanvas, CapabilityDiagram, DeviceMockup, Wordmark
    home/                   # homepage sections
    contact/                # contact form
    pages/                  # LegalPage renderer
    seo/                    # JSON-LD components
  app/
    [locale]/               # all pages (el, en) — layout carries <html lang>
    api/contact/route.ts    # form endpoint (validation, honeypot, webhook integration point)
    sitemap.ts  robots.ts   # SEO
```

## Routes

| Greek (root)        | English              |
| ------------------- | -------------------- |
| `/`                 | `/en`                |
| `/services`         | `/en/services`       |
| `/solutions`        | `/en/solutions`      |
| `/approach`         | `/en/approach`       |
| `/projects`         | `/en/projects`       |
| `/projects/[slug]`  | `/en/projects/[slug]`|
| `/about`            | `/en/about`          |
| `/contact`          | `/en/contact`        |
| `/privacy` `/cookies` `/terms` | `/en/privacy` `/en/cookies` `/en/terms` |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npx tsc --noEmit   # type check
npm run lint       # eslint
npm run build      # production build
npm start          # serve production build
```

## Environment variables

See `.env.example`. None are required to build or run; they unlock:

| Variable | Purpose |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | Where `/api/contact` forwards submissions (email service, CRM, Zapier/Make/n8n). Unset → submissions are accepted and logged server-side. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 — injected **only after** cookie consent. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity — injected **only after** cookie consent. |

## Content management

- **Case studies**: `src/data/projects.ts`. Current entries are demonstration scenarios flagged `isSample: true` (they render a visible "demonstration" badge). Add a real case study by adding an entry with `isSample: false`.
- **Contact details** (email/phone/address, social links): placeholders in `src/config/site.ts` — fill before launch. Empty values are hidden automatically in the UI.
- **Services / solutions**: `src/data/services.ts`, `src/data/solutions.ts` — fully data-driven, cross-linked by slug.

## Deploying to Hostinger (Node.js app via GitHub)

1. Push this repository to GitHub (see below).
2. In hPanel → **Websites → Add website → Node.js app** (or convert the existing scale-q.com site), connect the GitHub repository.
3. Build settings:
   - **Framework preset:** Next.js
   - **Node version:** 20.x (or newer LTS)
   - **Build command:** `npm run build`
   - **Start command:** `npm start` (runs `next start`, honours Hostinger's `PORT`)
   - **Root directory:** `/` (repository root)
4. Add the environment variables from `.env.example` in the panel's environment settings.
5. Point the `scale-q.com` domain at the app and enable SSL.
6. Enable auto-deploy on push to `main`.

## First GitHub push

```bash
git add -A
git commit -m "SCALEQ corporate website"
git branch -M main
git remote add origin git@github.com:<your-account>/scaleq-web.git
git push -u origin main
```

## Licences / assets

All graphics are custom SVG/canvas built for this project — no stock photography. See `ASSETS.md`.
