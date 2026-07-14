"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { capabilities } from "@/data/capabilities";
import { CapabilityDiagram } from "@/components/graphics/CapabilityDiagram";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Core capabilities as an editorial index: an interactive ledger where each
 * row activates its own animated diagram — no icon-card grid.
 */
export function Capabilities({ locale }: { locale: Locale }) {
  const t = homeContent[locale].capabilities;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = capabilities[active];

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* index list */}
          <div role="list">
            {capabilities.map((cap, i) => {
              const isActive = i === active;
              return (
                <div key={cap.slug} role="listitem" className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`flex w-full items-baseline gap-5 py-5 text-left transition-colors sm:gap-8 ${
                      isActive ? "text-ink" : "text-slate hover:text-ink"
                    }`}
                  >
                    <span className={`eyebrow ${isActive ? "text-brass" : ""}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display flex-1 text-xl sm:text-2xl">{cap.title[locale]}</span>
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.3 }}
                      className={`text-lg leading-none ${isActive ? "text-brass" : "text-slate/60"}`}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-lg pb-6 pl-10 text-sm leading-relaxed text-slate sm:pl-14 sm:text-base">
                          {cap.description[locale]}
                        </p>
                        {/* mobile: diagram inline */}
                        <div className="mb-6 ml-10 h-36 w-36 sm:ml-14 lg:hidden">
                          <CapabilityDiagram type={cap.diagram} active />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* desktop: sticky diagram panel */}
          <div className="hidden lg:block">
            <div className="sticky top-32 border border-ink/10 bg-paper-2/60 p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="aspect-square"
                >
                  <CapabilityDiagram type={current.diagram} active />
                </motion.div>
              </AnimatePresence>
              <p className="eyebrow mt-6 text-center text-slate">
                {String(active + 1).padStart(2, "0")} — {current.title[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
