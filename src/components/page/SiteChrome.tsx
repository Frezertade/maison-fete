import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyCta from "@/components/StickyCta";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </>
  );
}
