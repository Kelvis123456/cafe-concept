import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/cafe/", "/reservar/", "/donde-estamos/", "/nosotros/"].map((p) => ({ url: `${SITE.url}${p}` }));
}
