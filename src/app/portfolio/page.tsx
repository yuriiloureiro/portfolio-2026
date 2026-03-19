import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioVideo from "@/components/sections/portfolio/PortfolioVideo";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/sections/portfolio/PortfolioCTA";

export const metadata = {
  title: "Portfólio | Yuri Loureiro",
  description:
    "Explore meus projetos recentes em desenvolvimento full-stack e design de interfaces.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-2">
        <PortfolioHero />
        <PortfolioVideo />
        <PortfolioGrid />
        <PortfolioCTA />
      </div>
      <Footer />
    </main>
  );
}
