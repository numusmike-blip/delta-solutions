import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { industries } from "@/data/industries";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: `From auto body shops to law firms — how Delta Solutions works with different kinds of businesses in ${site.city}.`,
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Industries we serve
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Every business in {site.city} searches differently. Here&apos;s how Delta
            Solutions works with businesses like yours.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 transition-colors hover:border-amber-400"
              >
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  {industry.name}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                  {industry.blurb}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-navy-900 group-hover:text-amber-600">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
