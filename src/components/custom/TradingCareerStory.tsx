"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';

export default function TradingCareerStory() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const story = siteConfig.divisions.trading.fullStory[language].split('\n\n');

  const timeline = [
    {
      year: '1801',
      title: { zh: '伦敦证券交易所', en: 'London Stock Exchange' },
      desc: { zh: '证券化交易市场起源', en: 'Origin of securitized trading' },
    },
    {
      year: '1980s',
      title: { zh: '电子化交易兴起', en: 'Electronic Trading Emerges' },
      desc: { zh: '美国开创电子交易时代', en: 'US pioneers electronic trading' },
    },
    {
      year: '1990',
      title: { zh: '上海交易所成立', en: 'Shanghai Exchange Founded' },
      desc: { zh: '中国现代交易市场起步', en: 'China\'s modern trading begins' },
    },
    {
      year: '2025',
      title: { zh: '魔道院成立', en: 'Magic Academy Founded' },
      desc: { zh: '东方金融力量崛起', en: 'Eastern financial power rises' },
    },
  ];

  const challenges = [
    { icon: '🎓', text: { zh: '西方: 高门槛、长周期、低效率', en: 'West: High barriers, long cycles, low efficiency' } },
    { icon: '🌊', text: { zh: '东方: 体系缺失、鱼龙混杂', en: 'East: Lack of system, mixed quality' } },
    { icon: '💡', text: { zh: '魔道院: 批量培训、系统孵化', en: 'Magic Academy: Batch training, systematic incubation' } },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Icy Blue Background with Animated Frost Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #A8D8EA 0%, #9BACD8 50%, #B8E6F5 100%)',
              'linear-gradient(135deg, #B8E6F5 0%, #A8D8EA 50%, #9BACD8 100%)',
              'linear-gradient(135deg, #9BACD8 0%, #B8E6F5 50%, #A8D8EA 100%)',
              'linear-gradient(135deg, #A8D8EA 0%, #9BACD8 50%, #B8E6F5 100%)',
            ],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Ice Crystals */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <div className="w-full h-full bg-white/60 backdrop-blur-sm transform rotate-45"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
              {isZh ? '交易员职业' : 'Trading Career'}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8">
            {isZh ? '交易员是一个什么样的职业？' : 'What is a Trader?'}
          </h2>

          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 border-2 border-blue-200">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              {siteConfig.divisions.trading.tagline[language]}
            </div>
          </div>
        </motion.div>

        {/* Historical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black text-center mb-12 text-gray-900">
            {isZh ? '交易行业演变史' : 'Trading Industry Evolution'}
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-cyan-400"></div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-6 border-2 border-blue-200 hover:border-blue-400 transition-all text-center">
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 text-sm font-black shadow-lg">
                        {item.year}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-xl font-black text-gray-900 mb-2">
                        {item.title[language]}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.desc[language]}
                      </p>
                    </div>

                    {/* Connecting Dot */}
                    <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-white shadow-lg"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-black text-center mb-12 text-gray-900">
            {isZh ? '行业现状与挑战' : 'Industry Status & Challenges'}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 border-2 border-blue-200 text-center"
              >
                <div className="text-6xl mb-4">{challenge.icon}</div>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  {challenge.text[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Full Story - Expandable Sections */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-center mb-12 text-gray-900">
            {isZh ? '完整故事' : 'Full Story'}
          </h3>

          <div className="max-w-4xl mx-auto space-y-4">
            {story.map((paragraph, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/90 backdrop-blur-sm border-2 border-blue-100 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900">
                    {isZh ? `第 ${idx + 1} 段` : `Section ${idx + 1}`}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSection === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSection === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 py-6 border-t-2 border-blue-100 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {paragraph}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-12 text-white text-center"
        >
          <h3 className="text-4xl font-black mb-6">
            {isZh ? '构建属于东方的金融力量' : 'Build Eastern Financial Power'}
          </h3>
          <p className="text-xl opacity-90 mb-8">
            {isZh
              ? '在华尔街对全球金融市场具有显著影响力的当下，是时候构建一股属于东方的金融力量了'
              : 'At a time when Wall Street has significant influence over global financial markets, it is time to build a financial force belonging to the East'}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
              <div className="text-sm opacity-80 mb-1">{isZh ? '原理' : 'Principle'}</div>
              <div className="text-2xl font-black">{isZh ? '先赚钱，再学习' : 'Earn First, Learn Later'}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
              <div className="text-sm opacity-80 mb-1">{isZh ? '方式' : 'Method'}</div>
              <div className="text-2xl font-black">{isZh ? '边赚钱，边学习' : 'Earn While Learning'}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
              <div className="text-sm opacity-80 mb-1">{isZh ? '理念' : 'Philosophy'}</div>
              <div className="text-2xl font-black">{isZh ? '你材必有他用' : 'Your Talent Has Purpose'}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
