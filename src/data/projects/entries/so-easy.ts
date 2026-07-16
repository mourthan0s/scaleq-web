import type { Project } from "../types";

/**
 * So Easy — collaborative website work.
 * Public grounding: official site https://soeasy.gr/ (WordPress + Elementor,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const soEasy: Project = {
  id: "so-easy",
  slug: "so-easy",
  isSample: false,
  featured: false,
  order: 36,

  title: { el: "So Easy", en: "So Easy" },
  shortDescription: {
    el: "Δίκτυο φροντιστηρίων ξένων γλωσσών στην Ελλάδα.",
    en: "Network of foreign language schools in Greece.",
  },

  organization: { el: "So Easy", en: "So Easy" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Εκπαίδευση", en: "Education" },
  industryKey: "education",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συνέβαλα στην ανάπτυξη του website της επιχείρησης.",
    en: "I contributed to the development of the business's website.",
  },

  technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/soeasy.webp",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://soeasy.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
