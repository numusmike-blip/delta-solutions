import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const BASE_URL = "https://deltasolutions.mx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/industries",
    "/how-it-works",
    "/about",
    "/case-studies",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
