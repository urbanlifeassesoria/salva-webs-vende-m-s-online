/* ============================================================
   CTAFinal — Cierre comercial fuerte con CTA doble
   ──────────────────────────────────────────────────
   Para cambiar textos o enlaces: editar directamente el JSX.
   ============================================================ */
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_CTA_FINAL, WHATSAPP_HERO } from "@/lib/constants";
import AnimateOnScroll from "./AnimateOnScroll";

const CTAFinal = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Si ya vas a invertir en una web, que sea una que{" "}
            <span className="text-gradient-green">
              sí te ayude a vender
            </span>
          </h2>

          <p className="text-primary-foreground/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Te ayudo a elegir el plan correcto y a construir una web que se vea
            profesional, funcione bien y te acerque clientes.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_HERO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-full hover:bg-green-cta-hover transition-colors text-base animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Escribirme por WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_CTA_FINAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-medium px-8 py-4 rounded-full hover:bg-primary-foreground/5 transition-colors text-base"
            >
              Quiero que me expliques
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CTAFinal;
