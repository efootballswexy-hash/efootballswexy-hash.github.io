import FaqAccordion from "@/components/FaqAccordion";
import { WA_LINK, FAQS } from "@/lib/constants";

export const metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan seputar prosedur sewa alat berat, pembayaran, dan garansi operasional.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero blueprint-bg dark">
        <div className="container">
          <span className="mono-tag" style={{ color: "#FF7F33" }}>INFORMASI PROSEDUR &amp; PENYEWAAN</span>
          <h1>Pertanyaan yang Sering Diajukan</h1>
          <p>Berikut adalah beberapa pertanyaan umum terkait prosedur sewa alat berat, pembayaran, dan garansi operasional Kresna Abadi Jaya.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div>
            <span className="mono-tag" style={{ color: "#FF7F33" }}>MASIH ADA PERTANYAAN?</span>
            <h2 style={{ marginTop: 14 }}>Tim Kami Siap Membantu</h2>
            <p>Hubungi kami langsung via WhatsApp untuk jawaban cepat seputar unit, harga, dan prosedur sewa.</p>
          </div>
          <div className="cta-actions">
            <a href={WA_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Hubungi via WhatsApp &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}
