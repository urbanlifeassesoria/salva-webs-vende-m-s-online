/* ============================================================
   Index — Página principal de Salva Webs
   ──────────────────────────────────────────────────
   Ensambla todas las secciones de la landing page.
   El orden de las secciones define la estructura visual.
   Para reorganizar: mover los componentes en el JSX.
   ============================================================ */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Planes from "@/components/Planes";
import Comparativa from "@/components/Comparativa";
import Portafolio from "@/components/Portafolio";
import Beneficios from "@/components/Beneficios";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import FormularioCompleto from "@/components/FormularioCompleto";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero principal con video */}
        <Hero />
        {/* 2. Cómo funciona — storytelling */}
        <ComoFunciona />
        {/* 3. Planes y precios */}
        <Planes />
        {/* 4. Comparativa rápida */}
        <Comparativa />
        {/* 5. Webs realizadas */}
        <Portafolio />
        {/* 6. Por qué elegirnos */}
        <Beneficios />
        {/* 7. Preguntas frecuentes */}
        <FAQ />
        {/* 8. CTA final fuerte */}
        <CTAFinal />
        {/* 9. Formulario */}
        <FormularioCompleto />
      </main>
      <Footer />
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </>
  );
};

export default Index;
