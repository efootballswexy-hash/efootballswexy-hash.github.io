# Kresna Abadi Jaya — Website (Next.js)

Versi Next.js (App Router, JavaScript) dari website Kresna Abadi Jaya /
Batching Plant Indonesia. Struktur konten mengikuti batchingplantindonesia.com,
gaya visual industrial/blueprint terinspirasi haomeibatchplant.com.

## Menjalankan di komputer Anda

Prasyarat: [Node.js](https://nodejs.org) versi 18.18 ke atas (disarankan versi LTS terbaru).

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk build produksi:
```bash
npm run build
npm run start
```

## Struktur folder
```
app/
  layout.js          -> layout utama (header, footer, font, metadata)
  globals.css         -> seluruh desain (design tokens di bagian atas file)
  page.js              -> Beranda ("/")
  produk/page.js        -> Katalog Alat ("/produk")
  layanan/page.js       -> Layanan ("/layanan")
  tentang/page.js       -> Tentang Kami ("/tentang")
  faq/page.js            -> FAQ ("/faq")
  kontak/page.js          -> Kontak ("/kontak")
components/
  Header.js, Footer.js, WhatsAppFloat.js  -> elemen umum di semua halaman
  FaqAccordion.js, ProductCatalog.js, ContactForm.js -> komponen interaktif (client)
  Reveal.js             -> animasi muncul saat scroll
  icons.js               -> ilustrasi SVG bergaya blueprint (alat berat & hero)
lib/
  constants.js            -> data unit alat, FAQ, nomor WhatsApp, menu navigasi
```

## Mengedit konten
- Teks/menu tiap halaman: edit langsung file di `app/*/page.js`.
- Data unit alat & FAQ: edit `lib/constants.js` (dipakai bersama oleh
  beberapa halaman, jadi cukup diubah di satu tempat).
- Nomor WhatsApp: ganti nilai `WA_LINK` di `lib/constants.js`.
- Warna, font, spacing: semua ada di `app/globals.css` bagian `:root { ... }`
  (design tokens) di baris paling atas file.

## Catatan
- Form di halaman Kontak saat ini hanya UI (belum terhubung ke backend/email).
  Untuk mengirim data sungguhan, hubungkan ke Formspree/Getform, atau buat
  API route sendiri di `app/api/`.
- Ilustrasi alat berat memakai SVG buatan sendiri (gaya blueprint/garis
  teknik) agar tidak bergantung pada foto berhak cipta pihak lain. Untuk
  memakai foto unit asli, tambahkan gambar ke folder `public/` dan ganti
  komponen `<Svg html={...} />` terkait dengan `<Image>` dari `next/image`.
- Peta lokasi memakai Google Maps embed dari alamat depo di Bantul, DIY.
