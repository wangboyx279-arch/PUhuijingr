import { Home, BookOpen, FileText, User } from 'lucide-react';
import { useStore } from '../store/useStore';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'home', label: '首页', icon: <Home size={20} /> },
  { id: 'knowledge', label: '防骗知识库', icon: <BookOpen size={20} /> },
  { id: 'quiz', label: '在线测评', icon: <FileText size={20} /> },
  { id: 'about', label: '关于我们', icon: <User size={20} /> },
];

export default function BottomNav() {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === item.id
                ? 'text-[#165DFF]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
