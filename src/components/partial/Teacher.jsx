// data dummy untuk komponen TeachersGrid.jsx

const link = './src/assets/icons8-angry-face-64.png'
const teachers = [
  {
    name: "Ust. Ahmad",
    role: "Tafsir & Fiqih",
    photo: link,
  },
  {
    name: "Ustadzah Maryam",
    role: "Bahasa Arab",
    photo: link,
  },
  {
    name: "Ust. Salim",
    role: "Nahwu & Sharaf",
    photo: link,
  },
];

export default function TeachersGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {teachers.map((teacher, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{teacher.name}</h3>
          <p className="text-gray-600 text-sm">{teacher.role}</p>
        </div>
      ))}
    </div>
  );
}
