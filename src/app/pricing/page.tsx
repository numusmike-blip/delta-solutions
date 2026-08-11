import type { Metadata } from "next";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Delta Base, Delta Growth, and Delta Partner plans. Transparent pricing plus commission, month to month, no lock-in.",
};

export default function PricingPage() {
  return <PricingContent />;
}
