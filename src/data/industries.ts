export type Industry = {
  slug: string;
  name: string;
  tierId: "delta-base" | "delta-growth" | "delta-partner";
  blurb: string;
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "auto-body-shops",
    name: "Auto Body Shops",
    tierId: "delta-growth",
    blurb:
      "Tijuana has no shortage of body shops — most of them findable only if a customer already knows the name. We build a Google presence that catches the after-the-fender-bender search, track every call that comes from it, and keep your socials showing finished work.",
    relatedServices: ["delta-base", "delta-radar", "delta-social", "delta-studio"],
  },
  {
    slug: "dentists",
    name: "Dentists",
    tierId: "delta-growth",
    blurb:
      "New-patient searches in Tijuana happen on Google before they happen anywhere else. We keep your Business Profile, reviews, and site working together so the next search for a dentist near you ends at your office.",
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "chiropractors",
    name: "Chiropractors",
    tierId: "delta-growth",
    blurb:
      "Pain doesn't wait for a referral — most people search first. We make sure that search finds you, and we track which calls actually book, so you know the marketing is doing its job.",
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    tierId: "delta-growth",
    blurb:
      "Emergency calls go to whoever shows up first in the search results. We build and maintain the local presence that puts you there, and we track call volume against your staffing so you're never guessing at demand.",
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "hvac-companies",
    name: "HVAC Companies",
    tierId: "delta-growth",
    blurb:
      "Seasonal demand swings hard in Tijuana. We track call patterns by time and day so you can see the swings coming, and keep your Google presence sharp year-round, not just when it's busy.",
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "auto-glass-tow-companies",
    name: "Auto Glass & Tow Companies",
    tierId: "delta-base",
    blurb:
      "These are urgent, high-intent searches — someone needs you right now. We make sure your Business Profile and site are built to convert that urgency into a call, and track that every one of those calls actually connects.",
    relatedServices: ["delta-base", "delta-radar"],
  },
  {
    slug: "med-spas-aesthetics",
    name: "Med Spas & Aesthetics Clinics",
    tierId: "delta-growth",
    blurb:
      "A strong Instagram presence and a site that photographs well matter as much as the treatment menu. We manage both, plus the review system that builds trust before a first visit.",
    relatedServices: ["delta-base", "delta-social", "delta-studio", "delta-radar"],
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    tierId: "delta-partner",
    blurb:
      "Trust is the entire sale. We build a site and Google presence that reads as credible from the first click, track which calls are real leads, and keep your firm visible against competitors who are also bidding for the same search.",
    relatedServices: ["delta-base", "delta-radar", "delta-social"],
  },
  {
    slug: "dental-groups-orthodontists",
    name: "Dental Groups & Orthodontists",
    tierId: "delta-partner",
    blurb:
      "Multi-provider practices need a presence that scales — consistent branding across locations, coordinated social content, and a Radar report that shows which location is actually converting.",
    relatedServices: ["delta-base", "delta-radar", "delta-social", "delta-studio"],
  },
  {
    slug: "real-estate-teams-brokerages",
    name: "Real Estate Teams & Brokerages",
    tierId: "delta-partner",
    blurb:
      "Listings move fast and so does attention. We keep your team's presence current, your social content daily, and your design requests turned around without waiting on a freelancer.",
    relatedServices: ["delta-base", "delta-social", "delta-studio", "delta-radar"],
  },
  {
    slug: "roofing-companies",
    name: "Roofing Companies",
    tierId: "delta-partner",
    blurb:
      "Roofing leads are worth real money, and the competition for them is fierce. We build the local SEO foundation first, then layer in paid ads once it's proven — so you're not paying for clicks a shaky funnel wastes.",
    relatedServices: ["delta-base", "delta-radar", "delta-ads"],
  },
  {
    slug: "veterinary-clinics",
    name: "Veterinary Clinics",
    tierId: "delta-partner",
    blurb:
      "Pet owners search locally and urgently. We keep your clinic visible for both routine and emergency searches, and manage the social content that builds trust with a community of regulars.",
    relatedServices: ["delta-base", "delta-social", "delta-radar"],
  },
  {
    slug: "artists-creators",
    name: "Artists & Creators",
    tierId: "delta-base",
    blurb:
      "A clean, fast site and a Google presence that's actually findable — without paying agency rates built for bigger businesses. That's the whole idea behind Delta Base.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "real-estate-agents",
    name: "Real Estate Agents",
    tierId: "delta-base",
    blurb:
      "Early in your business, you need a professional presence more than a full marketing team. Delta Base gets your site, Google profile, and tracking in place so you can grow into the next tier when you're ready.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "freelancers-consultants",
    name: "Freelancers & Consultants",
    tierId: "delta-base",
    blurb:
      "You don't need a marketing department — you need a site that looks credible and a Google presence that shows up when someone searches for exactly what you do.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "small-retail-shops",
    name: "Small Retail Shops",
    tierId: "delta-base",
    blurb:
      "Foot traffic starts online more often than not. We make sure your shop is findable, your hours and location are accurate everywhere, and your basics are tracked from day one.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "photographers",
    name: "Photographers",
    tierId: "delta-base",
    blurb:
      "Your portfolio is the pitch. We build the site that shows it off properly and the Google presence that gets you found by people searching for a photographer in Tijuana.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "personal-trainers",
    name: "Personal Trainers",
    tierId: "delta-base",
    blurb:
      "Most personal training business comes from proximity and trust. We get you visible in local search and give you the analytics to see what's actually bringing in inquiries.",
    relatedServices: ["delta-base"],
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    tierId: "delta-base",
    blurb:
      "Seasonal, local, and often word-of-mouth — but the first check is still Google. We make sure you're there, with a site and profile that make a good first impression.",
    relatedServices: ["delta-base"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
