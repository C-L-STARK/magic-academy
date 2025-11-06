"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';
import EmailContactModal from '@/components/custom/EmailContactModal';

export default function OnlineEducationPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const divisionColor = siteConfig.divisions.education.color;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b-2 border-gray-800" style={{ background: `linear-gradient(to bottom right, ${divisionColor}, #1e40af, #1e3a8a)` }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-6 py-2 bg-white/20 border border-white/30 backdrop-blur-sm mb-6">
              <span className="text-sm font-semibold tracking-wider text-white">
                🎓 {siteConfig.divisions.education.name[language]}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
              {isZh ? '知识变现' : 'Knowledge Monetization'}
              <br />
              <span className="text-4xl md:text-5xl font-normal text-blue-100">
                {isZh ? '打造你的在线教育帝国' : 'Build Your Online Education Empire'}
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {siteConfig.divisions.education.description[language]}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-8 py-4 bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transition-all"
              >
                {isZh ? '立即咨询' : 'Contact Now'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            {isZh ? '你将学到什么？' : 'What Will You Learn?'}
          </h2>
          <p className="text-lg text-gray-600">
            {isZh ? '从0到1打造在线教育业务的完整路径' : 'Complete path to build online education business from scratch'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              phase: isZh ? '第一阶段' : 'Phase 1',
              title: isZh ? '课程策划与设计' : 'Course Planning & Design',
              topics: [
                isZh ? '如何找到你的细分市场' : 'How to find your niche market',
                isZh ? '课程大纲设计方法论' : 'Course outline design methodology',
                isZh ? '内容生产流程优化' : 'Content production workflow optimization',
                isZh ? '教学方法与互动设计' : 'Teaching methods & interactive design',
              ],
            },
            {
              phase: isZh ? '第二阶段' : 'Phase 2',
              title: isZh ? '平台选择与搭建' : 'Platform Selection & Setup',
              topics: [
                isZh ? '主流在线教育平台对比' : 'Comparison of major platforms',
                isZh ? '独立网站搭建教程' : 'Independent website setup tutorial',
                isZh ? '支付系统集成方案' : 'Payment system integration',
                isZh ? '学员管理系统使用' : 'Student management system usage',
              ],
            },
            {
              phase: isZh ? '第三阶段' : 'Phase 3',
              title: isZh ? '营销获客策略' : 'Marketing & Acquisition',
              topics: [
                isZh ? 'SEO与内容营销' : 'SEO & content marketing',
                isZh ? '社交媒体推广技巧' : 'Social media promotion skills',
                isZh ? '付费广告投放策略' : 'Paid advertising strategies',
                isZh ? '转化率优化方法' : 'Conversion rate optimization',
              ],
            },
            {
              phase: isZh ? '第四阶段' : 'Phase 4',
              title: isZh ? '规模化与变现' : 'Scaling & Monetization',
              topics: [
                isZh ? '多课程产品矩阵' : 'Multi-course product matrix',
                isZh ? '会员制与订阅模式' : 'Membership & subscription models',
                isZh ? '企业培训业务拓展' : 'Corporate training expansion',
                isZh ? '被动收入构建' : 'Passive income building',
              ],
            },
          ].map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 border-2 hover:shadow-xl transition-all"
              style={{ borderColor: idx % 2 === 0 ? divisionColor : '#64748b' }}
            >
              <div className="text-sm font-bold mb-2" style={{ color: divisionColor }}>
                {phase.phase}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-3">
                {phase.topics.map((topic, tidx) => (
                  <li key={tidx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: divisionColor }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Cases Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {isZh ? '成功案例' : 'Success Stories'}
            </h2>
            <p className="text-lg text-gray-600">
              {isZh ? '学员的真实成就' : 'Real achievements from our students'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: isZh ? '张老师' : 'Teacher Zhang',
                field: isZh ? '英语教学' : 'English Teaching',
                achievement: isZh ? '6个月打造月收入5万+的在线英语课程' : 'Built $7k+/month English course in 6 months',
                students: '1200+',
              },
              {
                name: isZh ? '李教练' : 'Coach Li',
                field: isZh ? '健身培训' : 'Fitness Training',
                achievement: isZh ? '从线下教练转型，3个月实现在线学员300+' : 'Transitioned from offline, 300+ online students in 3 months',
                students: '800+',
              },
              {
                name: isZh ? '王顾问' : 'Consultant Wang',
                field: isZh ? '职业咨询' : 'Career Consulting',
                achievement: isZh ? '打造个人品牌，年收入突破100万' : 'Built personal brand, annual income exceeded $140k',
                students: '500+',
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border-2 border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: divisionColor }}>
                    {story.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.field}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {story.achievement}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" style={{ color: divisionColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-bold" style={{ color: divisionColor }}>{story.students}</span>
                  <span className="text-gray-600">{isZh ? '学员' : 'Students'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            {isZh ? '课程特色' : 'Course Features'}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '📚',
              title: isZh ? '系统化课程' : 'Systematic Course',
              desc: isZh ? '4大阶段16个核心模块' : '4 phases, 16 core modules',
            },
            {
              icon: '🎥',
              title: isZh ? '实战案例' : 'Real Cases',
              desc: isZh ? '20+真实案例拆解' : '20+ real case studies',
            },
            {
              icon: '👨‍🏫',
              title: isZh ? '1对1辅导' : '1-on-1 Coaching',
              desc: isZh ? '每周导师答疑' : 'Weekly mentor Q&A',
            },
            {
              icon: '🎯',
              title: isZh ? '项目实操' : 'Hands-on Project',
              desc: isZh ? '打造你的第一门课' : 'Create your first course',
            },
            {
              icon: '💼',
              title: isZh ? '商业模板' : 'Business Templates',
              desc: isZh ? '提供全套工具包' : 'Complete toolkit provided',
            },
            {
              icon: '🌐',
              title: isZh ? '平台资源' : 'Platform Resources',
              desc: isZh ? '对接优质平台' : 'Connect with quality platforms',
            },
            {
              icon: '👥',
              title: isZh ? '校友网络' : 'Alumni Network',
              desc: isZh ? '终身学习社群' : 'Lifelong learning community',
            },
            {
              icon: '🚀',
              title: isZh ? '持续更新' : 'Continuous Updates',
              desc: isZh ? '课程定期迭代' : 'Regular course iterations',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-center p-6 bg-white border border-gray-200 hover:border-blue-500:border-blue-500 transition-all"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              {isZh ? '课程价格' : 'Course Pricing'}
            </h2>
          </div>

          <div className="bg-white p-10 border-2" style={{ borderColor: divisionColor }}>
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-bold mb-4">
                {isZh ? '限时优惠' : 'LIMITED OFFER'}
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-4">
                <span className="text-5xl font-black text-gray-900">
                  {isZh ? '¥1,999' : '$1,999'}
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  {isZh ? '¥4,999' : '$4,999'}
                </span>
              </div>
              <p className="text-gray-600">
                {isZh ? '60% OFF 仅限前100名' : '60% OFF Limited to first 100 students'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  {isZh ? '课程包含：' : 'Includes:'}
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    isZh ? '4大阶段完整课程' : '4-phase complete course',
                    isZh ? '20+实战案例' : '20+ real cases',
                    isZh ? '每周1对1导师辅导' : 'Weekly 1-on-1 coaching',
                    isZh ? '商业工具包' : 'Business toolkit',
                    isZh ? '终身学习社群' : 'Lifelong community',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5" style={{ color: divisionColor }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4">
                  {isZh ? '学习方式：' : 'Learning Format:'}
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• {isZh ? '录播课程随时学习' : 'On-demand video lessons'}</li>
                  <li>• {isZh ? '每周直播答疑' : 'Weekly live Q&A'}</li>
                  <li>• {isZh ? '作业实战练习' : 'Hands-on assignments'}</li>
                  <li>• {isZh ? '项目导师点评' : 'Project mentor reviews'}</li>
                  <li>• {isZh ? '学习周期3-6个月' : '3-6 months learning period'}</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="w-full px-8 py-4 font-bold text-lg text-white hover:opacity-90 transition-all"
              style={{ backgroundColor: divisionColor }}
            >
              {isZh ? '立即报名' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            {isZh ? '常见问题' : 'FAQ'}
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: isZh ? '我没有教学经验，能学吗？' : 'Can I learn without teaching experience?',
              a: isZh ? '可以！只要你在某个领域有专业知识或技能，我们会教你如何将其转化为在线课程。' : 'Yes! As long as you have expertise in a field, we\'ll teach you how to turn it into an online course.',
            },
            {
              q: isZh ? '需要投入多少启动资金？' : 'How much startup capital is needed?',
              a: isZh ? '最低只需几百元。我们会教你如何利用免费或低成本工具启动在线教育业务。' : 'As low as a few hundred dollars. We\'ll teach you how to use free or low-cost tools to start.',
            },
            {
              q: isZh ? '多久能看到收益？' : 'How soon can I see results?',
              a: isZh ? '根据你的投入程度，一般3-6个月可以完成首门课程并开始招生变现。' : 'Depending on your effort, typically 3-6 months to complete your first course and start earning.',
            },
            {
              q: isZh ? '课程有效期多久？' : 'How long is the course valid?',
              a: isZh ? '课程内容终身有效，可以随时回看。社群和导师辅导服务为期6个月。' : 'Course content is lifetime access. Community and coaching support for 6 months.',
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 border-2 border-gray-200"
            >
              <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-700 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '咨询在线教育课程' : 'Inquire About Online Education Course'}
      />
    </div>
  );
}
