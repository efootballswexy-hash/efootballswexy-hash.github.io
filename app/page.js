import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import { HERO_ART, ICONS } from "@/components/icons";
import Svg from "@/components/Svg";
import { WA_LINK, FAQS } from "@/lib/constants";

const MINI_UNITS = [
  { key: "Wet Mix Batching Plant", name: "Wet Mix Batching Plant", status: "Tersedia", spec1: "30\u201360 m\u00B3/jam", spec2: "Wet Mix" },
  { key: "Dry Mix Batching Plant", name: "Dry Mix Batching Plant", status: "Tersedia", spec1: "25\u201350 m\u00B3/jam", spec2: "Dry Mix" },
  { key: "Mobile Batching Plant", name: "Mobile Batching Plant", status: "Tersedia", spec1: "25\u201360 m\u00B3/jam", spec2: "Wet/Dry Mix" },
];

const COMPONENTS = [
  { title: "Storage Bin", desc: "Tempat penyimpanan bahan mentah seperti pasir, kerikil, dan agregat lainnya." },
  { title: "Weighing System", desc: "Sistem penimbangan semen, air, dan agregat agar sesuai formula yang ditentukan." },
  { title: "Mixer", desc: "Mesin pencampur utama yang menyatukan seluruh material menjadi beton homogen." },
  { title: "Control System", desc: "Sistem kendali komputer yang mengatur penimbangan hingga pengoperasian plant." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-eyebrow mono-tag">KONTRAKTOR &amp; SEWA BATCHING PLANT</span>
            <h1>
              Armada Batching Plant <em>Siap Kerja</em> Untuk
              Proyek Anda
            </h1>
            <p className="lead">
              Penyediaan pemborongan proyek tanah &amp; bangunan, unit
              batching plant prima, serta suku cadang original yang tepat
              waktu dan terpercaya di seluruh Indonesia.
            </p>
            <div className="hero-actions">
              <Link href="/kontak" className="btn btn-primary">
                Konsultasi Proyek &rarr;
              </Link>
              <Link href="/produk" className="btn btn-outline">
                Lihat Katalog Alat
              </Link>
            </div>
            <div className="stat-strip">
              <div><span className="stat-num">10<span>+</span></span><span className="stat-label">Tahun Pengalaman</span></div>
              <div><span className="stat-num">50<span>+</span></span><span className="stat-label">Proyek Ditangani</span></div>
              <div><span className="stat-num">30<span>+</span></span><span className="stat-label">Unit Batching Plant</span></div>
              <div><span className="stat-num">10<span>+</span></span><span className="stat-label">Area Layanan</span></div>
            </div>
          </div>
          <div className="hero-art bracket">
            <Svg html={HERO_ART} />
            <span className="tag">SKEMATIK &middot; BATCHING PLANT</span>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="container split" as="div">
          <div className="split-media">
            <div className="frame" style={{ background: "#0A2036" }}>
              <Svg html={ICONS["Mobile Batching Plant"]} />
            </div>
            <div className="about-badge">
              <strong>10+</strong>
              <span>Tahun Kerja Lapangan</span>
            </div>
          </div>
          <div className="split-body">
            <span className="mono-tag">TENTANG KAMI</span>
            <h2 style={{ marginTop: 14 }}>
              Membangun Kepercayaan Melalui Kualitas &amp; Dedikasi
            </h2>
            <p>
              <strong>Kresna Abadi Jaya</strong> bergerak dalam bidang
              kontraktor konstruksi, sewa batching plant, dan penjualan suku
              cadang (sparepart) original. Kami mengombinasikan keahlian
              teknik pemborongan dengan armada batching plant yang selalu
              siap kerja.
            </p>
            <p>
              Dengan dukungan workshop depo dan tim mekanik berpengalaman,
              kami memastikan seluruh unit Batching Plant &mdash; baik Wet
              Mix, Dry Mix, maupun Mobile Batching Plant &mdash; selalu
              dalam kondisi prima.
            </p>
            <ul className="check-list">
              <li>Unit siap kerja dengan riwayat perawatan berkala</li>
              <li>Kepastian administrasi SPK &amp; dokumen sewa</li>
              <li>Dukungan teknisi dan backup unit di lapangan</li>
            </ul>
            <Link href="/tentang" className="card-link">
              Profil Perusahaan Selengkapnya &rarr;
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section section-dim">
        <div className="container">
          <Reveal className="section-head" as="div">
            <div>
              <span className="mono-tag">LAYANAN PERUSAHAAN</span>
              <h2>Dua Pilar Layanan Utama Kami</h2>
            </div>
            <Link href="/layanan" className="card-link">Semua Layanan &rarr;</Link>
          </Reveal>
          <Reveal className="grid-2" as="div">
            <div className="service-card bracket">
              <span className="service-index">01 / SPAREPART</span>
              <h3>Sparepart Batching Plant</h3>
              <p>Pasokan suku cadang mesin, mixer, timbangan, dan komponen batching plant berkategori lengkap.</p>
              <ul className="feature-list">
                <li>Jaminan Original &amp; OEM</li>
                <li>Pengiriman ekspres ke lokasi proyek</li>
                <li>Konsultasi part number &amp; teknis</li>
              </ul>
              <Link href="/layanan#sparepart" className="card-link">Cari Sparepart &rarr;</Link>
            </div>
            <div className="service-card bracket">
              <span className="service-index">02 / SEWA &amp; JUAL BELI</span>
              <h3>Sewa &amp; Jual Beli Batching Plant</h3>
              <p>Layanan penyewaan serta jual beli Batching Plant (Wet Mix, Dry Mix, Mobile) dengan armada kondisi prima.</p>
              <ul className="feature-list">
                <li>Sewa Harian, Bulanan &amp; Tahunan</li>
                <li>Wet Mix, Dry Mix &amp; Mobile Batching Plant</li>
                <li>Unit tahun muda, kondisi prima</li>
              </ul>
              <Link href="/produk" className="card-link">Lihat Katalog Unit &rarr;</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <div>
              <span className="mono-tag">KATALOG ARMADA</span>
              <h2>Unit Populer Siap Disewa</h2>
            </div>
            <Link href="/produk" className="card-link">Lihat Semua Unit &rarr;</Link>
          </Reveal>
          <Reveal className="grid-3" as="div">
            {MINI_UNITS.map((u) => (
              <div className="unit-card" key={u.key}>
                <div className="unit-media">
                  <Svg html={ICONS[u.key]} />
                  <span className="unit-status">{u.status}</span>
                </div>
                <div className="unit-body">
                  <span className="unit-cat">Batching Plant</span>
                  <h3>{u.name}</h3>
                  <div className="unit-specs">
                    <div><b>{u.spec1}</b>Kapasitas</div>
                    <div><b>{u.spec2}</b>Tipe</div>
                  </div>
                  <Link href="/produk" className="card-link">Detail Unit &rarr;</Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section-dark blueprint-bg dark">
        <div className="container">
          <Reveal className="section-head" as="div">
            <div>
              <span className="mono-tag">EDUKASI KONSTRUKSI</span>
              <h2>Mengenal Batching Plant</h2>
              <p>
                Fasilitas untuk mencampur dan memproduksi beton siap pakai
                (ready mix) secara terukur dan konsisten untuk berbagai
                kebutuhan konstruksi.
              </p>
            </div>
            <Link href="/tentang#komponen" className="card-link" style={{ color: "#fff" }}>
              Pelajari Komponennya &rarr;
            </Link>
          </Reveal>
          <Reveal className="grid-4" as="div">
            {COMPONENTS.map((c) => (
              <div
                className="service-card"
                key={c.title}
                style={{ background: "transparent", borderColor: "rgba(255,255,255,0.15)" }}
              >
                <span className="service-index">/// </span>
                <h3 style={{ color: "#fff", fontSize: 17 }}>{c.title}</h3>
                <p style={{ color: "#9FB0BE" }}>{c.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head" as="div">
            <div>
              <span className="mono-tag">PROSEDUR &amp; PENYEWAAN</span>
              <h2>Pertanyaan yang Sering Diajukan</h2>
              <p>
                Beberapa pertanyaan umum terkait prosedur sewa batching
                plant, pembayaran, dan garansi operasional.
              </p>
            </div>
            <Link href="/faq" className="card-link">Lihat FAQ Selengkapnya &rarr;</Link>
          </Reveal>
          <FaqAccordion items={FAQS.slice(0, 3)} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div>
            <span className="mono-tag" style={{ color: "#FF7F33" }}>KONSULTASI &amp; PENAWARAN</span>
            <h2 style={{ marginTop: 14 }}>Butuh Sewa Batching Plant?</h2>
            <p>Hubungi tim kami via WhatsApp untuk konsultasi unit, cek ketersediaan armada, dan dapatkan penawaran harga terbaik sekarang.</p>
          </div>
          <div className="cta-actions">
            <a href={WA_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp &rarr;</a>
            <Link href="/kontak" className="btn btn-outline">Isi Form Konsultasi</Link>
          </div>
        </div>
      </section>
    </>
  );
}