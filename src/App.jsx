import GreenLayout from "./components/layouts/GreenLayout";
import Footer from "./components/section/Footer";
import Navbar from "./components/section/Navbar";

export default function App() {
  return (
    // pasang Layout
    <div className="max-w-7xl mx-auto px-4 md:px-8 bg-gray-50">
      {/* semua isi halaman */}
      <Navbar />
      <GreenLayout />
      <Footer/>
    </div>
  );
}
