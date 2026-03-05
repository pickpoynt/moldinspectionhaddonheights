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
        <title>plumber elkhorn ne (877) 792-1410 | Elkhorn Plumbing Services Pros</title>
        <meta name="description" content="Professional plumber elkhorn ne. Call (877) 792-1410. Expert residential & commercial plumbing services in Elkhorn NE. Free estimates available." />
        <meta name="keywords" content="plumber elkhorn ne, elkhorn plumbing services, local plumbers elkhorn ne, emergency plumber elkhorn, elkhorn plumbing repair" />
        <link rel="canonical" href="https://plumberelkhornne.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elkhorn Plumbing Services Pros",
            "image": "/2.jpeg",
            "@id": "https://plumberelkhornne.vercel.app/",
            "url": "https://plumberelkhornne.vercel.app/",
            "telephone": "(877) 792-1410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Elkhorn, NE",
              "addressLocality": "Elkhorn",
              "addressRegion": "NE",
              "postalCode": "68022",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.2828",
              "longitude": "-96.2418"
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
            "serviceType": "Professional Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Elkhorn Plumbing Services Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Elkhorn, NE"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Repair and Maintenance Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Plumbing Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Plumbing Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Drain Cleaning" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation & Repair" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="plumber elkhorn ne (877) 792-1410 | Elkhorn Plumbing Services Pros" />
        <meta property="og:description" content="Expert plumber in Elkhorn, NE. Professional residential & commercial plumbing services. Call (877) 792-1410!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plumberelkhornne.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              PLUMBER <br />
              <span className="text-white drop-shadow-sm uppercase text-nowrap">ELKHORN NE</span>
            </>
          }
          subtitle="Elkhorn's premier plumbing specialists providing expert residential and commercial services. From emergency repairs to routine maintenance, our local Elkhorn NE team ensures your home's plumbing systems run perfectly 24/7. Trusted by Nebraska families for quality and speed."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="ELKHORN NE PLUMBING PROS"
          phone="8777921410"
          features={[
            { icon: Droplets, text: "All Pipe Repairs" },
            { icon: Thermometer, text: "Water Heater Experts" },
            { icon: ShieldCheck, text: "24/7 Elkhorn Service" }
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
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Rodent Control Corvallis Oregon</a>
              <a href="https://termiteinspectionburbank.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Termite Inspection Burbank</a>
              <a href="https://coyotecontrolmccookne.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors underline">Coyote Control McCook NE</a>
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
