import data from "../../src/assets/kepengurusan-dummy.json";
import TopLevelSection from "../components/partial/kepengurusan/TopLevelSection";
import DashedDivider from "../components/partial/kepengurusan/DashedDivider";
import CoreStructure from "../components/partial/kepengurusan/CoreStructure";
import DivisiList from "../components/partial/kepengurusan/DivisiList";

export default function KepengurusanPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div className="text-3xl md:text-4xl font-bold text-primary text-center mb-6">
        <h1>Struktur Kepengurusan</h1>
        <h3>Periode {data.periode}</h3>
      </div>

      {/* Blok Atas: Pelindung & Dewan Pengawas */}
      <TopLevelSection data={data.topSection} />

      {/* Divider */}
      <DashedDivider />

      {/* Struktur Inti (Organigram) */}
      <CoreStructure data={data.strukturInti} />

      {/* Divider */}
      <DashedDivider />

      {/* Divisi */}
      <DivisiList divisi={data.divisi} />
    </main>
  );
}
