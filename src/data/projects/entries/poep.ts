import type { Project } from "../types";

/**
 * POEP (Πανελλήνιος Οργανισμός Εκπαιδευτικών Προγραμμάτων) — collaborative
 * website work. Public grounding: official site https://poep.gr/ (WordPress,
 * confirmed via asset paths). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const poep: Project = {
  id: "poep",
  slug: "poep",
  isSample: false,
  featured: false,
  order: 38,

  title: { el: "Π.Ο.Ε.Π.", en: "POEP" },
  shortDescription: {
    el: "Πανελλήνιος Οργανισμός Εκπαιδευτικών Προγραμμάτων — πιστοποιημένα σεμινάρια μασάζ.",
    en: "Panhellenic Organization of Educational Programmes — certified massage seminars.",
  },

  organization: { el: "Π.Ο.Ε.Π.", en: "POEP" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Εκπαίδευση", en: "Education" },
  industryKey: "education",
  period: "",
  status: "live",

  role: { el: "Web Developer", en: "Web Developer" },
  contributionSummary: {
    el: "Συνέβαλα στην ανάπτυξη του website της επιχείρησης.",
    en: "I contributed to the development of the business's website.",
  },

  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/poep.webp",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://poep.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
