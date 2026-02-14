/* ============================================================
   Header — Barra fija superior
   Para cambiar los enlaces del menú, edita el array "menuItems".
   Para cambiar el enlace de WhatsApp, edita WHATSAPP_LINK en constants.ts
   ============================================================ */
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const menuItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="text-xl font-extrabold tracking-tight">
          Salva Webs
        </a>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbeme por WhatsApp"
            className="inline-flex items-center gap-2 bg-yellow-cta text-accent-foreground font-semibold text-sm px-4 py-2 rounded-lg hover:bg-yellow-cta-hover transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Escríbeme por WhatsApp
          </a>
        </nav>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-cta text-accent-foreground font-semibold text-sm px-4 py-2 rounded-lg w-full justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Escríbeme por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
