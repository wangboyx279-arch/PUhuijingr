interface TeamCardProps {
  name: string;
  avatar: string;
  college: string;
  role: string;
}

export default function TeamCard({ name, avatar, college, role }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-xs text-gray-500 mb-1">{college}</p>
      <p className="text-xs text-[#165DFF] font-medium">{role}</p>
    </div>
  );
}
