/* ============================================================
   ComoFunciona — Sección "¿No tienes claro qué web necesitas?"
   ──────────────────────────────────────────────────
   Sin video. 4 pasos claros con iconos e imágenes.
   Para cambiar pasos: editar array "pasos".
   ============================================================ */
import { MessageSquare, ListChecks, PenTool, Rocket, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Imágenes de pasos ── */
import imgWhatsapp from "@/assets/whatsapp.webp";
import imgFacebook from "@/assets/facebook.jpg";
import imgDiseno from "@/assets/diseno-web.jpg";
import imgPublicamos from "@/assets/publicamos.avif";

/* ── Pasos del proceso ── */
const pasos = [
  {
    icon: MessageSquare,
    titulo: "1. Me cuentas qué necesitas",
    texto: "Hablamos por WhatsApp sobre tu negocio, qué vendes y a quién.",
    image: imgWhatsapp,
  },
  {
    icon: ListChecks,
    titulo: "2. Elegimos el plan ideal",
    texto: "Te recomiendo el plan que mejor se ajuste a tus objetivos y presupuesto.",
    image: imgFacebook,
  },
  {
    icon: PenTool,
    titulo: "3. Diseño y desarrollo tu web",
    texto: "Creo tu web personalizada, pensada para vender y conectar con tus clientes.",
    image: imgDiseno,
  },
  {
    icon: Rocket,
    titulo: "4. La dejamos lista para captar clientes",
    texto: "Publicamos, conectamos WhatsApp y te acompaño en los primeros resultados.",
    image: imgPublicamos,
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* ── Decoración de fondo ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* ── Título y subtítulo ── */}
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              ¿Aún no tienes claro{" "}
              <span className="text-gradient-green-dark">qué tipo de web necesitas?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              No te preocupes, podemos hablarlo. Me cuentas sobre tu negocio
              y juntos elegimos la mejor opción para ti.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Grid de pasos (sin video) ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pasos.map((paso, i) => (
            <AnimateOnScroll key={paso.titulo} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* ── Imagen del paso ── */}
                {paso.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={paso.image}
                      alt={paso.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* ── Contenido ── */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-3">
                    <paso.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-base mb-1">
                    {paso.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1">{paso.texto}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── CTA ── */}
        <AnimateOnScroll>
          <div className="text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-full hover:bg-green-cta-hover transition-all text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              Hablar conmigo por WhatsApp
            </a>
            <p className="text-muted-foreground text-sm mt-3">
              El proceso toma entre 2 y 3 días hábiles
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ComoFunciona;
