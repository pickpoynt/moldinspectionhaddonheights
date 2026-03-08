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
    question: "How much does sewage backup cleanup cost?",
    answer: "Professional sewage backup cleanup typically costs between $500-$5,000 depending on severity, affected area size, and extent of contamination. Minor backups may cost less, while extensive damage requiring structural repairs can exceed $10,000."
  },
  {
    question: "Is it safe to live in a house after sewage backup?",
    answer: "No, it's not safe until professional cleanup is complete. Sewage contains harmful bacteria, viruses, and parasites that pose serious health risks. Evacuate affected areas immediately and call professionals."
  },
  {
    question: "What to do when your sewage backs up?",
    answer: "1) Stop using all plumbing immediately, 2) Call emergency plumber or sewage cleanup professionals, 3) Avoid contact with contaminated water, 4) Turn off electricity if safe to do so, 5) Evacuate affected areas."
  },
  {
    question: "Does homeowners insurance cover sewage cleanup?",
    answer: "Many policies cover sudden and accidental backups but exclude preventable ones or those from lack of maintenance. Check if you have sewer backup endorsement coverage. Review your policy details carefully."
  },
  {
    question: "Can you clear a main sewer line clog yourself?",
    answer: "Minor clogs may respond to plunging or drain snakes, but severe blockages require professional hydro jetting equipment. Tree roots and major obstructions typically need professional intervention."
  },
  {
    question: "How long does sewage cleanup take?",
    answer: "Basic cleanup takes 1-3 days, but extensive damage with structural repairs can take 1-2 weeks or longer. Factors include severity, affected materials, and drying time requirements."
  },
  {
    question: "Is sewage backup a health hazard?",
    answer: "Yes—sewage contains E. coli, hepatitis A, norovirus, and other dangerous pathogens. It can cause serious illnesses including gastroenteritis, skin infections, and respiratory problems."
  },
  {
    question: "Can carpet be cleaned after a sewer backup?",
    answer: "Carpet should typically be discarded after sewage exposure as it cannot be adequately sanitized. Porous materials absorb contaminants and pose ongoing health risks even after cleaning."
  },
  {
    question: "How much does Roto Rooter charge to clean a main sewer line?",
    answer: "Roto Rooter typically charges $250-$800 for main sewer line cleaning depending on location, severity of blockage, and method used. Hydro jetting costs more than basic snaking."
  },
  {
    question: "Is sewer jetting worth it?",
    answer: "Yes—hydro jetting thoroughly cleans pipe walls and removes roots, grease, and debris more effectively than snaking. It provides longer-lasting results and can prevent future blockages."
  },
  {
    question: "What is the best disinfectant for sewer backup?",
    answer: "EPA-registered disinfectants like bleach solutions (1 cup bleach per gallon of water) or specialized enzymatic cleaners designed for biohazard cleanup are most effective against sewage pathogens."
  },
  {
    question: "Will homeowners insurance cover sewage backup?",
    answer: "Coverage varies by policy. Many require separate sewer backup endorsement. Standard policies often exclude backups from external sources or those caused by neglect or lack of maintenance."
  },
  {
    question: "Is it safe to stay in a house with sewage backup in basement?",
    answer: "No—evacuate affected areas immediately. Airborne pathogens, toxic gases like methane, and direct contact with contaminated water pose serious health risks to occupants."
  },
  {
    question: "What is the average cost to unclog a sewer line?",
    answer: "Average costs range from $200-$800 for basic clearing, or $1,000-$4,000+ for extensive repairs or pipe replacement. Costs vary based on blockage type, location, and repair method needed."
  },
  {
    question: "Is sewage backup a biohazard?",
    answer: "Yes—it's classified as Category 3 water damage (black water), meaning it contains harmful pathogens requiring professional biohazard cleanup following EPA and OSHA safety protocols."
  },
  {
    question: "What's the best way to completely clean out a sewer line?",
    answer: "Professional hydro jetting uses high-pressure water (3,000-8,000 PSI) to thoroughly scour pipe interiors, removing all buildup, roots, and debris for comprehensive cleaning."
  },
  {
    question: "How often should sewer drains be cleaned?",
    answer: "Professional cleaning every 18-22 months prevents buildup and identifies potential issues early. Homes with large trees nearby may need more frequent maintenance."
  },
  {
    question: "How much does Servpro biohazard cleanup cost per hour?",
    answer: "Servpro biohazard cleanup averages $75-$150 per hour, with total projects ranging $500-$5,000+ depending on contamination extent and affected area size."
  },
  {
    question: "Can carpet be saved after sewage backup?",
    answer: "Generally no—porous materials like carpet, padding, and upholstery absorb contaminants and should be removed and disposed of safely following biohazard protocols."
  },
  {
    question: "How long does sewage contamination last in the house?",
    answer: "Without treatment, contamination persists indefinitely. Pathogens can survive days to weeks on surfaces. Professional cleanup eliminates harmful bacteria within days when done properly."
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
              Sewage Cleanup Information
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
              Sewage Backup <span className="text-indigo-400">Cleanup FAQ</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed italic font-medium max-w-2xl mx-auto">
              Get expert answers to your most important questions about sewage backup cleanup, safety protocols, costs, and restoration for Fairview homes.
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
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">Need Professional Sewage Cleanup?</h3>
              <p className="text-indigo-100 mb-10 font-bold italic max-w-xl mx-auto opacity-80">
                Don't let sewage contamination threaten your health. Our expert technicians provide fast, emergency sewage backup cleanup services. Call now for immediate assistance.
              </p>
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 h-20 px-12 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all active:scale-95" asChild>
                <a href="tel:8777921410">
                  Call for Emergency Service
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
