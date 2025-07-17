import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const dummyArticles = [
  { id: 1, title: "Judul Artikel A", category: "Umum" },
  { id: 2, title: "Judul Artikel B", category: "Bahtsul Masail" },
];

export default function ArticleList() {
  const [articles, setArticles] = useState(dummyArticles);

  const handleDelete = (id) => {
    if (confirm("Yakin ingin menghapus artikel ini?")) {
      setArticles(articles.filter((a) => a.id !== id));
      toast.error("Artikel berhasil dihapus");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Manajemen Artikel</h2>
        <Link
          to="/admin/artikel/tambah"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Tambah Artikel
        </Link>
      </div>

      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Judul</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={article.id} className="hover:bg-gray-50">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{article.title}</td>
              <td className="p-2 border">{article.category}</td>
              <td className="p-2 border space-x-2">
                <button className="text-sm text-blue-600 hover:underline">
                  Lihat
                </button>

                <Link
                  to={`/admin/artikel/edit/${article.id}`}
                  className="text-sm text-green-600 hover:underline"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
