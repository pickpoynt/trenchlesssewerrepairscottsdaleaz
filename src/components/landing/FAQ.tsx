import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does it cost to have pest control out?",
    answer: "Professional pest control in Baton Rouge typically ranges from $150 to $300 for an initial visit. The cost is influenced by the type of pest, the size of your property, and whether you choose a one-time service or an ongoing maintenance plan."
  },
  {
    question: "How to 100% get rid of mice?",
    answer: "Eliminating mice requires a professional multi-step approach: identifying entry points, thorough structural exclusion (sealing holes), and strategic trapping to remove the existing population safely."
  },
  {
    question: "How many times does pest control come for bed bugs?",
    answer: "Effective bed bug eradication in Baton Rouge usually requires 2 to 3 professional treatments. These are spaced about two weeks apart to ensure all life cycles, including newly hatched eggs, are fully eliminated."
  },
  {
    question: "What smells do mice hate?",
    answer: "Mice have a strong sense of smell and generally dislike peppermint oil, cloves, and vinegar. While these can be subtle deterrents, they are most effective when paired with professional exclusion services."
  },
  {
    question: "Is it worth doing pest control?",
    answer: "Absolutely. Professional pest control prevents expensive structural damage (especially from termites), reduces health risks from pests like roaches and rodents, and provides long-term peace of mind."
  },
  {
    question: "What is the cheapest way to get rid of rats?",
    answer: "The most cost-effective method is prevention. Sealing entry points and maintaining strict sanitation can prevent an infestation. Once rats are present, professional trapping is the most reliable way to avoid recurring costs."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Pest Control <span className="text-indigo-600">in Baton Rouge LA FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about professional pest removal, extermination costs, and local pest challenges in Baton Rouge, Louisiana.
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
