/* ============================================================
   Hero — Sección principal con promesa y mini-formulario
   Para editar textos: cambia directamente los strings en el JSX.
   Para cambiar campos del formulario: edita el form y el schema de Zod.
   ============================================================ */
import { useState } from "react";
import { MessageCircle, CheckCircle, ArrowDown } from "lucide-react";
import { WHATSAPP_LINK, buildWhatsAppLink } from "@/lib/constants";

// Opciones del select de tipo de negocio
const tiposNegocio = [
  "Restaurante",
  "Tienda física",
  "Tienda online",
  "Servicios profesionales",
  "Salud/Belleza",
  "Otro",
];

const Hero = () => {
  const [form, setForm] = useState({ nombre: "", whatsapp: "", ciudad: "", tipo: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "El WhatsApp es obligatorio";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setEnviado(true);

    // TODO: Conectar a backend real (Formspree, Zapier, API propia)
    // fetch("/api/mini-form", { method: "POST", body: JSON.stringify(form) });

    // Abre WhatsApp con datos prellenados
    const url = buildWhatsAppLink({ nombre: form.nombre, ciudad: form.ciudad, negocio: form.tipo });
    window.open(url, "_blank");
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary via-navy-light to-secondary pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Lado izquierdo — Promesa */}
          <div className="text-primary-foreground">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Páginas web que venden, no solo se ven bonitas
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-6">
              Diseño webs profesionales y rápidas para que clientes escriban directo a WhatsApp. Planes desde $200.000 al año.
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
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors text-base"
              >
                <ArrowDown className="w-5 h-5" />
                Ver servicios y precios
              </a>
            </div>
          </div>

          {/* Lado derecho — Mini formulario */}
          <div className="bg-card text-card-foreground rounded-xl shadow-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Recibe tu propuesta de web gratis</h2>
            {enviado ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-3" />
                <p className="font-semibold text-lg">¡Listo! Te contactaremos pronto.</p>
                <p className="text-muted-foreground text-sm mt-1">Revisa tu WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre del negocio *"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                  {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp *"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  />
                  {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
                </div>
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={form.ciudad}
                  onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                />
                <select
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                >
                  <option value="">Tipo de negocio</option>
                  {tiposNegocio.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity text-base"
                >
                  Comenzar ahora
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
