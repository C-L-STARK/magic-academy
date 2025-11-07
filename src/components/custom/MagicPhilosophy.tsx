"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { siteConfig } from '@/config/site';

export default function MagicPhilosophy() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const demons = [
    {
      name: { zh: '懒惰', en: 'Laziness' },
      icon: '😴',
      description: { zh: '拖延与懈怠', en: 'Procrastination & Sloth' }
    },
    {
      name: { zh: '贪婪', en: 'Greed' },
      icon: '💰',
      description: { zh: '过度追求', en: 'Excessive Pursuit' }
    },
    {
      name: { zh: '恐惧', en: 'Fear' },
      icon: '😨',
      description: { zh: '畏惧不前', en: 'Fear of Progress' }
    },
    {
      name: { zh: '犹豫', en: 'Hesitation' },
      icon: '🤔',
      description: { zh: '迟疑不决', en: 'Indecisiveness' }
    },
    {
      name: { zh: '傲慢', en: 'Pride' },
      icon: '👑',
      description: { zh: '骄傲自负', en: 'Arrogance' }
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Starlight & Glass Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #E8D5FF 0%, #B8E6F5 50%, #F4F1EC 100%)',
              'linear-gradient(135deg, #B8E6F5 0%, #F4F1EC 50%, #E8D5FF 100%)',
              'linear-gradient(135deg, #F4F1EC 0%, #E8D5FF 50%, #B8E6F5 100%)',
              'linear-gradient(135deg, #E8D5FF 0%, #B8E6F5 50%, #F4F1EC 100%)',
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Stars */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <span className="text-sm font-bold tracking-widest text-purple-600 uppercase">
              {isZh ? '魔道哲学' : 'Philosophy of Magic Path'}
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            {isZh ? '入魔道 · 先修心' : 'Enter the Path · Cultivate the Mind'}
          </h2>

          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {siteConfig.brand.description[language]}
          </p>

          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 border-2 border-purple-200">
            <span className="text-4xl">✨</span>
            <div className="text-left">
              <div className="text-sm text-purple-600 font-bold mb-1">{isZh ? '核心理念' : 'Core Philosophy'}</div>
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {isZh ? '自律即自由' : 'Discipline Brings Freedom'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Five Demons to Overcome */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl lg:text-4xl font-black text-center mb-4 text-gray-900">
            {isZh ? '直面内心的五大"魔念"' : 'Face the Five Inner Demons'}
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {isZh ? '战胜它们，你将获得真正的自由' : 'Overcome them to achieve true freedom'}
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {demons.map((demon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 border-2 border-gray-200 hover:border-purple-400 transition-all duration-300 text-center h-full">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      rotate: [0, -10, 10, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {demon.icon}
                  </motion.div>

                  {/* Name */}
                  <h4 className="text-2xl font-black text-gray-900 mb-2">
                    {demon.name[language]}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600">
                    {demon.description[language]}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-12 text-white text-center relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-6xl mb-6"
            >
              🏮
            </motion.div>

            <h3 className="text-3xl lg:text-5xl font-black mb-6">
              {isZh ? '这里既是修道场，也是桃花源' : 'Both Training Ground & Utopia'}
            </h3>

            <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
              {siteConfig.brand.vision[language]}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
                <div className="text-sm font-bold opacity-80 mb-1">{isZh ? '无员工' : 'No Employees'}</div>
                <div className="text-2xl font-black">{isZh ? '只有战友' : 'Only Comrades'}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
                <div className="text-sm font-bold opacity-80 mb-1">{isZh ? '无打工人' : 'No Workers'}</div>
                <div className="text-2xl font-black">{isZh ? '只有合伙人' : 'Only Partners'}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 border-2 border-white/30">
                <div className="text-sm font-bold opacity-80 mb-1">{isZh ? '无老板' : 'No Boss'}</div>
                <div className="text-2xl font-black">{isZh ? '你就是老板' : 'You Are The Boss'}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
