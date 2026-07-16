import type { Project } from "../types";

/**
 * Tziolis Marine — collaborative website work.
 * Public grounding: official site https://tziolis-marine.gr/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const tziolisMarine: Project = {
  id: "tziolis-marine",
  slug: "tziolis-marine",
  isSample: false,
  featured: false,
  order: 45,

  title: { el: "Tziolis Marine", en: "Tziolis Marine" },
  shortDescription: {
    el: "Ναυτιλιακά είδη, parking και service σκαφών.",
    en: "Marine equipment, boat parking and vessel service.",
  },

  organization: { el: "Tziolis Marine", en: "Tziolis Marine" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Ναυτιλιακά Είδη", en: "Marine Equipment" },
  industryKey: "marine",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συνέβαλα στην ανάπτυξη του website της επιχείρησης.",
    en: "I contributed to the development of the business's website.",
  },

  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/tziolis-marine.jpg",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://tziolis-marine.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
