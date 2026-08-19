import ContactForm from "@/components/ContactForm";
import { WA_LINK } from "@/lib/constants";

export const metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi Kresna Abadi Jaya untuk konsultasi sewa alat berat, batching plant, dan sparepart.",
};

export default function KontakPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>KONSULTASI &amp; PENAWARAN</span>
          <h1>Hubungi Kresna Abadi Jaya</h1>
          <p>Sampaikan kebutuhan sewa alat berat, batching plant, atau sparepart Anda &mdash; tim kami akan segera merespons.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-card bracket">
              <span className="mono-tag">TELEPON</span>
              <p><a href="tel:+6281226777702">+62 812-2677-7702</a></p>
            </div>
            <div className="contact-card bracket">
              <span className="mono-tag">EMAIL</span>
              <p><a href="mailto:info@kresnaabadijaya.com">info@kresnaabadijaya.com</a></p>
            </div>
            <div className="contact-card bracket">
              <span className="mono-tag">DEPO &amp; WORKSHOP</span>
              <p>Jl. Masjid Kanggotan, Kerto, Pleret, Kec. Pleret, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55791</p>
            </div>
            <div className="contact-card bracket">
              <span className="mono-tag">JAM OPERASIONAL</span>
              <p>Senin &ndash; Sabtu, 07.00 &ndash; 17.00 WIB</p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
              Chat via WhatsApp &rarr;
            </a>
          </div>
          <div>
            <span className="mono-tag">FORM KONSULTASI</span>
            <h2 style={{ margin: "14px 0 24px", fontSize: 26 }}>Ajukan Kebutuhan Sewa / Pembelian</h2>
            <ContactForm />
            <div className="map-frame">
              <iframe
                src="https://maps.google.com/maps?q=Jl.%20Masjid%20Kanggotan,%20Kerto,%20Pleret,%20Kec.%20Pleret,%20Kabupaten%20Bantul,%20Daerah%20Istimewa%20Yogyakarta%2055791&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                title="Lokasi Depo Kresna Abadi Jaya"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
