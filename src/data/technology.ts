import type { Localized } from "@/lib/types";

export interface TechGroup {
  key: string;
  title: Localized<string>;
  note: Localized<string>;
  items: string[];
}

export const techGroups: TechGroup[] = [
  {
    key: "interfaces",
    title: { el: "Interfaces", en: "Interfaces" },
    note: {
      el: "Web και mobile εμπειρίες για πελάτες, συνεργάτες και ομάδες.",
      en: "Web and mobile experiences for customers, partners and teams.",
    },
    items: ["Next.js", "React", "React Native", "Angular", "TypeScript", "Kotlin"],
  },
  {
    key: "backbone",
    title: { el: "Backbone", en: "Backbone" },
    note: {
      el: "Η λογική και τα δεδομένα πίσω από κάθε σύστημα.",
      en: "The logic and data behind every system.",
    },
    items: ["Node.js", "REST & GraphQL APIs", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    key: "infrastructure",
    title: { el: "Infrastructure", en: "Infrastructure" },
    note: {
      el: "Φιλοξενία, ασφάλεια και παρακολούθηση σε cloud υποδομές.",
      en: "Hosting, security and monitoring on cloud infrastructure.",
    },
    items: ["Cloud hosting", "CI/CD", "Monitoring", "Backups & security"],
  },
  {
    key: "intelligence",
    title: { el: "Intelligence", en: "Intelligence" },
    note: {
      el: "Αυτοματισμοί, AI integrations και δεδομένα που γίνονται αποφάσεις.",
      en: "Automation, AI integrations and data turned into decisions.",
    },
    items: ["AI integrations", "Workflow automation", "Analytics", "Reporting pipelines"],
  },
  {
    key: "commerce",
    title: { el: "Commerce & Connections", en: "Commerce & Connections" },
    note: {
      el: "Πληρωμές, παραγγελίες και συνδέσεις με τρίτα συστήματα.",
      en: "Payments, ordering and connections to third-party systems.",
    },
    items: ["Payment systems", "ERP / CRM integrations", "Courier & logistics APIs", "Third-party APIs"],
  },
];
