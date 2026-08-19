import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: {
    default: "Kresna Abadi Jaya | Kontraktor Konstruksi & Sewa Alat Berat",
    template: "%s | Kresna Abadi Jaya",
  },
  description:
    "Penyedia jasa kontraktor konstruksi & tanah, sewa alat berat, sparepart original, dan pemborongan proyek terpercaya di Indonesia.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A2036'/%3E%3Ctext x='16' y='22' font-size='16' fill='%23FF6A13' text-anchor='middle' font-family='Arial'%3EK%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
