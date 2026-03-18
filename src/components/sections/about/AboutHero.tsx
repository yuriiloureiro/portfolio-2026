"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pt-4 pb-2">
      <div className="bg-primary rounded-[2.5rem] py-24 md:py-40 px-6 flex flex-col items-center text-center relative overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-8"
        >
          About
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-8xl text-white font-syne font-semibold leading-[0.9] tracking-tighter max-w-4xl"
        >
          {t.about.hero_title}
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="bg-white text-primary px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            {t.about.hero_cta_portfolio}
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
            {t.about.hero_cta_services}
          </button>
        </div>
      </div>
    </section>
  );
}
