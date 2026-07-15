import type { Locale } from "@/lib/i18n";

/** UI strings for the projects listing and detail pages. */

export interface ProjectsUiContent {
  filters: {
    heading: string;
    category: string;
    participation: string;
    technology: string;
    industry: string;
    all: string;
    clear: string;
    results: (n: number) => string;
    empty: {
      title: string;
      body: string;
      action: string;
    };
  };
  listing: {
    featuredLabel: string;
    allLabel: string;
    sampleBadge: string;
    view: string;
  };
  detail: {
    back: string;
    sampleNotice: string;
    organizationLabel: string;
    industryLabel: string;
    periodLabel: string;
    statusLabel: string;
    platformsLabel: string;
    categoryLabel: string;
    overviewLabel: string;
    roleHeading: string;
    roleLabel: string;
    teamLabel: string;
    responsibilitiesLabel: string;
    contributionLabel: string;
    expertiseLabel: string;
    challengeLabel: string;
    approachLabel: string;
    solutionLabel: string;
    featuresLabel: string;
    systemsLabel: string;
    technologiesLabel: string;
    integrationsLabel: string;
    galleryLabel: string;
    outcomeLabel: string;
    linksLabel: string;
    websiteLink: string;
    appStoreLink: string;
    googlePlayLink: string;
    disclaimerLabel: string;
    relatedProjectsLabel: string;
    relatedServicesLabel: string;
    cta: string;
  };
}

export const projectsUi: Record<Locale, ProjectsUiContent> = {
  el: {
    filters: {
      heading: "Φίλτρα",
      category: "Κατηγορία",
      participation: "Είδος συμμετοχής",
      technology: "Τεχνολογία",
      industry: "Κλάδος",
      all: "Όλα",
      clear: "Καθαρισμός φίλτρων",
      results: (n) => (n === 1 ? "1 έργο" : `${n} έργα`),
      empty: {
        title: "Κανένα έργο με αυτόν τον συνδυασμό.",
        body: "Δοκιμάστε λιγότερα φίλτρα — ή ρωτήστε μας απευθείας για αντίστοιχη εμπειρία.",
        action: "Καθαρισμός φίλτρων",
      },
    },
    listing: {
      featuredLabel: "Επιλεγμένα",
      allLabel: "Όλα τα έργα",
      sampleBadge: "Ενδεικτικό σενάριο",
      view: "Δείτε το έργο",
    },
    detail: {
      back: "Όλα τα έργα",
      sampleNotice: "Ενδεικτικό σενάριο — παρουσιάζει τη μεθοδολογία, όχι συγκεκριμένο πελάτη.",
      organizationLabel: "Οργανισμός",
      industryLabel: "Κλάδος",
      periodLabel: "Περίοδος",
      statusLabel: "Κατάσταση",
      platformsLabel: "Πλατφόρμες",
      categoryLabel: "Κατηγορία",
      overviewLabel: "Το έργο",
      roleHeading: "Η συμμετοχή μας",
      roleLabel: "Ρόλος",
      teamLabel: "Πλαίσιο ομάδας",
      responsibilitiesLabel: "Τι αναλάβαμε",
      contributionLabel: "Συνοπτικά",
      expertiseLabel: "Περιοχές Εξειδίκευσης",
      challengeLabel: "Η πρόκληση",
      approachLabel: "Η προσέγγιση",
      solutionLabel: "Η λύση",
      featuresLabel: "Βασικές λειτουργίες",
      systemsLabel: "Συστήματα που παραδόθηκαν",
      technologiesLabel: "Τεχνολογίες",
      integrationsLabel: "Integrations",
      galleryLabel: "Επιλεγμένες οθόνες",
      outcomeLabel: "Αποτέλεσμα",
      linksLabel: "Σύνδεσμοι",
      websiteLink: "Επίσημο website",
      appStoreLink: "App Store",
      googlePlayLink: "Google Play",
      disclaimerLabel: "Σημείωση",
      relatedProjectsLabel: "Σχετικά έργα",
      relatedServicesLabel: "Σχετικές υπηρεσίες",
      cta: "Συζητήστε ένα αντίστοιχο έργο",
    },
  },
  en: {
    filters: {
      heading: "Filters",
      category: "Category",
      participation: "Participation",
      technology: "Technology",
      industry: "Industry",
      all: "All",
      clear: "Clear filters",
      results: (n) => (n === 1 ? "1 project" : `${n} projects`),
      empty: {
        title: "No projects match this combination.",
        body: "Try fewer filters — or ask us directly about relevant experience.",
        action: "Clear filters",
      },
    },
    listing: {
      featuredLabel: "Featured",
      allLabel: "All projects",
      sampleBadge: "Demonstration scenario",
      view: "View case",
    },
    detail: {
      back: "All projects",
      sampleNotice: "Demonstration scenario — it illustrates the methodology, not a specific client.",
      organizationLabel: "Organization",
      industryLabel: "Industry",
      periodLabel: "Period",
      statusLabel: "Status",
      platformsLabel: "Platforms",
      categoryLabel: "Category",
      overviewLabel: "The project",
      roleHeading: "Our contribution",
      roleLabel: "Role",
      teamLabel: "Team context",
      responsibilitiesLabel: "What we took on",
      contributionLabel: "In summary",
      expertiseLabel: "Areas of Expertise",
      challengeLabel: "The challenge",
      approachLabel: "The approach",
      solutionLabel: "The solution",
      featuresLabel: "Key features",
      systemsLabel: "Delivered systems",
      technologiesLabel: "Technologies",
      integrationsLabel: "Integrations",
      galleryLabel: "Selected screens",
      outcomeLabel: "Outcome",
      linksLabel: "Links",
      websiteLink: "Official website",
      appStoreLink: "App Store",
      googlePlayLink: "Google Play",
      disclaimerLabel: "Note",
      relatedProjectsLabel: "Related projects",
      relatedServicesLabel: "Related services",
      cta: "Discuss a similar project",
    },
  },
};
