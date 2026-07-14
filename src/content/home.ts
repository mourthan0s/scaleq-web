import type { Locale } from "@/lib/i18n";

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline1: string;
    headline2: string;
    supporting: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  clarity: {
    index: string;
    label: string;
    stages: { title: string; body: string }[];
    closing: string;
  };
  capabilities: {
    index: string;
    label: string;
    heading: string;
    intro: string;
  };
  model: {
    index: string;
    label: string;
    heading: string;
    intro: string;
  };
  solutions: {
    index: string;
    label: string;
    heading: string;
    intro: string;
    outcomeLabel: string;
    cta: string;
  };
  outcomes: {
    index: string;
    label: string;
    heading: string;
    intro: string;
  };
  work: {
    index: string;
    label: string;
    heading: string;
    intro: string;
    sampleBadge: string;
    viewCase: string;
    viewAll: string;
  };
  technology: {
    index: string;
    label: string;
    heading: string;
    intro: string;
  };
  aboutTeaser: {
    index: string;
    label: string;
    heading: string;
    body: string;
    cta: string;
  };
  finalCta: {
    line1: string;
    line2: string;
    cta: string;
    secondary: string;
  };
}

export const homeContent: Record<Locale, HomeContent> = {
  el: {
    hero: {
      eyebrow: "Strategy · Technology · Digital Growth",
      headline1: "Η ανάπτυξη δεν είναι τύχη.",
      headline2: "Είναι αρχιτεκτονική.",
      supporting:
        "Η SCALEQ σχεδιάζει τα συστήματα πίσω από την εξέλιξη μιας επιχείρησης: στρατηγική, ψηφιακά προϊόντα, αυτοματισμούς και υποδομές που μετατρέπουν την πολυπλοκότητα σε οργανωμένη κλιμάκωση.",
      ctaPrimary: "Συζητήστε το επόμενο βήμα",
      ctaSecondary: "Δείτε πώς δουλεύουμε",
      scrollHint: "Κάντε scroll — το σύστημα μεγαλώνει",
    },
    clarity: {
      index: "SQ.00",
      label: "Από την πολυπλοκότητα στη δομή",
      stages: [
        {
          title: "Κάθε επιχείρηση που μεγαλώνει, μπερδεύεται.",
          body: "Εργαλεία που δεν συνεννοούνται, αρχεία σε δέκα σημεία, γνώση στο κεφάλι δύο ανθρώπων. Δεν είναι αποτυχία — είναι το φυσικό κόστος της ανάπτυξης χωρίς δομή.",
        },
        {
          title: "Η τεχνολογία μόνη της δεν φτιάχνει τάξη.",
          body: "Ένα ακόμα εργαλείο πάνω σε μια αόριστη διαδικασία παράγει πιο γρήγορο χάος. Πρώτα χαρτογραφούμε πώς πρέπει να ρέει η δουλειά — μετά επιλέγουμε τι θα τη στηρίξει.",
        },
        {
          title: "Η δομή είναι αυτό που κλιμακώνεται.",
          body: "Όταν διαδικασίες, δεδομένα και συστήματα αποκτούν αρχιτεκτονική, κάθε νέος πελάτης, προϊόν ή αγορά προστίθεται πάνω σε βάση — όχι πάνω σε εξαιρέσεις.",
        },
      ],
      closing: "Δεν προσθέτουμε απλώς τεχνολογία. Δημιουργούμε δομή.",
    },
    capabilities: {
      index: "SQ.10",
      label: "Ικανότητες",
      heading: "Τι αναλαμβάνουμε",
      intro:
        "Οκτώ περιοχές, μία λογική: κάθε παρέμβαση πρέπει να αφήνει την επιχείρηση πιο οργανωμένη απ' ό,τι τη βρήκε.",
    },
    model: {
      index: "SQ.20",
      label: "Operating model",
      heading: "Το μοντέλο λειτουργίας της SCALEQ",
      intro:
        "Έξι στάδια που επαναλαμβάνονται σε κάθε συνεργασία — από τη διάγνωση έως την κλιμάκωση. Το ίδιο σύστημα, σε κάθε στάδιο πιο ώριμο.",
    },
    solutions: {
      index: "SQ.30",
      label: "Λύσεις",
      heading: "Συστήματα με επιχειρηματικό αποτέλεσμα",
      intro:
        "Κάθε λύση υπάρχει για έναν λόγο: να αλλάξει έναν συγκεκριμένο αριθμό ή μια συγκεκριμένη καθημερινή δυσκολία.",
      outcomeLabel: "Αποτέλεσμα",
      cta: "Όλες οι λύσεις",
    },
    outcomes: {
      index: "SQ.40",
      label: "Αποτελέσματα",
      heading: "Τι αλλάζει στην πράξη",
      intro:
        "Δεν υποσχόμαστε ποσοστά. Υποσχόμαστε συγκεκριμένες, ελέγξιμες αλλαγές στον τρόπο που δουλεύει η επιχείρηση.",
    },
    work: {
      index: "SQ.50",
      label: "Επιλεγμένα έργα",
      heading: "Πώς μοιάζει η δουλειά μας",
      intro:
        "Ενδεικτικά σενάρια συνεργασίας που δείχνουν τον τρόπο σκέψης και υλοποίησης — από το πρόβλημα έως το μετρήσιμο αποτέλεσμα.",
      sampleBadge: "Ενδεικτικό σενάριο",
      viewCase: "Δείτε το έργο",
      viewAll: "Όλα τα έργα",
    },
    technology: {
      index: "SQ.60",
      label: "Τεχνολογία",
      heading: "Ώριμη τεχνολογία, όχι πειραματισμοί",
      intro:
        "Επιλέγουμε τεχνολογίες με κριτήριο τη συντηρησιμότητα και τη διάρκεια — όχι τη μόδα. Κάθε επιλογή πρέπει να δικαιολογείται επιχειρηματικά.",
    },
    aboutTeaser: {
      index: "SQ.70",
      label: "Σχετικά",
      heading: "Μικρή ομάδα. Senior δουλειά.",
      body: "Η SCALEQ είναι σκόπιμα lean: χωρίς ενδιάμεσους, χωρίς ιεραρχίες που χρεώνονται στο τιμολόγιο. Όσοι σχεδιάζουν τη λύση, την υλοποιούν — και απαντούν γι' αυτήν.",
      cta: "Γνωρίστε τη SCALEQ",
    },
    finalCta: {
      line1: "Η ανάπτυξη δεν ξεκινά από περισσότερα εργαλεία.",
      line2: "Ξεκινά από καλύτερη δομή.",
      cta: "Συζητήστε μαζί μας",
      secondary: "Ή δείτε πρώτα τον τρόπο που δουλεύουμε",
    },
  },
  en: {
    hero: {
      eyebrow: "Strategy · Technology · Digital Growth",
      headline1: "Growth is not luck.",
      headline2: "It is architecture.",
      supporting:
        "SCALEQ designs the systems behind a company's evolution: strategy, digital products, automation and infrastructure that turn complexity into organised scale.",
      ctaPrimary: "Discuss the next step",
      ctaSecondary: "See how we work",
      scrollHint: "Scroll — the system grows",
    },
    clarity: {
      index: "SQ.00",
      label: "From complexity to structure",
      stages: [
        {
          title: "Every growing business gets tangled.",
          body: "Tools that don't talk to each other, files in ten places, knowledge in two people's heads. That is not failure — it is the natural cost of growing without structure.",
        },
        {
          title: "Technology alone does not create order.",
          body: "One more tool on top of a vague process produces faster chaos. We first map how the work should flow — then choose what will support it.",
        },
        {
          title: "Structure is what scales.",
          body: "When processes, data and systems have an architecture, every new customer, product or market is added on top of a foundation — not on top of exceptions.",
        },
      ],
      closing: "We don't just add technology. We create structure.",
    },
    capabilities: {
      index: "SQ.10",
      label: "Capabilities",
      heading: "What we take on",
      intro:
        "Eight areas, one principle: every intervention must leave the business more organised than it found it.",
    },
    model: {
      index: "SQ.20",
      label: "Operating model",
      heading: "The SCALEQ operating model",
      intro:
        "Six stages repeated in every engagement — from diagnosis to scale. The same system, more mature at every stage.",
    },
    solutions: {
      index: "SQ.30",
      label: "Solutions",
      heading: "Systems with a business result",
      intro:
        "Every solution exists for one reason: to change a specific number or a specific daily struggle.",
      outcomeLabel: "Outcome",
      cta: "All solutions",
    },
    outcomes: {
      index: "SQ.40",
      label: "Outcomes",
      heading: "What changes in practice",
      intro:
        "We don't promise percentages. We promise specific, verifiable changes in how the business works.",
    },
    work: {
      index: "SQ.50",
      label: "Selected work",
      heading: "What our work looks like",
      intro:
        "Demonstration scenarios that show how we think and deliver — from the problem to the measurable result.",
      sampleBadge: "Demonstration scenario",
      viewCase: "View case",
      viewAll: "All projects",
    },
    technology: {
      index: "SQ.60",
      label: "Technology",
      heading: "Mature technology, not experiments",
      intro:
        "We choose technology for maintainability and longevity — not fashion. Every choice has to justify itself in business terms.",
    },
    aboutTeaser: {
      index: "SQ.70",
      label: "About",
      heading: "Small team. Senior work.",
      body: "SCALEQ is deliberately lean: no intermediaries, no hierarchy billed to the invoice. The people who design the solution build it — and answer for it.",
      cta: "Meet SCALEQ",
    },
    finalCta: {
      line1: "Growth doesn't start with more tools.",
      line2: "It starts with better structure.",
      cta: "Talk to us",
      secondary: "Or see how we work first",
    },
  },
};
