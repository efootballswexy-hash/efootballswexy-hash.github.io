import Link from "next/link";
import { WA_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Kolom 1: Brand & Deskripsi */}
          <div>
            <div className="footer-brand">
              <span className="brand-mark">K</span>
              <span className="brand-text" style={{ color: "#fff" }}>
                <strong style={{ color: "#fff" }}>Kresna Abadi Jaya</strong>
                <span>Batching Plant Indonesia</span>
              </span>
            </div>
            <p>
              Kontraktor konstruksi, penyedia sewa alat berat, armada batching
              plant, dan sparepart original yang melayani proyek di seluruh
              Indonesia.
            </p>
            <div className="social-row" style={{ marginTop: 22 }}>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href={WA_LINK} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">WA</a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4>Navigasi</h4>
            <div className="footer-links">
              <Link href="/produk">Katalog Alat</Link>
              <Link href="/layanan">Layanan</Link>
              <Link href="/tentang">Tentang Kami</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>

          {/* Kolom 3: Kategori Unit */}
          <div>
            <h4>Kategori Unit</h4>
            <div className="footer-links">
              <Link href="/produk">Excavator</Link>
              <Link href="/produk">Bulldozer</Link>
              <Link href="/produk">Wheel Loader</Link>
              <Link href="/produk">Mobile Batching Plant</Link>
            </div>
          </div>

          <div>
            <h4>Lokasi Kami</h4>
            <div className="map-frame" style={{ marginTop: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2541911873814!2d110.3973449!3d-7.868447700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a570063e8adb1%3A0xb4749dea3b56ff77!2sOffice%20PT%20Kresna%20Abadi%20Jaya%20(%20KAYA%20Group%20)!5e0!3m2!1sid!2sid!4v1787119425230!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Kresna Abadi Jaya"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>&copy; 2026 Kresna Abadi Jaya. Seluruh hak cipta dilindungi.</span>
          <span>Dirancang untuk armada &amp; layanan konstruksi Indonesia.</span>
        </div>
      </div>
    </footer>
  );
}