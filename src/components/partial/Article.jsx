export default function Article({ article }) {
  return (
    <div className="flex justify-between items-start border-b border-dashed pb-4">
      {/* Info Artikel */}
      <div className="flex-1">
        <span className="inline-block text-xs bg-emerald-600 text-white px-2 py-0.5 rounded mb-1">
          {article.category}
        </span>
        <h3 className="font-semibold text-slate-800 text-lg leading-snug mb-1">
          {article.title}
        </h3>
        <p className="text-s text-gray-500">
          {article.date} | {article.time}
        </p>
      </div>

      {/* Gambar Thumbnail */}
      <img
        src={article.image}
        alt={article.title}
        className="w-20 h-20 object-cover rounded ml-4 shrink-0"
      />
    </div>
  );
}
