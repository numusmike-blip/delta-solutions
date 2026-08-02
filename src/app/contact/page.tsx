import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact / Book a Call",
  description: `Get in touch with Delta Solutions in ${site.city}. Book a call with founder ${site.founder} or send a message.`,
};

export default function ContactPage() {
  const sameAs = [site.social.facebook, site.social.instagram, site.linkedin].filter(
    Boolean
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: "https://deltasolutions.mx/brand/logo-source-white-bg.jpeg",
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    areaServed: {
      "@type": "City",
      name: site.city,
    },
    sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
