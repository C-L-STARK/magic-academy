"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useRouter, useParams } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();
  const params = useParams();
  const language = (params?.locale as string) || 'zh';
  const isZh = language === 'zh';
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          router.push(`/${language}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [router, language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Success Icon with Magic Effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <svg className="w-16 h-16 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Title with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-6xl font-black mb-4"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {isZh ? '感谢您迈出第一步！' : 'Thank You for Taking the First Step!'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-2xl text-purple-300 font-bold mb-2">
            {isZh ? '入魔道 · 修心修身' : 'Enter the Magic Path · Cultivation Begins'}
          </p>
          <p className="text-lg text-gray-300">
            {isZh ? '自律即自由的修行之旅从这里开始' : 'Your journey to freedom through discipline starts here'}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
        >
          <p className="text-xl text-white leading-relaxed mb-4">
            {isZh
              ? '我们已经收到您的咨询信息'
              : 'We have received your inquiry'}
          </p>
          <p className="text-lg text-gray-300">
            {isZh
              ? '魔道院的专业导师团队会在'
              : 'Our professional mentors at Magic Academy will contact you within'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold text-2xl mx-2">
              {isZh ? '24小时内' : '24 hours'}
            </span>
            {isZh ? '与您取得联系' : ''}
          </p>
        </motion.div>

        {/* Five Demons Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-gray-400 text-sm mb-4">
            {isZh ? '准备好战胜内心的五大"魔念"了吗？' : 'Are you ready to overcome the five inner demons?'}
          </p>
          <div className="grid grid-cols-5 gap-3">
            {[
              { emoji: '😴', name: { zh: '懒惰', en: 'Laziness' } },
              { emoji: '🤑', name: { zh: '贪婪', en: 'Greed' } },
              { emoji: '😨', name: { zh: '恐惧', en: 'Fear' } },
              { emoji: '🤔', name: { zh: '犹豫', en: 'Hesitation' } },
              { emoji: '😤', name: { zh: '傲慢', en: 'Pride' } },
            ].map((demon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{demon.emoji}</div>
                <div className="text-white text-xs font-bold">{demon.name[isZh ? 'zh' : 'en']}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-300/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-white font-bold text-lg mb-1">
              {isZh ? '快速响应' : 'Quick Response'}
            </div>
            <div className="text-gray-300 text-sm">
              {isZh ? '24小时内专业回复' : '24-hour professional reply'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-300/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-white font-bold text-lg mb-1">
              {isZh ? '专业导师' : 'Expert Mentors'}
            </div>
            <div className="text-gray-300 text-sm">
              {isZh ? '一对一定制修行方案' : 'One-on-one customized plan'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-300/20 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-3">🎁</div>
            <div className="text-white font-bold text-lg mb-1">
              {isZh ? '免费资料包' : 'Free Resources'}
            </div>
            <div className="text-gray-300 text-sm">
              {isZh ? '修行入门学习资料' : 'Beginner cultivation materials'}
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button
            onClick={() => router.push(`/${language}`)}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {isZh ? '返回首页' : 'Back to Home'}
          </button>
          <button
            onClick={() => router.push(`/${language}/blog`)}
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            {isZh ? '浏览博客' : 'Browse Blog'}
          </button>
          <button
            onClick={() => router.push(`/${language}/training/forex`)}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {isZh ? '职业交易' : 'Trading Path'}
          </button>
        </motion.div>

        {/* Auto redirect notice with countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-gray-400 text-sm"
        >
          <p className="mb-2">
            {isZh
              ? `页面将在 ${countdown} 秒后自动返回首页...`
              : `Redirecting to home in ${countdown} seconds...`}
          </p>
          <div className="w-64 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 8, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-12 text-center"
        >
          <p className="text-purple-300 text-lg font-bold italic">
            "{isZh ? '自律即自由 · 修行即成长' : 'Discipline Brings Freedom · Cultivation Brings Growth'}"
          </p>
          <p className="text-gray-500 text-sm mt-2">
            — {isZh ? '魔道院' : 'Magic Academy'}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
