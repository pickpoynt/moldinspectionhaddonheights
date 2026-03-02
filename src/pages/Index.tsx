import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Droplets, Thermometer, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>tankless water heater flush Glencoe IL (877) 792-1410 | Glencoe Tankless Water Heater Pros</title>
        <meta name="description" content="Professional tankless water heater flush Glencoe IL. Call (877) 792-1410. Expert descaling, sediment removal & maintenance for Glencoe IL homes. Free estimates available." />
        <meta name="keywords" content="tankless water heater flush Glencoe IL, tankless water heater descaling Glencoe, Glencoe IL water heater maintenance, flush tankless heater Glencoe, water heater service Glencoe Illinois" />
        <link rel="canonical" href="https://tanklesswaterheaterflushglencoeil.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Glencoe Tankless Water Heater Pros",
            "image": "/2.jpeg",
            "@id": "https://tanklesswaterheaterflushglencoeil.vercel.app/",
            "url": "https://tanklesswaterheaterflushglencoeil.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Glencoe, IL",
              "addressLocality": "Glencoe",
              "addressRegion": "IL",
              "postalCode": "60022",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.1350",
              "longitude": "-87.7578"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tankless Water Heater Flush and Maintenance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Glencoe Tankless Water Heater Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Glencoe, IL"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tankless Water Heater Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Tankless Water Heater Flush" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Descaling and Sediment Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "System Diagnostics and Efficiency Optimization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Tankless Heater Service" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="tankless water heater flush Glencoe IL (877) 792-1410 | Glencoe Tankless Water Heater Pros" />
        <meta property="og:description" content="Expert tankless water heater flush in Glencoe, IL. Professional descaling & maintenance. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanklesswaterheaterflushglencoeil.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              TANKLESS WATER HEATER <br />
              <span className="text-white drop-shadow-sm uppercase text-nowrap">FLUSH IN GLENCOE IL</span>
            </>
          }
          subtitle="Glencoe's premier specialists in tankless water heater flushing, descaling, and maintenance. We use professional-grade equipment to remove mineral buildup and sediment from your Glencoe IL tankless system, restoring efficiency and extending the life of your investment. Same-day service available."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="GLENCOE IL TANKLESS HEATER PROS"
          phone="8777921410"
          features={[
            { icon: Droplets, text: "Full Flush & Descale" },
            { icon: Thermometer, text: "Efficiency Restore" },
            { icon: ShieldCheck, text: "24/7 Glencoe Service" }
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
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Leaking Pipe Repair Modesto</a>
              <a href="https://plumbermontellowi.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Plumber Montello WI</a>
              <a href="https://waterheaterrepairbeaverton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Water Heater Repair Beaverton</a>
              <a href="https://castironpipereplacementboonton.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Cast Iron Pipe Replacement Boonton</a>
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
