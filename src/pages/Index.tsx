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
import { ShieldCheck, Bug, Target, Search, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>centipedes extermination mililani (323) 880-1224 | Mililani Centipede Exterminators</title>
        <meta name="description" content="Professional centipedes extermination mililani. (323) 880-1224. Expert Hawaii pest control, centipede nest removal, and home protection. Free Mililani estimates." />
        <meta name="keywords" content="centipedes extermination mililani, Hawaii centipede control, Mililani pest control centipedes, centipede exterminator Mililani, Hawaii centipede nest removal" />
        <link rel="canonical" href="https://centipedesexterminationmililani.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mililani Centipede Exterminators",
            "image": "/2.jpeg",
            "@id": "https://centipedesexterminationmililani.vercel.app/",
            "url": "https://centipedesexterminationmililani.vercel.app/",
            "telephone": "(323) 880-1224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mililani, HI",
              "addressLocality": "Mililani",
              "addressRegion": "HI",
              "postalCode": "96789",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.4688",
              "longitude": "-158.0001"
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
            "serviceType": "Centipede Extermination and Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Mililani Centipede Exterminators"
            },
            "areaServed": {
              "@type": "City",
              "name": "Mililani, HI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Centipede Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Centipede Nest Eradication" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Perimeter Barrier" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Centipede Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Extermination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="centipedes extermination mililani (323) 880-1224 | Mililani Centipede Exterminators" />
        <meta property="og:description" content="Expert centipede extermination in Mililani, HI. Professional Hawaii pest control solutions. Call (323) 880-1224!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://centipedesexterminationmililani.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              CENTIPEDE EXTERMINATION <br />
              <span className="text-white drop-shadow-sm uppercase text-nowrap">IN MILILANI Hawaii</span>
            </>
          }
          subtitle="Mililani's premier specialists in Hawaii centipede extermination and long-term control. We utilize Hawaii-grade pest barriers to eliminate invasive centipede populations and prevent their return to your Mililani home. Protect your family from painful stings today."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="MILILANI CENTIPEDE EXPERTS"
          phone="3238801224"
          features={[
            { icon: Search, text: "Nest Eradication" },
            { icon: Target, text: "Colony Targeting" },
            { icon: ShieldCheck, text: "24/7 Home Defense" }
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
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Centipede repellent Hawaii</a>
              <a href="https://centipedestreatmentkapolei.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Centipedes Kapolei</a>
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Earwig exterminator Denver</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest control South Point Ohio</a>
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
