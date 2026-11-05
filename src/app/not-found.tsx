import type { Metadata } from "next";
import Link from "next/link";
import { BeanScatter } from "@/components/art";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe en Hornilla.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden">
      <BeanScatter className="absolute inset-0 -z-10 h-full w-full opacity-[0.1]" />
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <p className="mono text-cherry">Error 404</p>
        <h1 className="stencil mt-3 text-[clamp(3.4rem,10vw,8rem)]">Esa página no existe</h1>
        <p className="mt-6 max-w-[40ch] text-xl leading-snug">
          Puede que el enlace esté mal escrito o que la página ya no esté. Prueba desde el inicio.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Ir al inicio
          </Link>
          <Link href="/cafe/" className="btn btn-ghost">
            Ver el café
          </Link>
        </div>
      </div>
    </section>
  );
}
