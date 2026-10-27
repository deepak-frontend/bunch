import type { MetadataRoute } from "next";
import { marketingRoutes } from "@/lib/site-routes";
import { getSitemapContent } from "@/sanity/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mybunch.ai";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getSitemapContent();
  const staticEntries = marketingRoutes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : route === "/pricing/" ? 0.9 : 0.7,
  }));

  return [
    ...staticEntries,
    ...content.blogRoutes.map((slug) => ({
      url: new URL(`/blogs/${slug}/`, siteUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...content.tags.map((tag) => ({
      url: new URL(
        `/blogs/tag/${encodeURIComponent(tag)}/`,
        siteUrl,
      ).toString(),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
  ];
}
