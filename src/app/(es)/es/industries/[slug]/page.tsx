import { IndustryPage, industryMetadata, industryStaticParams } from "@/views/routes";

type Props = { params: Promise<{ slug: string }> };

export const generateStaticParams = industryStaticParams;
export const generateMetadata = (props: Props) => industryMetadata("es", props);

export default function Page(props: Props) {
  return <IndustryPage {...props} />;
}
