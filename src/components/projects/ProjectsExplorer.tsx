"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  projects,
  getProjectFacets,
  participationInfo,
  categoryLabels,
  type Project,
  type ProjectCategory,
  type ParticipationType,
} from "@/data/projects";
import { localeHref, type Locale } from "@/lib/i18n";
import { projectsUi } from "@/content/projects-ui";
import { ProjectCard } from "./ProjectCard";
import { ContributionCard } from "./ContributionCard";
import { LogoWall } from "./LogoWall";
import { ProjectMedia } from "./ProjectMedia";
import { CtaLink } from "@/components/ui/CtaLink";

interface Filters {
  category: ProjectCategory | null;
  participation: ParticipationType | null;
  technology: string | null;
  industry: string | null;
}

const noFilters: Filters = {
  category: null,
  participation: null,
  technology: null,
  industry: null,
};

function matches(p: Project, f: Filters): boolean {
  if (f.category && p.category !== f.category) return false;
  if (f.participation && p.participation !== f.participation) return false;
  if (f.technology && !p.technologies.includes(f.technology)) return false;
  if (f.industry && p.industryKey !== f.industry) return false;
  return true;
}

/**
 * Projects listing: editorial featured spotlight + filterable grid.
 * Filters only appear for facets with more than one value, so the page
 * stays curated while the portfolio is small and scales to 15–20 projects.
 */
export function ProjectsExplorer({ locale }: { locale: Locale }) {
  const t = projectsUi[locale];
  const reduce = useReducedMotion();
  const [filters, setFilters] = useState<Filters>(noFilters);
  const facets = useMemo(() => getProjectFacets(), []);

  const active = Boolean(
    filters.category || filters.participation || filters.technology || filters.industry,
  );
  const visible = projects.filter((p) => matches(p, filters));
  const featured = projects.filter((p) => p.featured);
  const showSpotlight = !active && featured.length > 0;
  const gridProjects = showSpotlight
    ? visible.filter((p) => !p.featured)
    : visible;

  const set = (patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch }));

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      {/* filter rail */}
      <div className="border-y border-ink/10 py-6">
        <div className="space-y-4">
          <FilterRow
            label={t.filters.category}
            allLabel={t.filters.all}
            options={facets.categories.map((c) => ({ value: c, label: categoryLabels[c][locale] }))}
            selected={filters.category}
            onSelect={(v) => set({ category: v as ProjectCategory | null })}
          />
          <FilterRow
            label={t.filters.participation}
            allLabel={t.filters.all}
            options={facets.participations.map((p) => ({
              value: p,
              label: participationInfo[p].label[locale],
            }))}
            selected={filters.participation}
            onSelect={(v) => set({ participation: v as ParticipationType | null })}
          />
          <FilterRow
            label={t.filters.technology}
            allLabel={t.filters.all}
            options={facets.technologies.map((tech) => ({ value: tech, label: tech }))}
            selected={filters.technology}
            onSelect={(v) => set({ technology: v })}
          />
          <FilterRow
            label={t.filters.industry}
            allLabel={t.filters.all}
            options={facets.industries.map((i) => ({ value: i.key, label: i.label[locale] }))}
            selected={filters.industry}
            onSelect={(v) => set({ industry: v })}
          />
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/10 pt-4">
          <p className="eyebrow text-slate" aria-live="polite">
            {t.filters.results(visible.length)}
          </p>
          {active && (
            <button
              type="button"
              onClick={() => setFilters(noFilters)}
              className="eyebrow text-brass underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t.filters.clear}
            </button>
          )}
        </div>
      </div>

      {/* empty state */}
      {visible.length === 0 && (
        <div className="border-x border-b border-ink/10 px-8 py-20 text-center">
          <p className="display text-2xl">{t.filters.empty.title}</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
            {t.filters.empty.body}
          </p>
          <button
            type="button"
            onClick={() => setFilters(noFilters)}
            className="mt-7 border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-brass hover:text-brass"
          >
            {t.filters.empty.action}
          </button>
        </div>
      )}

      {/* featured spotlight — editorial alternating rows (unfiltered view only) */}
      {showSpotlight && (
        <section className="mt-16" aria-label={t.listing.featuredLabel}>
          <p className="eyebrow mb-10 text-brass">{t.listing.featuredLabel}</p>
          <div className="space-y-20">
            {featured.map((p, i) => (
              <article
                key={p.slug}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={localeHref(locale, `/projects/${p.slug}`)}
                  className="block border border-ink/10 bg-ink p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
                  aria-label={p.title[locale]}
                >
                  <ProjectMedia project={p} locale={locale} priority={i === 0} />
                </Link>
                <div>
                  {p.logo && (
                    <div className="mb-5 flex h-12 w-32 items-center justify-start">
                      <Image
                        src={p.logo}
                        alt={p.organization[locale]}
                        width={200}
                        height={80}
                        className="h-full w-auto max-w-full object-contain object-left"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <span className="eyebrow border border-ink/20 px-3 py-1.5 text-slate">
                      {participationInfo[p.participation].label[locale]}
                    </span>
                    {p.isSample && (
                      <span className="eyebrow border border-dashed border-ink/25 px-3 py-1.5 text-slate/80">
                        {t.listing.sampleBadge}
                      </span>
                    )}
                  </div>
                  <p className="eyebrow mt-4 text-brass">{p.industry[locale]}</p>
                  <h2 className="display mt-3 text-2xl sm:text-3xl">
                    <Link
                      href={localeHref(locale, `/projects/${p.slug}`)}
                      className="transition-colors hover:text-brass"
                    >
                      {p.title[locale]}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-slate">
                    {p.shortDescription[locale]}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.detail.technologiesLabel}>
                    {p.technologies.slice(0, 4).map((tech) => (
                      <li key={tech} className="eyebrow border border-ink/15 px-2.5 py-1 text-slate">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <CtaLink
                      href={localeHref(locale, `/projects/${p.slug}`)}
                      variant="text"
                      tone="onLight"
                    >
                      {t.listing.view}
                    </CtaLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Where I've contributed — pure logo wall, anchor-linked to the cards below (unfiltered view only) */}
      {showSpotlight && gridProjects.length > 0 && (
        <section className="mt-24 border-t border-ink/10 pt-16" aria-label={t.listing.trustedHeading}>
          <p className="eyebrow mb-10 text-center text-slate sm:text-left">
            {t.listing.trustedHeading}
          </p>
          <LogoWall projects={gridProjects} locale={locale} />
        </section>
      )}

      {/* grid / professional contributions */}
      {gridProjects.length > 0 && (
        <section className="mt-20" aria-label={t.listing.allLabel}>
          {showSpotlight && (
            <div className="mb-10">
              <p className="eyebrow text-slate">{t.listing.allLabel}</p>
              <p className="mt-2 max-w-xl text-sm text-slate">{t.listing.contributionsIntro}</p>
            </div>
          )}
          <motion.div layout={!reduce}>
            <AnimatePresence mode="popLayout" initial={false}>
              {gridProjects.map((p) => (
                <motion.div
                  key={p.slug}
                  layout={!reduce}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p.featured ? (
                    <div className="py-4">
                      <ProjectCard project={p} locale={locale} />
                    </div>
                  ) : (
                    <ContributionCard project={p} locale={locale} />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      )}
    </div>
  );
}

function FilterRow({
  label,
  allLabel,
  options,
  selected,
  onSelect,
}: {
  label: string;
  allLabel: string;
  options: { value: string; label: string }[];
  selected: string | null;
  onSelect: (value: string | null) => void;
}) {
  // A facet with a single value can't narrow anything — keep the rail clean.
  if (options.length < 2) return null;

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
      <span className="eyebrow w-36 shrink-0 text-slate">{label}</span>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={label}>
        <FilterChip active={selected === null} onClick={() => onSelect(null)}>
          {allLabel}
        </FilterChip>
        {options.map((o) => (
          <FilterChip
            key={o.value}
            active={selected === o.value}
            onClick={() => onSelect(selected === o.value ? null : o.value)}
          >
            {o.label}
          </FilterChip>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`eyebrow border px-3 py-1.5 transition-colors ${
        active
          ? "border-brass bg-brass/10 text-ink"
          : "border-ink/15 text-slate hover:border-ink/40 hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
