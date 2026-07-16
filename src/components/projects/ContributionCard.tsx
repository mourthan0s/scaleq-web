import Image from "next/image";
import type { Project } from "@/data/projects";
import { participationInfo } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

/** First letters of up to two words — fallback mark when no logo is set. */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Compact "Professional Contributions" entry — logo-forward, no gallery,
 * no case-study narrative. Anchored (`id`) so the Logo Wall above can jump
 * straight to it.
 */
export function ContributionCard({ project, locale }: { project: Project; locale: Locale }) {
  const participation = participationInfo[project.participation];
  const org = project.organization[locale];

  return (
    <article
      id={`contribution-${project.slug}`}
      className="flex scroll-mt-28 flex-col gap-5 border-t border-ink/10 py-8 sm:flex-row sm:items-start"
    >
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center border border-ink/10 sm:h-20 sm:w-20 ${
          project.logoBackground === "dark" ? "bg-ink" : "bg-paper-2/60"
        }`}
      >
        {project.logo ? (
          <Image
            src={project.logo}
            alt={org}
            width={72}
            height={72}
            className="h-full w-full object-contain p-2.5"
          />
        ) : (
          <span className="eyebrow text-slate" aria-hidden="true">
            {initials(org)}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow border border-ink/15 px-2.5 py-1 text-slate">
            {participation.label[locale]}
          </span>
          {project.period && <span className="eyebrow text-slate">{project.period}</span>}
        </div>
        <h3 className="display mt-2 text-xl">{project.title[locale]}</h3>
        <p className="eyebrow mt-1 text-brass">
          {org}
          {project.role && ` · ${project.role[locale]}`}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
          {project.shortDescription[locale]}
        </p>
        {project.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-ink/15 px-2.5 py-1 font-mono text-xs text-slate"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
