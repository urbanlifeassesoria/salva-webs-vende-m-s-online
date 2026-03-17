/* ============================================================
   Comparativa — Tabla visual rápida de planes
   ──────────────────────────────────────────────────
   Para editar filas: modificar array "filas".
   Para editar columnas: modificar array "columnas".
   ============================================================ */
import { Check, X, Star } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

/* ── Nombres de los planes (columnas) ── */
const columnas = ["Presencia", "Autoadmin.", "Clientes", "Tienda"];

/* ── Filas de comparación ── */
const filas = [
  {
    label: "Negocio ideal",
    valores: [
      "Nuevo o pequeño",
      "En crecimiento",
      "Quiere clientes ya",
      "Venta online",
    ],
  },
  {
    label: "Edición propia",
    valores: [false, true, false, true],
  },
  {
    label: "Incluye pauta",
    valores: [false, false, true, false],
  },
  {
    label: "Tienda online",
    valores: [false, false, false, true],
  },
  {
    label: "Acompañamiento",
    valores: ["Básico", "30 días", "60 días", "30 días"],
  },
  {
    label: "Desde",
    valores: ["$150k", "$980k", "$1.5M", "$4.5M"],
  },
];

const Comparativa = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              ¿Cuál plan{" "}
              <span className="text-gradient-green-dark">te conviene?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Compara rápido y decide sin vueltas.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              {/* Encabezado */}
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground" />
                  {columnas.map((col, i) => (
                    <th
                      key={col}
                      className={`p-4 text-center text-sm font-display font-bold ${
                        i === 2
                          ? "bg-accent/10 text-accent-foreground rounded-t-xl"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1">
                        {col}
                        {i === 2 && (
                          <Star className="w-3.5 h-3.5 text-accent" />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Cuerpo */}
              <tbody>
                {filas.map((fila, fi) => (
                  <tr
                    key={fila.label}
                    className={
                      fi % 2 === 0 ? "bg-muted/50" : "bg-background"
                    }
                  >
                    <td className="p-4 text-sm font-medium">{fila.label}</td>
                    {fila.valores.map((val, vi) => (
                      <td
                        key={vi}
                        className={`p-4 text-center text-sm ${
                          vi === 2 ? "bg-accent/5" : ""
                        }`}
                      >
                        {typeof val === "boolean" ? (
                          val ? (
                            <Check className="w-5 h-5 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Comparativa;
