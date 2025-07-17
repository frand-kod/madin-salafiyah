import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AdminLayout from "./components/admin/layout/AdminLayout";

// Public
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import KepengurusanPage from "./pages/Kepengurusan";
import PengajarPage from "./pages/PengajarPage";
import CategoryPage from "./pages/CategoryPage";
import ArticleDetail from "./components/partial/article/ArticleDetail";
import NotFoundPage from "./pages/404";

// Admin
import Auth from "./pages/admin/Auth";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminArticleList from "./pages/admin/article/ArticleList";
import ArticleForm from "./pages/admin/article/ArticleForm";

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
      
      {/* Route khusus admin */}
      <Route
        path="/admin"
        element={
          <Auth>
            <AdminLayout />
          </Auth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="artikel" element={<AdminArticleList />} />
        <Route path="artikel/tambah" element={<ArticleForm />} />
        <Route path="artikel/edit/:id" element={<ArticleForm />} />
      </Route>

      {/* Login admin tanpa proteksi */}
      <Route path="/admin/login" element={<Login />} />

      {/* Khusus halaman 404 tanpa layout */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
