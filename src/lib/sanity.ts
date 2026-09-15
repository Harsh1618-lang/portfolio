import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

/**
 * Fetches from Sanity but never throws. If the project isn't configured
 * yet, is unreachable, or the query fails for any reason, this resolves to
 * `null` instead of crashing the page — callers fall back to `DATA` in
 * src/data/resume.tsx.
 */
export async function safeFetch<T = any>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query);
  } catch (error) {
    console.error("Sanity fetch failed, falling back to static data:", error);
    return null;
  }
}

export default client;
