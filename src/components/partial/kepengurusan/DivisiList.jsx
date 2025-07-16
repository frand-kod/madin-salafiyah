import React from "react";

export default function DivisiList({ divisi }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Divisi Kepengurusan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {divisi.map((div, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {div.judul}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-gray-700">Koordinator:</span>{" "}
              {div.koordinator}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {div.anggota.map((nama, i) => (
                <li key={i}>{nama}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
