import { ShieldCheck, Zap, Droplets, MapPin, Search, Thermometer, Activity, Shield, Home, Phone, Wrench } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "Elkhorn Plumbing Health",
            desc: "Elkhorn NE's local infrastructure requires vigilant pipe health monitoring. Regular inspections can prevent minor leaks from becoming major structural catastrophes for Elkhorn families."
        },
        {
            icon: Search,
            title: "When to Call",
            desc: "Elkhorn homeowners should contact a pro at the first sign of a slow drain or moist spot. Early detection in Nebraska homes saves thousands in water damage remediation."
        },
        {
            icon: Droplets,
            title: "Modern Repair Tech",
            desc: "Our Elkhorn technicians utilize digital leak detection and sewer cameras. We find the exact source of your plumbing problem without unnecessary demolition of your Elkhorn property."
        },
        {
            icon: Shield,
            title: "Asset Protection",
            desc: "Quality plumbing repairs by Elkhorn specialists preserve your property value and ensure your home remains a safe environment for your family in the long term."
        },
        {
            icon: Activity,
            title: "Infrastructure Impact",
            desc: "Aging pipes in Elkhorn can see pressure drops and contamination risks. Our localized replacement services restore pure flow and optimal pressure to Nebraska households."
        },
        {
            icon: Thermometer,
            title: "System Calibration",
            desc: "Beyond repairs, our Elkhorn team ensures your water heaters and pressure valves are perfectly calibrated for Nebraska's specific environmental conditions."
        }
    ];

    return (
        <div className="bg-white py-24 text-nowrap">
            <div className="container mx-auto px-4 text-nowrap">
                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-bold uppercase tracking-widest text-nowrap">
                            <MapPin className="w-4 h-4 text-nowrap" />
                            Elkhorn Nebraska Plumbing Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight text-nowrap">
                            Advanced <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Plumbing Solutions Elkhorn NE</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                Elkhorn NE homeowners trust us for advanced residential and commercial plumbing solutions. We combine years of local experience with the latest diagnostic technology to solve your toughest plumbing challenges quickly.
                            </p>
                            <p>
                                Our comprehensive approach in Elkhorn ensures that every pipe, valve, and fixture in your home is operating at peak performance. We don't just fix symptoms; we address the root cause of your Elkhorn NE plumbing issues.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4 text-nowrap">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-nowrap">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Nebraska Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Elkhorn Standards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-nowrap">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">24-Hour Service</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Elkhorn Emergency Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/4.jpeg"
                            alt="Plumbing services in Elkhorn NE"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100 text-nowrap">
                    <div className="text-center max-w-3xl mx-auto mb-16 text-nowrap">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight text-nowrap">
                            Elkhorn <span className="text-indigo-600 border-b-4 border-indigo-600/20 text-nowrap">Plumbing Expertise</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic text-nowrap">
                            Critical information for Elkhorn NE residents regarding modern plumbing systems, maintenance schedules, and professional repair services.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-nowrap">
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
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 text-nowrap" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left text-nowrap">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Need an Expert Plumber in Elkhorn?</h3>
                                <p className="text-slate-400 font-medium italic">Our Elkhorn experts provide same-day localized plumbing service.</p>
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
