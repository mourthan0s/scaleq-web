import { Container } from "./Container";

/** Shared dark hero band for inner pages — eyebrow, editorial heading, intro. */
export function PageHero({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink pt-36 pb-16 text-paper sm:pt-44 sm:pb-24">
      {/* measurement rail motif */}
      <div
        className="tick-rail absolute inset-y-0 left-5 hidden text-steel sm:left-8 lg:left-10 lg:block"
        aria-hidden="true"
      />
      <Container>
        <p className="eyebrow text-brass">{eyebrow}</p>
        <h1 className="display mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{heading}</h1>
        {intro && <p className="mt-7 max-w-2xl leading-relaxed text-steel sm:text-lg">{intro}</p>}
      </Container>
    </div>
  );
}
