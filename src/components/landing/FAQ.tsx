import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, DollarSign, Target, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Activity, Wrench, Shield, Waves, LucideIcon, Phone, Sun, Lightbulb, Frown } from "lucide-react";

const faqs = [
  {
    icon: DollarSign,
    question: "How much should it cost to flush a tankless hot water heater?",
    answer: "In Glencoe IL, a professional tankless water heater flush typically costs between $100 and $200 depending on the unit size, level of mineral buildup, and service provider. Our Glencoe team offers competitive flat-rate pricing with no hidden fees."
  },
  {
    icon: Clock,
    question: "How often should a tankless water heater be flushed?",
    answer: "Most manufacturers and plumbers recommend flushing your tankless water heater annually. In Glencoe IL where water hardness is significant, twice-yearly flushing may be advisable to prevent accelerated scale buildup."
  },
  {
    icon: Wrench,
    question: "Can I flush my tankless water heater myself?",
    answer: "Technically yes, but it requires a submersible pump, hoses, valves, and food-grade white vinegar or descaling solution. Many Glencoe homeowners prefer a certified plumber to ensure safety and complete mineral removal without voiding the warranty."
  },
  {
    icon: AlertCircle,
    question: "What happens if you don't flush your tankless hot water heater?",
    answer: "Neglecting to flush your Glencoe tankless heater allows scale to accumulate in the heat exchanger, drastically reducing efficiency, increasing energy bills, triggering error codes, and ultimately causing premature system failure."
  },
  {
    icon: FileText,
    question: "Is there an IRS tax credit for a tankless water heater?",
    answer: "Yes. Under the Inflation Reduction Act, homeowners in Glencoe IL may qualify for a federal tax credit of up to 30% (capped at $600) for installing a qualifying energy-efficient tankless water heater. Consult a tax professional for specifics."
  },
  {
    icon: TrendingUp,
    question: "What is the typical life expectancy of a tankless water heater?",
    answer: "A properly maintained tankless water heater can last 20+ years — roughly twice the lifespan of a traditional tank heater. For Glencoe IL homeowners, regular annual flushing is the single most important maintenance task to achieve this."
  },
  {
    icon: Frown,
    question: "Why do plumbers not recommend tankless water heaters?",
    answer: "Some plumbers note higher upfront costs and installation complexity. However, most Glencoe plumbing experts agree that for homes with high hot water demand, the long-term energy savings and lifespan of tankless units make them the superior choice."
  },
  {
    icon: Info,
    question: "Is flushing the same as draining?",
    answer: "No. Draining simply removes water from the tank. Flushing involves circulating a descaling or vinegar solution through the heat exchanger to dissolve and remove mineral deposits — a much more thorough process for Glencoe IL tankless systems."
  },
  {
    icon: Search,
    question: "How do I know if my tankless water heater needs to be flushed?",
    answer: "Common signs in Glencoe homes include reduced hot water flow, longer wait times for hot water, unusual noises (popping or rumbling), error codes on the display, or noticeably higher gas or electric bills."
  },
  {
    icon: AlertCircle,
    question: "What is the most common issue with tankless water heaters?",
    answer: "Scale and mineral buildup from hard water is the most common issue for Glencoe IL tankless heater owners. This is entirely preventable with annual professional flushing from a certified Glencoe plumber."
  },
  {
    icon: Wrench,
    question: "Can you descale your own tankless water heater?",
    answer: "Yes, with the right equipment. You'll need a descaling pump kit, hoses, and descaling solution. However, improper technique can damage internal components. In Glencoe, it's strongly recommended to use a licensed professional."
  },
  {
    icon: Zap,
    question: "How much will my electric bill go up with a tankless water heater?",
    answer: "A well-maintained tankless electric water heater is typically 24–34% more energy efficient than traditional units for average Glencoe IL households. Without regular flushing, scale reduces this advantage significantly."
  },
  {
    icon: Droplets,
    question: "What's the difference between flushing and descaling?",
    answer: "Flushing is the broader process of circulating liquid through the system. Descaling specifically refers to using an acid-based or vinegar solution to dissolve calcium and mineral deposits. In Glencoe, a proper flush always includes descaling."
  },
  {
    icon: Shield,
    question: "What are the signs of a clogged tankless heater?",
    answer: "Glencoe IL residents should watch for error codes (typically 'scale' or 'maintenance' alerts), reduced hot water pressure, lukewarm water, the heater cycling on and off, or the unit shutting down completely during use."
  },
  {
    icon: CheckCircle,
    question: "Is vinegar safe for flushing a tankless heater?",
    answer: "Food-grade white vinegar (5% acidity) is safe and commonly used for flushing tankless heaters. For heavy mineral buildup common in Glencoe IL hard water areas, our technicians use stronger professional-grade citric acid descalers for more effective results."
  },
  {
    icon: DollarSign,
    question: "How much do plumbers charge to flush a water heater?",
    answer: "In the Glencoe IL area, expect to pay $100–$200 for a standard tankless water heater flush. The price may be higher if significant scale buildup requires extended circulation time or additional system maintenance."
  },
  {
    icon: HelpCircle,
    question: "Can I flush a tankless heater myself?",
    answer: "DIY flushing is possible with a descaling pump kit. However, Glencoe homeowners risk error if they don't properly isolate cold and hot service ports, use the correct solution dilution, or flush for the adequate duration. Professional service ensures thoroughness."
  },
  {
    icon: Sun,
    question: "How do I know it needs flushing?",
    answer: "Your Glencoe tankless unit will often display an error code for scale. Other signs include reduced water temperature, lower flow rates, unusual sounds, or if it's been over a year since the last professional maintenance visit."
  },
  {
    icon: Activity,
    question: "What are signs my tankless heater needs maintenance?",
    answer: "Beyond flushing signs, look for dripping from the unit, inconsistent hot water temperatures, error codes you haven't seen before, or the unit taking longer to ignite. In Glencoe, call our specialists for a full diagnostic."
  },
  {
    icon: Target,
    question: "Do I need to descale my tankless water heater if I have a water softener?",
    answer: "A water softener significantly reduces scale buildup, but doesn't eliminate it entirely. Glencoe IL homeowners with softeners may be able to extend their flush schedule to every 2–3 years rather than annually."
  },
  {
    icon: Waves,
    question: "Does sediment build up in a tankless water heater?",
    answer: "Yes. While tankless heaters don't have a storage tank to accumulate sediment like traditional heaters, mineral deposits (scale) do accumulate on the internal heat exchanger surfaces in Glencoe's hard water conditions."
  },
  {
    icon: Lightbulb,
    question: "Can I maintain my tankless water heater myself?",
    answer: "You can clean the inlet filter screen and check the air filter periodically. However, the internal descaling flush for Glencoe IL's hard water should be done by a certified plumber to protect your warranty and ensure complete scale removal."
  },
  {
    icon: TrendingUp,
    question: "Does flushing improve tankless heater efficiency?",
    answer: "Absolutely. Studies show that scale buildup as thin as 1/16 inch can reduce a tankless heater's efficiency by up to 10-20%. A professional flush in Glencoe restores full heat transfer efficiency, reducing your energy costs immediately."
  },
  {
    icon: Droplets,
    question: "Does flushing improve water quality?",
    answer: "Yes. Flushing removes mineral scale and any biofilm that can affect taste and odor. Glencoe IL homeowners often notice cleaner-tasting hot water and reduced sediment in the flow after a professional tankless water heater flush."
  }
];

const FAQCard = ({ icon: Icon, question, answer }: { icon: LucideIcon, question: string, answer: string }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-indigo-200 transition-all group h-full relative overflow-hidden">
    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-50 rounded-bl-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter leading-tight relative z-10">{question}</h3>
    <p className="text-slate-500 leading-relaxed text-sm font-medium italic relative z-10">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 text-nowrap">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Expert Knowledge Base — Glencoe IL
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Tankless Heater <span className="text-indigo-600 border-b-4 border-indigo-600/20">Expert FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential answers for Glencoe IL homeowners about tankless water heater flushing, descaling, maintenance costs, and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center text-nowrap">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Still have tankless heater questions?</p>
          <a href="tel:8777921410" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight">
            <Phone className="w-6 h-6" />
            (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
