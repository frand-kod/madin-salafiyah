export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-4">Summary </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold">Total Artikel</h3>
          <p className="text-2xl mt-2 font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold">Total Kategori</h3>
          <p className="text-2xl mt-2 font-bold text-green-600">5</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold">Total Pengajar</h3>
          <p className="text-2xl mt-2 font-bold text-green-600">5</p>
        </div>
      </div>
    </div>
  );
}
