/* ============================================================
   Portafolio — Grid de 3 proyectos
   Para agregar/quitar proyectos: edita el array "proyectos".
   ============================================================ */
import { ExternalLink } from "lucide-react";

const proyectos = [
  {
    titulo: "Escuela de conducción en Rionegro",
    texto: "Sitio enfocado en agendar citas y captar alumnos para cursos de conducción.",
    url: "https://www.insucond.com",
  },
  {
    titulo: "Empresa de libertad financiera",
    texto: "Web orientada a generar confianza para eliminar reportes negativos en centrales de riesgo.",
    url: "https://libredereportes.com",
  },
  {
    titulo: "Asesor de seguros personales",
    texto: "Landing rápida para conseguir clientes potenciales con formulario y WhatsApp.",
    url: "https://fernando-revolution.vercel.app",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio" className="py-16 md:py-24 bg-gray-section">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Portafolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {proyectos.map((p) => (
            <div key={p.titulo} className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="h-2 bg-secondary" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{p.titulo}</h3>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{p.texto}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver referencia
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          Estos sitios sirven como referencia del estilo y tipo de resultados que buscamos.
        </p>
      </div>
    </section>
  );
};

export default Portafolio;
