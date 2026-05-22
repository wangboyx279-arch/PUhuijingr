export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  college: string;
  role: string;
}

export interface Advisor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  research: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '张明',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    college: '贵州大学金融专硕2024级',
    role: '项目负责人',
  },
  {
    id: '2',
    name: '李华',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    college: '贵州大学金融学2023级',
    role: '内容运营',
  },
  {
    id: '3',
    name: '王芳',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    college: '贵州大学金融学2023级',
    role: '线下活动',
  },
  {
    id: '4',
    name: '刘强',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    college: '贵州大学金融学2022级',
    role: '技术开发',
  },
];

export const advisors: Advisor[] = [
  {
    id: '1',
    name: '陈教授',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    title: '金融学院副院长、博士生导师',
    research: '普惠金融、消费者权益保护',
  },
];

export const partners = [
  {
    id: '1',
    name: '贵州大学经济学院',
    logo: '🏛️',
  },
  {
    id: '2',
    name: '贵州大学团委',
    logo: '🎓',
  },
  {
    id: '3',
    name: '贵州大学保卫处',
    logo: '🛡️',
  },
  {
    id: '4',
    name: 'XX银行贵阳分行',
    logo: '🏦',
  },
  {
    id: '5',
    name: 'XX派出所',
    logo: '👮',
  },
];

export const contactInfo = {
  email: 'phjrjinwujia@163.com',
  xiaohongshu: '@财经研习社',
  wechat: '普惠金融进万家',
  qrcode: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop',
};
