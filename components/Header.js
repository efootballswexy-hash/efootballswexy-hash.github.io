"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { WA_LINK, NAV_ITEMS } from "@/lib/constants";

const SOCIALS = [
  { label: "LinkedIn", href: "#", initials: "in" },
  { label: "Facebook", href: "#", initials: "f" },
  { label: "YouTube", href: "#", initials: "YT" },
  { label: "Instagram", href: "#", initials: "IG" },
  { label: "WhatsApp", href: WA_LINK, initials: "WA" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  function submitSearch(value) {
    const q = value.trim();
    if (!q) return;
    router.push(`/cari?q=${encodeURIComponent(q)}`);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">K</span>
            <span className="brand-text">
              <strong>Kresna Abadi Jaya</strong>
              <span>Batching Plant Indonesia</span>
            </span>
          </Link>

          <div className="header-tagline">
            <span>Sewa Batching Plant</span>
            <span>Jual Beli Batching Plant</span>
            <span>Sparepart Original</span>
            <span>Kontraktor Konstruksi</span>
          </div>

          <form
            className="header-search"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch(query);
            }}
          >
            <input
              type="text"
              placeholder="Apa yang Anda cari?"
              aria-label="Cari"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Cari">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <div className="header-right">
            <div className="social-icons">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.initials}
                </a>
              ))}
            </div>
            <div className="contact-info">
              <span>Tel: +62 812-2677-7702</span>
              <span>Email: info@kresnaabadijaya.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pill-nav-wrap">
        <div className="container pill-nav-row">
          <nav className="pill-nav" aria-label="Navigasi utama">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="nav-toggle"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            &#9776;
          </button>
        </div>
        <div className={`mobile-nav${open ? " open" : ""}`}>
          <form
            className="mobile-search"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch(mobileQuery);
            }}
          >
            <input
              type="text"
              placeholder="Apa yang Anda cari?"
              aria-label="Cari"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
            />
            <button type="submit" aria-label="Cari">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </form>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={WA_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}