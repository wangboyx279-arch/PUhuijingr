import { useState, useEffect } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import ArticleDetail from './pages/ArticleDetail';
import Quiz from './pages/Quiz';
import About from './pages/About';
import { useStore } from './store/useStore';
import { articles } from './data/articles';
import type { Article } from './data/articles';

type View = 'home' | 'knowledge' | 'article' | 'quiz' | 'about';

export default function App() {
  const currentPage = useStore((state) => state.currentPage);
  const [view, setView] = useState<View>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleViewArticle = (articleId: string) => {
    const article = articles.find((a) => a.id === articleId);
    if (article) {
      setSelectedArticle(article);
      setView('article');
    }
  };

  const handleBackFromArticle = () => {
    if (currentPage === 'knowledge') {
      setView('knowledge');
    } else {
      setView('home');
    }
    setSelectedArticle(null);
  };

  const getRelatedArticles = (article: Article) => {
    return articles
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3);
  };

  // 同步view状态
  useEffect(() => {
    if (view !== 'article') {
      setView(currentPage as View);
    }
  }, [currentPage, view]);

  const renderContent = () => {
    if (view === 'article' && selectedArticle) {
      return (
        <ArticleDetail
          article={selectedArticle}
          onBack={handleBackFromArticle}
          relatedArticles={getRelatedArticles(selectedArticle)}
          onViewArticle={handleViewArticle}
        />
      );
    }

    switch (view) {
      case 'home':
        return <Home onViewArticle={handleViewArticle} />;
      case 'knowledge':
        return <Knowledge onViewArticle={handleViewArticle} />;
      case 'quiz':
        return <Quiz />;
      case 'about':
        return <About />;
      default:
        return <Home onViewArticle={handleViewArticle} />;
    }
  };

  const showBottomNav = view !== 'article';

  return (
    <div className="min-h-screen bg-[#F2F3F5]">
      {renderContent()}
      {showBottomNav && <BottomNav />}
    </div>
  );
}
