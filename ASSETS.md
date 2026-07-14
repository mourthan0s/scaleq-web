# ASSETS

Register of every visual asset used on the SCALEQ website.

## Project / case-study assets — process & register

Every real project image must satisfy ALL of the following before it enters
`public/projects/<slug>/`:

1. It comes from an **official source only**: the official website, App Store /
   Google Play listing, official press kit, official organization pages or
   official public presentations. Never random blogs or unauthorised captures.
2. Its origin is unambiguous. If provenance is unclear → the asset is not used.
3. Its `sourceUrl` (and attribution, where applicable) is recorded on the
   `ProjectImage` entry in the project data file **and** in the table below.
4. Confidential / restricted projects use the in-house generated device
   mockups (`allowScreenshots: false`) instead of real UI.

| Asset | Project | Source URL | Licence / basis of use | Used in |
| --- | --- | --- | --- | --- |
| `public/projects/nbg-mobile-banking/appstore-1.jpg` … `appstore-6.jpg` (6 files) | NBG Mobile Banking | Official App Store listing: https://apps.apple.com/gr/app/nbg-mobile-banking/id342152889 (retrieved via Apple's public iTunes API, images 1–6 of the listing, 1242×2208) | Official promotional screenshots published by National Bank of Greece S.A. on its App Store listing; used unaltered, with attribution and a trademark/ownership disclaimer, to illustrate a professional-contribution case study. © National Bank of Greece S.A. | `/projects/nbg-mobile-banking` (hero + gallery), projects listing, homepage Selected Work |

| `public/projects/pawera/logo.png` | PawEra | Provided directly by the product owner (ORBIQ) | Product logo supplied by ORBIQ for this presentation. © ORBIQ. | PawEra detail hero |
| `public/projects/pawera/booking-flow.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (booking flow, 6 screens) supplied by ORBIQ; shown unaltered. © ORBIQ. | PawEra cover (detail, listing, homepage) |
| `public/projects/pawera/activity-screens.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (activity screens) supplied by ORBIQ; shown unaltered. © ORBIQ. | PawEra "Bookings & activity" gallery |
| `public/projects/pawera/pet-management.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (pets & profiles) supplied by ORBIQ; cropped only to remove editor chrome, UI unaltered. © ORBIQ. | PawEra "Pets & profiles" gallery |

Related official sources referenced (no assets copied):
- Google Play listing: https://play.google.com/store/apps/details?id=mbanking.NBG
- Official product page: https://www.nbg.gr/en/individuals/daily-transactions/digital-banking/mobile-banking

## Custom assets (created for this project — no external licence needed)

| Asset | Location | Used in |
| --- | --- | --- |
| "The Lattice" generative system visual | `src/components/graphics/LatticeCanvas.tsx` (Canvas 2D, code-generated) | Homepage hero, final CTA |
| Interim SCALEQ wordmark (Q with stepped tail) | `src/components/graphics/Wordmark.tsx` (inline SVG) | Header, footer |
| Capability diagrams (8 animated SVG variants) | `src/components/graphics/CapabilityDiagram.tsx` | Homepage "Capabilities" |
| Operating-model system drawing (6-stage SVG) | `src/components/home/OperatingModel.tsx` | Homepage & approach narrative |
| "Complexity → structure" organising dots scene | `src/components/home/ClarityScene.tsx` (SVG + Framer Motion) | Homepage SQ.00 section |
| Generated interface mockups (dashboard / portal / commerce) | `src/components/graphics/DeviceMockup.tsx` (inline SVG) | Case studies, homepage selected work |
| Favicon | `src/app/icon.svg` (inline SVG) | Browser tab |
| Open Graph image | `public/og.png` (rendered from custom SVG) | Social sharing (all pages) |

## External assets

None. No stock photography, third-party icon sets, Lottie files or CDN-hosted media are used.

## Fonts (via `next/font/google`, self-hosted at build time)

| Font | Roles | Licence | Source |
| --- | --- | --- | --- |
| Source Serif 4 | Display / editorial headings | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Source+Serif+4 |
| Manrope | Body / UI | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Manrope |
| JetBrains Mono | Labels, indices, technical lists | SIL Open Font License 1.1 | https://fonts.google.com/specimen/JetBrains+Mono |

All three include full Greek subsets and are self-hosted by Next.js at build time (no runtime requests to Google).
