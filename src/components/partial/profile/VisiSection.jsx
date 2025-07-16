// src/components/profile/VisiSection.jsx
export default function VisiSection({ visi }) {
  return (
    <section className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold text-primary mb-2">Visi</h2>
      <p className="text-gray-700">{visi}</p>
    </section>
  );
}
