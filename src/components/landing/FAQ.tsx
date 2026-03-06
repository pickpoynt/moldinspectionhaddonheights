import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bug, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the average cost of pest control in Florida?",
    answer: "The average cost for standard pest control in Florida ranges from $150 to $300 for an initial visit, with monthly or quarterly maintenance protocols varying based on property size and specific localized threats like ticks."
  },
  {
    question: "Do flea and tick yard treatments work?",
    answer: "Yes, when implemented by certified technicians using residual barrier protocols. These treatments target active populations and disrupt the life cycle of ticks and fleas within your property perimeter."
  },
  {
    question: "How to treat your yard for mosquitoes and ticks?",
    answer: "Professional treatment involves a combination of mechanical barrier application, moisture management, and the use of technical-grade EPA-approved repellents that focus on dense foliage and perimeter structures."
  },
  {
    question: "Are fleas and ticks a problem in Florida?",
    answer: "Absolutely. Florida's high humidity and year-round warm climate provide ideal conditions for fleas and ticks to thrive, making consistent professional yard suppression critical for property safety."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Ticks are among the most difficult due to their complex life cycles and ability to remain dormant in structural gaps. Professional-grade residual treatments are required for complete elimination."
  },
  {
    question: "How much does Orkin charge for monthly pest control?",
    answer: "While prices vary, national providers typically charge between $40 and $70 per month for standard maintenance. Specialized tick control services in Brooksville offer more localized and targeted technical protocols."
  },
  {
    question: "How much does it cost to have a yard sprayed for ticks?",
    answer: "Yard tick treatments generally range from $100 to $250 per application, depending on the acreage and the density of the foliage requiring technical suppression."
  },
  {
    question: "What does vinegar do to ticks?",
    answer: "Vinegar can act as a temporary repellent but is not a technical solution for an infestation. It lacks the residual power required to secure a residential perimeter against active tick colonies."
  },
  {
    question: "What do ticks hate most?",
    answer: "Ticks are highly repelled by specific scents and chemicals like cedar oil, eucalyptus, and professional-grade permethrin-based barriers used in our technical dispatch protocols."
  },
  {
    question: "Do coffee grounds keep mosquitoes away?",
    answer: "Coffee grounds have minimal scientific evidence as an effective repellent. For reliable safety, technical yard treatments are the verified industry standard."
  },
  {
    question: "What to spray in your yard to keep ticks away?",
    answer: "Technical-grade residual sprays containing pyrethroids or cedar-based botanicals are most effective. Professional application ensures even coverage across all high-risk nesting zones."
  },
  {
    question: "What is the most tick-infested state?",
    answer: "While Northeastern states are often cited, Florida's 12-month active cycle makes it a top-tier state for consistent tick pressure, requiring year-round management."
  },
  {
    question: "Why should you not squish fleas?",
    answer: "Squishing fleas can release eggs or internal pathogens into the environment. It is safer to use technical extraction or professional chemical neutralization."
  },
  {
    question: "What are the worst months for fleas and ticks?",
    answer: "In Brooksville, the worst months are generally April through September, although the absence of deep frost means tick activity remains a year-round technical concern."
  },
  {
    question: "What is the most hated bug on Earth?",
    answer: "Historically, mosquitoes and ticks rank the highest due to their status as disease vectors and the high discomfort caused by their feeding protocols."
  },
  {
    question: "What does God say about bugs?",
    answer: "Various religious texts mention insects in different contexts, often highlighting their role in the natural ecosystem or as part of historical ecological events."
  },
  {
    question: "What insect has killed the most humans?",
    answer: "The mosquito is the most lethal due to malaria and other viruses, but ticks follow closely as major vectors for Lyme disease and other serious technical health risks."
  },
  {
    question: "What is the number one tick killer?",
    answer: "Permethrin and professional-grade residual aerosols are the industry gold standard for immediate and long-term tick neutralization."
  },
  {
    question: "What laundry detergent kills ticks?",
    answer: "Standard detergent doesn't kill ticks; it's the high-heat drying protocol (at least 10 minutes on high heat) that effectively neutralizes them on clothing."
  },
  {
    question: "What should I do if I have ticks in my house?",
    answer: "Call a professional technical unit immediately. Indoor tick infestations require specialized indoor residual protocols and host management to eliminate completely."
  },
  {
    question: "How do farmers keep ticks away?",
    answer: "Farmers use a combination of livestock dipping, pasture management (clear-cutting tall grass), and perimeter chemical barriers to protect their animals and operations."
  },
  {
    question: "What month are ticks the worst?",
    answer: "Activity peaks in May and June as nymphs become active, but in Florida, the technical risk remains high throughout the entire summer season."
  },
  {
    question: "Does Vicks vapor rub repel ticks?",
    answer: "While the camphor and menthol might provide temporary repulsion, it is not a verified technical defense against tick attachment or property infestation."
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
            Tick Control <span className="text-indigo-600">Technical Briefing</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic font-medium text-nowrap">
            Critical infrastructure data for Brooksville residents regarding <br /> tick-borne disease prevention and property security.
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
                <h4 className="text-white text-xl font-black mb-2 uppercase tracking-tight text-nowrap">Need Immediate Suppression?</h4>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic text-nowrap">24/7 Brooksville Yard Defense Team</p>
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
