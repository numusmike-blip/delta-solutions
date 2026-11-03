import { pageMetadata } from "@/lib/i18n";
import { meta } from "@/data/meta";
import { HomeContent } from "@/views/HomeContent";

export const metadata = pageMetadata("en", "/", meta.home);

export default function Page() {
  return <HomeContent />;
}
