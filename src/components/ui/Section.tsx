import { type ReactNode } from "react";
import { Container } from "./Container";

export type SectionTheme = "ink" | "paper";

/**
 * Structural section wrapper. `index` renders the architectural
 * SQ.xx marker + tick rail that runs through the whole identity.
 */
export function Section({
  theme = "ink",
  index,
  label,
  children,
  className = "",
  id,
}: {
  theme?: SectionTheme;
  index?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const isInk = theme === "ink";
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${
        isInk ? "bg-ink text-paper" : "paper-surface text-ink"
      } ${className}`}
    >
      <Container className="relative py-24 sm:py-28 lg:py-36">
        {(index || label) && (
          <div
            className={`mb-10 flex items-center gap-4 sm:mb-14 ${
              isInk ? "text-steel" : "text-slate"
            }`}
            aria-hidden="true"
          >
            <span className="eyebrow text-brass">{index}</span>
            <span className={`h-px flex-1 ${isInk ? "bg-steel/20" : "bg-ink/15"}`} />
            <span className="eyebrow">{label}</span>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
