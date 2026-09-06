import { COMPANY_INFO } from "@/lib/constants";

const NAVY = [10, 32, 54];
const ORANGE = [255, 106, 19];
const GREY = [90, 100, 110];
const LIGHT_GREY = [230, 230, 230];
const PAPER = [247, 248, 246];

function pad2(n) {
  return String(n).padStart(2, "0");
}

export function buildDocNumber() {
  const d = new Date();
  return `SW${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}-${pad2(
    d.getHours()
  )}${pad2(d.getMinutes())}`;
}

/**
 * Generates a "Form Pengajuan Sewa" PDF (client-side only, via jsPDF) and
 * triggers a browser download. Returns the generated document number.
 */
export async function generateRentalPdf({ unit, form, docNumber }) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;

  const today = new Date().toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // ---- Logo mark ----
  doc.setDrawColor(...ORANGE);
  doc.setLineWidth(0.8);
  doc.rect(margin, 14, 12, 12);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...ORANGE);
  doc.text("K", margin + 6, 22.5, { align: "center" });

  // ---- Company name / tagline ----
  doc.setTextColor(...NAVY);
  doc.setFontSize(15);
  doc.text(COMPANY_INFO.name.toUpperCase(), margin + 17, 19);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GREY);
  doc.text(COMPANY_INFO.tagline, margin + 17, 24);
  doc.text(`Tel: ${COMPANY_INFO.phone}  |  ${COMPANY_INFO.email}`, margin + 17, 28);

  // ---- Title block (right) ----
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...NAVY);
  doc.text("FORM PENGAJUAN SEWA", pageWidth - margin, 19, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.text(`Tanggal: ${today}`, pageWidth - margin, 25, { align: "right" });
  doc.text(`No. Pengajuan: ${docNumber}`, pageWidth - margin, 30, { align: "right" });

  doc.setDrawColor(...LIGHT_GREY);
  doc.line(margin, 35, pageWidth - margin, 35);

  // ---- Kepada Yth ----
  let y = 44;
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.text("Kepada Yth,", margin, y);
  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...NAVY);
  doc.text(form.nama || "-", margin, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.text(`No. WhatsApp: ${form.telepon || "-"}`, margin, y);
  if (form.lokasi) {
    y += 5;
    doc.text(`Lokasi Proyek: ${form.lokasi}`, margin, y);
  }

  // ---- Item table ----
  y += 12;
  const tableWidth = pageWidth - margin * 2;
  doc.setFillColor(...NAVY);
  doc.rect(margin, y, tableWidth, 9, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("NO", margin + 3, y + 6);
  doc.text("UNIT / SPESIFIKASI", margin + 15, y + 6);
  doc.text("DURASI", pageWidth - margin - 55, y + 6);
  doc.text("STATUS", pageWidth - margin - 3, y + 6, { align: "right" });

  y += 9;
  const rowHeight = 24;
  doc.setDrawColor(...LIGHT_GREY);
  doc.rect(margin, y, tableWidth, rowHeight);

  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("1", margin + 3, y + 8);

  doc.setFont("helvetica", "bold");
  doc.text(unit.name, margin + 15, y + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GREY);
  doc.text(`Kategori: ${unit.cat}  |  Kapasitas: ${unit.cap}  |  Tipe: ${unit.tipe}`, margin + 15, y + 14);
  doc.text(`Spesifikasi: ${unit.extra}`, margin + 15, y + 19);

  doc.setTextColor(...NAVY);
  doc.setFontSize(9);
  const durasiLines = doc.splitTextToSize(form.durasi || "-", 40);
  doc.text(durasiLines, pageWidth - margin - 55, y + 8);
  doc.text(unit.status, pageWidth - margin - 3, y + 8, { align: "right" });

  y += rowHeight + 10;

  // ---- Catatan tambahan ----
  if (form.catatan) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...NAVY);
    doc.text("Catatan Tambahan:", margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...GREY);
    const lines = doc.splitTextToSize(form.catatan, tableWidth);
    doc.text(lines, margin, y);
    y += lines.length * 4.5 + 8;
  }

  // ---- Disclaimer box ----
  doc.setFillColor(...PAPER);
  doc.setDrawColor(...LIGHT_GREY);
  doc.rect(margin, y, tableWidth, 16, "FD");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(...GREY);
  doc.text(
    "Dokumen ini adalah FORM PENGAJUAN SEWA, bukan invoice final. Estimasi harga dan ketersediaan unit",
    margin + 4,
    y + 6
  );
  doc.text(
    "akan dikonfirmasi oleh tim kami melalui WhatsApp setelah pengajuan ini diterima.",
    margin + 4,
    y + 11
  );
  y += 28;

  // ---- Payment info ----
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...NAVY);
  doc.text("Pembayaran (setelah dikonfirmasi):", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GREY);
  doc.text(`${COMPANY_INFO.bankHolder} — ${COMPANY_INFO.bankName} ${COMPANY_INFO.bankAccount}`, margin, y + 5);

  // ---- Signature ----
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GREY);
  doc.text("Hormat Kami,", pageWidth - margin - 50, y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...NAVY);
  doc.text(`Tim ${COMPANY_INFO.name}`, pageWidth - margin - 50, y + 20);

  // ---- Footer ----
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(...GREY);
  doc.text(
    `${COMPANY_INFO.legalName} — Dokumen dibuat otomatis pada ${today}.`,
    pageWidth / 2,
    pageHeight - 12,
    { align: "center" }
  );

  const filename = `Form-Sewa-${unit.name.replace(/[^a-zA-Z0-9]+/g, "-")}-${docNumber}.pdf`;
  doc.save(filename);
  return filename;
}