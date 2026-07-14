/**
 * Central site configuration.
 * All real-world contact details that are not yet known live here as
 * clearly marked placeholders — fill them in before going live.
 */
export const siteConfig = {
  name: "SCALEQ",
  legalName: "SCALEQ ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
  legalNameEn: "SCALEQ SINGLE MEMBER P.C.",
  url: "https://scale-q.com",
  vatNumber: "803234647",
  gemiNumber: "192697903000",

  /**
   * PLACEHOLDERS — replace with real contact details before launch.
   * They are intentionally empty strings; UI hides empty values.
   */
  contact: {
    email: "", // e.g. "hello@scale-q.com"
    phone: "", // e.g. "+30 ..."
    address: "", // registered address, if it should be published
  },

  social: {
    linkedin: "", // e.g. "https://www.linkedin.com/company/..."
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
