export default function HoverUnderlineIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="relative group text-xl"
    >
      <span>{icon}</span>
      <span
        className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
        aria-hidden="true"
      />
    </a>
  );
}
