import type { Project } from "../types";

/**
 * Tasoulis Jewellery — collaborative e-shop work.
 * Public grounding: official site https://tasoulis-jewellery.gr/. Kept
 * intentionally compact — this is a Professional Contributions entry, not a
 * full case study.
 */
export const tasoulisJewellery: Project = {
  id: "tasoulis-jewellery",
  slug: "tasoulis-jewellery",
  isSample: false,
  featured: false,
  order: 44,

  title: { el: "Tasoulis Jewellery", en: "Tasoulis Jewellery" },
  shortDescription: {
    el: "E-shop κοσμημάτων.",
    en: "E-shop for fine jewellery.",
  },

  organization: { el: "Tasoulis Jewellery", en: "Tasoulis Jewellery" },
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

  technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  platforms: ["Web"],

  logo: "/projects/logos/tasoulis-jewellery.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://tasoulis-jewellery.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
