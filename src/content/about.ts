import type { Locale } from "@/lib/i18n";

export interface AboutContent {
  meta: { title: string; description: string };
  heroEyebrow: string;
  heroHeading: string;
  heroBody: string;
  philosophy: {
    heading: string;
    body: string[];
  };
  principles: {
    heading: string;
    items: { title: string; body: string }[];
  };
  positioning: {
    heading: string;
    body: string[];
  };
  workingModel: {
    heading: string;
    items: { title: string; body: string }[];
  };
  quality: {
    heading: string;
    items: string[];
  };
  partnership: {
    heading: string;
    body: string[];
  };
  cta: { heading: string; button: string };
}

export const aboutContent: Record<Locale, AboutContent> = {
  el: {
    meta: {
      title: "Σχετικά με τη SCALEQ | Ποιοι είμαστε",
      description:
        "Η SCALEQ είναι μια lean, senior τεχνολογική εταιρεία που σχεδιάζει και υλοποιεί ψηφιακά συστήματα με κριτήριο το επιχειρηματικό αποτέλεσμα.",
    },
    heroEyebrow: "Σχετικά",
    heroHeading: "Χτίζουμε λιγότερα. Τα χτίζουμε σωστά.",
    heroBody:
      "Η SCALEQ είναι μια σκόπιμα μικρή τεχνολογική εταιρεία με έδρα την Ελλάδα και διεθνή οπτική. Αναλαμβάνουμε λίγα έργα ταυτόχρονα, ώστε κάθε ένα να έχει την προσοχή που θα είχε αν ήταν το μοναδικό.",
    philosophy: {
      heading: "Φιλοσοφία",
      body: [
        "Πιστεύουμε ότι η τεχνολογία είναι μέσο, όχι σκοπός. Καμία πλατφόρμα, γλώσσα ή τάση δεν έχει αξία αν δεν αλλάζει κάτι μετρήσιμο στη λειτουργία ή στα έσοδα μιας επιχείρησης.",
        "Γι' αυτό κάθε συνεργασία ξεκινά από το πρόβλημα και όχι από τη λύση. Πρώτα καταλαβαίνουμε πώς δουλεύει η επιχείρηση, μετά σχεδιάζουμε τη δομή, και μόνο τότε γράφουμε κώδικα.",
        "Η ίδια λογική ισχύει και αντίστροφα: όταν κάτι δεν χρειάζεται custom λογισμικό, το λέμε. Το πιο ακριβό σύστημα είναι αυτό που δεν έπρεπε να φτιαχτεί ποτέ.",
      ],
    },
    principles: {
      heading: "Αρχές",
      items: [
        {
          title: "Το αποτέλεσμα προηγείται του παραδοτέου",
          body: "Δεν παραδίδουμε «ένα σύστημα». Παραδίδουμε μια αλλαγή στον τρόπο που δουλεύει η επιχείρηση — το λογισμικό είναι ο φορέας της.",
        },
        {
          title: "Η δομή πριν από την ταχύτητα",
          body: "Ό,τι χτίζεται βιαστικά πάνω σε ασαφή θεμέλια, πληρώνεται με τόκο. Επενδύουμε στην αρχιτεκτονική γιατί αυτή καθορίζει το κόστος των επόμενων πέντε ετών.",
        },
        {
          title: "Έντιμη επικοινωνία",
          body: "Ρεαλιστικές εκτιμήσεις, καθαρές προτεραιότητες, κακά νέα νωρίς. Ο συνεργάτης που τα μαθαίνει όλα τελευταίος δεν είναι συνεργάτης.",
        },
        {
          title: "Λιγότερα, καλύτερα",
          body: "Περιορισμένος αριθμός ενεργών έργων. Δεν πουλάμε χωρητικότητα που δεν έχουμε.",
        },
      ],
    },
    positioning: {
      heading: "Θέση",
      body: [
        "Η SCALEQ δεν είναι web agency και δεν θέλει να γίνει. Είμαστε τεχνολογικός συνεργάτης ανάπτυξης: συνδυάζουμε στρατηγική σκέψη, σχεδιασμό συστημάτων και υλοποίηση σε ένα ενιαίο σχήμα ευθύνης.",
        "Δουλεύουμε με επιχειρήσεις που εκσυγχρονίζονται, founders που χτίζουν ψηφιακά προϊόντα και οργανισμούς που χρειάζονται εξωτερική τεχνολογική ομάδα με εσωτερική νοοτροπία.",
      ],
    },
    workingModel: {
      heading: "Μοντέλο συνεργασίας",
      items: [
        {
          title: "Έργα με αρχή, μέση, αποτέλεσμα",
          body: "Διακριτά έργα με σαφές αντικείμενο, φάσεις και κριτήρια ολοκλήρωσης.",
        },
        {
          title: "Σταθερή τεχνολογική συνεργασία",
          body: "Μακροχρόνιο σχήμα όπου η SCALEQ λειτουργεί ως η τεχνολογική ομάδα της επιχείρησης, με τριμηνιαία πλάνα.",
        },
        {
          title: "Συμβουλευτική",
          body: "Στρατηγική, αρχιτεκτονική ή αξιολόγηση — όταν χρειάζεται κρίση, όχι κώδικας.",
        },
      ],
    },
    quality: {
      heading: "Πρότυπα ποιότητας",
      items: [
        "Κώδικας με τεκμηρίωση που επιτρέπει σε οποιαδήποτε ομάδα να συνεχίσει",
        "Απόδοση και προσβασιμότητα ως προδιαγραφή, όχι ως πρόσθετο",
        "Ασφάλεια δεδομένων σε κάθε επίπεδο σχεδιασμού",
        "Παράδοση σε φάσεις με λειτουργικό αποτέλεσμα σε κάθε φάση",
        "Καμία εξάρτηση-κλειδωμα: η επιχείρηση είναι ιδιοκτήτης των συστημάτων της",
      ],
    },
    partnership: {
      heading: "Πώς μοιάζει η συνεργασία",
      body: [
        "Ξεκινάμε πάντα με μια δομημένη συζήτηση διάγνωσης — χωρίς κόστος και χωρίς δέσμευση. Αν μπορούμε να βοηθήσουμε, θα σας πούμε πώς, με τι σειρά και με ποιο ενδεικτικό κόστος. Αν δεν μπορούμε, θα σας πούμε ποιος μπορεί.",
        "Από εκεί και πέρα, η συνεργασία χτίζεται σε ρυθμό που αντέχει η επιχείρηση: φάσεις με πραγματικά παραδοτέα, τακτική επικοινωνία και αποφάσεις που παίρνονται με στοιχεία.",
      ],
    },
    cta: {
      heading: "Θέλετε να δείτε αν ταιριάζουμε;",
      button: "Ξεκινήστε τη συζήτηση",
    },
  },
  en: {
    meta: {
      title: "About SCALEQ | Who we are",
      description:
        "SCALEQ is a lean, senior technology company that designs and builds digital systems judged by their business outcome.",
    },
    heroEyebrow: "About",
    heroHeading: "We build less. We build it right.",
    heroBody:
      "SCALEQ is a deliberately small technology company based in Greece with an international outlook. We take on few projects at a time, so each one gets the attention it would receive if it were the only one.",
    philosophy: {
      heading: "Philosophy",
      body: [
        "We believe technology is a means, not an end. No platform, language or trend has value unless it changes something measurable in a company's operations or revenue.",
        "That is why every engagement starts from the problem, not the solution. First we understand how the business works, then we design the structure, and only then do we write code.",
        "The same logic applies in reverse: when something doesn't need custom software, we say so. The most expensive system is the one that should never have been built.",
      ],
    },
    principles: {
      heading: "Principles",
      items: [
        {
          title: "Outcome before deliverable",
          body: "We don't deliver “a system”. We deliver a change in how the business works — the software is its carrier.",
        },
        {
          title: "Structure before speed",
          body: "Whatever is built hastily on vague foundations is repaid with interest. We invest in architecture because it sets the cost of the next five years.",
        },
        {
          title: "Honest communication",
          body: "Realistic estimates, clear priorities, bad news early. A partner who hears everything last is not a partner.",
        },
        {
          title: "Fewer things, done better",
          body: "A limited number of active projects. We don't sell capacity we don't have.",
        },
      ],
    },
    positioning: {
      heading: "Positioning",
      body: [
        "SCALEQ is not a web agency and doesn't want to become one. We are a technology and growth partner: strategic thinking, systems design and delivery combined under one line of accountability.",
        "We work with businesses that are modernising, founders building digital products, and organisations that need an external technology team with an internal mindset.",
      ],
    },
    workingModel: {
      heading: "Working model",
      items: [
        {
          title: "Projects with a beginning, middle and result",
          body: "Discrete projects with a clear scope, phases and completion criteria.",
        },
        {
          title: "Standing technology partnership",
          body: "A long-term arrangement where SCALEQ operates as the company's technology team, on quarterly plans.",
        },
        {
          title: "Consulting",
          body: "Strategy, architecture or assessment — when judgement is needed, not code.",
        },
      ],
    },
    quality: {
      heading: "Quality standards",
      items: [
        "Code documented well enough for any team to continue",
        "Performance and accessibility as a baseline, not an add-on",
        "Data security at every level of design",
        "Phased delivery with a working result at every phase",
        "No lock-in: the business owns its systems",
      ],
    },
    partnership: {
      heading: "What working together looks like",
      body: [
        "We always start with a structured diagnostic conversation — free and without commitment. If we can help, we'll tell you how, in what order and at what indicative cost. If we can't, we'll tell you who can.",
        "From there, the partnership is built at a pace the business can sustain: phases with real deliverables, regular communication and decisions made on evidence.",
      ],
    },
    cta: {
      heading: "Want to see if we're a fit?",
      button: "Start the conversation",
    },
  },
};
