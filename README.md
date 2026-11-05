# Hornilla

Sitio de concepto para una tostadora de café de especialidad inventada en Santo Domingo. Lo hice para practicar diseño de interfaces de punta a punta: identidad, tipografía, ilustración propia, un formulario con validación real y el acabado que suele faltar (404, SEO, accesibilidad).

**Proyecto conceptual, sin relación con ningún negocio real.** No hay local, ni dirección, ni teléfono, ni productores detrás. Los precios, el horario y los cafés son inventados. El nombre "Hornilla" lo busqué en la web antes de usarlo y no encontré ninguna tostadora con ese nombre, pero no puedo garantizar que no exista en alguna parte.

## Páginas

Inicio, Café (granos y carta en RD$), Reservar, Dónde estamos y Nosotros, más una 404 propia.

La página de reservas es un formulario real con validación en el navegador, mensajes de error por campo, resumen de errores con foco y una pantalla de confirmación. **Es una demo: no envía ni guarda nada.** No hay backend.

## Cómo correrlo

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # exporta el sitio estático a out/
npm run lint && npm run typecheck && npm run format:check
```

Next.js 16 (App Router), TypeScript, Tailwind v4. La configuración de `.npmrc`, prettier y eslint sigue la de mi portfolio. Las fuentes (Archivo e IBM Plex Mono) las empaqueta `next/font` en el build, así que el sitio no pide nada a Google al cargarse.

## Decisiones de diseño

- Sin fotos. Todo lo visual es SVG hecho a mano: el saco de la portada, la curva de tueste, los granos, el plano.
- Paleta verde grisáceo con rojo cereza. Evité el crema con terracota que usan todas las cafeterías generadas.
- Tipografía de saco: Archivo en su ancho más condensado y en mayúsculas para los títulos, Archivo normal para el texto e IBM Plex Mono para precios y horas.
- Esquinas rectas y bordes en lugar de sombras. Un solo sistema de forma para todo el sitio.

El detalle, con los números de contraste, está en [docs/decisions.md](docs/decisions.md).

## Estado

Terminado como concepto. Lo que no hice:

- Lighthouse no lo corrí (no lo tengo disponible sin conexión). Comprobé a mano contraste, foco con teclado, desbordes a 400 y 1280 px y el flujo del formulario.
- El dominio `hornilla.example` en canonical, sitemap y Open Graph es un marcador; hay que cambiarlo en `src/lib/site.ts` si se publica.
- No lo probé en Safari ni Firefox, solo en Chrome.
