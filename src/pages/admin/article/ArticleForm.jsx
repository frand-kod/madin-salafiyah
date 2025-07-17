import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  EditorState,
  convertToRaw,
  ContentState,
} from "draft-js";
import RichTextEditor from "../../../components/utility/RIchTextEditor";

// Contoh dummy untuk edit simulasi
const dummyArticles = [
  { id: 1, title: "Judul Artikel A", category: "Umum", content: "" },
  { id: 2, title: "Judul Artikel B", category: "Bahtsul Masail", content: "" },
];

export default function ArticleForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: EditorState.createEmpty(),
  });

  useEffect(() => {
    if (isEdit) {
      const found = dummyArticles.find((a) => a.id === parseInt(id));
      if (found) {
        setFormData({
          title: found.title,
          category: found.category,
          content: EditorState.createEmpty(), // ← nanti bisa ubah kalau punya content string
        });
      } else {
        toast.error("Artikel tidak ditemukan");
        navigate("/admin/artikel");
      }
    }
  }, [id, isEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rawContent = convertToRaw(formData.content.getCurrentContent());
    const payload = {
      ...formData,
      contentRaw: JSON.stringify(rawContent),
    };

    console.log(payload); // nanti ganti ke API call POST/PUT
    toast.success(
      isEdit ? "Artikel berhasil diedit!" : "Artikel berhasil ditambahkan!"
    );
    navigate("/admin/artikel");
  };

  return (
    <div className="p-4 transition-opacity duration-300 animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Artikel" : "Tambah Artikel"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl bg-white p-4 rounded shadow transition-all duration-300"
      >
        <div>
          <label className="block mb-1 font-medium">Judul Artikel</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Kategori</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          >
            <option value="">-- Pilih Kategori --</option>
            <option value="Umum">Umum</option>
            <option value="Bahtsul Masail">Bahtsul Masail</option>
            <option value="Hikmah">Hikmah</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Konten</label>
          <RichTextEditor
            editorState={formData.content}
            onChange={(editorState) =>
              setFormData((prev) => ({ ...prev, content: editorState }))
            }
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            {isEdit ? "Simpan Perubahan" : "Tambah Artikel"}
          </button>
        </div>
      </form>
    </div>
  );
}
