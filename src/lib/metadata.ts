import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { localeHref, type Locale } from "@/lib/i18n";

interface PageMeta {
  locale: Locale;
  /** Locale-agnostic path, e.g. "/services" or "/" */
  path: string;
  title: string;
  description: string;
  /** Set false for pages that should not be indexed (none by default). */
  index?: boolean;
}

export function absoluteUrl(locale: Locale, path: string): string {
  return `${siteConfig.url}${localeHref(locale, path)}`;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  index = true,
}: PageMeta): Metadata {
  const canonical = absoluteUrl(locale, path);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        el: absoluteUrl("el", path),
        en: absoluteUrl("en", path),
        "x-default": absoluteUrl("el", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SCALEQ",
      locale: locale === "el" ? "el_GR" : "en_US",
      alternateLocale: locale === "el" ? "en_US" : "el_GR",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "SCALEQ" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: index ? undefined : { index: false, follow: false },
  };
}
