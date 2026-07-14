"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";

const W = 600;
const H = 440;
const COLS = 8;
const ROWS = 6;

interface Dot {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  const cellW = (W - 120) / (COLS - 1);
  const cellH = (H - 140) / (ROWS - 1);
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const seed = i * 31 + j * 7;
      dots.push({
        sx: 40 + seededRandom(seed) * (W - 80),
        sy: 30 + seededRandom(seed + 1) * (H - 60),
        tx: 60 + i * cellW,
        ty: 70 + j * cellH,
      });
    }
  }
  return dots;
}

function OrganisingDot({
  dot,
  progress,
}: {
  dot: Dot;
  progress: MotionValue<number>;
}) {
  // Dots drift into place between 15% and 55% of the scene.
  const cx = useTransform(progress, [0.15, 0.55], [dot.sx, dot.tx]);
  const cy = useTransform(progress, [0.15, 0.55], [dot.sy, dot.ty]);
  const opacity = useTransform(progress, [0, 0.1, 0.55, 1], [0.35, 0.55, 0.9, 0.9]);
  return <motion.circle cx={cx} cy={cy} r={2.4} fill="#f4f2ed" opacity={opacity} />;
}

/**
 * "From complexity to structure" — the scroll scene where scattered elements
 * organise into an architecture. Sticky visual, three narrative stages.
 */
export function ClarityScene({ locale }: { locale: Locale }) {
  const t = homeContent[locale].clarity;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const dots = useMemo(() => buildDots(), []);

  // Architecture layers appear in the second half.
  const frameDraw = useTransform(progress, [0.55, 0.75], [0, 1]);
  const linksOpacity = useTransform(progress, [0.62, 0.82], [0, 1]);
  const gridOpacity = useTransform(progress, [0.5, 0.68], [0, 0.4]);
  const closingOpacity = useTransform(progress, [0.85, 0.97], [0, 1]);

  const stageRanges: [number, number, number, number][] = [
    [0.0, 0.06, 0.24, 0.32],
    [0.32, 0.4, 0.56, 0.64],
    [0.64, 0.72, 0.88, 0.96],
  ];

  /* Reduced motion: static final state, plain stacked text. */
  if (reduce) {
    return (
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
          <SceneHeader index={t.index} label={t.label} />
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-10">
              {t.stages.map((s) => (
                <div key={s.title}>
                  <h3 className="display text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-steel">{s.body}</p>
                </div>
              ))}
              <p className="display text-2xl text-brass">{t.closing}</p>
            </div>
            <StaticSystem dots={dots} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-ink text-paper" style={{ height: "340vh" }}>
      <div className="sticky top-0 flex min-h-svh flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
          <SceneHeader index={t.index} label={t.label} />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* narrative column */}
            <div className="relative order-2 min-h-[16rem] sm:min-h-[14rem] lg:order-1">
              {t.stages.map((s, i) => {
                const [a, b, c, d] = stageRanges[i];
                return (
                  <StageText key={s.title} progress={progress} range={[a, b, c, d]}>
                    <h3 className="display text-2xl sm:text-3xl lg:text-4xl">{s.title}</h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-steel sm:text-base">
                      {s.body}
                    </p>
                  </StageText>
                );
              })}
              <motion.p
                style={{ opacity: closingOpacity }}
                className="display absolute inset-x-0 top-0 text-2xl text-brass sm:text-3xl lg:text-4xl"
              >
                {t.closing}
              </motion.p>
            </div>

            {/* organising system */}
            <div className="order-1 lg:order-2">
              <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
                {/* underlying grid — structure emerging */}
                <motion.g style={{ opacity: gridOpacity }} stroke="rgba(155,161,171,0.25)" strokeWidth="0.6">
                  {Array.from({ length: COLS }, (_, i) => (
                    <line key={`v${i}`} x1={60 + (i * (W - 120)) / (COLS - 1)} y1={50} x2={60 + (i * (W - 120)) / (COLS - 1)} y2={H - 50} />
                  ))}
                  {Array.from({ length: ROWS }, (_, j) => (
                    <line key={`h${j}`} x1={40} y1={70 + (j * (H - 140)) / (ROWS - 1)} x2={W - 40} y2={70 + (j * (H - 140)) / (ROWS - 1)} />
                  ))}
                </motion.g>

                {/* connecting links between organised dots */}
                <motion.g style={{ opacity: linksOpacity }} stroke="rgba(198,161,91,0.5)" strokeWidth="1">
                  <line x1={60} y1={70} x2={W - 60} y2={70} />
                  <line x1={60} y1={H - 70} x2={W - 60} y2={H - 70} />
                  <line x1={60} y1={70} x2={60} y2={H - 70} />
                  <line x1={W - 60} y1={70} x2={W - 60} y2={H - 70} />
                </motion.g>

                {/* architectural frame drawing itself */}
                <motion.rect
                  x={40}
                  y={50}
                  width={W - 80}
                  height={H - 100}
                  fill="none"
                  stroke="#c6a15b"
                  strokeWidth="1.4"
                  style={{ pathLength: frameDraw }}
                />

                {dots.map((d, i) => (
                  <OrganisingDot key={i} dot={d} progress={progress} />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 text-steel sm:mb-14" aria-hidden="true">
      <span className="eyebrow text-brass">{index}</span>
      <span className="h-px flex-1 bg-steel/20" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function StageText({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[1]], [24, 0]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-0">
      {children}
    </motion.div>
  );
}

function StaticSystem({ dots }: { dots: Dot[] }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden="true">
      <rect x={40} y={50} width={W - 80} height={H - 100} fill="none" stroke="#c6a15b" strokeWidth="1.2" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.tx} cy={d.ty} r={2.4} fill="#f4f2ed" opacity={0.9} />
      ))}
    </svg>
  );
}
