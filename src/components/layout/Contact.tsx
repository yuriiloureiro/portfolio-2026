"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Outro efeito de brilho para o fundo */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold md:text-6xl mb-6">
            Ready to start a <br />
            <span className="text-accent italic">new project?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            I&apos;m currently available for freelance work and full-time positions. 
            Let&apos;s build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:loureiroyurijobs@gmail.com" 
              className="group relative inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold text-black transition-all hover:shadow-[0_0_30px_rgba(212,255,0,0.4)] active:scale-95"
            >
              Send me an Email
            </a>
            <a 
              href="https://www.linkedin.com/in/loureiroyuri" 
              target="_blank"
              className="text-white/60 hover:text-white font-medium transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}