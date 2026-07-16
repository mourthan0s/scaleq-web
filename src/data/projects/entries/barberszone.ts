import type { Project } from "../types";

/**
 * BarbersZone — end-to-end platform build.
 * Public grounding: official site https://barberszone.gr/ (WordPress,
 * confirmed via wp-content asset paths), which itself describes "partnered
 * barbershops" — i.e. a booking platform/brand serving multiple locations,
 * not a single shop's site. Built entirely by our team. Kept intentionally
 * compact — this is a Professional Contributions entry, not a full case
 * study.
 */
export const barberszone: Project = {
  id: "barberszone",
  slug: "barberszone",
  isSample: false,
  featured: false,
  order: 33,

  title: { el: "BarbersZone", en: "BarbersZone" },
  shortDescription: {
    el: "Πλατφόρμα και brand για κομμωτήρια ανδρών, με online ραντεβού για δίκτυο συνεργαζόμενων καταστημάτων.",
    en: "Platform and brand for men's barbershops, with online booking for a network of partnered locations.",
  },

  organization: { el: "BarbersZone", en: "BarbersZone" },
  category: "website",
  participation: "end-to-end",
  industry: { el: "Ομορφιά & Αισθητική", en: "Beauty & Aesthetics" },
  industryKey: "beauty",
  period: "",
  status: "live",

  role: { el: "Web & Platform Developer", en: "Web & Platform Developer" },
  contributionSummary: {
    el: "Σχεδιάσαμε και υλοποιήσαμε την πλατφόρμα εξ ολοκλήρου.",
    en: "We designed and built the platform end to end.",
  },

  technologies: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/barberszone.png",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://barberszone.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
