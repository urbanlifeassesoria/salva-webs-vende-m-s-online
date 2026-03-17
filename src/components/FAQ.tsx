/* ============================================================
   FAQ — Preguntas frecuentes con acordeón
   ──────────────────────────────────────────────────
   Para agregar/eliminar FAQs: editar array "faqs".
   ============================================================ */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimateOnScroll from "./AnimateOnScroll";

/* ============================================================
   PREGUNTAS FRECUENTES
   Para agregar una pregunta: añadir un objeto { pregunta, respuesta }
   ============================================================ */
const faqs = [
  {
    pregunta: "¿Cuál plan me conviene si apenas estoy empezando?",
    respuesta:
      "El plan Presencia Web es perfecto para arrancar. Con $150.000 o $200.000 tienes tu web profesional lista para compartir en redes y tarjetas.",
  },
  {
    pregunta: "¿Puedo pagar y empezar rápido?",
    respuesta:
      "Sí. Una vez confirmas el pago, empezamos de inmediato. La mayoría de webs del plan Presencia se entregan en 2-3 días hábiles.",
  },
  {
    pregunta: "¿Las webs quedan listas para celular?",
    respuesta:
      "Sí. Todas las webs son 100% responsive: se ven perfectas en celular, tablet y computador.",
  },
  {
    pregunta: "¿Puedo editar la web yo mismo?",
    respuesta:
      "Con el plan Web Autoadministrable ($980.000) sí. Incluye WordPress con panel de administración y capacitación. Los demás planes requieren que yo haga los cambios.",
  },
  {
    pregunta: "¿También me ayudas con estrategia o pauta?",
    respuesta:
      "Sí. El plan Clientes al Instante ($1.500.000) incluye $600.000 en pauta Meta Ads, estrategia de contenido 60 días, Google My Business y mentoría de marca.",
  },
  {
    pregunta: "¿Qué necesito para empezar?",
    respuesta:
      "Solo necesitas: información de tu negocio (nombre, servicios, precios), fotos o logo (si tienes), y ganas de vender más. Yo me encargo del resto.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container max-w-3xl">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Preguntas{" "}
              <span className="text-gradient-green-dark">frecuentes</span>
            </h2>
            <p className="text-muted-foreground">
              Si no encuentras tu respuesta, escríbeme directo por WhatsApp.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base py-5 hover:no-underline hover:text-accent transition-colors">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQ;
