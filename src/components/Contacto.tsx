/* ============================================================
   Contacto — Mapa y datos de contacto
   Para cambiar ubicación del mapa: edita la URL del iframe.
   ============================================================ */
import { Phone, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_LINK, PHONE_NUMBER, EMAIL } from "@/lib/constants";

const Contacto = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-section">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Contacto
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Atendemos desde Medellín para toda Colombia, 100% online. Lunes a sábado de 7:00 a.m. a 7:00 p.m.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Mapa */}
          <div className="rounded-xl overflow-hidden shadow-md aspect-video">
            <iframe
              title="Ubicación Salva Webs - Medellín"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126788.38493224498!2d-75.6557!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Botones de contacto */}
          <div className="space-y-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold">Llamar ahora</p>
                <p className="text-muted-foreground text-sm">+57 324 319 3932</p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-cta/20 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-yellow-cta" />
              </div>
              <div>
                <p className="font-semibold">Escribir por WhatsApp</p>
                <p className="text-muted-foreground text-sm">Respuesta rápida</p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold">Enviar correo</p>
                <p className="text-muted-foreground text-sm">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
