import TeamCard from '../components/TeamCard';
import { teamMembers, advisors, partners, contactInfo } from '../data/team';

export default function About() {
  return (
    <div className="min-h-screen pb-20 page-transition">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 z-20">
        <h1 className="text-xl font-bold text-gray-800">关于我们</h1>
      </div>

      {/* Project Intro */}
      <div className="p-6">
        <div className="bg-gradient-to-br from-[#165DFF] to-[#36CFC9] rounded-3xl p-8 text-white mb-6">
          <h2 className="text-2xl font-bold mb-4">关于我们</h2>
          <p className="text-blue-100 leading-relaxed mb-4">
            "普惠金融进万家"是由贵州大学金融专业学生发起的公益科普项目，依托"财经研习社"小红书账号（13.9万粉丝），打造"专业内容生产+新媒体轻量化传播+线上线下联动"的普惠金融科普体系。
          </p>
          <p className="text-blue-100 leading-relaxed">
            项目聚焦国民金融素养不足、金融诈骗频发的社会痛点，帮助在校学生、职场新人、下沉市场用户识别金融风险、提升财商能力，助力金融消费者权益保护和国家金融安全建设。
          </p>
        </div>
      </div>

      {/* Core Team */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">核心团队</h2>
        <div className="grid grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              avatar={member.avatar}
              college={member.college}
              role={member.role}
            />
          ))}
        </div>
      </div>

      {/* Advisor */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">指导老师</h2>
        {advisors.map((advisor) => (
          <div key={advisor.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <img
              src={advisor.avatar}
              alt={advisor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-gray-800 mb-1">{advisor.name}</h3>
            <p className="text-sm text-[#165DFF] font-medium mb-2">{advisor.title}</p>
            <p className="text-xs text-gray-500">{advisor.research}</p>
          </div>
        ))}
      </div>

      {/* Partners */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">合作单位</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div key={partner.id} className="text-center">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="text-xs text-gray-600">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="px-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">联系我们</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#165DFF]">
                📧
              </div>
              <div>
                <p className="text-xs text-gray-500">邮箱</p>
                <p className="text-sm text-gray-800">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#FF7D00]">
                📕
              </div>
              <div>
                <p className="text-xs text-gray-500">小红书</p>
                <p className="text-sm text-gray-800">{contactInfo.xiaohongshu}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#52C41A]">
                💬
              </div>
              <div>
                <p className="text-xs text-gray-500">微信公众号</p>
                <p className="text-sm text-gray-800">{contactInfo.wechat}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500 mb-3">扫码关注我们</p>
            <div className="w-32 h-32 bg-gray-100 rounded-xl mx-auto flex items-center justify-center">
              <img
                src={contactInfo.qrcode}
                alt="QR Code"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
