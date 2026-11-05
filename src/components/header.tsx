"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { Bean } from "./art";

const norm = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

export function Header() {
  const path = norm(usePathname());
  const [open, setOpen] = useState(false);
  const isCurrent = (href: string) => norm(href) === path;

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="stencil flex items-center gap-2 text-3xl" onClick={() => setOpen(false)}>
          <Bean color="#a3202c" className="h-7 w-5" />
          {SITE.name}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isCurrent(n.href) ? "page" : undefined}
              className="inline-flex min-h-11 items-center px-3 font-semibold underline-offset-[0.4em] hover:underline aria-[current=page]:underline aria-[current=page]:decoration-cherry aria-[current=page]:decoration-2"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/reservar/"
            className="btn btn-primary ml-3 min-h-11"
            aria-current={isCurrent("/reservar/") ? "page" : undefined}
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className="btn btn-ghost min-h-11 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t-2 border-ink bg-paper px-5 pb-5 pt-2 md:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(n.href) ? "page" : undefined}
                  className="stencil flex min-h-14 items-center text-4xl aria-[current=page]:text-cherry"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/reservar/" onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full">
            Reservar
          </Link>
        </nav>
      )}
    </header>
  );
}
