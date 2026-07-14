import type { Localized } from "@/lib/types";

/**
 * The SCALEQ Operating Model — the six-stage framework that anchors the brand.
 * Referenced across the homepage, the approach page and case studies.
 */
export interface ModelStage {
  index: string;
  key: "understand" | "structure" | "build" | "connect" | "measure" | "scale";
  title: Localized<string>;
  description: Localized<string>;
}

export const modelStages: ModelStage[] = [
  {
    index: "SQ.01",
    key: "understand",
    title: { el: "Understand — Κατανόηση", en: "Understand" },
    description: {
      el: "Πώς λειτουργεί σήμερα η επιχείρηση, πού χάνεται χρόνος και χρήμα, τι πραγματικά χρειάζεται να αλλάξει. Καμία τεχνολογική απόφαση πριν από αυτό.",
      en: "How the business runs today, where time and money leak, what actually needs to change. No technology decision before this.",
    },
  },
  {
    index: "SQ.02",
    key: "structure",
    title: { el: "Structure — Δομή", en: "Structure" },
    description: {
      el: "Η πολυπλοκότητα οργανώνεται: διαδικασίες, δεδομένα και ρόλοι αποκτούν σαφή αρχιτεκτονική πριν γραφτεί κώδικας.",
      en: "Complexity gets organised: processes, data and roles receive a clear architecture before code is written.",
    },
  },
  {
    index: "SQ.03",
    key: "build",
    title: { el: "Build — Υλοποίηση", en: "Build" },
    description: {
      el: "Υλοποίηση σε φάσεις με προτεραιότητα στην αξία: κάθε παράδοση λειτουργεί, χρησιμοποιείται και κρίνεται στην πράξη.",
      en: "Delivery in phases, value first: every release works, gets used and is judged in practice.",
    },
  },
  {
    index: "SQ.04",
    key: "connect",
    title: { el: "Connect — Διασύνδεση", en: "Connect" },
    description: {
      el: "Το νέο σύστημα δένει με ό,τι υπάρχει: ERP, πληρωμές, κανάλια, εργαλεία. Τα δεδομένα ρέουν χωρίς διπλή καταχώρηση.",
      en: "The new system ties into what exists: ERP, payments, channels, tools. Data flows without double entry.",
    },
  },
  {
    index: "SQ.05",
    key: "measure",
    title: { el: "Measure — Μέτρηση", en: "Measure" },
    description: {
      el: "Η απόδοση παρακολουθείται με λίγους, σωστούς δείκτες. Ό,τι δεν αποδίδει, διορθώνεται με στοιχεία — όχι με εντύπωση.",
      en: "Performance is tracked with a few correct indicators. What underperforms is fixed with evidence — not impressions.",
    },
  },
  {
    index: "SQ.06",
    key: "scale",
    title: { el: "Scale — Κλιμάκωση", en: "Scale" },
    description: {
      el: "Με τη βάση σταθερή, η επέκταση γίνεται επιλογή, όχι ρίσκο: νέα κανάλια, περισσότεροι χρήστες, επόμενες αγορές.",
      en: "With the foundation stable, expansion becomes a choice, not a risk: new channels, more users, next markets.",
    },
  },
];
