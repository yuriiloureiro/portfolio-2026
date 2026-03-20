"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type RevealTextProps = {
  text: string;
  className?: string;
  delayPerChar?: number;
  revealOnView?: boolean;
};

export default function RevealText({
  text,
  className = "",
  delayPerChar = 0.03,
  revealOnView = false,
}: RevealTextProps) {
  // Dividimos o texto em palavras para manter a quebra de linha correta
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: delayPerChar,
        delayChildren: delayPerChar * i,
      },
    }),
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 } as any,
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`} // flex-wrap permite a quebra de linha
      variants={container}
      initial="hidden"
      {...(revealOnView
        ? { whileInView: "visible", viewport: { once: true, amount: 0.2 } }
        : { animate: "visible" })}
      custom={0}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-flex whitespace-nowrap mr-[0.25em]"
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={child}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
