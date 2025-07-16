import React from "react";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-zinc-50">
      <img
        src={"https://img.icons8.com/?size=500&id=k0I9K7HGGgQY&format=png&color=000000"}
        alt="404 Not Found"
        className="w-64 h-auto mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Maaf, sepertinya halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
