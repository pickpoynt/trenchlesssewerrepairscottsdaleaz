import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Termite Control",
    description: "Our Baton Rouge specialists provide professional subterranean termite treatments and prevention to protect your Louisiana home's structural integrity."
  },
  {
    icon: Search,
    title: "Pest Inspections",
    description: "Comprehensive home inspections designed to identify infestations of ants, roaches, and rodents before they become a major problem in the humid Capital City."
  },
  {
    icon: Activity,
    title: "Rodent Exclusion",
    description: "We deploy advanced exclusion techniques to seal entry points and remove rats and mice from your Baton Rouge property permanently."
  },
  {
    icon: Zap,
    title: "Emergency Service",
    description: "Pest problems require immediate attention. We offer rapid response in East Baton Rouge Parish to halt infestations and begin safe removal."
  },
  {
    icon: Sprout,
    title: "Eco-Friendly Treatment",
    description: "Sustainable, kid and pet-friendly pest control solutions applied to keep your home safe while effectively eliminating seasonal pests."
  },
  {
    icon: ShieldCheck,
    title: "Mosquito Fogging",
    description: "Industrial-grade mosquito control for your outdoor spaces, perfect for enjoying the warm Baton Rouge evenings without the buzz and bites."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">pest control baton rouge</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Specialized pest removal and prevention solutions designed for Baton Rouge's unique humid climate. We restore your peace of mind and protect your Red Stick property.
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
