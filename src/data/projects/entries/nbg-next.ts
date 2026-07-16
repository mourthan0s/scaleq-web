import type { Project } from "../types";

/**
 * NBG Next — enterprise contribution project (Collaborative Delivery).
 *
 * "NBG Next" refers to the National Bank of Greece's "Next by NBG" mobile
 * banking app (App Store / Google Play). The founder is a current
 * contributor to its ongoing development as part of a wider engineering
 * team — this entry presents ONLY that professional contribution.
 *
 * Boundaries deliberately kept: no confidential information, no unpublished
 * features, no roadmap, no internal build screenshots, no non-public
 * architecture. Descriptive facts are limited to what NBG publishes on the
 * app's official store listing — see ASSETS.md for sources.
 */
export const nbgNext: Project = {
  id: "nbg-next",
  slug: "nbg-next",
  isSample: false,
  featured: true,
  order: 12,

  title: {
    el: "NBG Next",
    en: "NBG Next",
  },
  shortDescription: {
    el: "Συνεχής συμμετοχή στην ανάπτυξη του Next by NBG — της mobile banking εφαρμογής της Εθνικής Τράπεζας — ως React Native engineer σε ευρύτερη ομάδα ανάπτυξης.",
    en: "Ongoing contribution to Next by NBG — the National Bank of Greece's mobile banking app — as a React Native engineer within a wider development team.",
  },
  description: {
    el: [
      "Το Next by NBG είναι η mobile banking εφαρμογή της Εθνικής Τράπεζας, διαθέσιμη επίσημα σε iOS και Android. Καλύπτει καθημερινή τραπεζική διαχείριση — λογαριασμούς, κάρτες, μεταφορές, στόχους αποταμίευσης και προσφορές — σύμφωνα με την επίσημη περιγραφή της εφαρμογής.",
      "Πρόκειται για ζωντανό, ενεργό προϊόν που εξελίσσεται συνεχώς. Η συμμετοχή σε αυτό το έργο είναι εν εξελίξει, ως μέλος της ομάδας μηχανικών που αναπτύσσει και βελτιώνει την εφαρμογή.",
    ],
    en: [
      "Next by NBG is the National Bank of Greece's mobile banking app, officially available on iOS and Android. It covers everyday banking management — accounts, cards, transfers, savings goals and offers — as described on the app's official listing.",
      "It is a live, active product that keeps evolving. The engagement on this project is ongoing, as part of the engineering team that develops and improves the app.",
    ],
  },

  organization: {
    el: "Εθνική Τράπεζα της Ελλάδος (National Bank of Greece)",
    en: "National Bank of Greece",
  },
  category: "mobile-app",
  participation: "collaborative",
  industry: { el: "Τραπεζικός τομέας / Fintech", en: "Banking / Fintech" },
  industryKey: "banking",
  period: "",
  status: "in-development",

  role: {
    el: "React Native Software Engineer",
    en: "React Native Software Engineer",
  },
  teamContext: {
    el: "Μέλος της ευρύτερης ομάδας ανάπτυξης της εφαρμογής, σε συνεργασία με μηχανικούς πολλαπλών ειδικοτήτων.",
    en: "Member of the app's wider development team, working alongside engineers of multiple specialisations.",
  },
  responsibilities: {
    el: [
      "Ανάπτυξη νέων λειτουργιών στο React Native codebase",
      "Βελτιώσεις στο UI και reusable components",
      "Business logic και navigation flows",
      "Integrations",
    ],
    en: [
      "Developing new features in the React Native codebase",
      "UI improvements and reusable components",
      "Business logic and navigation flows",
      "Integrations",
    ],
  },
  contributionSummary: {
    el: "Συμμετέχω στην ανάπτυξη του Next by NBG ως μέλος της ομάδας ανάπτυξης — υλοποιώντας νέες λειτουργίες, UI, business logic, reusable components, navigation flows και integrations στο React Native codebase. Το έργο αναπτύσσεται από μεγαλύτερη ομάδα μηχανικών· η παρουσίασή του εδώ αφορά αποκλειστικά τη δική μου συμμετοχή.",
    en: "I contribute to the development of Next by NBG as a member of its development team — building new features, UI, business logic, reusable components, navigation flows and integrations in the React Native codebase. The app is developed by a larger engineering team; this presentation concerns solely my own contribution.",
  },

  technologies: ["React Native", "TypeScript", "JavaScript", "Redux", "REST APIs"],
  platforms: ["iOS", "Android"],

  images: [1, 2, 3, 4, 5, 6].map((i) => ({
    src: `/projects/nbg-next/appstore-${i}.jpg`,
    alt: {
      el: `Επίσημο στιγμιότυπο της εφαρμογής Next by NBG (${i} από 6)`,
      en: `Official Next by NBG app screenshot (${i} of 6)`,
    },
    kind: "mobile" as const,
    sourceUrl: "https://apps.apple.com/gr/app/next-by-nbg/id1058862350",
    attribution: "Official App Store screenshots — © National Bank of Greece S.A.",
  })),

  links: {
    website: "https://www.nbg.gr/el/next-by-nbg-diaxeirish-oikonomikwn",
    appStore: "https://apps.apple.com/gr/app/next-by-nbg/id1058862350",
    googlePlay: "https://play.google.com/store/apps/details?id=gr.nbg.socialpay",
  },

  confidentiality: "public",
  allowScreenshots: true,
  disclaimer: {
    el: "Το έργο αποτελεί προϊόν της Εθνικής Τράπεζας της Ελλάδος. Η παρουσίασή του αφορά αποκλειστικά τη δική μου επαγγελματική συμμετοχή ως μέλος της ομάδας ανάπτυξης. Όλα τα εμπορικά σήματα και πνευματικά δικαιώματα ανήκουν στους αντίστοιχους ιδιοκτήτες.",
    en: "This project is a product of the National Bank of Greece. Its presentation here concerns solely my professional contribution as a member of the development team. All trademarks and copyrights belong to their respective owners.",
  },

  relatedServices: ["mobile-development", "technology-partnership"],
  relatedProjects: ["nbg-mobile-banking"],

  seo: {
    title: {
      el: "NBG Next — Συμμετοχή στην ανάπτυξη | SCALEQ",
      en: "NBG Next — Development contribution | SCALEQ",
    },
    description: {
      el: "Συνεχής συμμετοχή στην ανάπτυξη του Next by NBG, της mobile banking εφαρμογής της Εθνικής Τράπεζας, ως React Native engineer σε ευρύτερη ομάδα.",
      en: "Ongoing contribution to Next by NBG, the National Bank of Greece's mobile banking app, as a React Native engineer within a wider team.",
    },
  },
};
