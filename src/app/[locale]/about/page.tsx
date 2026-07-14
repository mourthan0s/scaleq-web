import type { Metadata } from "next";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { aboutContent } from "@/content/about";
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
  return pageMetadata({ locale: l, path: "/about", ...aboutContent[l].meta });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = aboutContent[l];

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} heading={t.heroHeading} intro={t.heroBody} />

      {/* philosophy */}
      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <Reveal>
              <h2 className="display text-3xl">{t.philosophy.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {t.philosophy.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className={`leading-relaxed ${i === 0 ? "display text-xl sm:text-2xl" : "text-slate"}`}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* principles */}
          <div className="mt-24 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <Reveal>
              <h2 className="display text-3xl">{t.principles.heading}</h2>
            </Reveal>
            <div className="grid gap-x-12 sm:grid-cols-2">
              {t.principles.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 0.07}>
                  <div className="border-t border-ink/10 py-6">
                    <p className="eyebrow text-brass">{String(i + 1).padStart(2, "0")}</p>
                    <h3 className="display mt-2 text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* positioning & working model */}
      <Section theme="ink">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-3xl">{t.positioning.heading}</h2>
          </Reveal>
          <div className="space-y-6">
            {t.positioning.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? "display text-xl leading-relaxed sm:text-2xl" : "leading-relaxed text-steel"}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-3xl">{t.workingModel.heading}</h2>
          </Reveal>
          <div>
            {t.workingModel.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="grid gap-2 border-t border-steel/15 py-6 sm:grid-cols-[240px_1fr] sm:gap-8">
                  <h3 className="display text-lg text-paper">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* quality standards + partnership */}
      <div className="paper-surface text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <Reveal>
              <h2 className="display text-3xl">{t.quality.heading}</h2>
            </Reveal>
            <ul className="space-y-4">
              {t.quality.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <li className="flex gap-4 border-b border-ink/10 pb-4">
                    <span className="eyebrow mt-1 text-brass">Q{i + 1}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-20">
            <Reveal>
              <h2 className="display text-3xl">{t.partnership.heading}</h2>
            </Reveal>
            <div className="space-y-6">
              {t.partnership.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="leading-relaxed text-slate">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-6 border-t border-ink/10 pt-8">
                  <h3 className="display text-xl">{t.cta.heading}</h3>
                  <CtaLink href={localeHref(l, "/contact")} variant="solid" tone="onLight">
                    {t.cta.button}
                  </CtaLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
