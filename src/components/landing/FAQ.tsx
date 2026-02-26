import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to clean up black mold?",
    answer: "Cleaning up toxic black mold typically costs between $1,500 and $5,000, depending on the severity of the infestation, the structural damage involved, and the required containment measures in your Gulf Breeze home."
  },
  {
    question: "What kills 100% of black mold?",
    answer: "Only physical removal and replacement of porous materials, coupled with EPA-registered anti-microbial treatments and total moisture elimination, can permanently stop 100% of toxic black mold."
  },
  {
    question: "Does black mold need to be professionally cleaned?",
    answer: "Yes. Because toxic black mold produces dangerous mycotoxins, disturbing it without proper hazmat gear and negative air pressure containment is extremely hazardous to your health."
  },
  {
    question: "How to get rid of black mold toxicity?",
    answer: "The mold must be safely removed from the building, affected air must be scrubbed using HEPA 13 filtration, and the moisture source must be completely resolved. Exposed individuals should also consult a healthcare professional."
  },
  {
    question: "How long after cleaning black mold is it safe?",
    answer: "Once professional toxic mold removal, HEPA air scrubbing, and post-clearance air quality testing confirm safe spore levels, it is immediately safe to reoccupy the space."
  },
  {
    question: "Is professional mold removal worth it?",
    answer: "Absolutely. Professional removal prevents the toxic spores from spreading to other areas of the house, permanently resolves the issue, and protects your family's health from dangerous toxic exposure."
  },
  {
    question: "What are signs of mold exposure?",
    answer: "Signs of toxic black mold exposure include chronic coughing, respiratory distress, chronic fatigue, severe headaches, skin rashes, memory issues, and sudden upper respiratory tract infections."
  },
  {
    question: "Do air purifiers help with mold?",
    answer: "Medical-grade air purifiers can help filter floating mold spores out of the indoor air environment, but they cannot kill the actual mold colony actively thriving and growing on surfaces inside your home."
  },
  {
    question: "Can I live in a house with black mold?",
    answer: "It is highly discouraged. Long-term exposure to Stachybotrys chartarum (black mold) can result in severe, sometimes irreversible health consequences, especially for children and the elderly."
  },
  {
    question: "Is bleach or vinegar better at killing black mold?",
    answer: "Vinegar is scientifically better at penetrating porous surfaces to kill the root of the mold. Bleach simply removes the surface color and adds substantial water to the material, often fueling the mold's deeper roots."
  },
  {
    question: "How long can you live in a house with black mold?",
    answer: "Even short-term exposure can trigger immediate symptoms in sensitive individuals. Prolonged exposure over months or years in Gulf Breeze homes causes progressive, severe systemic toxicity."
  },
  {
    question: "What are the symptoms of black mold in the lungs?",
    answer: "Symptoms include a persistent dry cough, shortness of breath, heavy wheezing, coughing up blood or black mucus, intense chest tightness, and the rapid development of chronic respiratory conditions."
  },
  {
    question: "How to test yourself for mold toxicity?",
    answer: "You must consult a medical healthcare professional. They may run targeted blood or specialized urine tests (like a mycotoxin test panel) to officially determine the levels of toxicity in your body."
  },
  {
    question: "Can I remove black mold myself?",
    answer: "No. Disturbing toxic black mold releases volatile mycotoxins and millions of spores directly into your air. It requires certified professional hazmat suits, HEPA containment fields, and strictly regulated disposal protocols."
  },
  {
    question: "What pulls mold out of the air?",
    answer: "True medical-grade HEPA filtration systems and high-powered industrial commercial \"air scrubbers\" physically pull mold spores and particulate mycotoxins completely out of your indoor air environment."
  },
  {
    question: "Which is better for mold dehumidifier or air purifier?",
    answer: "You need both. A commercial dehumidifier physically prevents mold from growing by aggressively removing moisture from the air, while a HEPA air purifier safely captures loose spores already circulating."
  },
  {
    question: "Does HEPA 13 remove mold?",
    answer: "Yes, Medical-grade HEPA 13 filters securely capture 99.95% of airborne particles as tiny as 0.1 microns, which easily and completely captures both mold spores and smaller toxic mold fragments."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Toxic Black Mold Cleanup <span className="text-indigo-600">in Gulf Breeze FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about professional toxic mold removal, severe mold costs, and critical health concerns in Gulf Breeze, Florida.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-slate-900 uppercase tracking-tight text-xs">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-white">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
