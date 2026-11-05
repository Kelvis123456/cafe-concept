# Decisiones

## 2026-11-04 · Marca y alcance

Nombre: Hornilla (la hornilla es el fogón pequeño de las cocinas dominicanas). Alternativas descartadas: nombres con "Tostao" y con palabras taínas, porque dan más probabilidad de chocar con negocios reales. Busqué "Hornilla tostadores café Santo Domingo" y no apareció ninguna tostadora; solo anuncios de estufas.

Todo lo que podría pasar por dato real se evitó: sin dirección, sin teléfono, sin reseñas, sin logos de prensa, sin nombres de fincas ni de personas. El pie de página y el README dicen que es un concepto.

## 2026-11-04 · Estático, sin backend

`output: "export"` con `trailingSlash: true`. No hay nada que renderizar en el servidor y así se despliega en cualquier hosting estático gratis. El formulario de reservas valida en el cliente y lo dice sin rodeos en la página.

## 2026-11-04 · Identidad visual

Referente: lo que se imprime en los sacos de café (plantilla, mayúsculas condensadas, un color fuerte sobre fondo claro). Descarté el crema con terracota y el negro con acento neón, que son los dos looks por defecto de este tipo de sitio.

Paleta (tokens en `src/app/globals.css`):

| Token   | Valor   | Uso                                          |
| ------- | ------- | -------------------------------------------- |
| paper   | #E9EEE5 | fondo                                        |
| paper-2 | #DCE3D6 | franjas y paneles                            |
| ink     | #14201A | texto                                        |
| ink-2   | #3A4C42 | texto secundario                             |
| forest  | #1F3A2D | pie de página                                |
| cherry  | #A3202C | acento único (el rojo de la cereza del café) |
| line    | #5C6E63 | bordes de campos                             |

Tipografía: Archivo variable con el eje de ancho (66 para títulos, normal para texto) y IBM Plex Mono para precios y horas. Dos familias, autohospedadas por `next/font`. Una sola familia con eje de ancho mantiene el sitio coherente y pesa poco.

Formas: esquinas rectas en todo. Botones con borde de 2 px, sin sombras. El único elemento redondeado es el grano de café, porque es un objeto y no un componente.

Movimiento: la curva de tueste se dibuja una vez al cargar y el saco aparece con un fundido. Todo está bajo `prefers-reduced-motion: no-preference`. Los botones se hunden a `scale(0.96)` al pulsarlos.

## 2026-11-04 · Contraste (WCAG 2.x, calculado con luminancia relativa)

| Par                                        | Ratio | Requisito |
| ------------------------------------------ | ----- | --------- |
| ink sobre paper                            | 14.25 | 4.5       |
| ink-2 sobre paper                          | 7.78  | 4.5       |
| ink sobre paper-2                          | 12.79 | 4.5       |
| ink-2 sobre paper-2                        | 6.98  | 4.5       |
| cherry sobre paper (enlaces, errores)      | 6.37  | 4.5       |
| cherry sobre paper-2                       | 5.71  | 4.5       |
| paper sobre cherry (botón, saco)           | 6.37  | 4.5       |
| paper sobre ink (botón al pasar el cursor) | 14.25 | 4.5       |
| line sobre paper (borde de campos)         | 4.61  | 3         |
| line sobre paper-2                         | 4.14  | 3         |
| paper sobre forest (pie)                   | 10.48 | 4.5       |
| #B9C9BE sobre forest (pie, secundario)     | 7.15  | 4.5       |
| #EDB1A6 sobre forest (aviso del pie)       | 6.72  | 4.5       |
| ink-2 sobre agua del plano (#C3D2CC)       | 5.85  | 4.5       |
| ink sobre paper (anillo de foco)           | 14.25 | 3         |

El cereza sobre fondo oscuro no pasa, por eso el aviso del pie usa una variante clara del mismo tono.

## 2026-11-04 · Ilustración propia en SVG

No hay stock ni fotos. El saco, la curva, los granos y el plano son SVG escritos a mano en `src/components/`. La dispersión de granos de la 404 usa un generador pseudoaleatorio con semilla fija, así el build es reproducible. La curva de tueste está rotulada como ilustrativa y el plano como no real.

## 2026-11-04 · Formulario

Validación sin librería: son seis campos. Errores en línea debajo de cada campo, un resumen arriba que recibe el foco con enlaces a cada campo, `aria-invalid` y `aria-describedby`. Las horas disponibles dependen del día elegido y se rechazan fuera del horario. El texto de error empieza con "Error:" para que no dependa solo del color. Dejé fuera `min`/`max` en el campo de fecha porque calcular "hoy" al renderizar rompe la hidratación en un sitio estático; la validación cubre fechas pasadas y a más de 60 días.

## 2026-11-04 · CSS propio dentro de `@layer components`

Las clases `.btn`, `.stencil` y `.mono` se escribieron primero fuera de capas y pisaban las utilidades de Tailwind (por ejemplo, `md:hidden` no ocultaba el botón de menú en escritorio). Las metí en `@layer components`. Lo encontré mirando las capturas, no con el linter.
