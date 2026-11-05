import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Qué es una hornilla, cómo compraríamos el café y cómo sería un día de tueste en Hornilla. Un concepto de diseño, sin negocio real detrás.",
  alternates: { canonical: "/nosotros/" },
};

const DIA = [
  ["6:30", "Se enciende la tostadora y se pesa el café verde."],
  ["8:00", "Primer lote. Se anota la curva y se prueba lo que sale."],
  ["12:00", "Último lote del día. Lo que no pasa la taza, se tuesta otra vez."],
  ["15:00", "Se empaca en bolsas de 250 g con la fecha del tueste."],
];

export default function Nosotros() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pt-14">
        <h1 className="stencil text-[clamp(3.4rem,10vw,8rem)]">Una hornilla es un fuego chico.</h1>
        <p className="mt-8 max-w-[52ch] text-xl leading-snug md:ml-[16.666%]">
          En las cocinas dominicanas es el fogón de carbón donde el café se cuela despacio. Tostar café empieza igual:
          fuego controlado, lotes pequeños y paciencia para mirar.
        </p>
      </section>

      <section className="bg-paper-2 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <h2 className="stencil text-4xl md:text-5xl">Cómo compraríamos</h2>
            <p className="mt-4 max-w-[46ch]">
              Café dominicano de tres zonas: Barahona, Jarabacoa y San José de Ocoa. Comprar poco y repetir con los
              mismos productores, para pagar mejor y saber qué esperar del lote siguiente.
            </p>
            <p className="mt-4 max-w-[46ch]">
              Como esto es un concepto, no hay productores reales detrás, y por eso no ponemos nombres ni fincas.
            </p>
          </div>
          <div>
            <h2 className="stencil text-4xl md:text-5xl">Un jueves en la tostadora</h2>
            <dl className="mt-6 space-y-4">
              {DIA.map(([h, t]) => (
                <div key={h} className="grid grid-cols-[4.5rem_1fr] gap-x-3">
                  <dt className="mono pt-1 text-sm font-medium text-cherry">{h}</dt>
                  <dd>{t}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="border-l-4 border-cherry pl-5 md:pl-8">
          <h2 className="stencil text-4xl md:text-5xl">Qué es este sitio</h2>
          <p className="mt-4 max-w-[56ch]">
            Un ejercicio de diseño y desarrollo web. No hay local, equipo de tueste ni clientes. Los precios, el horario
            y los cafés son inventados para que la página tenga contenido que se pueda leer de verdad.
          </p>
          <p className="mt-4">
            <Link href="/reservar/" className="link font-bold">
              Reservar
            </Link>{" "}
            para probar el formulario.
          </p>
        </div>
      </section>
    </>
  );
}
