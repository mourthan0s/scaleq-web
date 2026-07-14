import type { Localized } from "@/lib/types";

export interface Capability {
  slug: string;
  title: Localized<string>;
  description: Localized<string>;
  /** Which animated diagram the row renders — each capability has its own visual behaviour. */
  diagram:
    | "compass"
    | "blueprint"
    | "pillars"
    | "circuit"
    | "storefront"
    | "mesh"
    | "flow"
    | "ladder";
}

export const capabilities: Capability[] = [
  {
    slug: "strategy",
    title: { el: "Strategy & Consulting", en: "Strategy & Consulting" },
    description: {
      el: "Πριν από κάθε γραμμή κώδικα: πού πάει η επιχείρηση, τι τη φρενάρει, τι αξίζει να χτιστεί πρώτο.",
      en: "Before any line of code: where the business is going, what is holding it back, what deserves to be built first.",
    },
    diagram: "compass",
  },
  {
    slug: "digital-products",
    title: { el: "Digital Products", en: "Digital Products" },
    description: {
      el: "Από την ιδέα σε προϊόν με χρήστες: ορισμός, σχεδιασμός, υλοποίηση και εξέλιξη με μετρήσεις.",
      en: "From idea to product with users: definition, design, delivery and evolution guided by measurement.",
    },
    diagram: "blueprint",
  },
  {
    slug: "business-platforms",
    title: { el: "Business Platforms", en: "Business Platforms" },
    description: {
      el: "Συστήματα που κρατούν τη λειτουργία σε τάξη: πελάτες, έργα, παραγγελίες, οικονομικά — σε μία δομή.",
      en: "Systems that keep operations in order: clients, projects, orders, finances — in one structure.",
    },
    diagram: "pillars",
  },
  {
    slug: "ai-automation",
    title: { el: "AI & Automation", en: "AI & Automation" },
    description: {
      el: "Οι επαναλαμβανόμενες εργασίες εκτελούνται από συστήματα. Οι άνθρωποι κρατούν την κρίση.",
      en: "Repetitive work runs on systems. People keep the judgement.",
    },
    diagram: "circuit",
  },
  {
    slug: "web-ecommerce",
    title: { el: "Web & E-commerce", en: "Web & E-commerce" },
    description: {
      el: "Websites και καταστήματα που είναι γρήγορα, βρίσκονται στην αναζήτηση και συνδέονται με τη λειτουργία.",
      en: "Websites and stores that are fast, visible in search and connected to operations.",
    },
    diagram: "storefront",
  },
  {
    slug: "integration",
    title: { el: "Systems Integration", en: "Systems Integration" },
    description: {
      el: "Τα συστήματα που ήδη υπάρχουν αρχίζουν να συνεννοούνται: μία καταχώρηση, παντού σωστά.",
      en: "The systems you already have start talking: one entry, correct everywhere.",
    },
    diagram: "mesh",
  },
  {
    slug: "operations",
    title: { el: "Operational Optimization", en: "Operational Optimization" },
    description: {
      el: "Διαδικασίες που χαρτογραφούνται, απλοποιούνται και αποκτούν μετρήσιμη ροή.",
      en: "Processes that get mapped, simplified and given a measurable flow.",
    },
    diagram: "flow",
  },
  {
    slug: "growth-infrastructure",
    title: { el: "Growth Infrastructure", en: "Growth Infrastructure" },
    description: {
      el: "Υποδομή που αντέχει το επόμενο στάδιο: περισσότερους πελάτες, νέα κανάλια, νέες αγορές.",
      en: "Infrastructure that survives the next stage: more customers, new channels, new markets.",
    },
    diagram: "ladder",
  },
];
