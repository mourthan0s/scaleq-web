import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeHref, locales, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { mainNav } from "@/content/nav";
import { projectsUi } from "@/content/projects-ui";
import {
  projects,
  getProject,
  getRelatedProjects,
  participationInfo,
  categoryLabels,
  statusLabels,
  defaultCollaborativeDisclaimer,
  anonymizedNote,
  type Project,
} from "@/data/projects";
import { getService } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/ui/Container";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata({
    locale: l,
    path: `/projects/${slug}`,
    title: project.seo?.title?.[l] ?? `${project.title[l]} | SCALEQ`,
    description: project.seo?.description?.[l] ?? project.shortDescription[l],
  });
}

/** Narrative rows rendered only when the project defines them. */
function narrativeRows(project: Project, l: Locale, t: (typeof projectsUi)["el"]["detail"]) {
  return [
    { label: t.challengeLabel, value: project.challenge?.[l] },
    { label: t.approachLabel, value: project.approach?.[l] },
    { label: t.solutionLabel, value: project.solution?.[l] },
  ].filter((row): row is { label: string; value: string } => Boolean(row.value));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const project = getProject(slug);
  if (!project) notFound();
  const t = projectsUi[l].detail;
  const projectsLabel = mainNav.find((n) => n.path === "/projects")!.label[l];

  const participation = participationInfo[project.participation];
  const isCollaborative = project.participation === "collaborative";

  const facts = [
    { label: t.organizationLabel, value: project.organization[l] },
    { label: t.industryLabel, value: project.industry[l] },
    { label: t.categoryLabel, value: categoryLabels[project.category][l] },
    { label: t.periodLabel, value: project.period },
    { label: t.statusLabel, value: statusLabels[project.status][l] },
    { label: t.platformsLabel, value: project.platforms.join(" · ") },
  ].filter((f) => f.value);

  const hasContribution = Boolean(
    project.role || project.teamContext || project.responsibilities?.[l]?.length || project.contributionSummary,
  );

  const gallery = project.allowScreenshots
    ? project.images.filter((img) => img.kind === "gallery" || img.kind === "desktop")
    : [];
  const mobileShots = project.allowScreenshots
    ? project.images.filter((img) => img.kind === "mobile")
    : [];

  const disclaimer =
    project.disclaimer?.[l] ??
    (isCollaborative ? defaultCollaborativeDisclaimer[l] : undefined);

  const links = project.links;
  const linkItems = [
    links?.website && { label: t.websiteLink, url: links.website },
    links?.appStore && { label: t.appStoreLink, url: links.appStore },
    links?.googlePlay && { label: t.googlePlayLink, url: links.googlePlay },
    ...(links?.other?.map((o) => ({ label: o.label[l], url: o.url })) ?? []),
  ].filter((x): x is { label: string; url: string } => Boolean(x));

  const related = getRelatedProjects(project);
  const rows = narrativeRows(project, l, t);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(l, [
          { name: "SCALEQ", path: "/" },
          { name: projectsLabel, path: "/projects" },
          { name: project.title[l], path: `/projects/${project.slug}` },
        ])}
      />

      {/* header */}
      <div className="bg-ink pt-36 pb-14 text-paper sm:pt-44">
        <Container>
          <nav aria-label="Breadcrumb">
            <Link
              href={localeHref(l, "/projects")}
              className="eyebrow text-steel transition-colors hover:text-brass"
            >
              ← {t.back}
            </Link>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="eyebrow border border-brass/50 px-3 py-1.5 text-brass">
              {participation.label[l]}
            </span>
            <span className="eyebrow border border-steel/30 px-3 py-1.5 text-steel">
              {statusLabels[project.status][l]}
            </span>
            {project.isSample && (
              <span className="eyebrow border border-dashed border-steel/40 px-3 py-1.5 text-steel">
                {projectsUi[l].listing.sampleBadge}
              </span>
            )}
          </div>
          <p className="mt-2 text-xs text-steel/80">{participation.hint[l]}</p>

          {project.isSample && (
            <p className="eyebrow mt-5 inline-block border border-steel/30 px-3 py-1.5 text-steel">
              {t.sampleNotice}
            </p>
          )}

          <h1 className="display mt-5 max-w-3xl text-3xl sm:text-5xl">{project.title[l]}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-steel">
            {project.shortDescription[l]}
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow text-steel">{f.label}</dt>
                <dd className="mt-1.5 text-sm text-paper/90">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* primary visual */}
      <div className="bg-ink pb-20">
        <Container>
          <Reveal>
            <div className="border border-steel/20 bg-ink-2 p-6 sm:p-10">
              <ProjectMedia project={project} locale={l} priority />
            </div>
          </Reveal>
        </Container>
      </div>

      <div className="paper-surface text-ink">
        <Container className="py-16 lg:py-24">
          {/* contribution — the most prominent narrative block */}
          {hasContribution && (
            <Reveal>
              <section
                aria-label={t.roleHeading}
                className="border-2 border-brass/60 bg-paper-2/50 p-8 sm:p-12"
              >
                <p className="eyebrow text-brass">{t.roleHeading}</p>
                {project.contributionSummary && (
                  <p className="display mt-4 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                    {project.contributionSummary[l]}
                  </p>
                )}
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {project.role && (
                    <div>
                      <h2 className="eyebrow text-slate">{t.roleLabel}</h2>
                      <p className="mt-2 text-sm leading-relaxed">{project.role[l]}</p>
                    </div>
                  )}
                  {project.teamContext && (
                    <div>
                      <h2 className="eyebrow text-slate">{t.teamLabel}</h2>
                      <p className="mt-2 text-sm leading-relaxed">{project.teamContext[l]}</p>
                    </div>
                  )}
                  {project.responsibilities && project.responsibilities[l].length > 0 && (
                    <div>
                      <h2 className="eyebrow text-slate">{t.responsibilitiesLabel}</h2>
                      <ul className="mt-2 space-y-1.5">
                        {project.responsibilities[l].map((r) => (
                          <li key={r} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </Reveal>
          )}

          {/* full description */}
          {project.description && project.description[l].length > 0 && (
            <Reveal>
              <div className="grid gap-4 border-b border-ink/10 py-12 lg:grid-cols-[280px_1fr] lg:gap-20">
                <h2 className="display text-2xl">{t.overviewLabel}</h2>
                <div className="max-w-2xl space-y-5">
                  {project.description[l].map((para, i) => (
                    <p key={i} className="leading-relaxed text-slate">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* challenge / approach / solution */}
          {rows.map((section) => (
            <Reveal key={section.label}>
              <div className="grid gap-4 border-b border-ink/10 py-10 lg:grid-cols-[280px_1fr] lg:gap-20">
                <h2 className="display text-2xl">{section.label}</h2>
                <p className="max-w-2xl leading-relaxed text-slate">{section.value}</p>
              </div>
            </Reveal>
          ))}

          {/* gallery */}
          {(gallery.length > 0 || mobileShots.length > 0) && (
            <Reveal>
              <div className="border-b border-ink/10 py-12">
                <h2 className="eyebrow text-slate">{t.galleryLabel}</h2>
                {gallery.length > 0 && (
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {gallery.map((img) => (
                      <figure key={img.src} className="border border-ink/10 bg-ink p-4">
                        <div className="relative aspect-[8/5] w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={img.alt[l]}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                )}
                {mobileShots.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {mobileShots.map((img) => (
                      <figure key={img.src} className="border border-ink/10 bg-ink p-3">
                        <div className="relative aspect-[9/19] w-full overflow-hidden">
                          <Image
                            src={img.src}
                            alt={img.alt[l]}
                            fill
                            sizes="(min-width: 640px) 25vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}

          {/* features / systems / stack */}
          <Reveal>
            <div className="grid gap-10 border-b border-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-[280px_1fr_1fr] lg:gap-20">
              <h2 className="display text-2xl">
                {project.keyFeatures ? t.featuresLabel : t.systemsLabel}
              </h2>
              <div>
                {project.keyFeatures && project.keyFeatures[l].length > 0 ? (
                  <ul className="space-y-2.5">
                    {project.keyFeatures[l].map((f) => (
                      <li key={f} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  project.deliveredSystems && (
                    <ul className="space-y-2.5">
                      {project.deliveredSystems[l].map((s) => (
                        <li key={s} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
              <div className="space-y-7">
                <div>
                  <h3 className="eyebrow text-slate">{t.technologiesLabel}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="border border-ink/15 px-3 py-1.5 font-mono text-xs text-slate">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.integrations && project.integrations.length > 0 && (
                  <div>
                    <h3 className="eyebrow text-slate">{t.integrationsLabel}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.integrations.map((item) => (
                        <li key={item} className="border border-ink/15 px-3 py-1.5 font-mono text-xs text-slate">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* outcome */}
          {project.outcome && (
            <Reveal>
              <div className="border-b border-ink/10 py-12">
                <div className="border-l-2 border-brass pl-6">
                  <h2 className="eyebrow text-slate">{t.outcomeLabel}</h2>
                  <p className="display mt-3 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                    {project.outcome[l]}
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          {/* external links */}
          {linkItems.length > 0 && (
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 border-b border-ink/10 py-10">
                <h2 className="eyebrow text-slate">{t.linksLabel}</h2>
                {linkItems.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brass hover:text-brass"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          {/* disclaimers */}
          {(disclaimer || project.confidentiality === "anonymized") && (
            <Reveal>
              <div className="py-10">
                <p className="eyebrow text-slate">{t.disclaimerLabel}</p>
                {project.confidentiality === "anonymized" && (
                  <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate/80">
                    {anonymizedNote[l]}
                  </p>
                )}
                {disclaimer && (
                  <p className="mt-3 max-w-3xl text-xs leading-relaxed text-slate/80">
                    {disclaimer}
                  </p>
                )}
              </div>
            </Reveal>
          )}

          {/* related projects */}
          {related.length > 0 && (
            <Reveal>
              <div className="border-t border-ink/10 pt-12">
                <h2 className="eyebrow text-slate">{t.relatedProjectsLabel}</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((p) => (
                    <ProjectCard key={p.slug} project={p} locale={l} />
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {/* related services + CTA */}
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-10">
              <div>
                <h2 className="eyebrow text-slate">{t.relatedServicesLabel}</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.relatedServices.map((slug2) => {
                    const svc = getService(slug2);
                    if (!svc) return null;
                    return (
                      <li key={slug2}>
                        <Link
                          href={`${localeHref(l, "/services")}#${slug2}`}
                          className="eyebrow border border-ink/15 px-2.5 py-1 text-slate transition-colors hover:border-brass hover:text-ink"
                        >
                          {svc.title[l]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <CtaLink href={localeHref(l, "/contact")} variant="solid" tone="onLight">
                {t.cta}
              </CtaLink>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
