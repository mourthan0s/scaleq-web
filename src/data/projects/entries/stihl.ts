import type { Project } from "../types";

/**
 * STIHL Hellas — collaborative digital work.
 * Public grounding: official Greek distributor site https://www.stihl.gr/.
 * Kept intentionally compact and conservative — this is a large, established
 * brand's platform, so scope is described generically rather than claiming
 * specific ownership of the site's build. Professional Contributions entry,
 * not a full case study.
 */
export const stihl: Project = {
  id: "stihl",
  slug: "stihl",
  isSample: false,
  featured: false,
  order: 32,

  title: { el: "STIHL Hellas", en: "STIHL Hellas" },
  shortDescription: {
    el: "Επίσημος αντιπρόσωπος εργαλείων κήπου και δασικών μηχανημάτων STIHL στην Ελλάδα.",
    en: "Official Greek distributor of STIHL garden and forestry power equipment.",
  },

  organization: { el: "STIHL Hellas", en: "STIHL Hellas" },
  category: "website",
  participation: "collaborative",
  industry: { el: "Λιανικό Εμπόριο", en: "Retail" },
  industryKey: "retail",
  period: "",
  status: "live",

  role: { el: "Digital Collaborator", en: "Digital Collaborator" },
  contributionSummary: {
    el: "Συνεργασία σε ψηφιακό έργο για τον οργανισμό.",
    en: "Collaborated on a digital project for the organization.",
  },

  technologies: ["HTML", "CSS", "JavaScript"],
  platforms: ["Web"],

  logo: "/projects/logos/stihl.svg",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://www.stihl.gr/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
