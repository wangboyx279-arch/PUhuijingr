import { Shield, FileText, Calendar, Download } from 'lucide-react';

interface QuickEntryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  onClick: () => void;
}

interface QuickEntryProps {
  entries?: QuickEntryItem[];
  onNavigate?: (page: string) => void;
}

export default function QuickEntry({ entries, onNavigate }: QuickEntryProps) {
  const defaultEntries: QuickEntryItem[] = [
    {
      id: 'knowledge',
      label: '防骗知识库',
      icon: <Shield size={28} />,
      color: '#165DFF',
      onClick: () => onNavigate?.('knowledge'),
    },
    {
      id: 'quiz',
      label: '在线测评',
      icon: <FileText size={28} />,
      color: '#FF7D00',
      onClick: () => onNavigate?.('quiz'),
    },
    {
      id: 'activity',
      label: '活动报名',
      icon: <Calendar size={28} />,
      color: '#52C41A',
      onClick: () => alert('活动报名功能即将上线，敬请期待！'),
    },
    {
      id: 'download',
      label: '防骗手册',
      icon: <Download size={28} />,
      color: '#722ED1',
      onClick: () => alert('防骗手册下载功能即将上线！'),
    },
  ];

  const items = entries || defaultEntries;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-gray-50 transition-colors"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <div style={{ color: item.color }}>{item.icon}</div>
          </div>
          <span className="text-xs text-gray-700 font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
