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
  const primaryKeyword = "Drain Cleaning Evansville Indiana";
  const firmName = "Evansville Drain Cleaning Pros";
  const phoneNumber = "(877) 792-1410";
  const rawPhone = "8777921410";
  const zipCodes = "47708, 47710, 47711, 47712, 47713, 47714, 47715, 47716, 47719, 47720, 47721, 47722, 47724, 47725, 47727, 47728, 47730, 47731, 47732, 47733, 47734, 47735, 47736, 47737, 47739, 47740, 47741, 47744, 47747, 47750";
  const businessCords = { lat: 37.9716, lng: -87.5711 };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Drain Cleaning Evansville Indiana | {firmName} | Call {phoneNumber}</title>
        <meta name="description" content={`Professional ${primaryKeyword}. Expert drain cleaning technicians providing rapid clog removal, sewer line cleaning, and hydro jetting in Evansville and surrounding areas including zip codes ${zipCodes}. Call ${phoneNumber} now for emergency drain services.`} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "${firmName}",
              "image": "https://draincleaningevansvilleindiana.vercel.app/2.jpeg",
              "@id": "https://draincleaningevansvilleindiana.vercel.app/",
              "url": "https://draincleaningevansvilleindiana.vercel.app/",
              "telephone": "${rawPhone}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Street Service Center",
                "addressLocality": "Evansville",
                "addressRegion": "IN",
                "postalCode": "47708",
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
                "https://draincleaningevansvilleindiana.vercel.app/"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Drain Cleaning Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "${firmName}"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Evansville"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Emergency Drain Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Drain Snaking"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hydro Jetting Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sewer Line Cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Camera Inspection"
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
        title={<span>Drain Cleaning <br /><span className="text-amber-400">Evansville Indiana</span></span>}
        subtitle={`Professional drain cleaning services for homes and businesses in Evansville. Expert technicians specializing in emergency clog removal, hydro jetting, and sewer line cleaning from kitchens, bathrooms, and main drains. Serving all Vanderburgh County areas including 47708, 47710, 47711, 47712, 47713, 47714, 47715, 47716. Call ${phoneNumber} for immediate emergency drain services.`}
        badge="EVANSVILLE DRAIN CLEANING PROS"
        phone={rawPhone}
      />

      {/* Drain Cleaning Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Expert <span className="text-indigo-600">Drain Cleaning Services</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our professional drain cleaning technicians use specialized equipment and techniques to safely remove stubborn clogs, clear blocked drains, and restore proper flow to your plumbing system. We understand the urgency and health risks associated with drain blockages in Evansville.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  From kitchen sinks to main sewer lines, our team has the expertise to handle any drain clog situation in Evansville and surrounding Vanderburgh County communities quickly and professionally, ensuring complete clearance and odor elimination.
                </p>
                <ul className="space-y-3 mt-8">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Complete drain cleaning using professional-grade equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Same-day emergency response for severe blockages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Hydro jetting and camera inspection technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">Family and pet-safe cleaning methods</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/2.jpeg" alt="Professional drain cleaning service in Evansville Indiana" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2">Clog Removal Guaranteed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-last md:order-first">
                <img src="/3.jpeg" alt="Emergency drain snaking and hydro jetting specialists Evansville" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Why Choose <span className="text-indigo-600">Our Drain Cleaning Experts</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  With years of experience serving Evansville and throughout Vanderburgh County, our drain cleaning specialists have developed proven strategies for eliminating even the most stubborn clogs and blockages from drains and sewer lines.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We don't just clear the drain—we inspect the entire line, identify root causes, and help prevent future blockages. Our comprehensive approach ensures your drains flow freely and stay clear longer.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Bug className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Advanced Equipment</h3>
                    <p className="text-slate-600 text-sm">We use motorized drain snakes, hydro jetters, and camera inspection technology for effective clearing.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <Home className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">Property Protection</h3>
                    <p className="text-slate-600 text-sm">Our techniques are safe for all pipe types and prevent damage to your plumbing system.</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Common <span className="text-indigo-600">Drain Clog Sources</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Drain clogs can occur in various locations. Here are the most common situations we handle in Evansville:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Kitchen Sink Drains</h3>
                <p className="text-slate-600 mb-4">Grease, food particles, and soap scum buildup can block kitchen drains and cause slow drainage.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Slow draining, gurgling sounds, foul odors from sink</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Bug className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Main Sewer Line Blockages</h3>
                <p className="text-slate-600 mb-4">Tree roots, grease buildup, or collapsed pipes can block the main sewer line and cause multiple drain backups.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Multiple clogs, toilets bubbling, water backing up in drains</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">Bathroom & Shower Drains</h3>
                <p className="text-slate-600 mb-4">Hair, soap residue, and mineral deposits can accumulate and block bathroom drains and shower stalls.</p>
                <p className="text-slate-600 text-sm font-medium">Signs: Standing water in shower, slow toilet flush, sink backup</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img src="/4.jpeg" alt="Drain cleaning equipment and tools Evansville Indiana" className="rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">Areas We <span className="text-indigo-600">Proudly Serve</span></h2>
            <p className="text-slate-600 text-lg mb-12 max-w-3xl mx-auto">
              Our emergency drain cleaning experts provide comprehensive service throughout Evansville and all surrounding Vanderburgh County communities. No matter where you're located in our service area, we're ready to respond quickly.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Evansville", "Newburgh", "Chandler", "Boonville", "Mount Vernon", "Haubstadt", "Fort Branch", "Princeton"].map((city) => (
                <span key={city} className="px-6 py-3 bg-indigo-50 rounded-2xl text-sm font-bold text-indigo-700 uppercase tracking-wide">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-slate-600 font-medium">
              Serving Evansville and all surrounding Vanderburgh County areas including zip codes 47708, 47710, 47711, 47712, 47713, 47714, 47715, 47716
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Licensed Drain Cleaning Specialists</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">Certified Plumbing Technicians</span>
            <div className="h-6 w-px bg-slate-300 hidden md:block" />
            <span className="text-lg font-black tracking-tighter text-slate-400 uppercase">24/7 Emergency Service</span>
          </div>
        </div>
      </div>

      <Services />
      <WhyUs />
      <Contact />

      {/* Drain Cleaning Questions Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">Drain Cleaning <span className="text-indigo-600">Questions Answered</span></h2>
              <p className="text-slate-600 text-xl max-w-3xl mx-auto">
                Get expert answers to your most pressing questions about drain cleaning, costs, safety protocols, and plumbing maintenance in Evansville.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { q: "What is the average cost of drain cleaning?", a: "Professional drain cleaning typically costs between $150-$400 for standard clogs, or $200-$800 for main line blockages depending on severity and location." },
                { q: "Why do plumbers say not to use drain cleaner?", a: "Chemical drain cleaners can damage pipes, especially older metal ones, and often fail to remove the entire clog, making professional clearing more difficult." },
                { q: "How much does Roto Rooter charge to clean a main sewer line?", a: "Roto Rooter typically charges $350-$600 for main sewer line cleaning, though prices vary based on blockage severity and regional rates." },
                { q: "What do plumbers recommend instead of Drano?", a: "Plumbers recommend mechanical methods like plungers, drain snakes, or hydro jetting, plus natural solutions like baking soda followed by vinegar." },
                { q: "Why is snaking a drain so expensive?", a: "Professional snaking requires specialized equipment, trained technicians, and often involves difficult access or severe blockages requiring significant labor." },
                { q: "Can you clear a main sewer line clog yourself?", a: "Minor clogs may respond to DIY methods, but main line blockages typically require professional equipment like motorized augers or hydro jetting." },
                { q: "Is professional drain cleaning worth it?", a: "Yes—professional cleaning thoroughly removes clogs, identifies underlying issues, and prevents future problems, saving money long-term." },
                { q: "How much does Roto Rooter charge to unclog a shower drain?", a: "Roto Rooter shower drain unclogging typically costs $150-$300 depending on clog severity and access difficulty." },
                { q: "Can snaking a drain make a clog worse?", a: "Improper snaking technique can scratch pipes, push clogs deeper, or damage pipe joints, potentially worsening the situation." },
                { q: "Is it okay to pour all-purpose cleaner down the drain?", a: "No—all-purpose cleaners aren't designed for drains and can harm plumbing systems or wastewater treatment facilities." },
                { q: "Why should you never use baking soda and vinegar to unclog a drain?", a: "While safe, the reaction is too weak to clear serious clogs and may create pressure buildup in severely blocked drains." },
                { q: "Can I unclog a drain myself?", a: "Simple clogs often respond to plunging, manual drain snakes, or natural remedies, but persistent blockages need professional help." },
                { q: "How often should household drains be cleaned?", a: "Professional cleaning every 18-22 months prevents buildup and identifies potential issues before emergencies occur." },
                { q: "How much should it cost to clear a clogged drain?", a: "Standard drain clearing averages $150-$400, while complex jobs or main line blockages range $200-$800." },
                { q: "Is Drano actually bad for your pipes?", a: "Yes—Drano's corrosive chemicals can damage older metal pipes, weaken PVC over time, and create hazardous fumes." },
                { q: "What do plumbers recommend to unclog drains?", a: "Plumbers recommend mechanical removal using snakes or hydro jetting, plus preventive maintenance like regular cleaning and drain screens." },
                { q: "What is better, Drano or Liquid Plumber?", a: "Neither is ideal—both contain harsh chemicals. Mechanical methods are safer and more effective for persistent clogs." },
                { q: "How do I unclog my main sewer line?", a: "Call a professional plumber who will use camera inspection, motorized augers, or hydro jetting to safely clear the blockage." },
                { q: "What are signs of a blocked drain?", a: "Slow drainage, gurgling sounds, foul odors, water backing up in other fixtures, or multiple drains clogging simultaneously." },
                { q: "Will homeowners insurance cover sewer line repair?", a: "Coverage varies—many policies require separate sewer backup endorsement. Review your policy details carefully for specific coverage." },
                { q: "What is the best drain cleaner that won't harm pipes?", a: "Enzyme-based cleaners are safest for pipes, though mechanical methods like snakes or hydro jetting are most effective." },
                { q: "What do I do if I can't clear the clog?", a: "Stop using chemical products, avoid running water, and call a professional plumber with proper equipment and expertise." },
                { q: "Why can't you use a plunger with Drano?", a: "Plunging after using Drano can splash corrosive chemicals onto skin or eyes, causing serious injury." },
                { q: "What is the average price to unblock a drain?", a: "Professional drain unblocking averages $200-$400 for standard clogs, or $350-$800 for main line blockages." },
                { q: "How much does a plumber charge to run a snake?", a: "Professional drain snaking typically costs $200-$500 depending on clog location, severity, and time required." },
                { q: "Is sewer jetting worth it?", a: "Yes—hydro jetting thoroughly cleans pipe walls and removes roots/grease buildup more effectively than traditional snaking." },
                { q: "Why pour vinegar down the drain in October?", a: "This is a myth—there's no special benefit to pouring vinegar down drains in October specifically." },
                { q: "Why do plumbers not like Drano?", a: "Drano damages pipes, creates safety hazards, and often fails to completely remove clogs, complicating professional repairs." },
                { q: "What do plumbers recommend to clean drains?", a: "Plumbers recommend regular mechanical cleaning, drain screens, avoiding grease disposal down sinks, and professional maintenance." },
                { q: "How much does a roto rooter charge to snake a drain?", a: "Roto Rooter drain snaking typically costs $200-$500 depending on clog severity and drain location." },
                { q: "What is the 135 rule in plumbing?", a: "The 135-degree rule refers to proper pipe angles for drainage to prevent clogs and ensure proper waste flow through the system." },
                { q: "Is a drain snake or Drano better?", a: "Drain snakes are far superior—they physically remove clogs without damaging pipes, unlike harsh chemical cleaners." }
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
                { name: "Earwig Extermination Denver", url: "https://earwigexterminatordenver.vercel.app/" },
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
              Professional Drain Cleaning Services in Evansville, IN 47708
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
