// src/components/profile/MisiSection.jsx
export default function MisiSection({ misi }) {
  return (
    <section className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">Misi</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {misi.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
