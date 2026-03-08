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
  const primaryKeyword = "Burst Pipe Repair Swarthmore";
  const firmName = "Swarthmore Burst Pipe Repair Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "19081, 19018, 19064, 19078, 19023, 19050, 19074, 19096, 19041, 19033";
  const businessCords = { lat: 39.9026, lng: -75.3499 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{primaryKeyword} | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Expert ${primaryKeyword}. Professional emergency burst pipe repair services in Swarthmore PA. 24/7 water leak detection, pipe replacement, and water damage restoration. Serving Delaware County areas including ${zipCodes}. Call ${phoneNumber} for immediate burst pipe repair.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://burstpiperepairswarthmore.vercel.app/2.jpeg",
              "@id": "https://burstpiperepairswarthmore.vercel.app/",
              "url": "https://burstpiperepairswarthmore.vercel.app/",
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
                "https://burstpiperepairswarthmore.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Burst Pipe Repair Services",
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
                "name": "Emergency Burst Pipe Detection & Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Burst Pipe Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Water Leak Detection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pipe Replacement & Repiping"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Water Damage Restoration"
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
        title={<span>Burst Pipe Repair <br /><span className="text-amber-400">Swarthmore PA</span></span>}
        subtitle={`Professional emergency burst pipe repair and water leak detection services for homes and businesses in Swarthmore. Expert plumbers specializing in burst pipe replacement, repiping, and complete water damage restoration. Serving all Delaware County areas including 19081, 19018, 19064, 19078, 19023, 19050. Call ${phoneNumber} for immediate emergency burst pipe services.`}
        badge="SWARTHMORE BURST PIPE REPAIR PROS"
        phone={rawPhone}
      />

      {/* Burst Pipe Repair Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Emergency <span className="text-indigo-600">Burst Pipe Detection Services</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional burst pipe detection technicians use advanced electronic equipment and acoustic listening devices to precisely locate water leaks in your Swarthmore home.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From frozen pipe bursts to corrosion-related failures, our team has the expertise to handle any burst pipe situation in Swarthmore and surrounding Delaware County communities quickly and professionally, minimizing water damage and restoration costs.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">24/7 emergency burst pipe response and water extraction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Advanced leak detection using professional-grade equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete pipe replacement and repiping services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Water damage restoration and mold prevention</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/2.jpeg" alt="Professional burst pipe detection service in Swarthmore PA" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Leak Detection Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency pipe replacement and repair Swarthmore" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Burst Pipe Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Swarthmore and throughout Delaware County, our burst pipe specialists have developed proven strategies for repairing even the most complex pipe failures.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just fix the burst—we assess the entire plumbing system, identify potential weak points, and help prevent future bursts. Our comprehensive approach ensures your pipes stay leak-free longer.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Advanced Detection Technology</h3>
                    <p className="text-slate-600 text-sm">We use electronic amplifiers, thermal imaging cameras, and pressure testing for accurate leak location.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Water Damage Prevention</h3>
                    <p className="text-slate-600 text-sm">Our rapid response minimizes structural damage and prevents mold growth from water intrusion.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Burst Pipe Causes</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Burst pipes can occur due to various factors. Here are the most common situations we handle in Swarthmore:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Frozen Pipe Bursts</h3>
                <p className="text-slate-600 mb-4">When water freezes inside pipes, it expands and creates immense pressure that can cause pipes to burst, especially in unheated areas.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: No water flow, visible frost on pipes, bulging pipe sections, strange odors</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Corrosion & Age</h3>
                <p className="text-slate-600 mb-4">Older pipes made from galvanized steel or copper can corrode over time, weakening pipe walls until they eventually burst under normal pressure.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Discolored water, reduced water pressure, frequent small leaks, visible rust</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">High Water Pressure</h3>
                <p className="text-slate-600 mb-4">Excessively high water pressure puts stress on pipe joints and connections, eventually causing weak points to fail and pipes to burst suddenly.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Banging pipes, leaking faucets, appliance failures, multiple pipe failures</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Burst pipe repair equipment and tools Swarthmore PA" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency burst pipe repair experts provide comprehensive service throughout Swarthmore and all surrounding Delaware County communities. No matter where you're located in our service area, we're ready to respond quickly.
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
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Burst Pipe Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Certified Water Damage Restoration</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Service</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Burst Pipe Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Burst Pipe <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about burst pipe repair, costs, insurance coverage, and plumbing solutions in Swarthmore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "How much does it usually cost to fix a burst pipe?", a: "Professional burst pipe repair typically costs between $500-$2,500 depending on location, accessibility, and extent of water damage. Emergency services may cost more." },
                { q: "How much should it cost to fix a burst pipe?", a: "Fair pricing for burst pipe repair ranges from $500-$2,500 for standard repairs. Complex cases requiring extensive water damage restoration can reach $5,000+." },
                { q: "What is the 135 rule in plumbing?", a: "The 135 rule refers to avoiding sharp 90-degree turns in drainage pipes. Instead, use two 45-degree elbows or a long-radius 90 for better water flow." },
                { q: "Does homeowners insurance typically cover burst pipes?", a: "Most homeowners insurance policies cover sudden and accidental burst pipe damage, but exclude gradual damage from neglect or lack of maintenance." },
                { q: "Can I fix a burst pipe myself?", a: "While temporary DIY fixes exist, professional repair is strongly recommended. Improper repairs can lead to extensive water damage and mold growth." },
                { q: "Would a burst pipe be covered by insurance?", a: "Yes—if the burst was sudden and accidental. Insurance typically covers resulting water damage but not the pipe repair itself in all cases." },
                { q: "How long does it take a plumber to fix a burst pipe?", a: "Most burst pipe repairs take 2-6 hours depending on accessibility. Complete water damage restoration may take several days." },
                { q: "Can a handyman fix a leaking pipe?", a: "Handymen can handle minor leaks, but burst pipes require licensed plumbers for proper repair and code compliance." },
                { q: "How much would a plumber charge for 3 hours?", a: "Plumbers typically charge $150-$450 for 3 hours of work, including service call fees and labor rates varying by region." },
                { q: "Do plumbers fix burst pipes?", a: "Yes—licensed plumbers specialize in burst pipe repair, pipe replacement, and complete repiping services for residential and commercial properties." },
                { q: "Is it cheaper to replace or repair pipes?", a: "Spot repairs are cheaper short-term ($500-$2,500), but whole-house repiping ($5,000-$15,000) may be more cost-effective for older homes with multiple issues." },
                { q: "What is the most expensive plumbing issue?", a: "Sewer line replacement and extensive water damage from burst pipes are among the costliest, potentially reaching $10,000-$25,000+." },
                { q: "How much does a plumber charge to fix a burst pipe?", a: "Expect to pay $500-$2,500 for burst pipe repair, plus additional costs for water extraction and restoration if needed." },
                { q: "How do plumbers find hidden leaks?", a: "Plumbers use electronic leak detectors, thermal imaging cameras, acoustic listening devices, and pressure testing to locate hidden leaks." },
                { q: "What not to do after water damage?", a: "Don't ignore it, use electrical appliances in wet areas, or attempt major repairs without professional assessment. Call professionals immediately." },
                { q: "Do homeowners insurance cover burst pipes?", a: "Coverage varies by policy, but most cover sudden bursts. Gradual damage from corrosion or freezing due to neglect may be excluded." },
                { q: "How much does a plumber charge to fix a leaking pipe?", a: "Minor leak repairs cost $150-$500, while accessible pipe replacements range from $500-$1,500 depending on materials and labor." },
                { q: "Who is responsible for a burst pipe?", a: "Homeowners are responsible for plumbing within their property lines. Contact your insurance company immediately to determine coverage." },
                { q: "How long will it take to fix a burst pipe?", a: "Simple repairs take 2-4 hours. Complex cases requiring wall/floor access and restoration can take 1-3 days." },
                { q: "Who is liable for burst pipes?", a: "Property owners are liable for burst pipes on their property. Renters should contact landlords; condo owners check HOA responsibilities." },
                { q: "How do you tell if a drain pipe is broken underground?", a: "Signs include sewage odors, soggy patches in yard, slow drains, gurgling sounds, and unexplained increases in water bills." },
                { q: "Can a plumber fix a burst pipe?", a: "Yes—plumbers are trained and equipped to handle all types of burst pipe emergencies with professional repair techniques." },
                { q: "What is the most common plumbing leak?", a: "Faucet drips and toilet running issues are most common, but burst pipes cause the most significant damage." },
                { q: "What should you do if your pipes burst?", a: "Immediately shut off main water supply, call emergency plumber, document damage for insurance, and begin water extraction." },
                { q: "How much does a plumber charge to fix a busted pipe?", a: "Busted pipe repair costs $500-$2,500 on average, with emergency after-hours service adding $100-$300 to the total." },
                { q: "How do plumbers detect hidden leaks?", a: "Professional plumbers use thermal imaging, electronic amplifiers, tracer gas, and video camera inspection for hidden leak detection." },
                { q: "Are collapsed drains covered by house insurance?", a: "Coverage depends on cause—sudden collapse may be covered, but wear-and-tear or tree root intrusion typically isn't." },
                { q: "Does homeowners insurance pay for burst pipes?", a: "Most policies pay for water damage from sudden bursts, but may deny claims for preventable freezing or corrosion damage." },
                { q: "How much does a plumber cost to fix a leaky pipe?", a: "Leaky pipe repairs range from $150-$1,500 depending on location, accessibility, and whether repiping is necessary." },
                { q: "Can I fix a leaking pipe myself?", a: "Temporary fixes like pipe clamps or epoxy putty work short-term, but permanent professional repair prevents future damage." },
                { q: "How much does a plumber charge for a call out?", a: "Plumber service call fees range from $75-$200, often applied toward total repair cost if you proceed with the work." }
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
                { name: "Slab Leak Repair Swarthmore", url: "https://slableakrepairswarthmore.vercel.app/" },
                { name: "Leaking Pipe Repair Modesto", url: "https://leakingpiperepairinmodesto.vercel.app/" },
                { name: "Cast Iron Pipe Replacement Boonton", url: "https://castironpipereplacementboonton.vercel.app/" },
                { name: "Trenchless Sewer Repair Scottsdale", url: "https://trenchlesssewerrepairscottsdaleaz.vercel.app/" }
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
              Professional Burst Pipe Repair Services in Swarthmore, PA 19081
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
