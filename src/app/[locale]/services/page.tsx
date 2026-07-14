import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { servicesPage } from "@/content/pages";
import { services } from "@/data/services";
import { getSolution } from "@/data/solutions";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/services", ...servicesPage[l].meta });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = servicesPage[l];

  return (
    <>
      <JsonLd data={serviceSchema(l, services.map((s) => s.title[l]))} />
      <PageHero eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="grid gap-8 border-t border-ink/10 py-14 scroll-mt-28 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16"
              >
                <div>
                  <p className="eyebrow text-brass">S.{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display mt-3 text-2xl sm:text-3xl">{service.title[l]}</h2>
                  <div className="mt-6">
                    <h3 className="eyebrow text-slate">{t.problemLabel}</h3>
                    <p className="mt-2 leading-relaxed text-slate">{service.problem[l]}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="eyebrow text-slate">{t.audienceLabel}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{service.audience[l]}</p>
                  </div>
                </div>

                <div className="lg:pt-10">
                  <div>
                    <h3 className="eyebrow text-slate">{t.deliverablesLabel}</h3>
                    <ul className="mt-3 space-y-2.5">
                      {service.deliverables[l].map((d) => (
                        <li key={d} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <h3 className="eyebrow text-slate">{t.processLabel}</h3>
                    <ol className="mt-3 flex flex-wrap items-center gap-y-2 text-sm text-slate">
                      {service.process[l].map((step, j) => (
                        <li key={step} className="flex items-center">
                          <span className="font-medium text-ink">{step}</span>
                          {j < service.process[l].length - 1 && (
                            <span className="mx-3 text-brass" aria-hidden="true">→</span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
                    <div>
                      <h3 className="eyebrow text-slate">{t.relatedLabel}</h3>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {service.relatedSolutions.map((slug) => {
                          const sol = getSolution(slug);
                          if (!sol) return null;
                          return (
                            <li key={slug}>
                              <Link
                                href={`${localeHref(l, "/solutions")}#${slug}`}
                                className="eyebrow border border-ink/15 px-2.5 py-1 text-slate transition-colors hover:border-brass hover:text-ink"
                              >
                                {sol.title[l]}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <CtaLink href={localeHref(l, "/contact")} variant="text" tone="onLight">
                      {t.cta}
                    </CtaLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
