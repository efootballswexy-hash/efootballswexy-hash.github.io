export const WA_LINK =
  "https://wa.me/6281226777702?text=Halo%20Kresna%20Abadi%20Jaya%2C%20saya%20ingin%20bertanya%20informasi%20sewa%20unit%20%2F%20batching%20plant%20dan%20suku%20cadang.";

export const NAV_ITEMS = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Katalog Alat" },
  { href: "/layanan", label: "Layanan" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export const UNITS = [
  { cat: "Wet Mix Batching Plant", name: "Wet Mix Batching Plant 30 m\u00B3/jam", status: "Tersedia", cap: "30 m\u00B3/jam", tipe: "Wet Mix", extra: "Stationary" },
  { cat: "Wet Mix Batching Plant", name: "Wet Mix Batching Plant 60 m\u00B3/jam", status: "Tersedia", cap: "60 m\u00B3/jam", tipe: "Wet Mix", extra: "Stationary" },
  { cat: "Dry Mix Batching Plant", name: "Dry Mix Batching Plant 25 m\u00B3/jam", status: "Tersedia", cap: "25 m\u00B3/jam", tipe: "Dry Mix", extra: "Stationary" },
  { cat: "Dry Mix Batching Plant", name: "Dry Mix Batching Plant 50 m\u00B3/jam", status: "Tersewa", cap: "50 m\u00B3/jam", tipe: "Dry Mix", extra: "Stationary" },
  { cat: "Mobile Batching Plant", name: "Mobile Batching Plant 25 m\u00B3/jam", status: "Tersedia", cap: "25 m\u00B3/jam", tipe: "Wet Mix", extra: "Mobile" },
  { cat: "Mobile Batching Plant", name: "Mobile Batching Plant 60 m\u00B3/jam", status: "Tersedia", cap: "60 m\u00B3/jam", tipe: "Dry Mix", extra: "Mobile" },
];

export const FILTERS = ["Semua", "Wet Mix Batching Plant", "Dry Mix Batching Plant", "Mobile Batching Plant"];

export const FAQS = [
  { q: "Bagaimana cara menyewa Batching Plant Indonesia?", a: "Sangat mudah! Anda cukup memilih unit batching plant melalui katalog di website ini, lalu hubungi tim kami via WhatsApp. Isi rincian kebutuhan lokasi dan durasi Anda. Tim kami akan langsung mengonfirmasi ketersediaan unit serta mengirimkan rincian penawaran harga resmi.", c: "Penyewaan" },
  { q: "Apakah unit batching plant bisa dikirim langsung ke lokasi proyek kami?", a: "Bisa. Tim logistik kami menangani pengiriman unit ke lokasi proyek di berbagai wilayah, dengan estimasi waktu pengiriman yang dikonfirmasi saat proses booking.", c: "Pengiriman" },
  { q: "Apakah harga sewa sudah termasuk operator bersertifikasi?", a: "Sebagian besar paket sewa unit batching plant kami dapat dilengkapi operator bersertifikasi sesuai kebutuhan proyek Anda. Silakan sampaikan kebutuhan ini saat konsultasi.", c: "Operasional" },
  { q: "Bagaimana sistem perhitungan harga sewa batching plant?", a: "Harga sewa dihitung berdasarkan jenis unit, kapasitas, durasi sewa (harian/bulanan/tahunan), serta lokasi pengiriman. Tim kami akan memberikan rincian penawaran setelah kebutuhan Anda dikonfirmasi.", c: "Pembayaran" },
  { q: "Apakah tersedia opsi sewa jangka panjang?", a: "Tersedia. Kami melayani skema sewa harian, bulanan, hingga tahunan dengan penawaran harga yang lebih kompetitif untuk durasi jangka panjang.", c: "Penyewaan" },
  { q: "Apakah sparepart yang dijual dijamin original?", a: "Ya, seluruh sparepart batching plant yang kami sediakan berjenis Original maupun OEM dengan jaminan kualitas dan konsultasi part number.", c: "Sparepart" },
  { q: "Wilayah mana saja yang dilayani oleh Kresna Abadi Jaya?", a: "Kami melayani proyek konstruksi dan penyewaan batching plant di berbagai wilayah Indonesia, dengan basis depo di Bantul, Daerah Istimewa Yogyakarta.", c: "Layanan" },
  { q: "Apa yang harus dilakukan jika unit mengalami kendala di lapangan?", a: "Tim teknisi kami siap memberikan dukungan perbaikan serta unit backup agar operasional proyek Anda tidak terganggu.", c: "Operasional" },
];
export const SEARCH_PAGES = [
  {
    title: "Sparepart Batching Plant",
    url: "/layanan#sparepart",
    desc: "Pasokan suku cadang mesin, mixer, timbangan, dan komponen batching plant berkategori lengkap.",
    keywords: ["sparepart", "suku cadang", "spare part", "onderdil", "part", "oem", "original"],
  },
  {
    title: "Sewa & Jual Beli Batching Plant",
    url: "/layanan#sewa",
    desc: "Layanan penyewaan serta jual beli Batching Plant (Wet Mix, Dry Mix, Mobile) dengan armada kondisi prima.",
    keywords: ["sewa", "rental", "jual beli", "beli", "wet mix", "dry mix"],
  },
  {
    title: "Tentang Kami",
    url: "/tentang",
    desc: "Profil perusahaan, visi misi, komponen batching plant, dan lokasi depo Kresna Abadi Jaya.",
    keywords: ["profil", "visi", "misi", "sejarah", "depo", "lokasi", "komponen", "storage bin", "mixer"],
  },
  {
    title: "Kontak Kami",
    url: "/kontak",
    desc: "Nomor telepon, email, alamat depo, dan form konsultasi kebutuhan sewa atau pembelian.",
    keywords: ["kontak", "hubungi", "telepon", "whatsapp", "email", "alamat", "form"],
  },
];

// Data ini dipakai untuk kop & footer PDF form pengajuan sewa (lib/generateRentalPdf.js).
export const COMPANY_INFO = {
  name: "Kresna Abadi Jaya",
  legalName: "PT Kresna Abadi Jaya",
  tagline: "Supplier Sparepart, Sewa & Jual Beli Batching Plant",
  phone: "+62 812-2677-7702",
  waNumber: "6281226777702",
  email: "info@kresnaabadijaya.com",
  bankName: "Bank BNI",
  bankAccount: "7878078773",
  bankHolder: "PT Kresna Abadi Jaya",
};