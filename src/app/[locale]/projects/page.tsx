import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { projectsPage } from "@/content/pages";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  return pageMetadata({ locale: l, path: "/projects", ...projectsPage[l].meta });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "el";
  const t = projectsPage[l];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} heading={t.heading} intro={t.intro} />
      <div className="paper-surface text-ink">
        <ProjectsExplorer locale={l} />
      </div>
    </>
  );
}
