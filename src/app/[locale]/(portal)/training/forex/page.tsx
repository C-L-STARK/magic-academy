"use client";

import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import EmailContactModal from '@/components/custom/EmailContactModal';
import TradingCareerStory from '@/components/custom/TradingCareerStory';
import { useLanguage } from '@/contexts/LanguageContext';
import LocaleLink from '@/components/navigation/LocaleLink';
import Image from 'next/image';

export default function TradingTrainingPage() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  const handleApply = () => {
    setIsEmailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Orange Theme */}
      <div className="relative min-h-screen flex items-center overflow-hidden -mt-16 pt-16"
        style={{
          background: 'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 50%, #FFAE5D 100%)',
        }}>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circles */}
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-white/20"
            style={{ top: '10%', left: '5%' }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            style={{ top: '60%', right: '10%' }}
            animate={{
              y: [0, -40, 0],
              x: [0, -30, 0],
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
                <div className="inline-block px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-orange-200 shadow-lg">
                  <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">
                    {isZh ? '职业交易培训' : 'Professional Trading Training'}
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900">
                  {isZh ? '30天成就' : 'Become A'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                    {isZh ? '职业交易员' : 'Pro Trader'}
                  </span>
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  {isZh
                    ? '系统化培训 + 实战考核 + 资金支持，从零基础到独立交易员的完整路径。精准筛选，快速成长，高额分成。'
                    : 'Systematic training + practical assessment + funding support. Complete path from beginner to independent trader with precise selection and high profit share.'}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-orange-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                      30{isZh ? '天' : 'D'}
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '系统培训' : 'Training'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-orange-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                      60-90%
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '利润分成' : 'Profit Share'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl px-6 py-3 border-2 border-orange-200 shadow-lg">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                      10-15%
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase">
                      {isZh ? '通过率' : 'Pass Rate'}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleApply}
                    className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isZh ? '立即申请' : 'Apply Now'}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>

                  <LocaleLink
                    href="/psychology-test"
                    className="group px-10 py-5 bg-white border-2 border-orange-500 text-orange-600 font-bold text-lg transition-all duration-300 hover:bg-orange-50 flex items-center justify-center gap-2"
                  >
                    {isZh ? '心理测评' : 'Psychology Test'}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocaleLink>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Trading Chart Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] hidden lg:block"
            >
              <div className="relative w-full h-full">
                {/* Simulated Trading Chart */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-4 border-orange-200 p-8 shadow-2xl">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-black text-gray-900">XAUUSD</div>
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                        +12.5%
                      </div>
                    </div>

                    {/* Mock Chart Bars */}
                    <div className="flex-1 flex items-end justify-around gap-2">
                      {[65, 82, 75, 90, 78, 95, 88, 92, 85, 98, 92, 100].map((height, idx) => (
                        <motion.div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: idx * 0.1, duration: 0.6 }}
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 border-2 border-green-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '盈利单' : 'Wins'}</div>
                        <div className="text-2xl font-black text-green-600">85%</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 border-2 border-orange-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '总收益' : 'Profit'}</div>
                        <div className="text-2xl font-black text-orange-600">+248%</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 border-2 border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">{isZh ? '交易日' : 'Days'}</div>
                        <div className="text-2xl font-black text-blue-600">30</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tags */}
                <motion.div
                  className="absolute -top-6 right-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 shadow-xl font-bold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {isZh ? '实盘数据' : 'Live Data'}
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 left-12 bg-white border-2 border-orange-200 px-6 py-3 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="text-sm text-gray-600">{isZh ? '月收入' : 'Monthly'}</div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                    {isZh ? '¥30,000+' : '$4,200+'}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trading Career Story Section */}
      <TradingCareerStory />

      {/* Why Choose Us Section */}
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
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                {isZh ? '核心优势' : 'Core Advantages'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '为什么选择我们' : 'Why Choose Us'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '我们专注筛选和培养真正适合交易的人才，用最短时间达到专家10-20年的交易水平'
                : 'We focus on selecting and cultivating truly suited traders, achieving expert-level skills in minimal time'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: isZh ? '精准筛选' : 'Precise Selection',
                desc: isZh
                  ? '30个工作日内判断是否适合外汇交易，避免浪费时间。不适合我们会如实告知，适合则全力培养。每个人只有一次进入的机会，我们珍惜每一位学员。'
                  : 'Determine suitability within 30 working days. Honest feedback if not suited, full support if suited. One chance per person - we value every student.',
                stats: isZh ? '30天评估' : '30-Day Assessment',
              },
              {
                number: '02',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: isZh ? '快速成长' : 'Rapid Growth',
                desc: isZh
                  ? '科学避开错误定式，让合适的人在30个工作日内达到专家10-20年的外汇交易水平。系统化的培训体系，确保每一步都走在正确的道路上。'
                  : 'Scientifically avoid common pitfalls. Qualified individuals reach expert-level (10-20 years equivalent) in just 30 working days through systematic training.',
                stats: isZh ? '10-20年水平' : '10-20Y Level',
              },
              {
                number: '03',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: isZh ? '高额分成' : 'High Commission',
                desc: isZh
                  ? '战利品至少60%属于你，随能力提升最高可达90%以上。荣辱与共，合作共赢。我们相信，只有学员成功，我们才能成功。'
                  : 'Minimum 60% profit share, up to 90%+ with skill growth. Shared success, mutual victory. Your success is our success.',
                stats: isZh ? '60-90%分成' : '60-90% Share',
              },
              {
                number: '04',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: isZh ? '资金支持' : 'Funding Support',
                desc: isZh
                  ? '通过考核后提供交易资金，从小额实盘到大额矩阵，随着你的能力提升逐步增加仓位规模。无需自有资金，专注提升交易技能。'
                  : 'Capital provided after passing assessment. From small live accounts to large matrix, position size grows with your skills. Focus on trading, not funding.',
                stats: isZh ? '无需自有资金' : 'No Own Capital',
              },
              {
                number: '05',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: isZh ? '系统培训' : 'Systematic Training',
                desc: isZh
                  ? '5个阶段完整培训体系：规则学习、盈利练习、盈利考核、小额实盘、大额矩阵。每个阶段都有明确的目标和考核标准，确保稳步提升。'
                  : 'Complete 5-stage system: rule learning, profit practice, assessment, small live, large matrix. Clear goals and standards at each stage.',
                stats: isZh ? '5阶段体系' : '5-Stage System',
              },
              {
                number: '06',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: isZh ? '严格纪律' : 'Strict Discipline',
                desc: isZh
                  ? '军事化管理，培养职业素养。交易纪律就像法律法规，触碰一次就会被标上不信任的标签。我们用最严格的标准，培养最优秀的交易员。'
                  : 'Military-style management to develop professional qualities. Trading discipline is like law - one violation marks distrust. Highest standards for best traders.',
                stats: isZh ? '军事化管理' : 'Military-Style',
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
                <div className="bg-gradient-to-br from-white to-orange-50/30 p-8 border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-black text-orange-100 group-hover:text-orange-200 transition-colors">
                      {feature.number}
                    </span>
                    <div className="p-3 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature.stats}</span>
                  </div>

                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #9BACD8, transparent)' }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 30-Day Training Path Section */}
      <div className="relative py-24 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
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
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
              <span className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 uppercase">
                {isZh ? '培训路径' : 'Training Path'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-orange-400 to-transparent"></div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6">
              {isZh ? '30天成长计划' : '30-Day Growth Plan'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {isZh
                ? '从新手到职业交易员的完整路径，每个阶段都有明确的目标和考核标准'
                : 'Complete path from novice to professional trader with clear goals and standards at each stage'}
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: '01',
                days: isZh ? '第1-5个工作日' : 'Days 1-5',
                title: isZh ? '规则学习' : 'Rule Learning',
                desc: isZh
                  ? '完成15个标准进场点练习，熟悉外汇交易系统基本规则。这是基础中的基础，必须完全掌握。'
                  : 'Complete 15 standard entry point exercises, master basic forex trading system rules. Foundation of all trading.',
                requirements: [
                  isZh ? '15个标准进场点不出错' : '15 standard entry points without errors',
                  isZh ? '完全理解交易规则' : 'Full understanding of trading rules',
                  isZh ? '能够独立识别进场信号' : 'Independently identify entry signals',
                ],
                warning: isZh ? '5个工作日内未通过规则考核将被劝退' : 'Failure to pass within 5 days results in dismissal',
                color: '#9BACD8',
              },
              {
                phase: '02',
                days: isZh ? '第6-20个工作日' : 'Days 6-20',
                title: isZh ? '盈利练习' : 'Profit Practice',
                desc: isZh
                  ? '找到适合自己的外汇交易品种，按照盈利考核标准进行练习。这个阶段需要大量实践，找到最适合自己的交易节奏。'
                  : 'Find suitable currency pairs and practice according to profitability standards. Extensive practice to find your trading rhythm.',
                requirements: [
                  isZh ? '第一周：多练习，找到适合自己的品种（4-6个观察，稳定到2个）' : 'Week 1: Practice extensively, find suitable pairs (4-6 observe, stable at 2)',
                  isZh ? '第二周：不错单、不漏单、不亏损' : 'Week 2: No missed entries, no missed exits, no losses',
                  isZh ? '第三周：务必做到操作一致性' : 'Week 3: Achieve operational consistency',
                ],
                warning: null,
                color: '#9BACD8',
              },
              {
                phase: '03',
                days: isZh ? '第21-30个工作日' : 'Days 21-30',
                title: isZh ? '盈利考核' : 'Profit Assessment',
                desc: isZh
                  ? '连续10个工作日每天做到不错单、不漏单、不亏损。这是最关键的考核阶段，决定是否能进入实盘。'
                  : 'Achieve 10 consecutive working days without errors or losses. Critical assessment determining live trading eligibility.',
                requirements: [
                  isZh ? '连续10个工作日盈利' : '10 consecutive profitable days',
                  isZh ? '每天不错单、不漏单、不亏损' : 'Daily: no missed entries, exits, or losses',
                  isZh ? '保持操作一致性' : 'Maintain operational consistency',
                ],
                warning: isZh ? '30个工作日内未完成连续10天盈利，劝退处理' : 'Failure to complete 10 consecutive days within 30 working days results in dismissal',
                color: '#9BACD8',
              },
              {
                phase: '04',
                days: isZh ? '小额实盘 20工作日' : 'Small Live 20 Days',
                title: isZh ? '小额实盘' : 'Small Live Trading',
                desc: isZh
                  ? '小额实盘仍旧只有一次机会，超出回撤要求即视为失败。20美金仓位，配资100美金。'
                  : 'One chance only. Exceeding drawdown = failure. $20 position, $100 capital allocation.',
                requirements: [
                  isZh ? '保持盈利考核要求：1-3品种，不错单，不漏单，不亏损' : 'Maintain profit standards: 1-3 pairs, no errors or losses',
                  isZh ? '日回撤不超过20%' : 'Daily drawdown < 20%',
                  isZh ? '周总回撤不超过30%' : 'Weekly total drawdown < 30%',
                ],
                warning: isZh ? '超过回撤要求，劝退处理' : 'Exceeding drawdown results in dismissal',
                color: '#FF9A3C',
              },
              {
                phase: '★',
                days: isZh ? '职业交易员阶段' : 'Professional Trader',
                title: isZh ? '大额矩阵' : 'Large Matrix',
                desc: isZh
                  ? '小额实盘20个工作日固化无误，进入大额矩阵。拥有完全自由的工作时间，随着盈利曲线上升，逐步增加仓位规模和分润比例。'
                  : 'After 20 days of small live consolidation, enter large matrix. Complete time freedom, position and profit share grow with performance.',
                requirements: [
                  isZh ? '完全自由的工作时间' : 'Complete time freedom',
                  isZh ? '每天不限制交易量，保证每日不亏即可' : 'No daily trade limits, just maintain no losses',
                  isZh ? '仓位随盈利曲线逐步提升' : 'Position size grows with profit curve',
                  isZh ? '分润比例随能力提升（60%-90%+）' : 'Profit share grows with skill (60%-90%+)',
                ],
                warning: null,
                color: '#FFAE5D',
              },
            ].map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative"
              >
                <div
                  className={`relative bg-white p-10 border-2 transition-all duration-300 hover:shadow-2xl ${
                    idx === 4
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-blue-600'
                      : 'border-orange-200 hover:border-orange-400'
                  }`}
                >
                  {/* Phase Badge */}
                  <div
                    className={`absolute -left-6 -top-6 w-16 h-16 flex items-center justify-center text-3xl font-black shadow-xl ${
                      idx === 4
                        ? 'bg-white text-orange-600 border-4 border-blue-600'
                        : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white border-4 border-white'
                    }`}
                  >
                    {stage.phase}
                  </div>

                  <div className="ml-8">
                    {/* Days Badge */}
                    <div
                      className={`inline-block px-5 py-2 text-sm font-bold mb-4 ${
                        idx === 4
                          ? 'bg-white/20 text-white border-2 border-white/30'
                          : 'bg-orange-100 text-orange-600 border-2 border-orange-200'
                      }`}
                    >
                      {stage.days}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-3xl font-black mb-4 ${
                        idx === 4 ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-lg leading-relaxed mb-6 ${
                        idx === 4 ? 'text-white/90' : 'text-gray-700'
                      }`}
                    >
                      {stage.desc}
                    </p>

                    {/* Requirements */}
                    <div
                      className={`p-6 border-l-4 mb-6 ${
                        idx === 4
                          ? 'bg-white/10 border-white/50'
                          : 'bg-orange-50 border-orange-400'
                      }`}
                    >
                      <h4
                        className={`text-sm font-bold mb-3 uppercase tracking-wider ${
                          idx === 4 ? 'text-white/80' : 'text-orange-600'
                        }`}
                      >
                        {isZh ? '要求' : 'Requirements'}
                      </h4>
                      <ul className="space-y-2">
                        {stage.requirements.map((req, ridx) => (
                          <li
                            key={ridx}
                            className={`flex items-start gap-3 ${
                              idx === 4 ? 'text-white/90' : 'text-gray-700'
                            }`}
                          >
                            <svg
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                idx === 4 ? 'text-white' : 'text-orange-500'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm font-medium">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Warning */}
                    {stage.warning && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <div className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-bold text-red-700">
                            ⚠️ {stage.warning}
                          </span>
                        </div>
                      </div>
                    )}
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

      {/* Requirements Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(249, 133, 19, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 133, 19, 0.3) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>

          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-orange-400 uppercase">
                {isZh ? '入学条件' : 'Requirements'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              {isZh ? '你是否符合条件' : 'Do You Qualify'}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {isZh
                ? '严格的准入标准，确保培训质量 - 每个人只有一次进入的机会'
                : 'Strict admission standards ensure quality - everyone has only one chance'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Basic Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black">{isZh ? '基本条件' : 'Basic Requirements'}</h3>
              </div>
              <ul className="space-y-4">
                {[
                  isZh ? '大专学历以上，35岁以下' : 'Associate degree or higher, under 35',
                  isZh ? '认真、细心、耐心、心理健康' : 'Serious, meticulous, patient, mentally healthy',
                  isZh ? '连续30个工作日(约45天)' : 'Continuous 30 working days (~45 days)',
                  isZh ? 'Windows电脑，独立交易环境' : 'Windows PC, independent trading environment',
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Time Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black">{isZh ? '时间要求' : 'Time Requirements'}</h3>
              </div>
              <ul className="space-y-4">
                {[
                  isZh ? '周一到周五，每天 13:30-21:30 在线' : 'Mon-Fri, online daily 1:30 PM-9:30 PM',
                  isZh ? '北京时间 20:00 团队长会议室复盘' : 'Beijing Time 8:00 PM team debrief',
                  isZh ? '全程专注，不受干扰' : 'Full focus, no distractions',
                  isZh ? '严格遵守交易纪律和会议纪律' : 'Strictly follow trading and meeting discipline',
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-2 border-blue-500/50 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-3">
                  {isZh ? '⚠️ 重要提醒' : '⚠️ Important Notice'}
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed mb-3">
                  {isZh
                    ? '每个人只有一次进入的机会。请在充分了解并确认自己符合全部条件后再申请。'
                    : 'Everyone has only ONE opportunity to enter. Apply only after fully understanding and confirming you meet ALL requirements.'}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  {isZh
                    ? '我们专注培养真正适合外汇交易的人才。在外汇交易的世界里，有些人天生不适合。如果你属于这一类，或许其他行业更能发挥你的长处。'
                    : 'We focus on cultivating individuals truly suited for forex trading. In this world, some people are inherently unsuited. If this describes you, other industries may better suit your strengths.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trading Rules Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-400"></div>
              <span className="text-sm font-bold tracking-widest text-red-500 uppercase">
                {isZh ? '交易铁律' : 'Trading Rules'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '不可触碰的红线' : 'Inviolable Red Lines'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '交易纪律就像法律法规，触碰一次就会被标上不信任的标签。交易就像做手术，务必严肃，容不得任何不遵守规则的人。'
                : 'Trading discipline is like law - one violation marks distrust. Trading is like surgery, utmost seriousness required, no tolerance for rule violators.'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trading Rules */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-red-50/30 p-8 border-l-4 border-red-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {isZh ? '交易规则红线' : 'Trading Rule Red Lines'}
              </h3>
              <ul className="space-y-4">
                {[
                  isZh ? '硬止损线不能移动，位置务必设置正确' : 'Hard stop-loss cannot be moved, must be correctly set',
                  isZh ? '只有标准和激进两种进场方式' : 'Only standard and aggressive entry methods',
                  isZh ? '不能跨越红折线持仓' : 'Cannot hold positions across red lines',
                  isZh ? '止损和出场必须满足规则条件' : 'Stop-loss and exit must meet rule conditions',
                  isZh ? '5倍以上利润才能使用止盈线' : 'Take-profit only with 5x+ profit',
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-black text-xl flex-shrink-0">❌</span>
                    <span className="text-gray-700 font-medium">{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Meeting Rules */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-red-50/30 p-8 border-l-4 border-red-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {isZh ? '会议纪律红线' : 'Meeting Discipline Red Lines'}
              </h3>
              <ul className="space-y-4">
                {[
                  isZh ? '学员之间不得加微信、电话等联系方式' : 'Students must not add WeChat, phone, or other contacts',
                  isZh ? '会议室内保持严肃，不得谈论除交易外其他话题' : 'Maintain seriousness in meetings, no non-trading topics',
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-black text-xl flex-shrink-0">❌</span>
                    <span className="text-gray-700 font-medium">{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-yellow-800 font-bold">
                  ⚠️ {isZh ? '触碰一次：不信任标签，无法进入矩阵' : 'One violation: Distrust mark, cannot enter matrix'}
                </p>
                <p className="text-sm text-yellow-800 font-bold mt-2">
                  ⚠️ {isZh ? '触碰两次：直接劝退离开团队' : 'Two violations: Direct dismissal from team'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Resources Section */}
      <div className="relative py-24 bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                {isZh ? '了解职业' : 'Understand'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '交易员职业' : 'Trader Profession'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '交易员是个自由职业，不受时间空间限制 - 通过纪录片深入了解这个职业'
                : 'Traders are freelancers unrestricted by time and space - understand this profession through documentaries'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://www.bilibili.com/video/BV19a411X7eY"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">📈</div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold mb-4">
                {isZh ? '豆瓣评分 8.7' : 'Rating 8.7'}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                {isZh ? '百万美金交易员' : 'Million Dollar Trader'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isZh
                  ? '这部纪录片展现了交易员培训的真实过程，从筛选到培养，再到成为职业交易员的完整路径。了解交易员这个职业的真实面貌。'
                  : 'This documentary reveals the true process of trader training, from selection to development to becoming a professional trader.'}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all">
                {isZh ? '观看视频' : 'Watch Video'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                style={{ background: 'linear-gradient(135deg, #9BACD8, transparent)' }}
              />
            </motion.a>

            <motion.a
              href="https://www.bilibili.com/video/BV1FZ4y1o734"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white p-10 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">💰</div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold mb-4">
                {isZh ? '豆瓣评分 8.0' : 'Rating 8.0'}
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                {isZh ? '交易员：转瞬百万' : 'Trader: Instant Millions'}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isZh
                  ? '深入展示交易员的日常工作和心理压力，揭示在二级市场中如何做出快速决策，以及职业交易员所需要的心理素质和专业技能。'
                  : 'In-depth look at traders\' daily work and psychological stress, revealing quick decision-making in secondary markets and required psychological and professional skills.'}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all">
                {isZh ? '观看视频' : 'Watch Video'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                style={{ background: 'linear-gradient(135deg, #9BACD8, transparent)' }}
              />
            </motion.a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                {isZh ? '常见问题' : 'FAQ'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '常见问题解答' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh
                ? '开启职业交易之路前，先读懂这些问题'
                : 'Understand these questions before starting your professional trading journey'}
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* About Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50/30 to-white p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {isZh ? '关于培训' : 'About Training'}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '什么是 FX Killer 外汇交易员培训？' : 'What is FX Killer Forex Trader Training?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '我们是一个专注于筛选和培养顶尖外汇交易员的专业培训平台。我们致力于用最短的时间从大量人群中筛选出少数适合做交易的人才并进行培养。我们将在 30个工作日 内判断新人是否是做交易的可塑之才。通过考核者将获得资金支持，成为独立交易员或基金经理。'
                      : 'We are a professional training platform focused on selecting and cultivating elite forex traders. We are committed to identifying, in the shortest time possible, the few individuals from a large population who are suited for trading, and providing them with cultivation. Within 30 working days, we will determine whether newcomers have the potential to become traders. Those who pass the assessment will receive capital support and become independent traders or fund managers.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '为什么筛选如此严格？' : 'Why is the selection so strict?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '我们的理念是培养真正适合的人，留下极少数，劝返大多数。在交易的世界里，有些人天生不适合。我们用严格的筛选机制确保只有真正适合的人才能进入。这不是贬低，而是对每个人负责——不让不适合的人在二级市场上成为韭菜。'
                      : 'Our philosophy is to cultivate those truly suited, retain the few, and advise the majority to pursue other paths. In the trading world, some people are inherently unsuited. We use a strict selection mechanism to ensure only those truly suited can enter. This isn\'t disparagement, but responsibility for everyone—preventing unsuited individuals from becoming cannon fodder in secondary markets.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '30个工作日会学习什么？' : 'What will I learn in 30 working days?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>{isZh ? '第1-5天' : 'Days 1-5'}</strong>: {isZh ? '完成规则练习，熟悉交易系统基本规则（15个标准进场点不出错）' : 'Complete rules practice, familiarize with basic trading system rules (15 standard entry points without errors)'}
                    <br />
                    <strong>{isZh ? '第6-20天' : 'Days 6-20'}</strong>: {isZh ? '盈利练习，找到适合自己的品种，要求连续10个工作日不错单、不漏单、不亏损' : 'Profit practice, find suitable currency pairs, requirement: 10 consecutive working days with no missed entries, no missed exits, no losses'}
                    <br />
                    <strong>{isZh ? '第21-30天' : 'Days 21-30'}</strong>: {isZh ? '小额实盘训练（如通过盈利考核）' : 'Small-amount live training (if profit assessment passed)'}
                    <br />
                    {isZh ? '软件到期前不能完成考核，将被劝退。' : 'Failure to complete assessment before software expiration results in dismissal.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '为什么只有一次机会？' : 'Why only one chance?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '因为交易就像做手术，务必严肃，容不得任何不遵守规则的人。一旦开始职业交易训练，会投入大量精力和时间去培养。每个人的时间和精力都很宝贵，我们需要确保双方的投入都是值得的。匹配度决定一切。'
                      : 'Because trading is like performing surgery—utmost seriousness required, no tolerance for rule violators. Once professional trading training begins, significant energy and time are invested in cultivation. Everyone\'s time and energy are precious; we need to ensure both parties\' investment is worthwhile. Compatibility determines everything.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '通过考核的概率有多大？' : 'What is the probability of passing the assessment?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '根据历史数据，通过考核的概率 < 18%。但对你而言，要么是1%，要么是99%。这取决于你是否真正适合做交易，是否严格遵守纪律，是否能承受压力并保持情绪稳定。'
                      : 'Based on historical data, the probability of passing is < 18%. But for you, it\'s either 1% or 99%. It depends on whether you\'re truly suited for trading, whether you strictly follow discipline, and whether you can handle pressure while maintaining emotional stability.'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Learning & Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50/30 to-white p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {isZh ? '学习与要求' : 'Learning & Requirements'}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '培训是免费的吗？' : 'Is the training free?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '是的，培训过程不收取学费。但你需要付出的是时间和精力。免费的往往是最"贵"的——一旦被选中进入培训，需要全身心投入。真正能坚持下来的人虽然不会为金钱所累，但的确"任重道远"。'
                      : 'Yes, the training process is free of tuition. But what you need to invest is time and energy. Free is often the most "expensive"—once selected for training, full dedication is required. Those who truly persevere won\'t be burdened by money, but indeed "the road is long and arduous."'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '需要什么样的基础条件？' : 'What are the basic requirements?'}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>{isZh ? '大专学历以上，35岁以下' : 'Associate degree or higher, under 35 years old'}</li>
                    <li>{isZh ? '认真、细心、耐心、心理健康' : 'Serious, meticulous, patient, psychologically healthy'}</li>
                    <li>{isZh ? '连续30个工作日可投入' : 'Continuous 30 working days available'}</li>
                    <li>{isZh ? 'Windows电脑，独立的交易环境' : 'Windows computer, independent trading environment'}</li>
                    <li>{isZh ? '周一到周五，每天最低保证 13:30 - 21:30 在线' : 'Monday to Friday, minimum guaranteed online 1:30 PM - 9:30 PM'}</li>
                    <li>{isZh ? '北京时间20:00参加团队长会议室复盘' : 'Beijing Time 8:00 PM team leader conference room debrief'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '5天不能完成规则考核会怎样？' : 'What happens if I can\'t complete rules assessment in 5 days?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '5天不能完成规则考核，将酌情劝退处理。我们的筛选机制非常严格，如果连基本规则都无法快速掌握，说明可能不适合这个行业。这是为了保护你，避免浪费更多时间。'
                      : 'Failure to complete rules assessment in 5 days results in discretionary dismissal. Our selection mechanism is very strict. If you can\'t quickly master basic rules, it indicates you may not be suited for this industry. This protects you from wasting more time.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '通过考核后可以获得什么？' : 'What do I get after passing the assessment?'}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li><strong>{isZh ? '小额实盘' : 'Small-amount live'}</strong>: {isZh ? '20美金仓位，配资100美金' : '$20 position, $100 capital allocation'}</li>
                    <li><strong>{isZh ? '大额实盘' : 'Large-amount live'}</strong>: {isZh ? '根据小额实盘表现设定' : 'Set based on small-amount live performance'}</li>
                    <li><strong>{isZh ? '分润比例' : 'Profit share'}</strong>: {isZh ? '60%-90%+（随能力提升而提高）' : '60%-90%+ (increases with ability improvement)'}</li>
                    <li><strong>{isZh ? '完全自由' : 'Complete freedom'}</strong>: {isZh ? '不受时间空间限制，可以在世界任何角落工作' : 'Unrestricted by time and space, can work anywhere in the world'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '学习过程中可以提问吗？' : 'Can I ask questions during learning?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '可以。每天北京时间20:00有团队长会议室复盘，可以直接开麦与团队长沟通。其他时间可以通过微信与团队长联系。但请注意：学员之间不得加微信、电话等联系方式，这是纪律红线。'
                      : 'Yes. Daily Beijing Time 8:00 PM team leader conference room debrief where you can communicate directly with the team leader. Other times you can contact via WeChat. But note: Students must not add WeChat, phone, or other contact methods between each other—this is a discipline red line.'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Income & Profit Share */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50/30 to-white p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {isZh ? '收入与分润' : 'Income & Profit Share'}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '关于收入、社保、底薪和薪资结构' : 'About Income, Benefits, Base Salary, and Compensation Structure'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '任何盈利导向的企业，都不会做亏本买卖。在我们这个极简行业，所有价值都源于二级市场的买卖差价——简单、直接、残酷。在你证明盈利能力（通过考核）之前，我们不会投入一分钱。考核通过后，你的实际收入，绝不会超过你在"战场"（二级市场）上缴获的"战利品"。'
                      : 'Any profit-oriented enterprise won\'t do business at a loss. In our minimalist industry, all value comes from market price differences—simple, direct, brutal. Before you prove profitability (pass assessment), we won\'t invest a penny. After passing, your actual income will never exceed the "spoils" you capture in the "battlefield" (secondary market).'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '通过考核后的收入分配如何？' : 'How is income distributed after passing the assessment?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '你在战场获得的战利品，至少 60% 属于你个人，随着你的能力提升，这个比例也会随之提高，至高可达 90% 以上。剩下的属于我们，所以我们会用心培养每一位准交易员——你战场战利品多，我们战利品也才会多，我们是一条船上的战友，荣辱与共！'
                      : 'The spoils you capture on the battlefield—at least 60% belong to you personally. As your abilities improve, this ratio increases, reaching up to 90% and beyond. The rest belongs to us, so we will cultivate every trainee wholeheartedly—the more spoils you get, the more we get. We are comrades on the same boat, sharing honor and disgrace!'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '小额实盘的风控要求是什么？' : 'What are the risk control requirements for small-amount live trading?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    {isZh ? '小额实盘只有一次机会，请珍惜：' : 'Small-amount live trading has only one chance, please cherish it:'}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>{isZh ? '日回撤不超过 20%' : 'Daily drawdown not exceeding 20%'}</li>
                    <li>{isZh ? '周总回撤不得超过 30%' : 'Weekly total drawdown not exceeding 30%'}</li>
                    <li>{isZh ? '超过回撤要求即视为失败，劝退' : 'Exceeding drawdown requirements is considered failure, resulting in dismissal'}</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    {isZh ? '这是硬性规定，目的是培养你的风险管理能力。' : 'This is a hard requirement aimed at cultivating your risk management ability.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '为什么不需要付学费？' : 'Why is there no tuition fee?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '跟传统学科不同，不需要你付出数万美金的"学费"，毕竟这是一个钱生钱的行当。我们的模式是：我们培养你，你通过后我们分享你的战果。这是一种合作共赢的关系，而非雇佣关系。你是一个独立的创业者，独立的个体。'
                      : 'Unlike traditional disciplines, you don\'t need to pay tens of thousands in "tuition"—after all, this is a business of money making money. Our model: we cultivate you, after you pass we share your results. This is a mutual cooperation relationship, not employment. You are an independent entrepreneur, an independent individual.'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trading Discipline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-red-50/30 to-white p-8 border-l-4 border-red-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {isZh ? '交易纪律' : 'Trading Discipline'}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '什么是交易铁律？' : 'What are Trading Iron Laws?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '交易纪律就像法律法规，触碰一次就会被标上不信任的标签。一旦触碰，就再也无法进入矩阵团队；第二次触碰红线，直接劝退离开团队。交易就像做手术，务必严肃，容不得任何不遵守规则的人。'
                      : 'Trading discipline is like laws and regulations; touching it once brands you as untrustworthy. Once touched, you can never enter the matrix team; a second violation of red lines results in direct dismissal from the team. Trading is like performing surgery—utmost seriousness required, no tolerance for rule violators.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '交易规则红线有哪些？' : 'What are the trading rule red lines?'}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>{isZh ? '硬止损线不能移动，位置务必设置正确' : 'Hard stop-loss lines cannot be moved; positions must be set correctly'}</li>
                    <li>{isZh ? '只有标准和激进两种进场方式（盈利训练阶段额外增加破止损线入场），其他都是错单' : 'Only standard and aggressive entry methods (profit training phase additionally includes break-stop-loss-line entry), others are errors'}</li>
                    <li>{isZh ? '不能跨越红折线持仓' : 'Cannot hold positions across red lines'}</li>
                    <li>{isZh ? '止损和出场必须满足规则条件，不满足一律按错单处理' : 'Stop-loss and exit must meet rule conditions; non-compliance is treated as errors'}</li>
                    <li>{isZh ? '5倍以上利润才能使用止盈线' : 'Take-profit lines can only be used with 5x+ profit'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '会议纪律红线有哪些？' : 'What are the meeting discipline red lines?'}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li><strong>{isZh ? '学员之间不得加微信、电话等联系方式' : 'Students must not add WeChat, phone, or other contact methods between each other'}</strong></li>
                    <li>{isZh ? '会议室内保持严肃，不得谈论除交易外其他话题' : 'Maintain seriousness in conference rooms; no discussion of topics other than trading'}</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    {isZh ? '违反以上任何一条，都将被视为触碰红线。' : 'Violating any of the above will be considered touching red lines.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '如果不适合做交易会怎样？' : 'What happens if I\'m not suited for trading?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '如果在30个工作日内，我们判断你不适合做交易，会如实告知，并劝诫其此生不要踏足二级市场。这不是侮辱，而是保护。不适合的人进入二级市场，最终只会成为韭菜，亏损累累。我们帮你避免这个结局。'
                      : 'If within 30 working days we judge you unsuited for trading, we will be honest and advise you never to enter secondary markets. This isn\'t insult, but protection. Unsuited people entering secondary markets ultimately only become cannon fodder with cumulative losses. We help you avoid this outcome.'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Other Questions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50/30 to-white p-8 border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {isZh ? '其他问题' : 'Other Questions'}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '为什么说"年轻人更适合"？' : 'Why are "young people more suitable"?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '国内多数"经验丰富"的中年交易员，往往是失败者：不良习惯缠身，或在不上不下的泥沼中挣扎。经验有时是枷锁，而非利剑。真正适配的是20-35岁的年轻人：学习迅捷、适应力强，能直面市场风暴。我们计划在30个工作日内，让年轻人直达那些"专家"10-20年的盈利高度。'
                      : 'Most "experienced" middle-aged traders in China are often failures: plagued by bad habits or struggling in mediocrity. Experience can sometimes be shackles, not a sword. Truly suited are 20-35-year-old young people: quick learners, highly adaptable, able to face market storms directly. We plan to bring young people to the profitability level of those "experts" with 10-20 years of experience within 30 working days.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '交易有风险吗？' : 'Does trading carry risk?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>{isZh ? '交易存在较高风险' : 'Trading carries high risk'}</strong>{isZh ? '，可能导致本金损失。市场波动、杠杆使用、情绪化决策等都可能带来亏损。我们会系统教授风险管理知识，但请务必记住：' : ', potentially leading to principal loss. Market volatility, leverage use, emotional decisions can all bring losses. We will systematically teach risk management knowledge, but please remember:'} <strong>{isZh ? '交易有风险，投资需谨慎' : 'Trading carries risk, investment requires caution'}</strong>{isZh ? '，不要投入超过您承受能力的资金。' : '—do not invest funds beyond your capacity to bear.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '我可以一边工作一边参加培训吗？' : 'Can I participate in training while working?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '不可以。培训要求连续30个工作日，周一到周五每天最低保证 13:30 - 21:30 在线。这是全职投入的筛选和培养过程。如果无法保证时间投入，建议不要申请，因为这会浪费双方的时间。'
                      : 'No. Training requires continuous 30 working days, Monday to Friday minimum guaranteed online 1:30 PM - 9:30 PM. This is a full-time selection and cultivation process. If you cannot guarantee time investment, we suggest not applying, as this wastes both parties\' time.'}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {isZh ? '通过考核后还需要每天在线吗？' : 'Do I still need to be online daily after passing the assessment?'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {isZh
                      ? '不需要。通过考核进入大额矩阵后，你将拥有完全自由的工作时间，每天不限制交易量，只需保证每日不亏的底线即可。你可以在阿尔卑斯山滑雪，夏威夷游泳或北海道发呆……金钱会源源不断地自动流入你的口袋。'
                      : 'No. After passing and entering the large-amount matrix, you will have complete freedom in working hours, no daily trading volume limits, just maintain the baseline of no daily losses. You can ski in the Alps, swim in Hawaii, or daydream in Hokkaido... Money will continuously flow into your pocket.'}
                  </p>
                </div>
              </div>
            </motion.div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                {isZh ? '现在就开始' : 'Start Now'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              {isZh ? '准备好了吗？' : 'Ready?'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {isZh ? '开启职业交易之路' : 'Start Your Trading Career'}
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              {isZh
                ? '记住：最大风险是淘汰，成本是时间。若明朗、准备就绪，预约面试。通过后，入训。'
                : 'Remember: The greatest risk is elimination, the cost is time. If clear and ready, schedule an interview. After passing, enter training.'}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: '⚡', value: isZh ? '10-15%' : '10-15%', label: isZh ? '最终通过率' : 'Pass Rate' },
                { icon: '⏱️', value: isZh ? '45天' : '45D', label: isZh ? '时间成本' : 'Time Cost' },
                { icon: '💰', value: isZh ? '完全免费' : 'Free', label: isZh ? '金钱成本' : 'Money Cost' },
                { icon: '🎯', value: isZh ? '只有一次' : 'One', label: isZh ? '机会次数' : 'Chance' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleApply}
                className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isZh ? '立即预约面试' : 'Schedule Interview'}
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <LocaleLink
                href="/psychology-test"
                className="group px-12 py-6 bg-white/5 border-2 border-orange-500 text-orange-400 font-black text-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 flex items-center justify-center gap-3"
              >
                {isZh ? '完成心理测评' : 'Psychology Test'}
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </LocaleLink>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              {isZh
                ? '请在充分了解并确认自己符合全部条件后再申请'
                : 'Please apply only after fully understanding and confirming you meet all requirements'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title={isZh ? '外汇交易员面试' : 'Forex Trader Interview'}
      />
    </div>
  );
}
