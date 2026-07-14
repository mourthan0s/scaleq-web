import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { outcomes } from "@/data/outcomes";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Business outcomes — deliberately qualitative, no invented metrics.
 * An editorial two-column ledger with measurement-rule dividers.
 */
export function Outcomes({ locale }: { locale: Locale }) {
  const t = homeContent[locale].outcomes;

  return (
    <Section theme="ink" index={t.index} label={t.label}>
      <Reveal>
        <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">{t.heading}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-steel">{t.intro}</p>
      </Reveal>

      <dl className="mt-14 grid gap-x-16 sm:grid-cols-2">
        {outcomes.map((o, i) => (
          <Reveal key={o.key} delay={(i % 2) * 0.08}>
            <div className="border-t border-steel/15 py-7">
              <dt className="flex items-baseline gap-4">
                <span className="eyebrow text-brass" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-xl text-paper sm:text-2xl">{o.title[locale]}</span>
              </dt>
              <dd className="mt-3 pl-10 text-sm leading-relaxed text-steel">
                {o.description[locale]}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
