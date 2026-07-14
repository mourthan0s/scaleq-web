import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { JetBrains_Mono, Manrope, Source_Serif_4 } from "next/font/google";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "../globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "greek"],
  variable: "--font-source-serif",
  axes: ["opsz"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "greek"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "greek"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "SCALEQ",
  description: "Strategy, Technology & Digital Growth",
};

export const viewport: Viewport = {
  themeColor: "#0b0d11",
};

const skipLabel: Record<Locale, string> = {
  el: "Μετάβαση στο περιεχόμενο",
  en: "Skip to content",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className="scroll-pt-24">
      <body
        className={`${sourceSerif.variable} ${manrope.variable} ${jetbrains.variable} bg-ink text-paper antialiased`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
        >
          {skipLabel[locale]}
        </a>
        <Header locale={locale} />
        <main id="content">{children}</main>
        <Footer locale={locale} />
        <CookieConsent locale={locale} />
        <OrganizationSchema />
      </body>
    </html>
  );
}
