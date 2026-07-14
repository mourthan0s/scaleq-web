import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { homeMeta } from "@/content/pages";
import { Hero } from "@/components/home/Hero";
import { ClarityScene } from "@/components/home/ClarityScene";
import { Capabilities } from "@/components/home/Capabilities";
import { OperatingModel } from "@/components/home/OperatingModel";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { Outcomes } from "@/components/home/Outcomes";
import { SelectedWork } from "@/components/home/SelectedWork";
import { TechnologySection } from "@/components/home/TechnologySection";
import { FinalCta } from "@/components/home/FinalCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/", ...homeMeta[l] });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";

  return (
    <>
      <Hero locale={l} />
      <ClarityScene locale={l} />
      <Capabilities locale={l} />
      <OperatingModel locale={l} />
      <SolutionsSection locale={l} />
      <Outcomes locale={l} />
      <SelectedWork locale={l} />
      <TechnologySection locale={l} />
      <FinalCta locale={l} />
    </>
  );
}
