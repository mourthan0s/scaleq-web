import type { Locale } from "@/lib/i18n";

export interface NavItem {
  path: string;
  label: Record<Locale, string>;
}

export const mainNav: NavItem[] = [
  { path: "/services", label: { el: "Υπηρεσίες", en: "Services" } },
  { path: "/solutions", label: { el: "Λύσεις", en: "Solutions" } },
  { path: "/approach", label: { el: "Τρόπος συνεργασίας", en: "Approach" } },
  { path: "/projects", label: { el: "Έργα", en: "Projects" } },
  { path: "/about", label: { el: "Σχετικά", en: "About" } },
  { path: "/contact", label: { el: "Επικοινωνία", en: "Contact" } },
];

export const legalNav: NavItem[] = [
  { path: "/privacy", label: { el: "Πολιτική Απορρήτου", en: "Privacy Policy" } },
  { path: "/cookies", label: { el: "Πολιτική Cookies", en: "Cookie Policy" } },
  { path: "/terms", label: { el: "Όροι Χρήσης", en: "Terms of Use" } },
];

export const ctaLabel: Record<Locale, string> = {
  el: "Συζητήστε μαζί μας",
  en: "Talk to us",
};
