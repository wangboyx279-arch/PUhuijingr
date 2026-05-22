interface DataCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export default function DataCard({ number, label, icon }: DataCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
      {icon && <div className="text-[#165DFF] mb-3 mx-auto">{icon}</div>}
      <div className="text-3xl font-bold text-[#165DFF] mb-1">{number}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
}
