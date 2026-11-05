import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Tostadora pequeña en Santo Domingo. Café dominicano de Barahona, Jarabacoa y Ocoa, en bolsas de 250 g y en taza. Proyecto conceptual.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name}, tostadores de café en Santo Domingo`, template: `%s | ${SITE.name}` },
  description,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name}, tostadores de café en Santo Domingo`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Saco de café Hornilla sobre fondo verde claro" }],
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  description,
  url: SITE.url,
  servesCuisine: "Café de especialidad",
  priceRange: "RD$",
  address: { "@type": "PostalAddress", addressLocality: "Santo Domingo", addressCountry: "DO" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "08:00", closes: "14:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#contenido"
          className="fixed left-3 top-3 z-50 -translate-y-20 bg-ink px-4 py-3 font-bold text-paper focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
