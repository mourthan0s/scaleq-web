"use client";

import { useEffect, useRef } from "react";

interface LatticeNode {
  gx: number; // final grid position
  gy: number;
  sx: number; // scatter position (converge mode)
  sy: number;
  order: number; // 0..1 — when the node appears
}

/**
 * "The Lattice" — the signature SCALEQ visual.
 * A single unit multiplies and organises into a structured system.
 *
 * mode "grow":     nodes appear progressively from the origin outward (hero).
 * mode "converge": scattered points travel into their grid positions (final CTA).
 *
 * Canvas 2D only — no WebGL, capped DPR, paused when off-screen,
 * static final frame under prefers-reduced-motion.
 */
export function LatticeCanvas({
  mode = "grow",
  className = "",
}: {
  mode?: "grow" | "converge";
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    let width = 0;
    let height = 0;
    let nodes: LatticeNode[] = [];
    let grid: Map<string, number> = new Map();
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = false;
    let start = 0;
    const pointer = { x: -9999, y: -9999 };

    // Deterministic pseudo-random so scatter positions are stable per node.
    const rand = (seed: number) => {
      const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };

    const CELL = 44;

    function build() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      nodes = [];
      grid = new Map();

      // Origin: lower-left for grow (a system rising), centre for converge.
      const oi = mode === "grow" ? 0 : Math.floor(cols / 2);
      const oj = mode === "grow" ? rows - 1 : Math.floor(rows / 2);
      const maxDist = Math.hypot(Math.max(oi, cols - oi), Math.max(oj, rows - oj));

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const seed = i * 197 + j * 13;
          const dist = Math.hypot(i - oi, j - oj);
          const jitter = rand(seed) * 0.12;
          nodes.push({
            gx: i * CELL + (CELL / 2) * (j % 2 === 0 ? 0.5 : -0.5) * 0.4,
            gy: j * CELL,
            sx: rand(seed + 1) * width,
            sy: rand(seed + 2) * height,
            order: Math.min(1, dist / maxDist + jitter),
          });
          grid.set(`${i},${j}`, nodes.length - 1);
        }
      }
    }

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    function draw(progress: number, time: number) {
      ctx!.clearRect(0, 0, width, height);

      const link = (a: LatticeNode, b: LatticeNode, pa: number, pb: number) => {
        const alpha = Math.min(pa, pb) * 0.16;
        if (alpha <= 0.004) return;
        ctx!.strokeStyle = `rgba(155,161,171,${alpha})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        const ax = a.gx + (a.sx - a.gx) * (1 - pa);
        const ay = a.gy + (a.sy - a.gy) * (1 - pa);
        const bx = b.gx + (b.sx - b.gx) * (1 - pb);
        const by = b.gy + (b.sy - b.gy) * (1 - pb);
        ctx!.moveTo(ax, ay);
        ctx!.lineTo(bx, by);
        ctx!.stroke();
      };

      // presence: how "arrived" each node is, given global progress
      const presence = (n: LatticeNode) => {
        const local = (progress - n.order * 0.85) / 0.15;
        return Math.max(0, Math.min(1, local));
      };

      // links to right and down neighbours
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = grid.get(`${i},${j}`)!;
          const n = nodes[idx];
          const pn = easeOut(presence(n));
          if (pn <= 0) continue;
          const right = grid.get(`${i + 1},${j}`);
          const down = grid.get(`${i},${j + 1}`);
          if (right !== undefined) {
            const m = nodes[right];
            link(n, m, pn, easeOut(presence(m)));
          }
          if (down !== undefined) {
            const m = nodes[down];
            link(n, m, pn, easeOut(presence(m)));
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const p = easeOut(presence(n));
        if (p <= 0) continue;
        const x = n.gx + (n.sx - n.gx) * (1 - p);
        const y = n.gy + (n.sy - n.gy) * (1 - p);

        // pointer proximity — brass highlight (desktop only)
        let highlight = 0;
        if (!isCoarse) {
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          highlight = Math.max(0, 1 - d / 140);
        }
        // gentle breathing on settled nodes
        const pulse = 0.5 + 0.5 * Math.sin(time / 1600 + n.order * 12);
        const base = 0.22 + 0.1 * pulse;
        const size = 1.4 + p * 0.8 + highlight * 1.6;

        if (highlight > 0.05) {
          ctx!.fillStyle = `rgba(198,161,91,${0.25 + highlight * 0.75})`;
        } else {
          ctx!.fillStyle = `rgba(244,242,237,${base * p})`;
        }
        ctx!.beginPath();
        ctx!.arc(x, y, size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const DURATION = mode === "grow" ? 7000 : 2600;

    function frame(now: number) {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      draw(t, now);
      if (t < 1 || !isCoarse) {
        raf = requestAnimationFrame(frame);
      }
    }

    function startLoop() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(frame);
    }
    function stopLoop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    build();

    if (reduce) {
      // Static, fully-formed system.
      draw(1, 0);
    } else {
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? startLoop() : stopLoop()),
        { threshold: 0.05 },
      );
      io.observe(canvas);

      const onPointer = (e: PointerEvent) => {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
      };
      const onLeave = () => {
        pointer.x = -9999;
        pointer.y = -9999;
      };
      canvas.addEventListener("pointermove", onPointer);
      canvas.addEventListener("pointerleave", onLeave);

      const ro = new ResizeObserver(() => {
        build();
        if (!running) draw(1, 0);
      });
      ro.observe(canvas);

      return () => {
        stopLoop();
        io.disconnect();
        ro.disconnect();
        canvas.removeEventListener("pointermove", onPointer);
        canvas.removeEventListener("pointerleave", onLeave);
      };
    }
  }, [mode]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
