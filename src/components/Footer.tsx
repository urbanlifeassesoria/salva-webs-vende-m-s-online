/* ============================================================
   Footer — Datos legales y enlaces
   ============================================================ */
import { WHATSAPP_LINK, EMAIL } from "@/lib/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-extrabold">Salva Webs</p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              © {year} Salva Webs. Todos los derechos reservados.
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/70 space-y-1">
            <p>
              WhatsApp:{" "}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">
                +57 324 319 3932
              </a>
            </p>
            <p>
              Correo:{" "}
              <a href={`mailto:${EMAIL}`} className="underline hover:text-primary-foreground">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            Política de tratamiento de datos: Los datos personales proporcionados a través de los formularios de este sitio web serán utilizados únicamente para contactar al interesado y enviar la propuesta solicitada. No se comparten con terceros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
