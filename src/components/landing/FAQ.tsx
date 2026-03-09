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
    question: "How much does mold inspection cost?",
    answer: "Professional mold inspection typically costs between $300-$600 depending on home size, number of air samples, and testing complexity. Many inspectors apply this fee toward remediation verification services."
  },
  {
    question: "Is it safe to live in a house with mold?",
    answer: "Living with significant mold growth is not recommended, especially for those with respiratory conditions, allergies, or compromised immune systems. Professional remediation should be pursued promptly."
  },
  {
    question: "What to do when you suspect mold?",
    answer: "1) Look for visible growth or musty odors, 2) Check for water damage or condensation issues, 3) Monitor health symptoms among occupants, 4) Call a professional mold inspector immediately."
  },
  {
    question: "Does homeowners insurance cover mold inspection?",
    answer: "Many policies cover mold inspection if it's part of a covered claim (like sudden water damage). Standalone testing is typically out-of-pocket. Review your policy details carefully."
  },
  {
    question: "Can mold be removed without damaging property?",
    answer: "Yes—professional remediation uses containment, HEPA filtration, and targeted treatments to remove mold while minimizing disruption to your home and belongings."
  },
  {
    question: "How long does mold inspection take?",
    answer: "Most inspections take 1-3 hours including visual assessment, air sampling, moisture mapping, and documentation. Lab results for air samples typically return within 24-48 hours."
  },
  {
    question: "Is professional mold inspection worth it?",
    answer: "Absolutely—ignoring mold can lead to exponentially higher costs from structural damage, health issues, and reduced property values. Early detection protects your investment."
  },
  {
    question: "What causes mold growth indoors?",
    answer: "Excess moisture from leaks, poor ventilation, high humidity, flooding, or condensation creates ideal conditions for mold growth in homes and businesses."
  },
  {
    question: "How accurate is air quality testing for mold?",
    answer: "Professional air sampling using spore traps is highly accurate when conducted by certified inspectors. Results identify mold species and concentration levels in your indoor air."
  },
  {
    question: "Will mold affect my home's value?",
    answer: "Documented mold remediation with clearance testing helps maintain property values. However, untreated mold significantly reduces home value due to health and structural concerns."
  },
  {
    question: "What is the best method to test for mold?",
    answer: "Comprehensive testing includes visual inspection, air sampling, surface sampling, and moisture mapping. The best approach depends on your specific situation and concerns."
  },
  {
    question: "How often does mold grow back after remediation?",
    answer: "Mold returns primarily when moisture sources aren't addressed. Proper remediation combined with humidity control and leak prevention ensures long-term success."
  },
  {
    question: "Can I test for mold myself?",
    answer: "DIY test kits exist but often lack accuracy. Professional inspectors use calibrated equipment, certified labs, and expertise to provide reliable, actionable results."
  },
  {
    question: "What are signs of hidden mold?",
    answer: "Musty odors, unexplained allergic reactions, water stains, peeling paint, condensation on windows, warping surfaces, and condensation issues indicate potential hidden mold."
  },
  {
    question: "Does mold require immediate removal?",
    answer: "Yes—immediate action prevents spreading spores, structural damage, and worsening health symptoms. Contact a professional inspector as soon as you suspect mold."
  },
  {
    question: "How long do mold remediation results last?",
    answer: "Properly executed remediation provides long-term results when moisture sources are corrected. Post-remediation verification ensures successful cleanup and safe re-occupancy."
  },
  {
    question: "Can mold cause health problems?",
    answer: "Yes—mold exposure can cause respiratory issues, headaches, skin irritation, allergic reactions, cognitive problems, and flu-like symptoms, especially in sensitive individuals."
  },
  {
    question: "What questions should I ask a mold inspector?",
    answer: "Ask about certifications, testing methods, lab accreditation, report details, remediation protocols provided, post-remediation verification, and total costs including all sampling fees."
  },
  {
    question: "Is air quality testing better than surface sampling?",
    answer: "Both serve important purposes. Air testing reveals airborne spore levels, while surface sampling identifies contamination on materials. Comprehensive inspections use both methods."
  },
  {
    question: "Can poor ventilation cause mold growth?",
    answer: "Yes—inadequate ventilation traps moisture and humidity, creating ideal conditions for mold. Proper airflow through bathrooms, kitchens, and attics helps prevent growth."
  }
];;

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl">
              <HelpCircle className="w-4 h-4" />
              Mold Inspection Information
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic">
              Mold Inspection &amp; Testing <span className="text-indigo-400">FAQ</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed italic font-medium max-w-2xl mx-auto">
              Get expert answers to your most important questions about mold inspection costs, testing procedures, air quality, and remediation protocols for Haddon Heights homes.
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
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight italic">Need Professional Mold Inspection?</h3>
              <p className="text-indigo-100 mb-10 font-bold italic max-w-xl mx-auto opacity-80">
                Don't let mold compromise your indoor air quality. Our certified inspectors provide comprehensive mold testing and air quality assessments. Call now for immediate assistance.
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
