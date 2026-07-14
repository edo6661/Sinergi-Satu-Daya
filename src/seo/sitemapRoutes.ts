/**
 * Public routes for sitemap generation.
 * Kept free of React/lucide so Vite config can import it safely.
 */
import { layananProducts } from "../data/catalog/layanan";

const CATEGORY_TO_SERVICE: Record<string, string> = {
  "two-wheel": "ev-sales",
  passenger: "ev-sales",
  commercial: "ev-sales",
  charger: "charger",
  project: "b2b-rental",
  proteksi: "ev-safety",
};

const SERVICE_PATHS = [
  "/layanan",
  "/layanan/ev-sales",
  "/layanan/b2b-rental",
  "/layanan/b2b-consulting",
  "/layanan/charger",
  "/layanan/ev-safety",
];

export function getSitemapRoutes(): string[] {
  const productPaths = layananProducts
    .map((product) => {
      const serviceSlug = CATEGORY_TO_SERVICE[product.categoryId];
      if (!serviceSlug) return null;
      return `/layanan/${serviceSlug}/${product.slug}`;
    })
    .filter((path): path is string => Boolean(path));

  return [...SERVICE_PATHS, ...productPaths];
}
