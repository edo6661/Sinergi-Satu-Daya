/** Canonical production origin — keep in sync with sitemap / Search Console. */
export const SITE_ORIGIN = "https://sinergisatudaya.com";

export const SITE_NAME = "SSD Mobility";
export const ORG_NAME = "PT Sinergi Satu Daya";

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized === "/" ? "" : normalized}`;
}
