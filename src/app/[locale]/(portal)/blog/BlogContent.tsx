"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, language } = useLanguage();

  // Get category from URL or default to 'trading'
  const categoryFromUrl = searchParams.get('category') as 'trading' | 'branding' | null;
  const [selectedMainCategory, setSelectedMainCategory] = useState<'trading' | 'branding'>(categoryFromUrl || 'trading');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  // Update URL when category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedMainCategory) {
      params.set('category', selectedMainCategory);
    }
    router.replace(`/${language}/blog?${params.toString()}`, { scroll: false });
  }, [selectedMainCategory, language, router, searchParams]);

  // Define trading and branding categories
  const tradingCategories = ['all', 'forex', 'gold', 'crypto', 'psychology', 'professional', 'wisdom'];
  const brandingCategories = ['all', 'content-creation', 'platform-ops', 'monetization', 'ai-tools', 'growth-strategy'];

  // Filter posts by main category
  const mainCategoryPosts = blogPosts.filter(post => {
    if (selectedMainCategory === 'trading') {
      // Trading posts are those with forex, gold, crypto, psychology, professional, wisdom, about categories
      return tradingCategories.includes(post.category) || post.category === 'about';
    } else {
      // Branding posts are those with content-creation, platform-ops, monetization, ai-tools, growth-strategy
      return brandingCategories.includes(post.category);
    }
  });

  // Filter by subcategory
  const currentCategories = selectedMainCategory === 'trading' ? tradingCategories : brandingCategories;
  const filteredPosts = selectedSubCategory === 'all'
    ? mainCategoryPosts
    : mainCategoryPosts.filter(post => post.category === selectedSubCategory);

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Category names
  const getCategoryName = (cat: string) => {
    const names: Record<string, {zh: string, en: string}> = {
      // Common
      all: {zh: '全部', en: 'All'},

      // Trading categories
      about: {zh: '关于我们', en: 'About'},
      forex: {zh: '外汇交易', en: 'Forex'},
      gold: {zh: '黄金交易', en: 'Gold'},
      crypto: {zh: '数字货币', en: 'Crypto'},
      psychology: {zh: '交易心理', en: 'Psychology'},
      professional: {zh: '职业交易员', en: 'Professional'},
      wisdom: {zh: '交易智慧', en: 'Wisdom'},

      // Personal branding categories
      'content-creation': {zh: '内容创作', en: 'Content Creation'},
      'platform-ops': {zh: '平台运营', en: 'Platform Ops'},
      'monetization': {zh: '变现技巧', en: 'Monetization'},
      'ai-tools': {zh: 'AI工具', en: 'AI Tools'},
      'growth-strategy': {zh: '增长策略', en: 'Growth Strategy'},
    };
    return names[cat]?.[language] || cat;
  };

  // Main category color themes
  const mainCategoryTheme = {
    trading: {
      primary: '#F98513',
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200',
      hover: 'hover:bg-orange-100',
    },
    branding: {
      primary: '#9BACD8',
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-100',
    },
  };

  const theme = mainCategoryTheme[selectedMainCategory];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
              {language === 'zh' ? '博客文章' : 'Blog Posts'}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            {language === 'zh' ? '专业内容' : 'Expert Content'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'zh'
              ? '深度解析交易技巧与个人品牌打造，助你在数字时代脱颖而出'
              : 'In-depth insights on trading and personal branding to help you excel in the digital age'}
          </p>
        </motion.div>

        {/* Main Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setSelectedMainCategory('trading');
              setSelectedSubCategory('all');
            }}
            className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${
              selectedMainCategory === 'trading'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            {language === 'zh' ? '职业交易培训' : 'Trading Training'}
          </button>
          <button
            onClick={() => {
              setSelectedMainCategory('branding');
              setSelectedSubCategory('all');
            }}
            className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${
              selectedMainCategory === 'branding'
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
            }`}
          >
            {language === 'zh' ? '个人品牌孵化' : 'Brand Incubation'}
          </button>
        </div>

        {/* Subcategory Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {currentCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedSubCategory(cat)}
              className={`px-6 py-3 font-semibold text-sm transition-all duration-300 ${
                selectedSubCategory === cat
                  ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg scale-105`
                  : `bg-white ${theme.text} ${theme.border} border-2 ${theme.hover}`
              }`}
            >
              {getCategoryName(cat)}
            </button>
          ))}
        </div>

        {/* Posts Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            {language === 'zh' ? '找到' : 'Found'} <span className="font-bold text-gray-900">{sortedPosts.length}</span> {language === 'zh' ? '篇文章' : 'posts'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedMainCategory}-${selectedSubCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sortedPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white border-2 border-gray-200 hover:border-gray-300 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => router.push(`/${language}/blog/${post.slug}`)}
              >
                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${theme.gradient} text-white text-xs font-bold mb-3`}>
                    {getCategoryName(post.category)}
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(post.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all">
                    {post.title[language]}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt[language]}
                  </p>

                  {/* Read More Link */}
                  <div className={`inline-flex items-center gap-2 font-bold text-sm ${theme.text} group-hover:gap-3 transition-all`}>
                    <span>{language === 'zh' ? '阅读全文' : 'Read More'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${theme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {sortedPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'zh' ? '暂无文章' : 'No Posts Yet'}
            </h3>
            <p className="text-gray-600">
              {language === 'zh' ? '该分类下暂无内容，请选择其他分类' : 'No content in this category, please select another'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
