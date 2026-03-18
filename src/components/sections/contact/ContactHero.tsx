"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* LEFT BLUE CARD */}
        <div className="md:col-span-6 bg-primary rounded-[2.5rem] min-h-[520px] md:min-h-[680px] p-8 md:p-14 flex flex-col justify-between overflow-hidden relative">
          <div>
            <h1 className="font-syne font-semibold tracking-tighter leading-[0.95] text-white text-5xl md:text-7xl">
              {t.contact_page.left_title_line1} <br />
              <span className="text-white/55">
                {t.contact_page.left_title_line2}
              </span>{" "}
              <span className="text-white/55">
                {t.contact_page.left_title_line3}
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${t.contact_page.email_label}`}
              className="block text-white/85 text-xl md:text-2xl underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition"
            >
              {t.contact_page.email_label}
            </a>
            <a
              href="#"
              className="block text-white/85 text-xl md:text-2xl underline underline-offset-8 decoration-white/25 hover:decoration-white/60 transition"
            >
              {t.contact_page.phone_label}
            </a>
          </div>

          {/* subtle glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 blur-[80px] rounded-full" />
        </div>

        {/* RIGHT BLUE CARD (FORM) */}
        <div className="md:col-span-6 bg-primary rounded-[2.5rem] min-h-[520px] md:min-h-[680px] p-8 md:p-14 overflow-hidden relative">
          <h2 className="text-white font-syne font-semibold tracking-tighter text-3xl md:text-4xl mb-10">
            {t.contact_page.form_title}
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-6"
          >
            {/* Full name */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                {t.contact_page.full_name}
              </label>
              <input
                className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                placeholder="John Anderson"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                  {t.contact_page.email}
                </label>
                <input
                  type="email"
                  className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                  placeholder="john.anderson@gmail.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                  {t.contact_page.phone}
                </label>
                <input
                  className="h-12 md:h-14 px-5 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition"
                  placeholder="+55 (11) 99999-9999"
                />
              </div>
            </div>

            {/* Service */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                {t.contact_page.service}
              </label>

              <div className="relative">
                <select
                  className="appearance-none w-full h-12 md:h-14 px-5 pr-12 rounded-2xl bg-transparent border border-white/15 text-white focus:outline-none focus:border-white/35 transition"
                  defaultValue=""
                >
                  <option value="" disabled className="text-slate-900">
                    {t.contact_page.service_placeholder}
                  </option>
                  <option value="web" className="text-slate-900">
                    Web Development
                  </option>
                  <option value="ui" className="text-slate-900">
                    UI & Microinteractions
                  </option>
                  <option value="api" className="text-slate-900">
                    Backend & APIs
                  </option>
                  <option value="consult" className="text-slate-900">
                    Technical Consulting
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/70"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[11px] uppercase tracking-[0.22em]">
                {t.contact_page.message}
              </label>
              <textarea
                rows={5}
                className="px-5 py-4 rounded-2xl bg-transparent border border-white/15 text-white placeholder:text-white/35 focus:outline-none focus:border-white/35 transition resize-none"
                placeholder="How can I help you?"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 h-12 md:h-14 w-full rounded-full bg-white text-primary font-semibold tracking-wide"
              type="submit"
            >
              {t.contact_page.submit}
            </motion.button>
          </form>

          {/* subtle glow */}
          <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 blur-[90px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
