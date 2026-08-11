import type { Metadata } from "next";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real before-and-after results from businesses Delta Solutions works with.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
