/* ============================================================
   Beneficios — Por qué nuestras webs venden
   Para editar beneficios: modifica el array "beneficios".
   ============================================================ */
import { Target, LayoutList, MessageSquareMore, Gauge, Handshake } from "lucide-react";

const beneficios = [
  { icon: Target, texto: "Texto pensado para hablarle a tu cliente, no solo para hablar de tu empresa." },
  { icon: LayoutList, texto: "Estructura clara: problema, solución, beneficios, prueba social y llamada a la acción." },
  { icon: MessageSquareMore, texto: "Todos los caminos llevan a WhatsApp: botones, secciones y formularios." },
  { icon: Gauge, texto: "Máximo 16 productos/servicios para que la web no confunda y cargue rápido." },
  { icon: Handshake, texto: "Acompañamiento después de publicar: ajustes y recomendaciones en la renovación anual." },
];

const Beneficios = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Por qué nuestras webs venden
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {beneficios.map((b, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>

        {/* Franja resaltada */}
        <div className="bg-primary text-primary-foreground rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl font-bold">
            Si la propuesta de tu web no te gusta, no pagas nada. Solo cobramos cuando la apruebas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
