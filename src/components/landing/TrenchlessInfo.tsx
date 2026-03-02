import { ShieldCheck, Zap, Droplets, MapPin, Search, Thermometer, Activity, Shield, Home, Phone, Wrench } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "Glencoe Water Hardness",
            desc: "Glencoe IL municipal water registers high in calcium and magnesium, making annual flushing essential. Hard water deposits can reduce tankless heater efficiency by up to 30% if untreated."
        },
        {
            icon: Search,
            title: "When to Flush",
            desc: "Glencoe homeowners should flush their tankless water heater annually. In areas with very hard water like the North Shore, twice-yearly flushing may be recommended for peak performance."
        },
        {
            icon: Droplets,
            title: "Descaling Process",
            desc: "Our Glencoe technicians isolate the unit, connect a pump and reservoir of descaling solution, and circulate it for 45-60 minutes to thoroughly dissolve calcium and mineral scale buildup."
        },
        {
            icon: Shield,
            title: "Long-Term Protection",
            desc: "Regular flushing by Glencoe specialists prevents heat exchanger corrosion, protects the warranty on your unit, and avoids the $1,000+ cost of premature heater replacement."
        },
        {
            icon: Activity,
            title: "Efficiency Impact",
            desc: "A neglected tankless heater in Glencoe can see energy costs rise significantly as scale forces the unit to work harder. A professional flush restores factory efficiency ratings."
        },
        {
            icon: Thermometer,
            title: "Temperature & Pressure Check",
            desc: "Beyond descaling, our Glencoe team verifies temperature settings, checks inlet/outlet pressure, inspects the burner assembly, and ensures the relief valve is functioning correctly."
        }
    ];

    return (
        <div className="bg-white py-24 text-nowrap text-nowrap">
            <div className="container mx-auto px-4">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest text-nowrap">
                            <MapPin className="w-4 h-4" />
                            Glencoe Illinois Plumbing Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight text-nowrap text-nowrap">
                            Superior <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20">Tankless Heater Flush Glencoe IL</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                Glencoe IL's hard water is tough on tankless water heaters. Without regular professional flushing, mineral scale accumulates inside the heat exchanger, drastically reducing efficiency and shortening the life of your unit.
                            </p>
                            <p>
                                Our specialized tankless flush process in Glencoe uses pharmaceutical-grade descaling solution circulated by a professional pump system. We remove years of mineral buildup in a single visit, restoring your system to like-new performance and protecting your manufacturer's warranty.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Illinois Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Glencoe Plumbing Standards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap text-nowrap">24-Hour Emergency</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap text-nowrap text-nowrap">Glencoe Heater Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Tankless Water Heater Flush and Descaling in Glencoe IL"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100 text-nowrap">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Glencoe <span className="text-indigo-600 border-b-4 border-indigo-600/20">Tankless Expertise</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Glencoe IL residents regarding tankless water heater maintenance, flushing schedules, and professional descaling services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {knowledgeItems.map((item, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-bold italic">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-slate-900 rounded-[3rem] p-12 overflow-hidden relative border border-indigo-500/20 shadow-2xl text-nowrap">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Need a Tankless Heater Flush in Glencoe?</h3>
                                <p className="text-slate-400 font-medium italic">Our Glencoe experts provide same-day Illinois tankless heater service.</p>
                            </div>
                            <a
                                href="tel:8777921410"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse text-nowrap"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
                                (877) 792-1410
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
