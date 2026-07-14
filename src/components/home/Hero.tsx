"use client";

import { motion, useReducedMotion } from "framer-motion";
import { localeHref, type Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { CtaLink } from "@/components/ui/CtaLink";
import { LatticeCanvas } from "@/components/graphics/LatticeCanvas";

export function Hero({ locale }: { locale: Locale }) {
  const t = homeContent[locale].hero;
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-ink">
      {/* The Lattice — a single unit multiplying into a system */}
      <LatticeCanvas
        mode="grow"
        className="absolute inset-y-0 right-0 h-full w-full opacity-70 lg:w-[58%] lg:opacity-100"
      />
      {/* fade the lattice under the text column */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-transparent lg:via-ink/60" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8 lg:px-10">
        <motion.p className="eyebrow text-brass" {...rise(0.1)}>
          {t.eyebrow}
        </motion.p>

        <h1 className="display mt-6 max-w-3xl text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
          <motion.span className="block" {...rise(0.25)}>
            {t.headline1}
          </motion.span>
          <motion.span className="block text-brass" {...rise(0.4)}>
            {t.headline2}
          </motion.span>
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-steel sm:text-lg"
          {...rise(0.55)}
        >
          {t.supporting}
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center gap-4" {...rise(0.7)}>
          <CtaLink href={localeHref(locale, "/contact")} variant="solid" tone="onDark">
            {t.ctaPrimary}
          </CtaLink>
          <CtaLink href={localeHref(locale, "/approach")} variant="outline" tone="onDark">
            {t.ctaSecondary}
          </CtaLink>
        </motion.div>
      </div>

      {/* scroll hint with measurement tick */}
      <motion.div
        className="absolute bottom-8 left-5 hidden items-center gap-3 text-steel sm:flex sm:left-8 lg:left-10"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        aria-hidden="true"
      >
        <span className="relative block h-10 w-px overflow-hidden bg-steel/30">
          {!reduce && (
            <motion.span
              className="absolute left-0 top-0 h-3 w-px bg-brass"
              animate={{ y: [0, 40] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeIn" }}
            />
          )}
        </span>
        <span className="eyebrow">{t.scrollHint}</span>
      </motion.div>
    </section>
  );
}
