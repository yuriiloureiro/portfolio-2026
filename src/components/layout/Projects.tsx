"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Importe o hook

const projects = [
  {
    title: "E-commerce Platform",
    category: "Full Stack Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
  },
  {
    title: "AI Dashboard",
    category: "UI/UX & Frontend",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Python", "Framer"],
    link: "#",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile Solution",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Firebase"],
    link: "#",
  },
];

export default function Projects() {
  const { t } = useLanguage(); // Pegue as traduções

  return (
    <section id="portfolio" className="w-full px-2 py-1">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        {/* Cabeçalho da Seção Traduzido */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              {t.projects.label}
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-foreground mt-4 tracking-tight leading-[0.9]">
              {t.projects.title}{" "}
              <span className="text-primary italic font-light">
                {t.projects.title_italic}
              </span>
            </h2>
          </div>
          <p className="text-muted text-sm md:text-base max-w-xs">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-background border border-border mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="text-primary" size={24} />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-background border border-border rounded-full text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais Traduzido */}
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 bg-background border border-border rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            {t.projects.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
