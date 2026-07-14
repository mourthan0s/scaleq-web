import type { Locale } from "@/lib/i18n";

export interface ApproachContent {
  meta: { title: string; description: string };
  eyebrow: string;
  heading: string;
  intro: string;
  stagesHeading: string;
  stageDetails: Record<
    "understand" | "structure" | "build" | "connect" | "measure" | "scale",
    { activities: string[]; result: string }
  >;
  activitiesLabel: string;
  resultLabel: string;
  collaboration: {
    heading: string;
    items: { title: string; body: string }[];
  };
  cta: { heading: string; body: string; button: string };
}

export const approachContent: Record<Locale, ApproachContent> = {
  el: {
    meta: {
      title: "Τρόπος συνεργασίας | SCALEQ",
      description:
        "Το μοντέλο λειτουργίας της SCALEQ: έξι στάδια από την κατανόηση της επιχείρησης έως την κλιμάκωση — με σαφή παραδοτέα σε κάθε φάση.",
    },
    eyebrow: "Τρόπος συνεργασίας",
    heading: "Ίδιο μοντέλο. Κάθε φορά.",
    intro:
      "Κάθε συνεργασία της SCALEQ περνά από τα ίδια έξι στάδια. Όχι επειδή κάθε επιχείρηση είναι ίδια — αλλά επειδή η πειθαρχία στη διαδικασία είναι αυτό που επιτρέπει σε κάθε λύση να είναι διαφορετική με ασφάλεια.",
    stagesHeading: "Τα έξι στάδια",
    activitiesLabel: "Τι γίνεται",
    resultLabel: "Τι μένει",
    stageDetails: {
      understand: {
        activities: [
          "Συνεντεύξεις με τους ανθρώπους που κάνουν τη δουλειά",
          "Καταγραφή σημερινών ροών, εργαλείων και σημείων τριβής",
          "Ανάλυση δεδομένων και αριθμών όπου υπάρχουν",
        ],
        result: "Κοινή, γραπτή εικόνα του προβλήματος — πριν από οποιαδήποτε πρόταση λύσης.",
      },
      structure: {
        activities: [
          "Σχεδιασμός της ροής όπως πρέπει να λειτουργεί",
          "Αρχιτεκτονική συστημάτων και δεδομένων",
          "Προτεραιοποίηση: τι χτίζεται πρώτο και γιατί",
        ],
        result: "Σχέδιο υλοποίησης με φάσεις, κόστος και κριτήρια επιτυχίας.",
      },
      build: {
        activities: [
          "Υλοποίηση σε σύντομες φάσεις με λειτουργικό αποτέλεσμα",
          "Δοκιμές με πραγματικούς χρήστες από νωρίς",
          "Τακτικές ενημερώσεις προόδου χωρίς τεχνική ορολογία",
        ],
        result: "Σύστημα που χρησιμοποιείται — όχι demo που παρουσιάζεται.",
      },
      connect: {
        activities: [
          "Συνδέσεις με ERP, CRM, πληρωμές και υπάρχοντα εργαλεία",
          "Μετάπτωση δεδομένων με έλεγχο ακεραιότητας",
          "Εκπαίδευση της ομάδας στη νέα ροή",
        ],
        result: "Ενιαίο περιβάλλον λειτουργίας χωρίς διπλές καταχωρήσεις.",
      },
      measure: {
        activities: [
          "Ορισμός λίγων, ουσιαστικών δεικτών με τη διοίκηση",
          "Παρακολούθηση χρήσης και απόδοσης",
          "Διορθώσεις με βάση στοιχεία, όχι εντυπώσεις",
        ],
        result: "Αντικειμενική απάντηση στο «άξιζε;» — και λίστα επόμενων βελτιώσεων.",
      },
      scale: {
        activities: [
          "Επέκταση σε νέα κανάλια, χρήστες ή αγορές",
          "Ενίσχυση υποδομής όπου το φορτίο μεγαλώνει",
          "Τριμηνιαίος σχεδιασμός εξέλιξης",
        ],
        result: "Ανάπτυξη που προστίθεται πάνω σε βάση — όχι πάνω σε εξαιρέσεις.",
      },
    },
    collaboration: {
      heading: "Πώς δουλεύουμε μαζί σας",
      items: [
        {
          title: "Ένας συνομιλητής",
          body: "Μιλάτε με τον άνθρωπο που σχεδιάζει και υλοποιεί — όχι με account manager που μεταφέρει μηνύματα.",
        },
        {
          title: "Γραπτή διαφάνεια",
          body: "Αποφάσεις, εκκρεμότητες και πρόοδος καταγράφονται. Τίποτα σημαντικό δεν ζει μόνο σε τηλεφωνήματα.",
        },
        {
          title: "Ρυθμός που αντέχεται",
          body: "Φάσεις προσαρμοσμένες στη διαθεσιμότητα της δικής σας ομάδας — γιατί κάθε σύστημα χρειάζεται και τη δική σας συμμετοχή.",
        },
        {
          title: "Καθαρή ιδιοκτησία",
          body: "Κώδικας, δεδομένα και λογαριασμοί ανήκουν στην επιχείρησή σας από την πρώτη μέρα.",
        },
      ],
    },
    cta: {
      heading: "Το πρώτο στάδιο δεν κοστίζει τίποτα.",
      body: "Η πρώτη διαγνωστική συζήτηση είναι χωρίς χρέωση και χωρίς δέσμευση. Θα φύγετε με πιο καθαρή εικόνα — ακόμα κι αν δεν συνεργαστούμε.",
      button: "Κλείστε τη συζήτηση",
    },
  },
  en: {
    meta: {
      title: "Approach | SCALEQ",
      description:
        "The SCALEQ operating model: six stages from understanding the business to scaling it — with clear deliverables at every phase.",
    },
    eyebrow: "Approach",
    heading: "Same model. Every time.",
    intro:
      "Every SCALEQ engagement moves through the same six stages. Not because every business is the same — but because discipline in the process is what lets every solution be different, safely.",
    stagesHeading: "The six stages",
    activitiesLabel: "What happens",
    resultLabel: "What remains",
    stageDetails: {
      understand: {
        activities: [
          "Interviews with the people who do the work",
          "Mapping current flows, tools and friction points",
          "Analysis of data and numbers where they exist",
        ],
        result: "A shared, written picture of the problem — before any proposed solution.",
      },
      structure: {
        activities: [
          "Designing the flow as it should work",
          "Systems and data architecture",
          "Prioritisation: what gets built first and why",
        ],
        result: "An implementation plan with phases, cost and success criteria.",
      },
      build: {
        activities: [
          "Delivery in short phases with a working result",
          "Testing with real users from early on",
          "Regular progress updates without jargon",
        ],
        result: "A system that is used — not a demo that is presented.",
      },
      connect: {
        activities: [
          "Integrations with ERP, CRM, payments and existing tools",
          "Data migration with integrity checks",
          "Team training on the new flow",
        ],
        result: "One working environment with no double entry.",
      },
      measure: {
        activities: [
          "Defining a few meaningful indicators with management",
          "Tracking usage and performance",
          "Corrections based on evidence, not impressions",
        ],
        result: "An objective answer to “was it worth it?” — and a list of next improvements.",
      },
      scale: {
        activities: [
          "Expansion to new channels, users or markets",
          "Strengthening infrastructure where load grows",
          "Quarterly evolution planning",
        ],
        result: "Growth added on top of a foundation — not on top of exceptions.",
      },
    },
    collaboration: {
      heading: "How we work with you",
      items: [
        {
          title: "One counterpart",
          body: "You talk to the person who designs and builds — not an account manager relaying messages.",
        },
        {
          title: "Written transparency",
          body: "Decisions, open items and progress are documented. Nothing important lives only in phone calls.",
        },
        {
          title: "A sustainable pace",
          body: "Phases matched to your own team's availability — because every system needs your participation too.",
        },
        {
          title: "Clean ownership",
          body: "Code, data and accounts belong to your business from day one.",
        },
      ],
    },
    cta: {
      heading: "The first stage costs nothing.",
      body: "The first diagnostic conversation is free and without commitment. You will leave with a clearer picture — even if we never work together.",
      button: "Book the conversation",
    },
  },
};
