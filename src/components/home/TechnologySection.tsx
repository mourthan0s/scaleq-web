import type { Locale } from "@/lib/i18n";
import { homeContent } from "@/content/home";
import { techGroups, techPrinciple } from "@/data/technology";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Technology presented as a layered architecture — grouped by what each
 * layer does for the business, not as a logo wall.
 */
export function TechnologySection({ locale }: { locale: Locale }) {
  const t = homeContent[locale].technology;

  return (
    <Section theme="ink" index={t.index} label={t.label}>
      <Reveal>
        <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">{t.heading}</h2>
        <p className="mt-5 max-w-xl leading-relaxed text-steel">{t.intro}</p>
      </Reveal>

      <div className="mt-14">
        {techGroups.map((group, i) => (
          <Reveal key={group.key} delay={i * 0.05}>
            <div className="grid gap-4 border-t border-steel/15 py-8 sm:grid-cols-[180px_1fr_1.2fr] sm:gap-8">
              <p className="eyebrow pt-1 text-brass">
                L{i + 1} — {group.title[locale]}
              </p>
              <p className="text-sm leading-relaxed text-steel">{group.note[locale]}</p>
              <ul className="flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-steel/25 px-3 py-1.5 font-mono text-xs text-paper/80 transition-colors hover:border-brass hover:text-brass"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="border-t border-steel/15 pt-8">
            <p className="max-w-2xl border-l-2 border-brass pl-5 text-sm leading-relaxed text-steel">
              {techPrinciple[locale]}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
