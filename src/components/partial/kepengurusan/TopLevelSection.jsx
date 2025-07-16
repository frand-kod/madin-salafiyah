import React from "react";

export default function TopLevelSection({ data }) {
  return (
    <section className="bg-white rounded-lg p-4 md:p-6 shadow-md">
      <div className="grid md:grid-cols-1 gap-6">
        {data.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {section.judul}
            </h3>
            <ul className="list-disc list-inside text-gray-800">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
