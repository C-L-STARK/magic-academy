"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMode } from '@/contexts/ModeContext';
import { siteConfig } from '@/config/site';
import LocaleLink from '@/components/navigation/LocaleLink';
import EmailContactModal from '@/components/custom/EmailContactModal';
import MagicPhilosophy from '@/components/custom/MagicPhilosophy';
import Image from 'next/image';

// Typewriter Component for Title - WITH LOOP
function TypewriterTitle({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimer);
    }

    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing mode
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait 2 seconds then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting mode
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, wait 500ms then start typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, delay, hasStarted]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 lg:h-12 bg-gray-900 ml-1"
      />
    </span>
  );
}

// Rotating Text Component
function RotatingText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            {texts[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Counter Animation Component
function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  const { language } = useLanguage();
  const { theme } = useMode();
  const router = useRouter();
  const isZh = language === 'zh';
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const divisions = [
    siteConfig.divisions.trading,
    siteConfig.divisions.creator,
  ];

  // Rotating descriptions
  const rotatingTexts = isZh ? [
    '自律即自由：战胜懒惰、贪婪、恐惧、犹豫、傲慢',
    '职业交易培训：留下极少数，劝返大多数，你材必有他用',
    '个人品牌孵化：注重自我成长，构建属于自己的品牌',
    '这里既是修道场，也是桃花源',
    '无员工，只有战友、合作伙伴，你就是老板'
  ] : [
    'Discipline Brings Freedom: Overcome inner demons',
    'Trading: Keep the Few, Return the Many',
    'Branding: Focus on Growth, Build Your Brand',
    'Both Training Ground and Utopia',
    'No Employees, Only Comrades - You Are The Boss'
  ];

  // Testimonials data - expanded
  const testimonials = [
    {
      name: isZh ? '小李' : 'Li',
      role: isZh ? '交易学员 · 90后' : 'Trading Student · Post-90s',
      content: isZh
        ? '30天通过考核，现在每月稳定收益3万+，完全实现了时间和财务自由。感谢魔道院的系统化培训，让我从零基础小白成长为专业交易员。'
        : 'Passed evaluation in 30 days, now earning $4k+ monthly with complete time and financial freedom. Thanks to systematic training from Magic Academy.',
      color: '#9BACD8',
      gradient: 'from-blue-500 to-blue-600',
      income: isZh ? '月收入 3万+' : 'Monthly $4k+',
    },
    {
      name: isZh ? '王老师' : 'Wang',
      role: isZh ? '在线教育 · 前程序员' : 'Online Education · Ex-Developer',
      content: isZh
        ? '从0到1搭建了自己的在线课程平台，3个月学员破千，月收入10万+。这是我人生的转折点，终于实现了知识变现的梦想。'
        : 'Built online course platform from scratch, 1000+ students in 3 months, earning $14k+ monthly. A true turning point in my life.',
      color: '#F98513',
      gradient: 'from-orange-500 to-orange-600',
      income: isZh ? '月收入 10万+' : 'Monthly $14k+',
    },
    {
      name: isZh ? '阿杰' : 'Jie',
      role: isZh ? '自媒体运营 · 全职博主' : 'Social Media · Full-time Blogger',
      content: isZh
        ? '全平台运营半年，粉丝50万+，品牌合作接到手软。现在是真正的数字游民，边旅行边工作，生活质量提升了十倍！'
        : '500k+ followers in 6 months, endless brand deals. True digital nomad life - working while traveling, 10x better quality of life!',
      color: '#F98513',
      gradient: 'from-orange-500 to-orange-600',
      income: isZh ? '月收入 8万+' : 'Monthly $11k+',
    },
    {
      name: isZh ? 'Sarah' : 'Sarah',
      role: isZh ? '交易学员 · 宝妈' : 'Trading Student · Mom',
      content: isZh
        ? '在家带娃的同时实现了财务独立，每天2小时交易时间，月收入稳定在2万以上。魔道院让我找到了事业和家庭的完美平衡。'
        : 'Achieved financial independence while raising kids at home. 2 hours daily trading, earning $3k+ monthly. Perfect work-life balance.',
      color: '#9BACD8',
      gradient: 'from-blue-500 to-blue-600',
      income: isZh ? '月收入 2万+' : 'Monthly $3k+',
    },
    {
      name: isZh ? '张明' : 'Ming',
      role: isZh ? '个人品牌 · 前销售' : 'Personal Brand · Ex-Sales',
      content: isZh
        ? '从传统销售转型到线上品牌运营，6个月打造了20万粉丝矩阵，现在每月躺赚5万+。感恩魔道院教会我系统化的品牌孵化方法。'
        : 'Transitioned from traditional sales to online branding, built 200k follower matrix in 6 months, passive income $7k+ monthly.',
      color: '#F98513',
      gradient: 'from-orange-500 to-orange-600',
      income: isZh ? '月收入 5万+' : 'Monthly $7k+',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Screen with NO TOP PADDING */}
      <div
        className="relative min-h-screen flex items-center overflow-hidden -mt-16 pt-16"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 50%, #F98513 100%)',
                'linear-gradient(135deg, #F4F1EC 0%, #F98513 50%, #9BACD8 100%)',
                'linear-gradient(135deg, #9BACD8 0%, #F4F1EC 50%, #F98513 100%)',
                'linear-gradient(135deg, #F4F1EC 0%, #9BACD8 50%, #F98513 100%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        {/* Enhanced Animated Floating Elements */}
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

          {/* Small Dots */}
          {[...Array(30)].map((_, i) => (
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

          {/* Geometric Shapes */}
          <motion.div
            className="absolute w-40 h-40 border-4 border-orange-400/30"
            style={{ top: '20%', right: '15%', transform: 'rotate(45deg)' }}
            animate={{
              rotate: [45, 135, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full border-4 border-blue-400/30"
            style={{ bottom: '15%', left: '20%' }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - WITH ANIMATIONS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-3">
                {/* Main Heading with Typewriter */}
                <h1 className="text-5xl lg:text-7xl font-black leading-tight min-h-[160px] lg:min-h-[200px]">
                  <span className="block text-gray-900">
                    <TypewriterTitle text={isZh ? "入魔道 · 修心修身" : "Enter Magic Path"} delay={300} />
                  </span>
                  <span className="block text-gray-900 mt-2">
                    <TypewriterTitle text={isZh ? "成真正数字游民" : "Become Free" } delay={isZh ? 2000 : 1500} />
                  </span>
                </h1>

                {/* Rotating Descriptions */}
                <motion.div
                  className="max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 0.6 }}
                >
                  <RotatingText texts={rotatingTexts} />
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4, duration: 0.6 }}
                >
                  <button
                    onClick={() => router.push(`/${language}/training/forex`)}
                    className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {siteConfig.divisions.trading.name[language]}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>

                  <button
                    onClick={() => router.push(`/${language}/training/social-media`)}
                    className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {siteConfig.divisions.creator.name[language]}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </motion.div>

                {/* Contact Link */}
                <motion.button
                  onClick={() => setIsEmailModalOpen(true)}
                  className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.5, duration: 0.6 }}
                >
                  {isZh ? '或联系我们了解更多' : 'Or contact us to learn more'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Animation Area - ENHANCED & LESS CROWDED */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Floating Gallery - More Photos */}
              <div className="relative w-full h-full">
                {/* Image 1 - Top Right */}
                <motion.div
                  className="absolute top-0 right-0 w-72 h-52 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/travel-1.png"
                    alt="Digital Nomad"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Image 2 - Middle Left */}
                <motion.div
                  className="absolute top-40 left-0 w-64 h-48 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, 25, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Image
                    src="/travel-2.png"
                    alt="Freedom Life"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Image 3 - Bottom Right */}
                <motion.div
                  className="absolute bottom-0 right-20 w-60 h-44 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Image
                    src="/travel-3.png"
                    alt="Work Anywhere"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Image 4 - Top Left */}
                <motion.div
                  className="absolute top-16 left-8 w-56 h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, 18, 0],
                    rotate: [0, -1, 0],
                  }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Image
                    src="/travel-4.png"
                    alt="Remote Work"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Image 5 - Middle Right */}
                <motion.div
                  className="absolute top-1/2 right-12 w-52 h-40 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, -22, 0],
                    rotate: [0, 1.5, 0],
                  }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <Image
                    src="/travel-5.png"
                    alt="Digital Life"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Image 6 - Bottom Left */}
                <motion.div
                  className="absolute bottom-16 left-24 w-48 h-36 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
                  animate={{
                    y: [0, -16, 0],
                    rotate: [0, -1.5, 0],
                  }}
                  transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                >
                  <Image
                    src="/travel-6.png"
                    alt="Travel Freedom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Small Data Tags - Scattered */}
                {/* Students Tag */}
                <motion.div
                  className="absolute top-20 left-12 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-xl border-2 border-orange-200"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                      1000+
                    </div>
                  </div>
                </motion.div>

                {/* Success Rate Tag */}
                <motion.div
                  className="absolute top-1/2 right-8 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-xl border-2 border-blue-200"
                  animate={{
                    x: [0, -10, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                      85%
                    </div>
                  </div>
                </motion.div>

                {/* Income Tag */}
                <motion.div
                  className="absolute bottom-24 left-16 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-xl border-2 border-green-200"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                      {isZh ? '¥2M+' : '$280k+'}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Text Snippets */}
                <motion.div
                  className="absolute top-10 right-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 shadow-xl text-sm font-bold"
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {isZh ? '30天速成' : '30-Day Fast Track'}
                </motion.div>

                <motion.div
                  className="absolute top-1/3 right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 shadow-xl text-sm font-bold"
                  animate={{
                    x: [0, -12, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  {isZh ? '全程指导' : 'Full Mentorship'}
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 shadow-xl text-sm font-bold"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  {isZh ? '实现自由' : 'Achieve Freedom'}
                </motion.div>

                {/* Achievement Badge */}
                <motion.div
                  className="absolute top-1/2 left-8 bg-white/95 backdrop-blur-xl px-3 py-2 shadow-xl border-2 border-yellow-200"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-xs font-black text-gray-900">{isZh ? '认证' : 'Cert'}</div>
                  </div>
                </motion.div>

                {/* Motivational Quote */}
                <motion.div
                  className="absolute bottom-20 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 shadow-xl max-w-xs"
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="text-sm font-bold leading-relaxed">
                    {isZh ? '"财务自由，理想生活"' : '"Freedom & Dreams"'}
                  </div>
                </motion.div>

                {/* Additional Small Tags */}
                <motion.div
                  className="absolute top-2/3 left-24 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-3 py-1.5 shadow-lg text-xs font-bold"
                  animate={{
                    rotate: [0, 3, 0],
                    y: [0, 8, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                >
                  {isZh ? '终身支持' : 'Lifetime'}
                </motion.div>

                <motion.div
                  className="absolute top-1/4 right-32 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1.5 shadow-lg text-xs font-bold"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  {isZh ? '快速变现' : 'Quick ROI'}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-700 font-medium">{isZh ? '向下滚动' : 'Scroll Down'}</span>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Features Showcase Section - EXPANDED CONTENT */}
      <div className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9BACD8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {isZh ? '核心优势' : 'Core Advantages'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '为什么选择我们？' : 'Why Choose Us?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isZh ? '六大核心优势，全方位保障你的成功之路' : 'Six core advantages to ensure your path to success'}
            </p>
          </motion.div>

          {/* Features Grid - EXPANDED */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: isZh ? '实战导向' : 'Practice-Oriented',
                desc: isZh ? '所有课程来自一线实战经验，确保学以致用，快速见效。我们的导师团队拥有多年行业经验，每一个教学案例都是真实项目的提炼，让你学到的不仅是理论，更是可以直接应用的实战技能。' : 'All courses from frontline experience, ensuring practical application and quick results. Our mentor team has years of industry experience.',
                color: '#F98513',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                stats: isZh ? '100+ 实战案例' : '100+ Real Cases',
              },
              {
                number: '02',
                title: isZh ? '快速变现' : 'Quick Monetization',
                desc: isZh ? '最快30天即可看到收益，持续稳定增长，实现财务自由。我们提供完整的商业化路径规划，从技能学习到变现落地，每一步都有明确的指导和支持，确保你的投入能够快速获得回报。' : 'See results in as fast as 30 days with continuous stable growth. Complete commercialization path planning from learning to monetization.',
                color: '#9BACD8',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                stats: isZh ? '平均 30-90天变现' : 'Avg 30-90 Days',
              },
              {
                number: '03',
                title: isZh ? '终身支持' : 'Lifetime Support',
                desc: isZh ? '学习社群+导师答疑，持续更新课程，与优秀同行者共成长。加入魔道院不仅是学习一门技能，更是加入一个充满活力的成长社群，在这里你可以获得持续的学习资源和人脉资源。' : 'Learning community with mentor support and continuous course updates. Join a vibrant growth community with ongoing learning resources.',
                color: '#F98513',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                stats: isZh ? '24/7 社群支持' : '24/7 Support',
              },
              {
                number: '04',
                title: isZh ? '系统化培养' : 'Systematic Training',
                desc: isZh ? '从入门到精通的完整学习路径，科学的课程体系设计，循序渐进地提升你的能力。我们的课程经过数百名学员的实践验证，每个模块都经过精心打磨，确保最优的学习效果和知识吸收率。' : 'Complete learning path from beginner to expert with scientifically designed curriculum. Verified by hundreds of students for optimal results.',
                color: '#9BACD8',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                stats: isZh ? '5阶段进阶体系' : '5-Stage System',
              },
              {
                number: '05',
                title: isZh ? '资源对接' : 'Resource Connection',
                desc: isZh ? '对接行业优质资源，提供平台支持和资金支持，让你的起步更轻松。我们与多家知名企业和平台建立了合作关系，可以为优秀学员提供实习机会、项目合作、资金支持等多方位的资源对接服务。' : 'Connect with premium industry resources, platform and funding support for an easier start. Partnerships with companies offer opportunities and funding.',
                color: '#F98513',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                stats: isZh ? '50+ 合作伙伴' : '50+ Partners',
              },
              {
                number: '06',
                title: isZh ? '成果保障' : 'Results Guaranteed',
                desc: isZh ? '完善的考核体系和成果追踪机制，确保你的学习成果可量化、可验证。我们会定期评估你的学习进度和成果，及时调整学习计划，确保每一位学员都能达到预期目标，真正实现能力提升和收入增长。' : 'Complete assessment system and results tracking to ensure measurable and verifiable learning outcomes with regular progress evaluations.',
                color: '#9BACD8',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                stats: isZh ? '85% 达标率' : '85% Pass Rate',
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
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 h-full">
                  {/* Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                      {feature.number}
                    </span>
                    <div className="p-3 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 text-sm font-bold" style={{ color: feature.color }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature.stats}</span>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                    style={{ background: `radial-gradient(circle, ${feature.color}, transparent)` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Magic Philosophy Section */}
      <MagicPhilosophy />

      {/* Two Divisions Section - ELEGANT REDESIGN */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Floating gradient blobs */}
          <motion.div
            className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #F98513, transparent 70%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #9BACD8, transparent 70%)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="px-5 py-2 bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-orange-200 text-orange-600 text-sm font-black tracking-widest uppercase">
                {isZh ? '双轨并行' : 'Dual Tracks'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              {isZh ? '选择你的' : 'Choose Your'}
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500">
                  {isZh ? '成功赛道' : 'Success Track'}
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {isZh
                ? '两大核心培训体系，助你实现财务自由与个人价值。从入门到精通，我们提供完整的成长路径'
                : 'Two core training systems to achieve financial freedom and personal value. From beginner to expert, we provide complete growth paths'}
            </p>
          </motion.div>

          {/* Division Cards */}
          <div className="grid lg:grid-cols-2 gap-10">
            {divisions.map((division, idx) => (
              <motion.div
                key={division.path}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-t-8 overflow-hidden"
                  style={{ borderColor: division.color }}>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity group-hover:opacity-20"
                    style={{
                      background: `radial-gradient(circle at top right, ${division.color}, transparent 70%)`
                    }}
                  />

                  {/* Number Badge - Elegant */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 blur-xl opacity-30"
                          style={{ backgroundColor: division.color }}
                        />
                        <div className="relative w-20 h-20 flex items-center justify-center border-4 text-4xl font-black text-white shadow-lg"
                          style={{
                            backgroundColor: division.color,
                            borderColor: `${division.color}33`
                          }}>
                          0{idx + 1}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                          {isZh ? '赛道' : 'Track'} {idx + 1}
                        </div>
                        <div className="text-sm font-bold px-3 py-1 inline-block"
                          style={{
                            backgroundColor: `${division.color}15`,
                            color: division.color
                          }}>
                          {isZh ? '🔥 热门课程' : '🔥 Hot Course'}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                    {division.name[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {division.description[language]}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

                  {/* Features - Two Columns */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {division.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + fidx * 0.05 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-6 h-6 flex items-center justify-center transition-colors"
                            style={{ color: division.color }}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700 text-sm font-medium leading-snug">
                          {feature[language]}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 border border-gray-200">
                      <div className="text-3xl font-black mb-1"
                        style={{ color: division.color }}>
                        {idx === 0 ? '30' : '90'}
                      </div>
                      <div className="text-xs text-gray-600 font-bold uppercase">
                        {isZh ? '天周期' : 'Days'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 border border-gray-200">
                      <div className="text-3xl font-black mb-1"
                        style={{ color: division.color }}>
                        {idx === 0 ? (isZh ? '3万+' : '$4k+') : (isZh ? '5万+' : '$7k+')}
                      </div>
                      <div className="text-xs text-gray-600 font-bold uppercase">
                        {isZh ? '月收入' : 'Monthly'}
                      </div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 border border-gray-200">
                      <div className="text-3xl font-black mb-1"
                        style={{ color: division.color }}>
                        {isZh ? '85%' : '85%'}
                      </div>
                      <div className="text-xs text-gray-600 font-bold uppercase">
                        {isZh ? '成功率' : 'Success'}
                      </div>
                    </div>
                  </div>

                  {/* Additional Info Box */}
                  <div className="mb-8 p-5 border-l-4"
                    style={{
                      backgroundColor: `${division.color}08`,
                      borderColor: division.color
                    }}>
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold" style={{ color: division.color }}>
                        {isZh ? '培训亮点：' : 'Highlights: '}
                      </span>
                      {idx === 0
                        ? (isZh ? '系统化交易培训，实战考核，资金支持。通过严格筛选，成为职业交易员，获得60-90%利润分成。' : 'Systematic trading training, practical assessment, funding support. Pass strict selection to become a professional trader with 60-90% profit share.')
                        : (isZh ? '全平台运营策略，AI工具加持，终身社群支持。从定位到变现，打造你的个人品牌影响力。' : 'Multi-platform strategy, AI-powered tools, lifetime community support. From positioning to monetization, build your personal brand influence.')
                      }
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push(`/${language}${division.path}`)}
                    className="group/btn w-full px-8 py-5 font-bold text-white text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                    style={{ backgroundColor: division.color }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isZh ? '了解详情' : 'Learn More'}
                      <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-10 transition-opacity"></div>
                  </button>

                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: division.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.5, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-orange-50 via-white to-blue-50 p-10 border-2 border-gray-200"
          >
            <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
              {isZh ? '如何选择适合你的赛道？' : 'How to Choose Your Track?'}
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {isZh ? '选择职业交易培训，如果你：' : 'Choose Trading Training if you:'}
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{isZh ? '对金融市场充满兴趣，愿意深入学习交易技能' : 'Interested in financial markets and willing to learn trading skills'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{isZh ? '希望通过系统化培训快速成为职业交易员' : 'Want to quickly become a professional trader through systematic training'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{isZh ? '追求高收益，愿意接受考核和挑战' : 'Pursuing high returns and willing to accept assessments and challenges'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {isZh ? '选择个人品牌孵化，如果你：' : 'Choose Brand Incubation if you:'}
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{isZh ? '热爱内容创作，擅长表达和分享' : 'Love content creation, good at expression and sharing'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{isZh ? '希望打造个人影响力，建立长期品牌价值' : 'Want to build personal influence and establish long-term brand value'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{isZh ? '追求多元化收入来源和职业自由' : 'Pursuing diversified income sources and career freedom'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-gray-200 text-center">
              <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
                {isZh
                  ? '无论你选择哪条赛道，我们都将提供完整的培训体系、专业的导师指导和持续的社群支持，助你实现目标！'
                  : 'Whichever track you choose, we provide complete training systems, professional mentorship, and continuous community support to help you achieve your goals!'}
              </p>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {isZh ? '免费咨询，获取定制方案' : 'Free Consultation for Customized Plan'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - REDESIGNED with MORE DATA and COUNTER ANIMATION */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                {isZh ? '真实数据' : 'Real Data'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
              {isZh ? '用数据说话' : 'Numbers Speak Louder'}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {isZh ? '真实的成果，可见的成长，这些数字代表了无数学员的成功故事' : 'Real results, visible growth - these numbers represent countless success stories'}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                value: 1000,
                suffix: '+',
                label: { zh: '累计学员', en: 'Total Students' },
                description: { zh: '遍布全球的学员', en: 'Worldwide' },
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: 'from-blue-400 to-cyan-400',
                glowColor: 'rgba(59, 130, 246, 0.3)',
              },
              {
                value: 85,
                suffix: '%',
                label: { zh: '成功达标率', en: 'Success Rate' },
                description: { zh: '学员成功达标', en: 'Achievement' },
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-green-400 to-emerald-400',
                glowColor: 'rgba(34, 197, 94, 0.3)',
              },
              {
                value: isZh ? 200 : 2800,
                suffix: isZh ? '万+' : 'k+',
                label: { zh: '学员总收入', en: 'Total Income' },
                description: { zh: '学员累计收入', en: 'Cumulative' },
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-orange-400 to-amber-400',
                glowColor: 'rgba(249, 115, 22, 0.3)',
              },
              {
                value: 95,
                suffix: '%',
                label: { zh: '学员满意度', en: 'Satisfaction' },
                description: { zh: '极高满意度', en: 'Highly Rated' },
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'from-purple-400 to-pink-400',
                glowColor: 'rgba(168, 85, 247, 0.3)',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: `radial-gradient(circle at center, ${stat.glowColor}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>

                    {/* Counter */}
                    <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                    </div>

                    {/* Label */}
                    <div className="text-white text-base font-bold mb-1">
                      {stat.label[language]}
                    </div>

                    {/* Description */}
                    <div className="text-gray-400 text-sm">
                      {stat.description[language]}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: 30,
                suffix: isZh ? '天' : 'D',
                label: { zh: '最快见效', en: 'Fast Results' },
                icon: '⚡',
              },
              {
                value: 100,
                suffix: '+',
                label: { zh: '实战案例', en: 'Real Cases' },
                icon: '📊',
              },
              {
                value: 50,
                suffix: '+',
                label: { zh: '合作伙伴', en: 'Partners' },
                icon: '🤝',
              },
              {
                value: 24,
                suffix: '/7',
                label: { zh: '在线支持', en: '24/7 Support' },
                icon: '💬',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black text-white mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                    {stat.label[language]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - TWO-ROW AUTO-SCROLL */}
      <div className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {isZh ? '学员故事' : 'Success Stories'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '他们已经成功了' : 'They Already Succeeded'}
            </h2>
            <p className="text-xl text-gray-600">
              {isZh ? '听听真实学员的成功经历和收获' : 'Hear from real students about their success and growth'}
            </p>
          </motion.div>

          {/* Two-Row Infinite Scroll Container */}
          <div className="space-y-6">
            {/* First Row - Scroll Left */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -2400],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...Array(3)].map((_, setIdx) => (
                  <React.Fragment key={setIdx}>
                    {testimonials.slice(0, 3).map((testimonial, idx) => (
                      <div
                        key={`${setIdx}-${idx}`}
                        className="group relative flex-shrink-0 w-96"
                      >
                        <div className="bg-white border-2 border-gray-200 p-8 hover:border-gray-300 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
                          {/* Quote Mark */}
                          <div className={`text-6xl font-serif leading-none mb-4 bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}>
                            "
                          </div>

                          {/* Content */}
                          <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-base">
                            {testimonial.content}
                          </p>

                          {/* Income Badge */}
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${testimonial.gradient} text-white px-4 py-2 text-sm font-bold mb-6 w-fit`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{testimonial.income}</span>
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center gap-4 pt-6 border-t-2" style={{ borderColor: testimonial.color }}>
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                              {testimonial.name[0]}
                            </div>
                            <div>
                              <div className="font-black text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div
                          className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                          style={{ background: `linear-gradient(135deg, ${testimonial.color}, transparent)` }}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Scroll Right */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [-2400, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...Array(3)].map((_, setIdx) => (
                  <React.Fragment key={setIdx}>
                    {testimonials.slice(2, 5).map((testimonial, idx) => (
                      <div
                        key={`${setIdx}-${idx}`}
                        className="group relative flex-shrink-0 w-96"
                      >
                        <div className="bg-white border-2 border-gray-200 p-8 hover:border-gray-300 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
                          {/* Quote Mark */}
                          <div className={`text-6xl font-serif leading-none mb-4 bg-gradient-to-br ${testimonial.gradient} bg-clip-text text-transparent`}>
                            "
                          </div>

                          {/* Content */}
                          <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-base">
                            {testimonial.content}
                          </p>

                          {/* Income Badge */}
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${testimonial.gradient} text-white px-4 py-2 text-sm font-bold mb-6 w-fit`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>{testimonial.income}</span>
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center gap-4 pt-6 border-t-2" style={{ borderColor: testimonial.color }}>
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-black text-xl flex-shrink-0`}>
                              {testimonial.name[0]}
                            </div>
                            <div>
                              <div className="font-black text-gray-900">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Glow */}
                        <div
                          className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                          style={{ background: `linear-gradient(135deg, ${testimonial.color}, transparent)` }}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Images Showcase - INFINITE SCROLL */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {isZh ? '自由生活' : 'Freedom Life'}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              {isZh ? '边工作，边旅行' : 'Work While Traveling'}
            </h2>
            <p className="text-xl text-gray-600">
              {isZh ? '数字游民的精彩生活，这就是你的未来' : 'The exciting life of digital nomads - this is your future'}
            </p>
          </motion.div>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={`${setIdx}-${num}`}
                      className="relative w-80 h-80 flex-shrink-0 overflow-hidden border-4 border-white shadow-xl group cursor-pointer"
                    >
                      <Image
                        src={`/travel-${num}.png`}
                        alt={`Travel ${num}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="text-white font-bold text-lg mb-2">
                            {isZh ? '探索世界' : 'Explore World'}
                          </div>
                          <div className="text-white/80 text-sm">
                            {isZh ? '实现地理位置自由' : 'Location Independence'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Final CTA - ENHANCED */}
      <div className="relative py-32 bg-gray-900 overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                {isZh ? '现在就开始' : 'Start Now'}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-400"></div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              {isZh ? '开启你的' : 'Start Your'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                {isZh ? '自由人生' : 'Freedom Journey'}
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {isZh
                ? '无论你选择交易还是个人品牌，我们都有完整的培养体系和成功案例来帮助你。不要再犹豫，你离财务自由只差一个决定。'
                : 'Whether you choose trading or personal branding, we have complete training systems and success cases to help you. Don\'t hesitate - you\'re just one decision away from financial freedom.'}
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: '⚡', text: isZh ? '30天快速起步' : '30-Day Fast Start' },
                { icon: '🎯', text: isZh ? '系统化培训' : 'Systematic Training' },
                { icon: '💰', text: isZh ? '持续收入增长' : 'Continuous Growth' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-white font-bold">{item.text}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button
                onClick={() => router.push(`/${language}/training/forex`)}
                className="group px-12 py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isZh ? '职业交易培训' : 'Trading Course'}
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

              <button
                onClick={() => router.push(`/${language}/training/social-media`)}
                className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isZh ? '个人品牌孵化' : 'Brand Incubation'}
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            {/* Additional CTA Info */}
            <div className="flex flex-col items-center gap-4">
              <motion.button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                {isZh ? '或联系我们了解更多详情' : 'Or contact us for more details'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>

              <div className="text-gray-500 text-sm">
                {isZh ? '📧 回复快速 | 💬 免费咨询 | 🎁 赠送学习资料' : '📧 Quick Response | 💬 Free Consultation | 🎁 Learning Materials'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Contact Modal */}
      <EmailContactModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}
