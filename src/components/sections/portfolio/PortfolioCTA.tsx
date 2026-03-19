"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function PortfolioCTA() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-primary rounded-[2.5rem] p-8 md:p-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-syne font-semibold tracking-tighter leading-tight">
            {t.portfolio_page.cta_title}
          </h2>
        </div>

        <div className="flex gap-3 relative z-10">
          <Link
            href="/contact"
            className="h-12 px-8 rounded-full bg-white text-primary font-bold text-sm inline-flex items-center hover:scale-105 transition-transform"
          >
            {t.portfolio_page.cta_primary}
          </Link>
          <Link
            href="/services"
            className="h-12 px-8 rounded-full bg-white/10 text-white font-bold text-sm inline-flex items-center border border-white/20 hover:bg-white/20 transition"
          >
            {t.portfolio_page.cta_secondary}
          </Link>
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}
