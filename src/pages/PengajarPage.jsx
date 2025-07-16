import React from "react";
import pengajar from "../../src/assets/pengajar-dummy.json";
import PengajarCard from "../components/partial/pengajar/PengajarCard";

export default function PengajarPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">
        Daftar Pengajar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pengajar.map((ustadz, index) => (
          <PengajarCard
            key={index}
            nama={ustadz.nama}
            mapel={ustadz.mapel}
            foto={ustadz.foto}
          />
        ))}
      </div>
    </main>
  );
}