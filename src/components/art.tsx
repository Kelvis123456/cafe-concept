import { ROAST_NAMES } from "@/lib/site";

export const ROAST_COLORS = ["#b98a4e", "#8a5a2b", "#5e3a1e", "#3a2314", "#231710"];

export function Bean({
  color = "#5e3a1e",
  crease = "#e9eee5",
  className,
}: {
  color?: string;
  crease?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 48 64" aria-hidden="true" className={className}>
      <ellipse cx="24" cy="32" rx="18" ry="28" fill={color} />
      <path d="M26 7 C13 24 35 40 22 57" fill="none" stroke={crease} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Cinco granos de claro a oscuro; el activo se ve completo, el resto atenuado. */
export function RoastLevel({ level }: { level: number }) {
  return (
    <span
      role="img"
      aria-label={`Tueste ${ROAST_NAMES[level].toLowerCase()}`}
      className="inline-flex items-center gap-1"
    >
      {ROAST_COLORS.map((c, i) => (
        <Bean key={c} color={c} className={i === level ? "h-8 w-6" : "h-8 w-6 opacity-20"} />
      ))}
    </span>
  );
}

/** El saco de cereza con la plantilla de Hornilla. Ilustración propia. */
export function Sack({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      role="img"
      aria-label="Ilustración de un saco de café con el nombre Hornilla"
      className={className}
    >
      <ellipse cx="210" cy="496" rx="150" ry="12" fill="#14201a" opacity="0.14" />
      <path
        d="M96 128 C78 214 62 340 74 454 C74 470 94 480 120 481 C180 489 240 489 300 481 C326 480 346 470 346 454 C358 340 342 214 324 128 Z"
        fill="#a3202c"
      />
      <path d="M96 128 C140 150 280 150 324 128 L334 92 C280 112 140 112 86 92 Z" fill="#7f1822" />
      <path
        d="M86 92 C84 70 104 52 130 48 C170 40 250 40 290 48 C316 52 336 70 334 92 C280 112 140 112 86 92 Z"
        fill="#8f1b26"
      />
      <path
        d="M150 52 C180 30 240 30 270 52"
        fill="none"
        stroke="#14201a"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M98 150 C140 172 280 172 322 150"
        fill="none"
        stroke="#e9eee5"
        strokeWidth="2"
        strokeDasharray="7 7"
        opacity="0.7"
      />
      <text
        x="210"
        y="278"
        textAnchor="middle"
        textLength="236"
        lengthAdjust="spacingAndGlyphs"
        fill="#e9eee5"
        fontSize="104"
        style={{
          fontFamily: "var(--font-archivo)",
          fontVariationSettings: '"wdth" 66',
          fontWeight: 800,
          letterSpacing: "0.01em",
        }}
      >
        HORNILLA
      </text>
      <path d="M92 306 H328" stroke="#e9eee5" strokeWidth="3" />
      <text
        x="210"
        y="346"
        textAnchor="middle"
        fill="#e9eee5"
        fontSize="26"
        textLength="236"
        lengthAdjust="spacingAndGlyphs"
        style={{ fontFamily: "var(--font-plex-mono)", fontWeight: 500 }}
      >
        TOSTADO LOS JUEVES
      </text>
      <text
        x="210"
        y="420"
        textAnchor="middle"
        fill="#e9eee5"
        fontSize="46"
        style={{ fontFamily: "var(--font-archivo)", fontVariationSettings: '"wdth" 66', fontWeight: 800 }}
      >
        250 G
      </text>
      <g transform="translate(166 436) rotate(24 44 14)">
        <ellipse cx="44" cy="14" rx="30" ry="15" fill="#e9eee5" opacity="0.9" />
        <path d="M18 18 C34 4 54 24 70 8" fill="none" stroke="#a3202c" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Curva de tueste ilustrativa: temperatura del grano contra minutos. */
export function RoastCurve({ className }: { className?: string }) {
  const mono = { fontFamily: "var(--font-plex-mono)", fontSize: 20 } as const;
  return (
    <svg
      viewBox="0 0 640 440"
      role="img"
      aria-label="Curva de tueste ilustrativa: la temperatura baja a unos 90 grados al minuto uno y medio, sube hasta 196 en el primer crack y sale a los 11 minutos"
      className={className}
    >
      {[316, 206, 96].map((y, i) => (
        <g key={y}>
          <line x1="40" x2="620" y1={y} y2={y} stroke="#14201a" strokeOpacity="0.28" strokeDasharray="2 6" />
          <text x="620" y={y + 22} textAnchor="end" fill="#3a4c42" style={mono}>
            {[100, 150, 200][i]}°
          </text>
        </g>
      ))}
      <line x1="40" x2="620" y1="360" y2="360" stroke="#14201a" strokeWidth="2" />
      {[0, 3, 6, 9, 12].map((m) => (
        <text
          key={m}
          x={40 + m * 48.33}
          y="404"
          textAnchor={m === 0 ? "start" : m === 12 ? "end" : "middle"}
          fill="#3a4c42"
          style={mono}
        >
          {m === 12 ? "12 min" : m}
        </text>
      ))}
      <path
        className="draw"
        pathLength={1}
        d="M40 96 C60 250 90 340 112 342 C150 342 190 290 233 250 S300 205 330 184 S400 148 427 131 S465 112 485 105 S545 88 571 83"
        fill="none"
        stroke="#a3202c"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[
        [40, 96],
        [112, 342],
        [485, 105],
        [571, 83],
      ].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="8" fill="#e9eee5" stroke="#14201a" strokeWidth="3" />
      ))}
      <g fill="#14201a" style={{ fontFamily: "var(--font-sans)", fontSize: 21, fontWeight: 600 }}>
        <text x="56" y="76">
          Carga
        </text>
        <text x="476" y="78" textAnchor="end">
          Primer crack
        </text>
        <text x="571" y="58" textAnchor="middle">
          Salida
        </text>
        <text x="112" y="388" textAnchor="middle">
          Mínimo
        </text>
      </g>
    </svg>
  );
}

/** Granos esparcidos con un generador determinista: mismo resultado en cada build. */
export function BeanScatter({ count = 70, className }: { count?: number; className?: string }) {
  const seed = [7];
  const rnd = () => {
    seed[0] = (seed[0] * 16807) % 2147483647;
    return seed[0] / 2147483647;
  };
  const beans = Array.from({ length: count }, () => ({
    x: rnd() * 1000,
    y: rnd() * 560,
    r: rnd() * 360,
    s: 0.5 + rnd() * 0.9,
    c: ROAST_COLORS[Math.floor(rnd() * 5)],
  }));
  return (
    <svg viewBox="0 0 1000 560" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      {beans.map((b, i) => (
        <g
          key={i}
          transform={`translate(${b.x.toFixed(1)} ${b.y.toFixed(1)}) rotate(${b.r.toFixed(0)}) scale(${b.s.toFixed(2)})`}
        >
          <ellipse rx="20" ry="30" fill={b.c} />
          <path d="M2 -26 C-12 -8 14 8 -2 26" fill="none" stroke="#e9eee5" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}
