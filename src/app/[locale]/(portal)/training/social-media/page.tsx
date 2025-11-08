"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';
import EmailContactModal from '@/components/custom/EmailContactModal';
import BrandingStory from '@/components/custom/BrandingStory';
import LocaleLink from '@/components/navigation/LocaleLink';

export default function PersonalBrandPage() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleApply = () => {
    setIsEmailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Blue Theme */}
      <div className="relative min-h-screen flex items-center overflow-hidden -mt-16 pt-16"
        style={{
          background: 'linear-gradient(135deg, #F4F1EC 0%, #F98513 50%, #B8C9E8 100%)',
        }}>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circles */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-blue-200 shadow-lg">
                  <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                    {isZh ? '个人品牌孵化' : 'Personal Brand Incubation'}
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  {isZh ? '打造你的' : 'Build Your'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    {isZh ? '个人品牌' : 'Personal Brand'}
                  </span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  {isZh
                    ? '从定位到变现的完整体系，全平台运营策略，AI工具加持，12周打造你的个人影响力，实现知识变现。'
                    : 'Complete system from positioning to monetization. Multi-platform strategies with AI tools. Build your influence in 12 weeks and monetize your expertise.'}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-blue-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      12{isZh ? '周' : 'W'}
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '系统培训' : 'Training'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-blue-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      8+
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '主流平台' : 'Platforms'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-blue-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      100k+
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '粉丝增长' : 'Followers'}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex pt-4">
                  <button
                    onClick={handleApply}
                    className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isZh ? '立即咨询' : 'Inquire Now'}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Social Media Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] hidden lg:block"
            >
              <div className="relative w-full h-full">
                {/* Platform Icons Grid */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-4 border-blue-200 p-8 shadow-2xl">
                  <div className="h-full flex flex-col">
                    <div className="text-2xl font-black text-gray-900 mb-6 text-center">
                      {isZh ? '全平台覆盖' : 'Multi-Platform'}
                    </div>

                    <div className="flex-1 grid grid-cols-3 gap-4">
                      {[
                        { name: isZh ? '抖音' : 'Douyin', icon: '📹', color: 'from-gray-800 to-gray-900' },
                        { name: isZh ? '小红书' : 'RED', icon: '📕', color: 'from-red-500 to-pink-500' },
                        { name: 'B站', icon: '📺', color: 'from-blue-400 to-cyan-400' },
                        { name: isZh ? '快手' : 'Kuaishou', icon: '🎬', color: 'from-orange-500 to-orange-600' },
                        { name: 'YouTube', icon: '▶️', color: 'from-red-600 to-red-700' },
                        { name: 'Instagram', icon: '📷', color: 'from-purple-500 to-pink-500' },
                        { name: isZh ? '微博' : 'Weibo', icon: '🐦', color: 'from-red-500 to-orange-500' },
                        { name: isZh ? '知乎' : 'Zhihu', icon: '💡', color: 'from-orange-600 to-orange-700' },
                        { name: 'TikTok', icon: '🎵', color: 'from-gray-900 to-black' },
                      ].map((platform, idx) => (
                        <motion.div
                          key={idx}
                          className={`relative bg-gradient-to-br ${platform.color} p-4 shadow-lg group cursor-pointer overflow-hidden`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="relative z-10 text-center">
                            <div className="text-3xl mb-1">{platform.icon}</div>
                            <div className="text-xs font-bold text-white">{platform.name}</div>
                          </div>
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 border-2 border-green-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '粉丝增长' : 'Growth'}</div>
                        <div className="text-2xl font-black text-green-600">+385%</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 border-2 border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '互动率' : 'Engagement'}</div>
                        <div className="text-2xl font-black text-blue-600">12.5%</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 border-2 border-purple-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '变现' : 'Revenue'}</div>
                        <div className="text-2xl font-black text-purple-600">{isZh ? '¥8万+' : '$11k+'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tags */}
                <motion.div
                  className="absolute -top-6 left-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 shadow-xl font-bold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {isZh ? 'AI加持' : 'AI-Powered'}
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 right-12 bg-white border-2 border-blue-200 px-6 py-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-sm text-gray-600">{isZh ? '月收入' : 'Monthly'}</div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                    {isZh ? '¥80,000+' : '$11,200+'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Personal Branding Story Section */}
      <BrandingStory />

      {/* Why Choose Us Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F98513 1px, transparent 0)`,
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
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-blue-500 uppercase">
                {isZh ? '核心优势' : 'Core Advantages'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '为什么选择我们' : 'Why Choose Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '系统化培训体系，全平台运营策略，AI工具赋能，助你快速打造个人品牌影响力'
                : 'Systematic training, multi-platform strategies, AI-powered tools to help you rapidly build personal brand influence'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: isZh ? '精准定位' : 'Precise Positioning',
                desc: isZh
                  ? '帮助你找到最适合的个人品牌定位和内容方向。从自我分析到市场研究，从竞品对比到差异化策略，我们用科学的方法论帮你找准方向，避免走弯路。'
                  : 'Find the perfect brand positioning and content direction. From self-analysis to market research, competitor analysis to differentiation strategy - scientific methodology to find the right path.',
                stats: isZh ? '精准定位' : 'Precise Targeting',
              },
              {
                number: '02',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: isZh ? '内容创作' : 'Content Creation',
                desc: isZh
                  ? '掌握爆款内容创作公式和多种内容形式。从短视频到图文，从直播到音频，我们教你用AI工具提效，快速产出高质量内容，让创作不再困难。'
                  : 'Master viral content formulas and multiple formats. From short videos to graphics, live streams to audio - use AI tools for efficiency and quality content creation.',
                stats: isZh ? '爆款公式' : 'Viral Formula',
              },
              {
                number: '03',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: isZh ? '全平台运营' : 'Multi-Platform',
                desc: isZh
                  ? '覆盖抖音、小红书、B站、快手、YouTube等8+主流平台。我们教你每个平台的运营策略、算法规则、增长技巧，让你的影响力覆盖全网。'
                  : 'Cover 8+ platforms including Douyin, Xiaohongshu, Bilibili, YouTube. Learn platform-specific strategies, algorithm rules, and growth tactics for network-wide influence.',
                stats: isZh ? '8+平台' : '8+ Platforms',
              },
              {
                number: '04',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: isZh ? 'AI工具赋能' : 'AI-Powered',
                desc: isZh
                  ? '深度整合ChatGPT、Midjourney、剪映等AI工具。从文案创作到图片生成，从视频剪辑到数据分析，用AI提升10倍效率，让你专注于创意本身。'
                  : 'Deeply integrate ChatGPT, Midjourney, video editing and more. From copywriting to image generation, video editing to analytics - 10x efficiency with AI.',
                stats: isZh ? 'AI提效10倍' : '10x Efficiency',
              },
              {
                number: '05',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: isZh ? '多元变现' : 'Multi-Monetization',
                desc: isZh
                  ? '教你广告合作、知识付费、电商带货、私域运营等多种变现方式。从粉丝1000开始就能变现，不需要等到百万粉丝，让你边学边赚。'
                  : 'Learn ad partnerships, knowledge monetization, e-commerce, private domain ops and more. Start monetizing from 1000 followers - earn while you learn.',
                stats: isZh ? '多种变现方式' : 'Multiple Streams',
              },
              {
                number: '06',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: isZh ? '终身社群' : 'Lifetime Community',
                desc: isZh
                  ? '加入终身学习社群，与优秀同行者共同成长。定期分享最新玩法、资源对接、品牌合作机会，让你的个人品牌之路不孤单，资源持续赋能。'
                  : 'Join lifetime learning community with top creators. Regular updates on latest strategies, resource connections, brand partnerships - never alone on your brand journey.',
                stats: isZh ? '终身学习社群' : 'Lifetime Access',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-white to-blue-50/30 p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                      {feature.number}
                    </span>
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 text-sm font-bold text-blue-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature.stats}</span>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #F98513, transparent)' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 12-Week Training Path Section */}
      <div className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 uppercase">
                {isZh ? '培训路径' : 'Training Path'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6">
              {isZh ? '12周成长计划' : '12-Week Growth Plan'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {isZh
                ? '从定位到变现的完整路径，4个阶段系统化培养，每周实战练习，快速提升'
                : 'Complete journey from positioning to monetization with 4 systematic stages, weekly practice, rapid improvement'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: '01',
                weeks: isZh ? '第1-3周' : 'Weeks 1-3',
                title: isZh ? '定位与规划' : 'Positioning & Planning',
                desc: isZh
                  ? '找准你的个人品牌定位和目标受众。通过系统分析，确定内容方向和差异化策略。'
                  : 'Find your brand positioning and target audience. Through systematic analysis, determine content direction and differentiation strategy.',
                topics: [
                  isZh ? '个人IP定位方法论' : 'Personal branding methodology',
                  isZh ? '目标受众深度分析' : 'Deep target audience analysis',
                  isZh ? '内容方向规划与选择' : 'Content direction planning',
                  isZh ? '竞品研究与差异化定位' : 'Competitor research & differentiation',
                ],
                color: '#F98513',
              },
              {
                phase: '02',
                weeks: isZh ? '第4-6周' : 'Weeks 4-6',
                title: isZh ? '内容创作' : 'Content Creation',
                desc: isZh
                  ? '掌握爆款内容创作技巧和工具应用。从策划到产出，全流程实战训练。'
                  : 'Master viral content creation skills and tool application. Full process practical training from planning to production.',
                topics: [
                  isZh ? '爆款内容创作公式与技巧' : 'Viral content formula & techniques',
                  isZh ? '视频拍摄剪辑全流程' : 'Complete video production workflow',
                  isZh ? '图文设计与排版技巧' : 'Visual design & layout skills',
                  isZh ? 'AI工具深度应用（ChatGPT/Midjourney）' : 'Deep AI tool application (ChatGPT/Midjourney)',
                ],
                color: '#F98513',
              },
              {
                phase: '03',
                weeks: isZh ? '第7-9周' : 'Weeks 7-9',
                title: isZh ? '多平台运营' : 'Multi-Platform Operations',
                desc: isZh
                  ? '掌握8+主流平台的运营策略和增长技巧。平台算法解析，快速涨粉。'
                  : 'Master operations strategies and growth tactics for 8+ major platforms. Algorithm analysis for rapid follower growth.',
                topics: [
                  isZh ? '抖音/快手/B站深度运营' : 'Douyin/Kuaishou/Bilibili ops',
                  isZh ? '小红书/微博增长策略' : 'Xiaohongshu/Weibo growth',
                  isZh ? 'YouTube/Instagram/TikTok国际化' : 'YouTube/Instagram/TikTok international',
                  isZh ? '平台算法规则与流量密码' : 'Platform algorithm & traffic secrets',
                ],
                color: '#A8BAE0',
              },
              {
                phase: '04',
                weeks: isZh ? '第10-12周' : 'Weeks 10-12',
                title: isZh ? '变现与增长' : 'Monetization & Growth',
                desc: isZh
                  ? '多种变现方式实战，从广告合作到产品设计，实现知识变现和持续增长。'
                  : 'Multiple monetization methods in practice, from ad partnerships to product design, achieve knowledge monetization and continuous growth.',
                topics: [
                  isZh ? '广告合作谈判与报价策略' : 'Ad negotiation & pricing strategy',
                  isZh ? '私域流量运营与转化' : 'Private traffic ops & conversion',
                  isZh ? '知识付费产品设计' : 'Knowledge product design',
                  isZh ? '团队化运营与规模化增长' : 'Team ops & scalable growth',
                ],
                color: '#B8C9E8',
              },
            ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative bg-white p-10 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                  {/* Phase Badge */}
                  <div
                    className="absolute -left-6 -top-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-4 border-white flex items-center justify-center text-3xl font-black shadow-xl"
                  >
                    {stage.phase}
                  </div>

                  <div className="ml-8">
                    {/* Weeks Badge */}
                    <div className="inline-block px-5 py-2 bg-blue-100 text-blue-600 text-sm font-bold mb-4 border-2 border-blue-200">
                      {stage.weeks}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {stage.desc}
                    </p>

                    {/* Topics */}
                    <div className="p-6 bg-blue-50 border-l-4 border-blue-400 mb-6">
                      <h4 className="text-sm font-bold mb-3 uppercase tracking-wider text-blue-600">
                        {isZh ? '学习内容' : 'Topics'}
                      </h4>
                      <ul className="space-y-2">
                        {stage.topics.map((topic, tidx) => (
                          <li key={tidx} className="flex items-start gap-3 text-gray-700">
                            <svg
                              className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                    style={{ background: `linear-gradient(135deg, ${stage.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Success Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-blue-500 uppercase">
                {isZh ? '学员成就' : 'Success Stories'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '他们已经成功了' : 'They Already Succeeded'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '真实数据，真实成长。听听学员们如何从0到1打造个人品牌'
                : 'Real data, real growth. Hear how students built their brands from scratch'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: isZh ? '小王' : 'Xiao Wang',
                niche: isZh ? '职场技能' : 'Career Skills',
                achievement: isZh
                  ? '3个月从0涨粉2万，品牌合作月入5千+。从职场小白成长为垂直领域博主。'
                  : 'Grew from 0 to 20k followers in 3 months, earning $700+ monthly from brand deals. Became a niche blogger.',
                platforms: isZh ? '抖音 + 小红书' : 'Douyin + RED',
                followers: '2万+',
                income: isZh ? '¥5千+' : '$700+',
              },
              {
                name: isZh ? '阿丽' : 'A Li',
                niche: isZh ? '美妆穿搭' : 'Beauty & Fashion',
                achievement: isZh
                  ? '6个月涨粉8万，与10+品牌合作。实现从上班族到全职博主的转变。'
                  : 'Gained 80k followers in 6 months, partnered with 10+ brands. Transitioned from office worker to full-time creator.',
                platforms: isZh ? '小红书 + B站' : 'RED + Bilibili',
                followers: '8万+',
                income: isZh ? '¥2万+' : '$3k+',
              },
              {
                name: isZh ? '老张' : 'Lao Zhang',
                niche: isZh ? '创业分享' : 'Entrepreneurship',
                achievement: isZh
                  ? '全平台运营，打造个人品牌矩阵。月收入稳定超5万，实现知识变现。'
                  : 'Multi-platform operations, built brand matrix. Monthly income $7k+, achieved knowledge monetization.',
                platforms: isZh ? '全平台' : 'All Platforms',
                followers: isZh ? '20万+' : '200k+',
                income: isZh ? '¥5万+' : '$7k+',
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-white p-8 border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                      {story.name[0]}
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-lg">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.niche}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {story.achievement}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 border-2 border-blue-200">
                      <div className="text-xs text-gray-600 mb-1">{isZh ? '粉丝' : 'Followers'}</div>
                      <div className="text-xl font-black text-blue-600">{story.followers}</div>
                    </div>
                    <div className="bg-green-50 p-3 border-2 border-green-200">
                      <div className="text-xs text-gray-600 mb-1">{isZh ? '月收入' : 'Monthly'}</div>
                      <div className="text-xl font-black text-green-600">{story.income}</div>
                    </div>
                  </div>

                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 text-sm font-bold">
                    {story.platforms}
                  </div>

                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                    style={{ background: 'linear-gradient(135deg, #F98513, transparent)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Resources Section */}
      <div className="relative py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-blue-500 uppercase">
                {isZh ? '工具资源' : 'Tools & Resources'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '全套工具支持' : 'Complete Toolkit'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '提供内容创作、数据分析、运营管理全套工具和模板，让你事半功倍'
                : 'Complete toolkit and templates for content creation, analytics, and operations - maximize your efficiency'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: isZh ? '内容创作工具' : 'Content Creation',
                icon: '🎨',
                tools: [
                  { name: isZh ? 'ChatGPT文案生成' : 'ChatGPT Copywriting', desc: isZh ? 'AI智能文案创作' : 'AI smart copywriting' },
                  { name: isZh ? 'Midjourney配图' : 'Midjourney Images', desc: isZh ? 'AI生成精美配图' : 'AI-generated images' },
                  { name: isZh ? '剪映/CapCut剪辑' : 'Jianying/CapCut', desc: isZh ? '视频剪辑教程' : 'Video editing tutorials' },
                  { name: isZh ? 'Canva设计模板' : 'Canva Templates', desc: isZh ? '图文设计工具' : 'Visual design tool' },
                ],
                color: '#F98513',
              },
              {
                category: isZh ? '数据分析工具' : 'Analytics Tools',
                icon: '📊',
                tools: [
                  { name: isZh ? '飞瓜数据' : 'Feigua Data', desc: isZh ? '抖音数据分析' : 'Douyin analytics' },
                  { name: isZh ? '蝉妈妈' : 'Chanmama', desc: isZh ? '电商数据监测' : 'E-commerce monitoring' },
                  { name: 'Google Analytics', desc: isZh ? '流量数据分析' : 'Traffic analytics' },
                  { name: isZh ? '平台后台' : 'Platform Analytics', desc: isZh ? '各平台数据分析' : 'Platform data analysis' },
                ],
                color: '#A8BAE0',
              },
              {
                category: isZh ? '运营资源包' : 'Operations Kit',
                icon: '📦',
                tools: [
                  { name: isZh ? '爆款标题库' : 'Viral Title Library', desc: isZh ? '1000+爆款标题' : '1000+ viral titles' },
                  { name: isZh ? '脚本模板库' : 'Script Templates', desc: isZh ? '各类脚本模板' : 'Various script templates' },
                  { name: isZh ? '运营日历' : 'Content Calendar', desc: isZh ? '内容规划工具' : 'Content planning tool' },
                  { name: 'SOP', desc: isZh ? '标准化流程' : 'Standard workflows' },
                ],
                color: '#B8C9E8',
              },
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="bg-white p-8 border-2 border-blue-200 hover:border-blue-400 transition-all h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-5xl">{resource.icon}</div>
                    <h3 className="text-2xl font-black text-gray-900">
                      {resource.category}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {resource.tools.map((tool, tidx) => (
                      <li key={tidx} className="border-l-4 pl-4" style={{ borderColor: resource.color }}>
                        <div className="font-bold text-gray-900">{tool.name}</div>
                        <div className="text-sm text-gray-600">{tool.desc}</div>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                    style={{ background: `linear-gradient(135deg, ${resource.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border-2 border-blue-200 p-12 shadow-2xl">
              <div className="mb-6">
                <div className="inline-block w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-500 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                {isZh ? '准备好打造你的个人品牌了吗？' : 'Ready to Build Your Personal Brand?'}
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {isZh
                  ? '立即联系我们，了解更多关于个人品牌孵化的详细信息，我们将在24小时内回复您的咨询。'
                  : 'Contact us now to learn more about our personal brand incubation. We\'ll respond to your inquiry within 24 hours.'}
              </p>
              <button
                onClick={handleApply}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                {isZh ? '立即咨询' : 'Contact Us Now'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '咨询个人品牌孵化' : 'Inquire About Personal Branding'}
      />
    </div>
  );
}
