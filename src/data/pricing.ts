export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  bestFor: string[];
  commissionNote: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "delta-base",
    name: "Delta Base",
    price: "$100",
    priceNote: "/mo",
    description: "The essentials — website, hosting, Google presence, and real tracking.",
    features: [
      "Website built + hosted",
      "Google Business Profile management",
      "GA4 + Search Console tracking",
      "Call tracking & recording — add-on, +$50/mo",
    ],
    bestFor: [
      "Artists & creators",
      "Early-stage real estate agents",
      "Freelancers & consultants",
      "Small retail shops",
      "Photographers",
      "Personal trainers",
      "Landscapers",
    ],
    commissionNote: "$5–20 per qualified call over 60 seconds",
  },
  {
    id: "delta-growth",
    name: "Delta Growth",
    price: "$300",
    priceNote: "/mo",
    description: "Everything in Base, plus the systems that turn visibility into calls.",
    features: [
      "Everything in Delta Base",
      "Call tracking & recording included",
      "Delta Radar monthly report",
      "Delta Social — 2–3 posts/week",
      "Delta Studio — 1 design asset/month",
      "Review generation system",
    ],
    bestFor: [
      "Auto body shops",
      "Dentists",
      "Chiropractors",
      "Plumbers",
      "HVAC companies",
      "Auto glass & tow companies",
      "Med spas & aesthetics clinics",
    ],
    commissionNote: "$5–20 per qualified call over 60 seconds",
    highlighted: true,
  },
  {
    id: "delta-partner",
    name: "Delta Partner",
    price: "$500",
    priceNote: "/mo",
    description: "Full attention — priority response, daily presence, unlimited design.",
    features: [
      "Everything in Delta Growth",
      "Delta Radar + monthly strategy call",
      "Delta Social — daily posting + stories",
      "Delta Studio — unlimited basic design requests",
      "Priority response time",
    ],
    bestFor: [
      "Multi-location auto body groups",
      "Law firms",
      "Dental groups",
      "Orthodontists",
      "Real estate teams & brokerages",
      "Roofing companies",
      "Veterinary clinics",
    ],
    commissionNote: "$5–20 per qualified call over 60 seconds",
  },
];

export const deltaLabs = {
  name: "Delta Labs",
  tierLabel: "Tier 4 — Let's Talk",
  description:
    "Custom CRMs, booking systems, internal dashboards, and business-specific applications. Project-based pricing, scoped after a conversation — not a package.",
  cta: "Have something specific in mind? Let's talk about what you need built.",
};

export type CommissionRow = {
  vertical: string;
  amount: number;
};

export const commissionChart: CommissionRow[] = [
  { vertical: "Landscapers / personal trainers", amount: 5 },
  { vertical: "Auto glass / tow companies", amount: 8 },
  { vertical: "Plumbers / HVAC", amount: 10 },
  { vertical: "Chiropractors / dentists (general)", amount: 10 },
  { vertical: "Med spas / aesthetics", amount: 12 },
  { vertical: "Auto body shops", amount: 15 },
  { vertical: "Dental groups / orthodontists", amount: 18 },
  { vertical: "Roofing", amount: 20 },
  { vertical: "Law firms", amount: 20 },
  { vertical: "Real estate teams", amount: 20 },
];

export const commissionExplainer =
  "Commission reflects what a call is actually worth to your business — a flat rate doesn't make sense across every industry. Your exact rate is confirmed at onboarding.";

export const noLockInMessage =
  "Truly month to month. Recommended: stay through month 3 to get a full organic traffic report — but nothing locks you in. You could leave day one and keep everything we built.";
