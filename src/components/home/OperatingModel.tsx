"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { modelStages } from "@/data/model";

const brass = "#c6a15b";
const steel = "rgba(155,161,171,0.45)";
const faint = "rgba(155,161,171,0.18)";
const paper = "rgba(244,242,237,0.8)";

/**
 * One central system drawing that matures as each stage of the
 * SCALEQ operating model activates. Desktop: sticky scroll scene.
 * Mobile / reduced motion: stacked list with the completed system.
 */
function SystemVisual({ stage }: { stage: number }) {
  const on = (n: number) => stage >= n;
  const t = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  const blocks = [
    { x: 120, y: 120, w: 60, h: 60 },
    { x: 220, y: 120, w: 60, h: 60 },
    { x: 120, y: 220, w: 60, h: 60 },
    { x: 220, y: 220, w: 60, h: 60 },
  ];
  const satellites = [
    { x: 40, y: 40 },
    { x: 320, y: 40 },
    { x: 40, y: 320 },
    { x: 320, y: 320 },
  ];

  return (
    <svg viewBox="0 0 400 400" className="h-auto w-full" aria-hidden="true">
      {/* SQ.01 Understand — the exploratory survey ring */}
      <motion.g animate={{ opacity: on(0) ? 1 : 0 }} transition={t}>
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke={steel}
          strokeWidth="1"
          strokeDasharray="3 7"
          animate={{ opacity: on(1) ? 0.25 : 0.8, rotate: 0 }}
          transition={t}
        />
        {[45, 135, 225, 315].map((a) => (
          <motion.line
            key={a}
            x1={200 + 142 * Math.cos((a * Math.PI) / 180)}
            y1={200 + 142 * Math.sin((a * Math.PI) / 180)}
            x2={200 + 158 * Math.cos((a * Math.PI) / 180)}
            y2={200 + 158 * Math.sin((a * Math.PI) / 180)}
            stroke={brass}
            strokeWidth="1.4"
            animate={{ opacity: on(1) ? 0.3 : 1 }}
            transition={t}
          />
        ))}
      </motion.g>

      {/* SQ.02 Structure — the grid appears */}
      <motion.g animate={{ opacity: on(1) ? 1 : 0 }} transition={t}>
        {[100, 160, 220, 300].map((p) => (
          <g key={p}>
            <line x1={p} y1="100" x2={p} y2="300" stroke={faint} strokeWidth="1" />
            <line x1="100" y1={p} x2="300" y2={p} stroke={faint} strokeWidth="1" />
          </g>
        ))}
        <rect x="100" y="100" width="200" height="200" fill="none" stroke={steel} strokeWidth="1.2" />
      </motion.g>

      {/* SQ.03 Build — blocks fill in */}
      {blocks.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          fill={i === 0 ? "rgba(198,161,91,0.2)" : "rgba(244,242,237,0.06)"}
          stroke={i === 0 ? brass : paper}
          strokeWidth="1.2"
          initial={false}
          animate={{ opacity: on(2) ? 1 : 0, scale: on(2) ? 1 : 0.8 }}
          style={{ originX: `${b.x + b.w / 2}px`, originY: `${b.y + b.h / 2}px` }}
          transition={{ ...t, delay: i * 0.08 }}
        />
      ))}

      {/* SQ.04 Connect — links between blocks and to the outside */}
      <motion.g animate={{ opacity: on(3) ? 1 : 0 }} transition={t} stroke={brass} strokeWidth="1.2">
        <line x1="180" y1="150" x2="220" y2="150" />
        <line x1="180" y1="250" x2="220" y2="250" />
        <line x1="150" y1="180" x2="150" y2="220" />
        <line x1="250" y1="180" x2="250" y2="220" />
        <line x1="150" y1="150" x2="250" y2="250" opacity="0.4" />
      </motion.g>

      {/* SQ.05 Measure — the performance line over the system */}
      <motion.g animate={{ opacity: on(4) ? 1 : 0 }} transition={t}>
        <polyline
          points="100,300 140,272 180,282 220,244 260,232 300,196"
          fill="none"
          stroke={brass}
          strokeWidth="2"
        />
        {[100, 140, 180, 220, 260, 300].map((x, i) => (
          <circle key={x} cx={x} cy={[300, 272, 282, 244, 232, 196][i]} r="2.6" fill={brass} />
        ))}
        {[100, 150, 200, 250, 300].map((x) => (
          <line key={x} x1={x} y1="306" x2={x} y2="312" stroke={steel} strokeWidth="1" />
        ))}
      </motion.g>

      {/* SQ.06 Scale — the system replicates outward */}
      {satellites.map((s, i) => (
        <motion.g
          key={i}
          initial={false}
          animate={{ opacity: on(5) ? 1 : 0, scale: on(5) ? 1 : 0.6 }}
          style={{ originX: `${s.x + 20}px`, originY: `${s.y + 20}px` }}
          transition={{ ...t, delay: i * 0.1 }}
        >
          <rect x={s.x} y={s.y} width="40" height="40" fill="none" stroke={brass} strokeWidth="1.1" opacity="0.85" />
          <line
            x1={s.x + 20}
            y1={s.y + 20}
            x2={200 + (s.x < 200 ? -100 : 100) * 0.62}
            y2={200 + (s.y < 200 ? -100 : 100) * 0.62}
            stroke={steel}
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        </motion.g>
      ))}
    </svg>
  );
}

export function OperatingModel({ locale }: { locale: Locale }) {
  const t = homeContent[locale].model;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const s = Math.min(modelStages.length - 1, Math.floor(v * modelStages.length));
    setStage(s);
  });

  const header = (
    <div className="mb-10 flex items-center gap-4 text-steel" aria-hidden="true">
      <span className="eyebrow text-brass">{t.index}</span>
      <span className="h-px flex-1 bg-steel/20" />
      <span className="eyebrow">{t.label}</span>
    </div>
  );

  /* Mobile & reduced motion: stacked stages, complete visual once. */
  const staticVersion = (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
      {header}
      <h2 className="display max-w-2xl text-3xl sm:text-4xl">{t.heading}</h2>
      <p className="mt-5 max-w-xl leading-relaxed text-steel">{t.intro}</p>
      <div className="mx-auto mt-12 max-w-sm">
        <SystemVisual stage={5} />
      </div>
      <ol className="mt-12 space-y-8">
        {modelStages.map((s) => (
          <li key={s.key} className="border-l border-steel/25 pl-5">
            <p className="eyebrow text-brass">{s.index}</p>
            <h3 className="display mt-2 text-xl">{s.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{s.description[locale]}</p>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section className="bg-ink text-paper">
      {/* mobile / tablet */}
      <div className="lg:hidden">{staticVersion}</div>

      {/* desktop sticky scene */}
      <div className="hidden lg:block">
        {reduce ? (
          staticVersion
        ) : (
          <div ref={ref} style={{ height: `${modelStages.length * 60 + 60}vh` }}>
            <div className="sticky top-0 flex min-h-svh flex-col justify-center">
              <div className="mx-auto w-full max-w-6xl px-10">
                {header}
                <h2 className="display max-w-2xl text-4xl xl:text-5xl">{t.heading}</h2>
                <div className="mt-12 grid grid-cols-[1fr_1.1fr] items-center gap-16">
                  <ol>
                    {modelStages.map((s, i) => {
                      const isActive = i === stage;
                      return (
                        <li
                          key={s.key}
                          className={`border-l-2 py-3 pl-6 transition-colors duration-500 ${
                            isActive ? "border-brass" : "border-steel/20"
                          }`}
                        >
                          <p className={`eyebrow ${isActive ? "text-brass" : "text-steel/60"}`}>
                            {s.index}
                          </p>
                          <h3
                            className={`display mt-1 text-2xl transition-colors duration-500 ${
                              isActive ? "text-paper" : "text-steel/50"
                            }`}
                          >
                            {s.title[locale]}
                          </h3>
                          <motion.p
                            initial={false}
                            animate={{
                              height: isActive ? "auto" : 0,
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-md overflow-hidden text-sm leading-relaxed text-steel"
                          >
                            {s.description[locale]}
                          </motion.p>
                        </li>
                      );
                    })}
                  </ol>
                  <div className="mx-auto w-full max-w-md">
                    <SystemVisual stage={stage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
