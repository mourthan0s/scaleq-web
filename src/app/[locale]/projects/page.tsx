import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { projectsPage } from "@/content/pages";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { DeviceMockup } from "@/components/graphics/DeviceMockup";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/projects", ...projectsPage[l].meta });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = projectsPage[l];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="space-y-20">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Link
                    href={localeHref(l, `/projects/${p.slug}`)}
                    className="block border border-ink/10 bg-ink p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
                    aria-label={p.title[l]}
                  >
                    <DeviceMockup variant={p.mockup} title={p.title[l]} />
                  </Link>
                  <div>
                    {p.isSample && (
                      <p className="eyebrow mb-4 inline-block border border-ink/20 px-3 py-1.5 text-slate">
                        {t.sampleNotice}
                      </p>
                    )}
                    <p className="eyebrow text-brass">{p.industry[l]}</p>
                    <h2 className="display mt-3 text-2xl sm:text-3xl">
                      <Link
                        href={localeHref(l, `/projects/${p.slug}`)}
                        className="transition-colors hover:text-brass"
                      >
                        {p.title[l]}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-lg leading-relaxed text-slate">{p.challenge[l]}</p>
                    <div className="mt-7">
                      <CtaLink
                        href={localeHref(l, `/projects/${p.slug}`)}
                        variant="text"
                        tone="onLight"
                      >
                        {t.viewLabel}
                      </CtaLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
