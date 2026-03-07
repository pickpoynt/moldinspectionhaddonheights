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
  const primaryKeyword = "Ant Exterminator Fairview";
  const firmName = "Fairview Ant Exterminator Pros";
  const phoneNumber = "(323) 880-1224";
  const rawPhone = "3238801224";
  const zipCodes = "84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, 84095";
  const businessCords = { lat: 41.0347, lng: -111.9383 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Local experts providing rapid response for ant infestations in Fairview and surrounding areas, including zip codes ${zipCodes}. Call ${phoneNumber} now for expert ant control services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://antexterminatorfairview.vercel.app/2.jpeg",
              "@id": "https://antexterminatorfairview.vercel.app/",
              "url": "https://antexterminatorfairview.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Fairview Service Center",
                "addressLocality": "Fairview",
                "addressRegion": "UT",
                "postalCode": "84025",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.0347,
                "longitude": -111.9383
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
                "https://antexterminatorfairview.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Ant Extermination Services",
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
                "name": "Ant Control Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Ant Extermination"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Ant Control"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Carpenter Ant Removal"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ant Nest Elimination"
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
        title={<span>Ant Exterminator <br /><span className="text-amber-400">Fairview</span></span>}
        subtitle={`Professional ant extermination services for homes and businesses in Fairview and surrounding areas. Expert technicians specializing in carpenter ants, pavement ants, odorous house ants, and all ant species. Serving 84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, and 84095. Call ${phoneNumber} for immediate ant control solutions.`}
        badge="FAIRVIEW ANT EXTERMINATOR PROS"
        phone={rawPhone}
      />

      {/* Ant Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Ant Colony Elimination</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional ant extermination technicians use advanced methods to locate and eliminate ant colonies at their source. We understand that different ant species require different treatment approaches.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From carpenter ants that damage wood structures to pavement ants that invade kitchens, our team has the expertise to handle any ant infestation in Fairview and surrounding Utah communities.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete colony elimination using proven methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Safe treatments for families and pets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Preventive barrier protection around your property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Follow-up inspections to ensure ant-free results</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/1.jpeg" alt="Professional ant extermination service in Fairview" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Guaranteed Results</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Carpenter ant treatment specialists" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Ant Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Fairview and throughout Utah County, our ant extermination specialists have developed proven strategies for eliminating even the most stubborn ant problems.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just treat the symptoms—we find the nest and eliminate the entire colony, including the queen, to prevent future infestations. Our comprehensive approach ensures long-lasting protection for your home or business.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Species Identification</h3>
                    <p className="text-slate-600 text-sm">We identify the exact ant species to apply the most effective treatment method.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our treatments protect your structure from damaging carpenter ants and other pests.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Ant Species</span> in Fairview</h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Understanding the type of ant invading your property is crucial for effective elimination. Here are the most common ants we treat in Utah:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Carpenter Ants</h3>
                <p className="text-slate-600 mb-4">Large black or red ants that tunnel through wood, causing structural damage. They require immediate professional attention to prevent costly repairs.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Sawdust piles, rustling sounds in walls, large winged ants indoors</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Pavement Ants</h3>
                <p className="text-slate-600 mb-4">Small brown or black ants that nest under driveways and foundations. They commonly invade kitchens seeking sweets and proteins.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Small mounds near cracks, trails to food sources, tiny holes in pavement</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Odorous House Ants</h3>
                <p className="text-slate-600 mb-4">Tiny dark ants that emit a coconut-like smell when crushed. They're particularly persistent and difficult to eliminate without professional help.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Strong odor when crushed, dense trailing patterns, multiple nesting sites</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Ant identification and treatment" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our ant extermination experts provide comprehensive service throughout Fairview and all surrounding Utah communities. No matter where you're located in our service area, we're ready to eliminate your ant problem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Fairview", "Mount Pleasant", "Ephraim", "Moroni", "Fountain Green", "Spring City", "Wales", "Sterling"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving all zip codes: <span className="text-indigo-600 font-black">84025, 84010, 84020, 84041, 84037, 84015, 84054, 84070, 84065, 84095</span>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Ant Control Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">EPA-Approved Treatments</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <TrenchlessInfo />
      <FAQ />
      <Contact />

      {/* Ant Extermination Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Ant Control <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about ant extermination, treatment costs, and prevention strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does an exterminator cost for ants?", a: "Ant extermination costs vary based on infestation severity and home size, typically ranging from $150-$500 for initial treatment." },
                { q: "Is it worth getting an exterminator for ants?", a: "Yes! Professional exterminators provide long-term solutions by eliminating the entire colony, not just visible workers." },
                { q: "How to 100% get rid of ants?", a: "Complete elimination requires finding and treating the nest, sealing entry points, and maintaining proper sanitation." },
                { q: "What is the hardest ant to get rid of?", a: "Carpenter ants and pharaoh ants are among the most challenging due to their complex colony structures." },
                { q: "What permanently gets rid of ants?", a: "Professional-grade baits combined with exclusion work best for permanent ant control." },
                { q: "How much does Orkin charge for ant removal?", a: "Orkin typically charges $150-$350 for ant treatments, though prices vary by location and severity." },
                { q: "Can I exterminate ants myself?", a: "While DIY methods can help minor problems, professional treatment is recommended for complete colony elimination." },
                { q: "What is the hardest pest to get rid of?", a: "Bed bugs, German cockroaches, and certain ant species like pharaoh ants rank as the most difficult." },
                { q: "What is the best time of year to exterminate ants?", a: "Early spring is ideal, but ant control should be addressed immediately upon discovery year-round." },
                { q: "How much is Terminix ant treatment?", a: "Terminix ant treatments average $200-$400 depending on the treatment plan and property size." },
                { q: "Can I get rid of ants without an exterminator?", a: "Minor infestations may respond to DIY methods, but established colonies usually need professional intervention." },
                { q: "What are signs of a major ant infestation?", a: "Look for large numbers indoors, sawdust (frass), rustling sounds in walls, and multiple entry points." },
                { q: "Is it worth hiring an exterminator for ants?", a: "Absolutely—professionals save money long-term by preventing structural damage and recurring infestations." },
                { q: "Are ant infestations covered by insurance?", a: "Most homeowners insurance doesn't cover ant damage, making prevention and early treatment essential." },
                { q: "Do I need to leave during ant extermination?", a: "For most ant treatments, you can remain home, though you may need to vacate during application for 2-4 hours." },
                { q: "Is it cheaper to DIY or hire an exterminator?", a: "DIY seems cheaper initially but often costs more due to repeated treatments and potential property damage." },
                { q: "Can you get rid of ants permanently?", a: "Yes, with professional treatment, proper exclusion, and ongoing maintenance, permanent control is achievable." },
                { q: "Do coffee grounds repel ants?", a: "Coffee grounds may deter some ants temporarily but won't eliminate an established colony." },
                { q: "How hard is it to get rid of an ant infestation?", a: "Difficulty varies by species—some resolve quickly while others like carpenter ants require multiple treatments." },
                { q: "How long does it take to get rid of ants after an exterminator?", a: "Most ant problems show significant improvement within 24-48 hours, with complete elimination in 1-2 weeks." },
                { q: "How will an exterminator get rid of ants?", a: "Professionals use integrated pest management: inspection, baiting, barriers, and exclusion techniques." },
                { q: "What time of year are ants most active?", a: "Ants peak in spring and summer but can remain active indoors year-round in heated structures." },
                { q: "What are the signs of an ant infestation?", a: "Visible trails, live or dead ants, frass near wood, hollow-sounding timber, and rustling noises." }
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
                { name: "Earwig Exterminator Denver", url: "https://earwigexterminatordenver.vercel.app/" },
                { name: "Centipede Repellent Hawaii", url: "https://centipederepellenthawaii.vercel.app/" },
                { name: "Pest Control South Point Ohio", url: "https://pestcontrolsouthpointohio.vercel.app/" },
                { name: "Rodent Control Corvallis Oregon", url: "https://rodentcontrolcorvallisoregon.vercel.app/" }
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

      <Footer />
      
      {/* Disclaimer Section */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed italic">
              This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>
      </section>
      
      <FloatingCallButton phone={rawPhone} />
    </div>
  );
};

export default Index;
