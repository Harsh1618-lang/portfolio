import { safeFetch } from "@/lib/sanity";
import WorkSectionClient from "./work-section.client";
import { siteSettingsQuery } from "@/lib/queries";

export default async function WorkSection() {
  const siteSettings: any = await safeFetch(siteSettingsQuery);
  const work = siteSettings?.work || [];
  return <WorkSectionClient work={work} />;
}

