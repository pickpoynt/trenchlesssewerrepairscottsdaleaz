import { ShieldCheck, Drill, Search, Clock, Zap, Hammer } from "lucide-react";

const services = [
  {
    icon: Drill,
    title: "CIPP Pipe Lining",
    description: "Our Scottsdale specialists provide professional no-dig pipe restoration using structural epoxy liners to safeguard your Arizona property's integrity."
  },
  {
    icon: Hammer,
    title: "Pipe Bursting",
    description: "We deploy advanced pipe bursting techniques to replace collapsed lines with brand new HDPE piping for your Scottsdale property permanently."
  },
  {
    icon: Clock,
    title: "Emergency Sewer Repair",
    description: "Sewer failures require immediate attention. We offer fast 24/7 response in the Scottsdale area to halt property damage and begin restoration."
  },
  {
    icon: Search,
    title: "Sewer Camera Inspection",
    description: "High-definition video diagnostics allow us to pinpoint root intrusion and structural defects without ever breaking ground in your yard."
  },
  {
    icon: Zap,
    title: "Hydro-Jetting Service",
    description: "Industrial-grade water jetting removes decades of scale and desert root growth, prepping your lines for a perfect trenchless liner bond."
  },
  {
    icon: ShieldCheck,
    title: "Commercial Trenchless",
    description: "Minimize business downtime with our specialized commercial-grade no-dig solutions for Scottsdale retail and industrial facilities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600 border-b-4 border-indigo-600/20">trenchless sewer repair scottsdale az</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Specialized no-dig repair and installation solutions designed for Scottsdale's unique soil demands. We protect your luxury Arizona property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm italic">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
