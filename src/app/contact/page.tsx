import ContactHero from "@/components/sections/contact/ContactHero";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contato | Yuri Loureiro",
  description: "Entre em contato para projetos, consultoria ou oportunidades.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-2">
        <ContactHero />
      </div>
      <Footer />
    </main>
  );
}
