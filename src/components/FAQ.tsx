/* ============================================================
   FAQ — Preguntas frecuentes con acordeón
   Para agregar/eliminar FAQs: edita el array "faqs".
   ============================================================ */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pregunta: "¿Cuánto dura el servicio de mi página web?",
    respuesta: "El plan anual tiene una duración de 12 meses. Al cumplir el año, renovamos juntos el contenido, dominio y hosting para que tu web siga actualizada.",
  },
  {
    pregunta: "¿Cuál es la diferencia entre el plan de $200.000 y el de $250.000?",
    respuesta: "El plan de $200.000 incluye tu web con un subdominio de Salva Webs (ej: tunegocio.salvawebs.com). El de $250.000 incluye un dominio propio .com o .co registrado a tu nombre.",
  },
  {
    pregunta: "¿Qué incluye el plan Web + Anuncio de $600.000 al mes?",
    respuesta: "Incluye una landing específica para una oferta, un anuncio activo por 1 mes, embudo completo hacia WhatsApp y PDFs semanales con tips de contenido y guiones de respuesta.",
  },
  {
    pregunta: "¿Puedo hacer cambios después de publicar mi web?",
    respuesta: "Sí. Después de publicar puedes solicitar ajustes menores. Al renovar cada año, revisamos el contenido completo y actualizamos lo que necesites.",
  },
  {
    pregunta: "¿En cuánto tiempo entregan la web?",
    respuesta: "Normalmente entre 5 y 10 días hábiles, dependiendo de qué tan rápido nos envíes la información de tu negocio (fotos, textos, precios, etc.).",
  },
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta: "Aceptamos transferencia bancaria (Nequi, Daviplata, Bancolombia), y también podemos acordar otros medios. Todo se gestiona por WhatsApp.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Preguntas frecuentes
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-lg px-5 data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-4 hover:no-underline">
                {faq.pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
