/* ============================================================
   WhatsAppFloat — Botón flotante de WhatsApp
   Visible en toda la página para conversión rápida.
   Para cambiar el enlace: editar WHATSAPP_LINK en constants.ts.
   ============================================================ */
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-xl shadow-accent/30 hover:bg-green-cta-hover transition-colors"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
};

export default WhatsAppFloat;
