import Hero from "@/components/layout/Hero";
import TechStack from "@/components/layout/TechStack";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center w-full">
      {/* Agora todas as seções são irmãs e controlam sua própria largura */}
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
