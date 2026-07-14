import type { Localized } from "@/lib/types";

/**
 * Business outcomes — deliberately qualitative.
 * No invented percentages or fabricated metrics anywhere on the site.
 */
export interface Outcome {
  key: string;
  title: Localized<string>;
  description: Localized<string>;
}

export const outcomes: Outcome[] = [
  {
    key: "less-manual",
    title: { el: "Λιγότερη χειροκίνητη εργασία", en: "Less manual work" },
    description: {
      el: "Ό,τι επαναλαμβάνεται, αυτοματοποιείται. Η ομάδα δουλεύει εκεί όπου χρειάζεται κρίση.",
      en: "What repeats gets automated. The team works where judgement is needed.",
    },
  },
  {
    key: "better-decisions",
    title: { el: "Καλύτερες αποφάσεις", en: "Better decisions" },
    description: {
      el: "Ενιαία, τρέχουσα εικόνα δεδομένων αντί για αντικρουόμενα exports.",
      en: "One current picture of the data instead of conflicting exports.",
    },
  },
  {
    key: "organized-operations",
    title: { el: "Οργανωμένη λειτουργία", en: "Organised operations" },
    description: {
      el: "Διαδικασίες με σαφή βήματα, υπευθύνους και ιστορικό — όχι προφορική παράδοση.",
      en: "Processes with clear steps, owners and history — not oral tradition.",
    },
  },
  {
    key: "new-revenue",
    title: { el: "Νέες πηγές εσόδων", en: "New revenue streams" },
    description: {
      el: "Ψηφιακά κανάλια και υπηρεσίες που πωλούν πέρα από το φυσικό αποτύπωμα.",
      en: "Digital channels and services that sell beyond the physical footprint.",
    },
  },
  {
    key: "customer-experience",
    title: { el: "Καλύτερη εμπειρία πελάτη", en: "Better customer experience" },
    description: {
      el: "Ο πελάτης εξυπηρετείται γρηγορότερα και βλέπει μόνος του όσα σήμερα ρωτά.",
      en: "Customers are served faster and can see for themselves what they ask about today.",
    },
  },
  {
    key: "scalable-foundation",
    title: { el: "Υποδομή που κλιμακώνεται", en: "Infrastructure that scales" },
    description: {
      el: "Η ανάπτυξη δεν απαιτεί αναλογική αύξηση προσωπικού και κόστους.",
      en: "Growth stops requiring a proportional increase in staff and cost.",
    },
  },
  {
    key: "lower-cost",
    title: { el: "Χαμηλότερο λειτουργικό κόστος", en: "Lower operating cost" },
    description: {
      el: "Λιγότερα λάθη, λιγότερες επαναλήψεις, λιγότερα εργαλεία που πληρώνονται χωρίς λόγο.",
      en: "Fewer errors, fewer do-overs, fewer tools paid for without reason.",
    },
  },
  {
    key: "unified-data",
    title: { el: "Ενιαία εικόνα δεδομένων", en: "A unified data picture" },
    description: {
      el: "Κάθε αριθμός έχει μία πηγή. Οι συζητήσεις γίνονται για αποφάσεις, όχι για το ποιος αριθμός ισχύει.",
      en: "Every number has one source. Meetings are about decisions, not about whose number is right.",
    },
  },
];
