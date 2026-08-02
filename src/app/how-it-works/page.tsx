import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "How It Works",
  description: `The onboarding process for a new Delta Solutions partnership in ${site.city} — from account setup to growth phase.`,
};

const steps = [
  {
    step: "01",
    title: "Dedicated email setup",
    body: "We start with an email address — either one you already use for the business, or a dedicated one we set up together, like marketing@yourbusiness.com. Every account we ever build lives under this address.",
  },
  {
    step: "02",
    title: "Accounts created under your ownership",
    body: "Website, Google Business Profile, GA4, Search Console — all created fresh under that email. Nothing gets built under our accounts and handed to you later. It's yours from the first click.",
  },
  {
    step: "03",
    title: "Delta Base goes live",
    body: "Your website is built and hosted, your Google presence is claimed and optimized, and tracking is wired up so every call and visit is measurable from day one.",
  },
  {
    step: "04",
    title: "Delta Radar baseline",
    body: "Before we tell you what's working, we establish where you actually stand — rankings, competitors, and the gaps worth closing first.",
  },
  {
    step: "05",
    title: "Growth phase",
    body: "Depending on your plan, this is where Delta Social, Delta Studio, and monthly Radar reports kick in — consistent, compounding work instead of one-off pushes.",
  },
  {
    step: "06",
    title: "Delta Ads, once it's earned",
    body: "After roughly 90 days of organic groundwork, we introduce paid search if it makes sense for your business — so ad spend is working with a proven funnel, not a guess.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            How it works
          </h1>
          <p className="mt-5 text-lg text-white/70">
            No black box. Here&apos;s exactly what happens from the first conversation
            to an active, growing presence.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <ol className="space-y-10">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-6">
                <span className="font-display text-2xl font-semibold text-amber-500">
                  {s.step}
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-navy-900">
                    {s.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-muted py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-navy-900">
            A quiet policy note
          </h2>
          <p className="mt-3 text-muted">
            We&apos;re selective about who we work with in the same industry and area,
            so our attention never gets split between businesses competing for the same
            customer. If we&apos;re already working with a business like yours nearby,
            we&apos;ll tell you upfront — no surprises either way.
          </p>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to start with step one?
            </h2>
            <p className="mt-2 max-w-lg text-white/70">
              Book a call and we&apos;ll figure out together where your business fits.
            </p>
          </div>
          <Button href="/contact">Book a Call</Button>
        </Container>
      </section>
    </>
  );
}
