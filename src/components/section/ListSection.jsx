import Article from "../partial/Article";
import SectionTitle from "../ui/Title";

export default function ListSection({ title, articles = [] }) {
  return (
    <section className="py-10 px-2">
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between md:px-0">
        <div>
            <SectionTitle> {title} </SectionTitle>
           
        </div>
        <a href="/berita" className="text-sm text-gray-500 hover:underline">
          Lihat Semua
        </a>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((item, idx) => (
          <Article key={idx} article={item} />
        ))}
      </div>
    </section>
  );
}
