import type { Metadata } from "next";

export type Language = "en" | "es";
export type Bilingual<T = string> = { en: T; es: T };

// Canonical site URL: metadataBase, canonicals, og:url, sitemap, robots and schema all use it.
export const SITE_URL = "https://deltasolutions.world";

// English lives at "/", Spanish at "/es". Paths passed in are always the English form.
export function localizePath(lang: Language, path: string): string {
  if (lang === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

// Turns any current pathname into the same page in the other language.
export function switchLanguagePath(pathname: string, target: Language): string {
  const base = pathname === "/es" ? "/" : pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
  return localizePath(target, base);
}

// Per-page metadata with translated title/description, canonical URL and hreflang alternates.
export function pageMetadata(
  lang: Language,
  path: string,
  meta: Bilingual<{ title: string; description: string }>
): Metadata {
  const { title, description } = meta[lang];
  return {
    // The home page title is complete on its own; others get " | Delta Solutions" from the layout.
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localizePath(lang, path),
      languages: {
        en: localizePath("en", path),
        es: localizePath("es", path),
        "x-default": localizePath("en", path),
      },
    },
    openGraph: {
      title,
      description,
      url: localizePath(lang, path),
      locale: lang === "es" ? "es_MX" : "en_US",
      siteName: "Delta Solutions",
      type: "website",
    },
  };
}
