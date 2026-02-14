/* ============================================================
   Equipo — Sobre Salva Webs y el equipo
   Para cambiar fotos: reemplaza los archivos en src/assets/
   Para cambiar textos: edita el array "equipo" y el párrafo.
   ============================================================ */
import salvadorImg from "@/assets/salvador-briceno.png";
import mateoImg from "@/assets/mateo-castano.png";
import miguelImg from "@/assets/miguel-arcila.png";

const equipo = [
  {
    nombre: "Mateo Castaño",
    rol: "Desarrollador Backend",
    exp: "Más de 1 año de experiencia en backend",
    img: mateoImg,
  },
  {
    nombre: "Salvador Briceño",
    rol: "Desarrollador Web & Marketing Digital",
    exp: "Más de 12 años de experiencia",
    img: salvadorImg,
  },
  {
    nombre: "Miguel Arcila",
    rol: "Desarrollador Frontend",
    exp: "Más de 1 año de experiencia en frontend",
    img: miguelImg,
  },
];

const Equipo = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
          Sobre Salva Webs y el equipo
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Trabajamos 100% online desde Medellín. Hemos creado webs para veterinarias, escuelas de conducción, empresas de eventos, compra y venta y más. Nos enfocamos en resultados, claridad y trato directo por WhatsApp.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {equipo.map((p) => (
            <div key={p.nombre} className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-secondary/20">
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-lg">{p.nombre}</h3>
              <p className="text-secondary font-medium text-sm">{p.rol}</p>
              <p className="text-muted-foreground text-xs mt-1">{p.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipo;
