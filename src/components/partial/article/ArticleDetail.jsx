// src/pages/ArticleDetail.jsx
import { useParams, Link } from "react-router-dom";
import { articles } from "../../../assets/articles-dummy";
import ArticleListItem from "./ArticleListItem";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  const related = articles.filter(
    (a) =>
      a.subcategorySlug === article.subcategorySlug && a.slug !== article.slug
  );

  if (!article)
    return <div className="p-6 text-center">Artikel tidak ditemukan.</div>;

  return (
    <main className="max-w-6xl mx-auto space-y-12 px-4">
      <div className="text-sm text-white space-x-2  bg-green-800 py-1 px-3">
        <Link to="/" className="hover:underline">
          Beranda
        </Link>
        <span> &gt; </span>
        <Link
          to={`/kategori/${article.subcategorySlug}`}
          className="hover:underline"
        >
          {article.category}
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-primary px-1">{article.title}</h1>
      <div className="flex pl-2 justify-between items-center text-sm text-gray-600 mb-4">
        <p>
          {new Date(article.date).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="pr-4">Post by {article.author || "Unknown user"}</p>
      </div>
      <img
        src={article.image}
        alt={article.title}
        className="w-full max-h-[400px] object-cover rounded"
      />
      <p className="text-lg text-gray-800 leading-relaxed mt-4">
        {article.excerpt}
      </p>
      {/* nanti bisa kamu ganti dengan full content jika ada */}

      {/* Artikel Terkait */}
      {related.length > 0 && (
        <>
          <hr className="my-8 border-t border-gray-300" />
          <section>
            <h3 className="text-xl font-bold mb-4">Artikel Terkait</h3>
            <ul className="space-y-2 list-disc pl-6">
              {related.map((a, i) => (
                <ArticleListItem key={i} article={a} />
              ))}
            </ul>
          </section>
        </>
        )}
    </main>
  );
}
