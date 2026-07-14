import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/metadata";
import { projects } from "@/data/projects";

const staticPaths = [
  "/",
  "/services",
  "/solutions",
  "/approach",
  "/projects",
  "/about",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...projects.map((p) => `/projects/${p.slug}`),
  ];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path.startsWith("/projects/") ? 0.6 : 0.8,
      alternates: {
        languages: {
          el: absoluteUrl("el", path),
          en: absoluteUrl("en", path),
        },
      },
    })),
  );
}
