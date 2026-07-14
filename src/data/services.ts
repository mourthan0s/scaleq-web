import type { Localized } from "@/lib/types";

export interface Service {
  slug: string;
  title: Localized<string>;
  /** Which business problem the service solves. */
  problem: Localized<string>;
  /** What can actually be delivered. */
  deliverables: Localized<string[]>;
  /** Who it is for. */
  audience: Localized<string>;
  /** Indicative process, in order. */
  process: Localized<string[]>;
  /** Slugs of related solutions (see data/solutions.ts). */
  relatedSolutions: string[];
}

export const services: Service[] = [
  {
    slug: "strategy-consulting",
    title: { el: "Στρατηγική & Digital Consulting", en: "Strategy & Digital Consulting" },
    problem: {
      el: "Οι περισσότερες επιχειρήσεις δεν έχουν έλλειψη εργαλείων — έχουν έλλειψη κατεύθυνσης. Αγοράζουν λογισμικό πριν αποφασίσουν τι πρόβλημα λύνουν.",
      en: "Most businesses do not lack tools — they lack direction. They buy software before deciding which problem it should solve.",
    },
    deliverables: {
      el: [
        "Τεχνολογικός και λειτουργικός έλεγχος της υπάρχουσας κατάστασης",
        "Ψηφιακή στρατηγική με σαφείς προτεραιότητες και φάσεις",
        "Roadmap υλοποίησης με ρεαλιστικό κόστος και σειρά",
        "Αξιολόγηση προμηθευτών και υπαρχόντων συστημάτων",
      ],
      en: [
        "Technology and operations audit of the current state",
        "Digital strategy with clear priorities and phases",
        "Implementation roadmap with realistic cost and sequencing",
        "Assessment of vendors and existing systems",
      ],
    },
    audience: {
      el: "Διοικήσεις και ιδιοκτήτες επιχειρήσεων που θέλουν να επενδύσουν στην τεχνολογία με σχέδιο, όχι με δοκιμές.",
      en: "Executives and business owners who want to invest in technology with a plan, not with experiments.",
    },
    process: {
      el: ["Διάγνωση λειτουργίας", "Χαρτογράφηση διαδικασιών", "Στρατηγικές επιλογές", "Roadmap & προϋπολογισμός"],
      en: ["Operational diagnosis", "Process mapping", "Strategic options", "Roadmap & budget"],
    },
    relatedSolutions: ["business-platform", "analytics-dashboard", "automation-system"],
  },
  {
    slug: "product-strategy",
    title: { el: "Product Strategy", en: "Product Strategy" },
    problem: {
      el: "Ένα ψηφιακό προϊόν αποτυγχάνει σπάνια στον κώδικα. Συνήθως αποτυγχάνει στο τι χτίστηκε, για ποιον και με ποια σειρά.",
      en: "A digital product rarely fails in the code. It usually fails in what was built, for whom, and in what order.",
    },
    deliverables: {
      el: [
        "Ορισμός προϊόντος: πρόβλημα, κοινό, βασική αξία",
        "Προτεραιοποίηση λειτουργιών και MVP scope",
        "Product roadmap συνδεδεμένο με επιχειρηματικούς στόχους",
        "Μοντέλο εσόδων και μετρήσεις επιτυχίας",
      ],
      en: [
        "Product definition: problem, audience, core value",
        "Feature prioritisation and MVP scope",
        "Product roadmap tied to business goals",
        "Revenue model and success metrics",
      ],
    },
    audience: {
      el: "Founders και ομάδες που ετοιμάζουν νέο προϊόν ή επανασχεδιάζουν υπάρχον.",
      en: "Founders and teams preparing a new product or rethinking an existing one.",
    },
    process: {
      el: ["Έρευνα & στόχοι", "Ορισμός MVP", "Σχεδιασμός roadmap", "Μετρήσεις & επανεκτίμηση"],
      en: ["Research & goals", "MVP definition", "Roadmap design", "Metrics & review"],
    },
    relatedSolutions: ["marketplace", "client-portal", "digital-service-platform"],
  },
  {
    slug: "ux-ui-design",
    title: { el: "UX/UI Design", en: "UX/UI Design" },
    problem: {
      el: "Όταν ένα σύστημα είναι δύσχρηστο, το κόστος δεν φαίνεται στο τιμολόγιο — φαίνεται στα λάθη, στην εκπαίδευση και στους χρήστες που το παρακάμπτουν.",
      en: "When a system is hard to use, the cost never shows on an invoice — it shows in errors, training time and users who work around it.",
    },
    deliverables: {
      el: [
        "UX έρευνα και ροές χρηστών",
        "Wireframes και interactive prototypes",
        "Πλήρες UI design system με tokens και components",
        "Σχεδιασμός για web, mobile και εσωτερικά εργαλεία",
      ],
      en: [
        "UX research and user flows",
        "Wireframes and interactive prototypes",
        "Complete UI design system with tokens and components",
        "Design for web, mobile and internal tools",
      ],
    },
    audience: {
      el: "Ομάδες προϊόντος και επιχειρήσεις που θέλουν τα συστήματά τους να χρησιμοποιούνται χωρίς εγχειρίδιο.",
      en: "Product teams and businesses that want systems people can use without a manual.",
    },
    process: {
      el: ["Κατανόηση χρηστών", "Αρχιτεκτονική ροών", "Prototype & έλεγχος", "Design system"],
      en: ["User understanding", "Flow architecture", "Prototype & testing", "Design system"],
    },
    relatedSolutions: ["client-portal", "internal-tool", "booking-system"],
  },
  {
    slug: "web-development",
    title: { el: "Web Development", en: "Web Development" },
    problem: {
      el: "Ένα website που αργεί, δεν βρίσκεται στην αναζήτηση ή δεν μπορεί να εξελιχθεί, δουλεύει ενάντια στην επιχείρηση που το πληρώνει.",
      en: "A website that is slow, invisible to search, or impossible to evolve works against the business paying for it.",
    },
    deliverables: {
      el: [
        "Custom corporate websites και digital experiences",
        "Web εφαρμογές με σύγχρονα frameworks (Next.js, React, Angular)",
        "Τεχνικό SEO, performance και accessibility ως προδιαγραφή",
        "Αρχιτεκτονική έτοιμη για μελλοντικό CMS ή integrations",
      ],
      en: [
        "Custom corporate websites and digital experiences",
        "Web applications on modern frameworks (Next.js, React, Angular)",
        "Technical SEO, performance and accessibility as a baseline",
        "Architecture ready for a future CMS or integrations",
      ],
    },
    audience: {
      el: "Επιχειρήσεις που θέλουν το web παρουσιαστικό τους να είναι υποδομή, όχι φυλλάδιο.",
      en: "Businesses that want their web presence to be infrastructure, not a brochure.",
    },
    process: {
      el: ["Προδιαγραφές & περιεχόμενο", "Design", "Υλοποίηση", "Μετρήσεις & βελτιστοποίηση"],
      en: ["Specification & content", "Design", "Build", "Measurement & optimisation"],
    },
    relatedSolutions: ["digital-service-platform", "ecommerce-ecosystem", "booking-system"],
  },
  {
    slug: "mobile-development",
    title: { el: "Mobile App Development", en: "Mobile App Development" },
    problem: {
      el: "Το mobile δεν είναι μικρότερη οθόνη — είναι διαφορετικό περιβάλλον χρήσης. Εφαρμογές που το αγνοούν εγκαταλείπονται.",
      en: "Mobile is not a smaller screen — it is a different context of use. Apps that ignore this get abandoned.",
    },
    deliverables: {
      el: [
        "Cross-platform εφαρμογές με React Native",
        "Native Android ανάπτυξη με Kotlin όπου απαιτείται",
        "Σύνδεση με backend, APIs και υπάρχοντα συστήματα",
        "Δημοσίευση σε App Store και Google Play",
      ],
      en: [
        "Cross-platform apps with React Native",
        "Native Android development with Kotlin where required",
        "Integration with backends, APIs and existing systems",
        "App Store and Google Play releases",
      ],
    },
    audience: {
      el: "Επιχειρήσεις και founders που χρειάζονται εφαρμογή για πελάτες, συνεργάτες ή προσωπικό πεδίου.",
      en: "Businesses and founders that need an app for customers, partners or field staff.",
    },
    process: {
      el: ["Σκοπός & ροές", "Design για mobile", "Ανάπτυξη & δοκιμές", "Δημοσίευση & συντήρηση"],
      en: ["Purpose & flows", "Mobile-first design", "Development & testing", "Release & maintenance"],
    },
    relatedSolutions: ["client-portal", "booking-system", "internal-tool"],
  },
  {
    slug: "ecommerce",
    title: { el: "E-commerce", en: "E-commerce" },
    problem: {
      el: "Ένα ηλεκτρονικό κατάστημα δεν είναι μόνο checkout. Είναι απόθεμα, τιμολόγηση, logistics, επιστροφές και δεδομένα — και όλα πρέπει να συνεννοούνται.",
      en: "An online store is not just a checkout. It is inventory, pricing, logistics, returns and data — and they all have to talk to each other.",
    },
    deliverables: {
      el: [
        "E-commerce καταστήματα και B2B πλατφόρμες παραγγελιών",
        "Σύνδεση με ERP, αποθήκη και συστήματα τιμολόγησης",
        "Πληρωμές, αποστολές και αυτοματοποίηση παραγγελιών",
        "Αναφορές πωλήσεων και δεδομένα πελατών σε μία εικόνα",
      ],
      en: [
        "E-commerce stores and B2B ordering platforms",
        "Integration with ERP, warehouse and invoicing systems",
        "Payments, shipping and order automation",
        "Sales reporting and customer data in a single view",
      ],
    },
    audience: {
      el: "Λιανική και χονδρική που θέλει το online κανάλι να λειτουργεί σαν κανονικό κατάστημα — με απόδοση και τάξη.",
      en: "Retail and wholesale businesses that want the online channel to run like a real store — with performance and order.",
    },
    process: {
      el: ["Χαρτογράφηση λειτουργίας", "Πλατφόρμα & integrations", "Υλοποίηση", "Βελτιστοποίηση μετατροπών"],
      en: ["Operations mapping", "Platform & integrations", "Build", "Conversion optimisation"],
    },
    relatedSolutions: ["ecommerce-ecosystem", "automation-system", "analytics-dashboard"],
  },
  {
    slug: "business-software",
    title: { el: "Business Software", en: "Business Software" },
    problem: {
      el: "Όταν η καθημερινή λειτουργία ζει σε spreadsheets, Viber και μνήμη ανθρώπων, κάθε νέα ανάθεση μεγαλώνει το χάος αντί για την επιχείρηση.",
      en: "When daily operations live in spreadsheets, chat threads and people's memory, every new order grows the chaos instead of the business.",
    },
    deliverables: {
      el: [
        "Custom λογισμικό διαχείρισης προσαρμοσμένο στη ροή της επιχείρησης",
        "Client portals και συστήματα συνεργατών",
        "Εσωτερικά εργαλεία για ομάδες και τμήματα",
        "Ρόλοι, δικαιώματα και ιστορικό ενεργειών",
      ],
      en: [
        "Custom management software shaped around how the business actually runs",
        "Client portals and partner systems",
        "Internal tools for teams and departments",
        "Roles, permissions and audit history",
      ],
    },
    audience: {
      el: "Επιχειρήσεις που έχουν ξεπεράσει τα generic εργαλεία και χρειάζονται σύστημα φτιαγμένο για τη δική τους λειτουργία.",
      en: "Businesses that have outgrown generic tools and need a system built for their own way of operating.",
    },
    process: {
      el: ["Ανάλυση διαδικασιών", "Σχεδιασμός συστήματος", "Σταδιακή υλοποίηση", "Εκπαίδευση & εξέλιξη"],
      en: ["Process analysis", "System design", "Phased delivery", "Training & evolution"],
    },
    relatedSolutions: ["business-platform", "internal-tool", "client-portal"],
  },
  {
    slug: "ai-automation",
    title: { el: "AI & Automation", en: "AI & Automation" },
    problem: {
      el: "Ώρες κάθε εβδομάδα χάνονται σε αντιγραφή δεδομένων, χειροκίνητες απαντήσεις και επαναλαμβανόμενους ελέγχους που δεν χρειάζονται άνθρωπο.",
      en: "Hours every week disappear into copying data, manual replies and repetitive checks that do not need a human.",
    },
    deliverables: {
      el: [
        "Αυτοματοποίηση ροών εργασίας μεταξύ συστημάτων",
        "AI integrations: επεξεργασία κειμένου, εγγράφων και αιτημάτων",
        "Έξυπνη δρομολόγηση αιτημάτων και εσωτερικά AI βοηθήματα",
        "Έλεγχος ποιότητας και ανθρώπινη εποπτεία στις κρίσιμες ροές",
      ],
      en: [
        "Workflow automation across systems",
        "AI integrations: processing text, documents and requests",
        "Smart request routing and internal AI assistants",
        "Quality control and human oversight on critical flows",
      ],
    },
    audience: {
      el: "Επιχειρήσεις με επαναλαμβανόμενες διαδικασίες που κοστίζουν χρόνο, χρήμα ή λάθη.",
      en: "Businesses with repetitive processes that cost time, money or mistakes.",
    },
    process: {
      el: ["Εντοπισμός ροών", "Σχεδιασμός αυτοματισμού", "Πιλοτική εφαρμογή", "Κλιμάκωση με μετρήσεις"],
      en: ["Flow identification", "Automation design", "Pilot", "Scale with measurement"],
    },
    relatedSolutions: ["automation-system", "ai-workflow", "analytics-dashboard"],
  },
  {
    slug: "systems-integration",
    title: { el: "Systems Integration", en: "Systems Integration" },
    problem: {
      el: "ERP, e-shop, CRM και λογιστική που δεν επικοινωνούν σημαίνουν διπλή καταχώρηση, αποκλίσεις και αποφάσεις με λάθος αριθμούς.",
      en: "An ERP, e-shop, CRM and accounting system that do not talk to each other mean double entry, discrepancies and decisions made on wrong numbers.",
    },
    deliverables: {
      el: [
        "Σχεδιασμός και υλοποίηση APIs",
        "Συνδέσεις με ERP, CRM, πληρωμές, courier και τρίτα συστήματα",
        "Συγχρονισμός δεδομένων με κανόνες και έλεγχο σφαλμάτων",
        "Τεκμηρίωση ώστε κάθε σύνδεση να συντηρείται",
      ],
      en: [
        "API design and implementation",
        "Connections to ERP, CRM, payments, couriers and third-party systems",
        "Data synchronisation with rules and error handling",
        "Documentation so every connection can be maintained",
      ],
    },
    audience: {
      el: "Επιχειρήσεις με πολλά συστήματα και καμία ενιαία εικόνα.",
      en: "Businesses with many systems and no single picture.",
    },
    process: {
      el: ["Χαρτογράφηση συστημάτων", "Σχεδιασμός ροών δεδομένων", "Υλοποίηση & δοκιμές", "Παρακολούθηση"],
      en: ["System mapping", "Data flow design", "Build & testing", "Monitoring"],
    },
    relatedSolutions: ["integration-layer", "business-platform", "ecommerce-ecosystem"],
  },
  {
    slug: "data-analytics",
    title: { el: "Data & Analytics", en: "Data & Analytics" },
    problem: {
      el: "Τα δεδομένα υπάρχουν — σκόρπια σε συστήματα και exports. Αυτό που λείπει είναι μία αξιόπιστη εικόνα που να απαντά σε ερωτήσεις της διοίκησης.",
      en: "The data exists — scattered across systems and exports. What is missing is one reliable picture that answers management's questions.",
    },
    deliverables: {
      el: [
        "Dashboards για πωλήσεις, λειτουργία και οικονομικά",
        "Ενοποίηση δεδομένων από πολλαπλές πηγές",
        "Αναφορές που παράγονται αυτόματα, όχι χειροκίνητα",
        "Ορισμός KPIs με τη διοίκηση — μόνο όσα μετράνε",
      ],
      en: [
        "Dashboards for sales, operations and finance",
        "Data consolidation from multiple sources",
        "Reports generated automatically, not by hand",
        "KPI definition with management — only what matters",
      ],
    },
    audience: {
      el: "Διοικήσεις που παίρνουν αποφάσεις με καθυστερημένα ή αντικρουόμενα στοιχεία.",
      en: "Management teams making decisions on delayed or conflicting numbers.",
    },
    process: {
      el: ["Ερωτήσεις & KPIs", "Πηγές δεδομένων", "Μοντέλο & dashboards", "Καθιέρωση χρήσης"],
      en: ["Questions & KPIs", "Data sources", "Model & dashboards", "Adoption"],
    },
    relatedSolutions: ["analytics-dashboard", "integration-layer", "business-platform"],
  },
  {
    slug: "maintenance-optimization",
    title: { el: "Maintenance & Optimization", en: "Maintenance & Optimization" },
    problem: {
      el: "Τα συστήματα δεν χαλάνε ξαφνικά — φθείρονται σιωπηλά: εξαρτήσεις που παλιώνουν, απόδοση που πέφτει, κενά ασφαλείας που μένουν ανοιχτά.",
      en: "Systems rarely break suddenly — they decay silently: ageing dependencies, degrading performance, security gaps left open.",
    },
    deliverables: {
      el: [
        "Τακτική συντήρηση, ενημερώσεις και ασφάλεια",
        "Παρακολούθηση απόδοσης και διαθεσιμότητας",
        "Βελτιστοποίηση ταχύτητας και κόστους υποδομής",
        "Προγραμματισμένες βελτιώσεις αντί για έκτακτες επισκευές",
      ],
      en: [
        "Regular maintenance, updates and security",
        "Performance and uptime monitoring",
        "Speed and infrastructure cost optimisation",
        "Planned improvements instead of emergency fixes",
      ],
    },
    audience: {
      el: "Επιχειρήσεις με συστήματα σε παραγωγή που δεν έχουν εσωτερική τεχνική ομάδα.",
      en: "Businesses with production systems and no internal technical team.",
    },
    process: {
      el: ["Τεχνικός έλεγχος", "Πλάνο συντήρησης", "Συνεχής παρακολούθηση", "Τριμηνιαία αναθεώρηση"],
      en: ["Technical audit", "Maintenance plan", "Continuous monitoring", "Quarterly review"],
    },
    relatedSolutions: ["integration-layer", "business-platform", "digital-service-platform"],
  },
  {
    slug: "technology-partnership",
    title: { el: "Technology Partnership", en: "Technology Partnership" },
    problem: {
      el: "Οι περισσότερες επιχειρήσεις δεν χρειάζονται in-house τεχνική ομάδα — χρειάζονται έναν συνεργάτη που γνωρίζει το σύστημά τους και απαντά όταν έχει σημασία.",
      en: "Most businesses do not need an in-house technical team — they need a partner who knows their systems and responds when it matters.",
    },
    deliverables: {
      el: [
        "Σταθερή τεχνολογική συνεργασία με συμφωνημένο πλαίσιο",
        "Στρατηγική καθοδήγηση και τεχνική υλοποίηση από την ίδια ομάδα",
        "Προτεραιοποίηση εξελίξεων ανά τρίμηνο",
        "Ένας συνομιλητής για όλη την τεχνολογία της επιχείρησης",
      ],
      en: [
        "A standing technology partnership with an agreed framework",
        "Strategic guidance and hands-on delivery from the same team",
        "Quarterly prioritisation of improvements",
        "One counterpart for all of the company's technology",
      ],
    },
    audience: {
      el: "Επιχειρήσεις που θέλουν συνέχεια και ευθύνη, όχι αποσπασματικά έργα με διαφορετικό προμηθευτή κάθε φορά.",
      en: "Businesses that want continuity and accountability, not fragmented projects with a different vendor each time.",
    },
    process: {
      el: ["Γνωριμία & έλεγχος", "Πλαίσιο συνεργασίας", "Τριμηνιαίοι στόχοι", "Συνεχής εξέλιξη"],
      en: ["Onboarding & audit", "Partnership framework", "Quarterly goals", "Continuous evolution"],
    },
    relatedSolutions: ["business-platform", "automation-system", "integration-layer"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
