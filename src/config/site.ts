/**
 * 网站全局配置
 * Site Global Configuration
 */

export const siteConfig = {
  // 品牌信息
  brand: {
    name: {
      zh: '魔道院',
      en: 'Magic Academy',
    },
    slogan: {
      zh: '打造数字时代的自由职业者',
      en: 'Master Your Future, Live Your Dreams',
    },
    description: {
      zh: '魔道院致力于培养数字时代的自由职业者，提供职业交易培训和个人品牌孵化两大核心业务，助力你实现财务自由和时间自由。',
      en: 'Magic Academy is dedicated to cultivating digital nomads, offering professional trading training and personal brand incubation to help you achieve financial and time freedom.',
    },
  },

  // 颜色系统
  colors: {
    luster: '#F4F1EC',  // Luster White - 米白色
    blue: '#9BACD8',    // Flower Blue - 花青色
    orange: '#F98513',  // Orange - 橙色
  },

  // 联系方式
  contact: {
    email: '1526824204@qq.com',
    emailSubject: {
      zh: '魔道院课程咨询',
      en: 'Magic Academy Course Inquiry',
    },
    twitter: 'https://x.com/magic_academy',
    github: 'https://github.com/C-L-STARK/magic-academy',
  },

  // 网站URL
  url: 'https://magic-academy.com',

  // 两大业务板块配置
  divisions: {
    trading: {
      name: {
        zh: '职业交易培训',
        en: 'Professional Trading',
      },
      description: {
        zh: '从0到1成为专业交易员，掌握系统化交易策略，获得资金支持，实现财务自由',
        en: 'Become a professional trader from scratch, master systematic trading strategies, get funding support, and achieve financial freedom',
      },
      color: '#F98513', // Orange
      gradient: 'linear-gradient(135deg, #F4F1EC 0%, #F98513 100%)',
      path: '/training/forex',
      features: [
        { zh: '系统化课程体系', en: 'Systematic curriculum' },
        { zh: '实战模拟训练', en: 'Practical simulation training' },
        { zh: '资金账户支持', en: 'Funded account support' },
        { zh: '1对1导师指导', en: '1-on-1 mentorship' },
      ],
    },
    creator: {
      name: {
        zh: '个人品牌孵化',
        en: 'Personal Brand Incubation',
      },
      description: {
        zh: '打造你的数字影响力，从内容创作到商业变现，全方位孵化个人品牌',
        en: 'Build your digital influence, from content creation to monetization, comprehensive personal brand incubation',
      },
      color: '#9BACD8', // Flower Blue
      gradient: 'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 100%)',
      path: '/training/social-media',
      features: [
        { zh: '内容创作训练', en: 'Content creation training' },
        { zh: '平台运营策略', en: 'Platform operation strategy' },
        { zh: '商业变现指导', en: 'Monetization guidance' },
        { zh: '资源对接支持', en: 'Resource connection support' },
      ],
    },
    // Alias for backward compatibility
    get socialMedia() {
      return this.creator;
    },
  },

  // 平台数据
  stats: {
    students: {
      value: 1000,
      display: '1000+',
      label: { zh: '学员数量', en: 'Students' },
    },
    successRate: {
      value: 85,
      display: '85%',
      label: { zh: '成功率', en: 'Success Rate' },
    },
    totalIncome: {
      value: 2000000,
      display: '¥2M+',
      label: { zh: '学员总收入', en: 'Total Income' },
    },
  },

  // 社交媒体链接
  social: {
    twitter: 'https://x.com/magic_academy',
    github: 'https://github.com/C-L-STARK/magic-academy',
    youtube: 'https://youtube.com/@magic_academy',
    bilibili: 'https://space.bilibili.com/magic_academy',
    email: '1526824204@qq.com',
  },

  // 管理员配置
  admin: {
    password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'Life@1949..',
  },
} as const;

export type SiteConfig = typeof siteConfig;
