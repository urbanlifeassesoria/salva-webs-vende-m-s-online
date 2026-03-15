/* ============================================================
   Constantes globales — Salva Webs
   ──────────────────────────────────────────────────
   Para cambiar número de WhatsApp: editar PHONE_NUMBER y
   actualizar las URLs que lo usan.
   Para cambiar mensajes: editar cada WHATSAPP_* constante.
   ============================================================ */

// ── Datos de contacto ──
export const PHONE_NUMBER = "+573243193932";
export const EMAIL = "salvadorbricenosm@gmail.com";

// ── WhatsApp: Hero principal ──
export const WHATSAPP_HERO =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20quiero%20una%20web%20que%20venda%20para%20mi%20negocio";

// ── WhatsApp: Plan 1 — Presencia Web ──
export const WHATSAPP_PLAN_PRESENCIA =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20me%20interesa%20el%20plan%20Presencia%20Web";

// ── WhatsApp: Plan 2 — Web Autoadministrable ──
export const WHATSAPP_PLAN_AUTOADMIN =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20me%20interesa%20el%20plan%20Web%20Autoadministrable";

// ── WhatsApp: Plan 3 — Clientes al Instante ──
export const WHATSAPP_PLAN_CLIENTES =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20quiero%20el%20plan%20Clientes%20al%20Instante";

// ── WhatsApp: Plan 4 — Tienda Virtual ──
export const WHATSAPP_PLAN_TIENDA =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20me%20interesa%20la%20Tienda%20Virtual";

// ── WhatsApp: CTA final ──
export const WHATSAPP_CTA_FINAL =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20quiero%20que%20me%20expliques%20cu%C3%A1l%20plan%20me%20conviene";

// ── WhatsApp: Formulario ──
export const WHATSAPP_FORMULARIO =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20llené%20el%20formulario%20y%20quiero%20saber%20más";

// ── WhatsApp: Genérico (header, footer, etc.) ──
export const WHATSAPP_LINK =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs%2C%20quiero%20información%20sobre%20sus%20servicios";

/**
 * Genera enlace de WhatsApp con mensaje personalizado desde formulario.
 * Para cambiar el formato del mensaje: editar el template literal abajo.
 */
export function buildWhatsAppLink(data: {
  nombre: string;
  negocio?: string;
  necesidad?: string;
  whatsapp?: string;
  mensaje?: string;
}): string {
  const msg = `Hola Salva Webs, soy ${data.nombre}${
    data.negocio ? ` de ${data.negocio}` : ""
  }${data.necesidad ? `. Necesito: ${data.necesidad}` : ""}${
    data.mensaje ? `. ${data.mensaje}` : ""
  }. Quiero información sobre sus servicios de diseño web.`;
  return `https://wa.me/573243193932?text=${encodeURIComponent(msg)}`;
}
