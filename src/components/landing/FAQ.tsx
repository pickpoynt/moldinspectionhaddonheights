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
    question: "How much does slab leak detection cost?",
    answer: "Professional slab leak detection typically costs between $300-$800 depending on home size, number of slabs, and leak complexity. Many companies apply this fee toward repair costs."
  },
  {
    question: "Is it safe to live in a house with a slab leak?",
    answer: "While generally safe short-term, prolonged exposure can lead to mold growth and foundation damage. It's best to address slab leaks promptly to prevent health hazards and structural issues."
  },
  {
    question: "What to do when you suspect a slab leak?",
    answer: "1) Check your water meter for unusual usage, 2) Look for warm spots or wet areas on floors, 3) Listen for running water sounds, 4) Call a professional leak detection specialist immediately."
  },
  {
    question: "Does homeowners insurance cover slab leak repair?",
    answer: "Many policies cover sudden accidental leaks but exclude gradual damage from corrosion or wear. Check if you have plumbing coverage endorsement. Review your policy details carefully."
  },
  {
    question: "Can slab leaks be repaired without breaking concrete?",
    answer: "Yes—options include pipe rerouting through walls/attic, epoxy pipe lining, or spot repairs using minimal access points. The best method depends on leak location and severity."
  },
  {
    question: "How long does slab leak repair take?",
    answer: "Most repairs take 1-3 days from detection through completion. Complex cases requiring extensive flooring restoration or multiple leaks may take longer to complete properly."
  },
  {
    question: "Is slab leak repair worth it?",
    answer: "Absolutely—ignoring slab leaks leads to exponentially higher costs from foundation damage, mold remediation, and increased water bills. Early repair protects your home's value."
  },
  {
    question: "What causes copper pipes to leak under slabs?",
    answer: "Soil chemicals, high water pressure, poor installation, and natural corrosion over time can all cause pinhole leaks in copper pipes beneath concrete foundations."
  },
  {
    question: "How accurate is electronic leak detection?",
    answer: "Professional electronic detection is highly accurate, typically locating leaks within inches. Advanced equipment includes acoustic amplifiers and thermal imaging cameras."
  },
  {
    question: "Will slab leak affect my home's value?",
    answer: "Documented repairs with warranties help maintain property values. However, untreated slab leaks significantly reduce home value due to foundation damage concerns."
  },
  {
    question: "What is the best method to fix a slab leak?",
    answer: "The best method depends on your situation: pipe rerouting avoids floor removal, epoxy lining seals from inside, while traditional spot repair provides permanent fixes."
  },
  {
    question: "How often do slab leaks occur?",
    answer: "Slab leaks affect thousands of homes annually, particularly those built on concrete foundations with copper piping over 20 years old in regions with expansive soils."
  },
  {
    question: "Can I detect a slab leak myself?",
    answer: "You can monitor water bills for increases, check for warm/wet floor spots, and listen for running water. However, professional detection equipment is needed for precise location."
  },
  {
    question: "What are signs of foundation damage from slab leaks?",
    answer: "Cracks in walls/floors, doors that won't close properly, uneven floors, and visible foundation cracks indicate potential structural damage from water erosion."
  },
  {
    question: "Does a slab leak require immediate repair?",
    answer: "Yes—immediate action prevents escalating foundation damage, mold growth, and exponentially higher repair costs. Contact a specialist as soon as you suspect a leak."
  },
  {
    question: "How long do slab leak repairs last?",
    answer: "Properly executed repairs can last 20-50 years. Copper repiping typically lasts longer than epoxy lining, though both provide decades of reliable service when installed correctly."
  },
  {
    question: "Can slab leaks cause mold growth?",
    answer: "Yes—moisture from slab leaks creates ideal conditions for mold growth beneath flooring and in wall cavities, potentially causing health issues and requiring remediation."
  },
  {
    question: "What questions should I ask a slab leak repair contractor?",
    answer: "Ask about detection methods used, repair options available, warranties provided, licensing/insurance, estimated timeline, and total costs including any necessary restoration work."
  },
  {
    question: "Is epoxy pipe lining better than repiping for slab leaks?",
    answer: "Epoxy lining is less invasive and costly than repiping but may not suit all situations. Severely corroded pipes often require complete replacement for long-term solutions."
  },
  {
    question: "Can foundation settlement cause slab leaks?",
    answer: "Yes—foundation movement stresses pipes beneath slabs, causing joints to separate or pipes to crack. Proper soil compaction during construction helps prevent this issue."
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
              Slab Leak Information
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
              Slab Leak Repair <span className="text-indigo-400">FAQ</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed italic font-medium max-w-2xl mx-auto">
              Get expert answers to your most important questions about slab leak detection, repair methods, costs, and foundation protection for Swarthmore homes.
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
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">Need Professional Slab Leak Detection?</h3>
              <p className="text-indigo-100 mb-10 font-bold italic max-w-xl mx-auto opacity-80">
                Don't let a slab leak damage your foundation. Our expert technicians provide fast, emergency slab leak detection and repair services. Call now for immediate assistance.
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
