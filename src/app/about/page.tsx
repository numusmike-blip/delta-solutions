import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${site.founder}`,
  description: `Why Delta Solutions is built as a teammate, not a vendor — the story behind founder ${site.founder} and Delta Solutions in ${site.city}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {site.founder}
          </h1>
          <p className="mt-5 text-lg text-white/70">
            Founder of Delta Solutions — based in {site.city}, working directly with
            every business partner, no account managers in between.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl space-y-6 text-lg leading-relaxed text-navy-900/80">
          <p>
            Delta Solutions started from a simple frustration: most marketing companies
            get paid whether or not they actually move the needle for the business
            they&apos;re working with. That structure doesn&apos;t reward good work —
            it rewards retention. I didn&apos;t want to build a company like that.
          </p>
          <p>
            I&apos;m based in {site.city}, working across the border with businesses on
            both sides — which means I&apos;ve seen how differently marketing gets sold
            depending on which side of the line you&apos;re on, and how much of that
            gap is just packaging, not substance.
          </p>
          <p>
            Delta Solutions is built to close that gap. Every business partner works
            directly with me — no account managers, no outsourced call centers, no
            handoffs. If something isn&apos;t working, you&apos;ll hear it from the
            person who built it, and I&apos;ll be the one fixing it.
          </p>
          <p>
            The commission structure isn&apos;t a gimmick — it&apos;s the whole point.
            If your phone doesn&apos;t ring, I don&apos;t get paid what I&apos;m
            supposed to either. That&apos;s what &ldquo;{site.tagline}&rdquo; actually
            means here: not a slogan, but the way the business is built.
          </p>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Let&apos;s talk about your business
            </h2>
            <p className="mt-2 max-w-lg text-muted">
              No pitch, no pressure — just a conversation about where things stand and
              whether Delta Solutions is the right fit.
            </p>
          </div>
          <Button href="/contact">Book a Call</Button>
        </Container>
      </section>
    </>
  );
}
