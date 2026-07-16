import type { Project } from "../types";

/**
 * Jebel K9 — collaborative website work.
 * Public grounding: official site https://jebelk9.com/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const jebelK9: Project = {
  id: "jebel-k9",
  slug: "jebel-k9",
  isSample: false,
  featured: false,
  order: 48,

  title: { el: "Jebel K9", en: "Jebel K9" },
  shortDescription: {
    el: "Εκπαίδευση και φύλαξη σκύλων (pet resort) στη Μασκάτ του Ομάν.",
    en: "Dog training and boarding pet resort in Muscat, Oman.",
  },

  organization: { el: "Jebel K9", en: "Jebel K9" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Pet Care / Marketplace", en: "Pet Care / Marketplace" },
  industryKey: "pet-care",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συμβάλαμε στην ανάπτυξη του website της επιχείρησης.",
    en: "We contributed to the development of the business's website.",
  },

  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/jebelk9.png",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://jebelk9.com/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
