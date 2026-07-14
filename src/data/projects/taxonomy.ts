import type { Localized } from "@/lib/types";
import type {
  ParticipationType,
  ProjectCategory,
  ProjectStatus,
} from "./types";

/**
 * Display labels for every project taxonomy, in both locales.
 * These are the single source of truth for badges, filters and detail pages.
 */

export interface ParticipationInfo {
  label: Localized<string>;
  /** One-line honest explanation shown next to the badge. */
  hint: Localized<string>;
}

/**
 * The two participation categories:
 *
 *  - collaborative  → «Συνεργατική Υλοποίηση» / "Collaborative Delivery"
 *    SCALEQ's founder/team contributed as part of a larger team or
 *    organization. The project belongs to that organization.
 *
 *  - end-to-end     → «Ολοκληρωμένη Υλοποίηση» / "End-to-End Delivery"
 *    Designed and delivered fully by SCALEQ / its team.
 */
export const participationInfo: Record<ParticipationType, ParticipationInfo> = {
  collaborative: {
    label: { el: "Συνεργατική Υλοποίηση", en: "Collaborative Delivery" },
    hint: {
      el: "Συμμετοχή ως μέλος ευρύτερης ομάδας ή οργανισμού.",
      en: "Contribution as part of a larger team or organization.",
    },
  },
  "end-to-end": {
    label: { el: "Ολοκληρωμένη Υλοποίηση", en: "End-to-End Delivery" },
    hint: {
      el: "Σχεδιασμός και υλοποίηση εξ ολοκλήρου από τη SCALEQ.",
      en: "Designed and delivered entirely by SCALEQ.",
    },
  },
};

export const categoryLabels: Record<ProjectCategory, Localized<string>> = {
  "web-platform": { el: "Web Πλατφόρμα", en: "Web Platform" },
  "mobile-app": { el: "Mobile Εφαρμογή", en: "Mobile App" },
  ecommerce: { el: "E-commerce", en: "E-commerce" },
  "business-system": { el: "Επιχειρησιακό Σύστημα", en: "Business System" },
  "ai-automation": { el: "AI & Αυτοματισμοί", en: "AI & Automation" },
  website: { el: "Website", en: "Website" },
};

export const statusLabels: Record<ProjectStatus, Localized<string>> = {
  live: { el: "Σε λειτουργία", en: "Live" },
  completed: { el: "Ολοκληρωμένο", en: "Completed" },
  ongoing: { el: "Σε εξέλιξη", en: "Ongoing" },
  "in-development": { el: "Σε ενεργή ανάπτυξη", en: "In active development" },
  archived: { el: "Αρχειοθετημένο", en: "Archived" },
};

/**
 * Default disclaimer for collaborative projects that do not define their own.
 * Rendered on the detail page so ownership is never misrepresented.
 */
export const defaultCollaborativeDisclaimer: Localized<string> = {
  el: "Το έργο ανήκει στον οργανισμό που αναφέρεται και υλοποιήθηκε από ευρύτερη ομάδα. Η παρουσίαση περιγράφει αποκλειστικά τη δική μας συμμετοχή. Όλα τα εμπορικά σήματα, τα προϊόντα και τα λογότυπα ανήκουν στους αντίστοιχους ιδιοκτήτες τους.",
  en: "This project belongs to the organization named and was delivered by a wider team. This presentation describes our contribution only. All trademarks, products and logos are the property of their respective owners.",
};

/**
 * Note shown on anonymized case studies.
 */
export const anonymizedNote: Localized<string> = {
  el: "Για λόγους εμπιστευτικότητας, ο οργανισμός δεν κατονομάζεται και ορισμένα στοιχεία παρουσιάζονται γενικευμένα.",
  en: "For confidentiality reasons, the organization is not named and certain details are presented in generalised form.",
};
