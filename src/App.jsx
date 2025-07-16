import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout"

import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import KepengurusanPage from "./pages/Kepengurusan";
import PengajarPage from "./pages/PengajarPage";
import CategoryPage from "./pages/CategoryPage";
import ArticleDetail from "./components/partial/article/ArticleDetail";
import NotFoundPage from "./pages/404";

export default function App() {
  return (
    <Routes>
      {/* Semua yang memakai layout: Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/kepengurusan" element={<KepengurusanPage />} />
        <Route path="/pengajar" element={<PengajarPage />} />
        <Route path="/kategori/:slug" element={<CategoryPage />} />
        <Route path="/artikel/:slug" element={<ArticleDetail />} />
        {/* Tambahkan lagi jika perlu */}
      </Route>

      {/* Khusus halaman 404 tanpa layout */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
