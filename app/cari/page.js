import { Suspense } from "react";
import SearchResults from "@/components/SearchResults";

export const metadata = {
  title: "Hasil Pencarian",
  description: "Cari unit batching plant, layanan, dan informasi lain di situs Kresna Abadi Jaya.",
};

export default function CariPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>PENCARIAN</span>
          <h1>Hasil Pencarian</h1>
          <p>Cari unit batching plant, layanan, atau informasi lain di situs kami.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Suspense fallback={<p className="search-meta">Memuat hasil pencarian&hellip;</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}