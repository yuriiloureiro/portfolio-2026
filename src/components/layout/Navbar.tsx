"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <header className="w-full px-2 pt-2">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex justify-between items-center px-8 py-5 bg-white border border-border rounded-[2rem] shadow-md"
      >
        {/* Logo - Versão Limpa */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
            <Image
              src="/logo-yuri-loureiro.png"
              alt="Yuri Loureiro Logo"
              width={40} // Aumentei um pouco para ocupar o espaço sem o fundo
              height={40}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-foreground tracking-tight hidden sm:block uppercase text-sm">
            Yuri <span className="text-primary">Loureiro</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-2">
          {[
            { label: t.nav.about, href: "#about" },
            { label: t.nav.portfolio, href: "#portfolio" },
            { label: t.nav.services, href: "#services" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-5 py-2 text-[10px] uppercase tracking-[0.15em] font-bold text-muted hover:text-primary hover:bg-primary/5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-full hover:border-primary/30 transition-all group"
          >
            <Globe
              size={14}
              className="text-muted group-hover:text-primary transition-colors"
            />
            <span className="text-[10px] font-bold text-muted group-hover:text-primary uppercase tracking-widest">
              {language}
            </span>
          </button>

          <a
            href="#contact"
            className="border border-primary/20 text-primary px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] hover:bg-primary hover:text-white transition-all"
          >
            {t.nav.cta}
          </a>
        </div>
      </motion.nav>
    </header>
  );
}
