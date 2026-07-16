import type { Project } from "../types";

/**
 * Autoplus — collaborative website work.
 * Public grounding: official site https://www.autoplus.gr/. Kept
 * intentionally compact — this is a Professional Contributions entry, not a
 * full case study.
 */
export const autoplus: Project = {
  id: "autoplus",
  slug: "autoplus",
  isSample: false,
  featured: false,
  order: 35,

  title: { el: "Autoplus", en: "Autoplus" },
  shortDescription: {
    el: "Λιανικό εμπόριο αξεσουάρ αυτοκινήτου — μπαγκαζιέρες οροφής, καλύμματα, μπαταρίες.",
    en: "Retailer of car accessories — roof boxes, covers, batteries and more.",
  },

  organization: { el: "Autoplus", en: "Autoplus" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Αξεσουάρ Αυτοκινήτου", en: "Automotive Accessories" },
  industryKey: "automotive",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του website/e-shop της επιχείρησης.",
    en: "We contributed to the development of the business's website/e-shop.",
  },

  technologies: ["HTML", "CSS", "JavaScript"],
  platforms: ["Web"],

  logo: "/projects/logos/autoplus.png",
  images: [],
  fallbackMockup: "commerce",

  links: {
    website: "https://www.autoplus.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development", "ecommerce"],
};
