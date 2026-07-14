import type { Locale } from "@/lib/i18n";
import type { Project, ProjectCategory, ParticipationType } from "./types";
import { sampleProjects } from "./samples";

export * from "./types";
export * from "./taxonomy";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Project registry.
 *
 * Real projects: create one file per project under `entries/`
 * (e.g. `entries/my-project.ts` exporting a `Project`), import it here and
 * add it to the array below. Delete `sampleProjects` once real content lands.
 *
 * This file is the only place the rest of the app reads projects from,
 * which is also the future CMS seam: swap the array for a fetch and the
 * whole site follows.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const registry: Project[] = [
  // …real projects will be registered here, one import per project…
  ...sampleProjects,
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
