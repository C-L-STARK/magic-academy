"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function TermsPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const sections = [
    {
      title: { zh: '1. 接受条款', en: '1. Acceptance of Terms' },
      content: {
        zh: [
          '欢迎使用魔道院 (Magic Academy) 的服务。通过访问或使用我们的网站和服务，您同意受本服务条款的约束。',
          '',
          '如果您不同意这些条款，请不要使用我们的服务。我们保留随时修改这些条款的权利，修改后的条款将在网站上公布时立即生效。',
        ],
        en: [
          'Welcome to Magic Academy (魔道院) services. By accessing or using our website and services, you agree to be bound by these Terms of Service.',
          '',
          'If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and modified terms will take effect immediately upon posting on the website.',
        ],
      },
    },
    {
      title: { zh: '2. 服务描述', en: '2. Service Description' },
      content: {
        zh: [
          '魔道院提供两大核心培训服务：',
          '',
          '职业交易培训：',
          '• 30天系统化外汇交易培训',
          '• 实战考核和能力评估',
          '• 通过考核后提供资金支持',
          '• 60%-90%的利润分成',
          '',
          '个人品牌孵化：',
          '• 自媒体运营培训',
          '• 内容创作指导',
          '• 变现策略规划',
          '• AI工具应用培训',
          '',
          '我们保留随时修改、暂停或终止任何服务的权利，恕不另行通知。',
        ],
        en: [
          'Magic Academy provides two core training services:',
          '',
          'Professional Trading Training:',
          '• 30-day systematic forex trading training',
          '• Practical assessment and capability evaluation',
          '• Funding support after passing assessment',
          '• 60%-90% profit sharing',
          '',
          'Personal Brand Incubation:',
          '• Social media operation training',
          '• Content creation guidance',
          '• Monetization strategy planning',
          '• AI tools application training',
          '',
          'We reserve the right to modify, suspend, or terminate any service at any time without prior notice.',
        ],
      },
    },
    {
      title: { zh: '3. 用户资格与注册', en: '3. User Eligibility and Registration' },
      content: {
        zh: [
          '使用我们的服务，您必须：',
          '• 年满18周岁',
          '• 具有完全民事行为能力',
          '• 提供真实、准确的个人信息',
          '• 对账户安全负责',
          '',
          '您同意：',
          '• 保护账户密码的机密性',
          '• 不与他人共享账户',
          '• 立即通知我们任何未经授权的使用',
          '• 对账户下的所有活动负责',
        ],
        en: [
          'To use our services, you must:',
          '• Be at least 18 years old',
          '• Have full legal capacity',
          '• Provide true and accurate personal information',
          '• Be responsible for account security',
          '',
          'You agree to:',
          '• Protect the confidentiality of your account password',
          '• Not share your account with others',
          '• Immediately notify us of any unauthorized use',
          '• Be responsible for all activities under your account',
        ],
      },
    },
    {
      title: { zh: '4. 费用与付款', en: '4. Fees and Payment' },
      content: {
        zh: [
          '培训费用：',
          '• 具体费用根据所选课程而定',
          '• 在注册前会明确显示所有费用',
          '• 付款方式包括但不限于：支付宝、微信支付、银行转账',
          '',
          '退款政策：',
          '• 开课前7天申请退款：全额退款',
          '• 开课前3-7天申请退款：扣除30%手续费',
          '• 开课后：原则上不予退款',
          '• 特殊情况可联系客服协商',
          '',
          '利润分成（适用于交易培训）：',
          '• 通过考核后，使用我们提供的资金进行交易',
          '• 根据合约约定分配利润（60%-90%）',
          '• 具体比例根据考核成绩和账户规模确定',
        ],
        en: [
          'Training Fees:',
          '• Specific fees depend on the course selected',
          '• All fees will be clearly displayed before registration',
          '• Payment methods include but are not limited to: Alipay, WeChat Pay, bank transfer',
          '',
          'Refund Policy:',
          '• Refund request 7 days before course start: full refund',
          '• Refund request 3-7 days before course start: 30% processing fee',
          '• After course start: no refund in principle',
          '• Special circumstances can be negotiated with customer service',
          '',
          'Profit Sharing (for Trading Training):',
          '• After passing assessment, trade using our provided funds',
          '• Profit distribution according to contract (60%-90%)',
          '• Specific ratio determined by assessment scores and account size',
        ],
      },
    },
    {
      title: { zh: '5. 用户行为准则', en: '5. User Conduct Guidelines' },
      content: {
        zh: [
          '您同意不会：',
          '• 违反任何适用的法律法规',
          '• 侵犯他人的知识产权',
          '• 发布虚假、误导性或欺诈性内容',
          '• 干扰或破坏服务的正常运行',
          '• 使用自动化工具访问服务',
          '• 进行反向工程、反编译或反汇编',
          '• 未经授权访问其他用户的账户',
          '• 从事任何非法或不当的交易活动',
          '• 分享或转售课程内容',
          '',
          '违反这些准则可能导致账户暂停或终止，且不退款。',
        ],
        en: [
          'You agree not to:',
          '• Violate any applicable laws or regulations',
          '• Infringe on others\' intellectual property rights',
          '• Post false, misleading, or fraudulent content',
          '• Interfere with or disrupt the normal operation of services',
          '• Use automated tools to access services',
          '• Reverse engineer, decompile, or disassemble',
          '• Access other users\' accounts without authorization',
          '• Engage in any illegal or improper trading activities',
          '• Share or resell course content',
          '',
          'Violating these guidelines may result in account suspension or termination without refund.',
        ],
      },
    },
    {
      title: { zh: '6. 知识产权', en: '6. Intellectual Property' },
      content: {
        zh: [
          '所有权：',
          '• 网站上的所有内容（课程材料、文字、图像、视频等）均为魔道院或其许可方的财产',
          '• 受版权、商标和其他知识产权法保护',
          '',
          '许可使用：',
          '• 我们授予您有限的、非独占的、不可转让的许可',
          '• 仅用于个人学习和非商业用途',
          '• 不得复制、分发、修改或创建衍生作品',
          '',
          '学员内容：',
          '• 您在平台上发布的内容（如学习笔记、交流发言）仍归您所有',
          '• 但您授予我们使用、展示和分享这些内容的权利',
        ],
        en: [
          'Ownership:',
          '• All content on the website (course materials, text, images, videos, etc.) is the property of Magic Academy or its licensors',
          '• Protected by copyright, trademark, and other intellectual property laws',
          '',
          'Licensed Use:',
          '• We grant you a limited, non-exclusive, non-transferable license',
          '• For personal learning and non-commercial use only',
          '• You may not copy, distribute, modify, or create derivative works',
          '',
          'Student Content:',
          '• Content you post on the platform (such as study notes, communication posts) remains yours',
          '• But you grant us the right to use, display, and share this content',
        ],
      },
    },
    {
      title: { zh: '7. 免责声明', en: '7. Disclaimer' },
      content: {
        zh: [
          '交易风险：',
          '• 外汇交易存在高风险，可能导致资金损失',
          '• 过往业绩不代表未来表现',
          '• 我们不保证交易利润',
          '• 您应该仔细评估自己的财务状况和风险承受能力',
          '',
          '服务保证：',
          '• 服务按"原样"和"可用"基础提供',
          '• 我们不保证服务不会中断或无错误',
          '• 我们不对服务的准确性、可靠性或完整性作出保证',
          '',
          '第三方内容：',
          '• 我们可能链接到第三方网站或服务',
          '• 我们不对第三方内容或行为负责',
        ],
        en: [
          'Trading Risks:',
          '• Forex trading involves high risk and may result in capital loss',
          '• Past performance does not represent future results',
          '• We do not guarantee trading profits',
          '• You should carefully assess your financial situation and risk tolerance',
          '',
          'Service Guarantee:',
          '• Services are provided on an "as is" and "as available" basis',
          '• We do not guarantee that services will be uninterrupted or error-free',
          '• We make no warranties regarding the accuracy, reliability, or completeness of services',
          '',
          'Third-Party Content:',
          '• We may link to third-party websites or services',
          '• We are not responsible for third-party content or actions',
        ],
      },
    },
    {
      title: { zh: '8. 责任限制', en: '8. Limitation of Liability' },
      content: {
        zh: [
          '在法律允许的最大范围内：',
          '',
          '• 我们不对任何间接、附带、特殊、惩罚性或后果性损害承担责任',
          '• 我们的总责任限于您支付给我们的费用金额',
          '• 我们不对因以下原因造成的损失负责：',
          '  - 服务中断或延迟',
          '  - 数据丢失或损坏',
          '  - 第三方行为',
          '  - 不可抗力事件',
          '',
          '某些司法管辖区不允许限制责任，因此上述限制可能不适用于您。',
        ],
        en: [
          'To the maximum extent permitted by law:',
          '',
          '• We are not liable for any indirect, incidental, special, punitive, or consequential damages',
          '• Our total liability is limited to the amount of fees you paid to us',
          '• We are not responsible for losses caused by:',
          '  - Service interruptions or delays',
          '  - Data loss or corruption',
          '  - Third-party actions',
          '  - Force majeure events',
          '',
          'Some jurisdictions do not allow limitation of liability, so the above limitations may not apply to you.',
        ],
      },
    },
    {
      title: { zh: '9. 赔偿', en: '9. Indemnification' },
      content: {
        zh: [
          '您同意赔偿并使魔道院及其关联方、董事、员工免受因以下原因产生的任何索赔、损失、责任和费用（包括合理的律师费）：',
          '',
          '• 您违反本服务条款',
          '• 您侵犯任何第三方权利',
          '• 您使用或滥用服务',
          '• 您提供的任何内容或信息',
        ],
        en: [
          'You agree to indemnify and hold Magic Academy and its affiliates, directors, employees harmless from any claims, losses, liabilities, and expenses (including reasonable attorney fees) arising from:',
          '',
          '• Your violation of these Terms of Service',
          '• Your infringement of any third-party rights',
          '• Your use or misuse of services',
          '• Any content or information you provide',
        ],
      },
    },
    {
      title: { zh: '10. 终止', en: '10. Termination' },
      content: {
        zh: [
          '我们可以：',
          '• 随时暂停或终止您的账户',
          '• 在您违反本条款时立即终止服务',
          '• 在终止时不承担任何责任',
          '',
          '您可以：',
          '• 随时停止使用服务',
          '• 请求关闭您的账户',
          '',
          '终止后：',
          '• 您仍需支付所有未付费用',
          '• 某些条款（如知识产权、免责声明）将继续有效',
          '• 我们可能会保留您的信息以遵守法律要求',
        ],
        en: [
          'We may:',
          '• Suspend or terminate your account at any time',
          '• Immediately terminate services if you violate these terms',
          '• Have no liability upon termination',
          '',
          'You may:',
          '• Stop using services at any time',
          '• Request closure of your account',
          '',
          'After termination:',
          '• You must still pay all outstanding fees',
          '• Certain provisions (such as intellectual property, disclaimers) will remain in effect',
          '• We may retain your information to comply with legal requirements',
        ],
      },
    },
    {
      title: { zh: '11. 争议解决', en: '11. Dispute Resolution' },
      content: {
        zh: [
          '适用法律：',
          '• 本条款受中华人民共和国法律管辖',
          '',
          '争议解决程序：',
          '1. 友好协商：首先尝试通过友好协商解决',
          '2. 调解：如协商失败，可尝试第三方调解',
          '3. 仲裁/诉讼：最终通过仲裁或向有管辖权的法院提起诉讼',
          '',
          '管辖法院：',
          '• 如诉讼，应提交至魔道院所在地有管辖权的人民法院',
        ],
        en: [
          'Applicable Law:',
          '• These terms are governed by the laws of the People\'s Republic of China',
          '',
          'Dispute Resolution Process:',
          '1. Friendly Negotiation: First attempt to resolve through friendly negotiation',
          '2. Mediation: If negotiation fails, third-party mediation may be attempted',
          '3. Arbitration/Litigation: Finally through arbitration or lawsuit in a competent court',
          '',
          'Jurisdiction:',
          '• If litigation, should be submitted to the People\'s Court with jurisdiction where Magic Academy is located',
        ],
      },
    },
    {
      title: { zh: '12. 其他条款', en: '12. Miscellaneous' },
      content: {
        zh: [
          '完整协议：',
          '• 本条款构成您与魔道院之间的完整协议',
          '',
          '可分割性：',
          '• 如果任何条款被认定为无效，其余条款仍然有效',
          '',
          '弃权：',
          '• 我们未行使任何权利不构成对该权利的放弃',
          '',
          '转让：',
          '• 您不得转让本协议下的权利',
          '• 我们可以自由转让我们的权利和义务',
          '',
          '通知：',
          '• 我们可以通过电子邮件或网站公告向您发送通知',
          '• 通知在发送时视为已送达',
        ],
        en: [
          'Entire Agreement:',
          '• These terms constitute the entire agreement between you and Magic Academy',
          '',
          'Severability:',
          '• If any provision is deemed invalid, the remaining provisions remain valid',
          '',
          'Waiver:',
          '• Our failure to exercise any right does not constitute a waiver of that right',
          '',
          'Assignment:',
          '• You may not assign your rights under this agreement',
          '• We may freely assign our rights and obligations',
          '',
          'Notices:',
          '• We may send notices to you via email or website announcements',
          '• Notices are deemed delivered when sent',
        ],
      },
    },
    {
      title: { zh: '13. 联系我们', en: '13. Contact Us' },
      content: {
        zh: [
          '如果您对本服务条款有任何疑问，请通过以下方式联系我们：',
          '',
          '电子邮件：1526824204@qq.com',
          '机构名称：魔道院 (Magic Academy)',
          '',
          '我们将在收到您的询问后的5个工作日内回复。',
        ],
        en: [
          'If you have any questions about these Terms of Service, please contact us:',
          '',
          'Email: 1526824204@qq.com',
          'Organization: Magic Academy (魔道院)',
          '',
          'We will respond to your inquiry within 5 business days of receipt.',
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-orange-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-white/50"></div>
              <span className="text-sm font-bold tracking-widest uppercase">
                {isZh ? '法律文件' : 'Legal Document'}
              </span>
              <div className="h-px w-12 bg-white/50"></div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              {isZh ? '服务条款' : 'Terms of Service'}
            </h1>

            <p className="text-xl opacity-90 mb-4">
              {isZh
                ? '请仔细阅读这些条款和条件'
                : 'Please read these terms and conditions carefully'}
            </p>

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{isZh ? '最后更新：2025年1月' : 'Last Updated: January 2025'}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white border-l-4 border-blue-500 p-8 shadow-lg mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed flex-1">
              {isZh
                ? '这些服务条款（"条款"）管理您对魔道院 (Magic Academy) 提供的网站和服务的使用。请仔细阅读这些条款。访问或使用我们的服务，即表示您同意受这些条款的约束。'
                : 'These Terms of Service ("Terms") govern your use of the website and services provided by Magic Academy (魔道院). Please read these terms carefully. By accessing or using our services, you agree to be bound by these terms.'}
            </p>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                {section.title[language]}
              </h2>

              <div className="space-y-3 text-gray-700 leading-relaxed">
                {section.content[language].map((paragraph, pIdx) => (
                  <p key={pIdx} className={paragraph.startsWith('•') || paragraph.startsWith('  -') ? 'ml-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agreement Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-orange-500 p-8 text-white text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-black">
              {isZh ? '感谢您的理解与配合' : 'Thank You for Your Understanding'}
            </h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            {isZh
              ? '使用我们的服务即表示您已阅读、理解并同意受这些服务条款的约束。如有任何疑问，请随时联系我们'
              : 'By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you have any questions, please contact us'}
          </p>
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="px-8 py-3 bg-white text-blue-600 font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{isZh ? '联系我们' : 'Contact Us'}</span>
          </button>
        </motion.div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`/${language}`}
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-bold hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            {isZh ? '返回首页' : 'Back to Home'}
          </a>
          <a
            href={`/${language}/privacy`}
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-bold hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            {isZh ? '隐私政策' : 'Privacy Policy'}
          </a>
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
