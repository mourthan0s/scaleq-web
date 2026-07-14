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
