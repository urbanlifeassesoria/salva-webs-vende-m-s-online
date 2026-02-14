/* Constantes globales de Salva Webs
   Centraliza URLs, textos y configuración para editar fácilmente */

// Enlace principal de WhatsApp
export const WHATSAPP_LINK =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs,%20quiero%20una%20web%20que%20venda%20para%20mi%20negocio";

// Enlace WhatsApp para servicio anual
export const WHATSAPP_ANUAL =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs,%20me%20interesa%20el%20plan%20anual%20de%20p%C3%A1ginas%20web";

// Enlace WhatsApp para Web + Anuncio
export const WHATSAPP_ANUNCIO =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs,%20quiero%20la%20estrategia%20Web%20%2B%20Anuncio";

// Enlace WhatsApp para bonos
export const WHATSAPP_BONOS =
  "https://wa.me/573243193932?text=Hola%20Salva%20Webs,%20quiero%20mi%20web%20%2B%20bonos";

export const PHONE_NUMBER = "+573243193932";
export const EMAIL = "salvadorbricenosm@gmail.com";

// Genera enlace de WhatsApp con mensaje personalizado desde formulario
export function buildWhatsAppLink(data: {
  nombre: string;
  ciudad?: string;
  negocio?: string;
  presupuesto?: string;
}): string {
  const msg = `Hola Salva Webs, soy ${data.nombre}${data.ciudad ? ` de ${data.ciudad}` : ""}${data.negocio ? `, tengo un negocio de tipo ${data.negocio}` : ""}${data.presupuesto ? `. Mi presupuesto es ${data.presupuesto}` : ""}. Quiero una propuesta de web gratis.`;
  return `https://wa.me/573243193932?text=${encodeURIComponent(msg)}`;
}
