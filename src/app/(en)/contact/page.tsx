import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { ContactContent } from "@/views/ContactContent";

export const metadata = pageMetadata("en", "/contact", meta.contact);

export default function Page() {
  return <ContactContent />;
}
