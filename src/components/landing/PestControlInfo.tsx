import { ShieldCheck, AlertTriangle } from "lucide-react";

const PestControlInfo = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-slate-900 font-sans">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Main Info Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white mb-6 uppercase tracking-widest text-[10px] font-bold shadow-lg shadow-indigo-900/20">
                                <AlertTriangle className="w-4 h-4" />
                                Pest Alert: Baton Rouge LA
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                                Professional <span className="text-indigo-600">pest control baton rouge</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Baton Rouge, known as the "Red Stick City," faces unique pest challenges due to its humid subtropical climate and its location along the Mississippi River bluffs. From Formosan termites to seasonal rodent intrusions, professional pest management is essential for protecting your property's value and your family's health in Louisiana's capital.
                                </p>
                                <p className="italic border-l-4 border-indigo-600 pl-6 bg-slate-50 py-4 rounded-r-2xl">
                                    "Common pests in Baton Rouge can cause thousands of dollars in structural damage or spread diseases. Our localized treatment plans ensure your home remains a safe haven year-round."
                                </p>
                                <p>
                                    Our expertise in East Baton Rouge Parish means we understand the specific behaviors of local pests. We don't just spray; we implement comprehensive exclusion zones and eco-friendly treatments that address the root of the infestation, keeping your home protected against the unique pest pressure of the deep south.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
                            <img
                                src="/2.jpeg"
                                alt="Pest Control Specialist in Baton Rouge LA"
                                className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-100 w-full object-cover h-[400px]"
                            />
                        </div>
                    </div>

                    {/* Q&A Section - Expert Knowledge Base */}
                    <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden mb-24">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <img src="/3.jpeg" alt="" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center uppercase tracking-tight">
                                Pest Control <span className="text-indigo-500">Expert Knowledge Base</span>
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">How much does it cost to have pest control out?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Initial visits in Baton Rouge typically range from $150 to $300, with quarterly maintenance plans offering lower per-visit costs for ongoing protection.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">How to 100% get rid of mice?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Successful rodent removal requires a combination of professional trapping, sanitation improvements, and thorough structural exclusion to seal all entry points.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">How many times does pest control come for bed bugs?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Most bed bug treatments require 2 to 3 visits spaced 10-14 days apart to ensure all life cycles, including newly hatched eggs, are eliminated.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What smells do mice hate?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Mice strongly dislike the scent of peppermint oil, cloves, and cayenne pepper, though these are best used as supplements to professional exclusion.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">Is it worth doing pest control?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Yes. Professional pest control prevents property damage, protects against health risks, and provides peace of mind that DIY methods simply cannot match.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What is the cheapest way to get rid of rats?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">The most cost-effective way is prevention through sanitation and sealing small holes (the size of a quarter) before an infestation begins.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">How long does a pest control treatment last?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Standard exterior treatments typicaly last 60-90 days, which is why quarterly service plans are recommended for year-round protection in Louisiana.</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What are signs of mice in my house?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Early signs include small droppings, gnaw marks on food packaging or wires, scratching sounds at night, and greasy smudge marks along baseboards.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What kills mice instantly?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Professional-grade snap traps and electronic traps are the most effective way to eliminate mice instantly when placed correctly along their travel paths.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What time of night are mice most active?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Mice are nocturnal and most active between 10 PM and 2 AM when human activity is lowest and they can forage for food safely.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What is the hardest pest to get rid of?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Bed bugs and German cockroaches are widely considered the most difficult to eradicate due to their rapid reproduction and ability to hide in tiny crevices.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">Can I sleep in my house after pest control?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Yes, in most cases. Professionals use modern products that allow you to remain home, though you may need to wait 1-2 hours for liquid treatments to dry.</p>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tight text-xs leading-relaxed">What are the negatives of pest control?</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">Potential downsides include temporary odors, the need to vacate for certain specialized treatments, and the recurring cost of maintenance plans.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Info Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-2xl" />
                            <img
                                src="/4.jpeg"
                                alt="Pest Control Service Baton Rouge LA"
                                className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-100 w-full object-cover h-[400px]"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight leading-tight">
                                Safe & <span className="text-indigo-600">Certified Pest Removal</span>
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                                <p>
                                    We treat pest infestations with the professional care they require. Our Baton Rouge technicians are fully licensed and follow strict safety protocols, utilizing eco-responsible products that are safe for your family and pets.
                                </p>
                                <p>
                                    From termite baiting systems to precision perimeter treatments, we use the latest technology to ensure your home is protected. Our goal is to provide a long-term solution that not only eliminates current pests but prevents future intrusions in the Red Stick City.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Need expert <span className="text-indigo-600">pest control baton rouge</span>?</h3>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium">Protect your home and your health today. Our Baton Rouge pest specialists are ready to provide a thorough assessment and a safe, permanent solution to your pest problems.</p>
                        <a
                            href="tel:3238801224"
                            className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-indigo-900/20 hover:-translate-y-1"
                        >
                            Contact Baton Rouge Specialists
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PestControlInfo;
