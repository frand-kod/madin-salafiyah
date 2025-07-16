import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CategoryPage from "../../pages/CategoryPage";
import ArticleDetail from "../partial/article/ArticleDetail";
import ProfilePage from "../../pages/ProfilePage";
import KepengurusanPage from "../../pages/Kepengurusan";
import PengajarPage from "../../pages/PengajarPage";
import NotFoundPage from "../../pages/404";
// nanti akan ada halaman lain seperti About, Contact, dll

export default function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kategori/:slug" element ={<CategoryPage/>}/>
      <Route path="/artikel/:slug" element={<ArticleDetail />} />
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/kepengurusan" element={<KepengurusanPage/>}/>
      <Route path="/pengajar" element={<PengajarPage/>}/>
      {/* Tambahkan route lain di sini jika diperlukan */}

      {/* NOT FOUND */}
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}
