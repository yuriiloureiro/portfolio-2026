"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioGrid() {
  const { t } = useLanguage();

  // Pegamos as chaves reais do objeto de tradução (ex: "auramax", "caixinha-2026")
  const projectDetails = (t as any).project_details || {};
  const projectKeys = Object.keys(projectDetails);

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-4">
            {t.portfolio_page.section_label}
          </span>
          <h2 className="text-3xl md:text-5xl font-syne font-semibold tracking-tighter text-foreground">
            {t.portfolio_page.section_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectKeys.map((key, idx) => {
            const project = projectDetails[key];

            // Como suas pastas e arquivos seguem o nome da chave:
            // Ex: /projects/caixinha-2026.webp
            const imagePath = `/projects/${key}.webp`;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${key}`} className="block">
                  <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-border bg-slate-50">
                    <Image
                      src={imagePath}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 px-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-syne font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
