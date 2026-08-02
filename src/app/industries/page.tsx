import type { Metadata } from "next";
import { site } from "@/data/site";
import { IndustriesContent } from "./IndustriesContent";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: `From auto body shops to law firms, how Delta Solutions works with different kinds of businesses in ${site.city}.`,
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
