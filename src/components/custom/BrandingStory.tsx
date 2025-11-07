"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';

export default function BrandingStory() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [selectedPath, setSelectedPath] = useState<number | null>(null);

  const story = siteConfig.divisions.creator.fullStory[language].split('\n\n');

  const careerPaths = [
    {
      icon: '📱',
      title: { zh: '自媒体博主', en: 'Social Media Influencer' },
      desc: { zh: '构建个人影响力', en: 'Build Personal Influence' },
      details: {
        zh: '全平台运营，打造独特内容IP，积累粉丝基础，建立个人品牌影响力',
        en: 'Multi-platform operation, create unique content IP, accumulate followers, establish personal brand influence'
      }
    },
    {
      icon: '🎯',
      title: { zh: 'IP操盘手', en: 'IP Manager' },
      desc: { zh: '打造商业品牌', en: 'Create Commercial Brands' },
      details: {
        zh: '系统化IP策划，商业化运营，品牌价值最大化，实现规模化变现',
        en: 'Systematic IP planning, commercial operation, maximize brand value, achieve large-scale monetization'
      }
    },
    {
      icon: '🎬',
      title: { zh: 'MCN老板', en: 'MCN Boss' },
      desc: { zh: '孵化内容矩阵', en: 'Incubate Content Matrix' },
      details: {
        zh: '组建创作者团队，打造内容矩阵，多元化收入来源，构建商业生态',
        en: 'Build creator team, develop content matrix, diversify income sources, construct business ecosystem'
      }
    },
    {
      icon: '🚀',
      title: { zh: 'Web3专家', en: 'Web3 Expert' },
      desc: { zh: '深耕新兴领域', en: 'Delve into Emerging Fields' },
      details: {
        zh: 'Web3与交易深度绑定，探索区块链应用，成为细分领域专家',
        en: 'Web3 deeply integrated with trading, explore blockchain applications, become domain expert'
      }
    },
    {
      icon: '📚',
      title: { zh: '在线教育导师', en: 'Online Education Mentor' },
      desc: { zh: '传播知识智慧', en: 'Spread Knowledge' },
      details: {
        zh: '系统化课程设计，知识付费变现，建立终身学习社群',
        en: 'Systematic course design, knowledge monetization, establish lifelong learning community'
      }
    },
    {
      icon: '🌐',
      title: { zh: '元宇宙创业者', en: 'Metaverse Entrepreneur' },
      desc: { zh: '探索未来可能', en: 'Explore Future Possibilities' },
      details: {
        zh: '把握元宇宙机遇，虚拟世界创业，开拓全新商业模式',
        en: 'Seize metaverse opportunities, virtual world entrepreneurship, pioneer new business models'
      }
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Flame Background with Animated Fire Effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #FF6B35 0%, #F98513 50%, #FFB84D 100%)',
              'linear-gradient(135deg, #F98513 0%, #FFB84D 50%, #FF6B35 100%)',
              'linear-gradient(135deg, #FFB84D 0%, #FF6B35 50%, #F98513 100%)',
              'linear-gradient(135deg, #FF6B35 0%, #F98513 50%, #FFB84D 100%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Flame Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              y: [`0px`, `-${Math.random() * 500 + 300}px`],
              opacity: [0.8, 0.6, 0],
              scale: [1, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 5,
            }}
          >
            <div
              className="w-full h-full rounded-full blur-sm"
              style={{
                background: `radial-gradient(circle, rgba(255,${Math.random() * 100 + 100},50,0.9), transparent)`
              }}
            ></div>
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
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-400"></div>
            <span className="text-sm font-bold tracking-widest text-orange-100 uppercase">
              {isZh ? '个人品牌孵化' : 'Brand Incubation'}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 drop-shadow-lg">
            {isZh ? '为什么要做个人品牌孵化？' : 'Why Brand Incubation?'}
          </h2>

          <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 border-2 border-orange-200">
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              {siteConfig.divisions.creator.tagline[language]}
            </div>
          </div>
        </motion.div>

        {/* Core Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm p-12 border-l-8 border-orange-500 shadow-2xl">
            <div className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed mb-6">
              {isZh
                ? '并不是每个人都适合做交易，但也并不是不能做交易就无法在这一行立足。'
                : 'Not everyone is suited for trading, but that doesn\'t mean you can\'t establish yourself in this industry.'}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {isZh
                ? '未来，二级市场交易将和web3深度绑定，在这个领域你可以深耕并成为细分领域的专家，并通过自媒体、在线教育或是未来的元宇宙等方式构建独属于自己的品牌并广泛传播，吸引志同道合的伙伴一起同行。'
                : 'In the future, secondary market trading will be deeply integrated with Web3. In this field, you can become an expert and build your own unique brand through social media, online education, or the metaverse, attracting like-minded partners to journey together.'}
            </p>
          </div>
        </motion.div>

        {/* Career Paths */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-black text-center mb-4 text-white drop-shadow-lg">
            {isZh ? '未来你可以成为' : 'Your Future Paths'}
          </h3>
          <p className="text-center text-orange-100 mb-12 text-xl">
            {isZh ? '六大职业发展方向，总有一条适合你' : 'Six career paths to choose from'}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((path, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedPath(selectedPath === idx ? null : idx)}
                className="cursor-pointer group"
              >
                <div className="bg-white/95 backdrop-blur-sm p-8 border-2 border-orange-200 hover:border-orange-400 transition-all h-full">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4 text-center"
                    animate={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  >
                    {path.icon}
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-2xl font-black text-gray-900 mb-2 text-center">
                    {path.title[language]}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {path.desc[language]}
                  </p>

                  {/* Details */}
                  <AnimatePresence>
                    {selectedPath === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t-2 border-orange-200">
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {path.details[language]}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click indicator */}
                  <div className="text-center mt-4">
                    <span className="text-xs text-orange-600 font-bold">
                      {selectedPath === idx
                        ? (isZh ? '点击收起' : 'Click to collapse')
                        : (isZh ? '点击了解更多' : 'Click for more')}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-sm p-12 border-2 border-orange-300 mb-20"
        >
          <h3 className="text-3xl font-black text-center mb-8 text-gray-900">
            {isZh ? '多元化品牌矩阵' : 'Diversified Brand Matrix'}
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-3">🎨</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {isZh ? '保证独特性' : 'Ensure Uniqueness'}
              </h4>
              <p className="text-gray-600">
                {isZh ? '每个品牌都有自己的特色和定位' : 'Each brand has its own characteristics'}
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3">💪</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {isZh ? '增加支撑' : 'Increase Support'}
              </h4>
              <p className="text-gray-600">
                {isZh ? '品牌背后有完整的资源和支持体系' : 'Complete resource and support system'}
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3">🌟</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {isZh ? '持久生命力' : 'Lasting Vitality'}
              </h4>
              <p className="text-gray-600">
                {isZh ? '最大限度保证品牌的长期发展' : 'Maximize long-term development'}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 border-l-4 border-orange-500">
            <p className="text-lg text-gray-800 leading-relaxed">
              {isZh
                ? '我们将打造多元化品牌矩阵，在保证每个品牌独特性同时增加品牌背后的支撑，最大限度保证品牌的持久力和生命力。'
                : 'We will create a diversified brand matrix, ensuring each brand\'s uniqueness while providing strong support behind it, maximizing brand durability and vitality.'}
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 p-12 text-white text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-6xl mb-6"
          >
            🔥
          </motion.div>

          <h3 className="text-4xl lg:text-5xl font-black mb-6">
            {isZh ? '点燃你的品牌之火' : 'Ignite Your Brand Fire'}
          </h3>

          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            {isZh
              ? '在Web3与交易深度融合的未来，构建属于你自己的品牌帝国'
              : 'In the future where Web3 and trading deeply integrate, build your own brand empire'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
