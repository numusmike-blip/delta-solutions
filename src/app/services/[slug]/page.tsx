import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { services, getServiceBySlug } from "@/data/services";
import { industries } from "@/data/industries";
import { site } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — ${service.tagline}`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = industries.filter((i) => i.relatedServices.includes(service.slug)).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: `${service.name} — ${site.name}`,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
    },
    areaServed: {
      "@type": "City",
      name: site.city,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            {service.name}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {service.tagline}
          </h1>
          {service.tierNote && (
            <p className="mt-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
              {service.tierNote}
            </p>
          )}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-navy-900/80">{service.description}</p>

            <h2 className="mt-10 font-display text-xl font-semibold text-navy-900">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 text-navy-900/80">
                  <span className="mt-0.5 text-amber-500">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/contact">Book a Call</Button>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface-muted p-6">
              <h3 className="font-display text-sm font-semibold text-navy-900">
                Other pieces that work with {service.shortName}
              </h3>
              <ul className="mt-4 space-y-2">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 4)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-medium text-navy-900 hover:text-amber-600"
                      >
                        {s.name} →
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-display text-sm font-semibold text-navy-900">
                  Common for
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {related.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/industries/${i.slug}`}
                      className="rounded-full border border-border px-3 py-1 text-xs text-navy-900 hover:border-amber-400"
                    >
                      {i.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
