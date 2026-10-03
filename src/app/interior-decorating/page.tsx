import ServicePageView from "@/components/page/ServicePageView";
import { pageMetadata } from "@/lib/seo";
import { servicePageByPath } from "@/lib/service-pages";

const page = servicePageByPath["/interior-decorating"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  image: page.image,
  imageAlt: page.imageAlt,
});

export default function Page() {
  return <ServicePageView page={page} />;
}
