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

| `public/projects/media-strom/home.jpg`, `category-stromata.jpg`, `home-products.jpg` | Media Strom E-commerce Platform | Captured directly from the official website (July 2026): https://www.mediastrom.com/ and https://www.mediastrom.com/stromata | Screenshots of the client's official public website, shown unaltered with attribution and a trademark/ownership disclaimer, to illustrate a professional-contribution case study (brand identity carries over from the platform generation concerned). © Media Strom. | Media Strom detail (cover + gallery), listing, homepage Selected Work |
| `public/projects/nbg-next/appstore-1.jpg` … `appstore-6.jpg` (6 files) | NBG Next | Official App Store listing for "Next by NBG": https://apps.apple.com/gr/app/next-by-nbg/id1058862350 (retrieved via Apple's public iTunes API, images 1–6 of the listing, 1242×2208) | Official promotional screenshots published by National Bank of Greece S.A. on its App Store listing; used unaltered, with attribution and a trademark/ownership disclaimer, to illustrate a professional-contribution case study. © National Bank of Greece S.A. | `/projects/nbg-next` (hero mobile row), projects listing |
| `public/projects/orlik-gallery/home.jpg`, `product.jpg`, `artists.jpg`, `news.jpg`, `locations.jpg`, `mobile-home.jpg`, `mobile-product.jpg` | Orlik Gallery | Captured directly from the official website (July 2026): https://orlikgallery.com/ · /product/original-painting-athena-by-inna-orlik/ · /artists/ · /news/ · /locations/ | Screenshots of the client's official public website, shown unaltered with attribution and a trademark/ownership disclaimer, to illustrate the case study of the site's technical delivery. Artworks, photography and branding © Orlik Gallery and its artists. | Orlik Gallery detail (cover, gallery, mobile grid), listing, homepage Selected Work |
| `public/projects/pawera/logo.png` | PawEra | Provided directly by the product owner (ORBIQ) | Product logo supplied by ORBIQ for this presentation. © ORBIQ. | PawEra detail hero |
| `public/projects/pawera/booking-flow.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (booking flow, 6 screens) supplied by ORBIQ; shown unaltered. © ORBIQ. | PawEra cover (detail, listing, homepage) |
| `public/projects/pawera/activity-screens.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (activity screens) supplied by ORBIQ; shown unaltered. © ORBIQ. | PawEra "Bookings & activity" gallery |
| `public/projects/pawera/pet-management.png` | PawEra | Provided directly by the product owner (ORBIQ) — internal design material | Product design sheet (pets & profiles) supplied by ORBIQ; cropped only to remove editor chrome, UI unaltered. © ORBIQ. | PawEra "Pets & profiles" gallery |
| `public/projects/logos/beepink.png` | BEE pINK Beauty Studio (Professional Contributions) | Official website header logo: https://beepink.gr/wp-content/uploads/2024/08/cropped-cropped-524E83D8-2D31-479B-9678-C6F5DD31B168-removebg-preview.png (retrieved from https://beepink.gr/, July 2026) | Official brand logo, used unaltered at native resolution (799×312, transparent PNG). No SVG version available on the site. © BEE pINK Beauty Studio. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/discoverathenstours.png` | Discover Athens Tours (Professional Contributions) | Official website header logo (full-resolution original): https://discoverathenstours.com/wp-content/uploads/2025/06/DA-LOGO-2-1-1.png (retrieved from https://discoverathenstours.com/, July 2026) | Official brand logo, used unaltered at native resolution (1080×864, transparent PNG). No SVG version available on the site. © Discover Athens Tours. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/stihl.svg` | STIHL Hellas (Professional Contributions) | Official brand asset: https://www.stihl.gr/content/dam/stihl/system-assets/logos/STIHL_Logo.svg (retrieved from https://www.stihl.gr/, July 2026; byte-identical to the file served on the live site) | Official brand logo (vector), used unaltered. © ANDREAS STIHL AG & Co. KG. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/barberszone.png` | BarbersZone (Professional Contributions) | Official website header logo: https://barberszone.gr/wp-content/uploads/2023/07/FullLogo_NoBuffer_whitebrand_120x90.png (retrieved from https://barberszone.gr/, July 2026) | Official brand logo, used unaltered at native resolution (121×90, transparent PNG). © BarbersZone. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/seajets.png` | Seajets (Professional Contributions) | Official brand asset: https://www.seajets.com/images/logo.png (retrieved from https://www.seajets.com/, July 2026 — the domain blocks non-browser requests; the asset was fetched by a live browser session and saved via the browser's own download mechanism) | Official brand logo, used unaltered at native resolution (160×68, transparent PNG). © Seajets. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/autoplus.png` | Autoplus (Professional Contributions) | Official website logo, retrieved from https://www.autoplus.gr/, July 2026 | Official brand logo, used unaltered (240×120 PNG). © Autoplus. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/soeasy.webp` | So Easy (Professional Contributions) | Official website header logo, retrieved from https://soeasy.gr/, July 2026 (visually confirmed against the live rendered header) | Official brand logo, used unaltered (130×130 webp). © So Easy. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/onisis.svg` | ONISIS Consulting (Professional Contributions) | Official website logo, retrieved from https://onisisconsulting.gr/, July 2026 | Official brand logo (vector), used unaltered. © ONISIS Consulting. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/poep.webp` | Π.Ο.Ε.Π. / POEP (Professional Contributions) | Official website logo, retrieved from https://poep.gr/, July 2026 | Official brand logo, used unaltered (136×136 webp). © Π.Ο.Ε.Π. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/octopus.png` | Octopus.gr (Professional Contributions) | Official website header logo: https://octopus.gr/wp-content/uploads/2026/03/octopus-logo-866x800.png (retrieved from https://octopus.gr/, July 2026; matches the exact `header_logo` element in the live page markup) | Official brand logo, used unaltered at native resolution (866×800 PNG). © Octopus.gr. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/timeonline.jpg` | TimeOnline.gr (Professional Contributions) | Official website header logo: https://timeonline.gr/wp-content/uploads/2019/06/cropped-time_online_logo_3.jpg (retrieved from https://timeonline.gr/, July 2026) | Official brand logo, used unaltered at native resolution (520×236 JPG). © TimeOnline.gr. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/echodeco.png` | Echo Deco (Professional Contributions) | Official website header logo: https://echodeco.gr/image/cache//graphics/logo-vetrical-new-home-page-468x212.png (retrieved from https://echodeco.gr/, July 2026) | Official brand logo, used unaltered at native resolution (468×212 PNG). © Echo Deco. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/slimbites.png` | Slimbites (Professional Contributions) | Official website header logo: https://slimbites.gr/wp-content/uploads/2022/12/slimbites-protasi-1.png (retrieved from https://slimbites.gr/, July 2026) | Official brand logo, used unaltered at native resolution (348×192 PNG). © Slimbites. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/humanpet.png` | HumanPet (Professional Contributions) | Official website header logo: https://humanpet.gr/wp-content/uploads/2023/11/rsz_1rsz_logo-1-removebg-preview-1.png (retrieved from https://humanpet.gr/, July 2026) | Official brand logo, used unaltered at native resolution (256×101, transparent PNG). © HumanPet. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/tasoulis-jewellery.png` | Tasoulis Jewellery (Professional Contributions) | Official website logo: https://tasoulis-jewellery.gr/images/logo.png (retrieved from https://tasoulis-jewellery.gr/, July 2026) | Official brand logo, used unaltered at native resolution (300×96 PNG). © Tasoulis Jewellery. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/tziolis-marine.jpg` | Tziolis Marine (Professional Contributions) | Official website header logo: https://tziolis-marine.gr/wp-content/uploads/2023/03/Untitled-1-min-scaled-1-1024x238.jpg (retrieved from https://tziolis-marine.gr/, July 2026) | Official brand logo, used unaltered (1024×238 JPG, a WordPress-generated size of the original header asset). © Tziolis Marine. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/theomni.png` | THE OMNI (Professional Contributions) | Official website logo: https://theomniworld.com/wp-content/uploads/2022/01/cropped-THE-OMNI-EDGED-FINAL-BLACK-2.png (retrieved from https://theomniworld.com/, July 2026) | Official brand logo, used unaltered at native resolution (200×172, transparent PNG). © THE OMNI. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/ktenion.svg` | KTENION (Professional Contributions) | Official website header logo: https://ktenion.gr/wp-content/uploads/2025/02/202502050218397824.svg (retrieved from https://ktenion.gr/, July 2026; matches the exact `site-logo`/`wd-main-logo` element in the live page markup) | Official brand logo (vector, white fill — the live site displays it on a black header, so it is shown here on a dark tile). © KTENION. | Trusted Experience logo wall, Professional Contributions card |
| `public/projects/logos/jebelk9.png` | Jebel K9 (Professional Contributions) | Official brand asset: https://jebelk9.com/wp-content/themes/jebel/assets/images/logo-dark.png (retrieved from https://jebelk9.com/, July 2026 — the theme's own "dark" logo variant, sized for light backgrounds) | Official brand logo, used unaltered at native resolution (200×200 PNG). © Jebel K9. | Trusted Experience logo wall, Professional Contributions card |

Related official sources referenced (no assets copied):

**NBG Next**
- Official NBG page: https://www.nbg.gr/el/next-by-nbg-diaxeirish-oikonomikwn
- Google Play listing: https://play.google.com/store/apps/details?id=gr.nbg.socialpay

**NBG Mobile Banking**
- Google Play listing: https://play.google.com/store/apps/details?id=mbanking.NBG
- Official product page: https://www.nbg.gr/en/individuals/daily-transactions/digital-banking/mobile-banking

**Media Strom E-commerce Platform** — public grounding for the WordPress/
WooCommerce platform claim:
- Official website (current): https://www.mediastrom.com
- Internet Archive snapshot of 2023-01-07 whose HTML carries
  `<meta name="generator" content="WordPress 6.1.1">` and
  `<meta name="generator" content="WooCommerce 7.1.1">`:
  https://web.archive.org/web/20230107135447/https://www.mediastrom.com/

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
