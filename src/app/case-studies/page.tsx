import type { Metadata } from "next";
import { site } from "@/data/site";
import { CaseStudiesContent } from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Results",
  description: `Real before-and-after results from businesses Delta Solutions works with in ${site.city}.`,
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
