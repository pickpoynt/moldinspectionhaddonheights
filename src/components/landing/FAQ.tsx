import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bug, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to have a hornets nest removed?",
    answer: "Professional hornet nest removal typically costs between $150 and $450, depending on the accessibility of the nest, its size, and the species' aggression level."
  },
  {
    question: "Can I remove a hornets nest myself?",
    answer: "Technical DIY removal is highly discouraged and dangerous. Hornets are extremely protective and can sting multiple times, leading to severe medical emergencies."
  },
  {
    question: "How do professionals get rid of wasp nests?",
    answer: "Professionals use specialized protective gear, high-pressure residual aerosols, and technical extraction tools to neutralize the colony and remove the physical nest structure."
  },
  {
    question: "Are there sinkholes in Brooksville, FL?",
    answer: "Yes, Brooksville and Hernando County are located in 'Sinkhole Alley'. While we focus on hornet removal, residents should remain aware of local geological conditions."
  },
  {
    question: "What is the best time of year to remove a hornets nest?",
    answer: "Early spring is ideal when the queen is starting the nest alone. By late summer, nests are at maximum capacity and highly aggressive."
  },
  {
    question: "How much does Terminix charge to remove a wasp nest?",
    answer: "Terminix and other national providers generally charge between $150 and $300 for a one-time stinging insect removal service."
  },
  {
    question: "Can I just leave a hornets nest alone?",
    answer: "If the nest is far from human activity, it can be left. However, if it's near entry points, eaves, or play areas, professional removal is recommended for safety."
  },
  {
    question: "What does WD-40 do to wasps?",
    answer: "WD-40 can kill wasps on contact by suffocating them, but it is not a technical tool for colony neutralization and poses a fire hazard if used incorrectly."
  },
  {
    question: "Will hornets return to a destroyed nest?",
    answer: "No, hornets do not reuse old nests. However, the location may remain attractive for future queens if not properly treated with residual barriers."
  },
  {
    question: "How does an exterminator get rid of a hornets nest?",
    answer: "Exterminators use knockdown agents for immediate control, followed by technical extraction of the nest and a residual treatment to prevent secondary scouting."
  },
  {
    question: "Will wasps come back if you remove their nest?",
    answer: "If the queen and workers are neutralized, they won't return. Professional removal includes barrier treatments specifically designed to prevent re-infestation."
  },
  {
    question: "Does Terminix get rid of hornet nests?",
    answer: "Yes, Terminix provides stinging insect control services, including hornet and wasp nest neutralization and removal."
  },
  {
    question: "What destroys hornets' nest naturally?",
    answer: "Natural decomposition occurrs in winter, and some birds or raccoons may occasionally attack nests for larvae, though natural destruction is unreliable for home safety."
  },
  {
    question: "What do hornets hate the most?",
    answer: "Hornets are repelled by specific technical scents like peppermint oil, clove, and professional-grade residual repellents used in technical dispatch protocols."
  },
  {
    question: "What happens if you knock a hornets nest down?",
    answer: "Knocking down an active nest will trigger an immediate, highly aggressive swarming response from the colony. Never attempt this without professional protection."
  },
  {
    question: "What time of day is best to remove a wasp nest?",
    answer: "Late evening or early morning is technically best, as the majority of the colony is inside the nest and their activity levels are lower due to cooler temperatures."
  },
  {
    question: "What happens if you block up a wasp's nest?",
    answer: "Blocking the entrance usually forces the wasps to chew a new exit, which often leads them directly into the interior of your home. Never block an active entrance."
  },
  {
    question: "How much does it cost to hire a professional to remove a wasp nest?",
    answer: "Standard professional removal fees generally range from $125 to $250 for easily accessible nests in residential areas."
  },
  {
    question: "Do hornets return to the same nest every year?",
    answer: "No, hornet colonies are annual. The nest is abandoned in the winter, and new queens start entirely new nests the following spring."
  },
  {
    question: "What happens if you block off a bees nest?",
    answer: "Like wasps, bees will find an alternative exit, often leading into the structure. Professional relocation or neutralization is required for safety."
  },
  {
    question: "What time of day are hornets most active?",
    answer: "Hornets are most active during the warmest daylight hours when they are foraging for food and water to support the colony."
  },
  {
    question: "Where is sinkhole Alley in Florida?",
    answer: "Sinkhole Alley primarily consists of Hernando, Pasco, and Hillsborough counties. Brooksville is situated directly within this high-risk geological zone."
  },
  {
    question: "Why are houses so cheap in Spring Hill, Florida?",
    answer: "Property values in areas like Spring Hill can be influenced by the higher prevalence of sinkhole activity and the resulting technical insurance requirements."
  },
  {
    question: "What happened to the lady who fell into the sinkhole?",
    answer: "There have been several documented local incidents of sinkhole collapses; such events highlight the importance of geological awareness for all Brooksville area residents."
  },
  {
    question: "Can a hornet remember you?",
    answer: "Scientific studies suggest some social wasps can recognize faces, making them potentially more persistent if they perceive you as a threat to the colony."
  },
  {
    question: "Who is more powerful, a wasp or a hornet?",
    answer: "Hornets are technically a type of wasp but are larger and possess more potent venom, making them generally more dangerous and 'powerful' in an encounter."
  },
  {
    question: "Do wasps mourn their dead?",
    answer: "Wasps do not have complex emotions like mourning. They respond to dead colony members as a technical sanitary issue, often removing bodies from the nest."
  },
  {
    question: "What temperature do hornets go dormant at?",
    answer: "Most hornet activity ceases when temperatures drop below 45°F-50°F, with the colony eventually dying off except for the hibernating queens."
  },
  {
    question: "How to get rid of a large hornets nest?",
    answer: "Large nests require professional technical dispatch. Technicians use specialized containment and neutralization protocols to ensure the entire colony is safely managed."
  },
  {
    question: "What happens if you knock a wasp nest down?",
    answer: "As with hornets, this will trigger a defensive swarm. Wasps will attack anything nearby to defend their queen and larvae."
  },
  {
    question: "What household cleaner kills hornets?",
    answer: "Dish soap mixed with water can suffocate hornets, but it requires direct contact and provides no protection from the rest of the swarming colony."
  },
  {
    question: "Can I spray a wasp nest with a hose?",
    answer: "No. Spraying a nest with water will not destroy the internal structure and will only provoke a coordinated attack against the person holding the hose."
  },
  {
    question: "How to get rid of yellow jackets when you can't find the nest?",
    answer: "Technical baiting protocols or professional tracing of worker flight patterns can locate hidden subterranean or structural nests for targeted removal."
  },
  {
    question: "What household product kills wasps instantly?",
    answer: "Specialized wasp and hornet sprays are designed for instant knockdown. Household products like bleach or vinegar are not recommended for safety reasons."
  },
  {
    question: "What kills a hornet instantly?",
    answer: "Professional-grade knockdown aerosols (technical pyrethroids) are designed to neutralize a hornet's nervous system instantly upon contact."
  },
  {
    question: "What time of day are hornets least active?",
    answer: "Activity levels are lowest during the middle of the night and the very early hours of the morning when it is dark and temperatures are lowest."
  },
  {
    question: "How many hornets are usually in a nest?",
    answer: "A mature hornet nest can contain between 200 and 700 workers, depending on the specific species and the time of the season."
  },
  {
    question: "What happens when you spray a hornets nest?",
    answer: "Unless using a technical knockdown agent that works instantly, the hornets will immediately exit the nest to find and sting the intruder."
  },
  {
    question: "What smell do hornets hate?",
    answer: "Hornets are repelled by strong essential oils like peppermint, as well as the residual chemical markers found in professional barrier treatments."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-nowrap">
        <div className="max-w-3xl mx-auto text-center mb-16 text-nowrap">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-indigo-600 mb-6 uppercase tracking-[0.2em] text-[10px] font-bold text-nowrap">
            <HelpCircle className="w-4 h-4 text-nowrap" />
            Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight text-nowrap uppercase">
            Hornet Removal <span className="text-indigo-600">Technical Briefing</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic font-medium text-nowrap">
            Critical infrastructure data for Brooksville residents regarding <br /> stinging insect prevention and structural security.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-nowrap text-nowrap">
          <Accordion type="single" collapsible className="space-y-4 text-nowrap">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-100 bg-slate-50 rounded-2xl px-6 data-[state=open]:border-indigo-200 data-[state=open]:shadow-xl data-[state=open]:shadow-indigo-900/5 transition-all text-nowrap">
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6 uppercase tracking-tight text-sm text-nowrap">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6 italic font-medium text-sm text-nowrap">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-8 bg-slate-950 rounded-[2.5rem] border border-white/5 relative overflow-hidden text-nowrap">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl text-nowrap" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-nowrap">
              <div className="text-nowrap">
                <h4 className="text-white text-xl font-black mb-2 uppercase tracking-tight text-nowrap">Need Terminal Removal?</h4>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic text-nowrap">24/7 Brooksville Technical Dispatch</p>
              </div>
              <a href="tel:3238801224" className="flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-16 rounded-2xl transition-all shadow-xl shadow-indigo-900/40 text-nowrap">
                <Phone className="w-5 h-5 text-nowrap" />
                <span className="font-black text-lg text-nowrap">(323) 880-1224</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
