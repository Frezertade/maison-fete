import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedVideo from "@/components/FeaturedVideo";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StickyCta from "@/components/StickyCta";
import { site } from "@/lib/content";
import { SITE_URL } from "@/lib/seo";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <FeaturedVideo />
        <Gallery />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: site.name,
            description: site.description,
            url: SITE_URL,
            image: `${SITE_URL}/images/hero-wedding.jpg`,
            areaServed: site.serviceArea.split(" · ").map((c) => ({
              "@type": "City",
              name: `${c}, PA`,
            })),
            knowsAbout: [
              "Interior decorating",
              "Home staging",
              "Holiday decorating",
              "Event decor",
            ],
          }),
        }}
      />
    </>
  );
}
