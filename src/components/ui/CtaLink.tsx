import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "solid" | "outline" | "text";
type Tone = "onDark" | "onLight";

const base =
  "group inline-flex items-center gap-3 text-sm font-semibold tracking-wide transition-colors duration-300";

const styles: Record<Tone, Record<Variant, string>> = {
  onDark: {
    solid: "bg-paper text-ink px-7 py-4 hover:bg-brass",
    outline:
      "border border-steel/40 px-7 py-4 text-paper hover:border-brass hover:text-brass",
    text: "text-paper hover:text-brass",
  },
  onLight: {
    solid: "bg-ink text-paper px-7 py-4 hover:bg-brass hover:text-ink",
    outline:
      "border border-ink/25 px-7 py-4 text-ink hover:border-brass hover:text-slate",
    text: "text-ink hover:text-brass",
  },
};

export function CtaLink({
  href,
  children,
  variant = "solid",
  tone = "onDark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${styles[tone][variant]} ${className}`}>
      <span>{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M1 7h11M8 3l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  );
}
