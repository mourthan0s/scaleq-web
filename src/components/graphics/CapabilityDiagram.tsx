"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Capability } from "@/data/capabilities";

const steel = "rgba(155,161,171,0.5)";
const faint = "rgba(155,161,171,0.22)";
const brass = "#c6a15b";
const paper = "rgba(244,242,237,0.75)";

/**
 * Each capability gets its own visual behaviour — no repeated icon grid.
 * All diagrams share one 120×120 coordinate system and animate only while active.
 */
export function CapabilityDiagram({
  type,
  active,
}: {
  type: Capability["diagram"];
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const animate = active && !reduce;

  const common = {
    fill: "none" as const,
    strokeLinecap: "square" as const,
  };

  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      {type === "compass" && (
        <>
          <circle cx="60" cy="60" r="42" stroke={faint} strokeWidth="1" {...common} />
          <circle cx="60" cy="60" r="30" stroke={faint} strokeWidth="1" strokeDasharray="2 6" {...common} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1={60 + 38 * Math.cos((a * Math.PI) / 180)}
              y1={60 + 38 * Math.sin((a * Math.PI) / 180)}
              x2={60 + 42 * Math.cos((a * Math.PI) / 180)}
              y2={60 + 42 * Math.sin((a * Math.PI) / 180)}
              stroke={steel}
              strokeWidth="1"
            />
          ))}
          <motion.g
            style={{ originX: "60px", originY: "60px" }}
            animate={animate ? { rotate: [0, 30, -15, 60, 45] } : { rotate: 45 }}
            transition={animate ? { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } : undefined}
          >
            <line x1="60" y1="60" x2="60" y2="26" stroke={brass} strokeWidth="2" />
            <circle cx="60" cy="60" r="3" fill={brass} />
          </motion.g>
        </>
      )}

      {type === "blueprint" && (
        <>
          {[
            { x: 22, y: 66, w: 32, h: 32 },
            { x: 62, y: 66, w: 36, h: 32 },
            { x: 22, y: 24, w: 76, h: 34 },
          ].map((r, i) => (
            <motion.rect
              key={i}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              stroke={i === 2 ? brass : steel}
              strokeWidth="1.2"
              {...common}
              initial={false}
              animate={animate ? { pathLength: [0, 1] } : { pathLength: 1 }}
              transition={animate ? { duration: 1.4, delay: i * 0.35, repeat: Infinity, repeatDelay: 3 } : undefined}
            />
          ))}
          <line x1="30" y1="34" x2="66" y2="34" stroke={faint} strokeWidth="1" />
          <line x1="30" y1="42" x2="54" y2="42" stroke={faint} strokeWidth="1" />
        </>
      )}

      {type === "pillars" && (
        <>
          <line x1="16" y1="100" x2="104" y2="100" stroke={steel} strokeWidth="1.2" />
          {[52, 34, 20].map((h, i) => (
            <motion.rect
              key={i}
              x={26 + i * 26}
              width="16"
              fill={i === 2 ? brass : paper}
              initial={false}
              animate={
                animate
                  ? { height: [0, 28 + i * 22], y: [100, 100 - (28 + i * 22)] }
                  : { height: 28 + i * 22, y: 100 - (28 + i * 22) }
              }
              transition={
                animate
                  ? { duration: 1.1, delay: i * 0.2, repeat: Infinity, repeatDelay: 2.6, ease: [0.22, 1, 0.36, 1] }
                  : undefined
              }
            />
          ))}
        </>
      )}

      {type === "circuit" && (
        <>
          <path d="M18 60 h24 v-24 h36 v24 h24" stroke={faint} strokeWidth="1.2" {...common} />
          <path d="M18 78 h30 v18 h42" stroke={faint} strokeWidth="1.2" {...common} />
          {[18, 102].map((x) => (
            <circle key={x} cx={x} cy="60" r="3" fill={paper} />
          ))}
          <circle cx="18" cy="78" r="3" fill={paper} />
          <circle cx="90" cy="96" r="3" fill={paper} />
          <motion.circle
            r="3.4"
            fill={brass}
            initial={false}
            animate={
              animate
                ? { cx: [18, 42, 42, 78, 78, 102], cy: [60, 60, 36, 36, 60, 60] }
                : { cx: 102, cy: 60 }
            }
            transition={animate ? { duration: 2.6, repeat: Infinity, ease: "linear", repeatDelay: 0.6 } : undefined}
          />
        </>
      )}

      {type === "storefront" && (
        <>
          <rect x="20" y="28" width="80" height="64" rx="3" stroke={steel} strokeWidth="1.2" {...common} />
          <line x1="20" y1="42" x2="100" y2="42" stroke={faint} strokeWidth="1" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={28 + i * 24} y="50" width="16" height="14" stroke={faint} strokeWidth="1" {...common} />
          ))}
          <motion.rect
            x="28"
            y="50"
            width="16"
            height="14"
            stroke={brass}
            strokeWidth="1.4"
            {...common}
            initial={false}
            animate={animate ? { x: [28, 28, 76, 76], y: [50, 50, 76, 76], opacity: [1, 1, 1, 0] } : { x: 76, y: 76, opacity: 1 }}
            transition={animate ? { duration: 2.8, repeat: Infinity, repeatDelay: 1.2, times: [0, 0.2, 0.8, 1] } : undefined}
          />
          <path d="M74 84 h22" stroke={brass} strokeWidth="1.6" />
          <path d="M92 80 l4 4 -4 4" stroke={brass} strokeWidth="1.6" {...common} />
        </>
      )}

      {type === "mesh" && (
        <>
          {(
            [
              [30, 34],
              [90, 30],
              [24, 88],
              [92, 90],
              [60, 60],
            ] as const
          ).map(([x, y], i) => (
            <g key={i}>
              {i < 4 && (
                <motion.line
                  x1={x}
                  y1={y}
                  x2="60"
                  y2="60"
                  stroke={steel}
                  strokeWidth="1"
                  initial={false}
                  animate={animate ? { opacity: [0.2, 0.8, 0.2] } : { opacity: 0.6 }}
                  transition={animate ? { duration: 2.4, delay: i * 0.5, repeat: Infinity } : undefined}
                />
              )}
              <circle cx={x} cy={y} r={i === 4 ? 5 : 3.4} fill={i === 4 ? brass : paper} />
            </g>
          ))}
          <line x1="30" y1="34" x2="90" y2="30" stroke={faint} strokeWidth="1" />
          <line x1="24" y1="88" x2="92" y2="90" stroke={faint} strokeWidth="1" />
        </>
      )}

      {type === "flow" && (
        <>
          <path d="M16 96 h20 v-20 h22 v-22 h22 v-22 h24" stroke={steel} strokeWidth="1.2" {...common} />
          {[
            [36, 96],
            [58, 76],
            [80, 54],
            [102, 32],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={paper} opacity={0.7} />
          ))}
          <motion.circle
            r="3.6"
            fill={brass}
            initial={false}
            animate={
              animate
                ? { cx: [16, 36, 36, 58, 58, 80, 80, 104], cy: [96, 96, 76, 76, 54, 54, 32, 32] }
                : { cx: 104, cy: 32 }
            }
            transition={animate ? { duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 } : undefined}
          />
        </>
      )}

      {type === "ladder" && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <motion.g
              key={i}
              initial={false}
              animate={animate ? { opacity: [0, 1], y: [6, 0] } : { opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.7, delay: i * 0.3, repeat: Infinity, repeatDelay: 2.8 } : undefined}
            >
              <rect
                x={22 + i * 20}
                y={92 - i * 20 - 14}
                width="16"
                height="14"
                stroke={i === 3 ? brass : steel}
                strokeWidth="1.2"
                fill={i === 3 ? "rgba(198,161,91,0.15)" : "none"}
              />
            </motion.g>
          ))}
          <path d="M22 100 h80" stroke={steel} strokeWidth="1.2" />
          <path d="M98 44 v-14 h-14" stroke={brass} strokeWidth="1.4" {...common} />
        </>
      )}
    </svg>
  );
}
