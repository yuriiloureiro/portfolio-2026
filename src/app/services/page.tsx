import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesVideo from "@/components/sections/services/ServicesVideo";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesProcess from "@/components/sections/services/ServicesProcess";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-2">
        <ServicesHero />
        <ServicesVideo />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesFAQ />
      </div>
      <Footer />
    </main>
  );
}
