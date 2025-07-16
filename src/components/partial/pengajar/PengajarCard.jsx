import React from "react";

export default function PengajarCard({ nama, mapel, foto }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center border border-gray-100">
      <img
        src={foto}
        alt={nama}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h3 className="font-semibold text-gray-800">{nama}</h3>
      <p className="text-sm text-gray-600 mt-1">
        Mengampu: {mapel.join(", ")}
      </p>
    </div>
  );
}
