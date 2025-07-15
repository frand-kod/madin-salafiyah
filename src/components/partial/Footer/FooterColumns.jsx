export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <ul className="space-y-1 text-md">
        {links.map((text, i) => (
          <li key={i}>
            <a href="#" className="hover:underline text-gray-700">{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
