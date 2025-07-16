// src/components/profile/IntroSection.jsx
import logo from "../../../assets/salafiyyah4.png";

export default function IntroSection({ data }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img src={logo} alt="Madrasah Komplek L" className="w-full max-h-[300px] object-contain" />
      <div className="space-y-4">
        <h1 className="text-4xl font-medium text-primary">{data.title}</h1>
        <p className="text-gray-700 text-xl leading-relaxed">{data.description}</p>
      </div>
    </section>
  );
}
