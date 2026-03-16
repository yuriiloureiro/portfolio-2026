"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Name 01",
    description: "A high-performance web application built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Project Name 02",
    description: "Custom UI/UX design and development for a modern digital platform.",
    tags: ["React", "TypeScript", "Figma"],
    link: "#",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Selected <span className="text-accent italic">Works</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-md">
            A collection of projects where I combine engineering and design to solve real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 transition-all hover:border-accent/30"
            >
              {/* Imagem do Projeto */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-black/40">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              </div>

              {/* Conteúdo do Card */}
              <div className="mt-6 p-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent/80 border border-accent/20 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-6 flex items-center gap-4">
                  <a href={project.link} className="text-sm font-bold text-white hover:text-accent transition-colors">
                    View Case Study →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}