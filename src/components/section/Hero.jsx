export default function Hero() {
  return (
    <section className="bg-emerald-50 py-16 px-4 mb-4 shadow-sm gap-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Kiri: Gambar */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/src/assets/salafiyyah4.png"
            alt="Madrasah Komplek L"
            className="w-full h-auto rounded-md object-cover"
          />

          {/* Overlay bayangan bawah */}
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-emerald-300/50 to-transparent rounded-b-md" />
        </div>

        {/* Kanan: Konten */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-urbanist">
            Madrasah Komplek L
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-4">
            Belajar Agama Lebih Terarah & Berkarakter
          </p>
          <p className="text-md text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            dolore nemo corrupti. Inventore sunt cum deserunt quaerat
            laudantium. Sapiente fuga placeat officia voluptatibus quisquam
            necessitatibus.
          </p>

          <a
            href="#about"
            className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Kenali Kami
          </a>
        </div>
      </div>
    </section>
  );
}
