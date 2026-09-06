"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AbsensiPage() {
  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [today, setToday] = useState(null);
  const [message, setMessage] = useState("");

  const supabase = createClient();

  async function loadData() {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: emp } = await supabase
      .from("employees")
      .select("id, full_name")
      .eq("auth_user_id", user.id)
      .single();

    setEmployee(emp);

    if (emp) {
      const todayDate = new Date().toISOString().slice(0, 10);
      const { data: att } = await supabase
        .from("attendance")
        .select("*")
        .eq("employee_id", emp.id)
        .eq("date", todayDate)
        .maybeSingle();

      setToday(att);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCheckIn() {
    if (!employee) return;
    setMessage("");

    const { error } = await supabase.from("attendance").insert({
      employee_id: employee.id,
      check_in: new Date().toISOString(),
      date: new Date().toISOString().slice(0, 10),
    });

    if (error) {
      setMessage("Gagal mencatat cek-in: " + error.message);
      return;
    }

    setMessage("Cek-in berhasil dicatat.");
    loadData();
  }

  async function handleCheckOut() {
    if (!today) return;
    setMessage("");

    const { error } = await supabase
      .from("attendance")
      .update({ check_out: new Date().toISOString() })
      .eq("id", today.id);

    if (error) {
      setMessage("Gagal mencatat cek-out: " + error.message);
      return;
    }

    setMessage("Cek-out berhasil dicatat.");
    loadData();
  }

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <p className="search-meta">Memuat...</p>
        </div>
      </section>
    );
  }

  if (!employee) {
    return (
      <section className="section">
        <div className="container">
          <p>
            Akun Anda belum terdaftar sebagai karyawan. Hubungi admin untuk
            didaftarkan.
          </p>
        </div>
      </section>
    );
  }

  const now = new Date().toLocaleString("id-ID", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <section className="section" style={{ minHeight: "70vh" }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <span className="mono-tag">ABSENSI HARIAN</span>
        <h1 style={{ marginTop: 10 }}>Halo, {employee.full_name}</h1>
        <p style={{ color: "var(--ink-600)" }}>{now}</p>

        <div style={{ marginTop: 24, padding: 24, border: "1px solid var(--grid-line)", borderRadius: 8 }}>
          <p><b>Cek-in:</b> {today?.check_in ? new Date(today.check_in).toLocaleTimeString("id-ID") : "Belum"}</p>
          <p><b>Cek-out:</b> {today?.check_out ? new Date(today.check_out).toLocaleTimeString("id-ID") : "Belum"}</p>

          {!today && (
            <button className="btn btn-primary btn-block" onClick={handleCheckIn} style={{ marginTop: 16 }}>
              Cek-in Sekarang
            </button>
          )}

          {today && !today.check_out && (
            <button className="btn btn-primary btn-block" onClick={handleCheckOut} style={{ marginTop: 16 }}>
              Cek-out Sekarang
            </button>
          )}

          {today && today.check_out && (
            <p style={{ marginTop: 16, color: "var(--blue-600)" }}>
              Absensi hari ini sudah lengkap. Sampai jumpa besok!
            </p>
          )}
        </div>

        {message && <p style={{ marginTop: 16, fontSize: 13 }}>{message}</p>}
      </div>
    </section>
  );
}