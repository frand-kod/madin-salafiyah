import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/artikel/${article.slug}`}>
      <article className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{article.title}</h2>
          <p className="text-sm text-gray-600">{article.excerpt.split(' ').slice(0, 20).join(' ')} ...</p>
          <p className="text-xs mt-2 text-gray-400">{new Date(article.date).toLocaleString()}</p>
        </div>
      </article>
    </Link>
  );
}
