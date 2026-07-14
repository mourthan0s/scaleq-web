import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/contact", ...contactContent[l].meta });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = contactContent[l];

  return (
    <div className="bg-ink pb-24 text-paper">
      <Container className="pt-36 sm:pt-44">
        <p className="eyebrow text-brass">{t.eyebrow}</p>
        <h1 className="display mt-5 max-w-2xl text-4xl sm:text-5xl">{t.heading}</h1>
        <p className="mt-6 max-w-xl leading-relaxed text-steel">{t.intro}</p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <ContactForm locale={l} />

          <aside className="lg:border-l lg:border-steel/15 lg:pl-10">
            <h2 className="eyebrow text-brass">{t.aside.heading}</h2>
            <ul className="mt-5 space-y-4">
              {t.aside.points.map((point, i) => (
                <li key={point} className="flex gap-4 text-sm leading-relaxed text-steel">
                  <span className="eyebrow mt-0.5 text-brass" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-steel/15 pt-6 text-xs leading-relaxed text-steel/70">
              {t.aside.legalNote}
            </p>
          </aside>
        </div>
      </Container>
    </div>
  );
}
