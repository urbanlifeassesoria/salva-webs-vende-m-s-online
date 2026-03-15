/* ============================================================
   Header — Barra superior sticky con efecto glass al scroll
   ──────────────────────────────────────────────────
   Para cambiar los enlaces del menú: editar array "menuItems".
   Para cambiar el botón CTA: editar WHATSAPP_LINK en constants.ts.
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

/* ── Menú de navegación ── */
const menuItems = [
  { label: "Planes", href: "#planes" },
  { label: "Webs realizadas", href: "#portafolio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detectar scroll para cambiar estilo del header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* ── Logo ── */}
        <a
          href="#inicio"
          className="text-xl font-display font-bold tracking-tight text-primary-foreground"
        >
          Salva<span className="text-accent">Webs</span>
        </a>

        {/* ── Menú desktop ── */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hablar por WhatsApp"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-green-cta-hover transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Hablar por WhatsApp
          </a>
        </nav>

        {/* ── Botón hamburguesa mobile ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary-foreground"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Menú mobile ── */}
      {open && (
        <nav className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-primary-foreground/10 pb-4 animate-fade-in-up">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-4 py-2.5 rounded-full w-full"
            >
              <MessageCircle className="w-4 h-4" />
              Hablar por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
