import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: employee } = await supabase
    .from("employees")
    .select("full_name, role")
    .eq("auth_user_id", user.id)
    .single();

  const isAdmin = employee?.role === "admin";

  return (
    <section className="section">
      <div className="container">
        <span className="mono-tag">DASHBOARD</span>
        <h1 style={{ marginTop: 10 }}>Halo, {employee?.full_name || user.email}</h1>
        <p style={{ color: "var(--ink-600)", marginBottom: 32 }}>
          {isAdmin ? "Anda login sebagai Admin." : "Anda login sebagai Karyawan."}
        </p>

        <div className="grid-2">
          <Link href="/admin/absensi" className="service-card bracket">
            <h3>Absensi Harian</h3>
            <p>Catat waktu masuk dan pulang kerja Anda hari ini.</p>
          </Link>

          {isAdmin && (
            <Link href="/admin/laporan" className="service-card bracket">
              <h3>Laporan Bulanan</h3>
              <p>Lihat dan unduh rekap kehadiran seluruh karyawan.</p>
            </Link>
          )}
        </div>

        <div style={{ marginTop: 32 }}>
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}