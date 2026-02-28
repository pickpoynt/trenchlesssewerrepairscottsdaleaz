import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PestControlInfo from "@/components/landing/PestControlInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Wind, Microscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>pest control baton rouge | Baton Rouge Pest Control Pros</title>
        <meta name="description" content="Professional pest control baton rouge. Expert extermination for termites, rodents, and insects. Call 3238801224 for a free estimate in Baton Rouge, LA." />
        <meta name="keywords" content="pest control baton rouge, Baton Rouge pest control, exterminator Baton Rouge LA, termite control Baton Rouge, rodent removal Baton Rouge" />
        <link rel="canonical" href="https://pestcontrolbatonrouge.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Baton Rouge Pest Control Pros",
            "image": "/2.jpeg",
            "@id": "https://pestcontrolbatonrouge.vercel.app/",
            "url": "https://pestcontrolbatonrouge.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "100 North Blvd",
              "addressLocality": "Baton Rouge",
              "addressRegion": "LA",
              "postalCode": "70801",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.4583",
              "longitude": "-91.1403"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pest Control Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Baton Rouge Pest Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Baton Rouge, LA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pest Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ant & Cockroach Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mosquito Fogging" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="pest control baton rouge | Baton Rouge Pest Control Pros" />
        <meta property="og:description" content="Expert pest control services in Baton Rouge, LA. Professional termite, rodent, and insect removal to protect your home in the Red Stick City. Call 3238801224!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pestcontrolbatonrouge.vercel.app/" />
        <meta property="og:image" content="/2.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Pest Control <br />
              <span className="text-white drop-shadow-sm uppercase">in Baton Rouge LA</span>
            </>
          }
          subtitle="Baton Rouge's premier specialists in professional pest control. From the bluffs of the Mississippi to the heart of the Red Stick City, we protect your home from termites, rodents, and seasonal pests with advanced, eco-friendly exclusion techniques."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="BATON ROUGE PEST PROS"
          phone="3238801224"
          features={[
            { icon: ShieldCheck, text: "Eco-Friendly" },
            { icon: Zap, text: "Rapid Response" },
            { icon: Microscope, text: "Full Inspection" }
          ]}
        />
        <Services />
        <WhyUs />
        <PestControlInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://wildliferemovalgastonianc.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Gastonia NC</a>
              <a href="https://wildliferemovaldouglasvillega.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Wildlife Removal Douglasville GA</a>
              <a href="https://toxicblackmoldcleanupgulfbreeze.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Toxic Black Mold Cleanup Gulf Breeze</a>
              <a href="https://bedbugheattreatmentbaltimoremd.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Bed Bug Heat Treatment Baltimore MD</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
