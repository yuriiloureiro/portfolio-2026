"use client";

import { motion } from "framer-motion";

export default function ServicesVideo() {
  return (
    <section className="w-full px-2 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full aspect-video md:aspect-[21/9] bg-slate-100 rounded-[2.5rem] overflow-hidden border border-border relative group cursor-pointer"
      >
        {/* Overlay sutil para dar profundidade */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />

        {/* O Vídeo - Substitua o src pelo seu arquivo em public/ */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
        >
          <source src="/videos/services-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Badge flutuante opcional (estilo Circuit) */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
            Showcase 2026
          </div>
        </div>
      </motion.div>
    </section>
  );
}
