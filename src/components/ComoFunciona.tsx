/* ============================================================
   Cómo Funciona — 3 pasos en tarjetas con imágenes
   Para editar pasos: modifica el array "pasos".
   ============================================================ */
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import whatsappImg from "@/assets/whatsapp.webp";
import disenoImg from "@/assets/diseno-web.jpg";
import publicamosImg from "@/assets/publicamos.avif";

const pasos = [
  {
    icon: MessageSquare,
    titulo: "1. Hablamos por WhatsApp",
    texto: "Te hago pocas preguntas sobre tu negocio, qué vendes y cuánto quieres cobrar.",
    imagen: whatsappImg,
  },
  {
    icon: PenTool,
    titulo: "2. Diseñamos tu web que vende",
    texto: "Creo una propuesta de página pensada para vender, no solo para informar. Te la muestro sin costo.",
    imagen: disenoImg,
  },
  {
    icon: Rocket,
    titulo: "3. Publicamos y ajustamos",
    texto: "Si te gusta, publicamos la web, la conectamos a tu WhatsApp y revisamos juntos cómo va funcionando.",
    imagen: publicamosImg,
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
              className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={paso.imagen}
                  alt={paso.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3 -mt-10 relative z-10 border-2 border-card">
                  <paso.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{paso.titulo}</h3>
                <p className="text-muted-foreground text-sm">{paso.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8">
          Normalmente todo el proceso toma entre 2 y 3 días hábiles, según qué tan rápido envíes la información.
        </p>
      </div>
    </section>
  );
};

export default ComoFunciona;
