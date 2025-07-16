import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/salafiyyah4.png";
import HamburgerMenu from "../partial/navigation/HamburgerMenu";
import { navItems } from "../../assets/navItems";
import InlineMenu from "../partial/navigation/InlineMenu";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-zinc-50 transition-shadow duration-300 ${isFixed ? "shadow-md" : "shadow-none"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full object-cover" />
          <Link to="/" className="text-primary font-bold text-xl md:text-2xl">
            Madrasah Komplek L
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-700 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <InlineMenu title={item.title} items={item.children} />
              ) : (
                <a href={item.href} className="hover:text-primary">{item.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-primary">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <HamburgerMenu items={navItems} />}
    </nav>
  );
}
