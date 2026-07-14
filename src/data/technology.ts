import type { Localized } from "@/lib/types";

/**
 * The SCALEQ technology ecosystem, organised as architectural layers —
 * the same measurement-rail logic used across the site (L1…L6).
 *
 * The list is indicative, not exhaustive: technology is chosen per
 * engagement based on requirements, existing infrastructure and goals.
 * That principle is stated in the UI (see `techPrinciple` below).
 */
export interface TechGroup {
  key: string;
  title: Localized<string>;
  note: Localized<string>;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    key: "frontend",
    title: { el: "Frontend", en: "Frontend" },
    note: {
      el: "Web interfaces που είναι γρήγορα, προσβάσιμα και συντηρήσιμα.",
      en: "Web interfaces that are fast, accessible and maintainable.",
    },
    items: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    key: "mobile",
    title: { el: "Mobile", en: "Mobile" },
    note: {
      el: "Εφαρμογές για iOS και Android — cross-platform ή native, ανάλογα με το έργο.",
      en: "Apps for iOS and Android — cross-platform or native, depending on the project.",
    },
    items: [
      "React Native",
      "Expo",
      "Kotlin",
      "Swift",
      "Android",
      "iOS",
      "Cross-platform delivery",
    ],
  },
  {
    key: "backend",
    title: { el: "Backend & Data", en: "Backend & Data" },
    note: {
      el: "Η λογική, τα APIs και τα δεδομένα πίσω από κάθε σύστημα.",
      en: "The logic, APIs and data behind every system.",
    },
    items: [
      "Node.js",
      "Java",
      "Kotlin",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
    ],
  },
  {
    key: "cms-commerce",
    title: { el: "CMS & E-commerce", en: "CMS & E-commerce" },
    note: {
      el: "Διαχείριση περιεχομένου και πωλήσεων — από έτοιμες πλατφόρμες έως πλήρως custom λύσεις.",
      en: "Content and commerce management — from established platforms to fully custom builds.",
    },
    items: [
      "WordPress",
      "WooCommerce",
      "Shopify",
      "Headless CMS",
      "Custom CMS solutions",
    ],
  },
  {
    key: "cloud",
    title: { el: "Cloud & Infrastructure", en: "Cloud & Infrastructure" },
    note: {
      el: "Φιλοξενία, αυτοματοποιημένα deployments, ασφάλεια και παρακολούθηση.",
      en: "Hosting, automated deployments, security and monitoring.",
    },
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Monitoring & backups",
    ],
  },
  {
    key: "integrations",
    title: { el: "Integrations & Intelligence", en: "Integrations & Intelligence" },
    note: {
      el: "Πληρωμές, τρίτα συστήματα, analytics, αυτοματισμοί και AI — εκεί όπου τα συστήματα γίνονται οικοσύστημα.",
      en: "Payments, third-party systems, analytics, automation and AI — where systems become an ecosystem.",
    },
    items: [
      "Stripe",
      "Payment integrations",
      "Third-party APIs",
      "ERP / CRM integrations",
      "Analytics platforms",
      "AI integrations",
      "Automation tools",
    ],
  },
];

/**
 * The honest framing that accompanies the stack wherever it is shown:
 * no fake exhaustiveness, no implied certifications or partnerships.
 */
export const techPrinciple: Localized<string> = {
  el: "Η λίστα είναι ενδεικτική, όχι περιοριστική. Η τεχνολογία επιλέγεται ανά έργο — με κριτήριο τις απαιτήσεις, την υπάρχουσα υποδομή, την ομάδα που θα το συντηρήσει και τους στόχους της επιχείρησης. Ποτέ το αντίστροφο.",
  en: "The list is indicative, not restrictive. Technology is chosen per engagement — based on the requirements, the existing infrastructure, the team that will maintain it and the goals of the business. Never the other way around.",
};
