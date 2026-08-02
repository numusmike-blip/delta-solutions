import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `What We Bring to the Table`,
  description: `Websites, Google presence, SEO, social, design, ads, and custom builds for businesses in ${site.city} — each piece of Delta Solutions, explained.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            What we bring to the table
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Not a cold list of services — six pieces that work together, scaled to what
            your business in {site.city} actually needs right now.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors hover:border-amber-400"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  0{idx + 1}
                </span>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-900">
                  {service.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted">{service.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
                  {service.description}
                </p>
                <span className="mt-6 text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              See how it all fits into a plan
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              Delta Base, Growth, and Partner bundle these pieces differently depending
              on what your business needs.
            </p>
          </div>
          <Button href="/pricing">View Pricing</Button>
        </Container>
      </section>
    </>
  );
}
