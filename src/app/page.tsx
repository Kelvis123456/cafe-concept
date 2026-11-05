import type { Metadata } from "next";
import Link from "next/link";
import { RoastCurve, RoastLevel, Sack } from "@/components/art";
import { BEANS, rd } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const STAGES = [
  { time: "0:00", name: "Carga", text: "El café verde entra al tambor ya caliente." },
  { time: "1:30", name: "Mínimo", text: "La temperatura toca fondo y empieza a subir." },
  { time: "9:10", name: "Primer crack", text: "El grano suena. Aquí decidimos cuánto desarrollo darle." },
  { time: "11:00", name: "Salida", text: "Al enfriador, y a reposar dos días antes de venderlo." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-10 md:grid-cols-[1.5fr_0.7fr] md:px-8 md:pt-14 lg:gap-16">
        <div>
          <h1 className="stencil text-[clamp(3rem,5.6vw,5.6rem)]">
            Tostamos los jueves.
            <br />
            <span className="text-cherry">Lo tomas el viernes.</span>
          </h1>
          <p className="mt-6 max-w-[36ch] text-xl leading-snug">
            Tostadora pequeña en Santo Domingo. Café dominicano de Barahona, Jarabacoa y Ocoa, en bolsas de 250 g y en
            taza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/reservar/" className="btn btn-primary">
              Reservar
            </Link>
            <Link href="/cafe/" className="btn btn-ghost">
              Ver el café
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs md:max-w-none">
          <Sack className="fade-in h-auto w-full" />
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8">
          <div>
            <h2 className="stencil text-5xl md:text-6xl">Un jueves de tueste</h2>
            <p className="mt-5 max-w-[44ch]">
              Cada lote dura unos once minutos. La curva decide el sabor: cuánto sube, a qué ritmo y cuándo sacamos el
              café del fuego.
            </p>
            <dl className="mt-8 space-y-5">
              {STAGES.map((s) => (
                <div key={s.name} className="grid grid-cols-[4rem_1fr] gap-x-3">
                  <dt className="mono pt-1 text-sm font-medium text-cherry">{s.time}</dt>
                  <dd>
                    <span className="font-bold">{s.name}. </span>
                    {s.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figure>
            <RoastCurve className="h-auto w-full" />
            <figcaption className="mt-2 text-sm text-ink-2">
              Curva ilustrativa de temperatura del grano en el tiempo. No es un registro de tueste real.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="stencil text-5xl md:text-6xl">Los granos de ahora</h2>
        <ul className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {BEANS.slice(0, 2).map((b) => (
            <li key={b.id} className="flex flex-col gap-4">
              <RoastLevel level={b.level} />
              <div>
                <h3 className="stencil text-4xl">{b.name}</h3>
                <p className="mt-1">{b.notes}</p>
                <p className="mono mt-2 text-sm text-ink-2">250 g, {rd(b.price)}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link href="/cafe/" className="link font-bold">
            Ver toda la carta
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-2 border-ink px-6 py-10 md:flex md:items-end md:justify-between md:px-12 md:py-14">
          <h2 className="stencil max-w-[14ch] text-5xl md:text-7xl">Mesa en la barra o pedido para recoger</h2>
          <div className="mt-8 md:mt-0">
            <Link href="/reservar/" className="btn btn-primary">
              Reservar
            </Link>
            <p className="mt-3 text-sm text-ink-2">Formulario de demostración, no envía nada.</p>
          </div>
        </div>
      </section>
    </>
  );
}
