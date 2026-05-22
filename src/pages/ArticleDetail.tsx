import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Article } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { useStore } from '../store/useStore';

interface ArticleDetailProps {
  article: Article;
  onBack: () => void;
  relatedArticles: Article[];
  onViewArticle?: (articleId: string) => void;
}

export default function ArticleDetail({
  article,
  onBack,
  relatedArticles,
  onViewArticle,
}: ArticleDetailProps) {
  const likeArticle = useStore((state) => state.likeArticle);
  const articleLikes = useStore((state) => state.articleLikes);
  const likes = article.likes + (articleLikes[article.id] || 0);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
      });
    } else {
      alert('分享功能已触发！');
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-white page-transition">
      {/* Header */}
      <div className="sticky top-0 bg-white z-30 px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="font-bold text-gray-800">文章详情</h1>
        <div className="w-8" />
      </div>

      {/* Article Content */}
      <div className="p-6">
        <div className="mb-6">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover rounded-2xl mb-6"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{article.publishDate}</span>
            <span className="px-2 py-1 bg-blue-50 text-[#165DFF] rounded text-xs">
              {article.category}
            </span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
          {article.content}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-4">
        <button
          onClick={() => likeArticle(article.id)}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
        >
          <Heart size={20} />
          <span>{likes}</span>
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-[#165DFF] text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
        >
          <Share2 size={20} />
          <span>分享</span>
        </button>
      </div>

      {/* Related Articles */}
      <div className="p-6 border-t border-gray-100 mt-24">
        <h3 className="font-bold text-gray-800 mb-4">相关文章</h3>
        <div className="space-y-4">
          {relatedArticles.map((relatedArticle) => (
            <ArticleCard
              key={relatedArticle.id}
              article={relatedArticle}
              onClick={() => onViewArticle?.(relatedArticle.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
