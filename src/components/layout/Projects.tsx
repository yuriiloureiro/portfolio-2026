"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();

  // Filtramos apenas os 3 que queremos destacar na Home
  const featuredSlugs = ["auramax", "caixinha-2026", "scaramuzzi"];
  const featuredProjects = t.portfolio_page.projects.filter((p) =>
    featuredSlugs.includes(p.slug),
  );

  return (
    <section className="w-full px-2 pb-2">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-4">
              {t.projects.label}
            </span>
            <h2 className="text-4xl md:text-6xl font-syne font-semibold tracking-tighter text-foreground leading-[0.9]">
              {t.projects.title}{" "}
              <span className="italic font-light">
                {t.projects.title_italic}
              </span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="h-12 px-8 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest inline-flex items-center hover:scale-105 transition-transform"
          >
            {t.projects.cta}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link href={`/portfolio/${project.slug}`} className="block">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-border bg-slate-50">
                  <Image
                    src={`/projects/${project.slug}.webp`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
