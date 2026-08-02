import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact / Book a Call",
  description: `Get in touch with Delta Solutions in ${site.city} — book a call with founder ${site.founder} or send a message.`,
};

export default function ContactPage() {
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
    sameAs: [site.social.facebook, site.social.instagram],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Book a call directly, or send a message and we&apos;ll get back to you
            personally — no sales team in between.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-amber-400/30 bg-navy-950 p-8 text-white">
              <h2 className="font-display text-xl font-semibold">Book a call</h2>
              <p className="mt-2 text-sm text-white/70">
                Pick a time that works for you — 20 minutes, no pressure, just a real
                conversation.
              </p>
              <Button href={site.bookingUrl} className="mt-5">
                Open booking calendar
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted">Phone</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium text-navy-900">
                  {site.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-muted">Email</p>
                <a href={`mailto:${site.email}`} className="font-medium text-navy-900">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-muted">Based in</p>
                <p className="font-medium text-navy-900">
                  {site.city}, {site.region}, {site.country}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell us a bit about your business and what you&apos;re hoping to fix or
              grow.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
