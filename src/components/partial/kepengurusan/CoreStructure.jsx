import React from "react";

export default function CoreStructure({ data }) {
  return (
    <section className="py-8">
      {/* Ketua */}
      <div className="flex justify-center">
        <div className="bg-green-800 text-white px-4 py-2 rounded text-center font-semibold">
          Ketua
          <div className="text-sm font-normal">{data.Ketua[0]}</div>
        </div>
      </div>

      {/* Garis ke bawah */}
      <div className="flex justify-center my-2">
        <div className="w-px h-4 border-l border-dashed border-gray-400"></div>
      </div>

      {/* Wakil, Sekretaris, Bendahara */}
      <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
        {["Wakil", "Sekretaris", "Bendahara"].map((posisi) => (
          <div
            key={posisi}
            className="bg-white rounded shadow px-4 py-2 min-w-[200px] border"
          >
            <h4 className="font-semibold text-gray-800">{posisi}</h4>
            <div className="text-sm text-gray-700 mt-1 space-y-1">
              {data[posisi].map((nama, i) => (
                <div key={i}>{nama}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
