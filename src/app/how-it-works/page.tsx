import type { Metadata } from "next";
import { site } from "@/data/site";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description: `The onboarding process for a new Delta Solutions partnership in ${site.city}, from account setup to growth phase.`,
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
