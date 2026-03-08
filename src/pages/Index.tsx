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
  const primaryKeyword = "Slab Leak Repair Swarthmore";
  const firmName = "Swarthmore Slab Leak Repair Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "19081, 19018, 19064, 19078, 19023, 19050, 19074, 19096, 19041, 19033, 19063, 19082, 19094, 19026, 19052, 19073, 19083, 19013, 19036, 19070";
  const businessCords = { lat: 39.9026, lng: -75.3499 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Expert ${primaryKeyword}. Professional slab leak detection and repair services in Swarthmore PA. Emergency foundation leak repair, copper pipe replacement under concrete slab. Serving Delaware County areas including ${zipCodes}. Call ${phoneNumber} for immediate slab leak repair.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://slableakrepairswarthmore.vercel.app/2.jpeg",
              "@id": "https://slableakrepairswarthmore.vercel.app/",
              "url": "https://slableakrepairswarthmore.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street Service Center",
                "addressLocality": "Swarthmore",
                "addressRegion": "PA",
                "postalCode": "19081",
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
                "https://slableakrepairswarthmore.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Slab Leak Repair Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Swarthmore"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Emergency Slab Leak Detection & Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Slab Leak Detection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Copper Pipe Replacement Under Slab"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Foundation Leak Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Concrete Slab Pipe Repair"
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
        title={<span>Slab Leak Repair <br /><span className="text-amber-400">Swarthmore PA</span></span>}
        subtitle={`Professional slab leak detection and repair services for homes and businesses in Swarthmore. Expert technicians specializing in foundation leak repair, copper pipe replacement under concrete slabs, and complete water damage restoration. Serving all Delaware County areas including 19081, 19018, 19064, 19078, 19023, 19050. Call ${phoneNumber} for immediate emergency slab leak services.`}
        badge="SWARTHMORE SLAB LEAK REPAIR PROS"
        phone={rawPhone}
      />

      {/* Slab Leak Repair Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Slab Leak Detection Services</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional slab leak detection technicians use advanced electronic equipment and acoustic listening devices to precisely locate water leaks under your concrete foundation in Swarthmore homes.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From copper pipe corrosion to foundation cracks, our team has the expertise to handle any slab leak situation in Swarthmore and surrounding Delaware County communities quickly and professionally, ensuring minimal damage to your flooring and foundation.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Electronic leak detection using professional-grade equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Same-day emergency response for slab foundation leaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Copper pipe replacement and rerouting under concrete slabs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Minimal invasive repair methods to preserve your flooring</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/2.jpeg" alt="Professional slab leak detection service in Swarthmore PA" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Leak Detection Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency copper pipe replacement under slab Swarthmore" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Slab Leak Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Swarthmore and throughout Delaware County, our slab leak specialists have developed proven strategies for repairing even the most complex leaks under concrete foundations.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just patch the leak—we assess the entire plumbing system, identify corrosion patterns, and help prevent future slab leaks. Our comprehensive approach ensures your pipes stay leak-free longer.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Advanced Detection Technology</h3>
                    <p className="text-slate-600 text-sm">We use electronic amplifiers, electromagnetic pipe locators, and thermal imaging for accurate leak location.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Foundation Protection</h3>
                    <p className="text-slate-600 text-sm">Our repair techniques preserve structural integrity and prevent further damage to your concrete slab foundation.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Slab Leak Causes</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Slab leaks can occur due to various factors. Here are the most common situations we handle in Swarthmore:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Copper Pipe Corrosion</h3>
                <p className="text-slate-600 mb-4">Chemical reactions between copper pipes and soil minerals can cause pinhole leaks under your concrete foundation over time.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Unexplained water bill increases, warm spots on floor, sound of running water</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Foundation Settlement</h3>
                <p className="text-slate-600 mb-4">Soil shifting and foundation movement can stress pipes under the slab, causing joints to separate or pipes to crack.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Cracks in walls or floors, doors that won't close properly, visible foundation cracks</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">High Water Pressure</h3>
                <p className="text-slate-600 mb-4">Excessive water pressure can weaken pipe connections and accelerate corrosion, leading to slab leaks in older homes.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Banging pipes, leaking faucets, reduced water pressure, frequent appliance failures</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Slab leak detection equipment and tools Swarthmore PA" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency slab leak repair experts provide comprehensive service throughout Swarthmore and all surrounding Delaware County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Swarthmore", "Media", "Springfield", "Ridley Park", "Folsom", "Secane", "Clifton Heights", "Upper Darby"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving Swarthmore and all surrounding Delaware County areas including zip codes 19081, 19018, 19064, 19078, 19023, 19050, 19074, 19096
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Slab Leak Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Certified Foundation Repair Technicians</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Service</span>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Slab Leak <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about slab leak detection, repair costs, foundation damage, and plumbing solutions in Swarthmore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "What is the average cost of a slab leak?", a: "Professional slab leak detection and repair typically costs between $2,000-$5,000 depending on leak location, accessibility, and repair method chosen." },
                { q: "Will insurance cover a leak under a slab?", a: "Coverage varies—many homeowners policies cover sudden leaks but exclude gradual damage from corrosion or wear. Review your policy details carefully for specific coverage." },
                { q: "Can slab leaks be repaired?", a: "Yes—slab leaks can be repaired through various methods including pipe rerouting, spot repair, or epoxy pipe lining depending on the severity and location." },
                { q: "Is a slab leak a big deal?", a: "Absolutely—slab leaks can cause extensive foundation damage, mold growth, and structural issues if left untreated. Immediate professional attention is crucial." },
                { q: "What is the lifespan of a slab leak repair?", a: "Proper repairs can last 20-50 years depending on the method used. Copper repiping typically lasts longer than epoxy lining solutions." },
                { q: "How much will a 20x20 concrete slab cost?", a: "A 20x20 concrete slab typically costs $3,000-$6,000 installed, varying based on thickness, reinforcement, and regional labor rates." },
                { q: "Can pipes burst under slab?", a: "Yes—pipes can burst under slabs due to freezing, corrosion, high water pressure, or foundation movement causing pipe stress and failure." },
                { q: "What not to say to a home insurance adjuster?", a: "Avoid admitting fault, speculating about pre-existing conditions, or providing recorded statements without documentation of all damage." },
                { q: "Does home insurance cover slab foundation repair?", a: "Most policies exclude foundation settlement but may cover damage from sudden covered perils like burst pipes. Review your specific policy terms." },
                { q: "What are the signs of a hidden slab leak?", a: "Warm spots on floors, unexplained water bill increases, sound of running water, wet carpets, or foundation cracks indicate possible slab leaks." },
                { q: "Should I repipe instead of repairing a slab leak?", a: "Repiping may be more cost-effective long-term for older homes with multiple leaks or corroded plumbing throughout the system." },
                { q: "How long does it take to fix a slab leak?", a: "Most slab leak repairs take 1-3 days depending on access method, leak location, and whether flooring removal is required." },
                { q: "Would a 30 year old concrete slab have a moisture problem?", a: "Yes—older slabs often develop moisture issues from deteriorating vapor barriers, rising groundwater, or plumbing leaks under the foundation." },
                { q: "Can a slab leak cause a sinkhole?", a: "While rare, prolonged water erosion from slab leaks can wash away soil beneath foundations, potentially causing settlement or voids." },
                { q: "How long can a slab leak go undetected?", a: "Slab leaks can go undetected for months or even years, gradually causing increasing damage to foundations and creating mold growth." },
                { q: "Will insurance pay for a slab leak?", a: "Many insurers pay for leak detection and repair if caused by sudden covered events, but deny claims for gradual deterioration or neglect." },
                { q: "How common is a slab leak?", a: "Slab leaks are relatively common in homes built on concrete foundations, especially those with copper piping over 20 years old." },
                { q: "Will a slab leak affect my home's value?", a: "Untreated slab leaks significantly reduce home value due to foundation damage concerns. Documented repairs with warranties help maintain property values." },
                { q: "Are slab leaks covered by a home warranty?", a: "Some home warranties offer limited coverage for slab leak detection and repair. Review contract terms carefully for exclusions and coverage limits." },
                { q: "Can my home insurance pay for a new concrete slab?", a: "Insurance rarely pays for complete slab replacement unless damage results from a covered peril like earthquake or major plumbing catastrophe." },
                { q: "Can water come up through a concrete slab?", a: "Yes—water can seep through slab cracks, expansion joints, or porous concrete when groundwater pressure exceeds the slab's waterproofing capacity." },
                { q: "Can a slab leak cause foundation problems?", a: "Absolutely—water from slab leaks erodes supporting soil, causes concrete heaving or settling, and leads to serious structural foundation damage." },
                { q: "What is the best way to fix a slab leak?", a: "The best method depends on the situation: electronic leak detection followed by minimal invasive repair, pipe rerouting, or trenchless technologies." },
                { q: "Can you have a slab leak and not know it?", a: "Yes—many slab leaks remain hidden for extended periods until significant damage occurs. Regular monitoring of water bills helps early detection." },
                { q: "Who is responsible for a water leak under a house?", a: "Homeowners are responsible for all plumbing on their property. Contact your insurance company immediately to determine coverage eligibility." },
                { q: "Do homeowners insurance cover slab leaks?", a: "Coverage depends on the cause—sudden accidental leaks are often covered, while gradual deterioration from age or corrosion typically isn't." },
                { q: "Where does the water go when you have a slab leak?", a: "Water spreads beneath the slab, saturating soil, potentially reaching electrical conduits, and causing foundation movement or heaving." },
                { q: "How long does a slab leak take to repair?", a: "Most repairs take 1-3 days from detection through completion, though complex cases requiring extensive flooring restoration may take longer." },
                { q: "How urgent is a slab leak?", a: "Extremely urgent—immediate action prevents escalating foundation damage, mold growth, and exponentially higher repair costs." },
                { q: "How much does it cost to locate a slab leak?", a: "Professional electronic leak detection typically costs $300-$800 depending on home size, number of slabs, and leak complexity." },
                { q: "Are slab leaks common?", a: "Yes—slab leaks affect thousands of homes annually, particularly in regions with expansive clay soils and older copper plumbing systems." },
                { q: "How does a plumber detect a slab leak?", a: "Plumbers use electronic amplifiers, thermal imaging cameras, electromagnetic pipe locators, and pressure testing to pinpoint leak locations." },
                { q: "How to stop a concrete slab from leaking?", a: "Professional repair methods include pipe rerouting, epoxy pipe lining, injection grouting, or installing interior drainage systems depending on the source." }
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
                { name: "Leaking Pipe Repair Modesto", url: "https://leakingpiperepairinmodesto.vercel.app/" },
                { name: "Cast Iron Pipe Replacement Boonton", url: "https://castironpipereplacementboonton.vercel.app/" },
                { name: "Slab Leak Detection Boonton", url: "https://slableakdetectionspecialistboonton.vercel.app/" },
                { name: "Polybutylene Pipe Replacement Boonton", url: "https://polybutylenepipereplacementboonton.vercel.app/" }
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
              Professional Slab Leak Repair Services in Swarthmore, PA 19081
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
