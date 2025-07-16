// src/components/partial/profile/OrgChart.jsx
export default function OrgChart({ struktur }) {
  return (
    <div className="flex flex-col items-center text-center my-6">
      <div className="relative">
        <div className="bg-primary text-white px-4 py-2 rounded shadow">
          Ketua<br />{struktur.ketua}
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-6 border-l-2 border-dashed border-gray-400"></div>
      </div>

      <div className="flex justify-center mt-6 gap-6 relative">
        <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-gray-400"></div>

        {["wakil", "sekretaris", "bendahara"].map((key, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-gray-100 px-4 py-2 rounded shadow font-medium">
              {key.charAt(0).toUpperCase() + key.slice(1)}<br />
              {Array.isArray(struktur[key])
                ? struktur[key].join(", ")
                : struktur[key]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
