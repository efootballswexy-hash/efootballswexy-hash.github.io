import Link from "next/link";
import { ICONS, Svg } from "@/components/icons";
import { WA_LINK } from "@/lib/constants";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Profil Kresna Abadi Jaya, penyedia sewa alat berat, armada batching plant, dan penjualan suku cadang (sparepart) original.",
};

export default function TentangPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>PROFIL PERUSAHAAN</span>
          <h1>Tentang Kresna Abadi Jaya</h1>
          <p>Mitra terpercaya dalam penyediaan alat berat, suku cadang, dan pemborongan proyek konstruksi nasional.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <div className="frame" style={{ background: "#0A2036" }}>
              <Svg html={ICONS["Excavator"]} />
            </div>
          </div>
          <div className="split-body">
            <span className="mono-tag">TENTANG KAMI</span>
            <h2 style={{ marginTop: 14 }}>Membangun Kepercayaan Melalui Kualitas &amp; Dedikasi</h2>
            <p><strong>Kresna Abadi Jaya</strong> bergerak dalam bidang kontraktor konstruksi, sewa alat berat, dan penjualan suku cadang (sparepart) original. Kami mengombinasikan keahlian teknik pemborongan dengan armada alat berat yang selalu siap kerja.</p>
            <p>Dengan dukungan workshop depo dan tim mekanik berpengalaman, kami memastikan seluruh unit seperti Excavator, Bulldozer, Wheel Loader, dan Mobile Batching Plant selalu dalam kondisi prima.</p>
            <Link href="/kontak" className="card-link">Konsultasikan Proyek Anda &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="section section-dim" id="komponen">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="mono-tag">EDUKASI KONSTRUKSI</span>
              <h2>Mengenal Batching Plant</h2>
              <p>Fasilitas produksi beton presisi dengan kontrol komputer dan sistem penimbangan otomatis, memastikan setiap kubik beton memenuhi standar mutu proyek nasional.</p>
            </div>
          </div>
          <div className="process-list">
            <div className="process-row">
              <div className="process-num">01<small>Komponen Utama</small></div>
              <dl className="sub-grid">
                <div><dt>Storage Bin</dt><dd>Tempat penyimpanan bahan mentah seperti pasir, kerikil, dan agregat lainnya.</dd></div>
                <div><dt>Weighing System</dt><dd>Sistem penimbangan untuk mengukur takaran semen, air, dan agregat sesuai formula.</dd></div>
                <div><dt>Mixer</dt><dd>Mesin pencampur utama yang menyatukan seluruh material hingga homogen.</dd></div>
                <div><dt>Control System</dt><dd>Sistem kendali komputer yang mengatur penimbangan hingga pengoperasian.</dd></div>
              </dl>
            </div>
            <div className="process-row">
              <div className="process-num">02<small>Jenis Batching Plant</small></div>
              <dl className="sub-grid">
                <div><dt>Wet Mix</dt><dd>Seluruh material, termasuk air, dicampur langsung di dalam mixer hingga siap digunakan.</dd></div>
                <div><dt>Dry Mix</dt><dd>Material dicampur kering di batching plant, air ditambahkan saat masuk ke truk mixer.</dd></div>
                <div><dt>Mobile Batching Plant</dt><dd>Konstruksi fleksibel dan mudah dipindahkan ke lokasi proyek lain sesuai kebutuhan.</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="mono-tag">VISI &amp; MISI</span>
          <div className="vm-grid">
            <div className="vm-card">
              <span className="vm-tag">01 / Visi</span>
              <h3>Visi Perusahaan</h3>
              <p>Menjadi kontraktor konstruksi dan penyedia sewa alat berat terpercaya yang diakui atas keandalan armada, keselamatan kerja, dan mutu layanan.</p>
            </div>
            <div className="vm-card">
              <span className="vm-tag">02 / Misi</span>
              <h3>Misi Perusahaan</h3>
              <ul>
                <li>Menyediakan armada alat berat dalam kondisi operasional prima.</li>
                <li>Memberikan pelayanan pemborongan konstruksi profesional.</li>
                <li>Mendukung efisiensi biaya proyek mitra melalui skema sewa yang transparan.</li>
              </ul>
            </div>
          </div>
          <div className="stat-strip" style={{ borderTop: "1px solid var(--grid-line)", marginTop: 56, paddingTop: 32 }}>
            <div style={{ borderLeftColor: "var(--grid-line)" }}><span className="stat-num" style={{ color: "var(--navy-900)" }}>10<span style={{ color: "var(--orange-600)" }}>+</span></span><span className="stat-label" style={{ color: "var(--ink-600)" }}>Tahun Pengalaman</span></div>
            <div style={{ borderLeftColor: "var(--grid-line)" }}><span className="stat-num" style={{ color: "var(--navy-900)" }}>50<span style={{ color: "var(--orange-600)" }}>+</span></span><span className="stat-label" style={{ color: "var(--ink-600)" }}>Proyek Ditangani</span></div>
            <div style={{ borderLeftColor: "var(--grid-line)" }}><span className="stat-num" style={{ color: "var(--navy-900)" }}>30<span style={{ color: "var(--orange-600)" }}>+</span></span><span className="stat-label" style={{ color: "var(--ink-600)" }}>Unit Alat Berat</span></div>
            <div style={{ borderLeftColor: "var(--grid-line)" }}><span className="stat-num" style={{ color: "var(--navy-900)" }}>10<span style={{ color: "var(--orange-600)" }}>+</span></span><span className="stat-label" style={{ color: "var(--ink-600)" }}>Area Layanan Utama</span></div>
          </div>
        </div>
      </section>

      <section className="section section-dim">
        <div className="container">
          <span className="mono-tag">LOKASI DEPO</span>
          <h2 style={{ marginTop: 14, marginBottom: 24 }}>Kunjungi Fasilitas Kami</h2>
          <p style={{ color: "var(--ink-600)", maxWidth: 560 }}>Kami menyambut Anda untuk meninjau langsung armada dan fasilitas depo kami di alamat tertera.</p>
          <div className="map-frame">
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Masjid%20Kanggotan,%20Kerto,%20Pleret,%20Kec.%20Pleret,%20Kabupaten%20Bantul,%20Daerah%20Istimewa%20Yogyakarta%2055791&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Lokasi Depo Kresna Abadi Jaya"
            />
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
