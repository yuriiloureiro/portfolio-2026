"use client";
import { motion } from "framer-motion";
import TechStack from "@/components/layout/TechStack";
import Projects from "@/components/layout/Projects";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import LocalTime from "@/components/ui/LocalTime";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-6">

      {/* Efeito de Fundo (Glow) */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />

      {/* Hero Section */}
      <section className="flex min-h-[90vh] w-full max-w-6xl flex-col items-center justify-center pt-32 pb-20 md:flex-row md:gap-16 md:pt-40">

        {/* Coluna da Esquerda: Texto */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <LocalTime />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.05]"
          >
            Crafting <br />
            <span className="text-accent italic">High-End</span> <br />
            Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-lg text-base text-white/60 md:text-lg leading-relaxed"
          >
            I&apos;m <span className="text-white font-medium">Yuri Loureiro</span>, a UX-first Full Stack Developer
            crafting interfaces that feel premium, fast and intentional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Coluna da Direita: Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mt-16 flex flex-1 justify-center md:mt-0"
        >
          <div className="relative h-[350px] w-[280px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 md:h-[450px] md:w-[350px]">
            <img
              src="/yuri.png"
              alt="Yuri Loureiro"
              className="h-full w-full rounded-[1.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Badge flutuante */}
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">Based in Brazil</p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Seções */}
      <TechStack />
      <Projects />
      <Contact />
      <Footer />

    </main>
  );
}