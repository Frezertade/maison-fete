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
import { BUSINESS_ID, SITE_URL } from "@/lib/seo";
import { servicePages } from "@/lib/service-pages";
import { towns } from "@/lib/towns";

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
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": BUSINESS_ID,
            name: site.name,
            description: site.description,
            url: SITE_URL,
            logo: `${SITE_URL}/icon.svg`,
            image: `${SITE_URL}/images/hero-wedding.jpg`,
            // Service-area business with no storefront: service area only,
            // no street address, phone, ratings or reviews.
            areaServed: [
              { "@type": "AdministrativeArea", name: "Lancaster County, PA" },
              ...towns.map((t) => ({
                "@type": "City",
                name: `${t.name.replace(" (city)", "")}, PA`,
              })),
            ],
            knowsAbout: [
              "Graduation party decorations",
              "Wedding decor",
              "Baby shower decorations",
              "Birthday party decorations",
              "Church event decorations",
              "Quinceañera and sweet 16 decorations",
              "Balloon arches and garlands",
              "Holiday party decorations",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Event decorating services",
              itemListElement: servicePages.map((p) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: p.name,
                  url: `${SITE_URL}${p.path}`,
                  provider: { "@id": BUSINESS_ID },
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}
