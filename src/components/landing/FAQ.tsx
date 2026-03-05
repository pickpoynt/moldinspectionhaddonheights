import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, DollarSign, Target, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Activity, Wrench, Shield, Waves, LucideIcon, Phone, Sun, Lightbulb, Frown } from "lucide-react";

const faqs = [
  {
    icon: DollarSign,
    question: "What do local plumbers charge per hour?",
    answer: "In Elkhorn NE, local plumbers typically charge between $75 and $150 per hour. Master plumbers at the top of their field may charge more, while apprentices or smaller outfits might be on the lower end. Our Elkhorn team provides transparent, competitive rates for all plumbing services."
  },
  {
    icon: Clock,
    question: "How much would a plumber charge for 3 hours?",
    answer: "For a 3-hour job in Elkhorn, you can expect to pay anywhere from $225 to $450 in labor alone, plus any materials or call-out fees. For more complex repairs in Elkhorn NE, we often provide a flat rate to ensure there are no surprises on your final bill."
  },
  {
    icon: AlertCircle,
    question: "What are common signs of a plumbing problem?",
    answer: "Elkhorn homeowners should look out for slow drains, low water pressure, gurgling noises in pipes, damp spots on walls or ceilings, and unexplained spikes in water bills. Identifying these issues early in your Elkhorn NE home can prevent costly emergency repairs."
  },
  {
    icon: Info,
    question: "Are you supposed to tip a plumber?",
    answer: "Tipping isn't required or even expected in the plumbing industry in Elkhorn NE. However, if a plumber goes above and beyond — like responding to a 2 AM emergency in Elkhorn — a small tip or even a positive online review is always greatly appreciated."
  },
  {
    icon: Search,
    question: "What are the signs of a good plumber?",
    answer: "A good Elkhorn plumber should be licensed, insured, and highly rated by fellow residents. Look for clear communication, a professional appearance, and a willingness to explain the problem and the proposed solution for your Elkhorn NE plumbing system."
  },
  {
    icon: FileText,
    question: "How do I negotiate plumber rates?",
    answer: "While many Elkhorn plumbers have set rates, you can negotiate by getting multiple quotes, bundling multiple small repairs into one visit, or asking about seasonal discounts for Elkhorn NE residents. Always focus on value and quality over just the lowest price."
  },
  {
    icon: Waves,
    question: "What is the average cost to unclog a drain?",
    answer: "In Elkhorn NE, the average cost to unclog a standard drain ranges from $150 to $250. More severe clogs requiring hydro-jetting or main line access in Elkhorn properties may cost more. We offer efficient drain cleaning to get your system flowing again quickly."
  },
  {
    icon: Wrench,
    question: "Is it cheaper to DIY or hire a plumber?",
    answer: "For simple tasks like replacing a faucet washer, DIY is cheaper. However, for major repairs in Elkhorn, hiring a pro saves money long-term by ensuring the job is done right the first time, preventing secondary water damage that many Elkhorn NE homeowners face after failed DIY attempts."
  },
  {
    icon: DollarSign,
    question: "Is it normal for a plumber to charge for a quote?",
    answer: "Some Elkhorn plumbers charge a service or diagnostic fee to cover their time and travel to your home. In most cases, if you choose to proceed with the repair, this fee is applied toward the total cost of the job for our Elkhorn NE clients."
  },
  {
    icon: TrendingUp,
    question: "What is flat rate pricing for plumbing?",
    answer: "Flat rate pricing means you pay a set amount for a specific job, regardless of how long it takes the plumber. Many Elkhorn NE homeowners prefer this method because it provides price certainty and eliminates the anxiety of 'watching the clock' while work is performed."
  },
  {
    icon: Activity,
    question: "What are common hidden plumbing costs?",
    answer: "Hidden costs in Elkhorn often include permit fees, emergency after-hours surcharges, and the cost of repairing walls or floors opened to access pipes. Our Elkhorn NE team strives for full transparency, outlining all potential costs before work begins."
  },
  {
    icon: Wrench,
    question: "How much should a plumber charge an hour?",
    answer: "An industry standard in the Elkhorn NE area is $85 to $125 per hour for a qualified journeyman plumber. This rate covers the plumber's expertise, specialized tools, insurance, and the vehicle used to reach your Elkhorn location."
  },
  {
    icon: DollarSign,
    question: "How do plumbers price their work?",
    answer: "Most plumbers in Elkhorn NE use either hourly rates or flat-rate 'by the book' pricing. Factors include the complexity of the repair, the materials required, and whether specialized equipment like sewer cameras or leak detection tools are needed for your Elkhorn home."
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
            Expert Knowledge Base — Elkhorn NE
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Plumbing <span className="text-indigo-600 border-b-4 border-indigo-600/20">Expert FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential answers for Elkhorn NE homeowners about plumbing costs, maintenance, and hiring the right professionals.
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
