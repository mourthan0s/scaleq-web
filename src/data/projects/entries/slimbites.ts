import type { Project } from "../types";

/**
 * Slimbites — collaborative e-shop work.
 * Public grounding: official site https://slimbites.gr/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const slimbites: Project = {
  id: "slimbites",
  slug: "slimbites",
  isSample: false,
  featured: false,
  order: 42,

  title: { el: "Slimbites", en: "Slimbites" },
  shortDescription: {
    el: "E-shop γλυκών με στέβια, χωρίς ζάχαρη.",
    en: "E-shop for stevia-sweetened, sugar-free desserts.",
  },

  organization: { el: "Slimbites", en: "Slimbites" },
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

  technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/slimbites.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://slimbites.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
