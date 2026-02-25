import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Raccoon Trapping",
    description: "Our Douglasville GA specialists use humane, precision trapping to quickly remove nuisance raccoons from your property."
  },
  {
    icon: Search,
    title: "Humane Exclusion",
    description: "Advanced one-way doors and entry point sealing that allow wildlife to leave but prevent them from returning to your Douglasville home."
  },
  {
    icon: Activity,
    title: "Attic Decontamination",
    description: "We thoroughly clean and sanitize attics damaged by wildlife, removing waste and pheromones to ensure a safe, healthy environment."
  },
  {
    icon: Zap,
    title: "Emergency Removal",
    description: "Rapid response for active wildlife threats in Douglasville. We deploy fast-acting, professional-grade control protocols immediately."
  },
  {
    icon: Sprout,
    title: "Damage Restoration",
    description: "Targeted repair for roofing, soffits, and insulation damaged by animals using professional-grade materials and techniques."
  },
  {
    icon: ShieldCheck,
    title: "Property Shield",
    description: "Seasonal inspections and proactive monitoring to ensure your Douglasville property remains free of wildlife activity year-round."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Wildlife Removal Douglasville GA</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive wildlife solutions designed for Douglasville's unique properties. We reclaim your home's integrity and safety.
          </p>
        </div>





        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
