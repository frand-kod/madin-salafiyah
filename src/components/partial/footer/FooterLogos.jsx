export default function FooterLogos() {
  return (
    <div className="border-t mt-10 pt-6 text-center text-xs text-gray-500 space-y-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {/* Ganti dengan logo asli di public folder */}
        <img src="https://cdn.almunawwir.com/2023/05/vvbVi2hZ-cropped-cropped-almunawwir_com.webp" alt="OJK" className="h-6" />
        <img src="https://www.kemendikbudristek.com/assets/imgs/kemdikbud_64x64.png" alt="Kominfo" className="h-6" />
        <img src="https://kemenag.go.id/assets/imgs/theme/logo.png" alt="Kemenag" className="h-6" />
        {/* Tambahkan sesuai kebutuhan */}
      </div>
      <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed px-2">
        Situs ini adalah bagian dari pendidikan dan dakwah. Informasi dapat berubah seiring waktu dan tidak menggantikan konsultasi langsung dengan pengajar.
      </p>
    </div>
  );
}
