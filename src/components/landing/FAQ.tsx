import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How much does wildlife removal cost?",
    answer: "In Douglasville, wildlife removal costs typically range from $150 to $500 for a basic extraction, but can increase depending on the complexity of exclusion and the extent of property damage."
  },
  {
    question: "What is the phone number for animal control in Douglas GA?",
    answer: "The official Douglas County Animal Control can be reached at (770) 942-5961 for domestic animal issues, though private firms are recommended for residential wildlife removal."
  },
  {
    question: "What is nuisance wildlife removal?",
    answer: "Nuisance wildlife removal refers to the professional service of humanely trapping and relocating animals (like raccoons, squirrels, or bats) that have become a disturbance or threat to a property."
  },
  {
    question: "What happens if you get caught with a squirrel in GA?",
    answer: "In Georgia, it is illegal to keep wild squirrels as pets without a proper permit. Wildlife must be handled by licensed rehabilitators or removal specialists."
  },
  {
    question: "What is the hardest pest to get rid of?",
    answer: "Many specialists consider rats or raccoons the hardest nuisance wildlife to eliminate permanently due to their high intelligence and persistence in re-entering buildings."
  },
  {
    question: "Does homeowners insurance cover wildlife removal?",
    answer: "Most standard policies do not cover the removal itself, but they often cover the damage caused by certain wildlife, such as chewed wiring or structural harm, depending on the animal."
  },
  {
    question: "Does it cost money to call Animal Control?",
    answer: "Calling municipal animal control in Douglasville is typically free for public safety reports, but they usually do not provide removal services for wildlife inside private attics or crawlspaces."
  },
  {
    question: "Who do you call for a wild animal?",
    answer: "For wild animals on private property in Douglasville, you should call a licensed wildlife removal operator like Douglasville Wildlife Removal Pros at 3238801224."
  },
  {
    question: "What is the new pet law in Georgia?",
    answer: "Georgia recently updated laws regarding animal welfare and tethering, emphasizing proper shelter and humane treatment for domestic pets across Douglas County."
  },
  {
    question: "Who pays for animal control?",
    answer: "Douglas County Animal Control is funded by local tax dollars for public services, while private wildlife removal is the financial responsibility of the homeowner."
  },
  {
    question: "Can you find out who reported you to Animal Control?",
    answer: "Typically, reporting names are kept confidential by Douglas County Animal Control to encourage public safety reporting, though they are accessible under specific legal discovery."
  },
  {
    question: "How do you call animal control near me?",
    answer: "Residents in Douglasville can dial 770-942-5961 for the Douglas County Animal Services or use 911 for immediate public safety emergencies involving animals."
  },
  {
    question: "Is Douglas, GA a good place to live?",
    answer: "Douglasville is highly regarded for its suburban feel, historic downtown, and proximity to Atlanta, making it a popular choice for families in the West Atlanta metro area."
  },
  {
    question: "Is it illegal to walk your dog without a leash in Georgia?",
    answer: "Yes, Douglas County has strict leash laws requiring dogs to be under physical control (leashed) whenever they are off the owner's private property."
  },
  {
    question: "What are the 4 types of animal abuse?",
    answer: "The four primary categories generally recognized are neglect, physical abuse, psychological abuse (cruelty), and organized abuse (like animal fighting)."
  },
  {
    question: "Is Douglas County growing or shrinking?",
    answer: "Douglas County is one of the fastest-growing counties in the Atlanta metro area, with steady population increases over the last decade."
  },
  {
    question: "What happens to abandoned animals?",
    answer: "In Douglasville, abandoned animals are typically picked up by animal control and taken to the Douglas County Animal Shelter for medical assessment and potential adoption."
  },
  {
    question: "Do I get charged for calling Animal Control?",
    answer: "No, there is typically no charge for contacting Douglas County Animal Control for reports, though citations or fees may be issued if an owner is found in violation of local ordinances."
  },
  {
    question: "Who to call if concerned about a dog?",
    answer: "If you suspect neglect or abuse of a dog in Douglasville, contact Douglas County Animal Control at 770-942-5961 or the Douglas County Sheriff's Office."
  },
  {
    question: "What is the new dog law in Georgia?",
    answer: "Recent updates focus on 'Responsible Dog Ownership,' detailing requirements for containing dangerous dogs and increasing penalties for negligence that leads to attacks."
  },
  {
    question: "What movies were filmed in Douglas, GA?",
    answer: "Douglasville is a major filming hub, hosting productions like Stranger Things (the Hawkins Police Station), The Hunger Games movies, and The Walking Dead."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Wildlife Removal <span className="text-indigo-600">in Douglasville GA FAQ</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Common questions about animal control, wildlife exclusion techniques, and protection laws in Douglasville.
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
