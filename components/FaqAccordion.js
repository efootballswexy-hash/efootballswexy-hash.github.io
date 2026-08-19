"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              {item.q}
            </span>
            <span className="plus">+</span>
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
            <span className="faq-cat">Kategori: {item.c}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
