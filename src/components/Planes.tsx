/* ============================================================
   Planes — 4 planes con cards premium y video por plan
   ──────────────────────────────────────────────────
   Para agregar/editar planes: modificar array "planes".
   Para cambiar videos: editar el campo "videoSrc" de cada plan.
   Para cambiar enlaces WhatsApp: editar en constants.ts.
   ============================================================ */
import { Check, Star, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  WHATSAPP_PLAN_PRESENCIA,
  WHATSAPP_PLAN_AUTOADMIN,
  WHATSAPP_PLAN_CLIENTES,
  WHATSAPP_PLAN_TIENDA,
} from "@/lib/constants";
import AnimateOnScroll from "./AnimateOnScroll";
import VideoPlaceholder from "./VideoPlaceholder";

/* ============================================================
   CONFIGURACIÓN DE PLANES
   Para editar un plan: modificar el objeto correspondiente.
   Para agregar un plan: añadir un nuevo objeto al array.
   ============================================================ */
const planes = [
  {
    id: "presencia",
    nombre: "Presencia Web",
    badge: null,
    /* ── Precios ── */
    precios: [
      { label: "Con subdominio", valor: "$150.000" },
      { label: "Con dominio propio", valor: "$200.000" },
    ],
    renovacion: "$150.000/año",
    descripcion:
      "Presencia profesional en internet. Ideal para negocios que quieren que los encuentren.",
    /* ── Características incluidas ── */
    incluye: [
      "Web en código (React/HTML)",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Botones a WhatsApp",
      "Diseño responsive",
      "Hosting básico",
      "Dominio incluido (plan $200k)",
    ],
    /* ── Video explicativo del plan ── */
    videoSrc: "/videos/presencia-web.mp4", // TODO: Reemplazar con URL del video
    videoLabel: "Te explico cuándo este plan sí te sirve",
    ctaTexto: "Quiero este plan",
    ctaLink: WHATSAPP_PLAN_PRESENCIA,
    /* ── Estilo visual ── */
    accentColor: "border-border",
    bgGradient: "",
  },
  {
    id: "autoadmin",
    nombre: "Web Autoadministrable",
    badge: null,
    precios: [{ label: "Pago único", valor: "$980.000" }],
    renovacion: "$280.000/año",
    descripcion:
      "Tu propio panel para editar textos e imágenes sin saber nada de código.",
    incluye: [
      "WordPress personalizado",
      "Hasta 8 páginas",
      "Panel de administración",
      "Blog incluido",
      "Hosting + dominio 1er año",
      "Correo profesional (Zoho)",
      "Capacitación en videollamada",
      "30 días de soporte",
    ],
    videoSrc: "/videos/web-autoadministrable.mp4", // TODO: Reemplazar con URL del video
    videoLabel: "Te explico por qué este plan te da más control",
    ctaTexto: "Quiero una web editable",
    ctaLink: WHATSAPP_PLAN_AUTOADMIN,
    accentColor: "border-secondary/30",
    bgGradient: "",
  },
  {
    id: "clientes",
    nombre: "Clientes al Instante",
    badge: "Más popular",
    precios: [{ label: "Pago único", valor: "$1.500.000" }],
    renovacion: null,
    descripcion:
      "No solo una web: un sistema completo para conseguir clientes desde el primer día.",
    incluye: [
      "Todo el Plan Presencia Web",
      "$600.000 en pauta Meta Ads (2 meses)",
      "Estrategia de contenido 60 días",
      "Google My Business configurado",
      "Guía de marca (colores, tono, logo)",
      "Taller Canva + IA para contenido",
      "Acompañamiento 60 días WhatsApp",
      "Mentoría de marca y ventas",
    ],
    videoSrc: "/videos/clientes-al-instante.mp4", // TODO: Reemplazar con URL del video
    videoLabel: "Te explico por qué este plan acelera resultados",
    ctaTexto: "Quiero clientes más rápido",
    ctaLink: WHATSAPP_PLAN_CLIENTES,
    accentColor: "border-accent",
    bgGradient: "bg-gradient-to-br from-accent/5 via-transparent to-secondary/5",
  },
  {
    id: "tienda",
    nombre: "Tienda Virtual",
    badge: null,
    precios: [{ label: "Pago único", valor: "$4.500.000" }],
    renovacion: "$450.000/año (hosting + soporte)",
    descripcion:
      "Vende en internet con carrito, pagos y gestión de pedidos desde tu celular.",
    incluye: [
      "WordPress + WooCommerce",
      "Hasta 50 productos cargados",
      "Hosting 10GB SSD",
      "Pasarela de pago (Wompi o Epayco)",
      "Carrito, cupones, pedidos",
      "Correo profesional incluido",
      "Dominio + hosting 1er año",
      "Capacitación gestión de tienda",
      "30 días de soporte",
    ],
    videoSrc: "/videos/tienda-virtual.mp4", // TODO: Reemplazar con URL del video
    videoLabel: "Te explico si ya estás listo para vender online",
    ctaTexto: "Quiero mi tienda virtual",
    ctaLink: WHATSAPP_PLAN_TIENDA,
    accentColor: "border-secondary/30",
    bgGradient: "",
  },
];

const Planes = () => {
  return (
    <section id="planes" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Elige el plan que{" "}
              <span className="text-gradient-green">impulse tu negocio</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
              Cada plan incluye un video donde te explico personalmente cuándo
              te conviene y qué resultados puedes esperar.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Grid de planes ── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {planes.map((plan, index) => (
            <AnimateOnScroll key={plan.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl border-2 ${plan.accentColor} ${plan.bgGradient} overflow-hidden bg-card h-full flex flex-col`}
              >
                {/* Badge "Más popular" */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      <Star className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* ── Video del plan ── */}
                <div className="p-4 pb-0">
                  <VideoPlaceholder
                    videoSrc={plan.videoSrc || undefined}
                    label={plan.videoLabel}
                  />
                </div>

                {/* ── Contenido ── */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Nombre */}
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                    {plan.nombre}
                  </h3>

                  {/* Precios */}
                  <div className="flex flex-wrap gap-3 mb-3">
                    {plan.precios.map((p) => (
                      <div key={p.label} className="flex items-baseline gap-1.5">
                        <span className="text-2xl md:text-3xl font-display font-bold text-accent-foreground">
                          {p.valor}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {p.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Renovación */}
                  {plan.renovacion && (
                    <p className="text-xs text-muted-foreground mb-3">
                      Renovación: {plan.renovacion}
                    </p>
                  )}

                  {/* Descripción */}
                  <p className="text-muted-foreground text-sm mb-5">
                    {plan.descripcion}
                  </p>

                  {/* Lista de incluye */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.incluye.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full font-bold py-3.5 rounded-full transition-all text-base ${
                      plan.id === "clientes"
                        ? "bg-accent text-accent-foreground hover:bg-green-cta-hover hover:shadow-lg hover:shadow-accent/20"
                        : "bg-primary text-primary-foreground hover:bg-navy-light"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {plan.ctaTexto}
                  </a>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planes;
