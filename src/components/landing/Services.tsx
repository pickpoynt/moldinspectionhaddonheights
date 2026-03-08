import { Bug, Zap, ShieldCheck, Activity } from "lucide-react";

const services = [
  {
    title: "Electronic Slab Leak Detection",
    description: "Advanced electronic equipment and acoustic listening devices to precisely locate water leaks under concrete foundations.",
    icon: ShieldCheck
  },
  {
    title: "Copper Pipe Replacement Under Slab",
    description: "Professional copper pipe replacement and rerouting services to permanently fix leaks beneath your home's foundation.",
    icon: Zap
  },
  {
    title: "Foundation Leak Repair",
    description: "Comprehensive foundation leak repair and sealing to prevent water damage and structural issues in your concrete slab.",
    icon: Bug
  },
  {
    title: "Concrete Slab Pipe Repair",
    description: "Minimal invasive pipe repair techniques including epoxy lining and spot repairs to preserve your flooring and foundation.",
    icon: Activity
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">
              Professional <br /><span className="text-indigo-600">Slab Leak Services</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 italic font-medium border-l-4 border-indigo-600 pl-6">
              Our Swarthmore slab leak detection specialists use proven methods to locate and repair water leaks under concrete foundations. We provide complete pipe replacement and foundation repair services for your home.
            </p>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl group-hover:bg-indigo-600/20 transition-all" />
            <img
              src="/3.jpeg"
              alt="Swarthmore Slab Leak Repair Service"
              className="relative rounded-[2.5rem] shadow-2xl transition-transform group-hover:scale-[1.02] duration-700"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight uppercase">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
