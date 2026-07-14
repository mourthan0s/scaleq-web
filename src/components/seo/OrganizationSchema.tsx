import { siteConfig } from "@/config/site";

/** Organization structured data, rendered once in the root layout. */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SCALEQ",
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    vatID: `EL${siteConfig.vatNumber}`,
    identifier: [
      { "@type": "PropertyValue", propertyID: "GEMI", value: siteConfig.gemiNumber },
    ],
    areaServed: ["GR", "EU"],
    knowsLanguage: ["el", "en"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
