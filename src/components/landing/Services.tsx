import { ShieldCheck, Bug, Search, Clock, Zap, Target, Waves, Activity, Radio, Thermometer, Shield, Droplets } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Centipede Extermination",
    description: "Our Mililani exterminators use high-intensity, Hawaii-grade formulas to eliminate existing centipede populations inside your home on contact."
  },
  {
    icon: Target,
    title: "Nest Eradication",
    description: "We track centipede activity back to the source, identifying and destroying nesting sites in mulch, soil, and structural wall voids throughout Mililani."
  },
  {
    icon: Shield,
    title: "Perimeter Barrier Defense",
    description: "Creation of a massive chemical and physical barrier around your Mililani property that centipedes cannot cross, ensuring 24/7 exterior protection."
  },
  {
    icon: Search,
    title: "Property Risk Audits",
    description: "Thorough inspection of your Mililani residence to identify moisture traps, entry points, and habitat attractants that bring centipedes to your doorstep."
  },
  {
    icon: Zap,
    title: "Rapid Flush Treatment",
    description: "Specialized service to flush out and eliminate centipedes hiding in hard-to-reach areas of your Mililani house, providing immediate relief."
  },
  {
    icon: Activity,
    title: "Maintenance Programs",
    description: "Ongoing preventative care for Mililani homes to maintain protection through Hawaii's wet seasons when centipede activity is at its highest."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap text-nowrap">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Professional <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipedes Extermination Mililani</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Hawaii's toughest centipedes require Mililani's most advanced extermination methods. We provide permanent solutions that safeguard your home and family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
