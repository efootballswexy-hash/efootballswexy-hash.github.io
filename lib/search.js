import { UNITS, FAQS, SEARCH_PAGES } from "@/lib/constants";

function norm(str) {
  return (str || "").toString().toLowerCase();
}

/**
 * Simple client-side substring search across the product catalog,
 * FAQ, and a small manual index of informational pages.
 * Returns { units, faqs, pages } — each an array of matches.
 */
export function searchSite(rawQuery) {
  const q = norm(rawQuery).trim();
  if (!q) return { units: [], faqs: [], pages: [] };

  const units = UNITS.filter((u) =>
    norm(`${u.name} ${u.cat} ${u.tipe} ${u.cap} ${u.extra}`).includes(q)
  );

  const faqs = FAQS.filter((f) =>
    norm(`${f.q} ${f.a} ${f.c}`).includes(q)
  );

  const pages = SEARCH_PAGES.filter((p) =>
    norm(`${p.title} ${p.desc} ${(p.keywords || []).join(" ")}`).includes(q)
  );

  return { units, faqs, pages };
}

export function totalResults(results) {
  return results.units.length + results.faqs.length + results.pages.length;
}