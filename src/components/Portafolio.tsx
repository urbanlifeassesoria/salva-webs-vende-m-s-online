/* ============================================================
   Portafolio — Webs realizadas con slider/cards
   ──────────────────────────────────────────────────
   Para agregar proyectos: añadir un nuevo objeto al array "proyectos".
   Cada objeto necesita: titulo, descripcion, categoria, url, img.
   ============================================================ */
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

/* Imágenes de los proyectos */
import insucondImg from "@/assets/insucond.png";
import libreImg from "@/assets/libre-de-reportes.png";
import fernandoImg from "@/assets/fernando.png";

/* ============================================================
   PROYECTOS REALIZADOS
   Para agregar un nuevo proyecto:
   1. Importar la imagen arriba
   2. Añadir un objeto con: titulo, descripcion, categoria, url, img
   ============================================================ */
const proyectos = [
  {
    titulo: "Insucond",
    descripcion:
      "Escuela de conducción en Rionegro. Web enfocada en agendar citas y captar alumnos.",
    categoria: "Web corporativa",
    url: "https://www.insucond.com",
    img: insucondImg,
  },
  {
    titulo: "Libre de Reportes",
    descripcion:
      "Empresa de libertad financiera. Web para generar confianza y eliminar reportes negativos.",
    categoria: "Landing page",
    url: "https://libredereportes.com",
    img: libreImg,
  },
  {
    titulo: "Fernando Revolution",
    descripcion:
      "Asesor de seguros. Landing rápida para conseguir clientes con formulario y WhatsApp.",
    categoria: "Landing page",
    url: "https://fernando-revolution.vercel.app",
    img: fernandoImg,
  },
  /* Agregar nuevos proyectos aquí ↓ */
];

const Portafolio = () => {
  return (
    <section id="portafolio" className="py-20 md:py-28 bg-muted/50 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Webs que ya están{" "}
              <span className="text-gradient-green">vendiendo mejor</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No te vendo humo: aquí puedes ver ejemplos del tipo de trabajo que
              desarrollo.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── Scroll horizontal en mobile, grid en desktop ── */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {proyectos.map((p, i) => (
            <AnimateOnScroll key={p.titulo} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="min-w-[85vw] md:min-w-0 snap-start bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col group"
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={`Proyecto ${p.titulo}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badge categoría */}
                  <span className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {p.categoria}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg mb-2">
                    {p.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-4">
                    {p.descripcion}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-foreground font-semibold text-sm hover:text-accent transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver web
                    <span className="inline-block transition-transform group-hover/link:translate-x-1">
                      →
                    </span>
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

export default Portafolio;
