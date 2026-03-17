/* ============================================================
   Hero — Sección principal con video + copy potente
   ──────────────────────────────────────────────────
   Para cambiar el video: editar heroVideoSrc abajo.
   Para cambiar el poster: editar heroPosterSrc.
   Para cambiar textos: editar directamente el JSX.
   ============================================================ */
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_HERO } from "@/lib/constants";
import VideoPlaceholder from "./VideoPlaceholder";
import heroMockups from "@/assets/hero-mockups.png";

/* ── Cambiar estas URLs cuando los videos estén listos ── */
const heroVideoSrc = "/videos/hero-presentacion.mp4"; // TODO: URL del video del hero
const heroPosterSrc = heroMockups; // Poster image del video

/* ── Puntos de valor debajo del CTA ── */
const bullets = [
  "Diseño único",
  "Entrega funcional",
  "Enfoque en ventas",
  "Acompañamiento real",
];

/* ── Items de la barra de confianza ── */
const trustItems = [
  { text: "Webs que convierten", icon: "🎯" },
  { text: "Diseño responsive", icon: "📱" },
  { text: "Integración a WhatsApp", icon: "💬" },
  { text: "Entrega lista para vender", icon: "🚀" },
];

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary"
    >
      {/* ── Fondo con gradiente y elementos decorativos ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-light to-primary" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Contenido principal ── */}
      <div className="container relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Columna izquierda: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium">
                Diseño web para negocios que quieren vender más
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Tu próxima web{" "}
              <span className="text-gradient-green">no debería verse</span>{" "}
              como plantilla
            </h1>

            <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mb-4">
              Creo webs que se ven pro, convierten a WhatsApp y te ayudan a
              vender más desde el primer clic.
            </p>

            <p className="text-primary-foreground/50 text-sm mb-8">
              Landing pages, webs autoadministrables, tiendas virtuales y
              sistemas para atraer clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={WHATSAPP_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-full hover:bg-green-cta-hover transition-all hover:shadow-lg hover:shadow-accent/20 text-base"
              >
                Quiero mi web
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-medium px-7 py-3.5 rounded-full hover:bg-primary-foreground/5 transition-colors text-base"
              >
                Ver planes
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Columna derecha: Video ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 rounded-2xl blur-xl opacity-60" />
            <div className="relative">
              <VideoPlaceholder
                videoSrc={heroVideoSrc || undefined}
                posterSrc={heroPosterSrc}
                label="Salva te explica cómo funciona"
                className="shadow-2xl shadow-primary/50"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Barra de confianza ── */}
      <div className="relative z-10 mt-auto">
        <div className="bg-primary-foreground/5 backdrop-blur-md border-t border-primary-foreground/10">
          <div className="container py-4 md:py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 justify-center md:justify-start"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-primary-foreground/70 text-xs md:text-sm font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
