import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeHref, locales, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { projectsPage } from "@/content/pages";
import { mainNav, ctaLabel } from "@/content/nav";
import { projects, getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/ui/Container";
import { DeviceMockup } from "@/components/graphics/DeviceMockup";
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
    title: `${project.title[l]} | SCALEQ`,
    description: project.challenge[l],
  });
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
  const t = projectsPage[l];
  const projectsLabel = mainNav.find((n) => n.path === "/projects")!.label[l];

  const facts: { label: string; value: string }[] = [
    { label: t.clientLabel, value: project.client[l] },
    { label: t.industryLabel, value: project.industry[l] },
  ];

  const narrative: { label: string; value: string }[] = [
    { label: t.challengeLabel, value: project.challenge[l] },
    { label: t.strategyLabel, value: project.strategy[l] },
    { label: t.solutionLabel, value: project.solution[l] },
  ];

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
              ← {t.backLabel}
            </Link>
          </nav>
          {project.isSample && (
            <p className="eyebrow mt-6 inline-block border border-steel/30 px-3 py-1.5 text-steel">
              {t.sampleNotice}
            </p>
          )}
          <h1 className="display mt-5 max-w-3xl text-3xl sm:text-5xl">{project.title[l]}</h1>

          <dl className="mt-8 flex flex-wrap gap-x-14 gap-y-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow text-steel">{f.label}</dt>
                <dd className="mt-1.5 text-sm text-paper/90">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* mockup */}
      <div className="bg-ink pb-20">
        <Container>
          <Reveal>
            <div className="border border-steel/20 bg-ink-2 p-6 sm:p-10">
              <DeviceMockup variant={project.mockup} title={project.title[l]} />
            </div>
          </Reveal>
        </Container>
      </div>

      {/* narrative */}
      <div className="paper-surface text-ink">
        <Container className="py-16 lg:py-24">
          {narrative.map((section) => (
            <Reveal key={section.label}>
              <div className="grid gap-4 border-t border-ink/10 py-10 lg:grid-cols-[280px_1fr] lg:gap-20">
                <h2 className="display text-2xl">{section.label}</h2>
                <p className="max-w-2xl leading-relaxed text-slate">{section.value}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="grid gap-10 border-t border-ink/10 py-10 sm:grid-cols-2 lg:grid-cols-[280px_1fr_1fr] lg:gap-20">
              <h2 className="display text-2xl">{t.systemsLabel}</h2>
              <ul className="space-y-2.5">
                {project.deliveredSystems[l].map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-ink/10 py-10">
              <div className="border-l-2 border-brass pl-6">
                <h2 className="eyebrow text-slate">{t.outcomeLabel}</h2>
                <p className="display mt-3 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                  {project.outcome[l]}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-10">
              <div>
                <h2 className="eyebrow text-slate">{t.relatedLabel}</h2>
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
                {ctaLabel[l]}
              </CtaLink>
            </div>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
