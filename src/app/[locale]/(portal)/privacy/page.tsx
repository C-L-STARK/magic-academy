"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function PrivacyPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const sections = [
    {
      title: { zh: '1. 信息收集', en: '1. Information Collection' },
      content: {
        zh: [
          '我们收集以下类型的信息：',
          '• 个人身份信息：姓名、电子邮件地址、电话号码',
          '• 账户信息：用户名、密码（加密存储）',
          '• 培训相关信息：学习进度、考核成绩、交易模拟数据',
          '• 技术信息：IP地址、浏览器类型、设备信息、访问时间',
          '• 通信记录：与我们的客服或导师的沟通内容',
        ],
        en: [
          'We collect the following types of information:',
          '• Personal identification information: name, email address, phone number',
          '• Account information: username, password (encrypted storage)',
          '• Training-related information: learning progress, assessment scores, trading simulation data',
          '• Technical information: IP address, browser type, device information, access time',
          '• Communication records: communications with our customer service or mentors',
        ],
      },
    },
    {
      title: { zh: '2. 信息使用', en: '2. Information Use' },
      content: {
        zh: [
          '我们使用收集的信息用于：',
          '• 提供和改进培训服务',
          '• 个性化学习体验和课程推荐',
          '• 评估学员学习进度和能力',
          '• 发送重要通知和培训更新',
          '• 处理付款和财务事务',
          '• 回应咨询和提供客户支持',
          '• 分析网站使用情况以改进服务',
          '• 防止欺诈和确保平台安全',
        ],
        en: [
          'We use collected information to:',
          '• Provide and improve training services',
          '• Personalize learning experience and course recommendations',
          '• Assess student learning progress and abilities',
          '• Send important notifications and training updates',
          '• Process payments and financial transactions',
          '• Respond to inquiries and provide customer support',
          '• Analyze website usage to improve services',
          '• Prevent fraud and ensure platform security',
        ],
      },
    },
    {
      title: { zh: '3. 信息共享', en: '3. Information Sharing' },
      content: {
        zh: [
          '我们不会出售、交易或出租您的个人信息给第三方。我们可能在以下情况下共享信息：',
          '• 服务提供商：与协助我们运营的可信第三方（如支付处理器、云存储服务）',
          '• 法律要求：当法律要求或为保护我们的权利时',
          '• 合作伙伴：在您同意的情况下，与合作券商或平台分享必要信息',
          '• 业务转让：在合并、收购或资产出售的情况下',
          '',
          '所有第三方服务提供商都受到严格的保密协议约束。',
        ],
        en: [
          'We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:',
          '• Service Providers: with trusted third parties who assist us in operations (such as payment processors, cloud storage services)',
          '• Legal Requirements: when required by law or to protect our rights',
          '• Partners: with partner brokers or platforms with your consent, sharing necessary information',
          '• Business Transfers: in case of merger, acquisition, or asset sale',
          '',
          'All third-party service providers are bound by strict confidentiality agreements.',
        ],
      },
    },
    {
      title: { zh: '4. 数据安全', en: '4. Data Security' },
      content: {
        zh: [
          '我们采取多重安全措施保护您的信息：',
          '• SSL/TLS加密传输',
          '• 数据库加密存储',
          '• 定期安全审计',
          '• 访问控制和权限管理',
          '• 防火墙和入侵检测系统',
          '• 定期备份和灾难恢复计划',
          '',
          '尽管我们尽最大努力保护您的数据，但请注意，没有任何互联网传输或电子存储方法是100%安全的。',
        ],
        en: [
          'We implement multiple security measures to protect your information:',
          '• SSL/TLS encrypted transmission',
          '• Database encryption storage',
          '• Regular security audits',
          '• Access control and permission management',
          '• Firewall and intrusion detection systems',
          '• Regular backups and disaster recovery plans',
          '',
          'Despite our best efforts to protect your data, please note that no method of Internet transmission or electronic storage is 100% secure.',
        ],
      },
    },
    {
      title: { zh: '5. Cookie和跟踪技术', en: '5. Cookies and Tracking Technologies' },
      content: {
        zh: [
          '我们使用Cookie和类似技术来：',
          '• 记住您的偏好设置',
          '• 分析网站流量和使用模式',
          '• 提供个性化内容',
          '• 改善用户体验',
          '',
          '您可以通过浏览器设置控制Cookie的使用。但是，禁用Cookie可能会影响某些功能的正常使用。',
        ],
        en: [
          'We use cookies and similar technologies to:',
          '• Remember your preferences',
          '• Analyze website traffic and usage patterns',
          '• Provide personalized content',
          '• Improve user experience',
          '',
          'You can control cookie usage through your browser settings. However, disabling cookies may affect the normal use of certain features.',
        ],
      },
    },
    {
      title: { zh: '6. 您的权利', en: '6. Your Rights' },
      content: {
        zh: [
          '您对自己的个人信息拥有以下权利：',
          '• 访问权：查看我们持有的关于您的信息',
          '• 更正权：更新或更正不准确的信息',
          '• 删除权：请求删除您的个人信息',
          '• 限制处理权：限制我们如何使用您的信息',
          '• 数据可携权：以结构化格式接收您的数据',
          '• 反对权：反对某些类型的数据处理',
          '',
          '要行使这些权利，请通过1526824204@qq.com联系我们。',
        ],
        en: [
          'You have the following rights regarding your personal information:',
          '• Right of Access: view information we hold about you',
          '• Right to Rectification: update or correct inaccurate information',
          '• Right to Erasure: request deletion of your personal information',
          '• Right to Restriction: restrict how we use your information',
          '• Right to Data Portability: receive your data in a structured format',
          '• Right to Object: object to certain types of data processing',
          '',
          'To exercise these rights, please contact us at 1526824204@qq.com.',
        ],
      },
    },
    {
      title: { zh: '7. 儿童隐私', en: '7. Children\'s Privacy' },
      content: {
        zh: [
          '我们的服务面向18岁及以上的成年人。我们不会有意收集18岁以下儿童的个人信息。',
          '',
          '如果您是家长或监护人，并且您知道您的孩子向我们提供了个人信息，请联系我们。如果我们发现收集了未成年人的个人信息，我们将立即删除该信息。',
        ],
        en: [
          'Our services are intended for adults 18 years and older. We do not knowingly collect personal information from children under 18.',
          '',
          'If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we discover that we have collected personal information from a minor, we will immediately delete such information.',
        ],
      },
    },
    {
      title: { zh: '8. 国际数据传输', en: '8. International Data Transfer' },
      content: {
        zh: [
          '您的信息可能会被传输到并维护在您所在国家/地区以外的计算机上。',
          '',
          '如果您位于中国以外并选择向我们提供信息，请注意我们会将数据（包括个人信息）传输到中国并在中国处理。',
          '',
          '您同意本隐私政策，即表示您同意该传输。',
        ],
        en: [
          'Your information may be transferred to and maintained on computers located outside of your country/region.',
          '',
          'If you are located outside China and choose to provide information to us, please note that we transfer data, including personal information, to China and process it there.',
          '',
          'Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.',
        ],
      },
    },
    {
      title: { zh: '9. 数据保留', en: '9. Data Retention' },
      content: {
        zh: [
          '我们将保留您的个人信息，只要：',
          '• 您的账户处于活跃状态',
          '• 提供服务所必需',
          '• 遵守法律义务',
          '• 解决争议',
          '• 执行我们的协议',
          '',
          '当不再需要这些信息时，我们将安全地删除或匿名化处理。',
        ],
        en: [
          'We will retain your personal information as long as:',
          '• Your account is active',
          '• Necessary to provide services',
          '• Required to comply with legal obligations',
          '• Necessary to resolve disputes',
          '• Required to enforce our agreements',
          '',
          'When this information is no longer needed, we will securely delete or anonymize it.',
        ],
      },
    },
    {
      title: { zh: '10. 第三方链接', en: '10. Third-Party Links' },
      content: {
        zh: [
          '我们的网站可能包含指向第三方网站的链接。我们对这些网站的隐私做法不承担责任。',
          '',
          '我们建议您在离开我们的网站时阅读您访问的每个网站的隐私政策。',
        ],
        en: [
          'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites.',
          '',
          'We recommend that you read the privacy policy of each website you visit when leaving our site.',
        ],
      },
    },
    {
      title: { zh: '11. 营销通信', en: '11. Marketing Communications' },
      content: {
        zh: [
          '我们可能会向您发送有关我们服务、课程更新和特别优惠的营销信息。',
          '',
          '您可以随时通过以下方式选择退出：',
          '• 点击电子邮件中的"取消订阅"链接',
          '• 在账户设置中更新您的偏好',
          '• 联系我们的客服团队',
          '',
          '请注意，即使您选择退出营销通信，我们仍可能向您发送重要的服务相关通知。',
        ],
        en: [
          'We may send you marketing information about our services, course updates, and special offers.',
          '',
          'You can opt out at any time by:',
          '• Clicking the "unsubscribe" link in emails',
          '• Updating your preferences in account settings',
          '• Contacting our customer service team',
          '',
          'Please note that even if you opt out of marketing communications, we may still send you important service-related notifications.',
        ],
      },
    },
    {
      title: { zh: '12. 隐私政策更新', en: '12. Privacy Policy Updates' },
      content: {
        zh: [
          '我们可能会不时更新本隐私政策。我们将通过以下方式通知您任何更改：',
          '• 在本页面发布新的隐私政策',
          '• 更新"最后更新"日期',
          '• 通过电子邮件通知（对于重大更改）',
          '',
          '我们建议您定期查看本隐私政策以了解任何更改。在更改发布后继续使用我们的服务即表示您接受这些更改。',
        ],
        en: [
          'We may update this Privacy Policy from time to time. We will notify you of any changes by:',
          '• Posting the new Privacy Policy on this page',
          '• Updating the "Last Updated" date',
          '• Email notification (for significant changes)',
          '',
          'We recommend that you review this Privacy Policy periodically for any changes. Your continued use of our services after changes are posted constitutes your acceptance of such changes.',
        ],
      },
    },
    {
      title: { zh: '13. 联系我们', en: '13. Contact Us' },
      content: {
        zh: [
          '如果您对本隐私政策有任何疑问或担忧，请通过以下方式联系我们：',
          '',
          '电子邮件：1526824204@qq.com',
          '机构名称：魔道院 (Magic Academy)',
          '',
          '我们将在收到您的询问后的5个工作日内回复。',
        ],
        en: [
          'If you have any questions or concerns about this Privacy Policy, please contact us:',
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
      <div className="relative bg-gradient-to-r from-orange-500 to-blue-500 text-white py-20 overflow-hidden">
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
              {isZh ? '隐私政策' : 'Privacy Policy'}
            </h1>

            <p className="text-xl opacity-90 mb-4">
              {isZh
                ? '我们重视并保护您的个人隐私'
                : 'We value and protect your personal privacy'}
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
          className="bg-white border-l-4 border-orange-500 p-8 shadow-lg mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            {isZh
              ? '欢迎来到魔道院 (Magic Academy)。我们致力于保护您的隐私和个人信息安全。本隐私政策说明了我们如何收集、使用、披露和保护您在使用我们的培训服务（包括职业交易培训和个人品牌孵化）时提供的信息。使用我们的服务即表示您同意本隐私政策中描述的做法。'
              : 'Welcome to Magic Academy (魔道院). We are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information you provide when using our training services (including Professional Trading Training and Personal Brand Incubation). By using our services, you agree to the practices described in this Privacy Policy.'}
          </p>
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                {section.title[language]}
              </h2>

              <div className="space-y-3 text-gray-700 leading-relaxed">
                {section.content[language].map((paragraph, pIdx) => (
                  <p key={pIdx} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-orange-500 to-blue-500 p-8 text-white text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="text-2xl font-black">
              {isZh ? '您的隐私很重要' : 'Your Privacy Matters'}
            </h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            {isZh
              ? '如有任何问题或疑虑，请随时联系我们'
              : 'If you have any questions or concerns, please feel free to contact us'}
          </p>
          <button
            onClick={() => setIsEmailModalOpen(true)}
            className="px-8 py-3 bg-white text-orange-600 font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
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
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-bold hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            {isZh ? '返回首页' : 'Back to Home'}
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
