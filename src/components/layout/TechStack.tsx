"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Code2,
  Smartphone,
  Database,
  Layers,
  Palette,
  Zap,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // Importe o hook

const stacks = [
  {
    name: "Next.js",
    level: "Advanced",
    icon: <Zap size={18} className="text-amber-500" />,
  },
  {
    name: "React",
    level: "Advanced",
    icon: <Layout size={18} className="text-blue-500" />,
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: <Code2 size={18} className="text-blue-600" />,
  },
  {
    name: "Tailwind",
    level: "Advanced",
    icon: <Palette size={18} className="text-cyan-500" />,
  },
  {
    name: "Framer",
    level: "Intermediate",
    icon: <Layers size={18} className="text-purple-500" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <Database size={18} className="text-green-600" />,
  },
  {
    name: "Performance",
    level: "Advanced",
    icon: <Globe size={18} className="text-yellow-500" />,
  },
  {
    name: "UI/UX",
    level: "Expert",
    icon: <Smartphone size={18} className="text-pink-500" />,
  },
];

export default function TechStack() {
  const { t } = useLanguage(); // Pegue as traduções

  return (
    <section className="w-full px-2 py-1">
      <div className="w-full bg-primary rounded-[2.5rem] py-20 md:py-32 px-4 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl z-10 flex flex-col items-center"
        >
          {/* Ícone Flutuante Superior */}
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-8">
            <Layers className="text-primary" size={20} />
          </div>

          {/* Texto de Impacto Traduzido */}
          <h2 className="text-xl md:text-3xl font-bold text-foreground tracking-tight text-center leading-tight mb-12">
            {t.techstack.headline}
          </h2>

          {/* Grid de Stacks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {stacks.map((stack) => (
              <div
                key={stack.name}
                className="p-4 rounded-2xl bg-background border border-border flex flex-col items-center text-center gap-2 hover:border-primary/20 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {stack.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[12px] text-foreground leading-none">
                    {stack.name}
                  </h3>
                  <p className="text-[9px] uppercase tracking-widest text-muted font-bold mt-1">
                    {stack.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
