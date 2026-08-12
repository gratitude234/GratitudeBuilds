import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/resume", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${siteConfig.siteUrl}${route}`, lastModified: new Date() })),
    ...getProjects().map((project) => ({
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
