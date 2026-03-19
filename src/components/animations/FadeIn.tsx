"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "none";

type FadeInProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className,
  ...rest
}: FadeInProps) {
  const directions: Record<Direction, { y: number; x: number }> = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
