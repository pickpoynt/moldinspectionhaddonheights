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
  const primaryKeyword = "Hornet Nest Removal Brooksville FL";
  const firmName = "Brooksville Hornet Removal Pros";
  const phoneNumber = "(323) 880-1224";
  const businessCords = { lat: 28.5553, lng: -82.3879 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} {phoneNumber} | {firmName}</title>
        <meta name="description" content={`Expert ${primaryKeyword}. Call ${phoneNumber} for immediate professional removal. Specialized hornet nest extraction and territory protection in Brooksville, FL.`} />
        <meta name="keywords" content="hornet nest removal brooksville fl, hornet exterminator brooksville, bald-faced hornet removal, stinging insect control" />
        <link rel="canonical" href="https://hornetnestremovalbrooksvillefl.vercel.app/" />

        {/* Open Graph */}
        <meta property="og:title" content={`${primaryKeyword} | ${firmName}`} />
        <meta property="og:description" content="Brooksville's leading hornet removal specialists. Rapid response and terminal nest extraction for your safety." />
        <meta property="og:url" content="https://hornetnestremovalbrooksvillefl.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "https://hornetnestremovalbrooksvillefl.vercel.app/2.jpeg",
            "@id": "https://hornetnestremovalbrooksvillefl.vercel.app/",
            "url": "https://hornetnestremovalbrooksvillefl.vercel.app/",
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
            "serviceType": "Hornet Nest Removal",
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
              "name": "Hornet Removal Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Aerial Nest Removal"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Structural Nest Extraction"
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
          subtitle="Brooksville's leading hornet extraction units. We provide terminal nest removal and high-pressure neutralization for your domestic or commercial property. Available 24/7."
          badge="BROOKSVILLE HORNET PROS"
          phone="3238801224"
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          features={[
            { icon: ShieldCheck, text: "Terminal Removal Guarantee" },
            { icon: Bug, text: "Aerial Nest Specialists" },
            { icon: Home, text: "Full Perimeter Defense" }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8 text-nowrap">
              <a href="https://tickcontrolservicebrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Tick Control Service Brooksville</a>
              <a href="https://emergencywaspremovalbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Emergency Wasp Removal Brooksville</a>
              <a href="https://notenttermitetreatmentbrooksvillefl.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">No Tent Termite Treatment Brooksville</a>
              <a href="https://plumberstoneoak.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline uppercase tracking-tighter">Plumber Stone Oak</a>
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
