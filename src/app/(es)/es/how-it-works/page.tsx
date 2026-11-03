import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { HowItWorksContent } from "@/views/HowItWorksContent";

export const metadata = pageMetadata("es", "/how-it-works", meta.howItWorks);

export default function Page() {
  return <HowItWorksContent />;
}
