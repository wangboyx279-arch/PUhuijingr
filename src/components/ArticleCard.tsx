import { Heart } from 'lucide-react';
import { Article } from '../data/articles';
import { useStore } from '../store/useStore';

interface ArticleCardProps {
  article: Article;
  onClick?: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  const articleLikes = useStore((state) => state.articleLikes);
  const likeArticle = useStore((state) => state.likeArticle);
  const likes = article.likes + (articleLikes[article.id] || 0);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex">
        <div className="w-28 h-28 flex-shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="font-bold text-gray-800 text-sm line-clamp-2 mb-2">
            {article.title}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 mb-3">
            {article.summary}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{article.publishDate}</span>
            <div className="flex items-center gap-1 text-gray-400 text-xs">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  likeArticle(article.id);
                }}
                className="hover:text-red-500 transition-colors"
              >
                <Heart size={14} />
              </button>
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
