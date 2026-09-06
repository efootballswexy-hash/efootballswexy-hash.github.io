"use client";

import { useState } from "react";
import { generateRentalPdf, buildDocNumber } from "@/lib/generateRentalPdf";
import { COMPANY_INFO } from "@/lib/constants";

function buildWaMessage({ unit, form, docNumber }) {
  return [
    `*FORM PENGAJUAN SEWA - ${COMPANY_INFO.name.toUpperCase()}*`,
    `No. Pengajuan: ${docNumber}`,
    ``,
    `Nama: ${form.nama}`,
    `No. WhatsApp: ${form.telepon}`,
    `Lokasi Proyek: ${form.lokasi || "-"}`,
    ``,
    `*Unit yang Diajukan:*`,
    `${unit.name} (${unit.cat})`,
    `Kapasitas: ${unit.cap} | Tipe: ${unit.tipe}`,
    `Durasi: ${form.durasi || "-"}`,
    ``,
    form.catatan ? `Catatan: ${form.catatan}` : "",
    `_PDF form pengajuan sudah saya unduh dan akan saya lampirkan di chat ini._`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function RentalRequestForm({ unit, onClose }) {
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    lokasi: "",
    durasi: "",
    catatan: "",
  });
  const [status, setStatus] = useState("idle"); // idle | generating | done
  const [manualWaLink, setManualWaLink] = useState(null);
  const [error, setError] = useState("");

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama.trim() || !form.telepon.trim()) {
      setError("Nama dan No. WhatsApp wajib diisi.");
      return;
    }
    setError("");
    setStatus("generating");

    // Buka tab kosong SEKARANG (masih dalam gesture klik user) supaya
    // tidak diblokir popup blocker browser saat isinya diisi belakangan.
    const waWindow = window.open("", "_blank");
    const docNumber = buildDocNumber();

    try {
      await generateRentalPdf({ unit, form, docNumber });
    } catch (err) {
      console.error("Gagal membuat PDF:", err);
    }

    const waLink = `https://wa.me/${COMPANY_INFO.waNumber}?text=${encodeURIComponent(
      buildWaMessage({ unit, form, docNumber })
    )}`;

    if (waWindow) {
      waWindow.location.href = waLink;
    } else {
      setManualWaLink(waLink);
    }
    setStatus("done");
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Tutup">
          &times;
        </button>

        <span className="mono-tag">AJUKAN SEWA</span>
        <h3 className="modal-title">{unit.name}</h3>
        <p className="modal-unit-meta">
          {unit.cat} &middot; {unit.cap} &middot; {unit.tipe}
        </p>

        {status === "done" ? (
          <div className="modal-success">
            <p>
              PDF form pengajuan sudah terunduh ke perangkat Anda, dan tab
              WhatsApp sudah dibuka dengan pesan otomatis.
            </p>
            <p>
              <strong>Langkah terakhir:</strong> di WhatsApp, lampirkan file
              PDF yang baru saja terunduh (biasanya ada di folder{" "}
              <em>Downloads</em>), lalu tekan Kirim.
            </p>
            
            {manualWaLink && (
              <a
                href={manualWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                Buka WhatsApp Sekarang &rarr;
              </a>
            )}
            <button
              className="btn btn-outline btn-block"
              onClick={onClose}
              style={{ marginTop: 12 }}
            >
              Tutup
            </button>
          </div>
        ) : (
          <form className="form-grid" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="rf-nama">Nama / Perusahaan</label>
              <input
                id="rf-nama"
                required
                value={form.nama}
                onChange={(e) => update("nama", e.target.value)}
                placeholder="Nama Anda / PT..."
              />
            </div>
            <div>
              <label htmlFor="rf-telepon">No. WhatsApp</label>
              <input
                id="rf-telepon"
                required
                type="tel"
                value={form.telepon}
                onChange={(e) => update("telepon", e.target.value)}
                placeholder="08xx-xxxx-xxxx"
              />
            </div>
            <div>
              <label htmlFor="rf-lokasi">Lokasi Proyek</label>
              <input
                id="rf-lokasi"
                value={form.lokasi}
                onChange={(e) => update("lokasi", e.target.value)}
                placeholder="Kota / Kabupaten, Provinsi"
              />
            </div>
            <div>
              <label htmlFor="rf-durasi">Estimasi Durasi Sewa</label>
              <input
                id="rf-durasi"
                value={form.durasi}
                onChange={(e) => update("durasi", e.target.value)}
                placeholder="Contoh: 2 Minggu, 1 Bulan"
              />
            </div>
            <div>
              <label htmlFor="rf-catatan">Catatan Tambahan</label>
              <textarea
                id="rf-catatan"
                value={form.catatan}
                onChange={(e) => update("catatan", e.target.value)}
                placeholder="Kebutuhan khusus, tanggal mulai, dll."
              />
            </div>
            {error && <p className="modal-error">{error}</p>}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={status === "generating"}
            >
              {status === "generating"
                ? "Membuat PDF..."
                : "Buat PDF & Kirim ke WhatsApp"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}