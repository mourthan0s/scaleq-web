import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalPageContent {
  meta: { title: string; description: string };
  heading: string;
  updated: string;
  sections: LegalSection[];
}

const companyIdEl = `${siteConfig.legalName}, Α.Φ.Μ. ${siteConfig.vatNumber}, Αρ. Γ.Ε.ΜΗ. ${siteConfig.gemiNumber}`;
const companyIdEn = `${siteConfig.legalNameEn} (Greek company), VAT no. ${siteConfig.vatNumber}, G.E.MI. registration no. ${siteConfig.gemiNumber}`;

/* Last-updated date of the legal texts — update when the texts change. */
const LEGAL_UPDATED = { el: "Ιούλιος 2026", en: "July 2026" };

export const privacyContent: Record<Locale, LegalPageContent> = {
  el: {
    meta: {
      title: "Πολιτική Απορρήτου | SCALEQ",
      description: "Πώς η SCALEQ συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά δεδομένα των επισκεπτών του scale-q.com.",
    },
    heading: "Πολιτική Απορρήτου",
    updated: `Τελευταία ενημέρωση: ${LEGAL_UPDATED.el}`,
    sections: [
      {
        heading: "1. Υπεύθυνος επεξεργασίας",
        paragraphs: [
          `Υπεύθυνος επεξεργασίας των προσωπικών δεδομένων που συλλέγονται μέσω του παρόντος ιστότοπου (scale-q.com) είναι η εταιρεία ${companyIdEl}.`,
          "Στοιχεία επικοινωνίας για θέματα προσωπικών δεδομένων θα αναρτηθούν στη σελίδα Επικοινωνίας.",
        ],
      },
      {
        heading: "2. Ποια δεδομένα συλλέγουμε",
        paragraphs: ["Συλλέγουμε μόνο τα δεδομένα που είναι απαραίτητα για τους σκοπούς που περιγράφονται παρακάτω:"],
        list: [
          "Στοιχεία που υποβάλλετε μέσω της φόρμας επικοινωνίας: ονοματεπώνυμο, εταιρεία, email, τηλέφωνο (προαιρετικό) και το περιεχόμενο του μηνύματός σας.",
          "Τεχνικά δεδομένα περιήγησης (π.χ. ανωνυμοποιημένα στατιστικά επισκεψιμότητας), μόνο εφόσον έχετε δώσει τη συγκατάθεσή σας για cookies ανάλυσης.",
        ],
      },
      {
        heading: "3. Σκοπός και νομική βάση",
        paragraphs: [
          "Τα στοιχεία της φόρμας επικοινωνίας χρησιμοποιούνται αποκλειστικά για την απάντηση στο αίτημά σας και την επικοινωνία σχετικά με πιθανή συνεργασία. Νομική βάση είναι η συγκατάθεσή σας και η λήψη μέτρων πριν από τη σύναψη σύμβασης (άρθρο 6 παρ. 1 στοιχ. α΄ και β΄ ΓΚΠΔ).",
          "Τα στατιστικά δεδομένα χρησιμοποιούνται για τη βελτίωση του ιστότοπου, με νομική βάση τη συγκατάθεσή σας.",
        ],
      },
      {
        heading: "4. Διατήρηση δεδομένων",
        paragraphs: [
          "Τα στοιχεία επικοινωνίας διατηρούνται για όσο διάστημα απαιτείται για τη διαχείριση του αιτήματός σας και έως 24 μήνες από την τελευταία επικοινωνία, εκτός εάν προκύψει συνεργασία, οπότε διατηρούνται στο πλαίσιο της συμβατικής σχέσης.",
        ],
      },
      {
        heading: "5. Αποδέκτες",
        paragraphs: [
          "Τα δεδομένα σας δεν πωλούνται και δεν διαβιβάζονται σε τρίτους για διαφημιστικούς σκοπούς. Ενδέχεται να αποθηκεύονται σε παρόχους υπηρεσιών φιλοξενίας και email που ενεργούν ως εκτελούντες την επεξεργασία για λογαριασμό μας.",
        ],
      },
      {
        heading: "6. Τα δικαιώματά σας",
        paragraphs: ["Σύμφωνα με τον ΓΚΠΔ (GDPR), έχετε δικαίωμα:"],
        list: [
          "πρόσβασης στα δεδομένα σας",
          "διόρθωσης ανακριβών δεδομένων",
          "διαγραφής («δικαίωμα στη λήθη»)",
          "περιορισμού της επεξεργασίας",
          "εναντίωσης στην επεξεργασία",
          "φορητότητας των δεδομένων",
          "ανάκλησης της συγκατάθεσής σας ανά πάσα στιγμή",
        ],
      },
      {
        heading: "7. Καταγγελία",
        paragraphs: [
          "Έχετε δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).",
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Privacy Policy | SCALEQ",
      description: "How SCALEQ collects, uses and protects the personal data of visitors to scale-q.com.",
    },
    heading: "Privacy Policy",
    updated: `Last updated: ${LEGAL_UPDATED.en}`,
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          `The controller of personal data collected through this website (scale-q.com) is ${companyIdEn}.`,
          "Contact details for data protection matters will be published on the Contact page.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: ["We collect only the data necessary for the purposes described below:"],
        list: [
          "Details you submit through the contact form: full name, company, email, phone (optional) and the content of your message.",
          "Technical browsing data (e.g. anonymised traffic statistics), only if you have consented to analytics cookies.",
        ],
      },
      {
        heading: "3. Purpose and legal basis",
        paragraphs: [
          "Contact form details are used solely to respond to your enquiry and to communicate about a potential engagement. The legal basis is your consent and pre-contractual measures (Article 6(1)(a) and (b) GDPR).",
          "Analytics data is used to improve the website, on the basis of your consent.",
        ],
      },
      {
        heading: "4. Retention",
        paragraphs: [
          "Contact details are retained for as long as needed to handle your enquiry and for up to 24 months after the last communication, unless an engagement follows, in which case they are retained in the context of the contractual relationship.",
        ],
      },
      {
        heading: "5. Recipients",
        paragraphs: [
          "Your data is never sold and never shared with third parties for advertising. It may be stored with hosting and email providers acting as processors on our behalf.",
        ],
      },
      {
        heading: "6. Your rights",
        paragraphs: ["Under the GDPR you have the right to:"],
        list: [
          "access your data",
          "rectify inaccurate data",
          "erasure (“right to be forgotten”)",
          "restriction of processing",
          "object to processing",
          "data portability",
          "withdraw your consent at any time",
        ],
      },
      {
        heading: "7. Complaints",
        paragraphs: [
          "You have the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).",
        ],
      },
    ],
  },
};

export const cookiesContent: Record<Locale, LegalPageContent> = {
  el: {
    meta: {
      title: "Πολιτική Cookies | SCALEQ",
      description: "Ποια cookies χρησιμοποιεί το scale-q.com, για ποιον σκοπό, και πώς διαχειρίζεστε τις προτιμήσεις σας.",
    },
    heading: "Πολιτική Cookies",
    updated: `Τελευταία ενημέρωση: ${LEGAL_UPDATED.el}`,
    sections: [
      {
        heading: "1. Τι είναι τα cookies",
        paragraphs: [
          "Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας κατά την περιήγηση. Χρησιμοποιούνται για τη λειτουργία του ιστότοπου και, εφόσον συναινέσετε, για στατιστικούς σκοπούς.",
        ],
      },
      {
        heading: "2. Κατηγορίες που χρησιμοποιούμε",
        paragraphs: [],
        list: [
          "Απαραίτητα: απαιτούνται για τη βασική λειτουργία του ιστότοπου (π.χ. αποθήκευση των προτιμήσεών σας για τα cookies). Δεν απενεργοποιούνται.",
          "Στατιστικά (προαιρετικά): εργαλεία ανάλυσης επισκεψιμότητας (όπως Google Analytics ή Microsoft Clarity) που μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείται ο ιστότοπος. Ενεργοποιούνται μόνο μετά τη ρητή συγκατάθεσή σας.",
        ],
      },
      {
        heading: "3. Διαχείριση προτιμήσεων",
        paragraphs: [
          "Μπορείτε να αλλάξετε τις προτιμήσεις σας διαγράφοντας τα cookies του ιστότοπου από τον browser σας — στην επόμενη επίσκεψη θα ερωτηθείτε ξανά. Μπορείτε επίσης να ρυθμίσετε τον browser σας ώστε να απορρίπτει cookies συνολικά.",
        ],
      },
      {
        heading: "4. Υπεύθυνος",
        paragraphs: [`${companyIdEl}.`],
      },
    ],
  },
  en: {
    meta: {
      title: "Cookie Policy | SCALEQ",
      description: "Which cookies scale-q.com uses, for what purpose, and how to manage your preferences.",
    },
    heading: "Cookie Policy",
    updated: `Last updated: ${LEGAL_UPDATED.en}`,
    sections: [
      {
        heading: "1. What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device while browsing. They are used for the operation of the website and, if you consent, for analytics purposes.",
        ],
      },
      {
        heading: "2. Categories we use",
        paragraphs: [],
        list: [
          "Essential: required for the core operation of the website (e.g. storing your cookie preferences). These cannot be switched off.",
          "Analytics (optional): traffic analysis tools (such as Google Analytics or Microsoft Clarity) that help us understand how the site is used. They are activated only after your explicit consent.",
        ],
      },
      {
        heading: "3. Managing preferences",
        paragraphs: [
          "You can change your preferences by deleting this site's cookies in your browser — you will be asked again on your next visit. You can also configure your browser to reject cookies altogether.",
        ],
      },
      {
        heading: "4. Controller",
        paragraphs: [`${companyIdEn}.`],
      },
    ],
  },
};

export const termsContent: Record<Locale, LegalPageContent> = {
  el: {
    meta: {
      title: "Όροι Χρήσης | SCALEQ",
      description: "Όροι χρήσης του ιστότοπου scale-q.com.",
    },
    heading: "Όροι Χρήσης",
    updated: `Τελευταία ενημέρωση: ${LEGAL_UPDATED.el}`,
    sections: [
      {
        heading: "1. Ταυτότητα",
        paragraphs: [
          `Ο παρών ιστότοπος (scale-q.com) ανήκει και λειτουργεί από την εταιρεία ${companyIdEl}.`,
        ],
      },
      {
        heading: "2. Χρήση του ιστότοπου",
        paragraphs: [
          "Το περιεχόμενο του ιστότοπου παρέχεται για ενημερωτικούς σκοπούς. Η χρήση του γίνεται με ευθύνη του επισκέπτη. Απαγορεύεται κάθε χρήση που παραβιάζει την ισχύουσα νομοθεσία ή θίγει δικαιώματα τρίτων.",
        ],
      },
      {
        heading: "3. Πνευματική ιδιοκτησία",
        paragraphs: [
          "Το σύνολο του περιεχομένου (κείμενα, γραφικά, σήματα, διάταξη) αποτελεί πνευματική ιδιοκτησία της εταιρείας, εκτός αν ορίζεται διαφορετικά. Απαγορεύεται η αναπαραγωγή χωρίς προηγούμενη έγγραφη άδεια.",
        ],
      },
      {
        heading: "4. Περιορισμός ευθύνης",
        paragraphs: [
          "Καταβάλλουμε κάθε εύλογη προσπάθεια για την ακρίβεια του περιεχομένου, χωρίς όμως να εγγυόμαστε την πληρότητα ή την καταλληλότητά του για συγκεκριμένο σκοπό. Η εταιρεία δεν ευθύνεται για ζημίες που απορρέουν από τη χρήση του ιστότοπου.",
        ],
      },
      {
        heading: "5. Εφαρμοστέο δίκαιο",
        paragraphs: [
          "Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Αρμόδια είναι τα δικαστήρια της έδρας της εταιρείας.",
        ],
      },
    ],
  },
  en: {
    meta: {
      title: "Terms of Use | SCALEQ",
      description: "Terms of use for the scale-q.com website.",
    },
    heading: "Terms of Use",
    updated: `Last updated: ${LEGAL_UPDATED.en}`,
    sections: [
      {
        heading: "1. Identity",
        paragraphs: [
          `This website (scale-q.com) is owned and operated by ${companyIdEn}.`,
        ],
      },
      {
        heading: "2. Use of the website",
        paragraphs: [
          "The content of this website is provided for informational purposes. Visitors use it at their own responsibility. Any use that violates applicable law or infringes third-party rights is prohibited.",
        ],
      },
      {
        heading: "3. Intellectual property",
        paragraphs: [
          "All content (texts, graphics, marks, layout) is the intellectual property of the company unless stated otherwise. Reproduction without prior written permission is prohibited.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        paragraphs: [
          "We make every reasonable effort to keep the content accurate, without guaranteeing its completeness or fitness for a particular purpose. The company is not liable for damages arising from the use of this website.",
        ],
      },
      {
        heading: "5. Governing law",
        paragraphs: [
          "These terms are governed by Greek law. The courts of the company's registered seat have jurisdiction.",
        ],
      },
    ],
  },
};
