"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { localeHref, type Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { solutions } from "@/data/solutions";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";

/** A curated subset shown on the homepage — the full list lives at /solutions. */
const FEATURED = [
  "business-platform",
  "client-portal",
  "automation-system",
  "ai-workflow",
  "ecommerce-ecosystem",
  "analytics-dashboard",
];

/**
 * Solution → outcome selector: choosing a system shows the business result
 * it is built to change, keeping technology tied to consequence.
 */
export function SolutionsSection({ locale }: { locale: Locale }) {
  const t = homeContent[locale].solutions;
  const featured = solutions.filter((s) => FEATURED.includes(s.slug));
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = featured[active];

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

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-0" role="tablist" aria-label={t.label}>
            {featured.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`border px-4 py-2.5 text-left text-sm font-medium transition-colors lg:border-x-0 lg:border-t-0 lg:border-b lg:px-0 lg:py-4 ${
                    isActive
                      ? "border-brass bg-brass/10 text-ink lg:bg-transparent"
                      : "border-ink/15 text-slate hover:text-ink lg:border-ink/10"
                  }`}
                >
                  <span className={`eyebrow mr-3 hidden lg:inline ${isActive ? "text-brass" : "text-slate/50"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title[locale]}
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                role="tabpanel"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="border border-ink/10 bg-paper-2/50 p-8 sm:p-10"
              >
                <h3 className="display text-2xl sm:text-3xl">{current.title[locale]}</h3>
                <p className="mt-4 leading-relaxed text-slate">{current.description[locale]}</p>
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="eyebrow text-brass">{t.outcomeLabel}</p>
                  <p className="display mt-3 text-lg leading-snug sm:text-xl">
                    {current.outcome[locale]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12">
          <CtaLink href={localeHref(locale, "/solutions")} variant="text" tone="onLight">
            {t.cta}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
