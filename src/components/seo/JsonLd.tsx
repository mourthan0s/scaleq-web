import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function serviceSchema(locale: Locale, names: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: names.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@type": "Organization", name: "SCALEQ", url: siteConfig.url },
        areaServed: ["GR", "EU"],
      },
    })),
  };
}

export interface CaseStudySchemaInput {
  title: string;
  description: string;
  path: string;
  organization: string;
  isMobileApp: boolean;
  collaborative: boolean;
  /** schema.org applicationCategory, e.g. "FinanceApplication". */
  applicationCategory?: string;
}

/**
 * CreativeWork schema for a case study. Deliberately honest:
 * for collaborative projects SCALEQ is a contributor, never the creator.
 */
export function caseStudySchema(locale: Locale, input: CaseStudySchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: absoluteUrl(locale, input.path),
    inLanguage: locale,
    ...(input.collaborative
      ? {
          contributor: { "@type": "Organization", name: "SCALEQ", url: siteConfig.url },
          publisher: { "@type": "Organization", name: input.organization },
        }
      : {
          creator: { "@type": "Organization", name: "SCALEQ", url: siteConfig.url },
        }),
    ...(input.isMobileApp
      ? {
          about: {
            "@type": "SoftwareApplication",
            name: input.title,
            operatingSystem: "iOS, Android",
            applicationCategory: input.applicationCategory ?? "MobileApplication",
            author: { "@type": "Organization", name: input.organization },
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(locale, c.path),
    })),
  };
}
