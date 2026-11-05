import Link from "next/link";
import { HOURS_ROWS, NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark mt-16 bg-forest text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="stencil text-6xl md:text-7xl">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-forest-text">Tostadores de café, Santo Domingo.</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="space-y-1">
            {[...NAV, { href: "/reservar/", label: "Reservar" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-bold">Horario</h2>
          <dl className="mono mt-2 space-y-2 text-sm">
            {HOURS_ROWS.map((h) => (
              <div key={h.days}>
                <dt className="text-forest-text">{h.days}</dt>
                <dd>{h.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-paper/25">
        <div className="mx-auto max-w-7xl px-5 py-6 text-sm md:px-8">
          <p className="font-semibold text-cherry-pale">{SITE.disclaimer}</p>
          <p className="mt-1 text-forest-text">
            Ejercicio de diseño y desarrollo de Kelvis. Sin tienda, sin cobros y sin datos guardados.
          </p>
        </div>
      </div>
    </footer>
  );
}
