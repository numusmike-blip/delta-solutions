import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { LanguageProvider } from "@/lib/language-context";
import { SITE_URL, localizePath, type Language } from "@/lib/i18n";
import { CONTACT, FLOATING_WHATSAPP, contactPointsFor, numbersFor } from "@/config/contact";
import { site } from "@/data/site";
import { meta } from "@/data/meta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// Shared <html> shell for the (en) and (es) root layouts.
export function RootShell({ lang, children }: { lang: Language; children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: `${SITE_URL}${localizePath(lang, "/")}`,
    logo: `${SITE_URL}/brand/logo-source-white-bg.jpeg`,
    image: `${SITE_URL}/brand/logo-source-white-bg.jpeg`,
    description: meta.home[lang].description,
    inLanguage: lang,
    contactPoint: contactPointsFor(lang),
    // restore if a local SEO anchor is wanted again
    // address: { "@type": "PostalAddress", addressLocality: "...", addressRegion: "...", addressCountry: "..." },
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
  };

  return (
    <html lang={lang} className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider lang={lang} numbers={numbersFor(lang)} floating={CONTACT[FLOATING_WHATSAPP]}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
