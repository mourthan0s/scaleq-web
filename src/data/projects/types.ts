import type { Localized } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SCALEQ project / case-study data model.
 *
 * Designed for 15–20 real projects, file-based for now but shaped so it can
 * map 1:1 onto a headless CMS later (Sanity / Contentful / Strapi / WP):
 * every entry is a flat, serialisable document; taxonomies are string keys;
 * localisation is explicit per field.
 *
 * Honesty is a hard requirement of this model:
 *  - `participation` states whether SCALEQ (or its founder) contributed as
 *    part of a larger team, or delivered the project end to end.
 *  - Collaborative projects MUST identify the owning organization and the
 *    actual role — never imply full ownership.
 *  - `confidentiality` + `allowScreenshots` control how much may be shown.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** How SCALEQ participated in the project. */
export type ParticipationType = "collaborative" | "end-to-end";

/** High-level project category (single, for filtering & related projects). */
export type ProjectCategory =
  | "web-platform"
  | "mobile-app"
  | "ecommerce"
  | "business-system"
  | "ai-automation"
  | "website";

export type ProjectStatus =
  | "live"
  | "completed"
  | "ongoing"
  | "in-development"
  | "archived";

/**
 * How much of the project may be presented publicly:
 *  - public:     full case study, screenshots allowed (per `allowScreenshots`)
 *  - limited:    general description only — no internals, no metrics
 *  - anonymized: the client/organization must not be named
 */
export type Confidentiality = "public" | "limited" | "anonymized";

export type ProjectImageKind = "cover" | "gallery" | "mobile" | "desktop";

export interface ProjectImage {
  /** Path under /public, e.g. "/projects/acme-app/cover.png". */
  src: string;
  alt: Localized<string>;
  kind: ProjectImageKind;
  /**
   * Width / height ratio of the image (e.g. 2032 / 1071). When set, the
   * image renders at its natural aspect so nothing is cropped away —
   * important for multi-screen design sheets.
   */
  aspect?: number;
  /** Official origin of the asset (App Store, official site, press kit …). */
  sourceUrl?: string;
  /** Attribution note — must also be recorded in ASSETS.md. */
  attribution?: string;
}

/**
 * A named gallery section on the detail page (e.g. "Booking flow",
 * "Admin panel", "Landing website"). Sections without images are not
 * rendered, so future screenshots can be added incrementally by data alone.
 */
export interface GallerySection {
  key: string;
  title: Localized<string>;
  description?: Localized<string>;
  images: ProjectImage[];
}

/** A free-form narrative chapter (e.g. "User experience", "Architecture"). */
export interface NarrativeSection {
  heading: Localized<string>;
  paragraphs: Localized<string[]>;
}

export interface ProjectLinks {
  website?: string;
  appStore?: string;
  googlePlay?: string;
  other?: { label: Localized<string>; url: string }[];
}

/**
 * A labeled cluster of responsibilities within "Our contribution"
 * (e.g. "Payments & Transactions", "IRIS Payments") — for collaborative
 * projects where the contribution spans distinct domains worth naming
 * individually, without implying sole ownership of any of them.
 */
export interface ContributionArea {
  heading: Localized<string>;
  /** Honest standing within the domain, e.g. "Core contributor" — never "owner" unless true. */
  standing?: Localized<string>;
  summary?: Localized<string>;
  items: Localized<string[]>;
}

/** A tag-chip group for the "Areas of expertise" section. Tags are plain strings (shown as-is in both locales, like `technologies`). */
export interface ExpertiseGroup {
  heading: Localized<string>;
  tags: string[];
}

export interface Project {
  /** Stable unique id (CMS-friendly); slug may change, id must not. */
  id: string;
  /** URL slug, e.g. "operations-platform". */
  slug: string;
  /** Demonstration content — shows a visible badge, replaced by real cases. */
  isSample: boolean;
  /** Featured projects appear in the editorial spotlight + homepage. */
  featured: boolean;
  /** Manual display order (ascending) within listings. */
  order: number;

  title: Localized<string>;
  /** One-two sentences for cards and listings. */
  shortDescription: Localized<string>;
  /** Full case-study narrative, as paragraphs. */
  description?: Localized<string[]>;

  /**
   * The client or owning organization. For `anonymized` projects use a
   * sector descriptor instead of a name.
   */
  organization: Localized<string>;
  category: ProjectCategory;
  participation: ParticipationType;
  industry: Localized<string>;
  /** Stable key for industry filtering, e.g. "banking". */
  industryKey: string;
  /** Year or period, e.g. "2023" or "2021 — 2024". Empty string hides it. */
  period: string;
  status: ProjectStatus;

  /** "My role / our role" — REQUIRED for collaborative projects. */
  role?: Localized<string>;
  /** Short line under the role, e.g. "Specialisation: Payments & Transactions". */
  specialization?: Localized<string>;
  /** Team setting: size/structure of the wider team, where it existed. */
  teamContext?: Localized<string>;
  /** Concrete things SCALEQ was responsible for. */
  responsibilities?: Localized<string[]>;
  /** One-paragraph summary of the contribution — headline of the role section. */
  contributionSummary?: Localized<string>;
  /** Detailed, domain-labeled breakdown of the contribution — richer alternative/addition to `responsibilities`. */
  contributionAreas?: ContributionArea[];
  /** Short closing paragraph on contribution beyond the specialised areas above. */
  generalContribution?: Localized<string>;
  /** Grouped skill/domain chips summarising expertise on this project — rendered as its own section. */
  expertiseAreas?: ExpertiseGroup[];

  challenge?: Localized<string>;
  approach?: Localized<string>;
  solution?: Localized<string>;
  outcome?: Localized<string>;
  /** Additional narrative chapters, rendered after challenge/approach/solution. */
  narrativeSections?: NarrativeSection[];

  technologies: string[];
  /** e.g. ["Web", "iOS", "Android"]. */
  platforms: string[];
  keyFeatures?: Localized<string[]>;
  integrations?: string[];
  deliveredSystems?: Localized<string[]>;

  /** Product logo (path under /public) — shown on the detail hero if set. */
  logo?: string;
  /** All imagery. Cover = images.find(kind === "cover"). */
  images: ProjectImage[];
  /** Named galleries (booking flow, admin panel, …) — render only when filled. */
  gallerySections?: GallerySection[];
  /** Generated in-house mockup shown when no real imagery is allowed/available. */
  fallbackMockup?: "dashboard" | "portal" | "commerce";

  links?: ProjectLinks;

  confidentiality: Confidentiality;
  /** False → never render real screenshots, even if images exist. */
  allowScreenshots: boolean;
  /**
   * Custom disclaimer. Collaborative projects without one automatically get
   * the default trademark/ownership disclaimer (see taxonomy.ts).
   */
  disclaimer?: Localized<string>;

  /** Slugs into data/services.ts. */
  relatedServices: string[];
  /** Explicit related project slugs; falls back to same-category projects. */
  relatedProjects?: string[];

  /** Optional per-page SEO overrides. */
  seo?: {
    title?: Localized<string>;
    description?: Localized<string>;
  };
}
