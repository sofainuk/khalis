import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
  const items: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/shop/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...pages, ...items];
}
