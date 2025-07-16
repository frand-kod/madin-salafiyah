import SectionDivider from "../components/ui/SectionDivider";
import ArticleGrid from "../components/partial/article/ArticleGrid";
import ArticleListItem from "../components/partial/article/ArticleListItem";
import { useParams } from "react-router-dom";
//data
import { articles } from "../assets/articles-dummy";

export default function CategoryPage() {
  const { slug } = useParams();

  const mainArticles = articles.filter((a) => a.subcategorySlug === slug);
  const thisCategory = mainArticles[0]?.category || "Kategori";

  const related = articles.filter(
    (a) => a.subcategorySlug !== slug && a.category === thisCategory
  );
  const other = articles.filter((a) => a.category !== thisCategory);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <header>
        <h1 className="text-4xl font-bold text-primary mb-2">{thisCategory}</h1>
        <div className="text-sm text-white space-x-1 bg-green-700 py-1 px-3">
          <p className="text-white ">
            {thisCategory} → kumpulan {slug.replace(/-/g, " ")}
          </p>
        </div>
      </header>

      {mainArticles.length > 0 ? (
        <ArticleGrid articles={mainArticles} />
      ) : (
        <p className="text-center text-gray-500 py-12 ">
          Belum ada artikel yang tersedia.
        </p>
      )}

      <SectionDivider />

      <section>
        <h3 className="text-xl font-bold mb-4">Artikel Terkait</h3>
        <ul className="space-y-2 list-disc pl-6">
          {related.map((a, i) => (
            <ArticleListItem key={i} article={a} />
          ))}
        </ul>
      </section>

      <SectionDivider />

      <section>
        <h3 className="text-xl font-bold mb-4">Dari Kategori Lain</h3>
        <ul className="space-y-2 list-disc pl-6">
          {other.slice(0, 5).map((a, i) => (
            <ArticleListItem key={i} article={a} />
          ))}
        </ul>
      </section>
      <SectionDivider />
    </div>
  );
}
