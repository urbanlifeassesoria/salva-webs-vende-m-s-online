/* ============================================================
   Index — Página principal de Salva Webs
   Ensambla todas las secciones de la landing page.
   ============================================================ */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComoFunciona from "@/components/ComoFunciona";
import Servicios from "@/components/Servicios";
import Portafolio from "@/components/Portafolio";
import Beneficios from "@/components/Beneficios";
import Bonos from "@/components/Bonos";
import FAQ from "@/components/FAQ";
import FormularioCompleto from "@/components/FormularioCompleto";
import Equipo from "@/components/Equipo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComoFunciona />
        <Servicios />
        <Portafolio />
        <Equipo />
        <Beneficios />
        <Bonos />
        <FAQ />
        <FormularioCompleto />
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default Index;
