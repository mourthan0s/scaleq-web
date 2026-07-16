import type { Project } from "../types";

/**
 * Media Strom E-commerce Platform — enterprise contribution project
 * (Collaborative Delivery).
 *
 * The platform belongs to Media Strom. This entry presents ONLY the founder's
 * contribution as a WordPress developer on the platform's development team.
 *
 * Public grounding (see ASSETS.md): the mediastrom.com e-shop of that
 * generation publicly identified itself as WordPress + WooCommerce via its
 * generator meta tags (verifiable through the Internet Archive snapshot of
 * 2023-01-07). No internal metrics or confidential details are included.
 *
 * Visuals: official screenshots of www.mediastrom.com captured directly from
 * the live site (July 2026) — per the client's continuity, the brand identity
 * and storefront experience carry over from the platform generation this
 * engagement concerns. Sources recorded in ASSETS.md.
 */
export const mediaStromEcommerce: Project = {
  id: "media-strom-ecommerce",
  slug: "media-strom-ecommerce",
  isSample: false,
  featured: true,
  order: 20,

  title: {
    el: "Media Strom E-commerce Platform",
    en: "Media Strom E-commerce Platform",
  },
  shortDescription: {
    el: "Συμμετοχή στην ανάπτυξη του WordPress/WooCommerce e-commerce οικοσυστήματος της Media Strom — custom plugins, business λειτουργικότητα και integrations, ως μέλος της ομάδας ανάπτυξης.",
    en: "Contribution to Media Strom's WordPress/WooCommerce e-commerce ecosystem — custom plugins, business functionality and integrations, as a member of the development team.",
  },
  description: {
    el: [
      "Η Media Strom είναι από τις πιο αναγνωρίσιμες ελληνικές εταιρείες στον χώρο των συστημάτων ύπνου: στρώματα, κρεβάτια, μαξιλάρια και λευκά είδη, με δίκτυο καταστημάτων σε όλη τη χώρα και ενεργό online κανάλι πωλήσεων.",
      "Το ηλεκτρονικό κατάστημα της εταιρείας, στη γενιά που αφορά αυτή η συνεργασία, ήταν χτισμένο σε WordPress και WooCommerce — μια enterprise εγκατάσταση που εξυπηρετούσε τον πλήρη κατάλογο προϊόντων, τις προσφορές και τις καθημερινές online πωλήσεις της μάρκας, σε δίγλωσσο περιβάλλον.",
      "Η συμμετοχή στο έργο αφορούσε την επέκταση και εξέλιξη αυτού του οικοσυστήματος: νέα custom λειτουργικότητα προσαρμοσμένη στις επιχειρησιακές ανάγκες της εταιρείας, βελτιώσεις του υπάρχοντος συστήματος και υποστήριξη νέων απαιτήσεων, πάνω σε μια πλατφόρμα σε πλήρη παραγωγική λειτουργία.",
    ],
    en: [
      "Media Strom is one of the most recognisable Greek companies in sleep systems: mattresses, beds, pillows and linen, with a nationwide store network and an active online sales channel.",
      "In the generation this engagement concerns, the company's online store was built on WordPress and WooCommerce — an enterprise installation serving the brand's full product catalogue, promotions and day-to-day online sales, in a bilingual environment.",
      "The engagement concerned extending and evolving that ecosystem: new custom functionality shaped to the company's business needs, improvements to the existing system and support for new requirements, on a platform in full production use.",
    ],
  },

  organization: { el: "Media Strom", en: "Media Strom" },
  category: "ecommerce",
  participation: "collaborative",
  industry: { el: "Retail / E-commerce", en: "Retail / E-commerce" },
  industryKey: "retail-ecommerce",
  period: "",
  status: "completed",

  role: { el: "WordPress Developer", en: "WordPress Developer" },
  teamContext: {
    el: "Μέλος της ομάδας ανάπτυξης του e-commerce οικοσυστήματος, σε συνεργασία με την ευρύτερη ομάδα του έργου.",
    en: "Member of the e-commerce ecosystem's development team, working with the wider project team.",
  },
  responsibilities: {
    el: [
      "Ανάπτυξη custom WordPress plugins",
      "Ανάπτυξη custom WooCommerce λειτουργιών",
      "Business-specific λειτουργικότητα",
      "Custom integrations",
      "Backend ανάπτυξη",
      "Βελτιώσεις του υπάρχοντος συστήματος",
      "Debugging και συντήρηση",
      "Υποστήριξη νέων επιχειρησιακών απαιτήσεων",
    ],
    en: [
      "Developing custom WordPress plugins",
      "Developing custom WooCommerce functionality",
      "Business-specific functionality",
      "Custom integrations",
      "Backend development",
      "Improvements to the existing system",
      "Debugging and maintenance",
      "Supporting new business requirements",
    ],
  },
  contributionSummary: {
    el: "Συμμετείχαμε στην ανάπτυξη και επέκταση του e-commerce οικοσυστήματος της Media Strom — με custom WordPress plugins, WooCommerce λειτουργίες, integrations και backend εργασία — ως μέλος της ομάδας ανάπτυξης, πάνω σε σύστημα σε πλήρη παραγωγική λειτουργία.",
    en: "We contributed to the development and extension of Media Strom's e-commerce ecosystem — with custom WordPress plugins, WooCommerce functionality, integrations and backend work — as a member of the development team, on a system in full production use.",
  },

  keyFeatures: {
    el: [
      "Πλήρες e-commerce με κατάλογο και κατηγορίες προϊόντων",
      "Καλάθι και ολοκλήρωση αγοράς",
      "Προσφορές και προωθητικές ενέργειες",
      "Αναζήτηση προϊόντων",
      "Δίγλωσσο περιεχόμενο (ελληνικά / αγγλικά)",
      "Responsive εμπειρία σε όλες τις συσκευές",
      "Custom λειτουργικότητα πάνω στο WooCommerce",
    ],
    en: [
      "Full e-commerce with product catalogue and categories",
      "Cart and checkout",
      "Promotions and offers",
      "Product search",
      "Bilingual content (Greek / English)",
      "Responsive experience across devices",
      "Custom functionality on top of WooCommerce",
    ],
  },

  technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "HTML", "CSS", "MySQL"],
  platforms: ["Web", "E-commerce"],

  logo: "/projects/media-strom/logo.png",
  images: [
    {
      src: "/projects/media-strom/home.jpg",
      alt: {
        el: "Η αρχική σελίδα του επίσημου ηλεκτρονικού καταστήματος της Media Strom",
        en: "The homepage of the official Media Strom online store",
      },
      kind: "cover",
      aspect: 2880 / 2000,
      sourceUrl: "https://www.mediastrom.com/",
      attribution: "Official website — © Media Strom",
    },
    {
      src: "/projects/media-strom/category-stromata.jpg",
      alt: {
        el: "Κατηγορία «Στρώματα» με τις σειρές προϊόντων στο mediastrom.com",
        en: "The “Mattresses” category with the product ranges on mediastrom.com",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://www.mediastrom.com/stromata",
      attribution: "Official website — © Media Strom",
    },
    {
      src: "/projects/media-strom/home-products.jpg",
      alt: {
        el: "Ενότητες προϊόντων και περιεχομένου στην αρχική σελίδα του mediastrom.com",
        en: "Product and content sections on the mediastrom.com homepage",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://www.mediastrom.com/",
      attribution: "Official website — © Media Strom",
    },
  ],
  fallbackMockup: "commerce",

  links: {
    website: "https://www.mediastrom.com",
  },

  confidentiality: "public",
  allowScreenshots: true,
  disclaimer: {
    el: "Το έργο αποτελεί ιδιοκτησία της Media Strom. Η παρουσίασή του αφορά αποκλειστικά τη δική μας συμμετοχή στην ανάπτυξη συγκεκριμένων λειτουργιών ως μέλος της ομάδας ανάπτυξης. Όλα τα trademarks και copyrights ανήκουν στους αντίστοιχους ιδιοκτήτες.",
    en: "This project is the property of Media Strom. Its presentation here concerns solely our contribution to the development of specific functionality as a member of the development team. All trademarks and copyrights belong to their respective owners.",
  },

  relatedServices: ["ecommerce", "systems-integration", "maintenance-optimization"],

  seo: {
    title: {
      el: "Media Strom E-commerce — Συμμετοχή στην ανάπτυξη | SCALEQ",
      en: "Media Strom E-commerce — Development contribution | SCALEQ",
    },
    description: {
      el: "Case study συμμετοχής: custom WordPress plugins, WooCommerce λειτουργίες και integrations για το e-commerce οικοσύστημα της Media Strom, ως μέλος της ομάδας ανάπτυξης.",
      en: "Contribution case study: custom WordPress plugins, WooCommerce functionality and integrations for Media Strom's e-commerce ecosystem, as a member of the development team.",
    },
  },
};
