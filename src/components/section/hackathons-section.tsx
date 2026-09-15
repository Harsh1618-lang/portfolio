/* eslint-disable @next/next/no-img-element */
import { safeFetch } from "@/lib/sanity";
import HackathonsSectionClient from "./hackathons-section.client";
import { siteSettingsQuery } from "@/lib/queries";

export default async function HackathonsSection() {
  const siteSettings: any = await safeFetch(siteSettingsQuery);
  const hackathons = siteSettings?.hackathons || [];
  return <HackathonsSectionClient hackathons={hackathons} />;
}
