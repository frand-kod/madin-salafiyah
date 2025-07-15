const image ='./src/assets/icons8-making-notes-50.png'
const activities = [
  {
    title: "Kegiatan Rutinan Yasin & Tahlil",
    date: "Setiap Kamis Malam",
    image: image,
    description: "Kegiatan rutinan untuk siswa dan wali santri."
  },
  {
    title: "Kajian Kitab Kuning",
    date: "Ahad Pagi",
    image: image,
    description: "Kajian kitab klasik untuk mendalami ilmu salaf."
  },
  {
    title: "Bakti Sosial Madrasah",
    date: "Jum'at ke-4",
    image: image,
    description: "Santri turun langsung membantu masyarakat sekitar."
  },
];

export default function ActivitiesGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {activities.map((act, index) => (
        <div
          key={index}
          className=" rounded-xl shadow-sm shadow-gray-400/20 overflow-hidden hover:shadow-md transition"
          style={{backgroundColor:"#eef6fe"}}
        >
          <img
            src={act.image}
            alt={act.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-primary">{act.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{act.date}</p>
            <p className="text-gray-700 text-sm">{act.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
