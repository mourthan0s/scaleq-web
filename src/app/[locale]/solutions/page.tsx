import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { solutionsPage } from "@/content/pages";
import { solutions } from "@/data/solutions";
import { getService } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/solutions", ...solutionsPage[l].meta });
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = solutionsPage[l];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-x-12 sm:grid-cols-2">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={(i % 2) * 0.07}>
                <article
                  id={solution.slug}
                  className="flex h-full flex-col border-t border-ink/10 py-10 scroll-mt-28"
                >
                  <p className="eyebrow text-brass">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="display mt-3 text-2xl">{solution.title[l]}</h2>
                  <p className="mt-4 leading-relaxed text-slate">{solution.description[l]}</p>

                  <div className="mt-6 border-l-2 border-brass pl-4">
                    <h3 className="eyebrow text-slate">{t.outcomeLabel}</h3>
                    <p className="mt-1.5 font-medium leading-snug">{solution.outcome[l]}</p>
                  </div>

                  <div className="mt-auto pt-6">
                    <h3 className="eyebrow text-slate">{t.relatedLabel}</h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {solution.relatedServices.map((slug) => {
                        const svc = getService(slug);
                        if (!svc) return null;
                        return (
                          <li key={slug}>
                            <Link
                              href={`${localeHref(l, "/services")}#${slug}`}
                              className="eyebrow border border-ink/15 px-2.5 py-1 text-slate transition-colors hover:border-brass hover:text-ink"
                            >
                              {svc.title[l]}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 border-t border-ink/10 pt-10">
            <CtaLink href={localeHref(l, "/contact")} variant="solid" tone="onLight">
              {t.cta}
            </CtaLink>
          </div>
        </div>
      </div>
    </>
  );
}
