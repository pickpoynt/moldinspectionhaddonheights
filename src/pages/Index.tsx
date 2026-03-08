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
  const primaryKeyword = "Sewage Backup Cleanup Fairview";
  const firmName = "Fairview Sewage Backup Cleanup Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "15116, 15201, 15202, 15203, 15204, 15205, 15206, 15207, 15208, 15209, 15210, 15211, 15212, 15213, 15214, 15215, 15216, 15217, 15218, 15219, 15220, 15221, 15222, 15223, 15224, 15225, 15226, 15227, 15228, 15229, 15232, 15233, 15234, 15235, 15236, 15237, 15238, 15239, 15241, 15243, 15260";
  const businessCords = { lat: 40.5187, lng: -80.0648 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Expert sewage cleanup technicians providing rapid water extraction, sanitization & deodorization in Fairview and surrounding areas including zip codes ${zipCodes}. Call ${phoneNumber} now for emergency sewage backup services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://sewagebackupcleanupfairview.vercel.app/2.jpeg",
              "@id": "https://sewagebackupcleanupfairview.vercel.app/",
              "url": "https://sewagebackupcleanupfairview.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street Service Center",
                "addressLocality": "Fairview",
                "addressRegion": "PA",
                "postalCode": "16415",
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
                "https://sewagebackupcleanupfairview.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Sewage Backup Cleanup Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Fairview"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Emergency Sewage Backup Cleanup Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Water Extraction"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sewage Contamination Cleanup"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sanitization & Deodorization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Structural Drying & Restoration"
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
        title={<span>Sewage Backup Cleanup <br /><span className="text-amber-400">Fairview</span></span>}
        subtitle={`Professional sewage backup cleanup services for homes and businesses in Fairview. Expert technicians specializing in emergency water extraction, complete sanitization, and permanent odor elimination from basements, crawl spaces, and entire properties. Serving 15116, 15201, 15202, 15203, 15204, 15205, 15206, 15207, 15208, 15209, 15210, 15211, 15212, 15213, 15214, 15215, 15216, 15217, 15218, 15219, 15220, 15221, 15222, 15223, 15224, 15225, 15226, 15227, 15228, 15229, 15232, 15233, 15234, 15235, 15236, 15237, 15238, 15239, 15241, 15243, 15260 and all Allegheny County areas. Call ${phoneNumber} for immediate emergency sewage backup cleanup.`}
        badge="FAIRVIEW SEWAGE BACKUP CLEANUP PROS"
        phone={rawPhone}
      />

      {/* Sewage Backup Cleanup Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Sewage Contamination Cleanup</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional sewage backup cleanup technicians use specialized equipment and techniques to safely remove contaminated water, sanitize affected areas, and restore your property. We understand the urgency and health risks associated with sewage backups.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From basements to crawl spaces, our team has the expertise to handle any sewage backup situation in Fairview and surrounding Allegheny County communities quickly and professionally, ensuring complete sanitization and odor elimination.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete biohazard cleanup using EPA-approved protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Same-day emergency response for severe backups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Industrial-grade deodorization and antimicrobial treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Family and pet-safe sanitization methods</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/1.jpeg" alt="Professional sewage backup cleanup service in Fairview" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Contamination Removal Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency sewage extraction and basement sanitization specialists" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Sewage Cleanup Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Fairview and throughout Allegheny County, our sewage backup specialists have developed proven strategies for eliminating even the most severe contamination and odors from sewage backups.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just remove the water—we sanitize the area thoroughly, apply industrial enzymatic cleaners, and help prevent future damage. Our comprehensive approach ensures your home is safe and odor-free.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Rapid Water Extraction</h3>
                    <p className="text-slate-600 text-sm">We use powerful pumps and extractors to remove sewage water quickly and prevent further damage.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our treatments eliminate health hazards and prevent structural damage from sewage contamination.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Sewage Backup Sources</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Sewage backups can originate from various sources. Here are the most common situations we handle in Fairview:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Basement Floor Drains</h3>
                <p className="text-slate-600 mb-4">Floor drains can backup when the main sewer line is blocked, causing sewage to overflow into basements.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Gurgling sounds, slow drainage, foul odors from drains</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Main Sewer Line Blockages</h3>
                <p className="text-slate-600 mb-4">Tree roots, grease buildup, or collapsed pipes can block the main sewer line and cause backups.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Multiple drain clogs, toilets bubbling, sewage in yard</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Toilet & Fixture Overflows</h3>
                <p className="text-slate-600 mb-4">Sewage can backup through toilets, sinks, and showers when drain lines are obstructed.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Water backing up in fixtures, slow drains, gurgling noises</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Sewage backup cleanup equipment and tools" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency sewage backup cleanup experts provide comprehensive service throughout Fairview and all surrounding Allegheny County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Fairview", "Erie", "McKean", "Girard", "Albion", "North East", "Waterford", "Union City"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving all zip codes: <span className="text-indigo-600 font-black">{zipCodes}</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Sewage Cleanup Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Biohazard-Certified Technicians</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Response</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Sewage Backup Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Sewage Backup <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about sewage backup cleanup, costs, safety protocols, and restoration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does sewage backup cleanup cost?", a: "Professional sewage backup cleanup typically costs between $500-$5,000 depending on severity, affected area size, and extent of contamination." },
                { q: "How do you clean up after a sewage backup?", a: "Professional cleanup involves water extraction, removal of contaminated materials, thorough sanitization with EPA-approved disinfectants, and complete drying/deodorization." },
                { q: "Is it safe to live in a house after sewage backup?", a: "No, it's not safe until professional cleanup is complete. Sewage contains harmful bacteria, viruses, and parasites that pose serious health risks." },
                { q: "What to do when your sewage backs up?", a: "Call professionals immediately, avoid contact with contaminated water, turn off electricity if safe, and evacuate affected areas." },
                { q: "Does homeowners insurance cover sewage cleanup?", a: "Many policies cover sudden/accidental backups but not preventable ones. Check your policy for sewer backup endorsement coverage." },
                { q: "Can you clear a main sewer line clog yourself?", a: "Minor clogs may respond to plunging or drain snakes, but severe blockages require professional hydro jetting equipment." },
                { q: "How long does sewage cleanup take?", a: "Basic cleanup takes 1-3 days, but extensive damage with structural repairs can take 1-2 weeks or longer." },
                { q: "Is sewage backup a health hazard?", a: "Yes—sewage contains E. coli, hepatitis, norovirus, and other dangerous pathogens that can cause serious illness." },
                { q: "Can carpet be cleaned after a sewer backup?", a: "Carpet should typically be discarded after sewage exposure as it cannot be adequately sanitized." },
                { q: "How much does Roto Rooter charge to clean a main sewer line?", a: "Roto Rooter typically charges $250-$800 for main sewer line cleaning depending on location and severity." },
                { q: "How to clean a dishwasher after sewage backup?", a: "Run multiple hot cycles with bleach or vinegar, sanitize all surfaces, and consider professional appliance cleaning." },
                { q: "Is sewer jetting worth it?", a: "Yes—hydro jetting thoroughly cleans pipe walls and removes roots/grease buildup more effectively than snaking." },
                { q: "How long do sewage bacteria last on surfaces?", a: "Harmful bacteria can survive days to weeks on surfaces without proper disinfection." },
                { q: "What is the best disinfectant for sewer backup?", a: "EPA-registered disinfectants like bleach solutions (1 cup bleach per gallon of water) or specialized enzymatic cleaners." },
                { q: "How to unclog a backed up sewer?", a: "Professional plumbers use motorized drain augers or hydro jetting equipment to clear sewer line obstructions." },
                { q: "Will homeowners insurance cover sewage backup?", a: "Coverage varies—many require separate sewer backup endorsement. Review your policy details carefully." },
                { q: "Is it safe to stay in a house with sewage backup in basement?", a: "No—evacuate affected areas immediately. Airborne pathogens and toxic gases pose serious health risks." },
                { q: "What is the average cost to unclog a sewer line?", a: "Average costs range from $200-$800 for basic clearing, or $1,000-$4,000+ for extensive repairs." },
                { q: "Is sewage backup a biohazard?", a: "Yes—Category 3 water damage classification means it contains harmful pathogens requiring professional biohazard cleanup." },
                { q: "What's the best way to completely clean out a sewer line?", a: "Professional hydro jetting uses high-pressure water (3,000-8,000 PSI) to thoroughly scour pipe interiors." },
                { q: "What to do when sewage is backing up in a house?", a: "Stop using all plumbing, call emergency plumber immediately, avoid contact with water, and evacuate if severe." },
                { q: "How much does Roto Rotor charge for sewer cleaning?", a: "Roto Rooter sewer cleaning typically costs $300-$600 for standard service calls." },
                { q: "How often should sewer drains be cleaned?", a: "Professional cleaning every 18-22 months prevents buildup and identifies potential issues early." },
                { q: "How much does Servpro biohazard cleanup cost per hour?", a: "Servpro biohazard cleanup averages $75-$150 per hour, with total projects ranging $500-$5,000+." },
                { q: "Can carpet be saved after sewage backup?", a: "Generally no—porous materials like carpet absorb contaminants and should be removed/disposed of safely." },
                { q: "How long does sewage contamination last in the house?", a: "Without treatment, contamination persists indefinitely. Professional cleanup eliminates pathogens within days." },
                { q: "How to clean a shower after a sewer backup?", a: "Thoroughly scrub with bleach solution, disinfect all surfaces, and run hot water to flush pipes." },
                { q: "Does homeowners insurance cover sewage back up?", a: "Many do with proper endorsement, but exclude preventable backups or lack of maintenance-related issues." },
                { q: "How to clear a backed up sewer?", a: "Call professionals who use camera inspection, hydro jetting, or power snaking equipment for safe, effective clearing." },
                { q: "Is professional drain cleaning worth it?", a: "Absolutely—professionals have equipment and expertise to彻底 clear blockages and prevent recurrence." }
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
                { name: "Ant Exterminator Fairview", url: "https://antexterminatorfairview.vercel.app/" },
                { name: "Spider Pest Control Fairview", url: "https://spiderspestcontrolfairview.vercel.app/" },
                { name: "Trenchless Sewer Repair Scottsdale", url: "https://trenchlesssewerrepairscottsdaleaz.vercel.app/" },
                { name: "Water Heater Repair Beaverton", url: "https://waterheaterrepairbeaverton.vercel.app/" }
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
              Serving Fairview Zip Codes: {zipCodes}
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
              This site is a complimentary service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </section>
      
      <FloatingCallButton phone={rawPhone} />
    </div>
  );
};

export default Index;
