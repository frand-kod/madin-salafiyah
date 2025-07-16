import { useState } from "react";

export default function HamburgerMenu({ items }) {
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 px-4 text-md">
      {items.map((item, i) => (
        <div key={i}>
          {item.children ? (
            <>
              <button
                onClick={() => toggleMobileDropdown(item.title)}
                className="w-full text-left py-2 px-2 hover:bg-green-100"
              >
                {item.title} {mobileDropdown === item.title ? "^" : "|"}
              </button>
              {mobileDropdown === item.title && (
                <div
                  className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
    ${
      mobileDropdown === item.title
        ? "max-h-96 opacity-100"
        : "max-h-0 opacity-0"
    }
  `}
                >
                  {item.children.map((child, j) => (
                    <a
                      key={j}
                      href={child.href}
                      className="block hover:bg-green-100 py-2 px-2"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a href={item.href} className="block py-2 hover:bg-green-100 px-2">
              {item.title}
            </a>
          )}
        </div>
      ))}
      <br />
    </div>
  );
}
