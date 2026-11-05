import type { Metadata } from "next";
import Link from "next/link";
import { Map } from "@/components/map";
import { HOURS_ROWS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dónde estamos",
  description:
    "Horario de Hornilla y un plano ilustrativo de Santo Domingo. Es un proyecto conceptual: no hay local ni dirección real.",
  alternates: { canonical: "/donde-estamos/" },
};

export default function DondePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 md:px-8 md:pt-14">
      <h1 className="stencil text-[clamp(3.4rem,10vw,8rem)]">Dónde estamos</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="space-y-10">
          <section aria-labelledby="horario">
            <h2 id="horario" className="stencil text-4xl">
              Horario
            </h2>
            <table className="mono mt-4 w-full text-left">
              <caption className="sr-only">Horario de apertura por día</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Días</th>
                  <th scope="col">Horas</th>
                </tr>
              </thead>
              <tbody>
                {HOURS_ROWS.map((h) => (
                  <tr key={h.days}>
                    <th scope="row" className="py-2 pr-4 align-top font-normal text-ink-2">
                      {h.days}
                    </th>
                    <td className="py-2 font-medium">{h.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 max-w-[40ch]">Los jueves la tostadora arranca temprano. La barra abre igual.</p>
          </section>

          <section aria-labelledby="direccion">
            <h2 id="direccion" className="stencil text-4xl">
              Dirección
            </h2>
            <p className="mt-4 max-w-[40ch]">
              No existe. Hornilla es un concepto de diseño, así que no hay calle, número ni teléfono. El marcador del
              plano está puesto a ojo.
            </p>
            <p className="mt-4">
              <Link href="/reservar/" className="link font-bold">
                Probar la reserva de demostración
              </Link>
            </p>
          </section>
        </div>

        <figure>
          <Map className="h-auto w-full border-2 border-ink" />
          <figcaption className="mt-2 text-sm text-ink-2">
            Plano ilustrativo dibujado a mano. No marca una ubicación real.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
