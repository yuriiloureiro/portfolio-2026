"use client";

import Link from "next/link";
import { Code2, PanelsTopLeft, Cloud, LineChart, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Mapeamos os ícones para usarmos dentro do loop
const icons = [Code2, PanelsTopLeft, Cloud, LineChart, Shield];

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-4">
            {t.services_page.section_label}
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-semibold tracking-tighter text-foreground">
            {t.services_page.section_title}
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            {t.services_page.section_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {t.services_page.cards.map((it, idx) => {
            const Icon = icons[idx] || Shield; // Pega o ícone correspondente ou um padrão
            return (
              <div
                key={idx}
                className="rounded-[2rem] border border-border bg-background p-7 hover:bg-white transition"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon size={18} />
                </div>
                <h3 className="font-syne font-semibold tracking-tight text-lg text-foreground">
                  {it.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mt-2">
                  {it.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1 rounded-full border border-border bg-white text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA BAR */}
          <div className="md:col-span-3 rounded-[2rem] bg-primary text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-2">
            <div>
              <p className="font-syne font-semibold text-2xl md:text-3xl tracking-tighter">
                {t.services_page.cta_bar_title}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="h-10 px-5 rounded-full bg-white text-primary font-semibold text-sm inline-flex items-center"
              >
                {t.services_page.cta_bar_primary}
              </Link>
              <Link
                href="/portfolio"
                className="h-10 px-5 rounded-full bg-white/10 text-white font-semibold text-sm inline-flex items-center border border-white/15 hover:bg-white/15 transition"
              >
                {t.services_page.cta_bar_secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
