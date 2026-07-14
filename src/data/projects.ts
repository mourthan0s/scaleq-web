import type { Localized } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SAMPLE CONTENT — DEMONSTRATION CASE STUDIES
 *
 * The case studies below are illustrative demonstrations of the kind of work
 * SCALEQ delivers. They describe realistic engagement patterns, not named
 * clients, and are clearly labelled as demonstrations in the UI.
 *
 * To publish a real case study: replace an entry (or add a new one) and set
 * `isSample: false`. The UI stops showing the demonstration badge automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Project {
  slug: string;
  isSample: boolean;
  title: Localized<string>;
  /** Client descriptor — anonymous sector description until real clients are published. */
  client: Localized<string>;
  industry: Localized<string>;
  challenge: Localized<string>;
  strategy: Localized<string>;
  solution: Localized<string>;
  technologies: string[];
  deliveredSystems: Localized<string[]>;
  outcome: Localized<string>;
  /** Slugs of related services. */
  relatedServices: string[];
  /** Which generated mockup visual to render (no stock imagery). */
  mockup: "dashboard" | "portal" | "commerce";
  /** Optional real imagery for future case studies (public/ paths). */
  images?: { src: string; alt: Localized<string> }[];
}

export const projects: Project[] = [
  {
    slug: "operations-platform",
    isSample: true,
    title: {
      el: "Ενιαία πλατφόρμα λειτουργίας για εμπορική επιχείρηση",
      en: "Unified operations platform for a trading business",
    },
    client: {
      el: "Εμπορική επιχείρηση χονδρικής — ενδεικτικό σενάριο",
      en: "Wholesale trading business — demonstration scenario",
    },
    industry: { el: "Χονδρικό εμπόριο", en: "Wholesale trade" },
    challenge: {
      el: "Παραγγελίες σε τηλέφωνο και email, απόθεμα σε Excel, τιμολόγηση σε ξεχωριστό σύστημα. Κάθε παραγγελία περνούσε από τρία χέρια και καμία αναφορά δεν συμφωνούσε με την άλλη.",
      en: "Orders arriving by phone and email, inventory in Excel, invoicing in a separate system. Every order passed through three pairs of hands and no two reports agreed.",
    },
    strategy: {
      el: "Χαρτογραφήσαμε πρώτα ολόκληρη τη ροή — από την παραγγελία έως την είσπραξη — και ορίσαμε ένα σύστημα αναφοράς: μία πηγή αλήθειας για προϊόντα, πελάτες και υπόλοιπα, με τα υπάρχοντα εργαλεία να συνδέονται αντί να αντικαθίστανται βίαια.",
      en: "We first mapped the entire flow — from order to collection — and defined a single system of record: one source of truth for products, customers and balances, with existing tools connected rather than forcibly replaced.",
    },
    solution: {
      el: "Web πλατφόρμα διαχείρισης παραγγελιών με B2B portal πελατών, αμφίδρομη σύνδεση με το ERP και αυτόματη ενημέρωση αποθέματος. Οι πωλητές καταχωρούν από κινητό· η τιμολόγηση παράγεται χωρίς επαναπληκτρολόγηση.",
      en: "A web-based order management platform with a B2B client portal, two-way ERP integration and automatic stock updates. Sales reps enter orders from their phones; invoicing is generated without retyping.",
    },
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "ERP API"],
    deliveredSystems: {
      el: ["Πλατφόρμα παραγγελιών", "B2B client portal", "ERP integration", "Dashboard διοίκησης"],
      en: ["Order platform", "B2B client portal", "ERP integration", "Management dashboard"],
    },
    outcome: {
      el: "Μία καταχώρηση ανά παραγγελία αντί για τρεις, ενιαία εικόνα αποθέματος και υπολοίπων, και διοίκηση που βλέπει την ημέρα της επιχείρησης χωρίς να περιμένει το κλείσιμο του μήνα.",
      en: "One entry per order instead of three, a single view of stock and balances, and a management team that sees the business day without waiting for month-end.",
    },
    relatedServices: ["business-software", "systems-integration", "data-analytics"],
    mockup: "dashboard",
  },
  {
    slug: "client-portal-services",
    isSample: true,
    title: {
      el: "Client portal για εταιρεία παροχής υπηρεσιών",
      en: "Client portal for a professional services firm",
    },
    client: {
      el: "Εταιρεία επαγγελματικών υπηρεσιών — ενδεικτικό σενάριο",
      en: "Professional services firm — demonstration scenario",
    },
    industry: { el: "Επαγγελματικές υπηρεσίες", en: "Professional services" },
    challenge: {
      el: "Η ομάδα απαντούσε καθημερινά στα ίδια ερωτήματα πελατών — «σε τι φάση είναι η υπόθεσή μου;», «πού είναι το έγγραφο;» — ενώ τα αρχεία μοιράζονταν με email και η πορεία κάθε υπόθεσης ζούσε στο κεφάλι του χειριστή της.",
      en: "The team answered the same client questions daily — “what stage is my case at?”, “where is that document?” — while files travelled by email and each case's status lived in its handler's head.",
    },
    strategy: {
      el: "Αντί να προσθέσουμε άλλο ένα εσωτερικό εργαλείο, γυρίσαμε το πρόβλημα προς τα έξω: ο πελάτης έπρεπε να βλέπει μόνος του ό,τι σήμερα ρωτούσε. Σχεδιάσαμε πρώτα το μοντέλο σταδίων και δικαιωμάτων, μετά το λογισμικό.",
      en: "Instead of adding another internal tool, we turned the problem outward: clients should see for themselves what they currently had to ask. We designed the stage-and-permissions model first, the software second.",
    },
    solution: {
      el: "Ασφαλές portal όπου κάθε πελάτης βλέπει στάδιο, έγγραφα, εκκρεμότητες και επόμενα βήματα της υπόθεσής του, με ειδοποιήσεις email και ασφαλή ανταλλαγή αρχείων. Εσωτερικά, η ομάδα διαχειρίζεται τις υποθέσεις σε ενιαίο πίνακα με ιστορικό ενεργειών.",
      en: "A secure portal where each client sees the stage, documents, pending items and next steps of their case, with email notifications and secure file exchange. Internally, the team manages cases on one board with a full action history.",
    },
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    deliveredSystems: {
      el: ["Client portal", "Εσωτερικό σύστημα υποθέσεων", "Ασφαλής διαχείριση εγγράφων", "Αυτόματες ειδοποιήσεις"],
      en: ["Client portal", "Internal case system", "Secure document management", "Automated notifications"],
    },
    outcome: {
      el: "Αισθητά λιγότερα τηλεφωνήματα και emails κατάστασης, πιο επαγγελματική εμπειρία για τον πελάτη και υποθέσεις που προχωρούν με ενιαίο, ελέγξιμο τρόπο.",
      en: "Noticeably fewer status calls and emails, a more professional client experience, and cases that progress in one consistent, auditable way.",
    },
    relatedServices: ["business-software", "ux-ui-design", "web-development"],
    mockup: "portal",
  },
  {
    slug: "ecommerce-automation",
    isSample: true,
    title: {
      el: "E-commerce με αυτοματοποιημένη ροή παραγγελιών",
      en: "E-commerce with an automated order flow",
    },
    client: {
      el: "Επιχείρηση λιανικής με φυσικό κατάστημα — ενδεικτικό σενάριο",
      en: "Retail business with a physical store — demonstration scenario",
    },
    industry: { el: "Λιανικό εμπόριο", en: "Retail" },
    challenge: {
      el: "Το υπάρχον e-shop λειτουργούσε αποκομμένο: το απόθεμα ενημερωνόταν χειροκίνητα, οι παραγγελίες περνούσαν μία-μία στο ERP και τα κανάλια πουλούσαν προϊόντα που είχαν ήδη εξαντληθεί.",
      en: "The existing e-shop ran disconnected: stock was updated by hand, orders were keyed into the ERP one by one, and channels kept selling items that had already run out.",
    },
    strategy: {
      el: "Ορίσαμε το ERP ως πηγή αλήθειας για απόθεμα και τιμές και σχεδιάσαμε τη ροή της παραγγελίας από άκρη σε άκρη — πληρωμή, τιμολόγηση, αποστολή, ενημέρωση πελάτη — ώστε να εκτελείται χωρίς ανθρώπινη μεσολάβηση στα βήματα που δεν τη χρειάζονται.",
      en: "We made the ERP the source of truth for stock and pricing and designed the order flow end to end — payment, invoicing, shipping, customer updates — to run without human intervention at the steps that do not need it.",
    },
    solution: {
      el: "Νέο e-commerce κατάστημα με συγχρονισμό αποθέματος σε σχεδόν πραγματικό χρόνο, αυτόματη δημιουργία παραστατικών, ετικέτες courier με ένα κλικ και dashboard πωλήσεων ανά κανάλι.",
      en: "A new e-commerce store with near-real-time stock sync, automatic document generation, one-click courier labels and a per-channel sales dashboard.",
    },
    technologies: ["Next.js", "TypeScript", "Node.js", "ERP API", "Payment provider API", "Courier API"],
    deliveredSystems: {
      el: ["E-commerce κατάστημα", "Συγχρονισμός ERP", "Αυτοματισμοί παραγγελιών", "Dashboard πωλήσεων"],
      en: ["E-commerce store", "ERP synchronisation", "Order automations", "Sales dashboard"],
    },
    outcome: {
      el: "Η διεκπεραίωση κάθε παραγγελίας από λεπτά έγινε δευτερόλεπτα, οι πωλήσεις εξαντλημένων προϊόντων μηδενίστηκαν και το online κανάλι μπορεί πλέον να μεγαλώσει χωρίς επιπλέον διοικητικό φόρτο.",
      en: "Processing each order went from minutes to seconds, out-of-stock sales dropped to zero, and the online channel can now grow without extra administrative load.",
    },
    relatedServices: ["ecommerce", "ai-automation", "systems-integration"],
    mockup: "commerce",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
