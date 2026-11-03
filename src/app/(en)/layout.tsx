import { RootShell } from "@/components/RootShell";
import { rootMetadata } from "@/views/routes";
import "../globals.css";

export const metadata = rootMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
