import { ShieldCheck, Droplets, Thermometer, Clock, Wrench, Zap, Activity, Search } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Residential Plumbing Repair",
    description: "Our Elkhorn technicians perform a thorough inspection and repair of your home's plumbing systems. From leaky faucets to complex pipe re-routing, we handle it all for Elkhorn NE families."
  },
  {
    icon: Thermometer,
    title: "Water Heater Installation & Repair",
    description: "Hard water in Elkhorn NE can damage your water heater. We specialize in both traditional and tankless systems, ensuring your home always has hot water available when you need it most."
  },
  {
    icon: Wrench,
    title: "Drain Cleaning & Clog Removal",
    description: "Using professional-grade tools, our Elkhorn specialists clear blockages in your sinks, showers, and main sewer lines. We restoration full flow to your Elkhorn NE home's drainage system."
  },
  {
    icon: Zap,
    title: "Commercial Plumbing Services",
    description: "We provide high-capacity plumbing solutions for Elkhorn businesses. From restaurants to office buildings, our Elkhorn NE team delivers reliable, code-compliant service every time."
  },
  {
    icon: Activity,
    title: "Preventative Maintenance",
    description: "Ongoing seasonal care for Elkhorn NE homeowners to keep your plumbing systems performing year-round. Scheduled maintenance prevents unexpected leaks and extends component lifespan significantly."
  },
  {
    icon: Search,
    title: "Emergency 24/7 Service",
    description: "Facing a plumbing crisis in Elkhorn? Our certified specialists are available 24/7 for diagnostics, repairs, and emergency fixes across the entire Elkhorn NE area."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Professional <span className="text-indigo-600 border-b-4 border-indigo-600/20">Plumber Elkhorn NE</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Elkhorn's local plumbing landscape demands expert skill. We provide complete repair and maintenance services that protect your home and keep your water running reliably.
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
