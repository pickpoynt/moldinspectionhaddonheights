import { HelpCircle, Search, ShieldCheck, Zap, Droplets, Clock, Hammer, DollarSign, Target, Radio, Thermometer, AlertCircle, FileText, Info, TrendingUp, CheckCircle, Home, Activity, Wrench, Shield, Waves, LucideIcon, Phone, Bug, Sun, Moon, Lightbulb, Smile, Frown } from "lucide-react";

const faqs = [
  {
    icon: Bug,
    question: "Can an exterminator get rid of centipedes?",
    answer: "Yes, professional exterminators use high-potency residual treatments specifically designed to penetrate the tough exoskeletons of Hawaii centipedes, ensuring long-term control and colony elimination in Mililani."
  },
  {
    icon: ShieldCheck,
    question: "How to get rid of centipedes in Hawaii?",
    answer: "Getting rid of Hawaii centipedes requires a specialized approach: reducing foundation moisture, sealing structural entry points, and applying professional-grade chemical barriers around your Mililani property."
  },
  {
    icon: AlertCircle,
    question: "Are centipedes a problem in Hawaii?",
    answer: "Absolutely. Hawaii is home to large, aggressive centipedes (Scolopendra) whose stings are painful and venomous. For Mililani residents, they are a significant year-round safety concern."
  },
  {
    icon: Shield,
    question: "What deters Hawaii centipedes?",
    answer: "The most effective deterrent is a professional chemical barrier. Naturally, centipedes in Mililani are deterred by dry soil, lack of debris (like leaf litter), and scents like peppermint or cedarwood oil."
  },
  {
    icon: Frown,
    question: "Why should you never squish a centipede in your house?",
    answer: "Squishing a centipede can release pheromones that attract other pests and creates a mess. In Mililani homes, it is safer to capture them or call an expert for a complete perimeter barrier."
  },
  {
    icon: Radio,
    question: "What smell do centipedes hate the most?",
    answer: "Centipedes have a highly developed sense of smell and strongly dislike the scent of peppermint, tea tree oil, and citronella. These can be used in Mililani to keep them away from specific rooms."
  },
  {
    icon: Zap,
    question: "What kills centipedes instantly in a house?",
    answer: "While specialized pest sprays kill on contact, the only 'instant' way to stop an infestation in Mililani is a professional 'flush' treatment that targets their hiding spots in wall voids."
  },
  {
    icon: Search,
    question: "What attracts centipedes in Hawaii?",
    answer: "Mililani centipedes are primarily attracted to moisture and darkness. Damp mulch, leaking pipes, humid crawlspaces, and high insect populations (their food source) are the main attractants."
  },
  {
    icon: AlertCircle,
    question: "What happens if you get bit by a centipede in Hawaii?",
    answer: "A Hawaii centipede sting causes immediate, intense pain, swelling, and redness. In Mililani, victims should clean the area, apply ice, and seek medical attention if allergic symptoms occur."
  },
  {
    icon: Moon,
    question: "Is it safe to sleep in a room with centipedes?",
    answer: "It is not recommended. Hawaii centipedes are nocturnal hunters and can crawl onto beds. For Mililani residents, ensuring a professional barrier is in place is key to a safe night's sleep."
  },
  {
    icon: Frown,
    question: "What's the worst pest to have in your house?",
    answer: "Many Hawaii residents consider centipedes the worst due to their aggressive nature, painful sting, and ability to grow to significant sizes in local Mililani environments."
  },
  {
    icon: Info,
    question: "Should I worry if I see a house centipede?",
    answer: "Small 'house centipedes' are mostly harmless, but seeing any centipede in your Mililani home indicates a gap in your home's defenses where larger Hawaii specimens could also enter."
  },
  {
    icon: Bug,
    question: "How to get rid of Hawaii centipedes?",
    answer: "The 'Hawaii method' involves clearing a 3-foot dry perimeter around your Mililani house foundation and using professional-grade residual pesticides that survive Hawaii's heat and humidity."
  },
  {
    icon: Sun,
    question: "What time of year are centipedes most active?",
    answer: "In Mililani, centipedes are most active during the rainy season. Heavy rains saturate their outdoor habitats, forcing them to seek dry shelter inside Hawaii homes."
  },
  {
    icon: Lightbulb,
    question: "Will keeping the light on keep centipedes away?",
    answer: "No. While they prefer darkness, lights attract the smaller insects that centipedes eat. In Mililani, keeping outdoor lights on may actually bring centipedes closer to your home."
  },
  {
    icon: TrendingUp,
    question: "How long do centipedes get in Hawaii?",
    answer: "In the Mililani area, invasive centipedes (Scolopendra subspinipes) can grow up to 9 inches long. These large specimens require heavy-duty professional interventions."
  },
  {
    icon: AlertCircle,
    question: "What will happen if I get bitten by a centipede?",
    answer: "Expect localized pain comparable to a severe bee sting. In Hawaii, this can last several hours. Mililani residents should monitor for fever or heart palpitations, which require urgent care."
  },
  {
    icon: Target,
    question: "What is the natural predator of centipedes?",
    answer: "Birds, chickens, and larger spiders are natural predators. However, they are not effective for controlling an infestation in a modern Mililani residential setting."
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
            Hawaii Pest Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight leading-tight">
            Hawaii <span className="text-indigo-600 border-b-4 border-indigo-600/20">Centipede FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-bold italic">
            Essential information for Mililani residents about Hawaii centipedes, extermination, and property protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <FAQCard key={index} {...faq} />
          ))}
        </div>

        <div className="mt-20 text-center text-nowrap">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">Still have centipede questions?</p>
          <a href="tel:3238801224" className="inline-flex items-center gap-3 text-indigo-600 font-black text-2xl hover:text-slate-900 transition-colors uppercase tracking-tight">
            <Phone className="w-6 h-6" />
            (323) 880-1224
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
