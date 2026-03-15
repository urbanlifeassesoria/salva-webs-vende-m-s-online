/* ============================================================
   Footer — Datos legales, enlaces y branding
   ──────────────────────────────────────────────────
   Para cambiar datos: editar constantes en constants.ts
   ============================================================ */
import { WHATSAPP_LINK, EMAIL, PHONE_NUMBER } from "@/lib/constants";
import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* ── Logo y descripción ── */}
          <div>
            <p className="text-2xl font-display font-bold mb-3">
              Salva<span className="text-accent">Webs</span>
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Diseño y desarrollo de páginas web enfocadas en ventas para
              negocios en Colombia. Atendemos 100% online desde Medellín.
            </p>
          </div>

          {/* ── Navegación rápida ── */}
          <div>
            <h4 className="font-display font-bold text-sm mb-3 text-primary-foreground/80">
              Navegación
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Planes", href: "#planes" },
                { label: "Webs realizadas", href: "#portafolio" },
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "Preguntas frecuentes", href: "#faq" },
                { label: "Formulario", href: "#formulario" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Contacto ── */}
          <div>
            <h4 className="font-display font-bold text-sm mb-3 text-primary-foreground/80">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +57 324 319 3932
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* ── Línea divisoria ── */}
        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {year} Salva Webs. Todos los derechos reservados.
            </p>
            <p className="text-xs text-primary-foreground/30 text-center md:text-right max-w-lg">
              Los datos personales proporcionados serán utilizados únicamente
              para contactar al interesado. No se comparten con terceros.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
