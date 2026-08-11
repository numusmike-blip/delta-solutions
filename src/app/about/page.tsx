import type { Metadata } from "next";
import { site } from "@/data/site";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: `About ${site.founder}`,
  description: `Why Delta Solutions is built as a teammate, not a vendor. The story behind ${site.founder}, your main point of contact, and the team behind Delta Solutions.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
