import type { Metadata } from "next";
import { site } from "@/data/site";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: `About ${site.founder}`,
  description: `Why Delta Solutions is built as a teammate, not a vendor. The story behind founder ${site.founder} and Delta Solutions in ${site.city}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
