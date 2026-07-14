import type { LegalPageContent } from "@/content/legal";
import { Container } from "@/components/ui/Container";

/** Shared renderer for the privacy / cookies / terms pages. */
export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <div className="bg-ink pb-24 text-paper">
      <Container className="max-w-3xl pt-36 sm:pt-44">
        <h1 className="display text-4xl sm:text-5xl">{content.heading}</h1>
        <p className="eyebrow mt-4 text-steel">{content.updated}</p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="display text-xl text-paper sm:text-2xl">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-steel">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-steel">
                      <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-brass" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
