import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import { Zap, ShieldCheck, Bug, Home } from "lucide-react";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

const Index = () => {
  const primaryKeyword = "Tick Control Service Brooksville FL";
  const firmName = "Brooksville Tick Control Pros";
  const phoneNumber = "(323) 880-1224";
  const businessCords = { lat: 28.5553, lng: -82.3879 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} {phoneNumber} | {firmName}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Call ${phoneNumber}. Expert yard treatment and tick elimination in Brooksville, FL. Protect your family and pets from tick-borne diseases.`} />
        <meta name="keywords" content="tick control service brooksville fl, yard tick treatment, tick exterminator brooksville, flea and tick control hernando county" />
        <link rel="canonical" href="https://tickcontrolservicebrooksvillefl.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content={`${primaryKeyword} | ${firmName}`} />
        <meta property="og:description" content="Brooksville's leading tick control specialists. Advanced yard treatments and barrier protection for your home and family." />
        <meta property="og:url" content="https://tickcontrolservicebrooksvillefl.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://tickcontrolservicebrooksvillefl.vercel.app/2.jpeg",
            "@id": "https://tickcontrolservicebrooksvillefl.vercel.app/",
            "url": "https://tickcontrolservicebrooksvillefl.vercel.app/",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Brooksville",
              "addressLocality": "Brooksville",
              "addressRegion": "FL",
              "postalCode": "34601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": businessCords.lat,
              "longitude": businessCords.lng
            },
            "areaServed": "Brooksville, FL",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tick Control Service",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": {
              "@type": "City",
              "name": "Brooksville"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Yard Treatment Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tick Barrier Protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Flea and Tick Yard Spray"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={<><span className="text-indigo-600">{primaryKeyword}</span></>}
          subtitle="Brooksville's premier tick control specialists. We provide eco-friendly yard treatments and advanced barrier protection to keep your property safe. Available 24/7 for immediate technical dispatch."
          badge="BROOKSVILLE TICK PROS"
          phone="3238801224"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: ShieldCheck, text: "Tick-Free Guarantee" },
            { icon: Bug, text: "Advanced Yard Barricade" },
            { icon: Home, text: "Family & Pet Safe" }
          ]}
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4 text-nowrap">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Professional Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://emergencywaspremovalbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Emergency Wasp Removal Brooksville</a>
              <a href="https://notenttermitetreatmentbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">No Tent Termite Treatment Brooksville</a>
              <a href="https://plumberstoneoak.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Plumber Stone Oak</a>
              <a href="https://polybutylenepipereplacementboonton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Polybutylene Pipe Replacement Boonton</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
