# ASSETS

Register of every visual asset used on the SCALEQ website.

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
