/* ============================================================
   AnimateOnScroll — Componente reutilizable de animación al scroll
   Usa framer-motion InView para animar elementos cuando entran
   en el viewport. Envuelve cualquier sección o bloque.
   
   Props:
   - children: contenido a animar
   - className: clases adicionales
   - delay: retraso en segundos (default 0)
   - direction: dirección de entrada (up, left, right, none)
   ============================================================ */
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const directionMap = {
  up: { y: 40, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  none: { x: 0, y: 0 },
};

const AnimateOnScroll = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) => {
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
