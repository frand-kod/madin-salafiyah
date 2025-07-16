import ArticleCard from "./ArticleCard";

export default function ArticleGrid({ articles }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
}
