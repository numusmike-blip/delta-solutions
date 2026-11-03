import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { IndustriesContent } from "@/views/IndustriesContent";

export const metadata = pageMetadata("es", "/industries", meta.industries);

export default function Page() {
  return <IndustriesContent />;
}
