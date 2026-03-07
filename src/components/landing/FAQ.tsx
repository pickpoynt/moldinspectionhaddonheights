import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Zap, ShieldAlert, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "How much does an exterminator cost for ants?",
    answer: "Ant extermination costs typically range from $150 to $500 depending on the severity of infestation, size of your home, and ant species. Carpenter ant treatments may cost more due to additional structural work required."
  },
  {
    question: "Is it worth getting an exterminator for ants?",
    answer: "Absolutely! Professional exterminators have access to stronger, more effective treatments and can identify the colony location. DIY methods often only kill visible workers, not the queen or hidden colony."
  },
  {
    question: "How to 100% get rid of ants?",
    answer: "Complete elimination requires: 1) Identifying entry points and sealing them, 2) Using professional-grade baits that workers carry back to the colony, 3) Eliminating the queen, and 4) Maintaining proper sanitation to prevent re-infestation."
  },
  {
    question: "What is the hardest ant to get rid of?",
    answer: "Carpenter ants and pharaoh ants are considered the most challenging. Carpenter ants nest deep in wood structures, while pharaoh ants have multiple queens and satellite colonies that make complete eradication difficult."
  },
  {
    question: "What permanently gets rid of ants?",
    answer: "Professional-grade bait systems combined with exclusion work (sealing entry points) provide the most permanent solution. Regular maintenance and addressing moisture issues also help prevent future infestations."
  },
  {
    question: "How much does Orkin charge for ant removal?",
    answer: "Orkin typically charges between $150-$350 for initial ant treatment, with ongoing monthly plans ranging from $40-$80. Prices vary based on location, property size, and infestation severity."
  },
  {
    question: "Can I exterminate ants myself?",
    answer: "While minor ant problems can be managed with store-bought products, established colonies usually require professional intervention. Professionals can locate hidden nests and use commercial-grade products unavailable to consumers."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Bed bugs, German cockroaches, and certain ant species like pharaoh ants rank among the hardest pests to eliminate due to their resistance to chemicals and complex breeding patterns."
  },
  {
    question: "What is the best time of year to exterminate ants?",
    answer: "Early spring is ideal when ants first become active and before colonies grow large. However, ant control should be addressed immediately upon discovery, regardless of season, to prevent expansion."
  },
  {
    question: "How much is Terminix ant treatment?",
    answer: "Terminix ant treatments average $200-$400 for initial service, with customized treatment plans available. Costs depend on infestation level, home size, and whether structural damage has occurred."
  },
  {
    question: "Can I get rid of ants without an exterminator?",
    answer: "Small, occasional ant trails can sometimes be managed with DIY methods like vinegar sprays and sealing cracks. However, persistent or large-scale infestations typically require professional expertise and products."
  },
  {
    question: "What are signs of a major ant infestation?",
    answer: "Warning signs include: visible ant trails indoors, large numbers of live ants, sawdust-like debris (frass), rustling sounds in walls, hollow-sounding wood, and winged swarmers emerging indoors."
  },
  {
    question: "Is it worth hiring an exterminator for ants?",
    answer: "Yes, especially for carpenter ants that cause structural damage. Professionals save money long-term by preventing property damage, using more effective treatments, and providing warranties on their work."
  },
  {
    question: "Are ant infestations covered by insurance?",
    answer: "Most homeowners insurance policies do NOT cover ant damage or extermination costs. Ant infestations are considered preventable through regular maintenance, making early detection and treatment crucial."
  },
  {
    question: "Do I need to leave during ant extermination?",
    answer: "For most ant treatments, you can remain home but may need to vacate treated areas for 2-4 hours. Your technician will advise based on products used. Some eco-friendly options allow immediate re-entry."
  },
  {
    question: "Is it cheaper to DIY or hire an exterminator?",
    answer: "DIY appears cheaper initially ($20-$100 for products) but often costs more long-term due to repeated treatments and potential structural damage. Professional treatment ($150-$500) typically provides faster, longer-lasting results."
  },
  {
    question: "Can you get rid of ants permanently?",
    answer: "Yes, with professional treatment, proper exclusion techniques, and ongoing prevention measures. Regular inspections and maintenance treatments help ensure your property remains ant-free year-round."
  },
  {
    question: "Do coffee grounds repel ants?",
    answer: "Coffee grounds may temporarily deter some ant species due to their strong smell, but they won't eliminate an established colony. They're best used as a supplementary deterrent, not a primary treatment."
  },
  {
    question: "How hard is it to get rid of an ant infestation?",
    answer: "Difficulty varies by species and infestation size. Small pavement ant colonies might resolve quickly, while carpenter ant infestations can require multiple treatments over several weeks for complete elimination."
  },
  {
    question: "How long does it take to get rid of ants after an exterminator?",
    answer: "Most customers see significant reduction within 24-48 hours. Complete elimination typically takes 1-2 weeks for common ants, though carpenter ants may require follow-up treatments over 3-6 weeks."
  },
  {
    question: "How will an exterminator get rid of ants?",
    answer: "Professionals use Integrated Pest Management: thorough inspection to identify species and nest locations, targeted bait placement, perimeter barriers, crack and crevice treatments, and recommendations for exclusion and sanitation improvements."
  },
  {
    question: "What time of year are ants most active?",
    answer: "Ants peak in spring and summer when temperatures rise and they forage for food. However, indoor infestations can remain active year-round in heated structures, especially near kitchens and bathrooms."
  },
  {
    question: "What are the signs of an ant infestation?",
    answer: "Common indicators include: seeing live ants indoors consistently, discovering ant trails, finding frass (sawdust-like material), hearing rustling in walls, noticing soil mounds near foundations, and spotting discarded wings from swarmers."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl">
              <HelpCircle className="w-4 h-4" />
              Ant Control Information
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
              Ant <span className="text-indigo-400">Extermination FAQ</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed italic font-medium max-w-2xl mx-auto">
              Get expert answers to your most important questions about ant control, treatment methods, costs, and prevention strategies for Fairview homes.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-8 md:p-12 border border-white/10 shadow-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-0 bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-all border border-transparent hover:border-white/20 px-6 py-2"
                >
                  <AccordionTrigger className="text-left py-6 text-white hover:no-underline gap-4">
                    <span className="text-sm md:text-lg font-bold uppercase tracking-tight flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xs">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <div className="pl-12 border-l-2 border-indigo-600/50">
                      <p className="text-slate-400 text-base leading-relaxed italic font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-20 p-12 bg-indigo-600 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-900/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">Need Professional Ant Control?</h3>
              <p className="text-indigo-100 mb-10 font-bold italic max-w-xl mx-auto opacity-80">
                Don't let ants take over your Fairview home. Our expert technicians provide fast, effective ant elimination services. Call now for immediate assistance.
              </p>
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 h-20 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all active:scale-95" asChild>
                <a href="tel:3238801224">
                  Call for Free Inspection
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
