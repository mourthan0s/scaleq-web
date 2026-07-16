import type { Project } from "../types";

/**
 * BarbersZone — collaborative website work.
 * Public grounding: official site https://barberszone.gr/ (WordPress,
 * confirmed via wp-content asset paths). Kept intentionally compact — this
 * is a Professional Contributions entry, not a full case study.
 */
export const barberszone: Project = {
  id: "barberszone",
  slug: "barberszone",
  isSample: false,
  featured: false,
  order: 33,

  title: { el: "BarbersZone", en: "BarbersZone" },
  shortDescription: {
    el: "Κατάστημα κομμωτηρίου ανδρών (barber shop) με online ραντεβού.",
    en: "Men's barber shop with online appointment booking.",
  },

  organization: { el: "BarbersZone", en: "BarbersZone" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Ομορφιά & Αισθητική", en: "Beauty & Aesthetics" },
  industryKey: "beauty",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συνέβαλα στην ανάπτυξη του website της επιχείρησης.",
    en: "I contributed to the development of the business's website.",
  },

  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/barberszone.png",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://barberszone.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
