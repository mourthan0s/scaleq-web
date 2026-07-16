import type { Project } from "../types";

/**
 * ONISIS Consulting — collaborative website work.
 * Public grounding: official site https://onisisconsulting.gr/. Kept
 * intentionally compact — this is a Professional Contributions entry, not a
 * full case study.
 */
export const onisisConsulting: Project = {
  id: "onisis-consulting",
  slug: "onisis-consulting",
  isSample: false,
  featured: false,
  order: 37,

  title: { el: "ONISIS Consulting", en: "ONISIS Consulting" },
  shortDescription: {
    el: "C-Level χρηματοοικονομική συμβουλευτική για επιχειρήσεις.",
    en: "C-level financial consulting for businesses.",
  },

  organization: { el: "ONISIS Consulting", en: "ONISIS Consulting" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Χρηματοοικονομική Συμβουλευτική", en: "Financial Consulting" },
  industryKey: "consulting",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συνέβαλα στην ανάπτυξη του website της επιχείρησης.",
    en: "I contributed to the development of the business's website.",
  },

  technologies: ["HTML", "CSS", "JavaScript"],
  platforms: ["Web"],

  logo: "/projects/logos/onisis.svg",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://onisisconsulting.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
