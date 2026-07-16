import type { Project } from "../types";

/**
 * BeePink Beauty Studio — end-to-end technical delivery (website).
 * Public grounding: official site https://beepink.gr/ (WordPress + Elementor,
 * confirmed via generator meta tags). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const beepink: Project = {
  id: "beepink",
  slug: "beepink",
  isSample: false,
  featured: false,
  order: 30,

  title: { el: "BEE pINK Beauty Studio", en: "BEE pINK Beauty Studio" },
  shortDescription: {
    el: "Website για beauty studio στα Μελίσσια Αττικής — υπηρεσίες PMU, makeup και fine line tattoo.",
    en: "Website for a beauty studio in Melissia, Athens — PMU, makeup and fine line tattoo services.",
  },

  organization: { el: "BEE pINK Beauty Studio", en: "BEE pINK Beauty Studio" },
  category: "website",
  participation: "end-to-end",
  industry: { el: "Ομορφιά & Αισθητική", en: "Beauty & Aesthetics" },
  industryKey: "beauty",
  period: "",
  status: "live",

  role: { el: "WordPress Developer", en: "WordPress Developer" },
  contributionSummary: {
    el: "Σχεδιάσαμε και υλοποιήσαμε το website της επιχείρησης εξ ολοκλήρου.",
    en: "We designed and built the business's website end to end.",
  },

  technologies: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/beepink.png",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://beepink.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
