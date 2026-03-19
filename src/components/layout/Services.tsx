"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Box, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Importe o hook

export default function Services() {
  const { t } = useLanguage(); // Pegue as traduções

  // Mapeamos os ícones e classes para os itens traduzidos
  const serviceIcons = [
    { icon: <Box size={24} />, className: "md:col-span-8", bgIcon: true },
    { icon: <Code2 size={24} />, className: "md:col-span-4", bgIcon: false },
    { icon: <Database size={24} />, className: "md:col-span-4", bgIcon: false },
    { icon: <Layers size={24} />, className: "md:col-span-8", bgIcon: true },
  ];

  return (
    <section id="services" className="w-full px-2 py-1">
      <div className="bg-white border border-border rounded-[2.5rem] p-8 md:p-16">
        {/* Cabeçalho Traduzido */}
        <div className="mb-12">
          <span className="text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            {t.services.label}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 tracking-tight">
            {t.services.title}{" "}
            <span className="text-primary italic font-light">
              {t.services.title_italic}
            </span>
          </h2>
        </div>

        {/* Bento Grid de Serviços Traduzido */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-background border border-border rounded-[2rem] p-8 hover:border-primary/30 transition-all ${serviceIcons[index].className}`}
            >
              {/* Ícone Azul Sólido */}
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-12 shadow-lg shadow-primary/20">
                {serviceIcons[index].icon}
              </div>

              {/* Conteúdo Traduzido */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm md:text-base max-w-xs mb-6">
                  {service.description}
                </p>

                {/* Tags Traduzidas */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 border border-primary/30 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Marca d'água decorativa */}
              {serviceIcons[index].bgIcon && (
                <div className="absolute -top-10 -right-10 opacity-[0.03] text-foreground group-hover:opacity-[0.06] transition-all duration-700 group-hover:scale-110">
                  {React.cloneElement(
                    serviceIcons[index].icon as React.ReactElement<{
                      size?: number;
                      strokeWidth?: number;
                    }>,
                    { size: 320, strokeWidth: 1 },
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
