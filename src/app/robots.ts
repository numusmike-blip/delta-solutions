import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The hidden Netlify form-detection page isn't content.
      disallow: "/__forms.html",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
