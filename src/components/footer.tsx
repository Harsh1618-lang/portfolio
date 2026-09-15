import { safeFetch } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";

export default async function Footer() {
  const siteSettings: any = await safeFetch(siteSettingsQuery);

  return (
    <footer className="mx-auto max-w-2xl mt-12 text-center text-sm text-muted-foreground">
      <div className="py-6">{siteSettings?.footerText || "Built with ❤️"}</div>
    </footer>
  );
}
