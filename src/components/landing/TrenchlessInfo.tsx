import { Zap, Bug, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Colony Detection",
        description: "Advanced inspection techniques to locate ant nests and trails within your property structure.",
        icon: Zap
    },
    {
        title: "Targeted Treatment",
        description: "Precision application of professional-grade baits and treatments directly to ant colonies.",
        icon: Bug
    },
    {
        title: "Long-Term Protection",
        description: "Perimeter barriers and exclusion work to prevent future ant invasions year-round.",
        icon: ShieldCheck
    }
];

const TrenchlessInfo = () => {
    return (
        <section id="info" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-indigo-600/10 rounded-[3rem] rotate-3 blur-2xl group-hover:rotate-0 transition-transform duration-700" />
                        <img
                            src="/3.jpeg"
                            alt="Fairview Ant Extermination Treatment Process"
                            className="relative rounded-[2.5rem] shadow-2xl transition-transform group-hover:scale-[1.02] duration-700 h-[600px] object-cover w-full"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">
                            Our <span className="text-indigo-600">Treatment Process</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-12 italic font-medium border-l-4 border-indigo-600 pl-6">
                            We use a systematic approach to eliminate ant colonies and prevent reinfestation. Our proven methods target the source of the problem while ensuring the safety of your family and pets.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-6 items-center group">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors shadow-xl text-nowrap">
                                        <feature.icon className="w-6 h-6 text-white text-nowrap" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight text-nowrap">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm italic font-medium text-nowrap">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrenchlessInfo;
