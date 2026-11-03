import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { ServicesContent } from "@/views/ServicesContent";

export const metadata = pageMetadata("es", "/services", meta.services);

export default function Page() {
  return <ServicesContent />;
}
