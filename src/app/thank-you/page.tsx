"use client";

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-8"
        >
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl lg:text-6xl font-black text-white mb-6"
        >
          感谢您的咨询！
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            我们已经收到您的信息
          </p>
          <p className="text-lg text-gray-400">
            我们的专业顾问团队会在<span className="text-orange-400 font-bold">24小时内</span>与您取得联系
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-white font-bold mb-1">快速响应</div>
            <div className="text-gray-400 text-sm">24小时内回复</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-white font-bold mb-1">专业咨询</div>
            <div className="text-gray-400 text-sm">一对一定制方案</div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
            <div className="text-3xl mb-2">🎁</div>
            <div className="text-white font-bold mb-1">免费资料</div>
            <div className="text-gray-400 text-sm">赠送学习资源包</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300"
          >
            返回首页
          </button>
          <button
            onClick={() => router.push('/blog')}
            className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            浏览博客
          </button>
        </motion.div>

        {/* Auto redirect notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm mt-8"
        >
          页面将在 5 秒后自动返回首页...
        </motion.p>
      </motion.div>
    </div>
  );
}
