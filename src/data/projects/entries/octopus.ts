import type { Project } from "../types";

/**
 * Octopus.gr — collaborative e-shop work.
 * Public grounding: official site https://octopus.gr/ (WordPress +
 * WooCommerce, confirmed via asset paths). Kept intentionally compact — this
 * is a Professional Contributions entry, not a full case study.
 */
export const octopus: Project = {
  id: "octopus",
  slug: "octopus",
  isSample: false,
  featured: false,
  order: 39,

  title: { el: "Octopus.gr", en: "Octopus.gr" },
  shortDescription: {
    el: "E-shop πρωτότυπων δώρων, gadgets και διακοσμητικών.",
    en: "E-shop for original gifts, gadgets and decorative items.",
  },

  organization: { el: "Octopus.gr", en: "Octopus.gr" },
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

  logo: "/projects/logos/octopus.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://octopus.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
