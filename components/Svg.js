"use client";

/** Komponen kecil khusus buat render SVG mentah. Client Component sendiri. */
export default function Svg({ html, className, style }) {
  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}