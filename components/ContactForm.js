"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <form id="contact-form" className="form-grid" onSubmit={handleSubmit}>
      <div className="form-row-2">
        <div>
          <label htmlFor="nama">Nama Lengkap</label>
          <input type="text" id="nama" name="nama" required placeholder="Nama Anda" />
        </div>
        <div>
          <label htmlFor="telepon">No. WhatsApp</label>
          <input type="tel" id="telepon" name="telepon" required placeholder="08xx-xxxx-xxxx" />
        </div>
      </div>
      <div className="form-row-2">
        <div>
          <label htmlFor="unit">Kebutuhan Unit</label>
          <select id="unit" name="unit" defaultValue="Excavator">
            <option>Excavator</option>
            <option>Bulldozer</option>
            <option>Wheel Loader</option>
            <option>Vibro Roller</option>
            <option>Crane</option>
            <option>Mobile Batching Plant</option>
            <option>Sparepart</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div>
          <label htmlFor="durasi">Estimasi Durasi Sewa</label>
          <select id="durasi" name="durasi" defaultValue="Harian">
            <option>Harian</option>
            <option>Bulanan</option>
            <option>Tahunan</option>
            <option>Jual Beli</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="lokasi">Lokasi Proyek</label>
        <input type="text" id="lokasi" name="lokasi" placeholder="Kota / Kabupaten, Provinsi" />
      </div>
      <div>
        <label htmlFor="pesan">Detail Kebutuhan</label>
        <textarea
          id="pesan"
          name="pesan"
          placeholder="Jelaskan kebutuhan unit, kapasitas, dan estimasi waktu penggunaan..."
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Kirim Permintaan Konsultasi
      </button>
      {submitted && (
        <p style={{ color: "var(--blue-600)", fontSize: 13 }}>
          Terima kasih, permintaan Anda kami catat. Tim kami akan segera
          menghubungi Anda melalui WhatsApp / email.
        </p>
      )}
    </form>
  );
}
