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
  const primaryKeyword = "Slab Leak Detection Eden Prairie";
  const firmName = "Eden Prairie Slab Leak Detection Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "55344, 55346, 55347, 55343, 55345, 55379, 55438, 55317, 55331";
  const businessCords = { lat: 44.8547, lng: -93.4708 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber} | {zipCodes}</title>
        <meta
          name="description"
          content={`Expert ${primaryKeyword} specialists in Eden Prairie, MN. Non-invasive electronic slab leak detection under concrete slabs and foundations with same-day repair options. Serving Eden Prairie and nearby west metro zip codes ${zipCodes}. Call ${phoneNumber} for professional slab leak detection and repair.`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://slableakdetectionedenprairie.vercel.app/2.jpeg",
              "@id": "https://slableakdetectionedenprairie.vercel.app/",
              "url": "https://slableakdetectionedenprairie.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Prairie Center Dr",
                "addressLocality": "Eden Prairie",
                "addressRegion": "MN",
                "postalCode": "55344",
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
                "https://slableakdetectionedenprairie.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Slab Leak Detection & Repair Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Eden Prairie, MN"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Professional Slab Leak Detection & Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Slab Leak Detection Under Concrete Slabs"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electronic Water Leak Detection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Slab Leak Repair & Pipe Rerouting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Foundation Leak Repair & Drying"
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
            Slab Leak Detection
            <br />
            <span className="text-amber-400">Eden Prairie MN</span>
          </span>
        }
        subtitle={`Specialized slab leak detection in Eden Prairie homes and businesses using non-invasive electronic equipment and acoustic listening devices. We pinpoint hidden leaks under concrete slabs, reroute failing lines, and protect your foundation from costly water damage. Serving Eden Prairie neighborhoods and nearby west metro communities. Call ${phoneNumber} now to speak with a local slab leak specialist.`}
        badge="EDEN PRAIRIE SLAB LEAK PROS"
        phone={rawPhone}
        image="/2.jpeg"
        overlayImage="/4.jpeg"
      />

      {/* Slab Leak Detection Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  Precision <span className="text-indigo-600">Slab Leak Detection</span> In Your Home
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our Eden Prairie slab leak technicians use advanced electronic leak detection, acoustic listening equipment, and thermal imaging to accurately locate leaks buried under your concrete slab or basement floor—without unnecessary demolition.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From hot water line leaks that drive up your bill to hidden slab leaks slowly washing away soil beneath your foundation, our team delivers fast, precise diagnosis and clear repair options for Eden Prairie homeowners.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Non-invasive electronic slab leak detection that protects finished floors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Pinpoint location of leaks under concrete, driveways, and interior slabs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Permanent repair options including pipe rerouting and repiping</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Moisture management strategies to help prevent mold and structural damage</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/1.jpeg"
                  alt="Professional slab leak detection service in Eden Prairie MN"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">FOCUSED ON FOUNDATION PROTECTION</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img
                  src="/3.jpeg"
                  alt="Slab leak repair and pipe rerouting in Eden Prairie"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  Why Eden Prairie Chooses <span className="text-indigo-600">Our Slab Leak Experts</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience in Eden Prairie and the southwest metro, our slab leak specialists have developed proven strategies for repairing even the most complex underground leaks with minimal disruption to your home.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We do more than patch a bad spot. We evaluate your entire plumbing layout, explain whether spot repairs or repiping makes the most sense, and design solutions that protect both your foundation and water bill long term.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Advanced Detection Technology</h3>
                    <p className="text-slate-600 text-sm">
                      We use sensitive electronic amplifiers, thermal imaging cameras, and pressure testing to hear and see leaks through concrete.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Water Damage Prevention</h3>
                    <p className="text-slate-600 text-sm">
                      Our rapid response helps limit structural damage, protect flooring, and slow or stop mold growth from hidden moisture.
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
                Common <span className="text-indigo-600">Slab Leak Causes & Signs</span>
              </h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Slab leaks usually start small and quiet, but the damage can be serious. Here are some of the most common situations we see in
                Eden Prairie homes:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Aging Copper Or Galvanized Lines</h3>
                <p className="text-slate-600 mb-4">
                  Older copper and galvanized pipes under the slab can develop pinhole leaks from corrosion, water chemistry, or years of movement
                  in Minnesota freeze–thaw cycles.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: Hot spots on floors, higher water bills, faint hissing sounds, damp carpet along interior walls
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Soil Movement & Foundation Stress</h3>
                <p className="text-slate-600 mb-4">
                  Seasonal moisture changes can cause the soil beneath your slab to expand and contract, stressing pipes and joints until a hidden
                  leak forms.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: New cracks in floors or walls, doors sticking, damp spots that keep returning, musty odors
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">High Water Pressure & Poor Installation</h3>
                <p className="text-slate-600 mb-4">
                  Excessive water pressure and tight pipe bends can slowly wear through pipe walls, especially where lines pass through or under
                  the slab.
                </p>
                <p className="text-slate-600 text-sm font-medium">
                  Signs: Banging pipes, pressure spikes, multiple small leaks over time, frequent plumbing repairs
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img
                src="/4.jpeg"
                alt="Specialized slab leak detection and repair equipment in Eden Prairie"
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
              Our Eden Prairie slab leak detection team serves homeowners across the southwest Twin Cities metro. No matter where you are in our
              service area, we work to provide fast, clear answers and long-term repair solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Eden Prairie", "Minnetonka", "Bloomington", "Chanhassen", "Edina", "Shakopee", "Hopkins", "Plymouth"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving Eden Prairie and surrounding communities in zip codes 55344, 55346 and 55347.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Slab Leak Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Certified Water Leak Detection</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Local Eden Prairie Service</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Slab Leak Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                Slab Leak &amp; Water Leak <span className="text-indigo-600">Questions Answered</span>
              </h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get clear answers to the most common questions Eden Prairie homeowners ask about slab leaks, water leak detection, repair costs and
                insurance coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  q: "How much should water leak detection cost?",
                  a: "Professional water and slab leak detection typically ranges from $250–$650 in the Eden Prairie area, depending on how complex your plumbing layout is and how difficult the leak is to access."
                },
                {
                  q: "Is a slab leak expensive to fix?",
                  a: "Simple slab leak repairs that require only a small access opening may start around $800–$2,000, while pipe rerouting or multiple leaks can run $3,000–$8,000+ depending on materials, finishes, and how much concrete must be opened."
                },
                {
                  q: "How long can a slab leak go undetected?",
                  a: "Some slab leaks go unnoticed for months or even years, slowly washing soil away under your foundation. That is why subtle signs—warmer spots on the floor, musty odors, or higher water bills—should be checked quickly."
                },
                {
                  q: "How much does a leak detection specialist cost?",
                  a: "Leak detection specialists usually charge a flat diagnostic fee between $250–$650 which often includes locating the leak and presenting repair options; actual repair work is priced separately."
                },
                {
                  q: "Does home insurance cover leak detection?",
                  a: "Many policies will contribute toward leak detection when it is part of a covered claim, but coverage varies by company. Often the water damage is covered while the leak itself and detection work may be partially or fully out of pocket."
                },
                {
                  q: "Is water leak detection worth it?",
                  a: "Yes. Finding the exact source of a hidden leak early typically costs far less than repairing a cracked foundation, ruined flooring, or mold damage that can occur if a slab leak is ignored."
                },
                {
                  q: "Will homeowners insurance cover a slab leak?",
                  a: "If the slab leak is sudden and accidental, many policies will cover resulting water damage. Coverage for the plumbing repair itself depends on your policy language, exclusions, and maintenance history."
                },
                {
                  q: "What are the signs of a hidden slab leak?",
                  a: "Common signs include warm or damp spots on floors, unexplained water sounds, higher water bills, musty odors, and cracks appearing in tile, grout, or drywall without another clear cause."
                },
                {
                  q: "How much will a 20x20 concrete slab cost?",
                  a: "Concrete pricing changes by market, but a new 20x20 slab can often cost $3,000–$8,000+ depending on thickness, reinforcement, site prep, and local labor rates—another reason to protect the slab you already have."
                },
                {
                  q: "Does insurance pay for leak detection?",
                  a: "Sometimes. If the leak leads to covered water damage, insurers may reimburse reasonable leak detection costs. It is best to document everything and ask your carrier before work begins."
                },
                {
                  q: "Are leak detection companies worth it?",
                  a: "When you suspect a hidden leak, a specialized leak detection company can save you from tearing up large sections of concrete or walls unnecessarily by pinpointing the problem area."
                },
                {
                  q: "How do plumbers find hidden leaks?",
                  a: "Plumbers use electronic listening devices, pressure testing, tracer gas, infrared cameras, and sometimes in-pipe video inspection to locate leaks behind walls, under slabs, and underground."
                },
                {
                  q: "Can you fix a slab leak yourself?",
                  a: "Because slab leaks involve structural concrete, buried pipes, and potential building code issues, they are not a safe DIY project. A licensed plumber with slab leak experience should handle the repair."
                },
                {
                  q: "How do plumbers detect slab leaks?",
                  a: "They isolate the leaking line, pressurize it, and listen through the slab with sensitive equipment, sometimes combining this with thermal imaging to track hot water movement under the floor."
                },
                {
                  q: "Who is responsible for a water leak under a house?",
                  a: "Homeowners are usually responsible for leaks under their home and within their property lines. If you are in a townhome or condo, association documents may further define responsibilities."
                },
                {
                  q: "Can I detect a leak myself?",
                  a: "You can do basic checks—such as monitoring the water meter, listening for running water, or checking for warm spots—but confirming and locating a slab leak precisely typically requires professional tools."
                },
                {
                  q: "What is the best water leak detection?",
                  a: "The best approach combines electronic listening, pressure testing, and sometimes infrared imaging. A skilled technician chooses the right mix of tools based on how your home is built."
                },
                {
                  q: "How do I find a water leak between my house and meter?",
                  a: "If the meter runs when all fixtures are off, a plumber can pressure-test and isolate the line between the meter and house, then use acoustic or tracer gas methods to locate the leak in the yard."
                },
                {
                  q: "Do homeowners insurance cover slab leaks?",
                  a: "Coverage depends on whether the leak is considered sudden and accidental versus long-term or due to neglect. Many policies cover the resulting damage but limit coverage for the pipe repair itself."
                },
                {
                  q: "How urgent is a slab leak?",
                  a: "Slab leaks are urgent because they continually erode soil and feed moisture into your foundation. The sooner they are found and repaired, the less risk you have of structural movement and mold."
                },
                {
                  q: "What are the signs of a slab leak?",
                  a: "Warm floors, unexplained damp spots, running water sounds when fixtures are off, a constantly spinning water meter, and rising water bills are all strong indicators of a slab leak."
                },
                {
                  q: "What are signs of a hidden water leak?",
                  a: "Hidden leaks may show up as stains on ceilings or walls, peeling paint, musty smells, warped flooring, mold growth, or soft drywall and baseboards."
                },
                {
                  q: "Do water leak detectors really work?",
                  a: "Smart leak detectors placed under sinks, near water heaters, or along vulnerable areas can alert you early to leaks. They do not replace professional detection, but they can limit damage by catching issues sooner."
                },
                {
                  q: "Can you rent leak detection equipment?",
                  a: "Some specialty suppliers rent leak detection tools, but interpreting the sounds and readings correctly requires experience—most homeowners get better results by hiring a specialist."
                },
                {
                  q: "How common is a slab leak?",
                  a: "In areas with many slab-on-grade homes—like parts of Eden Prairie—slab leaks are not rare, especially in older neighborhoods or homes with original piping and high water pressure."
                },
                {
                  q: "How to stop a concrete slab from leaking?",
                  a: "Stopping a slab from leaking usually means repairing or rerouting the leaking pipe, then drying and sealing affected areas. Surface waterproofing alone will not fix a pressurized plumbing leak under the slab."
                },
                {
                  q: "How long does a slab leak take to fix?",
                  a: "Many slab leaks can be located and repaired within a day, while more complex reroutes or restoration work may take several days depending on finishes and access."
                },
                {
                  q: "How to detect a water leak in your house without?",
                  a: "Turn off all fixtures and appliances, then check your water meter; if it keeps moving, you likely have a hidden leak. Walk your home for warm spots, dampness, or hissing sounds and then call a professional."
                },
                {
                  q: "How long does it take to detect a water leak?",
                  a: "A straightforward leak may be found in under an hour; complex slab leaks routed through multiple branches may take several hours of testing and listening to pinpoint accurately."
                },
                {
                  q: "How much does leak detection cost near me?",
                  a: "In most metro areas, including the Twin Cities, professional leak detection usually falls between $250–$650 depending on how involved the search and testing process is."
                },
                {
                  q: "Will home insurance cover a slab leak?",
                  a: "Many policies cover sudden slab leaks and their resulting damage, but you should review your policy and speak with your agent to understand limits, deductibles, and any exclusions."
                },
                {
                  q: "Will a slab leak affect my home's value?",
                  a: "An unrepaired slab leak and related damage can absolutely hurt home value. A professionally documented repair with proper drying and restoration usually protects value much better."
                },
                {
                  q: "Can water come up through a concrete slab?",
                  a: "Yes. Pressurized leaks can force water up through cracks, joints, and penetrations, appearing as damp carpet, buckled flooring, or pooling along walls."
                },
                {
                  q: "Is leak detection worth it?",
                  a: "Leak detection is almost always worth it when you suspect a hidden leak. The cost of guessing and opening concrete or walls in the wrong place adds up much faster than a focused diagnostic visit."
                },
                {
                  q: "Are water leaks covered by insurance?",
                  a: "Sudden and accidental water leaks are often covered, while slow, long-term leaks or issues tied to maintenance problems may be limited or excluded. Always document issues and contact your insurer quickly."
                }
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
                { name: "Trenchless Sewer Repair Scottsdale AZ", url: "https://trenchlesssewerrepairscottsdaleaz.vercel.app/" },
                { name: "Cast Iron Pipe Replacement Boonton", url: "https://castironpipereplacementboonton.vercel.app/" },
                { name: "Leaking Pipe Repair in Modesto", url: "https://leakingpiperepairinmodesto.vercel.app/" },
                { name: "Slab Leak Detection Specialist Boonton", url: "https://slableakdetectionspecialistboonton.vercel.app/" }
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
              Professional Slab Leak Detection Services in Eden Prairie, MN 55344
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
