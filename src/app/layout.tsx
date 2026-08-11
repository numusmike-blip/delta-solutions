import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FoundingBanner } from "@/components/FoundingBanner";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/lib/language-context";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deltasolutions.mx"),
  title: {
    default: `${site.name} | Marketing & Business Tech for ${site.city} Businesses`,
    template: `%s | ${site.name}`,
  },
  description:
    "Delta Solutions is a Tijuana-based marketing and business technology partner: websites, Google presence, and growth systems built on a pricing model where we only win when you do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <FoundingBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
