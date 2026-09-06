"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchSite, totalResults } from "@/lib/search";
import { ICONS } from "@/components/icons";
import Svg from "@/components/Svg";
import { WA_LINK } from "@/lib/constants";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim();
  const results = searchSite(query);
  const total = totalResults(results);

  if (!query) {
    return (
      <div className="search-empty">
        <p>
          Ketik kata kunci di kolom pencarian pada header &mdash; misalnya{" "}
          <strong>&ldquo;wet mix&rdquo;</strong>,{" "}
          <strong>&ldquo;sparepart&rdquo;</strong>, atau{" "}
          <strong>&ldquo;sewa&rdquo;</strong> &mdash; untuk menemukan unit
          batching plant, layanan, atau informasi lain di situs ini.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="search-meta">
        {total > 0 ? (
          <>
            Ditemukan <strong>{total}</strong> hasil untuk &ldquo;{query}&rdquo;
          </>
        ) : (
          <>Tidak ditemukan hasil untuk &ldquo;{query}&rdquo;</>
        )}
      </p>

      {total === 0 && (
        <div className="search-empty">
          <p>
            Coba kata kunci lain, misalnya{" "}
            <strong>&ldquo;wet mix&rdquo;</strong>,{" "}
            <strong>&ldquo;batching plant&rdquo;</strong>,{" "}
            <strong>&ldquo;sparepart&rdquo;</strong>, atau{" "}
            <strong>&ldquo;kontak&rdquo;</strong>.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 18 }}
          >
            Tanyakan Langsung via WhatsApp &rarr;
          </a>
        </div>
      )}

      {results.units.length > 0 && (
        <section className="result-group">
          <span className="mono-tag">BATCHING PLANT</span>
          <div className="grid-3" style={{ marginTop: 20 }}>
            {results.units.map((u, i) => (
              <div className="unit-card" key={i}>
                <div className="unit-media">
                  <Svg html={ICONS[u.cat]} />
                  <span className={`unit-status${u.status !== "Tersedia" ? " busy" : ""}`}>
                    {u.status}
                  </span>
                </div>
                <div className="unit-body">
                  <span className="unit-cat">{u.cat}</span>
                  <h3>{u.name}</h3>
                  <div className="unit-specs">
                    <div><b>{u.cap}</b>Kapasitas</div>
                    <div><b>{u.tipe}</b>Tipe</div>
                  </div>
                  <Link href="/produk" className="btn btn-navy btn-block">
                    Lihat di Katalog
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {results.pages.length > 0 && (
        <section className="result-group">
          <span className="mono-tag">HALAMAN &amp; LAYANAN</span>
          <div className="grid-2" style={{ marginTop: 20 }}>
            {results.pages.map((p, i) => (
              <Link href={p.url} className="result-card" key={i}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="card-link">Buka Halaman &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {results.faqs.length > 0 && (
        <section className="result-group">
          <span className="mono-tag">PERTANYAAN UMUM (FAQ)</span>
          <div className="result-list" style={{ marginTop: 20 }}>
            {results.faqs.map((f, i) => (
              <Link href="/faq" className="result-card" key={i}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
                <span className="card-link">Lihat di FAQ &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}