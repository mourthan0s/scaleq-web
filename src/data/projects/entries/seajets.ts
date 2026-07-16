import type { Project } from "../types";

/**
 * Seajets — collaborative digital work.
 * Public grounding: official site https://www.seajets.com/. Kept
 * intentionally compact and conservative — this is a large, established
 * ferry operator's platform, so scope is described generically rather than
 * claiming specific ownership of the site's build. Professional
 * Contributions entry, not a full case study.
 */
export const seajets: Project = {
  id: "seajets",
  slug: "seajets",
  isSample: false,
  featured: false,
  order: 34,

  title: { el: "Seajets", en: "Seajets" },
  shortDescription: {
    el: "Ναυτιλιακή εταιρεία ταχύπλοων πλοίων για τις Κυκλάδες και την Κρήτη.",
    en: "Ferry operator running high-speed vessels to the Cyclades and Crete.",
  },

  organization: { el: "Seajets", en: "Seajets" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Τουρισμός", en: "Tourism" },
  industryKey: "tourism",
  period: "",
  status: "live",

  role: { el: "Digital Collaborator", en: "Digital Collaborator" },
  contributionSummary: {
    el: "Συνεργασία σε ψηφιακό έργο για τον οργανισμό.",
    en: "Collaborated on a digital project for the organization.",
  },

  technologies: ["HTML", "CSS", "JavaScript"],
  platforms: ["Web"],

  logo: "/projects/logos/seajets.png",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://www.seajets.com/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
