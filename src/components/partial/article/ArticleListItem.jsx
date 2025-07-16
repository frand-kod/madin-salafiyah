import { Link } from "react-router-dom";

export default function ArticleListItem({ article }) {
  return (
    <li>
      <Link to={`/artikel/${article.slug}`} className="text-primary hover:underline">
        {article.title}
      </Link>
    </li>
  );
}
