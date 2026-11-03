import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { FaqPage } from "@/views/routes";

export const metadata = pageMetadata("en", "/faq", meta.faq);

export default function Page() {
  return <FaqPage lang="en" />;
}
