"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ServicesProcess() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-4">
            {t.services_page.process_label}
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-semibold tracking-tighter text-foreground">
            {t.services_page.process_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {t.services_page.process_steps.map((s, idx) => {
            const isNumberCard = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`md:col-span-6 rounded-[2rem] border border-border overflow-hidden ${
                  isNumberCard ? "bg-primary text-white" : "bg-background"
                }`}
              >
                <div className="p-7 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div
                        className={`text-5xl md:text-7xl font-syne font-semibold tracking-tighter ${
                          isNumberCard ? "text-white" : "text-primary"
                        }`}
                      >
                        {s.n}
                      </div>
                      <h3
                        className={`mt-4 text-xl md:text-2xl font-syne font-semibold tracking-tight ${
                          isNumberCard ? "text-white" : "text-foreground"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mt-3 text-sm md:text-base leading-relaxed max-w-prose ${
                          isNumberCard ? "text-white/80" : "text-muted"
                        }`}
                      >
                        {s.text}
                      </p>

                      <div className="flex items-center gap-3 mt-6">
                        <span
                          className={`text-[11px] px-3 py-1 rounded-full border ${
                            isNumberCard
                              ? "border-white/20 bg-white/10 text-white"
                              : "border-border bg-white text-foreground/70"
                          }`}
                        >
                          {s.meta}
                        </span>
                        <span
                          className={`text-[11px] px-3 py-1 rounded-full border ${
                            isNumberCard
                              ? "border-white/20 bg-white/10 text-white"
                              : "border-border bg-white text-foreground/70"
                          }`}
                        >
                          {s.chip}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
