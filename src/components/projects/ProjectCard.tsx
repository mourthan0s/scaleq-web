import Link from "next/link";
import type { Project } from "@/data/projects";
import { participationInfo, categoryLabels } from "@/data/projects";
import { localeHref, type Locale } from "@/lib/i18n";
import { projectsUi } from "@/content/projects-ui";
import { ProjectMedia } from "./ProjectMedia";

/** Compact editorial card used in the project grid and related-projects rows. */
export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = projectsUi[locale];
  const href = localeHref(locale, `/projects/${project.slug}`);

  return (
    <article className="group flex h-full flex-col border border-ink/10 bg-paper transition-shadow duration-500 hover:shadow-[0_18px_50px_-24px_rgba(11,13,17,0.35)]">
      <Link href={href} aria-label={project.title[locale]} className="block bg-ink p-5">
        <ProjectMedia project={project} locale={locale} sizes="(min-width: 1024px) 33vw, 100vw" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow text-brass">{categoryLabels[project.category][locale]}</span>
          <span className="text-ink/20" aria-hidden="true">·</span>
          <span className="eyebrow text-slate">{project.industry[locale]}</span>
        </div>
        <h3 className="display mt-3 text-xl leading-snug">
          <Link href={href} className="transition-colors hover:text-brass">
            {project.title[locale]}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate">
          {project.shortDescription[locale]}
        </p>
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap items-center gap-2 border-t border-ink/10 pt-4">
            <span className="eyebrow border border-ink/15 px-2.5 py-1 text-slate">
              {participationInfo[project.participation].label[locale]}
            </span>
            {project.isSample && (
              <span className="eyebrow border border-dashed border-ink/25 px-2.5 py-1 text-slate/80">
                {t.listing.sampleBadge}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
