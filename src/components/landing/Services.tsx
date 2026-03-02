import { ShieldCheck, Droplets, Thermometer, Clock, Wrench, Zap, Activity, Search } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Annual Tankless Heater Flush",
    description: "Our Glencoe technicians perform a thorough flush of your tankless water heater using food-grade white vinegar or professional descaling solution to dissolve and remove mineral deposits that reduce efficiency."
  },
  {
    icon: Thermometer,
    title: "Descaling & Mineral Removal",
    description: "Hard water in Glencoe IL causes calcium and lime buildup inside your heat exchanger. We fully descale your system to restore optimal heat transfer and hot water output to your home."
  },
  {
    icon: Wrench,
    title: "System Diagnostics",
    description: "Beyond the flush, our Glencoe specialists inspect filters, valves, error codes, and venting to identify any hidden issues that could lead to costly breakdowns in your tankless water heater."
  },
  {
    icon: Zap,
    title: "Efficiency Optimization",
    description: "After flushing, we verify your Glencoe tankless heater is operating at peak BTU efficiency, check temperature settings, and calibrate the unit for maximum energy savings and hot water delivery."
  },
  {
    icon: Activity,
    title: "Preventative Maintenance Programs",
    description: "Ongoing seasonal care for Glencoe IL homeowners to keep your tankless system performing year-round. Scheduled maintenance prevents unexpected cold showers and extends heater lifespan significantly."
  },
  {
    icon: Search,
    title: "Emergency Tankless Service",
    description: "Facing unexpected issues with your Glencoe tankless water heater? Our certified specialists are available 24/7 for diagnostics, repairs, and emergency flushing services across the Glencoe area."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap text-nowrap">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Professional <span className="text-indigo-600 border-b-4 border-indigo-600/20">Tankless Water Heater Flush Glencoe IL</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Glencoe's hard water demands expert maintenance. We provide complete tankless heater flushing services that protect your investment and keep your hot water running reliably.
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
