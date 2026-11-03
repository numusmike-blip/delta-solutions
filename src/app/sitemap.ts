import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { SITE_URL, localizePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/how-it-works",
    "/industries",
    "/about",
    "/faq",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ];

  // One entry per language, each listing its EN/ES alternates (hreflang).
  return paths.flatMap((path) =>
    (["en", "es"] as const).map((lang) => ({
      url: `${SITE_URL}${localizePath(lang, path)}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${SITE_URL}${localizePath("en", path)}`,
          es: `${SITE_URL}${localizePath("es", path)}`,
        },
      },
    }))
  );
}
