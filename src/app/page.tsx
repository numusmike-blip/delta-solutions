import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FoundingCallout } from "@/components/FoundingBanner";
import { site } from "@/data/site";
import { pricingTiers } from "@/data/pricing";
import { industries } from "@/data/industries";

const trustSignals = [
  {
    title: "You own everything",
    body: "Website, Google profile, tracking, ad accounts — all built under an email address you own. Leave anytime and keep it all.",
  },
  {
    title: "Truly month to month",
    body: "No contracts, no lock-in. We recommend staying through month 3 for a full traffic report, but nothing forces you to.",
  },
  {
    title: "We win when you win",
    body: "A base rate plus commission on qualified calls. If your phone doesn't ring, we don't make what we're supposed to either.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 0%, var(--amber-600) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 100%, var(--navy-500) 0%, transparent 60%)",
          }}
        />
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {site.city}, {site.country}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {site.tagline}.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Delta Solutions isn&apos;t a marketing agency you hire and hope for the best.
            It&apos;s a teammate with real skin in the game — for businesses in Tijuana
            who are tired of paying whether the phone rings or not.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Book a Call</Button>
            <Button href="/pricing" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
              See Pricing
            </Button>
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="bg-white py-20 sm:py-24">
        <Container className="max-w-3xl">
          <p className="font-display text-2xl font-medium leading-relaxed text-navy-900 sm:text-3xl">
            &ldquo;{site.manifesto}&rdquo;
          </p>
          <p className="mt-6 text-sm text-muted">{site.signatureLine}</p>
        </Container>
      </section>

      {/* Trust signals */}
      <section className="bg-surface-muted py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {trustSignals.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-7">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing snapshot */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Three ways to work together
            </h2>
            <p className="mt-3 text-muted">
              Every plan includes the same ownership structure and month-to-month terms.
              The difference is how much of the growth work we&apos;re doing for you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-amber-400 bg-navy-950 text-white shadow-lg shadow-navy-900/10"
                    : "border-border bg-white"
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-3 w-fit rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-navy-950">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-semibold ${
                    tier.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <p className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`font-display text-3xl font-semibold ${
                      tier.highlighted ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className={tier.highlighted ? "text-white/60" : "text-muted"}>
                    {tier.priceNote}
                  </span>
                </p>
                <p className={`mt-3 text-sm ${tier.highlighted ? "text-white/70" : "text-muted"}`}>
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {tier.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2 ${tier.highlighted ? "text-white/80" : "text-navy-900/80"}`}
                    >
                      <span className="text-amber-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button
                    href="/pricing"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    See full plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Founding member callout */}
      <section className="pb-20">
        <Container>
          <FoundingCallout />
        </Container>
      </section>

      {/* Industries strip */}
      <section className="border-y border-border bg-surface-muted py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy-900">
            Built for businesses like yours
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {industries.slice(0, 12).map((i) => (
              <Link
                key={i.slug}
                href={`/industries/${i.slug}`}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm text-navy-900 transition-colors hover:border-amber-400 hover:bg-amber-100/40"
              >
                {i.name}
              </Link>
            ))}
            <Link
              href="/industries"
              className="rounded-full bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800"
            >
              See all industries →
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-950 py-20 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Let&apos;s see if we&apos;re a fit.
            </h2>
            <p className="mt-2 max-w-lg text-white/70">
              No pitch deck, no pressure — just a real conversation about your business
              and whether Delta Solutions makes sense for it.
            </p>
          </div>
          <Button href="/contact">Book a Call</Button>
        </Container>
      </section>
    </>
  );
}
