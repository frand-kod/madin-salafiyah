import { Outlet } from "react-router-dom";
import Navbar from "../section/Navbar";
import Footer from "../section/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
