interface CategoryTabsProps {
  categories: string[];
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  currentCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="sticky top-0 bg-[#F2F3F5] z-10 py-4">
      <div className="flex gap-3 overflow-x-auto px-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              currentCategory === category
                ? 'bg-[#165DFF] text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
