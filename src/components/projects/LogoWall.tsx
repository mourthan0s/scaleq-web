import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

/**
 * Pure logo wall — no cards, no copy, no buttons. Each logo is a same-page
 * anchor to its matching entry in the Professional Contributions list below.
 * Grayscale by default, full colour on hover/focus; identical visual
 * footprint per logo regardless of its native aspect ratio.
 */
export function LogoWall({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const withLogos = projects.filter((p) => p.logo);
  if (withLogos.length === 0) return null;

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10 sm:justify-between sm:gap-x-16"
      role="list"
    >
      {withLogos.map((p) => (
        <a
          key={p.slug}
          href={`#contribution-${p.slug}`}
          aria-label={p.organization[locale]}
          role="listitem"
          className={`flex h-12 w-28 shrink-0 items-center justify-center opacity-70 grayscale transition-all duration-500 ease-out hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:grayscale-0 sm:h-14 sm:w-32 ${
            p.logoBackground === "dark" ? "bg-ink p-2" : ""
          }`}
        >
          <Image
            src={p.logo as string}
            alt={p.organization[locale]}
            width={160}
            height={64}
            className="h-full w-auto object-contain"
          />
        </a>
      ))}
    </div>
  );
}
