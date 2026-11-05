import type { Metadata } from "next";
import { ReservaForm } from "./form";

export const metadata: Metadata = {
  title: "Reservar",
  description:
    "Reserva una mesa en la barra o un pedido para recoger. Formulario de demostración con validación en el navegador: no envía nada.",
  alternates: { canonical: "/reservar/" },
};

export default function ReservarPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8 md:pt-14">
      <div>
        <h1 className="stencil text-[clamp(3.4rem,9vw,7rem)]">Reservar</h1>
        <p className="mt-6 max-w-[34ch] text-xl leading-snug">Una mesa en la barra o un pedido para recoger.</p>
        <p className="mt-6 max-w-[40ch] border-l-4 border-cherry pl-4 text-ink-2">
          Esto es una demo. El formulario valida lo que escribes en tu navegador y no envía ni guarda nada.
        </p>
      </div>
      <ReservaForm />
    </div>
  );
}
