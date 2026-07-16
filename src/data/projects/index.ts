import type { Locale } from "@/lib/i18n";
import type { Project, ProjectCategory, ParticipationType } from "./types";
import { nbgMobileBanking } from "./entries/nbg-mobile-banking";
import { nbgNext } from "./entries/nbg-next";
import { pawera } from "./entries/pawera";
import { mediaStromEcommerce } from "./entries/media-strom";
import { orlikGallery } from "./entries/orlik-gallery";
import { beepink } from "./entries/beepink";
import { discoverAthensTours } from "./entries/discover-athens-tours";
import { stihl } from "./entries/stihl";
import { barberszone } from "./entries/barberszone";
import { seajets } from "./entries/seajets";
import { autoplus } from "./entries/autoplus";
import { soEasy } from "./entries/so-easy";
import { onisisConsulting } from "./entries/onisis-consulting";
import { poep } from "./entries/poep";
import { octopus } from "./entries/octopus";
import { timeonline } from "./entries/timeonline";
import { echoDeco } from "./entries/echo-deco";
import { slimbites } from "./entries/slimbites";
import { humanpet } from "./entries/humanpet";
import { tasoulisJewellery } from "./entries/tasoulis-jewellery";
import { tziolisMarine } from "./entries/tziolis-marine";
import { theOmni } from "./entries/the-omni";
import { ktenion } from "./entries/ktenion";
import { jebelK9 } from "./entries/jebel-k9";

export * from "./types";
export * from "./taxonomy";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Project registry.
 *
 * Two tiers, driven entirely by `featured`:
 *  - featured: true  → full case study (Featured Projects spotlight + own
 *    detail page with gallery/challenge/solution/outcome)
 *  - featured: false → compact "Professional Contributions" entry (logo,
 *    title, org, role, 1–2 sentences, tech — see ContributionCard)
 *
 * Real projects: create one file per project under `entries/`
 * (e.g. `entries/my-project.ts` exporting a `Project`), import it here and
 * add it to the array below.
 *
 * `samples.ts` holds the original placeholder case studies used before real
 * projects existed. They are intentionally NOT imported below now that the
 * portfolio has real featured + contribution entries — kept in the codebase
 * for reference/reuse, not for the live site.
 *
 * This file is the only place the rest of the app reads projects from,
 * which is also the future CMS seam: swap the array for a fetch and the
 * whole site follows.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const registry: Project[] = [
  pawera,
  nbgMobileBanking,
  nbgNext,
  orlikGallery,
  mediaStromEcommerce,
  beepink,
  discoverAthensTours,
  stihl,
  barberszone,
  seajets,
  autoplus,
  soEasy,
  onisisConsulting,
  poep,
  octopus,
  timeonline,
  echoDeco,
  slimbites,
  humanpet,
  tasoulisJewellery,
  tziolisMarine,
  theOmni,
  ktenion,
  jebelK9,
];

/** All projects, sorted by manual display order. */
export const projects: Project[] = [...registry].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

/**
 * Related projects: explicit `relatedProjects` slugs first,
 * then same-category projects, never the project itself.
 */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const explicit = (project.relatedProjects ?? [])
    .map(getProject)
    .filter((p): p is Project => Boolean(p));
  const sameCategory = projects.filter(
    (p) =>
      p.slug !== project.slug &&
      p.category === project.category &&
      !explicit.some((e) => e.slug === p.slug),
  );
  return [...explicit, ...sameCategory].slice(0, limit);
}

/** Facet values actually present in the data — drives the listing filters. */
export interface ProjectFacets {
  categories: ProjectCategory[];
  participations: ParticipationType[];
  technologies: string[];
  industries: { key: string; label: Record<Locale, string> }[];
}

export function getProjectFacets(): ProjectFacets {
  const categories = [...new Set(projects.map((p) => p.category))];
  const participations = [...new Set(projects.map((p) => p.participation))];
  const technologies = [...new Set(projects.flatMap((p) => p.technologies))].sort();
  const industries = [
    ...new Map(
      projects.map((p) => [p.industryKey, { key: p.industryKey, label: p.industry }]),
    ).values(),
  ];
  return { categories, participations, technologies, industries };
}
