import type { Project } from "../types";

/**
 * NBG Mobile Banking — enterprise contribution project (Collaborative Delivery).
 *
 * The application is a product of the National Bank of Greece, built by a
 * wider engineering organization. This entry presents ONLY the founder's
 * professional contribution as a React Native engineer on that team.
 *
 * All descriptive facts below come from public, official sources
 * (App Store / Google Play listings and nbg.gr) — see ASSETS.md.
 * No internal metrics, architecture details or confidential information.
 */
export const nbgMobileBanking: Project = {
  id: "nbg-mobile-banking",
  slug: "nbg-mobile-banking",
  isSample: false,
  featured: true,
  order: 10,

  title: {
    el: "NBG Mobile Banking",
    en: "NBG Mobile Banking",
  },
  shortDescription: {
    el: "Συμμετοχή στην ανάπτυξη της εφαρμογής mobile banking της Εθνικής Τράπεζας της Ελλάδος — με εξειδίκευση σε πληρωμές, συναλλαγές, IRIS Payments και κοινή mobile πλατφόρμα — ως React Native engineer σε ευρύτερη ομάδα ανάπτυξης.",
    en: "Contribution to the National Bank of Greece mobile banking app — specialising in payments, transactions, IRIS Payments and the shared mobile platform — as a React Native engineer within a wider development team.",
  },
  description: {
    el: [
      "Το NBG Mobile Banking είναι η επίσημη εφαρμογή mobile banking της Εθνικής Τράπεζας της Ελλάδος για iOS και Android. Σύμφωνα με την επίσημη παρουσίαση της εφαρμογής, εξυπηρετεί πάνω από 2 εκατομμύρια χρήστες και συγκαταλέγεται στις κορυφαίες τραπεζικές εφαρμογές της χώρας.",
      "Η εφαρμογή καλύπτει το πλήρες φάσμα των καθημερινών τραπεζικών αναγκών: άνοιγμα λογαριασμού εξ ολοκλήρου από το κινητό μέσω eGov-KYC, πληρωμές και μεταφορές, διαχείριση καρτών και προϊόντων, εργαλεία προσωπικής οικονομικής διαχείρισης και ισχυρή ταυτοποίηση συναλλαγών (SCA).",
      "Πρόκειται για enterprise έργο μεγάλης κλίμακας, με απαιτήσεις ασφάλειας, διαθεσιμότητας και ποιότητας που αντιστοιχούν σε συστημική τράπεζα, και με συνεχή κύκλο εξέλιξης νέων λειτουργιών.",
    ],
    en: [
      "NBG Mobile Banking is the official mobile banking application of the National Bank of Greece for iOS and Android. According to the app's official listing, it serves more than 2 million users and ranks among the leading banking apps in the country.",
      "The app covers the full range of everyday banking: fully mobile account opening via eGov-KYC, payments and transfers, card and product management, personal financial management tools and strong customer authentication (SCA).",
      "It is a large-scale enterprise product, with the security, availability and quality requirements of a systemic bank, and a continuous cycle of new feature development.",
    ],
  },

  organization: {
    el: "Εθνική Τράπεζα της Ελλάδος (National Bank of Greece)",
    en: "National Bank of Greece",
  },
  category: "mobile-app",
  participation: "collaborative",
  industry: { el: "Τραπεζικός τομέας / Fintech", en: "Banking / Fintech" },
  industryKey: "banking",
  period: "",
  status: "live",

  role: {
    el: "React Native Software Engineer",
    en: "React Native Software Engineer",
  },
  specialization: {
    el: "Εξειδίκευση: Payments, Transactions & Shared Mobile Platform Architecture",
    en: "Specialisation: Payments, Transactions & Shared Mobile Platform Architecture",
  },
  teamContext: {
    el: "Μέλος της ευρύτερης ομάδας ανάπτυξης της εφαρμογής, σε συνεργασία με μηχανικούς πολλαπλών ειδικοτήτων.",
    en: "Member of the app's wider development team, working alongside engineers of multiple specialisations.",
  },
  contributionSummary: {
    el: "Συμμετέχω ενεργά στην ανάπτυξη του NBG Mobile Banking ως μέλος της ομάδας ανάπτυξης, με εξειδίκευση στις ροές πληρωμών και συναλλαγών, στο IRIS domain και στην κοινή mobile πλατφόρμα της εφαρμογής — σε συνεργασία με μεγαλύτερη ομάδα μηχανικών.",
    en: "I actively contribute to the development of NBG Mobile Banking as a member of its development team, specialising in payment and transaction flows, the IRIS domain and the app's shared mobile platform — in collaboration with a larger engineering team.",
  },
  contributionAreas: [
    {
      heading: { el: "Πληρωμές & Συναλλαγές", en: "Payments & Transactions" },
      standing: { el: "Βασικός μηχανικός ανάπτυξης", en: "Core contributor" },
      summary: {
        el: "Εξειδίκευση στην ανάπτυξη και εξέλιξη των ροών πληρωμών και συναλλαγών του mobile banking, σε συνεργασία με την ευρύτερη ομάδα του payment domain.",
        en: "Specialised in developing and evolving the mobile banking app's payment and transaction flows, working alongside the wider payments team.",
      },
      items: {
        el: [
          "Ροές πληρωμών",
          "Μεταφορές χρημάτων",
          "Transaction flows",
          "Confirmation flows",
          "OTP flows",
          "Success / Failure flows",
          "Επαναχρησιμοποιήσιμα payment components",
          "Business logic γύρω από συναλλαγές",
        ],
        en: [
          "Payment flows",
          "Money transfers",
          "Transaction flows",
          "Confirmation flows",
          "OTP flows",
          "Success / failure flows",
          "Reusable payment components",
          "Transaction business logic",
        ],
      },
    },
    {
      heading: { el: "IRIS Payments", en: "IRIS Payments" },
      standing: { el: "Βασική περιοχή εξειδίκευσης", en: "Area of specialisation" },
      summary: {
        el: "Ανάπτυξη και συνεχής εξέλιξη του IRIS domain της εφαρμογής, ως μέλος της ομάδας που είναι υπεύθυνη για το σύνολο της λειτουργίας.",
        en: "Development and ongoing evolution of the app's IRIS domain, as part of the team responsible for the overall functionality.",
      },
      items: {
        el: [
          "IRIS Online Payments",
          "Συναλλαγές IRIS προς κινητό τηλέφωνο",
          "Συναλλαγές IRIS προς ΑΦΜ",
          "Δημιουργία IRIS QR Code",
          "Add to Wallet IRIS QR Code",
          "Deep linking και URL redirections",
          "Navigation και business flows",
          "UI/UX λειτουργιών IRIS",
        ],
        en: [
          "IRIS Online Payments",
          "IRIS transactions to mobile number",
          "IRIS transactions to tax ID (ΑΦΜ)",
          "IRIS QR code generation",
          "Add to Wallet IRIS QR code",
          "Deep linking and URL redirections",
          "Navigation and business flows",
          "IRIS UI/UX",
        ],
      },
    },
    {
      heading: { el: "Κοινή Mobile Πλατφόρμα", en: "Shared Mobile Platform" },
      standing: { el: "Βασικός συνεισφέρων", en: "Primary contributor" },
      summary: {
        el: "Ενεργή συμμετοχή στην ανάπτυξη και εξέλιξη κοινών βιβλιοθηκών που χρησιμοποιούνται σε όλη την εφαρμογή.",
        en: "Active contribution to the development and evolution of shared libraries used across the application.",
      },
      items: {
        el: [
          "Shared UI Library",
          "Shared Icon Library",
          "Επαναχρησιμοποιήσιμα components",
          "Υλοποίηση design system",
          "Τυποποίηση components",
          "Συνέπεια στο mobile UI",
        ],
        en: [
          "Shared UI Library",
          "Shared Icon Library",
          "Reusable components",
          "Design system implementation",
          "Component standardisation",
          "Mobile UI consistency",
        ],
      },
    },
  ],
  generalContribution: {
    el: "Πέρα από αυτές τις εξειδικευμένες περιοχές, συμμετέχω ενεργά στην ανάπτυξη ολόκληρης της εφαρμογής mobile banking — εργαζόμενος σε διαφορετικούς επιχειρησιακούς τομείς, σε συνεργασία με μεγαλύτερη ομάδα μηχανικών.",
    en: "Beyond these areas of specialisation, I actively contribute to the development of the mobile banking application as a whole — working across different business domains, in collaboration with a larger engineering team.",
  },
  expertiseAreas: [
    {
      heading: { el: "Enterprise Mobile Banking", en: "Enterprise Mobile Banking" },
      tags: ["Mobile Banking", "Enterprise Applications", "Enterprise Frontend Development"],
    },
    {
      heading: { el: "Πληρωμές & Συναλλαγές", en: "Payments & Transactions" },
      tags: ["Payments", "Transactions", "IRIS Payments", "Business Logic"],
    },
    {
      heading: { el: "Κοινή Πλατφόρμα & UI Αρχιτεκτονική", en: "Shared Platform & UI Architecture" },
      tags: [
        "UI Architecture",
        "Shared UI Library",
        "Shared Icon Library",
        "Reusable Components",
        "Design Systems",
      ],
    },
    {
      heading: { el: "Μηχανική & Εμπειρία Χρήστη", en: "Engineering & UX" },
      tags: ["React Native", "TypeScript", "Mobile UX", "Navigation Flows"],
    },
  ],

  keyFeatures: {
    el: [
      "Άνοιγμα λογαριασμού από το κινητό μέσω eGov-KYC",
      "Πληρωμές, μεταφορές και διαχείριση καρτών",
      "Money Box — ψηφιακός κουμπαράς αποταμίευσης",
      "Προσωπική οικονομική διαχείριση με αυτόματη κατηγοριοποίηση",
      "Ισχυρή ταυτοποίηση συναλλαγών (SCA)",
      "Διαχείριση συνδρομών και πάγιων πληρωμών",
    ],
    en: [
      "Mobile account opening via eGov-KYC",
      "Payments, transfers and card management",
      "Money Box — digital savings piggy bank",
      "Personal financial management with automatic categorisation",
      "Strong Customer Authentication (SCA)",
      "Subscription and standing-payment management",
    ],
  },

  technologies: ["React Native", "TypeScript", "JavaScript", "REST APIs"],
  platforms: ["iOS", "Android"],

  images: [1, 2, 3, 4, 5, 6].map((i) => ({
    src: `/projects/nbg-mobile-banking/appstore-${i}.jpg`,
    alt: {
      el: `Επίσημο στιγμιότυπο της εφαρμογής NBG Mobile Banking (${i} από 6)`,
      en: `Official NBG Mobile Banking app screenshot (${i} of 6)`,
    },
    kind: "mobile" as const,
    sourceUrl: "https://apps.apple.com/gr/app/nbg-mobile-banking/id342152889",
    attribution: "Official App Store screenshots — © National Bank of Greece S.A.",
  })),

  links: {
    website:
      "https://www.nbg.gr/en/individuals/daily-transactions/digital-banking/mobile-banking",
    appStore: "https://apps.apple.com/gr/app/nbg-mobile-banking/id342152889",
    googlePlay: "https://play.google.com/store/apps/details?id=mbanking.NBG",
  },

  confidentiality: "public",
  allowScreenshots: true,
  disclaimer: {
    el: "Το έργο αποτελεί προϊόν της Εθνικής Τράπεζας της Ελλάδος. Η παρουσίασή του αφορά αποκλειστικά τη δική μου επαγγελματική συμμετοχή στην ανάπτυξη συγκεκριμένων λειτουργιών ως μέλος της ομάδας ανάπτυξης. Όλα τα εμπορικά σήματα, λογότυπα και πνευματικά δικαιώματα ανήκουν στους αντίστοιχους ιδιοκτήτες.",
    en: "This project is a product of the National Bank of Greece. Its presentation here concerns solely my professional contribution to the development of specific features as a member of the development team. All trademarks, logos and copyrights belong to their respective owners.",
  },

  relatedServices: ["mobile-development", "systems-integration", "technology-partnership"],

  seo: {
    title: {
      el: "NBG Mobile Banking — Συμμετοχή στην ανάπτυξη | SCALEQ",
      en: "NBG Mobile Banking — Development contribution | SCALEQ",
    },
    description: {
      el: "Case study συμμετοχής: εξειδίκευση σε πληρωμές, συναλλαγές, IRIS Payments και κοινή mobile πλατφόρμα για την εφαρμογή NBG Mobile Banking της Εθνικής Τράπεζας της Ελλάδος, ως React Native engineer σε ευρύτερη ομάδα.",
      en: "Contribution case study: specialising in payments, transactions, IRIS Payments and the shared mobile platform for the National Bank of Greece's NBG Mobile Banking app, as a React Native engineer within a wider team.",
    },
  },
};
