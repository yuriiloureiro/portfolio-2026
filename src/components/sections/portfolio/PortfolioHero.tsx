"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioHero() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-primary rounded-[2.5rem] px-6 md:px-12 py-16 md:py-24 text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-syne font-semibold tracking-tighter leading-[1.05] text-4xl md:text-6xl"
        >
          {t.portfolio_page.hero_title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="h-10 px-5 rounded-full bg-white text-primary font-semibold text-sm inline-flex items-center"
          >
            {t.portfolio_page.hero_cta_primary}
          </Link>
          <Link
            href="/about"
            className="h-10 px-5 rounded-full bg-white/10 text-white font-semibold text-sm inline-flex items-center border border-white/15 hover:bg-white/15 transition"
          >
            {t.portfolio_page.hero_cta_secondary}
          </Link>
        </motion.div>

        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 blur-[90px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 blur-[110px] rounded-full" />
      </div>
    </section>
  );
}
