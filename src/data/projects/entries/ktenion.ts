import type { Project } from "../types";

/**
 * KTENION — collaborative e-shop work.
 * Public grounding: official site https://ktenion.gr/ (WordPress +
 * WooCommerce, confirmed via asset paths). Kept intentionally compact — this
 * is a Professional Contributions entry, not a full case study.
 */
export const ktenion: Project = {
  id: "ktenion",
  slug: "ktenion",
  isSample: false,
  featured: false,
  order: 47,

  title: { el: "KTENION", en: "KTENION" },
  shortDescription: {
    el: "E-shop επαγγελματικών προϊόντων κομμωτηρίου.",
    en: "E-shop for professional hairdressing and beauty products.",
  },

  organization: { el: "KTENION", en: "KTENION" },
  category: "ecommerce",
  participation: "collaborative",
  industry: { el: "Ομορφιά & Αισθητική", en: "Beauty & Aesthetics" },
  industryKey: "beauty",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του e-shop της επιχείρησης.",
    en: "We contributed to the development of the business's e-shop.",
  },

  technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/ktenion.svg",
  logoBackground: "dark",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://ktenion.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
