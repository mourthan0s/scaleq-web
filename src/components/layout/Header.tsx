"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { localeHref, alternateHref, type Locale } from "@/lib/i18n";
import { mainNav, ctaLabel } from "@/content/nav";
import { Wordmark } from "@/components/graphics/Wordmark";

/**
 * Strip any locale prefix so we always work with the locale-agnostic path.
 * At runtime the public URL only ever has /en, but during prerendering
 * usePathname() returns the internal /el path as well.
 */
function basePath(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|el)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const path = basePath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation (state adjustment during render, per React docs).
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const switchHref = alternateHref(locale, path);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-steel/15 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-10">
        <Link
          href={localeHref(locale, "/")}
          className="text-[15px] text-paper hover:text-brass transition-colors"
          aria-label="SCALEQ — Home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={locale === "el" ? "Κύριο μενού" : "Main menu"}>
          {mainNav.slice(0, 5).map((item) => {
            const active = path === item.path || path.startsWith(`${item.path}/`);
            return (
              <Link
                key={item.path}
                href={localeHref(locale, item.path)}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  active ? "text-brass" : "text-steel hover:text-paper"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitch locale={locale} switchHref={switchHref} />
          <Link
            href={localeHref(locale, "/contact")}
            className="hidden border border-brass/60 px-4 py-2 text-[12px] font-semibold tracking-wide text-brass transition-colors hover:bg-brass hover:text-ink lg:inline-block"
          >
            {ctaLabel[locale]}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={
              open
                ? locale === "el" ? "Κλείσιμο μενού" : "Close menu"
                : locale === "el" ? "Άνοιγμα μενού" : "Open menu"
            }
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span
              className={`absolute h-px w-5 bg-paper transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-paper transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile menu lives OUTSIDE the header: the header's backdrop-filter
        creates a containing block that would collapse a fixed child. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink lg:hidden"
            aria-label={locale === "el" ? "Μενού" : "Menu"}
          >
            <ul className="flex flex-col px-5 pt-6 pb-10 sm:px-8">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={reduce ? undefined : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  className="border-b border-steel/15"
                >
                  <Link
                    href={localeHref(locale, item.path)}
                    className="display flex items-baseline justify-between py-5 text-2xl text-paper hover:text-brass"
                  >
                    {item.label[locale]}
                    <span className="eyebrow text-steel">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={reduce ? undefined : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8"
              >
                <Link
                  href={localeHref(locale, "/contact")}
                  className="inline-block border border-brass px-6 py-3 text-sm font-semibold text-brass"
                >
                  {ctaLabel[locale]}
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function LangSwitch({ locale, switchHref }: { locale: Locale; switchHref: string }) {
  return (
    <div className="eyebrow flex items-center gap-2 text-steel" aria-label="Language">
      {locale === "el" ? (
        <>
          <span className="text-paper" aria-current="true">GR</span>
          <span aria-hidden="true">/</span>
          <Link href={switchHref} hrefLang="en" lang="en" className="hover:text-brass transition-colors">
            EN
          </Link>
        </>
      ) : (
        <>
          <Link href={switchHref} hrefLang="el" lang="el" className="hover:text-brass transition-colors">
            GR
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-paper" aria-current="true">EN</span>
        </>
      )}
    </div>
  );
}
