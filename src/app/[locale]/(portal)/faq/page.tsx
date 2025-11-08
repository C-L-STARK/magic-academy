"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';
import { useLanguage } from '@/contexts/LanguageContext';

// FAQ data types
interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

// FAQ Item component
const FAQItem = ({ faq, isOpen, onClick }: { faq: FAQ; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white border-2 overflow-hidden transition-all ${
        isOpen ? 'border-black shadow-lg' : 'border-gray-200 hover:border-gray-400'
      }`}
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 text-left transition-all ${
          isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'
        }`}
      >
        <span className="flex-1 pr-4 font-bold text-lg text-gray-900">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${
            isOpen ? 'bg-black' : 'bg-gray-200'
          }`}
        >
          <span className={`text-lg font-bold ${isOpen ? 'text-white' : 'text-gray-600'}`}>
            ▼
          </span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 pt-2 text-gray-700 text-base leading-relaxed border-t-2 border-gray-100"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { language } = useLanguage();
  const isZh = language === 'zh';

  // FAQ categories data
  const faqCategories: FAQCategory[] = isZh ? [
    {
      title: '职业交易培训',
      faqs: [
        {
          question: '什么是魔道院职业交易员培训？',
          answer: '魔道院是一个专注于筛选和培养顶尖外汇交易员的专业培训平台。我们致力于用最短的时间从大量人群中筛选出少数适合做交易的人才并进行培养。我们将在<strong>30个工作日</strong>内判断新人是否是做交易的可塑之才。通过考核者将获得资金支持，成为独立交易员。'
        },
        {
          question: '为什么筛选如此严格？',
          answer: '我们的理念是<strong>培养真正适合的人，留下极少数，劝返大多数</strong>。在交易的世界里，有些人天生不适合。我们用严格的筛选机制确保只有真正适合的人才能进入。这不是贬低，而是对每个人负责——不让不适合的人在二级市场上成为韭菜。你材必有他用。'
        },
        {
          question: '30个工作日的培训路径是怎样的？',
          answer: '<strong>第1-5个工作日：规则学习</strong><br/>完成15个标准进场点练习，熟悉交易系统基本规则。5个工作日内未通过规则考核将被劝退。<br/><br/><strong>第6-20个工作日：盈利练习</strong><br/>找到适合自己的外汇交易品种，按照盈利考核标准进行练习。<br/><br/><strong>第21-30个工作日：盈利考核</strong><br/>连续10个工作日每天做到不错单、不漏单、不亏损。30个工作日内未完成连续10天盈利，劝退处理。<br/><br/><strong>小额实盘（20工作日）</strong><br/>20美金仓位，配资100美金。只有一次机会，超过回撤要求即视为失败。<br/><br/><strong>大额矩阵</strong><br/>小额实盘20个工作日固化无误后进入。拥有完全自由的工作时间，随着盈利曲线上升，逐步增加仓位规模和分润比例。'
        },
        {
          question: '通过考核的概率有多大？',
          answer: '根据历史数据，通过考核的概率在<strong>10-15%</strong>左右。但对你而言，要么是0%，要么是100%。这取决于你是否真正适合做交易，是否严格遵守纪律，是否能承受压力并保持情绪稳定。'
        },
        {
          question: '需要什么样的基础条件？',
          answer: '<ul><li>大专学历以上，35岁以下</li><li>认真、细心、耐心、心理健康</li><li>连续30个工作日（约45天）可投入</li><li>Windows电脑，独立交易环境</li><li>周一到周五，每天 13:30-21:30 在线</li><li>北京时间20:00参加团队长会议室复盘</li></ul>'
        },
        {
          question: '通过考核后可以获得什么？',
          answer: '通过考核后，我们会为你分配资金：<ul><li><strong>小额实盘</strong>：20美金仓位，配资100美金</li><li><strong>大额实盘</strong>：根据小额实盘表现逐步提升</li><li><strong>分润比例</strong>：60%-90%+（随能力提升而提高）</li><li><strong>完全自由</strong>：不受时间空间限制，可以在世界任何角落工作</li></ul>'
        },
        {
          question: '为什么只有一次机会？',
          answer: '因为交易就像做手术，务必严肃，容不得任何不遵守规则的人。一旦开始职业交易训练，会投入大量精力和时间去培养。每个人的时间和精力都很宝贵，我们需要确保双方的投入都是值得的。<strong>匹配度决定一切。</strong>'
        },
        {
          question: '培训是免费的吗？',
          answer: '是的，培训过程不收取学费。但你需要付出的是<strong>时间和精力</strong>。免费的往往是最"贵"的——一旦被选中进入培训，需要全身心投入。'
        },
        {
          question: '关于收入分配',
          answer: '你在战场获得的战利品，<strong>至少60%属于你个人</strong>，随着你的能力提升，这个比例也会随之提高，<strong>至高可达90%以上</strong>。剩下的属于我们，所以我们会用心培养每一位准交易员——你战场战利品多，我们战利品也才会多，我们是一条船上的战友，荣辱与共！'
        },
        {
          question: '交易有哪些铁律？',
          answer: '交易纪律就像法律法规，触碰一次就会被标上不信任的标签。<strong>一旦触碰，就再也无法进入矩阵团队；第二次触碰红线，直接劝退离开团队。</strong><br/><br/><strong>交易规则红线：</strong><ul><li>硬止损线不能移动，位置务必设置正确</li><li>只有标准和激进两种进场方式</li><li>不能跨越红折线持仓</li><li>止损和出场必须满足规则条件</li><li>5倍以上利润才能使用止盈线</li></ul><br/><strong>会议纪律红线：</strong><ul><li>学员之间不得加微信、电话等联系方式</li><li>会议室内保持严肃，不得谈论除交易外其他话题</li></ul>'
        },
      ]
    },
    {
      title: '个人品牌孵化',
      faqs: [
        {
          question: '什么是魔道院个人品牌孵化？',
          answer: '魔道院个人品牌孵化是一个系统化的培训项目，帮助你在12周内从定位到变现，打造属于自己的个人品牌。我们提供全平台运营策略、AI工具支持和终身社群资源，助你实现知识变现和影响力提升。'
        },
        {
          question: '培训周期是多久？',
          answer: '完整的培训周期是<strong>12周（3个月）</strong>，分为4个阶段：<br/><br/><strong>第1-3周：定位与规划</strong> - 找准个人品牌定位和目标受众<br/><strong>第4-6周：内容创作</strong> - 掌握爆款内容创作技巧<br/><strong>第7-9周：多平台运营</strong> - 学习8+主流平台运营策略<br/><strong>第10-12周：变现与增长</strong> - 实现知识变现和持续增长'
        },
        {
          question: '需要什么基础条件？',
          answer: '<ul><li>热爱内容创作，擅长表达和分享</li><li>有一定的专业领域知识或技能</li><li>愿意投入时间学习和实践</li><li>具备基本的电脑操作能力</li><li>能够坚持12周的系统学习</li></ul>'
        },
        {
          question: '覆盖哪些平台？',
          answer: '我们教授8+主流平台的运营策略：<br/><br/><strong>国内平台：</strong>抖音、小红书、B站、快手、微博、知乎<br/><strong>国际平台：</strong>YouTube、Instagram、TikTok<br/><br/>每个平台都有专门的运营策略、算法规则讲解和增长技巧。'
        },
        {
          question: '如何实现变现？',
          answer: '我们教授多种变现方式：<ul><li><strong>广告合作</strong>：品牌赞助和商务合作</li><li><strong>知识付费</strong>：在线课程、付费咨询</li><li><strong>电商带货</strong>：产品推广和佣金分成</li><li><strong>私域运营</strong>：会员服务和社群运营</li></ul>从粉丝1000开始就能变现，不需要等到百万粉丝。'
        },
        {
          question: 'AI工具如何帮助我？',
          answer: '我们深度整合多种AI工具提升效率：<ul><li><strong>ChatGPT</strong>：文案创作、选题策划</li><li><strong>Midjourney</strong>：配图生成、视觉设计</li><li><strong>剪映/CapCut</strong>：视频剪辑、特效制作</li><li><strong>数据分析工具</strong>：用户洞察、内容优化</li></ul>用AI提升10倍效率，让你专注于创意本身。'
        },
        {
          question: '终身社群包含什么？',
          answer: '加入终身学习社群后，你将获得：<ul><li>定期分享最新平台玩法和趋势</li><li>资源对接和品牌合作机会</li><li>优秀学员案例学习</li><li>行业人脉拓展</li><li>持续的运营指导和答疑</li></ul>让你的个人品牌之路不孤单，资源持续赋能。'
        },
        {
          question: '培训费用是多少？',
          answer: '具体费用请通过页面底部的联系方式咨询。我们提供：<ul><li>完整的12周系统培训</li><li>全平台运营策略指导</li><li>AI工具使用培训</li><li>1000+实战案例库</li><li>终身社群支持</li></ul>投资自己，是最好的投资。'
        },
        {
          question: '能保证一定成功吗？',
          answer: '我们不能保证100%成功，但我们能提供：<ul><li>系统化的培训方法论</li><li>经过验证的成功案例</li><li>全程的指导和支持</li><li>丰富的实战资源</li></ul>最终的成功取决于你的执行力、坚持度和内容质量。我们的学员成功率达到<strong>85%</strong>，大多数认真学习和实践的学员都能达到预期目标。'
        },
        {
          question: '我没有粉丝基础，可以参加吗？',
          answer: '当然可以！我们的课程就是为从零开始的人设计的。<strong>第1-3周的定位与规划阶段</strong>会帮助你：<ul><li>找到适合自己的内容方向</li><li>明确目标受众画像</li><li>制定差异化策略</li><li>规划内容体系</li></ul>从0到1是最关键的阶段，我们会手把手教你起步。'
        },
      ]
    },
    {
      title: '其他问题',
      faqs: [
        {
          question: '魔道院的核心理念是什么？',
          answer: '魔道院的核心理念是：<strong>自律即自由</strong>。我们相信通过自我修炼和专业培养，每个人都能战胜内心的懒惰、贪婪、恐惧、犹豫和傲慢，成为真正的数字游民。<br/><br/>这里既是修道场，也是桃花源。无论你选择职业交易还是个人品牌，我们都帮助你实现时间自由、地理位置自由和财务自由。'
        },
        {
          question: '两个培训项目可以同时参加吗？',
          answer: '不建议同时参加。<strong>职业交易培训</strong>需要连续30个工作日全职投入，每天13:30-21:30在线；<strong>个人品牌孵化</strong>需要12周系统学习和实践。<br/><br/>我们建议根据自己的兴趣、特长和时间安排选择一个项目深耕。当然，完成一个项目后，欢迎参加另一个项目的学习。'
        },
        {
          question: '如何选择适合自己的项目？',
          answer: '<strong>选择职业交易培训，如果你：</strong><ul><li>对金融市场充满兴趣，愿意深入学习交易技能</li><li>希望通过系统化培训快速成为职业交易员</li><li>追求高收益，愿意接受考核和挑战</li><li>能够承受压力并保持情绪稳定</li></ul><br/><strong>选择个人品牌孵化，如果你：</strong><ul><li>热爱内容创作，擅长表达和分享</li><li>希望打造个人影响力，建立长期品牌价值</li><li>追求多元化收入来源和职业自由</li><li>有专业领域知识想要变现</li></ul>'
        },
        {
          question: '学成后能达到什么水平？',
          answer: '<strong>职业交易培训：</strong><br/>通过30天培训和考核后，你将达到专业交易员10-20年的盈利水平，获得资金支持，实现60-90%的利润分成。月收入可达3万+人民币（$4k+美元）。<br/><br/><strong>个人品牌孵化：</strong><br/>完成12周培训后，你将掌握全平台运营能力，具备持续产出优质内容的能力。根据个人努力程度，可实现粉丝数万到数十万，月收入5万+人民币（$7k+美元）。'
        },
        {
          question: '如何联系咨询？',
          answer: '你可以通过以下方式联系我们：<ul><li>点击页面底部的"立即咨询"按钮</li><li>发送邮件至官方邮箱</li><li>添加微信进行详细咨询</li></ul>我们会在24小时内回复您的咨询，并根据您的情况提供个性化建议。'
        },
      ]
    }
  ] : [
    {
      title: 'Trading Training',
      faqs: [
        {
          question: 'What is Magic Academy Professional Trading Training?',
          answer: 'Magic Academy is a professional training platform focused on selecting and cultivating elite forex traders. We are committed to identifying, in the shortest time possible, the few individuals who are suited for trading. Within <strong>30 working days</strong>, we determine whether newcomers have the potential to become traders. Those who pass the assessment receive capital support and become independent traders.'
        },
        {
          question: 'Why is the selection so strict?',
          answer: 'Our philosophy is to <strong>cultivate those truly suited, retain the few, and advise the majority to pursue other paths</strong>. In the trading world, some people are inherently unsuited. We use strict selection to ensure only those truly suited can enter. This isn\'t disparagement, but responsibility—preventing unsuited individuals from becoming cannon fodder in markets. Your talents lie elsewhere.'
        },
        {
          question: 'What is the 30-day training path?',
          answer: '<strong>Days 1-5: Rule Learning</strong><br/>Complete 15 standard entry point exercises, master basic trading system rules. Failure to pass within 5 days results in dismissal.<br/><br/><strong>Days 6-20: Profit Practice</strong><br/>Find suitable currency pairs and practice according to profitability standards.<br/><br/><strong>Days 21-30: Profit Assessment</strong><br/>Achieve 10 consecutive working days without errors or losses. Failure to complete within 30 days results in dismissal.<br/><br/><strong>Small Live Trading (20 days)</strong><br/>$20 position, $100 capital allocation. One chance only, exceeding drawdown = failure.<br/><br/><strong>Large Matrix</strong><br/>After 20 days of small live consolidation. Complete time freedom, position and profit share grow with performance.'
        },
        {
          question: 'What is the probability of passing?',
          answer: 'Based on historical data, the pass rate is around <strong>10-15%</strong>. But for you, it\'s either 0% or 100%. It depends on whether you\'re truly suited for trading, follow discipline strictly, and can handle pressure while maintaining emotional stability.'
        },
        {
          question: 'What are the basic requirements?',
          answer: '<ul><li>Associate degree or higher, under 35 years old</li><li>Serious, meticulous, patient, mentally healthy</li><li>Continuous 30 working days (~45 days) available</li><li>Windows PC, independent trading environment</li><li>Monday-Friday, 1:30 PM - 9:30 PM online daily</li><li>Beijing Time 8:00 PM team leader conference room debrief</li></ul>'
        },
        {
          question: 'What do I get after passing the assessment?',
          answer: 'After passing, we allocate capital to you:<ul><li><strong>Small live</strong>: $20 position, $100 capital allocation</li><li><strong>Large live</strong>: Gradually increases based on small live performance</li><li><strong>Profit share</strong>: 60%-90%+ (increases with ability)</li><li><strong>Complete freedom</strong>: Unrestricted by time and space, work anywhere in the world</li></ul>'
        },
        {
          question: 'Why only one chance?',
          answer: 'Because trading is like surgery—utmost seriousness required, no tolerance for rule violators. Once professional trading training begins, significant energy and time are invested. Everyone\'s time and energy are precious; we need to ensure both parties\' investment is worthwhile. <strong>Compatibility determines everything.</strong>'
        },
        {
          question: 'Is the training free?',
          answer: 'Yes, the training process is free of tuition. But what you need to invest is <strong>time and energy</strong>. Free is often the most "expensive"—once selected, full dedication is required.'
        },
        {
          question: 'About income distribution',
          answer: 'The spoils you capture on the battlefield—<strong>at least 60% belong to you personally</strong>. As your abilities improve, this ratio increases, <strong>reaching up to 90% and beyond</strong>. The rest belongs to us, so we cultivate every trainee wholeheartedly—the more you get, the more we get. We are comrades sharing honor and disgrace!'
        },
        {
          question: 'What are the trading iron laws?',
          answer: 'Trading discipline is like law; touching it once brands you untrustworthy. <strong>Once touched, you can never enter the matrix team; a second violation results in direct dismissal.</strong><br/><br/><strong>Trading Rule Red Lines:</strong><ul><li>Hard stop-loss cannot be moved; positions must be set correctly</li><li>Only standard and aggressive entry methods</li><li>Cannot hold positions across red lines</li><li>Stop-loss and exit must meet rule conditions</li><li>Take-profit only with 5x+ profit</li></ul><br/><strong>Meeting Discipline Red Lines:</strong><ul><li>Students must not add WeChat, phone, or other contacts</li><li>Maintain seriousness in meetings; no non-trading topics</li></ul>'
        },
      ]
    },
    {
      title: 'Brand Incubation',
      faqs: [
        {
          question: 'What is Magic Academy Personal Brand Incubation?',
          answer: 'Magic Academy Personal Brand Incubation is a systematic training program that helps you build your personal brand from positioning to monetization in 12 weeks. We provide multi-platform strategies, AI tool support, and lifetime community resources to help you achieve knowledge monetization and influence growth.'
        },
        {
          question: 'How long is the training?',
          answer: 'The complete training is <strong>12 weeks (3 months)</strong>, divided into 4 stages:<br/><br/><strong>Weeks 1-3: Positioning & Planning</strong> - Find your brand positioning and target audience<br/><strong>Weeks 4-6: Content Creation</strong> - Master viral content creation techniques<br/><strong>Weeks 7-9: Multi-Platform Operations</strong> - Learn strategies for 8+ major platforms<br/><strong>Weeks 10-12: Monetization & Growth</strong> - Achieve knowledge monetization and continuous growth'
        },
        {
          question: 'What are the basic requirements?',
          answer: '<ul><li>Love content creation, good at expression and sharing</li><li>Have professional domain knowledge or skills</li><li>Willing to invest time in learning and practice</li><li>Basic computer operation ability</li><li>Can persist through 12 weeks of systematic learning</li></ul>'
        },
        {
          question: 'Which platforms are covered?',
          answer: 'We teach strategies for 8+ major platforms:<br/><br/><strong>Domestic:</strong> Douyin, Xiaohongshu, Bilibili, Kuaishou, Weibo, Zhihu<br/><strong>International:</strong> YouTube, Instagram, TikTok<br/><br/>Each platform has dedicated operation strategies, algorithm rules, and growth tactics.'
        },
        {
          question: 'How to monetize?',
          answer: 'We teach multiple monetization methods:<ul><li><strong>Ad partnerships</strong>: Brand sponsorships and business cooperation</li><li><strong>Knowledge monetization</strong>: Online courses, paid consulting</li><li><strong>E-commerce</strong>: Product promotion and commission</li><li><strong>Private domain ops</strong>: Membership services and community operations</li></ul>Start monetizing from 1000 followers, no need to wait for millions.'
        },
        {
          question: 'How do AI tools help?',
          answer: 'We deeply integrate various AI tools for efficiency:<ul><li><strong>ChatGPT</strong>: Copywriting, topic planning</li><li><strong>Midjourney</strong>: Image generation, visual design</li><li><strong>Jianying/CapCut</strong>: Video editing, effects</li><li><strong>Analytics tools</strong>: User insights, content optimization</li></ul>Use AI for 10x efficiency, focus on creativity.'
        },
        {
          question: 'What does the lifetime community include?',
          answer: 'After joining the lifetime learning community, you get:<ul><li>Regular sharing of latest platform tactics and trends</li><li>Resource connections and brand partnership opportunities</li><li>Excellent student case studies</li><li>Industry networking</li><li>Continuous operational guidance and Q&A</li></ul>Never alone on your brand journey, continuous resource empowerment.'
        },
        {
          question: 'What is the training fee?',
          answer: 'For specific fees, please contact us through the bottom of the page. We provide:<ul><li>Complete 12-week systematic training</li><li>Multi-platform operation strategy guidance</li><li>AI tool usage training</li><li>1000+ practical case library</li><li>Lifetime community support</li></ul>Investing in yourself is the best investment.'
        },
        {
          question: 'Can you guarantee success?',
          answer: 'We can\'t guarantee 100% success, but we provide:<ul><li>Systematic training methodology</li><li>Verified success cases</li><li>Full guidance and support</li><li>Rich practical resources</li></ul>Ultimate success depends on your execution, persistence, and content quality. Our student success rate is <strong>85%</strong>, most students who learn and practice seriously achieve expected goals.'
        },
        {
          question: 'I have no follower base, can I join?',
          answer: 'Of course! Our course is designed for people starting from zero. <strong>Weeks 1-3 Positioning & Planning</strong> will help you:<ul><li>Find suitable content direction</li><li>Clarify target audience profile</li><li>Develop differentiation strategy</li><li>Plan content system</li></ul>From 0 to 1 is the most critical stage, we teach you step by step.'
        },
      ]
    },
    {
      title: 'Other Questions',
      faqs: [
        {
          question: 'What is Magic Academy\'s core philosophy?',
          answer: 'Magic Academy\'s core philosophy is: <strong>Discipline brings freedom</strong>. We believe through self-cultivation and professional training, everyone can overcome inner laziness, greed, fear, hesitation, and arrogance to become true digital nomads.<br/><br/>This is both training ground and utopia. Whether you choose trading or personal branding, we help you achieve time freedom, location freedom, and financial freedom.'
        },
        {
          question: 'Can I join both programs simultaneously?',
          answer: 'Not recommended. <strong>Trading training</strong> requires continuous 30 working days full-time, daily 1:30 PM-9:30 PM online; <strong>Brand incubation</strong> requires 12 weeks systematic learning and practice.<br/><br/>We suggest choosing one project based on your interests, strengths, and time availability. Of course, after completing one, you\'re welcome to join the other.'
        },
        {
          question: 'How to choose the right project for me?',
          answer: '<strong>Choose Trading Training if you:</strong><ul><li>Interested in financial markets, willing to learn trading skills</li><li>Want to quickly become professional trader through systematic training</li><li>Pursuing high returns, willing to accept assessments and challenges</li><li>Can handle pressure and maintain emotional stability</li></ul><br/><strong>Choose Brand Incubation if you:</strong><ul><li>Love content creation, good at expression and sharing</li><li>Want to build personal influence and long-term brand value</li><li>Pursuing diversified income sources and career freedom</li><li>Have professional knowledge to monetize</li></ul>'
        },
        {
          question: 'What level can I reach after completion?',
          answer: '<strong>Trading Training:</strong><br/>After 30-day training and assessment, you reach professional trader 10-20 year profitability level, get capital support, achieve 60-90% profit share. Monthly income $4k+ USD.<br/><br/><strong>Brand Incubation:</strong><br/>After 12-week training, you master multi-platform operations and continuous quality content production. Depending on effort, achieve tens to hundreds of thousands of followers, monthly income $7k+ USD.'
        },
        {
          question: 'How to contact for consultation?',
          answer: 'You can contact us through:<ul><li>Click "Inquire Now" button at bottom of page</li><li>Send email to official email</li><li>Add WeChat for detailed consultation</li></ul>We respond to inquiries within 24 hours and provide personalized suggestions.'
        },
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const filterFAQs = (faqs: FAQ[]) => {
    if (!searchQuery) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border-b-2 border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-semibold tracking-wider text-white">
              {isZh ? '常见问题' : 'FAQ'}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            {isZh ? '常见问题解答' : 'Frequently Asked Questions'}
            <br />
            <span className="text-3xl md:text-4xl font-normal text-gray-300">
              {isZh ? '找到你想要的答案' : 'Find The Answers You Need'}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {isZh
              ? '关于魔道院职业交易培训和个人品牌孵化的常见问题，我们已经为您准备好了详细的解答'
              : 'Common questions about Magic Academy Trading Training and Brand Incubation, we have detailed answers ready for you'}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isZh ? '搜索问题...' : 'Search questions...'}
              className="w-full px-6 py-5 pr-32 text-lg border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:border-black transition-all"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <span className="px-6 py-3 bg-black text-white font-bold text-sm">
                {isZh ? '搜索' : 'Search'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-12 bg-black"></div>
              <h2 className="text-3xl font-black text-gray-900">{category.title}</h2>
              <span className="px-4 py-2 bg-black text-white text-sm font-bold">
                {filterFAQs(category.faqs).length}
              </span>
            </div>
            <div className="space-y-4">
              {filterFAQs(category.faqs).map((faq, faqIndex) => (
                <FAQItem
                  key={faqIndex}
                  faq={faq}
                  isOpen={openItems.has(`${categoryIndex}-${faqIndex}`)}
                  onClick={() => toggleItem(categoryIndex, faqIndex)}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-900/5 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-black via-gray-900 to-black p-12 border-2 border-black text-center">
            <div className="mb-6">
              <div className="inline-block w-16 h-16 bg-white flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              {isZh ? '还有其他问题？' : 'Still Have Questions?'}
            </h3>
            <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
              {isZh
                ? '如果你没有找到想要的答案，欢迎直接联系我们，我们会在24小时内回复'
                : 'If you didn\'t find the answer you were looking for, feel free to contact us directly, we\'ll respond within 24 hours'}
            </p>
            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="px-10 py-4 bg-white text-black font-bold text-lg border-2 border-white hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              {isZh ? '联系我们' : 'Contact Us'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '咨询培训课程' : 'Inquire About Training'}
      />
    </div>
  );
}
