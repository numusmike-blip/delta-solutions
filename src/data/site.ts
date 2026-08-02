// Central, editable business config. Update these values as real details are confirmed.
export const site = {
  name: "Delta Solutions",
  founder: "Miguel Flores",
  tagline: "Your Business, Our Investment",
  manifesto:
    "Delta Solutions isn't an agency. It's a teammate. Most marketing companies bill you whether your phone rings or not — we don't think that's fair, to you or to us. We build your website, manage your Google presence, track every call, and put real skin in the game, because we're partners, not vendors.",
  signatureLine:
    "Built and run by Miguel Flores. No account managers, no outsourced call centers — you work directly with the person invested in your results.",
  city: "Tijuana",
  region: "Baja California",
  country: "Mexico",
  // NAP — keep this identical everywhere it appears, and match it to Google Business Profile once set up.
  phone: "+52 664 000 0000",
  phoneDisplay: "+52 (664) 000-0000",
  email: "hello@deltasolutions.mx",
  address: {
    street: "Address line pending",
    city: "Tijuana",
    region: "Baja California",
    postalCode: "22000",
    country: "MX",
  },
  social: {
    facebook: "https://facebook.com/deltasolutionsmx",
    instagram: "https://instagram.com/deltasolutionsmx",
  },
  // Replace with a real Calendly/Google Calendar booking link when ready.
  bookingUrl: "https://calendly.com/deltasolutionsmx/intro-call",
} as const;

// Founding member spot counter — edit this single number as spots fill up. Not wired to a database on purpose.
export const foundingMembers = {
  totalSpots: 16,
  spotsRemaining: 12,
} as const;
