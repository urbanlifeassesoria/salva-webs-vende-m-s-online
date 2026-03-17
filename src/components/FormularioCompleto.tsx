/* ============================================================
   FormularioCompleto — Formulario breve y vendedor
   ──────────────────────────────────────────────────
   Para editar campos: modificar el JSX y la validación.
   Para conectar a backend: reemplazar el TODO de fetch.
   Opciones de "necesidad": editar array "necesidades".
   ============================================================ */
import { useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Opciones del select "¿Qué necesitas?" ── */
const necesidades = [
  "Landing page (Presencia Web)",
  "Web autoadministrable (WordPress)",
  "Clientes con pauta (Clientes al Instante)",
  "Tienda virtual (WooCommerce)",
  "No estoy seguro, quiero que me asesoren",
];

const FormularioCompleto = () => {
  const [form, setForm] = useState({
    nombre: "",
    negocio: "",
    necesidad: "",
    whatsapp: "",
    mensaje: "",
    datosAuth: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  /* Helper para actualizar campos */
  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  /* ── Envío del formulario ── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};

    /* Validación */
    if (!form.nombre.trim()) err.nombre = "Tu nombre es obligatorio";
    if (!form.whatsapp.trim()) err.whatsapp = "Necesito tu WhatsApp para contactarte";
    if (!form.datosAuth)
      err.datosAuth = "Debes autorizar el tratamiento de datos";

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});

    /* TODO: Conectar a backend real */
    // fetch("/api/formulario", { method: "POST", body: JSON.stringify(form) });

    setEnviado(true);

    /* Abrir WhatsApp con mensaje prellenado */
    const url = buildWhatsAppLink({
      nombre: form.nombre,
      negocio: form.negocio,
      necesidad: form.necesidad,
      whatsapp: form.whatsapp,
      mensaje: form.mensaje,
    });
    window.open(url, "_blank");
  };

  /* Estilos reutilizables para inputs */
  const inputClass =
    "w-full border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-background transition-colors";

  return (
    <section id="formulario" className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              ¿Listo para{" "}
              <span className="text-gradient-green-dark">tu nueva web?</span>
            </h2>
            <p className="text-muted-foreground">
              Cuéntame qué necesitas y te contacto por WhatsApp con una
              propuesta sin compromiso.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          {enviado ? (
            /* ── Estado de éxito ── */
            <div className="text-center py-12 bg-card rounded-2xl shadow-lg border border-border">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <p className="text-xl font-display font-bold mb-2">
                ¡Gracias por tu interés!
              </p>
              <p className="text-muted-foreground">
                Revisaré tu información y te contactaré pronto por WhatsApp.
              </p>
            </div>
          ) : (
            /* ── Formulario ── */
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 space-y-5"
            >
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => set("nombre", e.target.value)}
                  className={inputClass}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Negocio */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Nombre del negocio
                </label>
                <input
                  type="text"
                  value={form.negocio}
                  onChange={(e) => set("negocio", e.target.value)}
                  className={inputClass}
                  placeholder="Ej: Restaurante El Sabor"
                />
              </div>

              {/* ¿Qué necesitas? */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  ¿Qué necesitas?
                </label>
                <select
                  value={form.necesidad}
                  onChange={(e) => set("necesidad", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Selecciona una opción</option>
                  {necesidades.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Tu WhatsApp *
                </label>
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp", e.target.value)}
                  className={inputClass}
                  placeholder="+57 300 000 0000"
                />
                {errors.whatsapp && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.whatsapp}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Cuéntame más (opcional)
                </label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => set("mensaje", e.target.value)}
                  rows={3}
                  className={inputClass}
                  placeholder="¿Algo que quieras contarme sobre tu negocio o lo que esperas?"
                />
              </div>

              {/* Checkbox datos */}
              <div>
                <label className="flex items-start gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.datosAuth}
                    onChange={(e) => set("datosAuth", e.target.checked)}
                    className="mt-1 accent-accent"
                  />
                  <span className="text-muted-foreground">
                    Autorizo el tratamiento de mis datos personales para recibir
                    la propuesta. *
                  </span>
                </label>
                {errors.datosAuth && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.datosAuth}
                  </p>
                )}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-3.5 rounded-full hover:bg-green-cta-hover transition-all text-base hover:shadow-lg hover:shadow-accent/20"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar y hablar por WhatsApp
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FormularioCompleto;
