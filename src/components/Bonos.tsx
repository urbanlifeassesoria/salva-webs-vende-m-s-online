/* ============================================================
   Bonos — PDFs y recursos incluidos
   ============================================================ */
import { FileText, MessagesSquare, ClipboardCheck, MessageCircle } from "lucide-react";
import { WHATSAPP_BONOS } from "@/lib/constants";

const bonos = [
  { icon: FileText, texto: "PDFs semanales durante el primer mes con ideas de contenido para redes (reels, historias, posts)." },
  { icon: MessagesSquare, texto: "Guiones de mensajes para responder rápido en WhatsApp a nuevos clientes." },
  { icon: ClipboardCheck, texto: "Checklist mensual para revisar y mejorar la conversión de la web." },
];

const Bonos = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-section">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Bonos y PDFs incluidos
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Con cualquiera de nuestros servicios, recibes:
        </p>
        <div className="space-y-6 mb-10">
          {bonos.map((b, i) => (
            <div key={i} className="flex gap-4 items-start bg-card rounded-xl p-5 shadow-sm">
              <b.icon className="w-6 h-6 text-yellow-cta shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href={WHATSAPP_BONOS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-cta text-accent-foreground font-bold px-6 py-3 rounded-lg hover:bg-yellow-cta-hover transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero mi web + bonos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bonos;
