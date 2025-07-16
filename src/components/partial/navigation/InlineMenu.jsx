import { useState } from "react";

export default function InlineMenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-primary flex items-center gap-3">
        {title}
      </button>
      {open && (
<div
  className={`absolute top-full left-0 bg-white shadow-lg rounded w-48 z-50
    transition-all duration-300 ease-out
    ${open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
  `}
>
  <ul className="flex flex-col text-sm text-gray-700 p-1">
    {items.map((item, i) => (
      <li key={i}>
        <a href={item.href} className="block px-3 py-2 hover:bg-primary/10">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</div>
      )}
    </div>
  );
}