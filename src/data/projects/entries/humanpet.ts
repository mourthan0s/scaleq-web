import type { Project } from "../types";

/**
 * HumanPet — collaborative e-shop work.
 * Public grounding: official site https://humanpet.gr/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const humanpet: Project = {
  id: "humanpet",
  slug: "humanpet",
  isSample: false,
  featured: false,
  order: 43,

  title: { el: "HumanPet", en: "HumanPet" },
  shortDescription: {
    el: "Pet shop και κτηνιατρικό κέντρο για σκύλους και γάτες.",
    en: "Pet shop and veterinary centre for dogs and cats.",
  },

  organization: { el: "HumanPet", en: "HumanPet" },
  category: "ecommerce",
  participation: "collaborative",
  industry: { el: "Pet Care / Marketplace", en: "Pet Care / Marketplace" },
  industryKey: "pet-care",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του website/e-shop της επιχείρησης.",
    en: "We contributed to the development of the business's website/e-shop.",
  },

  technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/humanpet.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://humanpet.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
