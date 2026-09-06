"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

function pad(n) { return String(n).padStart(2, "0"); }

export default function LaporanPage() {
  const supabase = createClient();
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(true);

  async function loadData() {
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoading(false); return; }

    const { data: me } = await supabase
      .from("employees")
      .select("role")
      .eq("auth_user_id", user.id)
      .single();

    if (me?.role !== "admin") {
      setAllowed(false);
      setLoading(false);
      return;
    }

    const start = `${year}-${pad(month)}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const end = `${year}-${pad(month)}-${pad(lastDay)}`;

    const { data, error } = await supabase
      .from("attendance")
      .select("date, check_in, check_out, employees(full_name)")
      .gte("date", start)
      .lte("date", end)
      .order("date", { ascending: true });

    if (!error) setRows(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  function downloadCsv() {
    const header = ["Nama", "Tanggal", "Jam Masuk", "Jam Pulang"];
    const lines = rows.map((r) => [
      r.employees?.full_name || "-",
      r.date,
      r.check_in ? new Date(r.check_in).toLocaleTimeString("id-ID") : "-",
      r.check_out ? new Date(r.check_out).toLocaleTimeString("id-ID") : "-",
    ]);

    const csv = [header, ...lines]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `laporan-absensi-${year}-${pad(month)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!allowed) {
    return (
      <section className="section">
        <div className="container">
          <p>Halaman ini khusus untuk admin.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <span className="mono-tag">LAPORAN</span>
        <h1 style={{ marginTop: 10 }}>Rekap Absensi Bulanan</h1>

        <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "20px 0" }}>
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>
                {new Date(2000, m - 1, 1).toLocaleDateString("id-ID", { month: "long" })}
              </option>
            ))}
          </select>
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {[now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button className="btn btn-outline" onClick={downloadCsv} disabled={rows.length === 0}>
            Unduh CSV
          </button>
        </div>

        {loading ? (
          <p className="search-meta">Memuat...</p>
        ) : rows.length === 0 ? (
          <p className="search-meta">Belum ada data absensi bulan ini.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--grid-line)" }}>
                <th style={{ padding: 8 }}>Nama</th>
                <th style={{ padding: 8 }}>Tanggal</th>
                <th style={{ padding: 8 }}>Jam Masuk</th>
                <th style={{ padding: 8 }}>Jam Pulang</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--grid-line)" }}>
                  <td style={{ padding: 8 }}>{r.employees?.full_name || "-"}</td>
                  <td style={{ padding: 8 }}>{r.date}</td>
                  <td style={{ padding: 8 }}>{r.check_in ? new Date(r.check_in).toLocaleTimeString("id-ID") : "-"}</td>
                  <td style={{ padding: 8 }}>{r.check_out ? new Date(r.check_out).toLocaleTimeString("id-ID") : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}