"use client";

import { useState } from "react";
import { UNITS, FILTERS } from "@/lib/constants";
import { ICONS } from "@/components/icons";
import Svg from "@/components/Svg";
import RentalRequestForm from "@/components/RentalRequestForm";

export default function ProductCatalog() {
  const [active, setActive] = useState("Semua");
  const [selectedUnit, setSelectedUnit] = useState(null);

  const visible =
    active === "Semua" ? UNITS : UNITS.filter((u) => u.cat === active);

  return (
    <>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? " active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid-3">
        {visible.map((unit, i) => {
          const busy = unit.status !== "Tersedia";
          return (
            <div className="unit-card" key={i}>
              <div className="unit-media">
                <Svg html={ICONS[unit.cat]} />
                <span className={`unit-status${busy ? " busy" : ""}`}>
                  {unit.status}
                </span>
              </div>
              <div className="unit-body">
                <span className="unit-cat">{unit.cat}</span>
                <h3>{unit.name}</h3>
                <div className="unit-specs">
                  <div><b>{unit.cap}</b>Kapasitas</div>
                  <div><b>{unit.tipe}</b>Tipe</div>
                  <div><b>{unit.extra}</b>Spesifikasi</div>
                  <div><b>Ready</b>Dokumen</div>
                </div>
                <button
                  type="button"
                  className="btn btn-navy btn-block"
                  onClick={() => setSelectedUnit(unit)}
                >
                  Ajukan Sewa
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedUnit && (
        <RentalRequestForm
          unit={selectedUnit}
          onClose={() => setSelectedUnit(null)}
        />
      )}
    </>
  );
}