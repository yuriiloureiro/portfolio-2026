"use client";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", level: "Advanced", icon: "⚡" },
  { name: "React", level: "Advanced", icon: "⚛️" },
  { name: "TypeScript", level: "Intermediate", icon: "📘" },
  { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
  { name: "Framer Motion", level: "Intermediate", icon: "✨" },
  { name: "Figma", level: "Expert (UI/UX)", icon: "🎨" }, // Adicionado
  { name: "HTML5 / CSS3", level: "Advanced", icon: "🏗️" }, // Adicionado
  { name: "WordPress", level: "Expert (4y)", icon: "🌐" },
];

export default function TechStack() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">
          Technical <span className="text-accent">Stack</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(212, 255, 0, 0.4)" }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-colors"
            >
              <span className="text-2xl mb-4 block">{tech.icon}</span>
              <h3 className="font-bold text-white">{tech.name}</h3>
              <p className="text-sm text-white/40 mt-1">{tech.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}