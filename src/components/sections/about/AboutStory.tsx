"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutStory() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="flex flex-col items-center text-center py-20">
        <span className="px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">
          {t.about.story_label}
        </span>
        <h2 className="text-4xl md:text-6xl text-foreground font-syne font-semibold tracking-tighter">
          {t.about.story_title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Card de Texto */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-white border border-border rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-center"
        >
          <p className="text-xl md:text-3xl text-foreground font-medium leading-tight tracking-tight">
            {t.about.story_text}
          </p>
        </motion.div>

        {/* Card Visual (Azul com Logo/Ícone) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 bg-primary rounded-[2.5rem] flex items-center justify-center min-h-[300px] relative overflow-hidden"
        >
          {/* Aqui você pode colocar um ícone grande ou sua logo em branco */}
          <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full animate-pulse" />
          </div>

          {/* Glow decorativo */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
