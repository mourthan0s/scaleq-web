import type { Metadata } from "next";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { approachContent } from "@/content/approach";
import { modelStages } from "@/data/model";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/approach", ...approachContent[l].meta });
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = approachContent[l];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />

      {/* The six stages, in full */}
      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">{t.stagesHeading}</h2>
          </Reveal>

          <ol className="mt-12">
            {modelStages.map((stage) => {
              const detail = t.stageDetails[stage.key];
              return (
                <Reveal key={stage.key}>
                  <li className="grid gap-6 border-t border-ink/10 py-12 lg:grid-cols-[220px_1fr_1fr] lg:gap-12">
                    <div>
                      <p className="eyebrow text-brass">{stage.index}</p>
                      <h3 className="display mt-2 text-2xl">{stage.title[l]}</h3>
                    </div>
                    <div>
                      <p className="leading-relaxed text-slate">{stage.description[l]}</p>
                      <h4 className="eyebrow mt-6 text-slate">{t.activitiesLabel}</h4>
                      <ul className="mt-3 space-y-2">
                        {detail.activities.map((a) => (
                          <li key={a} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-l-2 border-brass pl-5 lg:self-center">
                      <h4 className="eyebrow text-slate">{t.resultLabel}</h4>
                      <p className="display mt-2 text-lg leading-snug">{detail.result}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>

      {/* collaboration principles */}
      <Section theme="ink">
        <Reveal>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">{t.collaboration.heading}</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 sm:grid-cols-2">
          {t.collaboration.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.08}>
              <div className="border-t border-steel/15 py-7">
                <h3 className="display text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border border-steel/20 bg-ink-2 p-10 text-center sm:p-14">
            <h2 className="display text-2xl text-paper sm:text-3xl">{t.cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-steel">{t.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <CtaLink href={localeHref(l, "/contact")} variant="solid" tone="onDark">
                {t.cta.button}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
