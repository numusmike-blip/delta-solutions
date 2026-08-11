import type { Metadata } from "next";
import { HowItWorksContent } from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The onboarding process for a new Delta Solutions partnership, from account setup to growth phase.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
