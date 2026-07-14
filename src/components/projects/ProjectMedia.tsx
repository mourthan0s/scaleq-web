import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { DeviceMockup } from "@/components/graphics/DeviceMockup";

/**
 * Renders the visual for a project: the real cover image when screenshots
 * are allowed and available, otherwise the in-house generated mockup.
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
  const cover = project.allowScreenshots
    ? project.images.find((img) => img.kind === "cover")
    : undefined;

  if (cover) {
    return (
      <div className="relative aspect-[8/5] w-full overflow-hidden">
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

  return (
    <DeviceMockup
      variant={project.fallbackMockup ?? "dashboard"}
      title={project.title[locale]}
    />
  );
}
