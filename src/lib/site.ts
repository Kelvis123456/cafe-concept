export const SITE = {
  name: "Hornilla",
  descriptor: "Tostadores de café",
  url: "https://hornilla.example",
  locale: "es_DO",
  disclaimer: "Proyecto conceptual, sin relación con ningún negocio real.",
};

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/cafe/", label: "Café" },
  { href: "/donde-estamos/", label: "Dónde estamos" },
  { href: "/nosotros/", label: "Nosotros" },
];

/** Horario por día de la semana, en formato JS (0 = domingo). Horas en minutos desde medianoche. */
export const HOURS: Record<number, { open: number; close: number }> = {
  0: { open: 8 * 60, close: 14 * 60 },
  1: { open: 7 * 60, close: 18 * 60 },
  2: { open: 7 * 60, close: 18 * 60 },
  3: { open: 7 * 60, close: 18 * 60 },
  4: { open: 7 * 60, close: 18 * 60 },
  5: { open: 7 * 60, close: 18 * 60 },
  6: { open: 8 * 60, close: 19 * 60 },
};

export const HOURS_ROWS = [
  { days: "Lunes a viernes", text: "7:00 a 18:00" },
  { days: "Sábado", text: "8:00 a 19:00" },
  { days: "Domingo", text: "8:00 a 14:00" },
];

export const fmtTime = (min: number) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;

export const rd = (n: number) => `RD$ ${n}`;

export const BEANS = [
  {
    id: "barahona",
    name: "Barahona",
    level: 2,
    notes: "Cacao, caramelo, naranja",
    price: 540,
    bag: "Lavado, tueste medio",
  },
  {
    id: "jarabacoa",
    name: "Jarabacoa",
    level: 1,
    notes: "Miel, manzana verde, flores",
    price: 590,
    bag: "Lavado, tueste medio claro",
  },
  {
    id: "ocoa",
    name: "San José de Ocoa",
    level: 3,
    notes: "Chocolate amargo, nuez, panela",
    price: 520,
    bag: "Natural, tueste medio oscuro",
  },
  {
    id: "casa",
    name: "Mezcla de la casa",
    level: 4,
    notes: "Para espresso. Cuerpo y poca acidez",
    price: 480,
    bag: "Barahona y Ocoa, tueste oscuro",
  },
];

export const ROAST_NAMES = ["Claro", "Medio claro", "Medio", "Medio oscuro", "Oscuro"];

export const DRINKS = [
  {
    group: "Espresso",
    items: [
      { name: "Espresso", price: 110 },
      { name: "Americano", price: 130 },
      { name: "Cortado", price: 150 },
      { name: "Capuchino", price: 180 },
      { name: "Latte", price: 200 },
    ],
  },
  {
    group: "Filtro y frío",
    items: [
      { name: "V60 del día", price: 220 },
      { name: "Prensa francesa, dos tazas", price: 340 },
      { name: "Cold brew", price: 210 },
      { name: "Café con leche de la casa", price: 140 },
    ],
  },
  {
    group: "Sin café y para acompañar",
    items: [
      { name: "Chocolate caliente", price: 190 },
      { name: "Pan de agua con mantequilla", price: 130 },
      { name: "Quesito", price: 95 },
    ],
  },
];
