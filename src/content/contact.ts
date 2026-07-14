import type { Locale } from "@/lib/i18n";

export interface ContactContent {
  meta: { title: string; description: string };
  eyebrow: string;
  heading: string;
  intro: string;
  aside: {
    heading: string;
    points: string[];
    legalNote: string;
  };
  form: {
    name: string;
    company: string;
    email: string;
    phone: string;
    phoneOptional: string;
    interest: string;
    service: string;
    serviceOptional: string;
    budget: string;
    budgetOptional: string;
    timeline: string;
    timelineOptional: string;
    message: string;
    messagePlaceholder: string;
    consent: string;
    consentLinkLabel: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
    required: string;
    invalidEmail: string;
    selectPlaceholder: string;
  };
  interests: { value: string; label: string }[];
  budgets: { value: string; label: string }[];
  timelines: { value: string; label: string }[];
}

export const contactContent: Record<Locale, ContactContent> = {
  el: {
    meta: {
      title: "Επικοινωνία | SCALEQ",
      description:
        "Συζητήστε με τη SCALEQ το επόμενο βήμα της επιχείρησής σας: νέο ψηφιακό προϊόν, σύστημα, αυτοματισμό ή τεχνολογική συνεργασία.",
    },
    eyebrow: "Επικοινωνία",
    heading: "Ας δούμε το επόμενο βήμα.",
    intro:
      "Περιγράψτε μας πού βρίσκεστε και τι θέλετε να αλλάξει. Απαντάμε σε κάθε σοβαρό αίτημα με συγκεκριμένη άποψη — όχι με γενικόλογη προσφορά.",
    aside: {
      heading: "Τι να περιμένετε",
      points: [
        "Απάντηση εντός 1–2 εργάσιμων ημερών",
        "Δομημένη πρώτη συζήτηση χωρίς κόστος",
        "Ρεαλιστική άποψη για εφικτότητα, σειρά και ενδεικτικό κόστος",
        "Εχεμύθεια για κάθε πληροφορία που μοιράζεστε",
      ],
      legalNote:
        "Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας.",
    },
    form: {
      name: "Ονοματεπώνυμο",
      company: "Εταιρεία",
      email: "Email",
      phone: "Τηλέφωνο",
      phoneOptional: "προαιρετικό",
      interest: "Τύπος ενδιαφέροντος",
      service: "Υπηρεσία",
      serviceOptional: "προαιρετικό",
      budget: "Ενδεικτικό budget",
      budgetOptional: "προαιρετικό",
      timeline: "Επιθυμητό χρονοδιάγραμμα",
      timelineOptional: "προαιρετικό",
      message: "Περιγραφή",
      messagePlaceholder:
        "Πείτε μας για την επιχείρηση, το πρόβλημα ή την ιδέα σας — και τι θα θεωρούσατε επιτυχία.",
      consent:
        "Συναινώ στην επεξεργασία των στοιχείων μου για την επικοινωνία σχετικά με το αίτημά μου, σύμφωνα με την",
      consentLinkLabel: "Πολιτική Απορρήτου",
      submit: "Αποστολή",
      submitting: "Αποστολή…",
      successTitle: "Το μήνυμά σας εστάλη.",
      successBody:
        "Ευχαριστούμε. Θα επικοινωνήσουμε μαζί σας εντός 1–2 εργάσιμων ημερών.",
      errorTitle: "Κάτι δεν πήγε καλά.",
      errorBody:
        "Το μήνυμα δεν στάλθηκε. Δοκιμάστε ξανά σε λίγο — αν το πρόβλημα επιμένει, επικοινωνήστε μαζί μας απευθείας.",
      required: "Το πεδίο είναι υποχρεωτικό",
      invalidEmail: "Συμπληρώστε ένα έγκυρο email",
      selectPlaceholder: "Επιλέξτε…",
    },
    interests: [
      { value: "new-product", label: "Νέο ψηφιακό προϊόν" },
      { value: "upgrade", label: "Αναβάθμιση υπάρχοντος συστήματος" },
      { value: "web-ecommerce", label: "Website ή e-commerce" },
      { value: "mobile", label: "Mobile application" },
      { value: "ai-automation", label: "AI και automation" },
      { value: "consulting", label: "Technology consulting" },
      { value: "partnership", label: "Μακροχρόνια συνεργασία" },
      { value: "other", label: "Άλλο" },
    ],
    budgets: [
      { value: "lt-10k", label: "Έως 10.000 €" },
      { value: "10k-25k", label: "10.000 – 25.000 €" },
      { value: "25k-60k", label: "25.000 – 60.000 €" },
      { value: "gt-60k", label: "Άνω των 60.000 €" },
      { value: "undecided", label: "Δεν έχει οριστεί ακόμα" },
    ],
    timelines: [
      { value: "asap", label: "Άμεσα" },
      { value: "1-3m", label: "1–3 μήνες" },
      { value: "3-6m", label: "3–6 μήνες" },
      { value: "exploring", label: "Σε στάδιο διερεύνησης" },
    ],
  },
  en: {
    meta: {
      title: "Contact | SCALEQ",
      description:
        "Talk to SCALEQ about your company's next step: a new digital product, a system, automation or a technology partnership.",
    },
    eyebrow: "Contact",
    heading: "Let's look at the next step.",
    intro:
      "Tell us where you are and what you want to change. We answer every serious enquiry with a specific point of view — not a generic quote.",
    aside: {
      heading: "What to expect",
      points: [
        "A reply within 1–2 business days",
        "A structured first conversation, free of charge",
        "A realistic view on feasibility, sequencing and indicative cost",
        "Confidentiality for everything you share",
      ],
      legalNote: "Your details are used solely to respond to your enquiry.",
    },
    form: {
      name: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      phoneOptional: "optional",
      interest: "Type of interest",
      service: "Service",
      serviceOptional: "optional",
      budget: "Indicative budget",
      budgetOptional: "optional",
      timeline: "Desired timeline",
      timelineOptional: "optional",
      message: "Description",
      messagePlaceholder:
        "Tell us about your business, problem or idea — and what you would consider success.",
      consent:
        "I consent to the processing of my details in order to respond to my enquiry, as described in the",
      consentLinkLabel: "Privacy Policy",
      submit: "Send",
      submitting: "Sending…",
      successTitle: "Your message has been sent.",
      successBody: "Thank you. We will get back to you within 1–2 business days.",
      errorTitle: "Something went wrong.",
      errorBody:
        "The message was not sent. Please try again shortly — if the problem persists, contact us directly.",
      required: "This field is required",
      invalidEmail: "Enter a valid email address",
      selectPlaceholder: "Select…",
    },
    interests: [
      { value: "new-product", label: "New digital product" },
      { value: "upgrade", label: "Upgrade of an existing system" },
      { value: "web-ecommerce", label: "Website or e-commerce" },
      { value: "mobile", label: "Mobile application" },
      { value: "ai-automation", label: "AI and automation" },
      { value: "consulting", label: "Technology consulting" },
      { value: "partnership", label: "Long-term partnership" },
      { value: "other", label: "Other" },
    ],
    budgets: [
      { value: "lt-10k", label: "Up to €10,000" },
      { value: "10k-25k", label: "€10,000 – €25,000" },
      { value: "25k-60k", label: "€25,000 – €60,000" },
      { value: "gt-60k", label: "Over €60,000" },
      { value: "undecided", label: "Not decided yet" },
    ],
    timelines: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3m", label: "1–3 months" },
      { value: "3-6m", label: "3–6 months" },
      { value: "exploring", label: "Still exploring" },
    ],
  },
};
