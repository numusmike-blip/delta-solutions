export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  tierNote?: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "delta-base",
    name: "Delta Base",
    shortName: "Base",
    tagline: "The foundation every business needs online.",
    description:
      "Your website, hosting, Google Business Profile, and the tracking that tells you what's actually working — all built and managed under an account you own.",
    features: [
      "Website built and hosted",
      "Google Business Profile management",
      "GA4 + Search Console tracking",
      "Call tracking & recording available as an add-on",
    ],
    metaDescription:
      "Website build, hosting, and Google Business Profile management for Tijuana businesses — the foundation of every Delta Solutions partnership.",
  },
  {
    slug: "delta-radar",
    name: "Delta Radar",
    shortName: "Radar",
    tagline: "SEO and market intelligence, translated into next steps.",
    description:
      "A monthly report on where you rank, what your competitors are doing, and where the real opportunity is — with specific recommendations, not just numbers.",
    features: [
      "Monthly ranking report",
      "Competitor tracking",
      "Opportunity analysis",
      "Missed-call and conversion pattern insights",
    ],
    metaDescription:
      "Monthly SEO and competitive intelligence reports for Tijuana businesses — know where you rank and what to do about it.",
  },
  {
    slug: "delta-social",
    name: "Delta Social",
    shortName: "Social",
    tagline: "Facebook and Instagram, actually managed.",
    description:
      "Consistent content that sounds like your business, not a template — posted on a schedule that matches your tier, from stories to full daily posting.",
    features: [
      "Facebook & Instagram content management",
      "Posting cadence scaled to your tier",
      "Stories included at the Partner tier",
    ],
    metaDescription:
      "Facebook and Instagram management for Tijuana businesses — consistent, on-brand social content without hiring in-house.",
  },
  {
    slug: "delta-studio",
    name: "Delta Studio",
    shortName: "Studio",
    tagline: "The design work that makes everything else look sharp.",
    description:
      "Posters, flyers, business cards, and branded assets — the everyday design requests that shouldn't need a separate freelancer.",
    features: [
      "Posters & flyers",
      "Business cards",
      "Basic branded assets",
      "Unlimited basic requests at the Partner tier",
    ],
    metaDescription:
      "Posters, flyers, business cards, and branded design assets for Tijuana businesses, included as part of your Delta Solutions plan.",
  },
  {
    slug: "delta-ads",
    name: "Delta Ads",
    shortName: "Ads",
    tagline: "Paid search, once your foundation earns it.",
    description:
      "We recommend building your organic foundation for 90 days before turning on paid ads, so your money isn't wasted on an unproven funnel. Once you're ready, we manage Google Ads and Local Services Ads directly.",
    features: [
      "Google Ads management",
      "Local Services Ads management",
      "Introduced after your first 90 days",
    ],
    metaDescription:
      "Google Ads and Local Services Ads management for Tijuana businesses — introduced once your organic foundation is proven.",
  },
  {
    slug: "delta-labs",
    name: "Delta Labs",
    shortName: "Labs",
    tagline: "Custom-built software for what off-the-shelf can't do.",
    description:
      "CRMs, booking tools, internal dashboards, and business-specific applications — scoped and priced after a conversation, not sold as a package.",
    features: [
      "Custom CRMs",
      "Booking & scheduling tools",
      "Internal dashboards",
      "Business-specific applications",
    ],
    tierNote: "Tier 4 — Let's Talk. Project-based pricing.",
    metaDescription:
      "Custom CRMs, booking systems, and internal tools built for Tijuana businesses by Delta Solutions — project-based, scoped to what you need.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
