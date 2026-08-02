import type { Metadata } from "next";
import { site } from "@/data/site";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: `What We Bring to the Table`,
  description: `Websites, Google presence, SEO, social, design, ads, and custom builds for businesses in ${site.city}. Each piece of Delta Solutions, explained.`,
};

export default function ServicesPage() {
  return <ServicesContent />;
}
