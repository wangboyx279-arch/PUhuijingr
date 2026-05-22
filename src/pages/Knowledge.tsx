import { useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import ArticleCard from '../components/ArticleCard';
import { articles, categories } from '../data/articles';

interface KnowledgeProps {
  onViewArticle?: (articleId: string) => void;
}

export default function Knowledge({ onViewArticle }: KnowledgeProps) {
  const [currentCategory, setCurrentCategory] = useState('全部');

  const filteredArticles = currentCategory === '全部'
    ? articles
    : articles.filter((article) => article.category === currentCategory);

  return (
    <div className="min-h-screen pb-20 page-transition">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-20">
        <h1 className="text-xl font-bold text-gray-800">防骗知识库</h1>
      </div>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />

      {/* Article List */}
      <div className="p-4 space-y-4">
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onClick={() => onViewArticle?.(article.id)}
          />
        ))}
      </div>
    </div>
  );
}
