import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Contracts, qualified calls, commission, account ownership, and how Delta Solutions works with businesses in ${site.city}.`,
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
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
            Frequently asked questions
          </h1>
          <p className="mt-5 text-lg text-white/70">
            The honest answers to the questions that usually come up on the first call.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="divide-y divide-border rounded-2xl border border-border bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-navy-900">
                  {faq.question}
                  <span className="shrink-0 text-amber-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Still have a question?
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              Ask it directly — book a call and we&apos;ll cover whatever isn&apos;t
              answered here.
            </p>
          </div>
          <Button href="/contact">Book a Call</Button>
        </Container>
      </section>
    </>
  );
}
