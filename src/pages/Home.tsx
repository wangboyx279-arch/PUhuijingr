import Carousel from '../components/Carousel';
import DataCard from '../components/DataCard';
import QuickEntry from '../components/QuickEntry';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';
import { useStore } from '../store/useStore';

interface HomeProps {
  onViewArticle?: (articleId: string) => void;
}

export default function Home({ onViewArticle }: HomeProps) {
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  const slides = [
    {
      id: 1,
      title: '普惠金融进万家',
      subtitle: '青年守护金融安全',
      background: 'linear-gradient(135deg, #165DFF 0%, #36CFC9 100%)',
    },
    {
      id: 2,
      title: '警惕校园贷',
      subtitle: '守护青春钱袋子',
      background: 'linear-gradient(135deg, #FF7D00 0%, #FFC53D 100%)',
      buttonText: '立即学习防骗知识',
      buttonAction: () => setCurrentPage('knowledge'),
    },
    {
      id: 3,
      title: '金融防骗进校园',
      subtitle: '我们在行动',
      background: 'linear-gradient(135deg, #722ED1 0%, #B37FEB 100%)',
      buttonText: '查看活动预告',
      buttonAction: () => alert('活动预告功能即将上线！'),
    },
  ];

  const hotArticles = articles.slice(0, 2);

  return (
    <div className="min-h-screen pb-20 page-transition">
      {/* Carousel */}
      <Carousel slides={slides} />

      {/* Data Cards */}
      <div className="p-4 -mt-6 relative z-10">
        <div className="grid grid-cols-3 gap-3">
          <DataCard number="1000万+" label="小红书总触达" />
          <DataCard number="实时更新" label="完成测评人数" />
          <DataCard number="12场" label="线下活动场次" />
        </div>
      </div>

      {/* Quick Entry */}
      <QuickEntry onNavigate={setCurrentPage} />

      {/* Hot Articles */}
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">热门防骗知识</h2>
        <div className="space-y-4">
          {hotArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => onViewArticle?.(article.id)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-[#165DFF] text-white py-8 px-6 text-center">
        <h3 className="text-xl font-bold mb-2">提高金融素养</h3>
        <p className="text-blue-100">远离金融诈骗</p>
      </div>
    </div>
  );
}
