import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: `What We Bring to the Table`,
  description:
    "Websites, Google presence, SEO, social, design, ads, and custom builds for the businesses we work with. Each piece of Delta Solutions, explained.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
