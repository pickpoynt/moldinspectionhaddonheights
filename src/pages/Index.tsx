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
  const primaryKeyword = "Sewer Backup Klamath Falls OR";
  const firmName = "Klamath Falls Sewer Backup Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "97601, 97603, 97640";
  const businessCords = { lat: 42.2249, lng: -121.7817 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Sewer Backup Klamath Falls OR | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Expert sewer cleanup technicians providing rapid water extraction, sanitization & deodorization in Klamath Falls and surrounding areas including zip codes ${zipCodes}. Call ${phoneNumber} now for emergency sewer backup services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://sewerbackupklamathfallsor.vercel.app/2.jpeg",
              "@id": "https://sewerbackupklamathfallsor.vercel.app/",
              "url": "https://sewerbackupklamathfallsor.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street Service Center",
                "addressLocality": "Klamath Falls",
                "addressRegion": "OR",
                "postalCode": "97601",
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
                "https://sewerbackupklamathfallsor.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Sewer Backup Cleanup Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Klamath Falls"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Emergency Sewer Backup Services",
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
        title={<span>Sewer Backup <br /><span className="text-amber-400">Klamath Falls OR</span></span>}
        subtitle={`Professional sewer backup cleanup services for homes and businesses in Klamath Falls. Expert technicians specializing in emergency water extraction, complete sanitization, and permanent odor elimination from basements, crawl spaces, and entire properties. Serving all Klamath County areas including 97601, 97603, 97640. Call ${phoneNumber} for immediate emergency sewer backup services.`}
        badge="KLAMATH FALLS SEWER BACKUP PROS"
        phone={rawPhone}
      />

      {/* Sewage Backup Cleanup Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Sewer Contamination Cleanup</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional sewer backup cleanup technicians use specialized equipment and techniques to safely remove contaminated water, sanitize affected areas, and restore your property. We understand the urgency and health risks associated with sewer backups in Klamath Falls.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From basements to crawl spaces, our team has the expertise to handle any sewer backup situation in Klamath Falls and surrounding Klamath County communities quickly and professionally, ensuring complete sanitization and odor elimination.
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
                <img src="/2.jpeg" alt="Professional sewer backup cleanup service in Klamath Falls OR" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Contamination Removal Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency sewer extraction and basement sanitization specialists Klamath Falls" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Sewer Backup Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Klamath Falls and throughout Klamath County, our sewer backup specialists have developed proven strategies for eliminating even the most severe contamination and odors from sewer backups.
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
                Sewer backups can originate from various sources. Here are the most common situations we handle in Klamath Falls:
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
              <img src="/4.jpeg" alt="Sewer backup cleanup equipment and tools Klamath Falls" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency sewer backup cleanup experts provide comprehensive service throughout Klamath Falls and all surrounding Klamath County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Klamath Falls", "Altamont", "Chiloquin", "Bonanza", "Merrill", "Malin", "Tulelake", "Dorris"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving Klamath Falls and all surrounding Klamath County areas including zip codes 97601, 97603, 97640
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Sewer Cleanup Specialists</span>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Sewer Backup <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about sewer backup cleanup, costs, safety protocols, and restoration in Klamath Falls.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much is a sewer backup?", a: "Professional sewer backup cleanup typically costs between $500-$5,000 depending on severity, affected area size, and extent of contamination." },
                { q: "Is the town responsible for sewer backup?", a: "Responsibility depends on the location of the blockage. If it's in the city main, the municipality may be liable. If it's in your private line, you're typically responsible." },
                { q: "What to do if sewage backs up into your house?", a: "Call professionals immediately, avoid contact with contaminated water, turn off electricity if safe, and evacuate affected areas until cleanup begins." },
                { q: "How to tell if city sewer is backed up?", a: "Signs include multiple fixtures backing up simultaneously, gurgling sounds from drains, and sewage odors coming from floor drains." },
                { q: "Will homeowners insurance cover sewage backup?", a: "Many policies cover sudden/accidental backups but not preventable ones. Check your policy for sewer backup endorsement coverage." },
                { q: "How many bedrooms will a 1000 gallon septic tank hold?", a: "A 1000-gallon septic tank typically supports a 3-bedroom home, though local codes may vary based on usage requirements." },
                { q: "Is it safe to stay in a house with sewage backup in basement?", a: "No—evacuate affected areas immediately. Airborne pathogens and toxic gases from sewage pose serious health risks." },
                { q: "What is the 135 rule in plumbing?", a: "The 135-degree rule refers to proper pipe angles for drainage to prevent clogs and ensure proper waste flow through the system." },
                { q: "What is the average lifespan of a sewer line?", a: "Sewer lines typically last 50-100 years depending on material. Cast iron lasts 75-100 years, while PVC can last indefinitely." },
                { q: "Will insurance pay for a new sewer line?", a: "Coverage varies—many require separate sewer backup endorsement. Review your policy details carefully for line replacement coverage." },
                { q: "How to fix a sewer backup in a house?", a: "Professional plumbers use camera inspection, hydro jetting, or power snaking equipment for safe, effective clearing of blockages." },
                { q: "How often does a 2000 gallon septic tank need to be pumped?", a: "A 2000-gallon tank typically needs pumping every 3-5 years depending on household size and water usage." },
                { q: "Can I sue the city for sewer backup?", a: "You may have grounds if negligence is proven. Document all damage and consult an attorney specializing in property damage." },
                { q: "Can sewer water back up into a washer?", a: "Yes—washing machine drain lines can allow sewer water to backup during main line blockages. Install backflow prevention valves." },
                { q: "How do plumbers unclog the main sewer line?", a: "Professionals use motorized drain augers, hydro jetting with 3000-8000 PSI water pressure, or camera inspection to identify blockages." },
                { q: "Will homeowners insurance cover sewer backup?", a: "Coverage varies—many require separate sewer backup endorsement. Review your policy details carefully for specific coverage." },
                { q: "How much does a sewage backup cost?", a: "Cleanup costs range from $500-$5,000+, with extensive repairs reaching $10,000+ depending on damage severity." },
                { q: "How much to plumb a 2000 sq ft house?", a: "Plumbing a 2000 sq ft house typically costs $8,000-$25,000 depending on complexity, materials, and regional labor rates." },
                { q: "Is sewer jetting worth it?", a: "Yes—hydro jetting thoroughly cleans pipe walls and removes roots/grease buildup more effectively than traditional snaking." },
                { q: "How many bedrooms for a 1000 gallon septic tank?", a: "A 1000-gallon septic tank is rated for approximately 3 bedrooms under typical residential usage conditions." },
                { q: "What to do if a sewer line is backed up?", a: "Stop using all plumbing immediately, call emergency plumber, avoid contact with water, and evacuate if severe." },
                { q: "Why is replacing a sewer line so expensive?", a: "Costs reflect excavation, permits, materials, labor, and restoration. Trenchless options reduce expense but still range $3,000-$25,000." },
                { q: "How much should it cost to clear a blocked drain?", a: "Professional drain clearing averages $150-$400 for standard clogs, or $200-$800 for main line blockages." },
                { q: "Does house insurance cover sewage backup?", a: "Many do with proper endorsement, but exclude preventable backups or lack of maintenance-related issues." },
                { q: "What if I can't afford a new septic system?", a: "Contact local health department for assistance programs, USDA rural development loans, or payment plan options with contractors." },
                { q: "How often should a sewer line be cleaned?", a: "Professional cleaning every 18-22 months prevents buildup and identifies potential issues before emergencies occur." },
                { q: "Can you sue the city for sewer backup?", a: "Yes—if municipal negligence caused the backup. Document everything and consult a property damage attorney." },
                { q: "How much does it cost to unblock a sewage drain?", a: "Professional sewage drain unblocking ranges $200-$800, with complex jobs reaching $1,500+ depending on access and severity." },
                { q: "How to clean a basement floor after a sewer backup?", a: "Remove standing water, scrub with bleach solution (1 cup/gallon), disinfect thoroughly, and ensure complete drying to prevent mold." },
                { q: "What does a sewer backup look like?", a: "Dark, foul-smelling water containing waste particles, toilet paper, and debris emerging from drains or toilets." }
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
                { name: "Trenchless Sewer Repair Scottsdale", url: "https://trenchlesssewerrepairscottsdaleaz.vercel.app/" },
                { name: "Water Heater Repair Beaverton", url: "https://waterheaterrepairbeaverton.vercel.app/" },
                { name: "Cast Iron Pipe Replacement Boonton", url: "https://castironpipereplacementboonton.vercel.app/" },
                { name: "Leaking Pipe Repair Modesto", url: "https://leakingpiperepairinmodesto.vercel.app/" }
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
              Professional Sewer Backup Services in Klamath Falls, OR 97601
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
