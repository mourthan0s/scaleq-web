import type { Locale } from "@/lib/i18n";

/** A value that exists in every supported locale. */
export type Localized<T> = Record<Locale, T>;
