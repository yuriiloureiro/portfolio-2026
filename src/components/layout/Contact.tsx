"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Importe o hook

export default function Contact() {
  const { t } = useLanguage(); // Pegue as traduções

  return (
    <section id="contact" className="w-full px-2 py-1">
      {/* Bloco Azul de Impacto Traduzido */}
      <div className="w-full bg-primary rounded-[2.5rem] py-24 md:py-40 px-6 flex flex-col items-center justify-center relative overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="z-10 flex flex-col items-center"
        >
          <span className="text-white/70 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
            {t.contact.label}
          </span>

          <h2 className="text-4xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-12 max-w-4xl">
            {t.contact.title} <br />
            <span className="italic font-light opacity-90 text-white/80">
              {t.contact.title_italic}
            </span>
          </h2>

          {/* Botão de Email Traduzido */}
          <a
            href="mailto:seuemail@exemplo.com"
            className="group bg-white text-primary px-10 py-6 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/20"
          >
            {t.contact.cta}
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={18} />
            </div>
          </a>
        </motion.div>

        {/* Efeitos de fundo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
      </div>
    </section>
  );
}
