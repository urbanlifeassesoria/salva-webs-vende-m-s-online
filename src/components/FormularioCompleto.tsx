/* ============================================================
   Formulario Completo — Para propuesta gratis
   Para editar campos: modifica el JSX y la validación.
   Para conectar a backend: reemplaza el fetch simulado.
   ============================================================ */
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

const tiposNegocio = [
  "Restaurante",
  "Tienda física",
  "Tienda online",
  "Veterinaria",
  "Escuela de conducción",
  "Eventos",
  "Servicios profesionales",
  "Salud / Belleza",
  "Consultoría",
  "Bienes raíces",
  "Educación",
  "Transporte / Logística",
  "Tecnología",
  "Construcción",
  "Otro",
];

const presupuestos = ["$200.000", "$250.000", "$600.000", "No estoy seguro"];

const FormularioCompleto = () => {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    ciudad: "",
    negocio: "",
    sector: "",
    numProductos: "",
    redes: "",
    tieneDominio: "",
    dominio: "",
    presupuesto: "",
    expectativas: "",
    datosAuth: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const set = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.nombre.trim()) err.nombre = "Obligatorio";
    if (!form.whatsapp.trim()) err.whatsapp = "Obligatorio";
    if (!form.datosAuth) err.datosAuth = "Debes autorizar el tratamiento de datos";
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    setErrors({});

    // TODO: Conectar a backend real
    // fetch("/api/formulario-completo", { method: "POST", body: JSON.stringify(form) });

    setEnviado(true);

    const url = buildWhatsAppLink({
      nombre: form.nombre,
      ciudad: form.ciudad,
      negocio: form.negocio,
      presupuesto: form.presupuesto,
    });
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background";

  return (
    <section id="formulario" className="py-16 md:py-24 bg-gray-section">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Recibe tu propuesta de web gratis
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Llena el formulario y te enviaremos una propuesta personalizada sin compromiso.
        </p>

        {enviado ? (
          <div className="text-center py-12 bg-card rounded-xl shadow-md">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <p className="text-xl font-bold mb-2">¡Gracias por tu interés!</p>
            <p className="text-muted-foreground">Revisaremos tu información y te contactaremos pronto por WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-md p-6 md:p-8 space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium mb-1">Nombre completo *</label>
              <input type="text" value={form.nombre} onChange={(e) => set("nombre", e.target.value)} className={inputClass} />
              {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp *</label>
              <input type="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} className={inputClass} />
              {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Correo electrónico</label>
              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} />
            </div>

            {/* Ciudad y Negocio en 2 cols */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Ciudad</label>
                <input type="text" value={form.ciudad} onChange={(e) => set("ciudad", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre del negocio</label>
                <input type="text" value={form.negocio} onChange={(e) => set("negocio", e.target.value)} className={inputClass} />
              </div>
            </div>

            {/* Tipo de negocio */}
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de negocio</label>
              <select value={form.sector} onChange={(e) => set("sector", e.target.value)} className={inputClass}>
                <option value="">Selecciona</option>
                {tiposNegocio.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Num productos y redes */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">N° de productos/servicios</label>
                <input type="number" max={16} value={form.numProductos} onChange={(e) => set("numProductos", e.target.value)} className={inputClass} placeholder="Máx. sugerido: 16" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Redes sociales</label>
                <input type="text" value={form.redes} onChange={(e) => set("redes", e.target.value)} className={inputClass} placeholder="@tunegocio" />
              </div>
            </div>

            {/* Logo */}
            <div>
              <label className="block text-sm font-medium mb-1">¿Tienes logo?</label>
              <div className="flex gap-4 mt-1">
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="logo" value="si" checked={form.tieneDominio === "si"} onChange={() => set("tieneDominio", "si")} /> Sí
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="logo" value="no" checked={form.tieneDominio === "no"} onChange={() => set("tieneDominio", "no")} /> No
                </label>
              </div>
            </div>

            {/* Presupuesto */}
            <div>
              <label className="block text-sm font-medium mb-1">Presupuesto preferido</label>
              <select value={form.presupuesto} onChange={(e) => set("presupuesto", e.target.value)} className={inputClass}>
                <option value="">Selecciona</option>
                {presupuestos.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>

            {/* Expectativas */}
            <div>
              <label className="block text-sm font-medium mb-1">Cuéntame qué esperas de tu nueva web</label>
              <textarea value={form.expectativas} onChange={(e) => set("expectativas", e.target.value)} rows={4} className={inputClass} />
            </div>

            {/* Checkbox datos */}
            <div>
              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.datosAuth}
                  onChange={(e) => set("datosAuth", e.target.checked)}
                  className="mt-1"
                />
                <span>Autorizo el tratamiento de mis datos personales para recibir la propuesta de web. *</span>
              </label>
              {errors.datosAuth && <p className="text-destructive text-xs mt-1">{errors.datosAuth}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-cta text-accent-foreground font-bold py-3 rounded-lg hover:bg-yellow-cta-hover transition-colors text-base"
            >
              Enviar solicitud
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default FormularioCompleto;
