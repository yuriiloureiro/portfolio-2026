"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

// Altere a primeira linha do return para incluir a margem superior (mt-2 ou mt-4)
export default function HomeContact() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2 pt-2">
      {" "}
      <div className="bg-primary rounded-[2.5rem] min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center text-center p-8 md:p-20 relative overflow-hidden">
        {/* Badge Superior */}
        <div className="border border-white/30 rounded-full px-6 py-2 mb-8">
          <span className="text-white text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em]">
            {t.contact_page.form_title}
          </span>
        </div>

        {/* Título Central */}
        <h2 className="font-syne font-semibold tracking-tighter leading-[1.1] text-white text-4xl md:text-7xl max-w-4xl mb-12">
          {t.contact_page.left_title_line1} <br />
          <span className="opacity-60">
            {t.contact_page.left_title_line2}
          </span>{" "}
          <br />
          <span className="opacity-60 italic font-light">
            {t.contact_page.left_title_line3}
          </span>
        </h2>

        {/* Botões Lado a Lado */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-colors hover:bg-white/90"
            >
              {t.contact_page.submit}
            </motion.button>
          </Link>

          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-colors hover:bg-white/10"
            >
              {t.nav.portfolio || "View Projects"}
            </motion.button>
          </Link>
        </div>

        {/* Glows decorativos sutis */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
