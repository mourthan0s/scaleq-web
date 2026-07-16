import type { Project } from "../types";

/**
 * TimeOnline.gr — collaborative e-shop work.
 * Public grounding: official site https://timeonline.gr/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const timeonline: Project = {
  id: "timeonline",
  slug: "timeonline",
  isSample: false,
  featured: false,
  order: 40,

  title: { el: "TimeOnline.gr", en: "TimeOnline.gr" },
  shortDescription: {
    el: "E-shop ρολογιών και κοσμημάτων για Ελλάδα και Κύπρο.",
    en: "E-shop for watches and jewellery serving Greece and Cyprus.",
  },

  organization: { el: "TimeOnline.gr", en: "TimeOnline.gr" },
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

  logo: "/projects/logos/timeonline.jpg",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://timeonline.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
