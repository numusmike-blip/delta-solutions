export type CaseStudy = {
  slug: string;
  business: string;
  industry: string;
  summary: string;
  metrics: { label: string; before: string; after: string }[];
  quote?: { text: string; attribution: string };
};

// Empty until the first partner results are ready to publish.
// Add entries here — the Results page renders automatically from this list.
export const caseStudies: CaseStudy[] = [];
