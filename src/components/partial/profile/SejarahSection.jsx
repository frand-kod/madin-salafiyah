// src/components/partial/profile/SejarahSection.jsx

export default function SejarahSection({ data }) {
  const paragraphs = data.content.split("\n").filter(Boolean);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-primary mb-2">{data.title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700 text-lg leading-relaxed">
          {p}
        </p>
      ))}
    </section>
  );
}
