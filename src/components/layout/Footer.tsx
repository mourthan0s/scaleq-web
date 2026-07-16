import Link from "next/link";
import { localeHref, type Locale } from "@/lib/i18n";
import { mainNav, legalNav } from "@/content/nav";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/graphics/Logo";

const strap: Record<Locale, string> = {
  el: "Στρατηγική, τεχνολογία και υλοποίηση για επιχειρήσεις που θέλουν να μεγαλώσουν με δομή.",
  en: "Strategy, technology and delivery for businesses that want to grow with structure.",
};

const colTitles: Record<Locale, { pages: string; legal: string; company: string }> = {
  el: { pages: "Πλοήγηση", legal: "Νομικά", company: "Εταιρεία" },
  en: { pages: "Navigation", legal: "Legal", company: "Company" },
};

export function Footer({ locale }: { locale: Locale }) {
  const t = colTitles[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/15 bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-10" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              {strap[locale]}
            </p>
          </div>

          <nav aria-label={t.pages}>
            <h2 className="eyebrow mb-5 text-brass">{t.pages}</h2>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localeHref(locale, item.path)}
                    className="text-sm text-steel transition-colors hover:text-paper"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.legal}>
            <h2 className="eyebrow mb-5 text-brass">{t.legal}</h2>
            <ul className="space-y-3">
              {legalNav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localeHref(locale, item.path)}
                    className="text-sm text-steel transition-colors hover:text-paper"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-5 text-brass">{t.company}</h2>
            <ul className="space-y-3 text-sm text-steel">
              <li>{locale === "el" ? siteConfig.legalName : siteConfig.legalNameEn}</li>
              <li>
                {locale === "el" ? "Α.Φ.Μ." : "VAT"}: {siteConfig.vatNumber}
              </li>
              <li>
                {locale === "el" ? "Αρ. Γ.Ε.ΜΗ." : "G.E.MI. no."}: {siteConfig.gemiNumber}
              </li>
              {siteConfig.contact.email && (
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-paper">
                    {siteConfig.contact.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-steel/15 pt-8 text-xs text-steel sm:flex-row">
          <p>
            © {year} {locale === "el" ? siteConfig.legalName : siteConfig.legalNameEn}
          </p>
          <p className="eyebrow">scale-q.com</p>
        </div>
      </div>
    </footer>
  );
}
