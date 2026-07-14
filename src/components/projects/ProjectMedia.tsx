import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { DeviceMockup } from "@/components/graphics/DeviceMockup";

/** The hero visual of a project, when screenshots are allowed. */
export function projectCover(project: Project) {
  return project.allowScreenshots
    ? project.images.find((img) => img.kind === "cover")
    : undefined;
}

/** Mobile screenshots used as the hero when no landscape cover exists. */
export function projectHeroMobileShots(project: Project) {
  if (!project.allowScreenshots || projectCover(project)) return [];
  return project.images.filter((img) => img.kind === "mobile").slice(0, 3);
}

/**
 * Renders the visual for a project:
 *  1. the real landscape cover image, when allowed and available;
 *  2. otherwise a row of official mobile screenshots (real UI, unaltered);
 *  3. otherwise the in-house generated mockup.
 * Confidential projects therefore never leak real UI.
 */
export function ProjectMedia({
  project,
  locale,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  project: Project;
  locale: Locale;
  sizes?: string;
  priority?: boolean;
}) {
  const cover = projectCover(project);

  if (cover) {
    return (
      <div
        className="relative w-full overflow-hidden"
        // Natural aspect (when provided) so multi-screen sheets are never cropped.
        style={{ aspectRatio: String(cover.aspect ?? 8 / 5) }}
      >
        <Image
          src={cover.src}
          alt={cover.alt[locale]}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const phones = projectHeroMobileShots(project);
  if (phones.length > 0) {
    return (
      <div
        className={`grid gap-3 sm:gap-4 ${
          phones.length === 1 ? "mx-auto max-w-[240px] grid-cols-1" : phones.length === 2 ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {phones.map((img, i) => (
          <div
            key={img.src}
            className="relative aspect-[9/16] w-full overflow-hidden border border-steel/20"
          >
            <Image
              src={img.src}
              alt={img.alt[locale]}
              fill
              sizes="(min-width: 1024px) 16vw, 30vw"
              priority={priority && i === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <DeviceMockup
      variant={project.fallbackMockup ?? "dashboard"}
      title={project.title[locale]}
    />
  );
}
