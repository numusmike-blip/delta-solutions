import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { caseStudies } from "@/data/case-studies";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Results",
  description: `Real before-and-after results from businesses Delta Solutions works with in ${site.city}.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Results</h1>
          <p className="mt-5 text-lg text-white/70">
            Real before-and-after numbers from businesses we work with — published as
            soon as each partnership has enough data to show honestly.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {caseStudies.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-surface-muted p-10 text-center">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                Our first results are on the way
              </h2>
              <p className="mt-3 text-muted">
                We&apos;d rather publish real, verified numbers than placeholder stats.
                As founding businesses hit their first full quarter with us, their
                results will show up here.
              </p>
              <div className="mt-6">
                <Button href="/contact">Be one of the first</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((study) => (
                <div key={study.slug} className="rounded-2xl border border-border bg-white p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {study.industry}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-navy-900">
                    {study.business}
                  </h2>
                  <p className="mt-3 text-sm text-muted">{study.summary}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="rounded-lg bg-surface-muted p-4">
                        <p className="text-xs text-muted">{m.label}</p>
                        <p className="mt-1 text-sm font-semibold text-navy-900">
                          {m.before} → {m.after}
                        </p>
                      </div>
                    ))}
                  </div>
                  {study.quote && (
                    <blockquote className="mt-6 border-l-2 border-amber-400 pl-4 text-sm italic text-navy-900/80">
                      &ldquo;{study.quote.text}&rdquo;
                      <footer className="mt-1 not-italic text-xs text-muted">
                        — {study.quote.attribution}
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
