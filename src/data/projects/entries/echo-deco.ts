import type { Project } from "../types";

/**
 * Echo Deco — collaborative e-shop work.
 * Public grounding: official site https://echodeco.gr/ (OpenCart, confirmed
 * via asset/route paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const echoDeco: Project = {
  id: "echo-deco",
  slug: "echo-deco",
  isSample: false,
  featured: false,
  order: 41,

  title: { el: "Echo Deco", en: "Echo Deco" },
  shortDescription: {
    el: "E-shop διακόσμησης, επίπλων και ειδών σπιτιού.",
    en: "E-shop for home decoration, furniture and seasonal items.",
  },

  organization: { el: "Echo Deco", en: "Echo Deco" },
  category: "ecommerce",
  participation: "collaborative",
  industry: { el: "Retail / E-commerce", en: "Retail / E-commerce" },
  industryKey: "retail-ecommerce",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του e-shop της επιχείρησης.",
    en: "We contributed to the development of the business's e-shop.",
  },

  technologies: ["OpenCart", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/echodeco.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://echodeco.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
