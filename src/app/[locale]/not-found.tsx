import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Bilingual 404 — the segment above may be either locale,
 * so both languages are presented.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-svh items-center bg-ink text-paper">
      <Container className="py-32 text-center">
        <p className="eyebrow text-brass">404</p>
        <h1 className="display mt-5 text-4xl sm:text-5xl">
          Η σελίδα δεν βρέθηκε.
          <span className="mt-2 block text-steel">Page not found.</span>
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold">
          <Link href="/" className="border border-steel/40 px-6 py-3.5 transition-colors hover:border-brass hover:text-brass">
            Αρχική σελίδα
          </Link>
          <Link href="/en" className="border border-steel/40 px-6 py-3.5 transition-colors hover:border-brass hover:text-brass">
            English home
          </Link>
        </div>
      </Container>
    </div>
  );
}
