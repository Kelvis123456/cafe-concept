"use client";

import { useEffect, useRef, useState } from "react";
import { HOURS, fmtTime } from "@/lib/site";

type Tipo = "mesa" | "pedido";
type Values = {
  tipo: Tipo;
  nombre: string;
  correo: string;
  fecha: string;
  hora: string;
  personas: string;
  nota: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { tipo: "mesa", nombre: "", correo: "", fecha: "", hora: "", personas: "2", nota: "" };
const ORDER: (keyof Values)[] = ["nombre", "correo", "fecha", "hora", "personas", "nota"];
const LABELS: Record<keyof Values, string> = {
  tipo: "Tipo",
  nombre: "Nombre",
  correo: "Correo",
  fecha: "Fecha",
  hora: "Hora",
  personas: "Personas",
  nota: "Nota",
};

const pad = (n: number) => String(n).padStart(2, "0");
const toISO = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseISO = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** Franjas de 30 min; la última sale 30 min antes del cierre. */
function slotsFor(fecha: string): string[] {
  if (!fecha) return [];
  const h = HOURS[parseISO(fecha).getDay()];
  const out: string[] = [];
  for (let t = h.open; t <= h.close - 30; t += 30) out.push(fmtTime(t));
  return out;
}

function validate(v: Values, today: string, maxDate: string): Errors {
  const e: Errors = {};
  if (v.nombre.trim().length < 2) e.nombre = "Escribe tu nombre, al menos 2 letras.";
  if (!v.correo.trim()) e.correo = "Escribe un correo para la confirmación.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim()))
    e.correo = "Revisa el correo, por ejemplo nombre@correo.com.";
  if (!v.fecha) e.fecha = "Elige una fecha.";
  else if (v.fecha < today) e.fecha = "Esa fecha ya pasó. Elige hoy o una fecha futura.";
  else if (v.fecha > maxDate) e.fecha = "Solo aceptamos reservas con hasta 60 días de anticipación.";
  if (!v.hora) e.hora = v.fecha ? "Elige una hora." : "Elige primero la fecha, después la hora.";
  else if (!slotsFor(v.fecha).includes(v.hora)) e.hora = "Esa hora queda fuera del horario de ese día.";
  if (v.tipo === "mesa") {
    const n = Number(v.personas);
    if (!Number.isInteger(n) || n < 1 || n > 8) e.personas = "Indica entre 1 y 8 personas.";
  }
  if (v.nota.length > 200) e.nota = `La nota tiene ${v.nota.length} caracteres. El máximo es 200.`;
  return e;
}

const field =
  "mt-2 block min-h-12 w-full border-2 border-line bg-paper px-3 text-ink aria-[invalid=true]:border-cherry aria-[invalid=true]:border-[3px] disabled:bg-paper-2 disabled:text-ink-2";

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-ink-2">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 font-semibold text-cherry">
          <span className="mono">Error: </span>
          {error}
        </p>
      )}
    </div>
  );
}

export function ReservaForm() {
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Values | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((p) => {
      const next = { ...p, [k]: val };
      if (k === "fecha" && p.hora && !slotsFor(String(val)).includes(p.hora)) next.hora = "";
      return next;
    });
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const t = new Date();
    const e = validate(v, toISO(t), toISO(new Date(t.getFullYear(), t.getMonth(), t.getDate() + 60)));
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDone(v);
      return;
    }
    requestAnimationFrame(() => summaryRef.current?.focus());
  };

  const reset = () => {
    setV(EMPTY);
    setErrors({});
    setDone(null);
  };

  const errKeys = ORDER.filter((k) => errors[k]);
  const aria = (k: keyof Values, hint = false) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": [hint ? `${k}-hint` : "", errors[k] ? `${k}-error` : ""].filter(Boolean).join(" ") || undefined,
  });

  if (done) {
    return (
      <div role="status" className="border-2 border-ink p-6 md:p-10">
        <h2 ref={doneRef} tabIndex={-1} className="stencil text-5xl outline-none md:text-6xl">
          Así quedaría tu {done.tipo === "mesa" ? "reserva" : "pedido"}
        </h2>
        <p className="mt-4 font-bold text-cherry">Es una demo: no se envió nada y no se guardó ningún dato.</p>
        <dl className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-[8rem_1fr]">
          {[
            ["Tipo", done.tipo === "mesa" ? "Mesa en la barra" : "Pedido para recoger"],
            ["Nombre", done.nombre.trim()],
            ["Correo", done.correo.trim()],
            [
              "Fecha",
              parseISO(done.fecha).toLocaleDateString("es-DO", { weekday: "long", day: "numeric", month: "long" }),
            ],
            ["Hora", done.hora],
            ...(done.tipo === "mesa" ? [["Personas", done.personas]] : []),
            ...(done.nota.trim() ? [["Nota", done.nota.trim()]] : []),
          ].map(([k, val]) => (
            <div key={k} className="contents">
              <dt className="font-bold">{k}</dt>
              <dd className="break-words">{val}</dd>
            </div>
          ))}
        </dl>
        <button type="button" onClick={reset} className="btn btn-ghost mt-8">
          Hacer otra
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      {errKeys.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-[3px] border-cherry bg-paper-2 p-5 outline-none"
        >
          <h2 className="font-bold text-cherry">
            Revisa {errKeys.length === 1 ? "este campo" : `estos ${errKeys.length} campos`}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errKeys.map((k) => (
              <li key={k}>
                <a href={`#${k}`} className="link font-semibold">
                  {LABELS[k]}
                </a>
                : {errors[k]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset>
        <legend className="font-bold">¿Qué necesitas?</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {(
            [
              ["mesa", "Mesa en la barra"],
              ["pedido", "Pedido para recoger"],
            ] as const
          ).map(([val, text]) => (
            <label
              key={val}
              className="flex min-h-12 cursor-pointer items-center justify-center border-2 border-ink px-3 text-center font-semibold has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-3"
            >
              <input
                type="radio"
                name="tipo"
                value={val}
                checked={v.tipo === val}
                onChange={() => set("tipo", val)}
                className="sr-only"
              />
              {text}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="nombre" label="Nombre" error={errors.nombre}>
        <input
          id="nombre"
          name="nombre"
          autoComplete="name"
          value={v.nombre}
          onChange={(e) => set("nombre", e.target.value)}
          className={field}
          {...aria("nombre")}
        />
      </Field>

      <Field id="correo" label="Correo" hint="Para la confirmación. En esta demo no se usa." error={errors.correo}>
        <input
          id="correo"
          name="correo"
          type="email"
          autoComplete="email"
          value={v.correo}
          onChange={(e) => set("correo", e.target.value)}
          className={field}
          {...aria("correo", true)}
        />
      </Field>

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id="fecha" label="Fecha" error={errors.fecha}>
          <input
            id="fecha"
            name="fecha"
            type="date"
            value={v.fecha}
            onChange={(e) => set("fecha", e.target.value)}
            className={field}
            {...aria("fecha")}
          />
        </Field>
        <Field id="hora" label="Hora" hint={v.fecha ? undefined : "Elige primero la fecha."} error={errors.hora}>
          <select
            id="hora"
            name="hora"
            value={v.hora}
            onChange={(e) => set("hora", e.target.value)}
            disabled={!v.fecha}
            className={field}
            {...aria("hora", !v.fecha)}
          >
            <option value="">Elige una hora</option>
            {slotsFor(v.fecha).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {v.tipo === "mesa" && (
        <Field id="personas" label="Personas" hint="De 1 a 8." error={errors.personas}>
          <input
            id="personas"
            name="personas"
            type="number"
            inputMode="numeric"
            min={1}
            max={8}
            value={v.personas}
            onChange={(e) => set("personas", e.target.value)}
            className={`${field} sm:max-w-40`}
            {...aria("personas", true)}
          />
        </Field>
      )}

      <Field
        id="nota"
        label="Nota (opcional)"
        hint="Alergias, una bolsa para llevar, lo que haga falta. Máximo 200 caracteres."
        error={errors.nota}
      >
        <textarea
          id="nota"
          name="nota"
          rows={3}
          value={v.nota}
          onChange={(e) => set("nota", e.target.value)}
          className={`${field} py-2`}
          {...aria("nota", true)}
        />
      </Field>

      <div>
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Confirmar reserva
        </button>
        <p className="mt-3 text-sm text-ink-2">Al confirmar verás un resumen. No se envía nada.</p>
      </div>
    </form>
  );
}
