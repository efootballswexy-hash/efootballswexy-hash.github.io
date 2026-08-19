import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

export const metadata = {
  title: "Layanan Utama",
  description:
    "Layanan spesialis penyediaan sparepart batching plant & alat berat, serta jual beli dan sewa unit kondisi prima.",
};

const STEPS = [
  { num: "01", tag: "Konsultasi", title: "Sampaikan Kebutuhan Proyek", desc: "Hubungi tim kami via WhatsApp atau form kontak untuk konsultasi jenis unit, kapasitas, dan durasi kebutuhan." },
  { num: "02", tag: "Penawaran", title: "Konfirmasi Ketersediaan & Harga", desc: "Tim kami mengecek ketersediaan armada dan mengirimkan rincian penawaran harga resmi." },
  { num: "03", tag: "Pengiriman", title: "Unit Dikirim ke Lokasi Proyek", desc: "Setelah SPK disepakati, unit dikirim ke lokasi dengan dukungan teknisi." },
  { num: "04", tag: "Operasional", title: "Pendampingan & Backup Unit", desc: "Kami mendukung perawatan berkala dan backup unit agar operasional lapangan tetap lancar." },
];

export default function LayananPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>PILAR LAYANAN UTAMA</span>
          <h1>Sparepart &amp; Sewa Batching Plant</h1>
          <p>Solusi terpadu pasokan sparepart original/OEM batching plant &amp; alat berat, serta penyewaan dan jual beli armada kondisi prima.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="service-card bracket" id="sparepart">
            <span className="service-index">01</span>
            <h3>Sparepart Batching Plant &amp; Alat Berat</h3>
            <p>Pasokan suku cadang hidrolik, mesin, undercarriage, filter, dan komponen batching plant berkategori lengkap.</p>
            <span className="mono-tag" style={{ marginBottom: 12 }}>KEUNGGULAN LAYANAN</span>
            <ul className="feature-list">
              <li>Jaminan Original &amp; OEM</li>
              <li>Sparepart Batching Plant &amp; Alat Berat</li>
              <li>Pengiriman ekspres ke lokasi</li>
              <li>Konsultasi part number &amp; teknis</li>
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-navy">Cari Sparepart &rarr;</a>
          </div>
          <div className="service-card bracket" id="sewa">
            <span className="service-index">02</span>
            <h3>Sewa &amp; Jual Beli Batching Plant</h3>
            <p>Layanan penyewaan serta jual beli Batching Plant (Wet Mix, Dry Mix, Mobile) dan armada alat berat kondisi prima.</p>
            <span className="mono-tag" style={{ marginBottom: 12 }}>KEUNGGULAN LAYANAN</span>
            <ul className="feature-list">
              <li>Jual Beli &amp; Sewa Harian, Bulanan, Tahunan</li>
              <li>Batching Plant Wet Mix, Dry Mix &amp; Mobile</li>
              <li>Unit tahun muda kondisi prima</li>
              <li>Dukungan teknisi &amp; backup unit</li>
            </ul>
            <Link href="/produk" className="btn btn-navy">Lihat Katalog Unit &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="section section-dim">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="mono-tag">ALUR KERJA</span>
              <h2>Bagaimana Kami Melayani Anda</h2>
            </div>
          </div>
          <div className="process-list">
            {STEPS.map((s) => (
              <div className="process-row" key={s.num}>
                <div className="process-num">{s.num}<small>{s.tag}</small></div>
                <div>
                  <h4>{s.title}</h4>
                  <p style={{ color: "var(--ink-600)", fontSize: 14 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div>
            <span className="mono-tag" style={{ color: "#FF7F33" }}>KONSULTASI &amp; PENAWARAN</span>
            <h2 style={{ marginTop: 14 }}>Butuh Sewa Alat Berat atau Batching Plant?</h2>
            <p>Hubungi tim kami via WhatsApp untuk konsultasi unit, cek ketersediaan armada, dan dapatkan penawaran harga terbaik sekarang.</p>
          </div>
          <div className="cta-actions">
            <a href={WA_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}
