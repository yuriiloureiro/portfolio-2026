"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap, Code2, Users, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Magnetic from "@/components/animations/Magnetic";
import RevealText from "@/components/animations/RevealText";

const transitionMain = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionMain as any,
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } as any,
  },
};

const fadeBlur: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" } as any,
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    } as any,
  },
};

const badgeContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.0,
    } as any,
  },
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="w-full px-2 pt-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* 1. Bloco Principal (Esquerda) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="md:col-span-7 bg-primary rounded-[1.5rem] p-8 md:p-16 flex flex-col justify-center min-h-[500px] relative overflow-hidden"
        >
          {/* Título - Reveal letra por letra */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-7xl text-white leading-[1.1] md:leading-[0.9] tracking-tighter max-w-2xl font-syne font-semibold z-10"
          >
            <RevealText
              text={t.hero.title}
              className="w-full"
              delayPerChar={0.02}
            />
          </motion.h1>

          {/* Subtítulo - reveal ao entrar em view (mais sutil) */}
          <motion.p
            variants={fadeBlur}
            className="mt-6 text-sm md:text-base text-white/80 max-w-xl font-medium z-10 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Botões - Entram um por um */}
          <div className="flex flex-wrap gap-4 z-10 mt-10">
            <Magnetic strength={0.28}>
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/portfolio"
                  aria-label={t.hero.cta_primary}
                  className="bg-white text-primary px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold shadow-xl inline-flex items-center justify-center"
                >
                  {t.hero.cta_primary}
                </Link>
              </motion.div>
            </Magnetic>

            <Magnetic strength={0.22}>
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/about"
                  aria-label={t.hero.cta_secondary}
                  className="border border-white/30 text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  {t.hero.cta_secondary}
                </Link>
              </motion.div>
            </Magnetic>
          </div>

          {/* Glow de fundo - Surge bem devagar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute -bottom-24 -right-16 w-80 h-80 bg-white/15 blur-[100px] rounded-full"
          />
        </motion.div>

        {/* 2. Bloco da Imagem (Direita) */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          className="md:col-span-5 bg-card border border-border rounded-[1.5rem] overflow-hidden relative min-h-[500px]"
        >
          {/* Imagem com Ken Burns (Movimento contínuo) */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1, x: -10 }}
            animate={{ scale: 1.15, x: 10, y: [0, -5, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/hero-yuri.webp"
              alt="Yuri Loureiro"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Badge "Based in Brazil" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute top-6 left-6 z-20"
          >
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
              Based in Brazil
            </span>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* 3–6. Os 4 Cards de Baixo - Cascata final */}
        <motion.div
          variants={badgeContainer}
          initial="hidden"
          animate="show"
          className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-2"
        >
          {[
            {
              icon: <Zap size={18} />,
              title: t.hero.badge1_title,
              sub: t.hero.badge1_sub,
            },
            {
              icon: <Code2 size={18} />,
              title: t.hero.badge2_title,
              sub: t.hero.badge2_sub,
            },
            {
              icon: <Users size={18} />,
              title: t.hero.badge3_title,
              sub: t.hero.badge3_sub,
            },
            {
              icon: <Shield size={18} />,
              title: t.hero.badge4_title,
              sub: t.hero.badge4_sub,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white border border-border p-6 rounded-[1.5rem] flex flex-col items-center text-center gap-3 hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <Magnetic strength={0.14}>
                <motion.div
                  className="text-primary"
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-[13px] text-foreground leading-tight font-syne font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-muted mt-1 font-medium">
                    {item.sub}
                  </p>
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
