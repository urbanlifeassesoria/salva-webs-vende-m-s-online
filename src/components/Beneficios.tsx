/* ============================================================
   Beneficios — ¿Por qué trabajar conmigo?
   ──────────────────────────────────────────────────
   Para editar beneficios: modificar array "beneficios".
   ============================================================ */
import {
  Palette,
  Target,
  HeartHandshake,
  MessageSquareMore,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Beneficios / diferenciales ── */
const beneficios = [
  {
    icon: Palette,
    titulo: "Diseño que no parece plantilla",
    texto: "Cada web es única, diseñada desde cero para tu marca y tu cliente ideal.",
  },
  {
    icon: Target,
    titulo: "Web pensada para vender",
    texto: "No solo se ve bonita: está enfocada en que te contacten y te compren.",
  },
  {
    icon: HeartHandshake,
    titulo: "Atención cercana y acompañamiento",
    texto: "Trabajo directo contigo por WhatsApp. Sin intermediarios ni tickets de soporte.",
  },
  {
    icon: MessageSquareMore,
    titulo: "Integración a WhatsApp y formularios",
    texto: "Todos los caminos llevan a tu WhatsApp: botones, formularios y CTAs.",
  },
  {
    icon: Briefcase,
    titulo: "Entregas enfocadas en negocio",
    texto: "No solo diseño: pienso en tu cliente, tu oferta y tu conversión.",
  },
];

const Beneficios = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              ¿Por qué{" "}
              <span className="text-gradient-green">trabajar conmigo?</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              No soy una agencia gigante. Soy un desarrollador que entiende tu
              negocio y te entrega resultados reales.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {beneficios.map((b, i) => (
            <AnimateOnScroll key={b.titulo} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="glass-light rounded-2xl p-6 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground mb-2">
                  {b.titulo}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {b.texto}
                </p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
