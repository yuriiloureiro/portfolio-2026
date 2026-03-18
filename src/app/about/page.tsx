import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutVideo from "@/components/sections/about/AboutVideo";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutFAQ from "@/components/sections/about/AboutFAQ";

export const metadata = {
  title: "Sobre | Yuri Loureiro - Full Stack Developer",
  description:
    "Conheça a trajetória, os valores e a stack tecnológica de Yuri Loureiro, desenvolvedor focado em performance e experiências digitais modernas.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-2">
        <AboutHero />
        <AboutVideo />
        <AboutStory />
        <AboutValues />
        <AboutFAQ />
      </div>
      <Footer />
    </main>
  );
}
