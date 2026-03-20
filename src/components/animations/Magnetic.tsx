"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type MagneticProps = {
  children: React.ReactNode;
  strength?: number; // multiplicador (padrão 0.35)
  className?: string;
  style?: React.CSSProperties;
};

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
  style,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updateEnabled = (e: MediaQueryListEvent | MediaQueryList) => {
      // MediaQueryListEvent é usado quando o listener dispara, MediaQueryList para chamada inicial
      setEnabled(Boolean((e as MediaQueryList).matches));
    };

    // estado inicial
    updateEnabled(mediaQuery);

    // registra listener compatível com browsers novos e antigos
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateEnabled as EventListener);
    } else if (typeof (mediaQuery as any).addListener === "function") {
      // fallback para browsers que ainda usam addListener
      (mediaQuery as any).addListener(updateEnabled);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener(
          "change",
          updateEnabled as EventListener,
        );
      } else if (typeof (mediaQuery as any).removeListener === "function") {
        (mediaQuery as any).removeListener(updateEnabled);
      }
    };
  }, []);

  const handleMove = (e: React.MouseEvent) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = (e.clientX - cx) * strength;
    const y = (e.clientY - cy) * strength;
    setPos({ x, y });
  };

  const handleLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  if (!enabled) {
    // fallback: apenas renderiza conteúdo normal em touch
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.12 }}
    >
      {children}
    </motion.div>
  );
}
