import type { Project } from "../types";

/**
 * PawEra — flagship end-to-end case study.
 *
 * The product belongs to ORBIQ; it was designed and is being built entirely
 * by our team (End-to-End Delivery). All copy is grounded in the product
 * itself and the provided design material — no invented users or metrics.
 *
 * The gallery is data-driven: to add future screenshots (provider flow,
 * admin panel, landing website, architecture), drop the files under
 * /public/projects/pawera/ and append images to the matching section below —
 * empty sections are not rendered, so the page never looks unfinished.
 */
export const pawera: Project = {
  id: "pawera",
  slug: "pawera",
  isSample: false,
  featured: true,
  order: 1,

  title: { el: "PawEra", en: "PawEra" },
  shortDescription: {
    el: "Ολοκληρωμένη marketplace πλατφόρμα για pet care: mobile εφαρμογές πελάτη και επαγγελματία, web πλατφόρμα και admin panel — σχεδιασμένα και υλοποιημένα εξ ολοκλήρου από την ομάδα μας.",
    en: "A complete pet-care marketplace platform: customer and provider mobile apps, web platform and admin panel — designed and built entirely by our team.",
  },
  description: {
    el: [
      "Η PawEra ξεκινά από μια απλή διαπίστωση: η φροντίδα ενός κατοικιδίου είναι σχέση εμπιστοσύνης — αλλά η αγορά που τη στηρίζει λειτουργεί ακόμα με συστάσεις, τηλεφωνήματα και αβεβαιότητα. Οι ιδιοκτήτες δυσκολεύονται να βρουν αξιόπιστους επαγγελματίες, και οι καλοί επαγγελματίες δυσκολεύονται να χτίσουν ψηφιακή παρουσία και σταθερή πελατεία.",
      "Το όραμα της πλατφόρμας είναι να κάνει την επαγγελματική φροντίδα κατοικιδίων τόσο διαφανή και αξιόπιστη όσο μια σύσταση από φίλο: επαληθευμένα προφίλ, πραγματικές αξιολογήσεις, καθαρές τιμές, ασφαλείς πληρωμές και ζωντανή εικόνα κάθε υπηρεσίας — μέχρι και παρακολούθηση της βόλτας σε πραγματικό χρόνο.",
      "Η PawEra είναι προϊόν της ORBIQ. Σχεδιάστηκε από την πρώτη προδιαγραφή ως ενιαίο, κλιμακούμενο οικοσύστημα δύο πλευρών — όχι ως μία εφαρμογή με πρόσθετα.",
    ],
    en: [
      "PawEra starts from a simple observation: caring for a pet is a relationship of trust — yet the market that supports it still runs on referrals, phone calls and uncertainty. Owners struggle to find professionals they can trust, and good professionals struggle to build a digital presence and a steady client base.",
      "The platform's vision is to make professional pet care as transparent and trustworthy as a friend's recommendation: verified profiles, real reviews, clear pricing, secure payments and a live view of every service — down to tracking a walk in real time.",
      "PawEra is a product of ORBIQ. It was designed from the first specification as a single, scalable two-sided ecosystem — not as one app with add-ons.",
    ],
  },

  organization: { el: "ORBIQ", en: "ORBIQ" },
  category: "mobile-app",
  participation: "end-to-end",
  industry: { el: "Pet Care / Marketplace", en: "Pet Care / Marketplace" },
  industryKey: "pet-care",
  period: "",
  status: "in-development",

  role: {
    el: "Founder · Product Owner · Software Architect · Lead Mobile Engineer",
    en: "Founder · Product Owner · Software Architect · Lead Mobile Engineer",
  },
  teamContext: {
    el: "Πλήρης ιδιοκτησία του έργου από την ομάδα μας — από τη στρατηγική προϊόντος και τον σχεδιασμό έως την αρχιτεκτονική, την ανάπτυξη και το deployment.",
    en: "Full ownership of the build by our team — from product strategy and design to architecture, development and deployment.",
  },
  responsibilities: {
    el: [
      "Product strategy & προτεραιοποίηση",
      "UX και UI design όλων των εφαρμογών",
      "Αρχιτεκτονική συστήματος και backend",
      "Mobile ανάπτυξη (εφαρμογές πελάτη & provider)",
      "Web ανάπτυξη και admin platform",
      "Σχεδιασμός APIs και integrations",
      "Deployment και συνεχής εξέλιξη του προϊόντος",
    ],
    en: [
      "Product strategy & prioritisation",
      "UX and UI design across all apps",
      "System and backend architecture",
      "Mobile development (customer & provider apps)",
      "Web development and admin platform",
      "API design and integrations",
      "Deployment and continuous product evolution",
    ],
  },
  contributionSummary: {
    el: "Η PawEra σχεδιάζεται και υλοποιείται εξ ολοκλήρου από την ομάδα μας, κάτω από ένα ενιαίο σχήμα ευθύνης: στρατηγική, σχεδιασμός, αρχιτεκτονική, ανάπτυξη σε τέσσερις πλατφόρμες και εξέλιξη — από την ιδέα έως την κυκλοφορία.",
    en: "PawEra is designed and built entirely by our team under one line of accountability: strategy, design, architecture, development across four platforms, and evolution — from idea to launch.",
  },

  challenge: {
    el: "Ένα marketplace πρέπει να λύσει δύο προβλήματα ταυτόχρονα. Ο ιδιοκτήτης χρειάζεται σιγουριά ότι αφήνει το κατοικίδιό του σε σωστά χέρια — με διαφανείς τιμές και πραγματική εικόνα του τι συμβαίνει. Ο επαγγελματίας χρειάζεται σταθερή ροή πελατών, οργανωμένο πρόγραμμα και αξιόπιστες πληρωμές, χωρίς να χάνεται σε διάσπαρτα εργαλεία. Αν οποιαδήποτε από τις δύο πλευρές δεν κερδίζει καθαρά, το δίκτυο δεν μεγαλώνει.",
    en: "A marketplace has to solve two problems at once. The owner needs confidence that their pet is in the right hands — with transparent pricing and a real view of what is happening. The professional needs a steady flow of clients, an organised schedule and reliable payments, without drowning in scattered tools. If either side doesn't clearly win, the network doesn't grow.",
  },
  approach: {
    el: "Σχεδιάσαμε την PawEra με προτεραιότητα την εμπιστοσύνη ως χαρακτηριστικό του προϊόντος, όχι ως υπόσχεση: επαλήθευση λογαριασμών, πραγματικές αξιολογήσεις, καθαρή ανάλυση κόστους πριν από κάθε κράτηση και ζωντανή παρακολούθηση της υπηρεσίας. Δύο εφαρμογές — πελάτη και επαγγελματία — μοιράζονται μία κοινή πλατφόρμα και ένα κοινό design system, ώστε κάθε λειτουργία να χτίζεται μία φορά και να εξυπηρετεί και τις δύο πλευρές. Η υλοποίηση προχωρά σε φάσεις, με τον πυρήνα των κρατήσεων πρώτο και κάθε επόμενη δυνατότητα να προστίθεται πάνω σε σταθερή βάση.",
    en: "We designed PawEra with trust as a product feature, not a promise: account verification, real reviews, a clear cost breakdown before every booking and live tracking of the service itself. Two apps — customer and provider — share one platform and one design system, so every capability is built once and serves both sides. Delivery is phased, with the booking core first and every next capability added on a stable foundation.",
  },
  solution: {
    el: "Ένα ενιαίο οικοσύστημα τεσσάρων επιφανειών: mobile εφαρμογή πελάτη για αναζήτηση, κράτηση και παρακολούθηση υπηρεσιών· mobile εφαρμογή επαγγελματία για προφίλ, πρόγραμμα και διαχείριση εργασιών· web πλατφόρμα για την παρουσία του προϊόντος· και admin panel για τη λειτουργία της αγοράς. Στον πυρήνα, ένα booking σύστημα με καταστάσεις, επαναλαμβανόμενες κρατήσεις και ειδοποιήσεις, πληρωμές μέσω Stripe, αξιολογήσεις, προφίλ κατοικιδίων με στοιχεία φροντίδας και υγείας, και ζωντανή παρακολούθηση βόλτας σε χάρτη.",
    en: "One ecosystem across four surfaces: a customer app for finding, booking and following services; a provider app for profile, schedule and job management; a web platform for the product's presence; and an admin panel to operate the marketplace. At the core: a booking system with statuses, recurring bookings and notifications, Stripe payments, reviews, pet profiles with care and health details, and live walk tracking on a map.",
  },

  narrativeSections: [
    {
      heading: { el: "Εμπειρία χρήστη", en: "User experience" },
      paragraphs: {
        el: [
          "Κάθε ροή σχεδιάστηκε γύρω από μία αρχή: ο χρήστης πρέπει να ξέρει πάντα τι θα πληρώσει, τι θα γίνει και τι συμβαίνει τώρα. Η κράτηση δείχνει πλήρη ανάλυση κόστους πριν από την επιβεβαίωση· κάθε εργασία έχει καθαρή κατάσταση — σε αναμονή, επιβεβαιωμένη, σε εξέλιξη, ολοκληρωμένη· και η βόλτα παρακολουθείται ζωντανά.",
          "Τα προφίλ των επαγγελματιών λειτουργούν ως ψηφιακή σύσταση: αξιολογήσεις, εμπειρία, διακριτικά όπως «Top Walker», φωτογραφίες και διαθεσιμότητα σε πραγματικό χρόνο. Αντίστοιχα, κάθε κατοικίδιο έχει το δικό του προφίλ με συνήθειες, προτιμήσεις και στοιχεία υγείας, ώστε κάθε επαγγελματίας να αναλαμβάνει ενημερωμένος.",
        ],
        en: [
          "Every flow was designed around one principle: the user should always know what they will pay, what will happen and what is happening now. Booking shows a full price breakdown before confirmation; every job has a clear status — pending, confirmed, in progress, completed; and the walk itself can be followed live.",
          "Provider profiles work as a digital recommendation: reviews, experience, badges such as “Top Walker”, photos and real-time availability. Every pet, in turn, has its own profile with habits, preferences and health details, so each professional starts fully informed.",
        ],
      },
    },
    {
      heading: { el: "Τεχνική αρχιτεκτονική", en: "Technical architecture" },
      paragraphs: {
        el: [
          "Οι δύο mobile εφαρμογές χτίζονται σε React Native με Expo και TypeScript, πάνω σε κοινή βάση κώδικα και κοινό design system — μία υλοποίηση, δύο προϊόντα, iOS και Android. Το web layer βασίζεται σε Next.js.",
          "Πίσω από τα interfaces, ένα Node.js backend εκθέτει REST APIs πάνω από PostgreSQL, με Firebase στις υποστηρικτικές υπηρεσίες, Stripe για τις πληρωμές και Google Maps για τη ζωντανή παρακολούθηση. Η ίδια πλατφόρμα τροφοδοτεί την εφαρμογή πελάτη, την εφαρμογή επαγγελματία και το admin panel.",
        ],
        en: [
          "The two mobile apps are built with React Native, Expo and TypeScript on a shared codebase and design system — one implementation, two products, iOS and Android. The web layer is built on Next.js.",
          "Behind the interfaces, a Node.js backend exposes REST APIs over PostgreSQL, with Firebase for supporting services, Stripe for payments and Google Maps for live tracking. The same platform powers the customer app, the provider app and the admin panel.",
        ],
      },
    },
    {
      heading: { el: "Σχεδιασμένο για κλιμάκωση", en: "Built to scale" },
      paragraphs: {
        el: [
          "Το μοντέλο υπηρεσιών είναι πολλαπλό από την πρώτη μέρα — βόλτα, φύλαξη, grooming, εκπαίδευση — ώστε νέες κατηγορίες να προστίθενται χωρίς αλλαγή αρχιτεκτονικής. Οι επαναλαμβανόμενες κρατήσεις, τα επίπεδα επαλήθευσης και οι ρόλοι χρηστών είναι δομικά στοιχεία της πλατφόρμας, όχι πρόσθετα.",
          "Η ίδια λογική ισχύει και επιχειρηματικά: το admin panel και τα analytics σχεδιάζονται ώστε η ομάδα λειτουργίας να βλέπει την υγεία της αγοράς και να λαμβάνει αποφάσεις με δεδομένα, καθώς το δίκτυο μεγαλώνει.",
        ],
        en: [
          "The service model is multi-category from day one — walking, sitting, grooming, training — so new categories can be added without architectural change. Recurring bookings, verification levels and user roles are structural elements of the platform, not add-ons.",
          "The same logic applies commercially: the admin panel and analytics are designed so the operations team can see the health of the marketplace and make decisions with data as the network grows.",
        ],
      },
    },
    {
      heading: { el: "Επόμενα βήματα", en: "What comes next" },
      paragraphs: {
        el: [
          "Το προϊόν βρίσκεται σε ενεργή ανάπτυξη με στόχο την κυκλοφορία του στην αγορά. Ο σχεδιασμός προβλέπει σταδιακό εμπλουτισμό — από τη διεύρυνση των ροών του επαγγελματία έως λειτουργίες AI εκεί όπου προσθέτουν πραγματική αξία στην εμπειρία και στη λειτουργία της πλατφόρμας.",
        ],
        en: [
          "The product is in active development, working toward its market launch. The roadmap is one of steady enrichment — from deepening the provider flows to AI capabilities where they add real value to the experience and the operation of the platform.",
        ],
      },
    },
  ],

  outcome: {
    el: "Η PawEra βρίσκεται σε ενεργή ανάπτυξη με στόχο την κυκλοφορία της στην αγορά — με τον πυρήνα των κρατήσεων, τα προφίλ και τις βασικές ροές ήδη σχεδιασμένα και σε υλοποίηση πάνω σε ενιαία, κλιμακούμενη πλατφόρμα.",
    en: "PawEra is in active development toward its market launch — with the booking core, profiles and primary flows already designed and being built on a single, scalable platform.",
  },

  keyFeatures: {
    el: [
      "Κρατήσεις με καταστάσεις, ιστορικό και επαναλαμβανόμενα ραντεβού",
      "Ζωντανή παρακολούθηση βόλτας σε χάρτη",
      "Ασφαλείς πληρωμές μέσω Stripe με πλήρη ανάλυση κόστους",
      "Προφίλ επαγγελματιών με αξιολογήσεις, εμπειρία και διακριτικά",
      "Προφίλ κατοικιδίων με φροντίδα, προτιμήσεις και στοιχεία υγείας",
      "Επαλήθευση λογαριασμών (email, τηλέφωνο, ταυτότητα)",
      "Πολλαπλές υπηρεσίες: βόλτα, φύλαξη, grooming, εκπαίδευση",
      "Αποθηκευμένες διευθύνσεις και οδηγίες παραλαβής",
      "Ειδοποιήσεις σε κάθε βήμα της υπηρεσίας",
      "Provider onboarding, admin panel και analytics",
    ],
    en: [
      "Bookings with statuses, history and recurring appointments",
      "Live walk tracking on a map",
      "Secure Stripe payments with a full price breakdown",
      "Provider profiles with reviews, experience and badges",
      "Pet profiles with care, preferences and health details",
      "Account verification (email, phone, identity)",
      "Multiple services: walking, sitting, grooming, training",
      "Saved addresses and pickup instructions",
      "Notifications at every step of a service",
      "Provider onboarding, admin panel and analytics",
    ],
  },

  technologies: [
    "React Native",
    "Expo",
    "TypeScript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Stripe",
    "Firebase",
    "Google Maps",
    "REST APIs",
  ],
  platforms: ["iOS", "Android", "Web", "Admin Panel"],

  logo: "/projects/pawera/logo.png",
  images: [
    {
      src: "/projects/pawera/booking-flow.png",
      alt: {
        el: "PawEra — ροή κράτησης: προφίλ επαγγελματία, λεπτομέρειες κράτησης, βόλτα σε εξέλιξη, φωτογραφίες και αξιολογήσεις",
        en: "PawEra — booking flow: provider profile, booking details, walk in progress, photos and reviews",
      },
      kind: "cover",
      aspect: 2032 / 1071,
    },
  ],

  gallerySections: [
    {
      key: "activity",
      title: { el: "Κρατήσεις & δραστηριότητα", en: "Bookings & activity" },
      description: {
        el: "Εκκρεμείς, επερχόμενες και ολοκληρωμένες εργασίες — με επαναλαμβανόμενες κρατήσεις και καθαρές καταστάσεις σε κάθε βήμα.",
        en: "Pending, upcoming and completed jobs — with recurring bookings and clear statuses at every step.",
      },
      images: [
        {
          src: "/projects/pawera/activity-screens.png",
          alt: {
            el: "PawEra — οθόνες δραστηριότητας: εκκρεμείς, επερχόμενες και ολοκληρωμένες κρατήσεις",
            en: "PawEra — activity screens: pending, upcoming and completed bookings",
          },
          kind: "gallery",
          aspect: 1155 / 757,
        },
      ],
    },
    {
      key: "pet-management",
      title: { el: "Κατοικίδια & προφίλ", en: "Pets & profiles" },
      description: {
        el: "Διαχείριση κατοικιδίων με στοιχεία υγείας, αποθηκευμένες διευθύνσεις, επαλήθευση λογαριασμού και ρυθμίσεις.",
        en: "Pet management with health details, saved addresses, account verification and settings.",
      },
      images: [
        {
          src: "/projects/pawera/pet-management.png",
          alt: {
            el: "PawEra — διαχείριση κατοικιδίων, διευθύνσεων και προφίλ χρήστη",
            en: "PawEra — managing pets, addresses and the user profile",
          },
          kind: "gallery",
          aspect: 2103 / 1138,
        },
      ],
    },
    /* Prepared sections — add images as they become available; empty sections don't render. */
    {
      key: "provider-flow",
      title: { el: "Η πλευρά του επαγγελματία", en: "The provider side" },
      images: [],
    },
    {
      key: "admin-panel",
      title: { el: "Admin panel", en: "Admin panel" },
      images: [],
    },
    {
      key: "landing-website",
      title: { el: "Web πλατφόρμα", en: "Web platform" },
      images: [],
    },
    {
      key: "architecture",
      title: { el: "Αρχιτεκτονική & λειτουργίες", en: "Architecture & features" },
      images: [],
    },
  ],

  confidentiality: "public",
  allowScreenshots: true,
  disclaimer: {
    el: "Η PawEra είναι προϊόν της ORBIQ. Η παρουσίαση αφορά τον σχεδιασμό και την υλοποίηση του έργου από την ομάδα μας. Όλα τα εμπορικά σήματα και τα λογότυπα ανήκουν στους αντίστοιχους ιδιοκτήτες τους.",
    en: "PawEra is a product of ORBIQ. This presentation concerns the design and delivery of the project by our team. All trademarks and logos belong to their respective owners.",
  },

  relatedServices: ["product-strategy", "ux-ui-design", "mobile-development", "web-development"],

  seo: {
    title: {
      el: "PawEra — Pet Care Marketplace Πλατφόρμα | Case Study SCALEQ",
      en: "PawEra — Pet Care Marketplace Platform | SCALEQ Case Study",
    },
    description: {
      el: "Πώς σχεδιάζεται και υλοποιείται end-to-end η PawEra: marketplace οικοσύστημα για pet care με εφαρμογές πελάτη και επαγγελματία, booking, πληρωμές Stripe, live tracking και admin platform.",
      en: "How PawEra is designed and built end to end: a pet-care marketplace ecosystem with customer and provider apps, booking, Stripe payments, live tracking and an admin platform.",
    },
  },
};
