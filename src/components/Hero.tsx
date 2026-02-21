/* ============================================================
   Hero — Sección principal con imagen de fondo y promesa
   ============================================================ */
import { MessageCircle, CheckCircle, ArrowDown } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroMockups from "@/assets/hero-mockups.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroMockups})` }}
      />
      {/* Degradado overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />

      <div className="container relative z-10">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Páginas web que venden, no solo se ven bonitas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-6">
            Diseño webs profesionales y rápidas para que clientes escriban directo a WhatsApp. Planes desde $150.000 al año.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Máximo 16 productos o servicios para que tu web sea clara y rápida.",
              "Todos los botones llevan a tu WhatsApp.",
              "Primero ves una propuesta de tu web gratis. Solo pagas si te gusta.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-yellow-cta shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quiero mi web de ventas - abrir WhatsApp"
              className="inline-flex items-center justify-center gap-2 bg-yellow-cta text-accent-foreground font-bold px-6 py-3 rounded-lg hover:bg-yellow-cta-hover transition-colors text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Quiero mi web de ventas
            </a>
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
            >
              <ArrowDown className="w-5 h-5" />
              Recibir propuesta gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
