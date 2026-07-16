import type { Project } from "../types";

/**
 * THE OMNI — collaborative e-shop work.
 * Public grounding: official site https://theomniworld.com/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const theOmni: Project = {
  id: "the-omni",
  slug: "the-omni",
  isSample: false,
  featured: false,
  order: 46,

  title: { el: "THE OMNI", en: "THE OMNI" },
  shortDescription: {
    el: "Ελληνική μάρκα γυναικείων ρούχων πολυτελείας, εμπνευσμένη από αρχαιοελληνικά στοιχεία.",
    en: "Greek luxury women's fashion brand inspired by ancient Greek motifs.",
  },

  organization: { el: "THE OMNI", en: "THE OMNI" },
  category: "ecommerce",
  participation: "collaborative",
  industry: { el: "Γυναικεία Μόδα", en: "Women's Fashion" },
  industryKey: "fashion",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του e-shop της επιχείρησης.",
    en: "We contributed to the development of the business's e-shop.",
  },

  technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/theomni.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://theomniworld.com/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
