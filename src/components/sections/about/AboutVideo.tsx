"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutVideo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full px-2 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card border border-border rounded-[2.5rem] overflow-hidden aspect-video relative shadow-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/about-hero.webm" type="video/webm" />
        </video>
      </motion.div>
    </section>
  );
}
