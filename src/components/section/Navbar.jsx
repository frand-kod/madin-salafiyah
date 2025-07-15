import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/salafiyyah4.png";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 0); // ubah angka sesuai tinggi navbar
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`sticky top-0 z-50 bg-zinc-50 transition-shadow duration-300 ${
    isFixed ? "shadow-md" : "shadow-none"
  }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <Link
            to="/"
            className="text-primary font-bold text-xl md:text-2xl"
          >
            Madrasah Komplek L
          </Link>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#about" className="hover:text-primary">Tentang</a></li>
          <li><a href="#teachers" className="hover:text-primary">Pengajar</a></li>
          <li><a href="#activities" className="hover:text-primary">Kegiatan</a></li>
          <li><a href="#contact" className="hover:text-primary">Kontak</a></li>
        </ul>

        <div className="md:hidden">
          <button className="text-2xl text-primary">☰</button>
        </div>
      </div>
    </nav>
  );
}
