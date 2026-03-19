"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesFAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-2 pb-2">
      <div className="w-full bg-primary rounded-[2.5rem] py-20 md:py-28 px-4 flex justify-center items-center relative overflow-hidden">
        <div className="w-full max-w-4xl bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="px-4 py-1 bg-primary/5 border border-primary/10 rounded-full text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">
              {t.services_page.faq_label}
            </span>
            <h2 className="text-4xl md:text-6xl text-primary font-syne font-semibold tracking-tighter leading-none">
              {t.services_page.faq_title}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {t.services_page.faqs.map((faq, i) => (
              <div key={i} className="w-full">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full flex justify-between items-center p-5 md:p-6 rounded-2xl transition-all border ${
                    openIndex === i
                      ? "bg-primary/5 border-primary/20"
                      : "bg-slate-50 border-transparent hover:border-primary/10"
                  }`}
                >
                  <span
                    className={`text-sm md:text-base font-bold tracking-tight text-left pr-4 ${
                      openIndex === i ? "text-primary" : "text-slate-600"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === i
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 text-slate-500 text-sm md:text-base leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
    </section>
  );
}
