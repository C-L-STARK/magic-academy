"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogPage() {
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
      gradient: 'from-orange-500 to-orange-600',
      border: 'border-orange-500',
      bg: 'bg-orange-500',
      text: 'text-orange-500',
      hover: 'hover:border-orange-500',
      activeText: 'text-orange-600',
    },
    branding: {
      gradient: 'from-blue-500 to-blue-600',
      border: 'border-blue-500',
      bg: 'bg-blue-500',
      text: 'text-blue-500',
      hover: 'hover:border-blue-500',
      activeText: 'text-blue-600',
    },
  };

  const theme = mainCategoryTheme[selectedMainCategory];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Main Category Tabs - Clean Minimalist Design */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-6">
            <button
              onClick={() => {
                setSelectedMainCategory('trading');
                setSelectedSubCategory('all');
              }}
              className="group relative"
            >
              <div className={`px-8 py-3 transition-all duration-300 ${
                selectedMainCategory === 'trading'
                  ? 'text-orange-600 font-black'
                  : 'text-gray-600 font-bold hover:text-orange-600'
              }`}>
                {language === 'zh' ? '职业交易培训' : 'Trading Training'}
              </div>
              {selectedMainCategory === 'trading' && (
                <motion.div
                  layoutId="mainTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>

            <div className="h-6 w-px bg-gray-300"></div>

            <button
              onClick={() => {
                setSelectedMainCategory('branding');
                setSelectedSubCategory('all');
              }}
              className="group relative"
            >
              <div className={`px-8 py-3 transition-all duration-300 ${
                selectedMainCategory === 'branding'
                  ? 'text-blue-600 font-black'
                  : 'text-gray-600 font-bold hover:text-blue-600'
              }`}>
                {language === 'zh' ? '个人品牌孵化' : 'Brand Incubation'}
              </div>
              {selectedMainCategory === 'branding' && (
                <motion.div
                  layoutId="mainTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Category Filter */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-[96px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {currentCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedSubCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 text-sm font-bold whitespace-nowrap transition-all duration-300 rounded-lg ${
                  selectedSubCategory === category
                    ? `${theme.bg} text-white shadow-md`
                    : `bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-sm`
                }`}
              >
                {selectedSubCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 ${theme.bg} rounded-lg`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{getCategoryName(category)}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {sortedPosts.length > 0 ? (
            <motion.div
              key={selectedMainCategory + selectedSubCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => router.push(`/${language}/blog/${post.slug}`)}
                  className={`bg-white border-2 border-gray-200 ${theme.hover} transition-all cursor-pointer group overflow-hidden`}
                >
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className={`${theme.bg} text-white px-3 py-1 text-xs font-bold inline-block`}>
                      {language === 'zh' ? '精选' : 'Featured'}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-bold ${theme.text} uppercase`}>
                        {getCategoryName(post.category)}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs text-gray-600">
                        {post.readTime} {language === 'zh' ? '分钟阅读' : 'min read'}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-black text-gray-900 mb-3 group-hover:underline">
                      {post.title[language]}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt[language]}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="font-bold">{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className={`h-1 bg-gradient-to-r ${theme.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  ></div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 bg-gray-50 border-2 border-gray-200">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-600 text-lg font-bold mb-2">
                  {language === 'zh' ? '暂无文章' : 'No Articles Yet'}
                </p>
                <p className="text-gray-500 text-sm">
                  {language === 'zh'
                    ? '这个分类下还没有发布文章，敬请期待！'
                    : 'No articles published in this category yet. Stay tuned!'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
