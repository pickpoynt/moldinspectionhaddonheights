import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { ShieldCheck, Bug, Home, Zap } from "lucide-react";

const Index = () => {
  const primaryKeyword = "Mold Inspection Haddon Heights";
  const firmName = "Haddon Heights Mold Inspection Pros";
  const phoneNumber = "(380) 266-0944";
  const rawPhone = "3802660944";
  const zipCodes = "08035, 08108, 08107, 08033, 08034, 08002, 08003, 08004, 08007, 08009";
  const businessCords = { lat: 39.8568, lng: -75.0621 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber} | {zipCodes}</title>
        <meta
          name="description"
          content={`Expert ${primaryKeyword} specialists in Haddon Heights, NJ. Certified mold inspectors providing comprehensive air quality testing, moisture mapping, and mold remediation verification. Serving Camden County areas including ${zipCodes}. Call ${phoneNumber} for professional mold inspection services.`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://moldinspectionhaddonheights.vercel.app/2.jpeg",
              "@id": "https://moldinspectionhaddonheights.vercel.app/",
              "url": "https://moldinspectionhaddonheights.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "456 Kings Hwy East",
                "addressLocality": "Haddon Heights",
                "addressRegion": "NJ",
                "postalCode": "08035",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": ${businessCords.lat},
                "longitude": ${businessCords.lng}
              },
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
              },
              "sameAs": [
                "https://moldinspectionhaddonheights.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mold Inspection & Testing Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Haddon Heights, NJ"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Professional Mold Inspection & Air Quality Testing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Mold Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Mold Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Air Quality Testing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Post-Remediation Verification"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <Header />
      <Hero
        title={
          <span>
            Mold Inspection
            <br />
            <span className="text-amber-400">Haddon Heights NJ</span>
          </span>
        }
        subtitle={`Professional mold inspection in Haddon Heights homes and businesses using advanced air quality testing and moisture detection equipment. Our certified inspectors identify hidden mold growth, conduct comprehensive air sampling, and provide detailed remediation protocols. Serving Haddon Heights neighborhoods and Camden County communities. Call ${phoneNumber} now to speak with a local mold inspection specialist.`}
        badge="HADDON HEIGHTS MOLD INSPECTION PROS"
        phone={rawPhone}
        image="/2.jpeg"
        overlayImage="/4.jpeg"
      />

      {/* Mold Inspection Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  Certified <span className="text-indigo-600">Mold Inspection Services</span> For Your Home
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our Haddon Heights mold inspectors use advanced air quality testing equipment, moisture meters, and thermal imaging to detect hidden mold growth behind walls, under floors, and in hard-to-reach areas—without unnecessary destruction.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From suspicious odors that won't go away to visible mold after water damage, our team delivers comprehensive mold assessments and clear remediation protocols for Haddon Heights homeowners.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Comprehensive air quality testing and surface sampling for mold spores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Moisture mapping to identify water intrusion sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Detailed inspection reports with remediation specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Post-remediation verification testing to ensure successful cleanup</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/1.jpeg"
                  alt="Professional mold inspection service in Haddon Heights NJ"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">CERTIFIED MOLD INSPECTORS</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img
                  src="/3.jpeg"
                  alt="Air quality testing and mold detection in Haddon Heights"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  Why Haddon Heights Chooses <span className="text-indigo-600">Our Mold Inspectors</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience in Haddon Heights and Camden County, our certified mold inspectors have identified thousands of hidden mold situations and helped homeowners develop effective remediation plans.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just test for mold—we identify the moisture source causing the problem, document everything with detailed reports, and provide specifications that remediation contractors can follow precisely.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Advanced Testing Technology</h3>
                    <p className="text-slate-600 text-sm">
                      We use spore trap air sampling, moisture meters, thermal cameras, and borescopes to find hidden mold without destructive exploration.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Health Protection Focus</h3>
                    <p className="text-slate-600 text-sm">
                      Our thorough inspections help protect your family from mold exposure and identify conditions that could lead to future growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Common <span className="text-indigo-600">Mold Growth Causes & Signs</span>
              </h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Mold growth usually starts small and hidden, but the health effects can be serious. Here are some of the most common situations we see in
                Haddon Heights homes:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Water Leaks & Moisture Intrusion</h3>
                <p className="text-slate-600 mb-4">
                  Plumbing leaks, roof leaks, and basement flooding create ideal conditions for mold growth within 24-48 hours. New Jersey humidity makes rapid colonization common.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: Musty odors, water stains, peeling paint, warped surfaces, condensation on windows
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Poor Ventilation & High Humidity</h3>
                <p className="text-slate-600 mb-4">
                  Inadequate airflow in bathrooms, kitchens, and attics traps moisture and allows mold spores to settle and grow on organic materials.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: Condensation, foggy windows, damp feeling, allergic reactions, visible growth in corners
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Previous Water Damage & Flooding</h3>
                <p className="text-slate-600 mb-4">
                  Past flooding events and unresolved water damage leave residual moisture in walls, flooring, and structural elements where mold thrives.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: Staining, soft drywall, buckling floors, persistent odors, recurring health symptoms at home
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img
                src="/4.jpeg"
                alt="Professional mold inspection and air quality testing equipment in Haddon Heights"
                className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our Haddon Heights mold inspection team serves homeowners across Camden County and southern New Jersey. No matter where you are in our
              service area, we work to provide fast, clear answers and comprehensive air quality solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Haddon Heights", "Audubon", "Collingswood", "Haddonfield", "Mount Ephraim", "Oaklyn", "Westmont", "Barrington"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving Haddon Heights and surrounding communities in zip codes 08035, 08108, 08107, 08033, 08034, 08002, 08003, 08004, 08007, 08009.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Certified Mold Inspectors</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Advanced Air Quality Testing</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Local Haddon Heights Service</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Mold Inspection Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Mold Inspection &amp; Testing <span className="text-indigo-600">Questions Answered</span>
              </h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about mold inspection costs, testing procedures, remediation, and health concerns in Haddon Heights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does it cost to run a mold test?", a: "Professional mold testing typically costs $300-$600 depending on the number of air samples, surface samples, and the size of your property." },
                { q: "What kills 100% of mold?", a: "Professional remediation using HEPA filtration, antimicrobial treatments, and proper containment can eliminate 99.9% of mold when done correctly." },
                { q: "What's the average cost to remove mold?", a: "Mold remediation averages $1,500-$5,000 for typical residential projects, with extensive contamination reaching $10,000+." },
                { q: "What are the 10 warning signs of mold toxicity?", a: "Persistent coughing, headaches, fatigue, skin rashes, watery eyes, nasal congestion, wheezing, difficulty concentrating, sinus infections, and sensitivity to light." },
                { q: "Can I test for black mold myself?", a: "DIY test kits exist but often lack accuracy. Professional inspectors use calibrated equipment and certified labs for reliable results." },
                { q: "What removes mold instantly?", a: "Professional-grade biocides and antimicrobial solutions work quickly, but complete removal requires addressing the moisture source and proper containment." },
                { q: "Can air purifiers help with mold?", a: "HEPA air purifiers can capture airborne mold spores and improve air quality, but they don't eliminate the source of mold growth." },
                { q: "What plant removes 78% of airborne mold?", a: "English ivy has been shown in NASA studies to significantly reduce airborne mold particles, though it's not a substitute for proper remediation." },
                { q: "Can a house with mold be saved?", a: "Yes—most homes can be successfully remediated when mold is identified early and the moisture source is corrected." },
                { q: "Is professional mold removal worth it?", a: "Absolutely—professionals have the equipment, expertise, and safety protocols to completely remove mold and prevent recurrence." },
                { q: "What to do if you can't afford mold remediation?", a: "Small areas (under 10 sq ft) can sometimes be DIY-cleaned. For larger issues, look into payment plans or home improvement loans." },
                { q: "How to pass a mold inspection?", a: "Fix all moisture sources, ensure proper ventilation, clean visible mold, maintain humidity below 60%, and consider pre-inspection testing." },
                { q: "What are the signs of hidden mold?", a: "Musty odors, unexplained allergic reactions, water stains, peeling paint, condensation on windows, and warping surfaces indicate hidden mold." },
                { q: "What does mold sickness feel like?", a: "Symptoms vary but often include respiratory issues, headaches, fatigue, skin irritation, cognitive problems, and flu-like symptoms that improve when away from the affected building." },
                { q: "Can you safely live in a house with mold?", a: "Living with significant mold growth is not recommended, especially for those with respiratory conditions, allergies, or compromised immune systems." },
                { q: "Can I remove black mold myself?", a: "Small patches (under 10 sq ft) may be DIY-safe with proper PPE. Larger infestations require professional remediation for safety." },
                { q: "What kills 100% of black mold?", a: "Professional remediation with industrial HEPA filtration, antimicrobial treatments, and removal of contaminated materials achieves near-complete elimination." },
                { q: "What is the biggest red flag in a home inspection?", a: "Extensive mold growth, especially black mold, combined with structural damage and unresolved moisture issues." },
                { q: "Will insurance pay for a mold test?", a: "Some policies cover mold testing if it's part of a covered claim. Standalone testing is typically out-of-pocket." },
                { q: "What kills mold permanently?", a: "Removing the moisture source is key. Professional remediation plus humidity control prevents regrowth permanently." },
                { q: "Can a house with mold be fixed?", a: "Yes—with proper identification, remediation by professionals, and moisture control, virtually any mold problem can be resolved." },
                { q: "Can mold grow back after remediation?", a: "Mold can return if moisture sources aren't addressed. Proper remediation includes fixing leaks and controlling humidity." },
                { q: "What kills mold spores best?", a: "HEPA filtration removes spores from air, while professional-grade biocides and UV-C light can kill spores on surfaces." },
                { q: "How do I know if I have a mold problem?", a: "Look for visible growth, musty odors, water damage, condensation issues, and unexplained health symptoms among occupants." },
                { q: "What pulls mold out of the air?", a: "HEPA air purifiers, proper ventilation, dehumidifiers, and activated carbon filters can reduce airborne mold spores." },
                { q: "What not to use when cleaning mold?", a: "Avoid bleach on porous materials, mixing chemicals, or dry brushing which spreads spores. Never use ozone generators in occupied spaces." },
                { q: "What are the first signs of mold sickness?", a: "Early symptoms include nasal congestion, coughing, eye irritation, skin rashes, and worsening asthma or allergy symptoms." },
                { q: "What temperature kills mold?", a: "Temperatures above 140°F (60°C) can kill mold, but heat treatment alone isn't sufficient—moisture control is essential." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Network Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tight">Regional <span className="text-indigo-600">Service Network</span></h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { name: "Mold Remediation Eau Claire WI", url: "https://moldremediationeauclairewi.vercel.app/" },
                { name: "Toxic Black Mold Cleanup Gulf Breeze", url: "https://toxicblackmoldcleanupgulfbreeze.vercel.app/" },
                { name: "Burst Pipe Repair Swarthmore", url: "https://burstpiperepairswarthmore.vercel.app/" },
                { name: "Slab Leak Repair Swarthmore", url: "https://slableakrepairswarthmore.vercel.app/" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="px-6 py-3 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest border border-slate-100 shadow-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="mt-12 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Professional Mold Inspection Services in Haddon Heights, NJ 08035
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
      
      {/* Disclaimer Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
              This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this
              site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor
              furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are
              actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </section>
      
      <FloatingCallButton phone={rawPhone} />
    </div>
  );
};

export default Index;
