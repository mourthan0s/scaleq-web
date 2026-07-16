import type { Project } from "../types";

/**
 * Discover Athens Tours — end-to-end technical delivery (website + bookings).
 * Public grounding: official site https://discoverathenstours.com/
 * (WordPress + Elementor, confirmed via generator meta tags; Amelia booking
 * plugin confirmed via page source). Kept intentionally compact — this is a
 * Professional Contributions entry, not a full case study.
 */
export const discoverAthensTours: Project = {
  id: "discover-athens-tours",
  slug: "discover-athens-tours",
  isSample: false,
  featured: false,
  order: 31,

  title: { el: "Discover Athens Tours", en: "Discover Athens Tours" },
  shortDescription: {
    el: "Website με σύστημα κρατήσεων για tour operator στην Αθήνα — food tours, wine tasting, μαθήματα μαγειρικής και ξεναγήσεις.",
    en: "Website with a booking system for an Athens tour operator — food tours, wine tasting, cooking classes and guided walks.",
  },

  organization: { el: "Discover Athens Tours", en: "Discover Athens Tours" },
  category: "website",
  participation: "end-to-end",
  industry: { el: "Τουρισμός", en: "Tourism" },
  industryKey: "tourism",
  period: "",
  status: "live",

  role: { el: "WordPress Developer", en: "WordPress Developer" },
  contributionSummary: {
    el: "Σχεδιάσαμε και υλοποιήσαμε το website και το σύστημα online κρατήσεων εξ ολοκλήρου.",
    en: "We designed and built the website and its online booking system end to end.",
  },

  technologies: ["WordPress", "Elementor", "Amelia", "PHP", "JavaScript", "HTML", "CSS"],
  platforms: ["Web"],

  logo: "/projects/logos/discoverathenstours.webp",
  images: [],
  fallbackMockup: "portal",

  links: {
    website: "https://discoverathenstours.com/",
  },

  confidentiality: "public",
  allowScreenshots: false,
  relatedServices: ["web-development"],
};
