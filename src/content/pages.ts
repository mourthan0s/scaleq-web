import type { Locale } from "@/lib/i18n";

/** Page-level headings and metadata for the index pages. */

export interface IndexPageContent {
  meta: { title: string; description: string };
  eyebrow: string;
  heading: string;
  intro: string;
}

export const servicesPage: Record<Locale, IndexPageContent & {
  problemLabel: string;
  deliverablesLabel: string;
  audienceLabel: string;
  processLabel: string;
  relatedLabel: string;
  cta: string;
}> = {
  el: {
    meta: {
      title: "Υπηρεσίες | SCALEQ — Strategy, Technology & Digital Growth",
      description:
        "Στρατηγική, σχεδιασμός, ανάπτυξη λογισμικού, e-commerce, AI & automation, integrations και τεχνολογική συνεργασία — υπηρεσίες με σαφές αντικείμενο και αποτέλεσμα.",
    },
    eyebrow: "Υπηρεσίες",
    heading: "Δώδεκα τρόποι να αποκτήσει δομή η ανάπτυξή σας.",
    intro:
      "Κάθε υπηρεσία απαντά σε ένα συγκεκριμένο πρόβλημα. Καμία δεν πωλείται «με το κιλό» — όλες ξεκινούν από το τι χρειάζεται να αλλάξει στην επιχείρησή σας.",
    problemLabel: "Το πρόβλημα",
    deliverablesLabel: "Τι παραδίδεται",
    audienceLabel: "Για ποιους",
    processLabel: "Ενδεικτική διαδικασία",
    relatedLabel: "Σχετικές λύσεις",
    cta: "Συζητήστε το δικό σας πλαίσιο",
  },
  en: {
    meta: {
      title: "Services | SCALEQ — Strategy, Technology & Digital Growth",
      description:
        "Strategy, design, software development, e-commerce, AI & automation, integrations and technology partnership — services with a clear scope and outcome.",
    },
    eyebrow: "Services",
    heading: "Twelve ways to give your growth structure.",
    intro:
      "Every service answers a specific problem. None is sold by the kilo — all of them start from what needs to change in your business.",
    problemLabel: "The problem",
    deliverablesLabel: "What is delivered",
    audienceLabel: "Who it is for",
    processLabel: "Indicative process",
    relatedLabel: "Related solutions",
    cta: "Discuss your own context",
  },
};

export const solutionsPage: Record<Locale, IndexPageContent & {
  outcomeLabel: string;
  relatedLabel: string;
  cta: string;
}> = {
  el: {
    meta: {
      title: "Λύσεις | SCALEQ — Συστήματα με επιχειρηματικό αποτέλεσμα",
      description:
        "Πλατφόρμες διαχείρισης, client portals, αυτοματισμοί, AI workflows, e-commerce οικοσυστήματα και dashboards — κάθε λύση συνδεδεμένη με πραγματικό επιχειρηματικό αποτέλεσμα.",
    },
    eyebrow: "Λύσεις",
    heading: "Συστήματα που αλλάζουν αριθμούς, όχι μόνο οθόνες.",
    intro:
      "Οι λύσεις δεν είναι κατάλογος προϊόντων — είναι μοτίβα που έχουν αποδειχθεί ότι δουλεύουν, προσαρμοσμένα κάθε φορά στη δική σας λειτουργία.",
    outcomeLabel: "Επιχειρηματικό αποτέλεσμα",
    relatedLabel: "Σχετικές υπηρεσίες",
    cta: "Ποια λύση ταιριάζει σε εσάς;",
  },
  en: {
    meta: {
      title: "Solutions | SCALEQ — Systems with a business result",
      description:
        "Management platforms, client portals, automation, AI workflows, e-commerce ecosystems and dashboards — every solution tied to a real business outcome.",
    },
    eyebrow: "Solutions",
    heading: "Systems that change numbers, not just screens.",
    intro:
      "Solutions are not a product catalogue — they are patterns proven to work, adapted each time to your own operation.",
    outcomeLabel: "Business outcome",
    relatedLabel: "Related services",
    cta: "Which solution fits you?",
  },
};

export const projectsPage: Record<Locale, IndexPageContent & {
  sampleNotice: string;
  clientLabel: string;
  industryLabel: string;
  challengeLabel: string;
  strategyLabel: string;
  solutionLabel: string;
  technologiesLabel: string;
  systemsLabel: string;
  outcomeLabel: string;
  relatedLabel: string;
  backLabel: string;
  viewLabel: string;
}> = {
  el: {
    meta: {
      title: "Έργα & Case Studies | SCALEQ",
      description:
        "Ενδεικτικά σενάρια έργων της SCALEQ: πλατφόρμες λειτουργίας, client portals και e-commerce με αυτοματοποιημένες ροές — από το πρόβλημα έως το αποτέλεσμα.",
    },
    eyebrow: "Έργα",
    heading: "Από το πρόβλημα στο σύστημα.",
    intro:
      "Τα παρακάτω είναι ενδεικτικά σενάρια που δείχνουν τον τρόπο σκέψης και υλοποίησής μας. Πραγματικά case studies θα δημοσιεύονται εδώ με τη σύμφωνη γνώμη των πελατών μας.",
    sampleNotice: "Ενδεικτικό σενάριο — παρουσιάζει τη μεθοδολογία, όχι συγκεκριμένο πελάτη.",
    clientLabel: "Πελάτης",
    industryLabel: "Κλάδος",
    challengeLabel: "Η πρόκληση",
    strategyLabel: "Η στρατηγική",
    solutionLabel: "Η λύση",
    technologiesLabel: "Τεχνολογίες",
    systemsLabel: "Συστήματα που παραδόθηκαν",
    outcomeLabel: "Επιχειρηματικό αποτέλεσμα",
    relatedLabel: "Σχετικές υπηρεσίες",
    backLabel: "Όλα τα έργα",
    viewLabel: "Δείτε το έργο",
  },
  en: {
    meta: {
      title: "Projects & Case Studies | SCALEQ",
      description:
        "Demonstration project scenarios from SCALEQ: operations platforms, client portals and e-commerce with automated flows — from problem to outcome.",
    },
    eyebrow: "Projects",
    heading: "From problem to system.",
    intro:
      "The cases below are demonstration scenarios that show how we think and deliver. Real case studies will be published here with our clients' consent.",
    sampleNotice: "Demonstration scenario — it illustrates the methodology, not a specific client.",
    clientLabel: "Client",
    industryLabel: "Industry",
    challengeLabel: "The challenge",
    strategyLabel: "The strategy",
    solutionLabel: "The solution",
    technologiesLabel: "Technologies",
    systemsLabel: "Delivered systems",
    outcomeLabel: "Business outcome",
    relatedLabel: "Related services",
    backLabel: "All projects",
    viewLabel: "View case",
  },
};

export const homeMeta: Record<Locale, { title: string; description: string }> = {
  el: {
    title: "SCALEQ | Strategy, Technology & Digital Growth",
    description:
      "Η SCALEQ σχεδιάζει ψηφιακά προϊόντα, επιχειρηματικά συστήματα, αυτοματισμούς και τεχνολογικές υποδομές που βοηθούν οργανισμούς να λειτουργούν καλύτερα και να αναπτύσσονται με σταθερές βάσεις.",
  },
  en: {
    title: "SCALEQ | Strategy, Technology & Digital Growth",
    description:
      "SCALEQ designs digital products, business systems, automation and technology infrastructure that help organisations run better and grow on solid foundations.",
  },
};
