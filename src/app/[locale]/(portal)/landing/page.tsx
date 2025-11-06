"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';
import EmailContactModal from '@/components/custom/EmailContactModal';
import LocaleLink from '@/components/navigation/LocaleLink';

export default function LandingPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const divisions = [
    {
      name: isZh ? '职业交易培训' : 'Trading Training',
      description: isZh
        ? '30天成就职业交易员，系统化培训+实战考核+资金支持'
        : '30 days to professional trader, systematic training + assessment + funding',
      icon: '📈',
      color: '#F98513',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'linear-gradient(135deg, #F4F1EC 0%, #F98513 50%, #FFAE5D 100%)',
      path: '/training/forex',
      features: [
        isZh ? '30天系统化培训' : '30-day systematic training',
        isZh ? '精准筛选，通过率10-15%' : 'Precise selection, 10-15% pass rate',
        isZh ? '60-90%利润分成' : '60-90% profit share',
        isZh ? '资金支持，无需自有资金' : 'Funding support, no own capital needed',
      ],
    },
    {
      name: isZh ? '个人品牌孵化' : 'Brand Incubation',
      description: isZh
        ? '12周打造个人影响力，从定位到变现的完整体系'
        : '12 weeks to build influence, complete system from positioning to monetization',
      icon: '📱',
      color: '#9BACD8',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 50%, #B8C9E8 100%)',
      path: '/training/social-media',
      features: [
        isZh ? '12周系统化培训' : '12-week systematic training',
        isZh ? '全平台运营策略（8+平台）' : 'Multi-platform strategy (8+ platforms)',
        isZh ? 'AI工具加持，10倍提效' : 'AI-powered, 10x efficiency',
        isZh ? '终身学习社群支持' : 'Lifetime learning community',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative -mt-16 pt-16 min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F4F1EC 0%, #F98513 30%, #9BACD8 70%, #B8C9E8 100%)',
        }}>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-white/20"
            style={{ top: '10%', right: '5%' }}
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            style={{ bottom: '60%', left: '10%' }}
            animate={{
              y: [0, 40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating dots */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-8xl font-black leading-tight text-gray-900 mb-6">
              {isZh ? '开启你的' : 'Start Your'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-500 to-blue-600">
                {isZh ? '职业新征程' : 'Professional Journey'}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              {isZh
                ? '职业交易员培训 × 个人品牌孵化 - 两大核心板块，助你实现财务自由与个人影响力'
                : 'Professional Trading × Personal Branding - Two core divisions to achieve financial freedom and personal influence'}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-orange-200 shadow-lg">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  30{isZh ? '天' : 'D'}
                </div>
                <div className="text-xs text-gray-600 font-bold uppercase">
                  {isZh ? '交易培训' : 'Trading'}
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-blue-200 shadow-lg">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                  12{isZh ? '周' : 'W'}
                </div>
                <div className="text-xs text-gray-600 font-bold uppercase">
                  {isZh ? '品牌孵化' : 'Branding'}
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-gray-200 shadow-lg">
                <div className="text-3xl font-black text-gray-900">
                  8+
                </div>
                <div className="text-xs text-gray-600 font-bold uppercase">
                  {isZh ? '主流平台' : 'Platforms'}
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsEmailModalOpen(true)}
              className="group px-12 py-6 bg-gradient-to-r from-orange-500 via-blue-500 to-blue-600 text-white font-black text-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isZh ? '立即咨询' : 'Inquire Now'}
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Two Training Divisions Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9BACD8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {isZh ? '核心板块' : 'Core Divisions'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '选择适合你的方向' : 'Choose Your Path'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '两大培训板块，两种职业发展路径，助你实现财务自由与个人价值'
                : 'Two training divisions, two career paths to achieve financial freedom and personal value'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                {/* Card with gradient background on hover */}
                <div
                  className="relative bg-white p-10 border-2 border-gray-200 hover:border-transparent transition-all duration-300 h-full overflow-hidden"
                  style={{
                    borderColor: division.color,
                  }}
                >
                  {/* Hover gradient background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ background: division.bgGradient }}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-6xl mb-6">{division.icon}</div>

                    {/* Title */}
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      {division.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {division.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {division.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: division.color }}
                          >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <LocaleLink
                      href={division.path}
                      className="group/btn flex items-center justify-center gap-2 w-full px-8 py-4 text-white font-bold text-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden"
                      style={{
                        background: `linear-gradient(to right, ${division.color}, ${division.color}dd)`,
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isZh ? '了解详情' : 'Learn More'}
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </LocaleLink>
                  </div>

                  {/* Corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                    style={{ background: `radial-gradient(circle, ${division.color}, transparent)` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {isZh ? '核心优势' : 'Core Advantages'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '为什么选择我们' : 'Why Choose Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '系统化培训体系，专业导师团队，终身学习社群，助你快速成长'
                : 'Systematic training, professional mentors, lifetime community for rapid growth'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: isZh ? '实战导向' : 'Practice-Oriented',
                desc: isZh
                  ? '所有课程均来自一线实战经验，理论结合实践，快速应用。从真实案例出发，教你可复制的成功方法。'
                  : 'All courses from frontline practice, theory meets practice. Learn replicable success methods from real cases.',
                color: '#F98513',
              },
              {
                icon: '✨',
                title: isZh ? '精准筛选' : 'Precise Selection',
                desc: isZh
                  ? '我们只培养真正适合的人，宁缺毋滥。通过科学评估体系，确保每位学员都能获得最大价值。'
                  : 'We only train those truly suited, quality over quantity. Scientific assessment ensures maximum value for every student.',
                color: '#9BACD8',
              },
              {
                icon: '🚀',
                title: isZh ? '持续支持' : 'Continuous Support',
                desc: isZh
                  ? '终身学习社群，导师持续答疑，定期分享最新策略。与优秀同行者共同成长，资源持续赋能。'
                  : 'Lifetime community, continuous mentor support, regular strategy updates. Grow with excellent peers, ongoing resource empowerment.',
                color: '#6366F1',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-white p-8 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 h-full">
                  <div className="text-center">
                    <div className="text-6xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                    style={{ background: `radial-gradient(circle, ${item.color}, transparent)` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                {isZh ? '现在就开始' : 'Start Now'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              {isZh ? '准备好了吗？' : 'Ready?'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-blue-600">
                {isZh ? '开启你的职业新篇章' : 'Start Your New Chapter'}
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {isZh
                ? '选择适合你的培训板块，与我们一起踏上成长之旅'
                : 'Choose your training division and embark on a growth journey with us'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isZh ? '立即咨询' : 'Inquire Now'}
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <LocaleLink
                href="/"
                className="group px-12 py-6 bg-white/5 border-2 border-white/30 text-white font-black text-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 flex items-center justify-center gap-3"
              >
                {isZh ? '返回首页' : 'Back to Home'}
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </LocaleLink>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              {isZh
                ? '专业导师团队，终身学习社群，助你快速成长'
                : 'Professional mentors, lifetime community for rapid growth'}
            </p>
          </motion.div>
        </div>
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
