export const locales = ["el", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "el";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Builds a public href for a path in the given locale.
 * Greek lives at the root (no /el prefix), English under /en.
 * `path` is always the locale-agnostic path, e.g. "/services".
 */
export function localeHref(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === "el") return clean === "" ? "/" : clean;
  return `/en${clean}`;
}

/** The same page in the other locale — used by the language switcher. */
export function alternateHref(locale: Locale, path: string): string {
  return localeHref(locale === "el" ? "en" : "el", path);
}
