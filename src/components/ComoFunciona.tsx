/* ============================================================
   Cómo Funciona — 3 pasos en tarjetas
   Para editar pasos: modifica el array "pasos".
   ============================================================ */
import { MessageSquare, PenTool, Rocket } from "lucide-react";

const pasos = [
  {
    icon: MessageSquare,
    titulo: "1. Hablamos por WhatsApp",
    texto: "Te hago pocas preguntas sobre tu negocio, qué vendes y cuánto quieres cobrar.",
  },
  {
    icon: PenTool,
    titulo: "2. Diseñamos tu web que vende",
    texto: "Creo una propuesta de página pensada para vender, no solo para informar. Te la muestro sin costo.",
  },
  {
    icon: Rocket,
    titulo: "3. Publicamos y ajustamos",
    texto: "Si te gusta, publicamos la web, la conectamos a tu WhatsApp y revisamos juntos cómo va funcionando.",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-section">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          ¿Cómo funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso) => (
            <div
              key={paso.titulo}
              className="bg-card rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-full mb-4">
                <paso.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{paso.titulo}</h3>
              <p className="text-muted-foreground text-sm">{paso.texto}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          Normalmente todo el proceso toma entre 5 y 10 días hábiles, según qué tan rápido envíes la información.
        </p>
      </div>
    </section>
  );
};

export default ComoFunciona;
