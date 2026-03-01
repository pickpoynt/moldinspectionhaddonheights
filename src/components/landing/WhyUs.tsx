import { ShieldCheck, Clock, Award, Hammer, Wrench, Shield, Search, Zap, Target, Thermometer, Radio, Bug } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Sting-Free Home Guarantee",
    description: "Our Mililani extermination protocols are so rigorous that we guarantee your home will remain free of invasive centipedes between our visits."
  },
  {
    icon: Search,
    title: "Free Mililani Audits",
    description: "Exclusively for Mililani residents, we offer free property inspections to identify centipede entry points and moisture-heavy nesting areas."
  },
  {
    icon: Zap,
    title: "Instant Kill Barrier",
    description: "Our specialized Hawaii pest control formulas act instantly on centipedes in Mililani homes while remaining safe for children and pets once dry."
  },
  {
    icon: Shield,
    title: "Oahu Eco-Safe Pests",
    description: "We use targeted, eco-conscious treatments in Mililani that protect Hawaii's unique biodiversity while ensuring total pest elimination."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden text-nowrap text-nowrap">
      <div className="container mx-auto px-4 text-nowrap">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Mililani's <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede Experts</span> <br />
            Hawaii-Certified Control
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">
            Centipedes in Mililani are more than just pests—they are threats. We have spent years perfecting the science of Hawaii centipede extermination for Oahu families.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />
            <img
              src="/1.jpeg"
              alt="Centipede Extermination Specialists in Mililani Hawaii"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1 uppercase tracking-tighter">OAHU</p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">The Level of Protection Mililani Deserves</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Precision Colony Elimination",
                desc: "We don't just kill the ones you see. Our Mililani team uses baiting and tracking to wipe out the entire local centipede colony."
              },
              {
                title: "Structural Sealing Guard",
                desc: "We identify and advise on sealing tiny cracks in Mililani home foundations that Hawaii centipedes use as superhighways into your house."
              },
              {
                title: "Local Mililani Service",
                desc: "Being based in Oahu means we can respond to Mililani centipede emergencies faster than national corporate pest control chains."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <Bug className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium italic text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Invasive Centipede Issue?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left text-nowrap">Call Mililani Experts</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
