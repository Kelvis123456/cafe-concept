/** Plano esquemático dibujado a mano. No representa una dirección real. */
export function Map({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      role="img"
      aria-label="Plano ilustrativo de un barrio costero de Santo Domingo con el río a la derecha, el mar abajo y el marcador de Hornilla"
      className={className}
    >
      <rect width="640" height="480" fill="#dce3d6" />
      <g transform="rotate(-14 320 240)" stroke="#e9eee5" strokeWidth="11">
        {[40, 120, 200, 280, 360, 440, 520, 600].map((x) => (
          <line key={x} x1={x} x2={x} y1="-80" y2="560" />
        ))}
        {[10, 80, 150, 220, 290, 360, 430].map((y) => (
          <line key={y} x1="-80" x2="720" y1={y} y2={y} />
        ))}
      </g>
      <g transform="rotate(-14 320 240)" stroke="#e9eee5" strokeWidth="20">
        <line x1="-80" x2="720" y1="220" y2="220" />
      </g>
      <rect x="150" y="120" width="110" height="64" fill="#1f3a2d" opacity="0.28" transform="rotate(-14 205 152)" />
      <path d="M0 392 C120 372 200 410 320 396 C440 382 520 410 640 388 L640 480 L0 480 Z" fill="#c3d2cc" />
      <path
        d="M520 -10 C560 120 470 190 520 300 C550 360 540 390 548 400"
        fill="none"
        stroke="#c3d2cc"
        strokeWidth="38"
        strokeLinecap="round"
      />
      <text
        x="40"
        y="450"
        fill="#3a4c42"
        fontSize="20"
        fontStyle="italic"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        Mar Caribe
      </text>
      <text
        x="560"
        y="130"
        fill="#3a4c42"
        fontSize="20"
        fontStyle="italic"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-archivo)" }}
        transform="rotate(80 560 130)"
      >
        Río Ozama
      </text>
      <g transform="translate(300 214)">
        <path d="M0 0 C-22 -26 -26 -40 -26 -50 A26 26 0 1 1 26 -50 C26 -40 22 -26 0 0 Z" fill="#a3202c" />
        <circle cy="-50" r="9" fill="#e9eee5" />
        <rect x="36" y="-70" width="112" height="34" fill="#e9eee5" stroke="#14201a" strokeWidth="2.5" />
        <text
          x="92"
          y="-47"
          textAnchor="middle"
          fill="#14201a"
          fontSize="22"
          style={{ fontFamily: "var(--font-archivo)", fontWeight: 800 }}
        >
          Hornilla
        </text>
      </g>
      <g transform="translate(60 70)" fill="#14201a">
        <path d="M0 -34 L10 0 L0 -8 L-10 0 Z" />
        <text y="26" textAnchor="middle" fontSize="20" style={{ fontFamily: "var(--font-plex-mono)", fontWeight: 500 }}>
          N
        </text>
      </g>
    </svg>
  );
}
