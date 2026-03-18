"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutValues() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Zap size={24} />,
      title: t.about.value1_title,
      text: t.about.value1_text,
    },
    {
      icon: <Shield size={24} />,
      title: t.about.value2_title,
      text: t.about.value2_text,
    },
    {
      icon: <Heart size={24} />,
      title: t.about.value3_title,
      text: t.about.value3_text,
    },
  ];

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-20">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4 block">
            {t.about.values_label}
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-semibold tracking-tighter text-foreground">
            {t.about.values_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
              <p className="text-muted leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
