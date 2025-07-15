import FooterBrandInfo from "../partial/Footer/FooterBrandInfo";
import FooterColumn from "../partial/Footer/FooterColumns";
import FooterLogos from "../partial/Footer/FooterLogos";
import SosmedIcons from "../partial/Footer/SosmedIcons";


export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 text-sm mt-10 bg-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterBrandInfo />
        <FooterColumn title="Program" links={["TPQ", "Diniyah", "Kajian Kitab", "Donasi"]} />
        <FooterColumn title="Informasi" links={["Tentang Kami", "Kontak", "FAQ", "Berita"]} />
        <FooterColumn title="Legal" links={["Kebijakan Privasi", "Syarat & Ketentuan"]} />
      </div>
      <FooterLogos />

      <div className="border-t text-center text-xs py-4 text-gray-400 mt-6">
        © {new Date().getFullYear()} Madrasah Komplek L. All rights reserved.
      </div>
    </footer>
  );
}
