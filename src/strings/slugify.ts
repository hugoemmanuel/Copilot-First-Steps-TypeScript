/**
 * Converts an arbitrary string to a lowercase URL slug.
 * NOTE: intentionally limited: accents/diacritics are not handled.
 * TODO: normalize diacritics (e.g., "Mexico" -> "mexico") and non‑Latin scripts.
 */
export function slugify(s: string): string {
  let out = s.trim().toLowerCase();
  out = out.replaceAll('—', '-').replaceAll('–', '-').replaceAll('_', '-').replaceAll(' ', '-');
  // collapse multiple dashes
  while (out.includes('--')) out = out.replaceAll('--', '-');
  // remove anything not a-z, 0-9, or dash
  out = out.replace(/[^a-z0-9\-]+/g, '');
  // trim leading/trailing dashes
  out = out.replace(/^-+|-+$/g, '');
  return out;
}
