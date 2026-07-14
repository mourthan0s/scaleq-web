import Link from "next/link";
import { localeHref, type Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { DeviceMockup } from "@/components/graphics/DeviceMockup";

/**
 * Selected work — data-driven case studies with generated interface mockups.
 * Sample entries carry a visible "demonstration" badge until real cases land.
 */
export function SelectedWork({ locale }: { locale: Locale }) {
  const t = homeContent[locale].work;

  return (
    <section className="paper-surface text-ink">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="mb-10 flex items-center gap-4 text-slate sm:mb-14" aria-hidden="true">
          <span className="eyebrow text-brass">{t.index}</span>
          <span className="h-px flex-1 bg-ink/15" />
          <span className="eyebrow">{t.label}</span>
        </div>

        <Reveal>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">{t.heading}</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate">{t.intro}</p>
        </Reveal>

        <div className="mt-14 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link
                  href={localeHref(locale, `/projects/${p.slug}`)}
                  className="group block border border-ink/10 bg-ink p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
                  aria-label={p.title[locale]}
                >
                  <DeviceMockup variant={p.mockup} title={p.title[locale]} />
                </Link>
                <div>
                  {p.isSample && (
                    <p className="eyebrow mb-4 inline-block border border-ink/20 px-3 py-1.5 text-slate">
                      {t.sampleBadge}
                    </p>
                  )}
                  <p className="eyebrow text-brass">{p.industry[locale]}</p>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">
                    <Link
                      href={localeHref(locale, `/projects/${p.slug}`)}
                      className="transition-colors hover:text-brass"
                    >
                      {p.title[locale]}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-slate">{p.challenge[locale]}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
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
                      {t.viewCase}
                    </CtaLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <CtaLink href={localeHref(locale, "/projects")} variant="outline" tone="onLight">
            {t.viewAll}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
