import ProductCatalog from "@/components/ProductCatalog";
import { WA_LINK } from "@/lib/constants";

export const metadata = {
  title: "Katalog Alat Berat",
  description:
    "Daftar unit alat berat siap sewa harian, bulanan, dan tahunan dengan jaminan kondisi operasional prima.",
};

export default function ProdukPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>KATALOG ARMADA &amp; SPESIFIKASI</span>
          <h1>Penyewaan Alat Berat</h1>
          <p>Daftar unit alat berat siap sewa harian, bulanan, dan tahunan dengan jaminan kondisi operasional prima.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProductCatalog />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div>
            <span className="mono-tag" style={{ color: "#FF7F33" }}>KONSULTASI &amp; PENAWARAN</span>
            <h2 style={{ marginTop: 14 }}>Butuh Spesifikasi Khusus Unit Alat Berat?</h2>
            <p>Jika jenis unit yang Anda cari belum tercantum di katalog, hubungi tim kami untuk konsultasi armada pengganti.</p>
          </div>
          <div className="cta-actions">
            <a href={WA_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}
