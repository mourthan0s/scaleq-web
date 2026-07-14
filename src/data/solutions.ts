import type { Localized } from "@/lib/types";

export interface Solution {
  slug: string;
  title: Localized<string>;
  description: Localized<string>;
  /** The concrete business result the solution connects to. */
  outcome: Localized<string>;
  /** Slugs of related services (see data/services.ts). */
  relatedServices: string[];
}

export const solutions: Solution[] = [
  {
    slug: "business-platform",
    title: { el: "Πλατφόρμες διαχείρισης επιχείρησης", en: "Business management platforms" },
    description: {
      el: "Ενιαία συστήματα όπου πελάτες, έργα, παραγγελίες και οικονομικά ζουν σε μία δομή αντί για δέκα αρχεία.",
      en: "Unified systems where clients, projects, orders and finances live in one structure instead of ten files.",
    },
    outcome: {
      el: "Η καθημερινή λειτουργία σταματά να εξαρτάται από τη μνήμη συγκεκριμένων ανθρώπων.",
      en: "Daily operations stop depending on the memory of specific people.",
    },
    relatedServices: ["business-software", "systems-integration", "strategy-consulting"],
  },
  {
    slug: "client-portal",
    title: { el: "Client portals", en: "Client portals" },
    description: {
      el: "Ασφαλή περιβάλλοντα όπου οι πελάτες βλέπουν την πορεία, τα αρχεία και τις εκκρεμότητές τους χωρίς τηλεφωνήματα.",
      en: "Secure environments where clients see their progress, files and pending items without phone calls.",
    },
    outcome: {
      el: "Λιγότερα emails «τι γίνεται με…» και πιο επαγγελματική εικόνα προς τον πελάτη.",
      en: "Fewer “what's happening with…” emails and a more professional client experience.",
    },
    relatedServices: ["business-software", "ux-ui-design", "web-development"],
  },
  {
    slug: "internal-tool",
    title: { el: "Εσωτερικά εργαλεία", en: "Internal tools" },
    description: {
      el: "Στοχευμένες εφαρμογές για ομάδες: εγκρίσεις, βάρδιες, απόθεμα, αιτήματα — ό,τι σήμερα γίνεται με χαρτί ή Excel.",
      en: "Focused apps for teams: approvals, shifts, inventory, requests — whatever is done on paper or Excel today.",
    },
    outcome: {
      el: "Οι διαδικασίες αποκτούν ενιαίο τρόπο εκτέλεσης και ιστορικό.",
      en: "Processes gain a single way of being executed, and a history.",
    },
    relatedServices: ["business-software", "ux-ui-design", "mobile-development"],
  },
  {
    slug: "automation-system",
    title: { el: "Συστήματα αυτοματοποίησης", en: "Automation systems" },
    description: {
      el: "Ροές που εκτελούνται μόνες τους: από την παραγγελία στο τιμολόγιο, από τη φόρμα στο CRM, από το email στην ανάθεση.",
      en: "Flows that run themselves: from order to invoice, from form to CRM, from email to assignment.",
    },
    outcome: {
      el: "Ώρες χειροκίνητης εργασίας επιστρέφουν στην ομάδα κάθε εβδομάδα.",
      en: "Hours of manual work return to the team every week.",
    },
    relatedServices: ["ai-automation", "systems-integration", "business-software"],
  },
  {
    slug: "ai-workflow",
    title: { el: "AI-powered workflows", en: "AI-powered workflows" },
    description: {
      el: "Ροές όπου η AI αναλαμβάνει το επαναλαμβανόμενο κομμάτι — ταξινόμηση, σύνοψη, εξαγωγή στοιχείων — με ανθρώπινο έλεγχο όπου μετράει.",
      en: "Flows where AI handles the repetitive part — classification, summarising, data extraction — with human review where it matters.",
    },
    outcome: {
      el: "Ταχύτερη ανταπόκριση σε αιτήματα χωρίς πρόσληψη επιπλέον προσωπικού.",
      en: "Faster response to requests without hiring additional staff.",
    },
    relatedServices: ["ai-automation", "data-analytics", "systems-integration"],
  },
  {
    slug: "marketplace",
    title: { el: "Marketplaces", en: "Marketplaces" },
    description: {
      el: "Πλατφόρμες που συνδέουν δύο πλευρές — προμηθευτές και αγοραστές, επαγγελματίες και πελάτες — με πληρωμές και κανόνες.",
      en: "Platforms connecting two sides — suppliers and buyers, professionals and clients — with payments and rules.",
    },
    outcome: {
      el: "Ένα νέο, μετρήσιμο ψηφιακό κανάλι εσόδων.",
      en: "A new, measurable digital revenue channel.",
    },
    relatedServices: ["product-strategy", "web-development", "systems-integration"],
  },
  {
    slug: "booking-system",
    title: { el: "Συστήματα κρατήσεων", en: "Booking systems" },
    description: {
      el: "Κρατήσεις, διαθεσιμότητα, πληρωμές και υπενθυμίσεις σε ένα σύστημα προσαρμοσμένο στη ροή της επιχείρησης.",
      en: "Bookings, availability, payments and reminders in one system shaped to how the business actually operates.",
    },
    outcome: {
      el: "Λιγότερα κενά στο πρόγραμμα, λιγότερες ακυρώσεις, καθόλου διπλοκρατήσεις.",
      en: "Fewer schedule gaps, fewer no-shows, zero double bookings.",
    },
    relatedServices: ["web-development", "mobile-development", "ux-ui-design"],
  },
  {
    slug: "ecommerce-ecosystem",
    title: { el: "E-commerce οικοσυστήματα", en: "E-commerce ecosystems" },
    description: {
      el: "Κατάστημα, απόθεμα, τιμολόγηση, αποστολές και αναφορές — συνδεδεμένα ώστε η πώληση να ρέει από άκρη σε άκρη.",
      en: "Store, inventory, invoicing, shipping and reporting — connected so a sale flows end to end.",
    },
    outcome: {
      el: "Το online κανάλι κλιμακώνεται χωρίς να πολλαπλασιάζεται η χειροκίνητη δουλειά.",
      en: "The online channel scales without multiplying manual work.",
    },
    relatedServices: ["ecommerce", "systems-integration", "data-analytics"],
  },
  {
    slug: "analytics-dashboard",
    title: { el: "Analytics dashboards", en: "Analytics dashboards" },
    description: {
      el: "Μία οθόνη με τους αριθμούς που καθορίζουν αποφάσεις: πωλήσεις, ταμειακή εικόνα, απόδοση, εκκρεμότητες.",
      en: "One screen with the numbers that drive decisions: sales, cash position, performance, pending items.",
    },
    outcome: {
      el: "Οι αποφάσεις της διοίκησης βασίζονται σε σημερινά δεδομένα, όχι στο κλείσιμο του μήνα.",
      en: "Management decisions rest on today's data, not on month-end closing.",
    },
    relatedServices: ["data-analytics", "systems-integration", "strategy-consulting"],
  },
  {
    slug: "custom-operational-software",
    title: { el: "Custom λειτουργικό λογισμικό", en: "Custom operational software" },
    description: {
      el: "Λογισμικό για τη λειτουργία που δεν καλύπτει κανένα έτοιμο εργαλείο: παραγωγή, logistics, ποιοτικός έλεγχος, ειδικές ροές.",
      en: "Software for the operations no off-the-shelf tool covers: production, logistics, quality control, specialised flows.",
    },
    outcome: {
      el: "Η τεχνολογία προσαρμόζεται στην επιχείρηση — όχι η επιχείρηση στο εργαλείο.",
      en: "Technology adapts to the business — not the business to the tool.",
    },
    relatedServices: ["business-software", "strategy-consulting", "maintenance-optimization"],
  },
  {
    slug: "integration-layer",
    title: { el: "Integrations", en: "Integrations" },
    description: {
      el: "Συνδέσεις μεταξύ των συστημάτων που ήδη υπάρχουν: ERP, CRM, e-shop, λογιστική, πληρωμές, courier.",
      en: "Connections between the systems that already exist: ERP, CRM, e-shop, accounting, payments, couriers.",
    },
    outcome: {
      el: "Κάθε πληροφορία καταχωρείται μία φορά και εμφανίζεται παντού σωστά.",
      en: "Every piece of information is entered once and appears correctly everywhere.",
    },
    relatedServices: ["systems-integration", "maintenance-optimization", "data-analytics"],
  },
  {
    slug: "digital-service-platform",
    title: { el: "Πλατφόρμες ψηφιακών υπηρεσιών", en: "Digital service platforms" },
    description: {
      el: "Ολοκληρωμένες πλατφόρμες όπου μια υπηρεσία παρέχεται, τιμολογείται και υποστηρίζεται εξ ολοκλήρου ψηφιακά.",
      en: "Complete platforms where a service is delivered, billed and supported entirely digitally.",
    },
    outcome: {
      el: "Ένα φυσικό ή τοπικό μοντέλο υπηρεσίας αποκτά ψηφιακή, κλιμακούμενη μορφή.",
      en: "A physical or local service model gains a digital, scalable form.",
    },
    relatedServices: ["product-strategy", "web-development", "technology-partnership"],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
