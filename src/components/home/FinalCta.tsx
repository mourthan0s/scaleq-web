import Link from "next/link";
import { localeHref, type Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { LatticeCanvas } from "@/components/graphics/LatticeCanvas";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";

/**
 * About teaser + final CTA. The lattice completes here — scattered points
 * converge into a finished, ordered system, closing the scaling narrative.
 */
export function FinalCta({ locale }: { locale: Locale }) {
  const about = homeContent[locale].aboutTeaser;
  const t = homeContent[locale].finalCta;

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* about teaser */}
      <div className="relative mx-auto max-w-6xl px-5 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-36">
        <div className="mb-10 flex items-center gap-4 text-steel sm:mb-14" aria-hidden="true">
          <span className="eyebrow text-brass">{about.index}</span>
          <span className="h-px flex-1 bg-steel/20" />
          <span className="eyebrow">{about.label}</span>
        </div>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">{about.heading}</h2>
            <div>
              <p className="leading-relaxed text-steel">{about.body}</p>
              <div className="mt-6">
                <CtaLink href={localeHref(locale, "/about")} variant="text" tone="onDark">
                  {about.cta}
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* final CTA with converging lattice */}
      <div className="relative mt-24 sm:mt-32">
        <LatticeCanvas mode="converge" className="absolute inset-0 h-full w-full opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 text-center sm:px-8 sm:py-40 lg:px-10">
          <Reveal>
            <p className="display mx-auto max-w-3xl text-3xl leading-tight sm:text-5xl">
              {t.line1}
              <span className="mt-2 block text-brass">{t.line2}</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-center gap-5">
              <CtaLink href={localeHref(locale, "/contact")} variant="solid" tone="onDark">
                {t.cta}
              </CtaLink>
              <Link
                href={localeHref(locale, "/approach")}
                className="text-sm text-steel underline-offset-4 transition-colors hover:text-paper hover:underline"
              >
                {t.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
