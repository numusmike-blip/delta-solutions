import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { AboutContent } from "@/views/AboutContent";

export const metadata = pageMetadata("es", "/about", meta.about);

export default function Page() {
  return <AboutContent />;
}
