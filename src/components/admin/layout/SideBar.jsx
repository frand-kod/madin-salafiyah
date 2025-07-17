import { Link } from "react-router-dom";


export default function Sidebar() {


  return (
    <aside className="w-64 h-screen bg-slate-100 shadow-md p-4 flex flex-col justify-between">
      {/* Bagian atas: judul + menu navigasi */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin" className="block hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/admin/artikel" className="block hover:text-blue-600">
            Manajemen Artikel
          </Link>

          {/* Tambahkan submenu sebanyak apapun, bagian bawah tetap turun */}
        </nav>
      </div>

      {/* Bagian bawah: status dan logout */}
      <div className="py-6 border-t-2 mb-8">
        <p className="text-md text-gray-500 mb-2">
          Login sebagai{" "}
          <span className="font-semibold text-green-700">Admin</span>
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="text-red-700 hover:underline font-semibold text-lg"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
