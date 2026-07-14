"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { localeHref, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "scaleq-consent-v1";

interface ConsentState {
  essential: true;
  analytics: boolean;
  decidedAt: string;
}

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

const copy: Record<
  Locale,
  {
    title: string;
    body: string;
    policy: string;
    essentialOnly: string;
    acceptAll: string;
    analyticsLabel: string;
    analyticsHint: string;
    essentialLabel: string;
    essentialHint: string;
    save: string;
    settings: string;
  }
> = {
  el: {
    title: "Cookies",
    body: "Χρησιμοποιούμε απαραίτητα cookies για τη λειτουργία του site. Cookies ανάλυσης επισκεψιμότητας ενεργοποιούνται μόνο εφόσον τα αποδεχθείτε.",
    policy: "Πολιτική Cookies",
    essentialOnly: "Μόνο τα απαραίτητα",
    acceptAll: "Αποδοχή όλων",
    analyticsLabel: "Στατιστικά",
    analyticsHint: "Ανώνυμα δεδομένα χρήσης για τη βελτίωση του site.",
    essentialLabel: "Απαραίτητα",
    essentialHint: "Απαιτούνται για τη βασική λειτουργία. Πάντα ενεργά.",
    save: "Αποθήκευση επιλογών",
    settings: "Προσαρμογή",
  },
  en: {
    title: "Cookies",
    body: "We use essential cookies to run the site. Analytics cookies are enabled only if you accept them.",
    policy: "Cookie Policy",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
    analyticsLabel: "Analytics",
    analyticsHint: "Anonymous usage data that helps us improve the site.",
    essentialLabel: "Essential",
    essentialHint: "Required for core functionality. Always on.",
    save: "Save preferences",
    settings: "Customise",
  },
};

/** Injects analytics scripts only after explicit consent and only if IDs are configured. */
function loadAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  if (gaId && !document.getElementById("scaleq-ga")) {
    const s = document.createElement("script");
    s.id = "scaleq-ga";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
    const inline = document.createElement("script");
    inline.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`;
    document.head.appendChild(inline);
  }

  if (clarityId && !document.getElementById("scaleq-clarity")) {
    const s = document.createElement("script");
    s.id = "scaleq-clarity";
    s.textContent = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");`;
    document.head.appendChild(s);
  }
}

export function CookieConsent({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const existing = readConsent();
    if (existing?.analytics) {
      loadAnalytics();
    }
    if (existing) return;
    // Small delay so the banner enters after the page settles.
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const decide = useCallback((allowAnalytics: boolean) => {
    const state: ConsentState = {
      essential: true,
      analytics: allowAnalytics,
      decidedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage unavailable — treat as session-only consent
    }
    if (allowAnalytics) loadAnalytics();
    setVisible(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label={t.title}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[90] max-w-md border border-steel/25 bg-ink-2/95 p-6 backdrop-blur-md sm:left-auto sm:right-6 sm:bottom-6"
        >
          <p className="eyebrow text-brass">{t.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            {t.body}{" "}
            <Link href={localeHref(locale, "/cookies")} className="underline hover:text-paper">
              {t.policy}
            </Link>
          </p>

          {expanded && (
            <div className="mt-4 space-y-3 border-t border-steel/15 pt-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-paper">{t.essentialLabel}</p>
                  <p className="text-xs text-steel">{t.essentialHint}</p>
                </div>
                <input type="checkbox" checked disabled aria-label={t.essentialLabel} className="mt-1 accent-brass" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-paper">{t.analyticsLabel}</p>
                  <p className="text-xs text-steel">{t.analyticsHint}</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  aria-label={t.analyticsLabel}
                  className="mt-1 accent-brass"
                />
              </div>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {expanded ? (
              <button
                type="button"
                onClick={() => decide(analytics)}
                className="bg-paper px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-brass"
              >
                {t.save}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => decide(true)}
                  className="bg-paper px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-brass"
                >
                  {t.acceptAll}
                </button>
                <button
                  type="button"
                  onClick={() => decide(false)}
                  className="border border-steel/40 px-4 py-2.5 text-xs font-semibold text-paper transition-colors hover:border-brass"
                >
                  {t.essentialOnly}
                </button>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="text-xs text-steel underline transition-colors hover:text-paper"
                >
                  {t.settings}
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
