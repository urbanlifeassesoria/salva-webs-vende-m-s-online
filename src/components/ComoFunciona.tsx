/* ============================================================
   ComoFunciona — Sección storytelling con video y pasos
   ──────────────────────────────────────────────────
   Para cambiar el video: editar comoFuncionaVideoSrc.
   Para cambiar pasos: editar array "pasos".
   ============================================================ */
import { MessageSquare, ListChecks, PenTool, Rocket, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import AnimateOnScroll from "./AnimateOnScroll";
import VideoPlaceholder from "./VideoPlaceholder";

/* ── Cambiar cuando el video esté listo ── */
const comoFuncionaVideoSrc = ""; // TODO: URL del video "Cómo funciona"

/* ── Pasos del proceso ── */
const pasos = [
  {
    icon: MessageSquare,
    titulo: "1. Me cuentas qué necesitas",
    texto: "Hablamos por WhatsApp sobre tu negocio, qué vendes y a quién.",
  },
  {
    icon: ListChecks,
    titulo: "2. Elegimos el plan ideal",
    texto: "Te recomiendo el plan que mejor se ajuste a tus objetivos y presupuesto.",
  },
  {
    icon: PenTool,
    titulo: "3. Diseño y desarrollo tu web",
    texto: "Creo tu web personalizada, pensada para vender y conectar con tus clientes.",
  },
  {
    icon: Rocket,
    titulo: "4. La dejamos lista para captar clientes",
    texto: "Publicamos, conectamos WhatsApp y te acompaño en los primeros resultados.",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Ven y te explico{" "}
              <span className="text-gradient-green">cómo funciona</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              No necesitas saber de diseño, hosting o tecnología. Tú me cuentas
              tu negocio, yo te recomiendo el plan ideal y te entrego una web
              pensada para vender.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll direction="left">
            <VideoPlaceholder
              videoSrc={comoFuncionaVideoSrc || undefined}
              label="Te explico el proceso paso a paso"
              className="shadow-xl"
            />
          </AnimateOnScroll>

          <div className="space-y-6">
            {pasos.map((paso, i) => (
              <AnimateOnScroll key={paso.titulo} delay={i * 0.1} direction="right">
                <div className="flex gap-4 items-start group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <paso.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base md:text-lg mb-1">
                      {paso.titulo}
                    </h3>
                    <p className="text-muted-foreground text-sm">{paso.texto}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}

            <AnimateOnScroll delay={0.4}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:bg-green-cta-hover transition-all mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                Hablar conmigo por WhatsApp
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
