import { ShieldCheck, Zap, Droplets, MapPin, Search, Radio, Thermometer, Target, Activity, Shield, Home, Phone, Bug } from "lucide-react";

const TrenchlessInfo = () => {
    const knowledgeItems = [
        {
            icon: ShieldCheck,
            title: "Oahu Centipede Biology",
            desc: "The Hawaii centipede (Scolopendra) in Mililani can exceed 8 inches. They are aggressive hunters that require professional residual barriers for complete exclusion."
        },
        {
            icon: Search,
            title: "Moisture Triggers",
            desc: "In Mililani, centipedes are attracted to lush landscaping and damp foundations. Managing irrigation and yard debris is vital to lowering Hawaii pest risk."
        },
        {
            icon: Bug,
            title: "Nest Eradication",
            desc: "Centipedes typically nest in dark, moist voids. Our Mililani technicians use specialized equipment to treat inside wall cavities and foundation logs."
        },
        {
            icon: Shield,
            title: "Long-Term Barriers",
            desc: "We apply Hawaii-rated micro-encapsulated formulas in Mililani that slowly release over months, keeping centipedes out of your living spaces."
        },
        {
            icon: Activity,
            title: "Seasonal Migration",
            desc: "During Mililani's rainy months, centipedes migrate towards dry structures. Proactive treatments in Hawaii are best before the heavy rains start."
        },
        {
            icon: Target,
            title: "Precision Defense",
            desc: "General spraying isn't enough for Hawaii centipedes. We target the exact cracks and crevices Mililani pests use for entry and daytime hiding."
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
                            Mililani Hawaii Pest Experts
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight uppercase tracking-tight text-nowrap text-nowrap">
                            Superior <br />
                            <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede Extermination Mililani</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium italic">
                            <p>
                                Hawaii centipedes are infamous for their resilience and painful, venomous stings. In Mililani, these pests thrive in the lush environment, often invading local homes in search of shelter and food.
                            </p>
                            <p>
                                Our specialized extermination process in Mililani utilizes advanced Oahu pest control barriers that are specifically formulated for Hawaii's invasive species. We combine nest eradication, chemical shielding, and structural advice for permanent relief.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight">Hawaii Certified</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap">Oahu Extermination Standards</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <Zap className="w-6 h-6 text-indigo-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-tight text-nowrap text-nowrap">24-Hour Emergency</h4>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest text-nowrap text-nowrap text-nowrap">Mililani Sighting Response</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-indigo-600/20 rounded-[3rem] blur-2xl opacity-30" />
                        <img
                            src="/3.jpeg"
                            alt="Centipede Identification and Extermination in Mililani"
                            className="rounded-[3rem] shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-square grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Knowledge Base Section */}
                <div id="knowledge-base" className="pt-24 border-t border-slate-100 text-nowrap">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Hawaii <span className="text-indigo-600 border-b-4 border-indigo-600/20">Pest Expertise</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium italic">
                            Critical information for Mililani residents regarding Hawaii centipede behavior, exclusion, and professional extermination.
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
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Facing a Centipede Infestation?</h3>
                                <p className="text-slate-400 font-medium italic">Our Mililani experts provide same-day Hawaii extermination.</p>
                            </div>
                            <a
                                href="tel:3238801224"
                                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-slate-200 transition-all shadow-xl group flex items-center gap-3 animate-pulse text-nowrap"
                            >
                                <Phone className="w-5 h-5 text-indigo-600 group-hover:rotate-12 transition-transform" />
                                (323) 880-1224
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrenchlessInfo;
