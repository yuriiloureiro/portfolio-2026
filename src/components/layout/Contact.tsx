"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = {
    email: "hello@loureiroyuri.com",
    phone: "+351 912 448 530",
    phoneRaw: "+351912448530",
  };

  return (
    <section className="w-full px-2 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Big intro + compact contact links at bottom-left */}
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-white/70 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-6 inline-block">
              {t.contact.label}
            </span>

            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] max-w-lg">
              {t.contact.title}
              <br />
              <span className="italic font-light opacity-90 text-white/80">
                {t.contact.title_italic}
              </span>
            </h2>
          </motion.div>

          {/* Bottom-left contact links (no labels) */}
          <div className="mt-8 md:mt-0">
            <div className="flex flex-col items-start gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white/90 underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors text-lg font-semibold"
              >
                {contactInfo.email}
              </a>

              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="text-white/90 underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors text-lg font-semibold"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: CTA/button + extra contact badges (keeps original CTA and icons) */}
        <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 min-h-[420px] flex flex-col items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col items-center text-center"
          >
            <span className="text-white/70 font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-6">
              {t.contact.label}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-[0.95] mb-8 max-w-2xl">
              {t.contact.title}
              <br />
              <span className="italic font-light opacity-90 text-white/80">
                {t.contact.title_italic}
              </span>
            </h2>

            <a
              href={`mailto:${contactInfo.email}`}
              className="group bg-white text-primary px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/20"
            >
              {t.contact.cta}
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </a>
          </motion.div>

          {/* Small badges row (email + phone) under CTA for quick access on right side */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Mail size={16} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest">
                {contactInfo.email}
              </span>
            </a>

            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Phone size={16} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest">
                {contactInfo.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
