import { ShieldCheck, Clock, Zap, Shield, Droplets, Wrench } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Glencoe Flush Guarantee",
    description: "Our Glencoe technicians back every tankless water heater flush with a satisfaction guarantee. If your system isn't performing better after our service, we return at no charge."
  },
  {
    icon: Droplets,
    title: "Free Glencoe Estimates",
    description: "Exclusively for Glencoe IL homeowners, we provide free on-site assessments to determine the level of mineral buildup, required descaling solution, and estimated flush time."
  },
  {
    icon: Zap,
    title: "Fast Same-Day Service",
    description: "Our Glencoe-based plumbers can often schedule a tankless water heater flush the same day you call. We understand you can't be without hot water for long."
  },
  {
    icon: Shield,
    title: "Eco-Safe Descaling",
    description: "We use food-grade, non-toxic descaling solutions in all Glencoe flush jobs — safe for your family, your pipes, and the environment while being highly effective on calcium deposits."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden text-nowrap text-nowrap">
      <div className="container mx-auto px-4 text-nowrap">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-6xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Glencoe's <span className="text-indigo-600 border-b-4 border-indigo-600/20">Tankless Heater Experts</span> <br />
            Illinois-Certified Service
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto italic">
            Glencoe homes deserve experts who understand local hard water conditions. Our technicians have flushed hundreds of tankless systems across Glencoe and the North Shore Illinois area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative text-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />
            <img
              src="/1.jpeg"
              alt="Tankless Water Heater Flush Specialists in Glencoe Illinois"
              className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white mx-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-3xl shadow-xl z-20 border border-indigo-500 max-w-[240px]">
              <p className="text-4xl font-bold mb-1 uppercase tracking-tighter">IL</p>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">The Protection Glencoe Homeowners Trust</p>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Certified Glencoe Plumbers",
                desc: "Our team holds Illinois plumbing certifications and manufacturer-specific credentials for all major tankless water heater brands serviced in Glencoe, IL."
              },
              {
                title: "North Shore Hard Water Experts",
                desc: "We know Glencoe's municipal water has high mineral content. Our flush protocols are specifically calibrated for Illinois North Shore water conditions."
              },
              {
                title: "Local Glencoe Service",
                desc: "Being based locally means we can respond to Glencoe tankless heater emergencies faster than national chains, often the same day you call."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xl border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  <Wrench className="w-7 h-7 text-indigo-600" />
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
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 text-center sm:text-left">Glencoe IL Tankless Issue?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none text-center sm:text-left text-nowrap">Call Glencoe Experts</h4>
                </div>
                <a
                  href="tel:8777921410"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center w-full sm:w-auto text-nowrap"
                >
                  (877) 792-1410
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
