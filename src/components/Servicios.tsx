/* ============================================================
   Servicios y Precios — 2 servicios principales
   Para cambiar precios o textos: edita directamente en el JSX.
   Para cambiar enlaces de WhatsApp: edita las constantes importadas.
   ============================================================ */
import { Check, MessageCircle } from "lucide-react";
import { WHATSAPP_ANUAL, WHATSAPP_ANUNCIO } from "@/lib/constants";

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Servicios y precios
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Dos opciones claras para impulsar tu negocio online. Sin letra pequeña.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Servicio 1 — Web anual */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
            <div className="bg-primary text-primary-foreground p-6">
              <h3 className="text-xl font-bold">Páginas web que venden</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">Plan anual</p>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground text-sm">
                Tu web oficial, lista para compartir en redes y tarjetas, enfocada en generar contactos por WhatsApp.
              </p>

              {/* Plan Subdominio */}
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-extrabold">$200.000</span>
                  <span className="text-muted-foreground text-sm">/año</span>
                </div>
                <p className="font-semibold text-sm mb-2">Plan Subdominio</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Web de una página enfocada en ventas (máx. 16 productos/servicios)",
                    "Subdominio en Vercel (ej: tunegocio.vercel.app)",
                    "Hosting incluido",
                    "Botones a WhatsApp y formulario conectado",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Dominio Propio */}
              <div className="border-2 border-secondary rounded-lg p-4 relative">
                <span className="absolute -top-3 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded">Recomendado</span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-extrabold">$250.000</span>
                  <span className="text-muted-foreground text-sm">/año</span>
                </div>
                <p className="font-semibold text-sm mb-2">Plan Dominio Propio</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Todo lo del plan subdominio",
                    "Dominio .com o .co incluido, a nombre del cliente",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                Por solo $200.000 se renueva el hosting, dominio y contenido contigo para mantener tu web actualizada.
              </p>

              <a
                href={WHATSAPP_ANUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-yellow-cta text-accent-foreground font-bold py-3 rounded-lg hover:bg-yellow-cta-hover transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero mi web anual
              </a>
            </div>
          </div>

          {/* Servicio 2 — Web + Anuncio */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md">
            <div className="bg-secondary text-secondary-foreground p-6">
              <h3 className="text-xl font-bold">Web + Anuncio</h3>
              <p className="text-secondary-foreground/70 text-sm mt-1">Imán de clientes por 1 mes</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold">$600.000</span>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Landing específica para una sola oferta",
                  "Anuncio activo durante 1 mes (ej: Meta Ads)",
                  "Embudo completo: anuncio → WhatsApp → landing → formulario",
                  "PDFs semanales con tips de contenido para redes y guiones de respuesta a nuevos leads",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <Check className="w-4 h-4 text-yellow-cta shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground bg-muted p-3 rounded-lg">
                <strong>Nota:</strong> La landing de campaña y el anuncio están activos 1 mes. Si quieres dejar la web fija, se puede pasar a un plan anual.
              </p>

              <a
                href={WHATSAPP_ANUNCIO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-yellow-cta text-accent-foreground font-bold py-3 rounded-lg hover:bg-yellow-cta-hover transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Quiero la estrategia Web + Anuncio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
