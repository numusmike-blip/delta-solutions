import { ServicePage, serviceMetadata, serviceStaticParams } from "@/views/routes";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = serviceStaticParams;
export const generateMetadata = (props: Props) => serviceMetadata("en", props);

export default function Page(props: Props) {
  return <ServicePage lang="en" {...props} />;
}
