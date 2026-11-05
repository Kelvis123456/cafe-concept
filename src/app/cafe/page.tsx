import type { Metadata } from "next";
import { Bean, ROAST_COLORS, RoastLevel } from "@/components/art";
import { BEANS, DRINKS, ROAST_NAMES, rd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Café y carta",
  description:
    "Granos de Barahona, Jarabacoa y San José de Ocoa en bolsas de 250 g, y la carta de la barra: espresso, filtro y frío. Precios en pesos dominicanos.",
  alternates: { canonical: "/cafe/" },
};

export default function CafePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-10 md:px-8 md:pt-14">
        <h1 className="stencil text-[clamp(3.4rem,10vw,8rem)]">La carta, en pesos</h1>
        <p className="mt-6 max-w-[48ch] text-xl leading-snug">
          Cuatro cafés en bolsa y lo que sale de la barra. Todo se prepara con el tueste de la semana.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2" aria-label="Escala de tueste">
          {ROAST_COLORS.map((c, i) => (
            <span key={c} className="flex items-center gap-2 pr-3">
              <Bean color={c} className="h-8 w-6" />
              <span className="text-sm font-semibold">{ROAST_NAMES[i]}</span>
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="granos" className="bg-paper-2 py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 id="granos" className="stencil text-5xl md:text-6xl">
            Granos, 250 g
          </h2>
          <ul className="mt-10 grid gap-px bg-line/40 md:grid-cols-2">
            {BEANS.map((b) => (
              <li
                key={b.id}
                className="flex flex-col justify-between gap-6 bg-paper-2 p-0 py-6 md:px-8 md:py-8 md:even:pr-0 md:odd:pl-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="stencil text-4xl md:text-5xl">{b.name}</h3>
                  <p className="mono whitespace-nowrap pt-1 text-xl font-medium">{rd(b.price)}</p>
                </div>
                <div>
                  <p className="text-lg">{b.notes}</p>
                  <p className="mt-1 text-sm text-ink-2">{b.bag}</p>
                </div>
                <RoastLevel level={b.level} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="barra" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <h2 id="barra" className="stencil text-5xl md:text-6xl">
          La barra
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-10">
          {DRINKS.map((g) => (
            <div key={g.group}>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-cherry">{g.group}</h3>
              <ul className="mt-4 space-y-3">
                {g.items.map((d) => (
                  <li key={d.name} className="flex items-baseline gap-2">
                    <span>{d.name}</span>
                    <span
                      aria-hidden="true"
                      className="min-w-4 flex-1 translate-y-[-0.2em] border-b-2 border-dotted border-ink/40"
                    />
                    <span className="mono whitespace-nowrap font-medium">{rd(d.price)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-[56ch] text-sm text-ink-2">
          Precios de ejemplo para el concepto. No hay tienda en línea: las bolsas se reservan en la página de reservas.
        </p>
      </section>
    </>
  );
}
