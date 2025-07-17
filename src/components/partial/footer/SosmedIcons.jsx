const icons = [
  { href: "#", label: "Instagram", icon: "📷" },
  { href: "#", label: "Facebook", icon: "📘" },
  { href: "#", label: "Telegram", icon: "✈️" },
  { href: "#", label: "Twitter", icon: "🐦" },
];

export default function SosmedIcons() {
  return (
    <div className="flex space-x-3 mt-3 text-lg">
      {icons.map((s, i) => (
        <a
          key={i}
          href={s.href}
          aria-label={s.label}
          className="hover:text-primary transition"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
